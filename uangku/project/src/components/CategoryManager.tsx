import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Circle } from 'lucide-react';
import { Category } from '../types';

interface CategoryManagerProps {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

const CategoryManager: React.FC<CategoryManagerProps> = ({
  categories,
  setCategories
}) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    color: '#EC4899',
    type: 'expense' as 'income' | 'expense'
  });

  const colorOptions = [
    '#EC4899', '#F472B6', '#FB7185', '#F87171', '#FBBF24', 
    '#A78BFA', '#8B5CF6', '#06B6D4', '#10B981', '#6B7280'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) return;

    if (editingCategory) {
      setCategories(categories.map(cat => 
        cat.id === editingCategory 
          ? { ...cat, name: formData.name, color: formData.color, type: formData.type }
          : cat
      ));
      setEditingCategory(null);
    } else {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: formData.name,
        color: formData.color,
        icon: 'Circle',
        type: formData.type
      };
      setCategories([...categories, newCategory]);
      setIsAddingCategory(false);
    }

    setFormData({ name: '', color: '#EC4899', type: 'expense' });
  };

  const handleEdit = (category: Category) => {
    setFormData({
      name: category.name,
      color: category.color,
      type: category.type
    });
    setEditingCategory(category.id);
    setIsAddingCategory(true);
  };

  const handleDelete = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const handleCancel = () => {
    setIsAddingCategory(false);
    setEditingCategory(null);
    setFormData({ name: '', color: '#EC4899', type: 'expense' });
  };

  const incomeCategories = categories.filter(cat => cat.type === 'income');
  const expenseCategories = categories.filter(cat => cat.type === 'expense');

  return (
    <div className="space-y-6">
      {/* Add Category Button */}
      {!isAddingCategory && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
          <button
            onClick={() => setIsAddingCategory(true)}
            className="w-full flex items-center justify-center px-6 py-4 border-2 border-dashed border-pink-300 rounded-2xl text-pink-600 hover:border-pink-400 hover:text-pink-700 hover:bg-pink-50 transition-all duration-300 font-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            Tambah Kategori Baru
          </button>
        </div>
      )}

      {/* Add/Edit Category Form */}
      {isAddingCategory && (
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
          <h3 className="text-xl font-bold text-pink-700 mb-6">
            {editingCategory ? 'Edit Kategori' : 'Tambah Kategori'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Nama Kategori
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:ring-2 focus:ring-pink-300 focus:border-pink-400 transition-all duration-200 bg-white/80"
                placeholder="Contoh: Makanan, Transport, dll."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Tipe
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'expense' }))}
                  className={`flex-1 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                    formData.type === 'expense'
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-200'
                      : 'bg-pink-50 text-pink-600 border-2 border-pink-200'
                  }`}
                >
                  Pengeluaran
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'income' }))}
                  className={`flex-1 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
                    formData.type === 'income'
                      ? 'bg-pink-100 text-pink-700 border-2 border-pink-200'
                      : 'bg-pink-50 text-pink-600 border-2 border-pink-200'
                  }`}
                >
                  Pemasukan
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pink-700 mb-2">
                Warna
              </label>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map(color => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, color }))}
                    className={`w-10 h-10 rounded-full border-3 transition-all duration-200 shadow-sm hover:shadow-md ${
                      formData.color === color ? 'border-pink-400 scale-110' : 'border-white'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-2xl hover:from-pink-500 hover:to-rose-500 transition-all duration-300 font-medium shadow-lg"
              >
                {editingCategory ? 'Update' : 'Tambah'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-4 py-3 bg-pink-100 text-pink-700 rounded-2xl hover:bg-pink-200 transition-all duration-300 font-medium"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Income Categories */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
        <h3 className="text-xl font-bold text-pink-700 mb-6 flex items-center">
          <div className="w-4 h-4 bg-pink-500 rounded-full mr-3"></div>
          Kategori Pemasukan
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {incomeCategories.map(category => (
            <div
              key={category.id}
              className="flex items-center justify-between p-4 bg-white/70 rounded-2xl border border-pink-200/40 hover:bg-white/90 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <Circle 
                  className="w-6 h-6" 
                  style={{ color: category.color }}
                  fill="currentColor"
                />
                <span className="font-semibold text-pink-800">{category.name}</span>
              </div>
              
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => handleEdit(category)}
                  className="p-2 text-pink-400 hover:text-pink-600 transition-colors duration-200 rounded-xl hover:bg-pink-50"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 text-pink-400 hover:text-rose-500 transition-colors duration-200 rounded-xl hover:bg-rose-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expense Categories */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200/30">
        <h3 className="text-xl font-bold text-pink-700 mb-6 flex items-center">
          <div className="w-4 h-4 bg-rose-500 rounded-full mr-3"></div>
          Kategori Pengeluaran
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenseCategories.map(category => (
            <div
              key={category.id}
              className="flex items-center justify-between p-4 bg-white/70 rounded-2xl border border-pink-200/40 hover:bg-white/90 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <Circle 
                  className="w-6 h-6" 
                  style={{ color: category.color }}
                  fill="currentColor"
                />
                <span className="font-semibold text-pink-800">{category.name}</span>
              </div>
              
              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => handleEdit(category)}
                  className="p-2 text-pink-400 hover:text-pink-600 transition-colors duration-200 rounded-xl hover:bg-pink-50"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 text-pink-400 hover:text-rose-500 transition-colors duration-200 rounded-xl hover:bg-rose-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryManager;