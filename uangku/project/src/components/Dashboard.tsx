import React, { useState, useMemo } from 'react';
import { Plus, TrendingUp, TrendingDown, Wallet, Target, Calendar, Search, Filter, Heart } from 'lucide-react';
import TransactionList from './TransactionList';
import AddTransactionModal from './AddTransactionModal';
import CategoryManager from './CategoryManager';
import BudgetTracker from './BudgetTracker';
import FinancialChart from './FinancialChart';
import { Transaction, Category, Budget } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { defaultCategories } from '../data/defaultData';

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('transactions', []);
  const [categories, setCategories] = useLocalStorage<Category[]>('categories', defaultCategories);
  const [budgets, setBudgets] = useLocalStorage<Budget[]>('budgets', []);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions' | 'budget' | 'categories'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const currentMonth = new Date().toISOString().slice(0, 7);

  const monthlyStats = useMemo(() => {
    const currentMonthTransactions = transactions.filter(t => 
      t.date.startsWith(currentMonth)
    );

    const income = currentMonthTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = currentMonthTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expenses,
      balance: income - expenses,
      transactionCount: currentMonthTransactions.length
    };
  }, [transactions, currentMonth]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [transactions, searchTerm, filterCategory]);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id' | 'createdAt'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-pink-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  UangKu
                </h1>
                <p className="text-sm text-pink-600/70">Kelola keuangan dengan cinta</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white rounded-2xl hover:from-pink-500 hover:via-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              <Plus className="w-5 h-5 mr-2" />
              Tambah Transaksi
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 bg-white/80 backdrop-blur-md p-2 rounded-3xl mb-8 shadow-lg border border-pink-200/30">
          {[
            { id: 'overview', label: 'Ringkasan', icon: TrendingUp },
            { id: 'transactions', label: 'Transaksi', icon: Calendar },
            { id: 'budget', label: 'Budget', icon: Target },
            { id: 'categories', label: 'Kategori', icon: Filter }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-6 py-3 rounded-2xl transition-all duration-300 font-medium ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg transform scale-105'
                  : 'text-pink-600 hover:text-pink-700 hover:bg-pink-50'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-pink-600/70">Total Saldo</p>
                    <p className={`text-2xl font-bold ${monthlyStats.balance >= 0 ? 'text-pink-600' : 'text-rose-500'}`}>
                      {formatCurrency(monthlyStats.balance)}
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    monthlyStats.balance >= 0 ? 'bg-pink-100' : 'bg-rose-100'
                  }`}>
                    <Wallet className={`w-7 h-7 ${monthlyStats.balance >= 0 ? 'text-pink-500' : 'text-rose-500'}`} />
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-pink-600/70">Pemasukan</p>
                    <p className="text-2xl font-bold text-pink-600">{formatCurrency(monthlyStats.income)}</p>
                  </div>
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-pink-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-pink-600/70">Pengeluaran</p>
                    <p className="text-2xl font-bold text-rose-500">{formatCurrency(monthlyStats.expenses)}</p>
                  </div>
                  <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center">
                    <TrendingDown className="w-7 h-7 text-rose-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-pink-600/70">Transaksi</p>
                    <p className="text-2xl font-bold text-pink-600">{monthlyStats.transactionCount}</p>
                  </div>
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-pink-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-pink-200/30">
              <FinancialChart transactions={transactions} />
            </div>

            {/* Recent Transactions */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-pink-200/30">
              <h3 className="text-xl font-bold text-pink-700 mb-6">Transaksi Terbaru</h3>
              <TransactionList 
                transactions={transactions.slice(0, 5)} 
                categories={categories}
                onDelete={handleDeleteTransaction}
                formatCurrency={formatCurrency}
              />
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 absolute left-4 top-4 text-pink-400" />
                  <input
                    type="text"
                    placeholder="Cari transaksi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                  />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                >
                  <option value="all">Semua Kategori</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-pink-200/30">
              <TransactionList 
                transactions={filteredTransactions} 
                categories={categories}
                onDelete={handleDeleteTransaction}
                formatCurrency={formatCurrency}
              />
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <BudgetTracker 
            budgets={budgets}
            setBudgets={setBudgets}
            transactions={transactions}
            categories={categories}
            formatCurrency={formatCurrency}
          />
        )}

        {activeTab === 'categories' && (
          <CategoryManager 
            categories={categories}
            setCategories={setCategories}
          />
        )}
      </div>

      <AddTransactionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTransaction}
        categories={categories}
      />
    </div>
  );
};

export default Dashboard;