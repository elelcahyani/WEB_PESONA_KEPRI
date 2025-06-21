import { Category } from '../types';

export const defaultCategories: Category[] = [
  // Income categories
  { id: '1', name: 'Gaji', color: '#EC4899', icon: 'Circle', type: 'income' },
  { id: '2', name: 'Freelance', color: '#F472B6', icon: 'Circle', type: 'income' },
  { id: '3', name: 'Investasi', color: '#FB7185', icon: 'Circle', type: 'income' },
  { id: '4', name: 'Bonus', color: '#F87171', icon: 'Circle', type: 'income' },
  
  // Expense categories
  { id: '5', name: 'Makanan', color: '#F472B6', icon: 'Circle', type: 'expense' },
  { id: '6', name: 'Transport', color: '#EC4899', icon: 'Circle', type: 'expense' },
  { id: '7', name: 'Belanja', color: '#FB7185', icon: 'Circle', type: 'expense' },
  { id: '8', name: 'Hiburan', color: '#F87171', icon: 'Circle', type: 'expense' },
  { id: '9', name: 'Kesehatan', color: '#FBBF24', icon: 'Circle', type: 'expense' },
  { id: '10', name: 'Pendidikan', color: '#A78BFA', icon: 'Circle', type: 'expense' },
  { id: '11', name: 'Tagihan', color: '#8B5CF6', icon: 'Circle', type: 'expense' },
  { id: '12', name: 'Lainnya', color: '#6B7280', icon: 'Circle', type: 'expense' }
];