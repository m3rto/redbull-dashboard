
import React from 'react';
import { Search, Filter, ChevronLeft, ChevronRight, Database } from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  categories: Category[];
  selectedCategoryIds: string[];
  onToggleCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalShown: number;
  totalOutlets: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  categories,
  selectedCategoryIds,
  onToggleCategory,
  searchQuery,
  onSearchChange,
  totalShown,
  totalOutlets,
}) => {
  return (
    <aside 
      className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col relative z-20 ${
        isOpen ? 'w-80' : 'w-0'
      }`}
    >
      <button 
        onClick={onToggle}
        className={`absolute -right-12 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-r-2xl p-3 shadow-xl hover:bg-gray-50 text-gray-400 hover:text-[#001D5D] z-50 transition-all flex flex-col items-center gap-3 ${!isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="[writing-mode:vertical-lr] text-[10px] font-black uppercase tracking-widest text-[#001D5D]">Tiers</div>
        <ChevronRight size={16} className="text-[#DB0A40]" />
      </button>

      {isOpen && (
        <div className="flex flex-col h-full overflow-hidden w-80 relative">
          <button 
            onClick={onToggle}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-50 text-gray-400 hover:text-[#001D5D] z-[60] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Find specific nodes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-xs focus:ring-2 focus:ring-[#001D5D] outline-none transition-all"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-[#001D5D]" />
                  <h2 className="text-xs font-black text-gray-800 uppercase tracking-[0.2em]">Tier Logic</h2>
                </div>
              </div>

              <div className="bg-[#001D5D]/5 rounded-2xl p-4 border border-[#001D5D]/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Visibility Meter</span>
                  <Database size={12} className="text-[#001D5D]" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#001D5D]">{totalShown}</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase">/ {totalOutlets} ACTIVE NODES</span>
                </div>
                <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-[#DB0A40] transition-all duration-700" 
                    style={{ width: `${(totalShown / Math.max(1, totalOutlets)) * 100}%` }}
                   />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 scrollbar-thin">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                  selectedCategoryIds.includes(cat.id)
                    ? 'border-[#001D5D]/20 bg-[#001D5D]/5 shadow-sm'
                    : 'border-transparent bg-white hover:bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: cat.color }}
                  />
                  <div className="text-left overflow-hidden">
                    <p className={`text-[10px] font-black truncate uppercase ${selectedCategoryIds.includes(cat.id) ? 'text-[#001D5D]' : 'text-gray-500'}`}>
                      {cat.name}
                    </p>
                  </div>
                </div>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg flex-shrink-0 ml-2 ${
                  selectedCategoryIds.includes(cat.id) ? 'bg-[#001D5D] text-white shadow-md' : 'bg-gray-100 text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 flex items-center justify-center opacity-30 select-none">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.5em]">Field Intelligence System</span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
