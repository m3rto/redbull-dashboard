
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Activity, Target, TrendingUp, Zap } from 'lucide-react';
import { Outlet, Category } from '../types';

interface StatisticsProps {
  outlets: Outlet[];
  categories: Category[];
}

const Statistics: React.FC<StatisticsProps> = ({ outlets, categories }) => {
  const chartData = useMemo(() => {
    return categories.map(cat => ({
      name: cat.id.toUpperCase(),
      fullName: cat.name,
      count: outlets.filter(o => o.categoryId === cat.id).length,
      color: cat.color
    })).filter(d => d.count > 0);
  }, [outlets, categories]);

  const stats = useMemo(() => {
    const total = outlets.length;
    const tier1 = outlets.filter(o => o.categoryId === 't1').length;
    const tier1Percentage = total > 0 ? Math.round((tier1 / total) * 100) : 0;
    
    return [
      { label: 'Total Nodes', value: total, icon: Activity, color: '#001D5D' },
      { label: 'Elite Tier 1', value: `${tier1Percentage}%`, icon: Target, color: '#DB0A40' },
      { label: 'Active Reach', value: '100%', icon: Zap, color: '#F5BF00' },
      { label: 'Sync Status', value: 'Live', icon: TrendingUp, color: '#10b981' },
    ];
  }, [outlets]);

  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-xl transition-all">
              <div className="p-4 rounded-2xl transition-colors" style={{ backgroundColor: `${stat.color}10` }}>
                <stat.icon size={28} style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black italic tracking-tighter" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Distribution Bar Chart */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-black uppercase italic tracking-tight text-[#001D5D] mb-8">Node Distribution by Tier</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f2f2" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 900, fill: '#94a3b8' }} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '15px' }}
                    itemStyle={{ fontSize: '12px', fontWeight: '800', textTransform: 'uppercase' }}
                  />
                  <Bar dataKey="count" radius={[10, 10, 10, 10]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Composition Pie Chart */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <h3 className="text-xl font-black uppercase italic tracking-tight text-[#001D5D] mb-8">Network Composition</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="count"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Legend / Table */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
           <div className="p-8 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-xl font-black uppercase italic tracking-tight text-[#001D5D]">Tier Performance Matrix</h3>
              <span className="text-[10px] font-black text-[#DB0A40] bg-red-50 px-4 py-1.5 rounded-full uppercase tracking-widest">Active Report</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-4">
              {chartData.map((data, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-gray-50/50 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg" style={{ backgroundColor: data.color }}>
                        {data.name.replace('T', '')}
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-[#001D5D] uppercase leading-tight">{data.fullName}</p>
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mt-0.5">Distribution Node</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-xl font-black text-[#001D5D] italic">{data.count}</p>
                      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Units</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
