import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Transaction, Category } from '../types';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: Omit<Transaction, 'id' | 'createdAt'>) => void;
  categories: Category[];
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  categories
}) => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    category: '',
    type: 'expense' as 'income' | 'expense',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.description || !formData.category) {
      return;
    }

    onAdd({
      amount: parseFloat(formData.amount),
      description: formData.description,
      category: formData.category,
      type: formData.type,
      date: formData.date
    });

    // Reset form
    setFormData({
      amount: '',
      description: '',
      category: '',
      type: 'expense',
      date: new Date().toISOString().split('T')[0]
    });

    onClose();
  };

  const filteredCategories = categories.filter(cat => cat.type === formData.type);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-pink-900/20 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200/50">
        <div className="flex items-center justify-between p-6 border-b border-pink-200/50">
          <h2 className="text-xl font-bold text-pink-700">Tambah Transaksi</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-2xl text-pink-400 hover:text-pink-600 hover:bg-pink-100 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Transaction Type Toggle */}
          <div className="flex bg-pink-50 rounded-2xl p-1">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, type: 'expense', category: '' }))}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                formData.type === 'expense'
                  ? 'bg-white text-rose-600 shadow-md'
                  : 'text-pink-600 hover:text-pink-700'
              }`}
            >
              <Minus className="w-4 h-4 mr-2" />
              Pengeluaran
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, type: 'income', category: '' }))}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                formData.type === 'income'
                  ? 'bg-white text-pink-600 shadow-md'
                  : 'text-pink-600 hover:text-pink-700'
              }`}
            >
              <Plus className="w-4 h-4 mr-2" />
              Pemasukan
            </button>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">
              Jumlah
            </label>
            <div className="relative">
              <span className="absolute left-4 top-4 text-pink-500 font-medium">Rp</span>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                className="w-full pl-12 pr-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">
              Deskripsi
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
              placeholder="Contoh: Makan siang, Gaji, dll."
              required
            />
          </div>

          {/* Category Selection */}
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
              {filteredCategories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-sm font-medium text-pink-700 mb-2">
              Tanggal
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 text-white rounded-2xl hover:from-pink-500 hover:via-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
          >
            Tambah Transaksi
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;