import React, { useMemo } from 'react';
import { Transaction } from '../types';

interface FinancialChartProps {
  transactions: Transaction[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({ transactions }) => {
  const chartData = useMemo(() => {
    const last6Months = [];
    const now = new Date();
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthKey = date.toISOString().slice(0, 7);
      const monthName = date.toLocaleDateString('id-ID', { month: 'short' });
      
      const monthTransactions = transactions.filter(t => t.date.startsWith(monthKey));
      const income = monthTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
      const expenses = monthTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
      
      last6Months.push({
        month: monthName,
        income,
        expenses,
        balance: income - expenses
      });
    }
    
    return last6Months;
  }, [transactions]);

  const maxValue = Math.max(
    ...chartData.flatMap(d => [d.income, d.expenses]),
    1000000 // minimum scale
  );

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`;
    }
    return amount.toString();
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-pink-700 mb-8">Ringkasan 6 Bulan Terakhir</h3>
      
      <div className="relative">
        {/* Chart */}
        <div className="flex items-end justify-between h-64 mb-6">
          {chartData.map((data, index) => {
            const incomeHeight = (data.income / maxValue) * 200;
            const expenseHeight = (data.expenses / maxValue) * 200;
            
            return (
              <div key={index} className="flex flex-col items-center flex-1 px-2">
                <div className="flex items-end space-x-2 mb-3 h-52">
                  {/* Income bar */}
                  <div
                    className="w-5 bg-gradient-to-t from-pink-400 via-pink-500 to-pink-400 rounded-t-lg transition-all duration-500 hover:from-pink-500 hover:via-pink-600 hover:to-pink-500 shadow-sm"
                    style={{ height: `${incomeHeight}px` }}
                    title={`Pemasukan: Rp ${data.income.toLocaleString('id-ID')}`}
                  />
                  {/* Expense bar */}
                  <div
                    className="w-5 bg-gradient-to-t from-rose-400 via-rose-500 to-rose-400 rounded-t-lg transition-all duration-500 hover:from-rose-500 hover:via-rose-600 hover:to-rose-500 shadow-sm"
                    style={{ height: `${expenseHeight}px` }}
                    title={`Pengeluaran: Rp ${data.expenses.toLocaleString('id-ID')}`}
                  />
                </div>
                <span className="text-sm text-pink-600 font-semibold">{data.month}</span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center space-x-8 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
            <span className="text-sm text-pink-600 font-medium">Pemasukan</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full"></div>
            <span className="text-sm text-pink-600 font-medium">Pengeluaran</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
            <div className="text-pink-600 text-sm font-medium mb-1">Total Pemasukan</div>
            <div className="text-pink-800 text-2xl font-bold">
              Rp {chartData.reduce((sum, d) => sum + d.income, 0).toLocaleString('id-ID')}
            </div>
          </div>
          
          <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200">
            <div className="text-rose-600 text-sm font-medium mb-1">Total Pengeluaran</div>
            <div className="text-rose-800 text-2xl font-bold">
              Rp {chartData.reduce((sum, d) => sum + d.expenses, 0).toLocaleString('id-ID')}
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
            <div className="text-pink-600 text-sm font-medium mb-1">Rata-rata Saldo</div>
            <div className="text-pink-800 text-2xl font-bold">
              Rp {(chartData.reduce((sum, d) => sum + d.balance, 0) / chartData.length).toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialChart;