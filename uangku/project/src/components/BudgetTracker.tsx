import React, { useState, useMemo } from 'react';
import { Plus, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { Budget, Transaction, Category } from '../types';

interface BudgetTrackerProps {
  budgets: Budget[];
  setBudgets: (budgets: Budget[]) => void;
  transactions: Transaction[];
  categories: Category[];
  formatCurrency: (amount: number) => string;
}

const BudgetTracker: React.FC<BudgetTrackerProps> = ({
  budgets,
  setBudgets,
  transactions,
  categories,
  formatCurrency
}) => {
  const [isAddingBudget, setIsAddingBudget] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    limit: '',
    month: new Date().toISOString().slice(0, 7)
  });

  const currentMonth = new Date().toISOString().slice(0, 7);

  const budgetData = useMemo(() => {
    return budgets.map(budget => {
      const spent = transactions
        .filter(t => 
          t.type === 'expense' && 
          t.category === budget.category && 
          t.date.startsWith(budget.month)
        )
        .reduce((sum, t) => sum + t.amount, 0);

      const percentage = budget.limit > 0 ? (spent / budget.limit) * 100 : 0;
      
      return {
        ...budget,
        spent,
        percentage,
        remaining: budget.limit - spent,
        status: percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : 'good'
      };
    });
  }, [budgets, transactions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.category || !formData.limit) return;

    const newBudget: Budget = {
      id: Date.now().toString(),
      category: formData.category,
      limit: parseFloat(formData.limit),
      spent: 0,
      month: formData.month
    };

    setBudgets([...budgets, newBudget]);
    setFormData({ category: '', limit: '', month: currentMonth });
    setIsAddingBudget(false);
  };

  const handleDelete = (id: string) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
  };

  const expenseCategories = categories.filter(cat => cat.type === 'expense');

  return (
    <div className="space-y-6">
      {/* Add Budget Button */}
      {!isAddingBudget && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
          <button
            onClick={() => setIsAddingBudget(true)}
            className="w-full flex items-center justify-center px-6 py-4 border-2 border-dashed border-pink-300 rounded-2xl text-pink-600 hover:border-pink-400 hover:text-pink-700 hover:bg-pink-50 transition-all duration-300 font-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            Tambah Budget Baru
          </button>
        </div>
      )}

      {/* Add Budget Form */}
      {isAddingBudget && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
          <h3 className="text-xl font-bold text-pink-700 mb-6">Tambah Budget</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Kategori
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                required
              >
                <option value="">Pilih kategori</option>
                {expenseCategories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Batas Budget
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-pink-500 font-medium">Rp</span>
                <input
                  type="number"
                  value={formData.limit}
                  onChange={(e) => setFormData(prev => ({ ...prev, limit: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Bulan
              </label>
              <input
                type="month"
                value={formData.month}
                onChange={(e) => setFormData(prev => ({ ...prev, month: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                required
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-2xl hover:from-pink-500 hover:to-rose-500 transition-all duration-300 font-medium shadow-lg"
              >
                Tambah Budget
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingBudget(false);
                  setFormData({ category: '', limit: '', month: currentMonth });
                }}
                className="flex-1 px-4 py-3 bg-pink-100 text-pink-700 rounded-2xl hover:bg-pink-200 transition-all duration-300 font-medium"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Budget List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {budgetData.map(budget => (
          <div
            key={budget.id}
            className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  budget.status === 'exceeded' ? 'bg-rose-100' :
                  budget.status === 'warning' ? 'bg-orange-100' : 'bg-pink-100'
                }`}>
                  {budget.status === 'exceeded' ? (
                    <AlertTriangle className="w-6 h-6 text-rose-500" />
                  ) : budget.status === 'warning' ? (
                    <Target className="w-6 h-6 text-orange-500" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-pink-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-pink-800">{budget.category}</h4>
                  <p className="text-sm text-pink-500">
                    {new Date(budget.month + '-01').toLocaleDateString('id-ID', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => handleDelete(budget.id)}
                className="text-pink-400 hover:text-rose-500 transition-colors duration-200 p-2 rounded-xl hover:bg-rose-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-pink-600">Terpakai</span>
                <span className="font-semibold text-pink-800">{formatCurrency(budget.spent)}</span>
              </div>
              
              <div className="w-full bg-pink-100 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    budget.status === 'exceeded' ? 'bg-gradient-to-r from-rose-400 to-rose-500' :
                    budget.status === 'warning' ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 
                    'bg-gradient-to-r from-pink-400 to-rose-400'
                  }`}
                  style={{ width: `${Math.min(budget.percentage, 100)}%` }}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-pink-600">Batas</span>
                <span className="font-semibold text-pink-800">{formatCurrency(budget.limit)}</span>
              </div>
              
              <div className={`text-center py-3 px-4 rounded-2xl font-medium ${
                budget.status === 'exceeded' ? 'bg-rose-50 text-rose-700' :
                budget.status === 'warning' ? 'bg-orange-50 text-orange-700' : 'bg-pink-50 text-pink-700'
              }`}>
                {budget.status === 'exceeded' ? (
                  <span className="text-sm">
                    Melebihi budget {formatCurrency(Math.abs(budget.remaining))}
                  </span>
                ) : (
                  <span className="text-sm">
                    Sisa {formatCurrency(budget.remaining)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {budgetData.length === 0 && !isAddingBudget && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-pink-200/30 text-center">
          <Target className="w-16 h-16 text-pink-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-pink-700 mb-2">Belum ada budget</h3>
          <p className="text-pink-500">Mulai kelola pengeluaran dengan menambah budget pertama Anda</p>
        </div>
      )}
    </div>
  );
};

export default BudgetTracker;