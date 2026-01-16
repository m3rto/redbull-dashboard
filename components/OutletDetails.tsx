
import React from 'react';
import { X, MapPin } from 'lucide-react';
import { Outlet, Category } from '../types';

interface OutletDetailsProps {
  outlet: Outlet;
  category: Category;
  onClose: () => void;
}

const OutletDetails: React.FC<OutletDetailsProps> = ({ outlet, category, onClose }) => {
  return (
    <div className="absolute right-6 top-24 bottom-6 w-96 bg-white shadow-2xl rounded-3xl z-40 border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right duration-300">
      <div className="relative p-8 bg-[#001D5D] text-white">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
        >
          <X size={18} />
        </button>
        <div className="inline-block px-3 py-1 rounded-full bg-[#F5BF00] text-[#001D5D] text-[10px] font-black uppercase tracking-widest mb-4">
          {category.name}
        </div>
        <h2 className="text-2xl font-black leading-tight uppercase tracking-tighter italic mb-2">
          {outlet.name}
        </h2>
      </div>

      <div className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div className="space-y-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Distribution Node Location</span>
          <div className="flex items-start gap-3 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <MapPin size={18} className="text-[#DB0A40] flex-shrink-0 mt-0.5" />
            <p className="text-sm font-bold text-gray-700 leading-relaxed break-words whitespace-normal italic">
              {outlet.address === "0" ? "Address details pending field verification" : outlet.address}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Categorisation Logic</span>
          <div className="bg-white border-2 rounded-2xl p-5" style={{ borderColor: category.color + '20' }}>
            <p className="text-sm font-black text-[#001D5D] uppercase mb-2">{category.summary}</p>
            <p className="text-xs text-gray-500 leading-relaxed font-medium italic">
              {category.details}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-50 text-center">
         <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em]">Gauteng Field Intelligence</span>
      </div>
    </div>
  );
};

export default OutletDetails;
