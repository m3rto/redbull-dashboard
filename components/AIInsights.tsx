
import React from 'react';
import { Brain, Sparkles, Map, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';
import { Outlet, Category } from '../types';

interface AIInsightsProps {
  outlets: Outlet[];
  categories: Category[];
}

const AIInsights: React.FC<AIInsightsProps> = ({ outlets, categories }) => {
  // Mock logic to simulate AI analysis
  const tierCounts = categories.map(c => ({
    name: c.name,
    count: outlets.filter(o => o.categoryId === c.id).length
  })).sort((a, b) => b.count - a.count);

  const topTier = tierCounts[0];

  return (
    <div className="h-full bg-gray-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        {/* Hero Branded Card */}
        <div className="bg-[#001D5D] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DB0A40] opacity-20 blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5BF00] opacity-10 blur-[80px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-white/10 p-5 rounded-3xl backdrop-blur-md mb-8">
              <Brain size={48} className="text-[#F5BF00]" />
            </div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Field Intelligence <span className="text-[#DB0A40]">Briefing</span></h2>
            <p className="text-blue-100 text-lg font-medium max-w-xl italic">
              Automated distribution analysis for the Gauteng North region based on the latest node synchronization.
            </p>
          </div>
        </div>

        {/* Insight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#F5BF00]" size={24} />
              <h3 className="font-black uppercase italic tracking-tight text-[#001D5D]">Strategy Summary</h3>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed italic">
              Our data indicates a high concentration of <span className="text-[#DB0A40] font-black uppercase">{topTier.name}</span> nodes. This confirms a robust wholesaler-led distribution model in this sector.
            </p>
            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Confidence Score</span>
              <span className="text-[#10b981] font-black italic">94%</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
            <div className="flex items-center gap-3">
              <Map className="text-[#001D5D]" size={24} />
              <h3 className="font-black uppercase italic tracking-tight text-[#001D5D]">Regional Density</h3>
            </div>
            <p className="text-gray-600 font-medium leading-relaxed italic">
              The geographic clustering shows "Hot Zones" around primary transit corridors. Tier 1 nodes are positioned as strategic hubs for smaller retail distribution.
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase text-[#DB0A40] hover:translate-x-1 transition-transform">
              View Heatmap <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Distribution Checklist */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
           <h3 className="text-xl font-black uppercase italic tracking-tight text-[#001D5D] mb-8">Tier Performance Protocol</h3>
           <div className="space-y-4">
              {[
                { label: 'Wholesale Saturation', status: 'Optimal', icon: ShieldCheck },
                { label: 'Retail Distribution', status: 'Expanding', icon: Zap },
                { label: 'Data Verification', status: 'Completed', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100">
                   <div className="flex items-center gap-4">
                      <item.icon className="text-[#001D5D]" size={20} />
                      <span className="text-sm font-black text-gray-800 uppercase italic">{item.label}</span>
                   </div>
                   <span className="text-[10px] font-black bg-[#001D5D] text-white px-4 py-1 rounded-full uppercase tracking-widest">{item.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
