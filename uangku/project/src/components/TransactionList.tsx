import React from 'react';
import { Trash2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Transaction, Category } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
  categories: Category[];
  onDelete: (id: string) => void;
  formatCurrency: (amount: number) => string;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  categories,
  onDelete,
  formatCurrency
}) => {
  const getCategoryInfo = (categoryName: string) => {
    return categories.find(cat => cat.name === categoryName) || {
      color: '#EC4899',
      icon: 'Circle'
    };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (transactions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowUpRight className="w-8 h-8 text-pink-400" />
        </div>
        <p className="text-pink-600 text-lg font-medium">Belum ada transaksi</p>
        <p className="text-pink-400 text-sm">Mulai tambahkan transaksi pertama Anda</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => {
        const categoryInfo = getCategoryInfo(transaction.category);
        return (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200/40 hover:bg-white/90 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: `${categoryInfo.color}20` }}
              >
                {transaction.type === 'income' ? (
                  <ArrowUpRight 
                    className="w-6 h-6" 
                    style={{ color: categoryInfo.color }}
                  />
                ) : (
                  <ArrowDownRight 
                    className="w-6 h-6" 
                    style={{ color: categoryInfo.color }}
                  />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h4 className="font-semibold text-pink-800">{transaction.description}</h4>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ 
                      backgroundColor: `${categoryInfo.color}15`,
                      color: categoryInfo.color
                    }}
                  >
                    {transaction.category}
                  </span>
                </div>
                <p className="text-sm text-pink-500">{formatDate(transaction.date)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className={`font-bold text-lg ${
                  transaction.type === 'income' ? 'text-pink-600' : 'text-rose-500'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                </p>
              </div>
              
              <button
                onClick={() => onDelete(transaction.id)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-pink-400 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;