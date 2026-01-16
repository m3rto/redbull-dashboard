import React, { useState, useMemo, useEffect } from 'react';
import { 
  FileSpreadsheet,
  Trash2,
  RefreshCw,
  CheckCircle2,
  Info,
  X,
  Zap,
  BarChart3,
  Map as MapIcon,
  BrainCircuit,
  ArrowUpCircle
} from 'lucide-react';
import DashboardMap from './components/DashboardMap';
import Sidebar from './components/Sidebar';
import OutletDetails from './components/OutletDetails';
import Statistics from './components/Statistics';
import AIInsights from './components/AIInsights';
import { Category, Outlet, DashboardState } from './types';
import { MOCK_CATEGORIES, MOCK_OUTLETS, STORAGE_KEYS } from './constants';

type ViewMode = 'map' | 'stats' | 'insights';

const App: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [hasImportedData, setHasImportedData] = useState(false);
  const [isListOpen, setIsListOpen] = useState(true);
  const [showTierModal, setShowTierModal] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  
  const [state, setState] = useState<DashboardState>(() => {
    const savedOutlets = localStorage.getItem(STORAGE_KEYS.OUTLETS);
    const savedCategories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    
    const outlets = savedOutlets ? JSON.parse(savedOutlets) : MOCK_OUTLETS;
    const categories = savedCategories ? JSON.parse(savedCategories) : MOCK_CATEGORIES;

    return {
      categories,
      outlets,
      selectedCategoryIds: categories.map((c: any) => c.id),
      searchQuery: '',
      isSidebarOpen: true,
      activeOutlet: null,
    };
  });

  useEffect(() => {
    const imported = !!localStorage.getItem(STORAGE_KEYS.OUTLETS);
    setHasImportedData(imported);
  }, [state.outlets]);

  useEffect(() => {
    if (hasImportedData) {
      localStorage.setItem(STORAGE_KEYS.OUTLETS, JSON.stringify(state.outlets));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(state.categories));
    }
  }, [state.outlets, state.categories, hasImportedData]);

  const filteredOutlets = useMemo(() => {
    return state.outlets.filter(outlet => {
      const lat = Number(outlet.lat);
      const lng = Number(outlet.lng);
      const hasValidCoords = !isNaN(lat) && !isNaN(lng);
      if (!hasValidCoords) return false;

      const matchesCategory = state.selectedCategoryIds.includes(outlet.categoryId);
      const matchesSearch = outlet.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          outlet.address.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [state.outlets, state.selectedCategoryIds, state.searchQuery]);

  const categoriesWithCounts = useMemo(() => {
    return state.categories.map(cat => ({
      ...cat,
      count: state.outlets.filter(o => o.categoryId === cat.id).length
    }));
  }, [state.categories, state.outlets]);

  const toggleCategory = (id: string) => {
    setState(prev => ({
      ...prev,
      selectedCategoryIds: prev.selectedCategoryIds.includes(id)
        ? prev.selectedCategoryIds.filter(catId => catId !== id)
        : [...prev.selectedCategoryIds, id]
    }));
  };

  const parseCSV = (text: string) => {
    const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
    if (lines.length < 2) return [];
    
    const regex = /(?!\s*$)\s*(?:'([^']*)'|"([^"]*)"|([^,]*))\s*(?:,|$)/g;
    const getRowValues = (line: string) => {
      const values = [];
      let match;
      while ((match = regex.exec(line)) !== null) {
        let val = match[1] || match[2] || match[3] || '';
        values.push(val.trim());
        if (match.index === regex.lastIndex) regex.lastIndex++;
      }
      return values;
    };

    const headers = getRowValues(lines[0]).map(h => h.toLowerCase().trim());
    
    return lines.slice(1).map((line, index) => {
      const values = getRowValues(line);
      const data: any = {};
      headers.forEach((header, i) => { data[header] = values[i] || ''; });
      
      const lat = parseFloat(data.lat || data.latitude || data.y || '0');
      const lng = parseFloat(data.lng || data.longitude || data.x || '0');
      
      const tierVal = (data.tier || data.category || '10').toString();
      const tierMatch = tierVal.match(/\d+/);
      const categoryId = tierMatch ? `t${tierMatch[0]}` : 't10';

      const detectedName = data['name'] || 
                          data['display name'] || 
                          data.outlet || 
                          `Node ${index + 1}`;

      return {
        id: `imported-${index}-${Date.now()}`,
        name: detectedName,
        categoryId: categoryId,
        lat: lat,
        lng: lng,
        address: data.address || data.location || 'Location verification pending'
      };
    }).filter(o => !isNaN(o.lat) && !isNaN(o.lng) && o.lat !== 0);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = parseCSV(text);
        if (parsed.length === 0) throw new Error("Format not recognized");
        
        setState(prev => ({ 
          ...prev, 
          outlets: parsed, 
          selectedCategoryIds: state.categories.map(c => c.id),
          activeOutlet: null 
        }));
        setHasImportedData(true);
        setIsProcessing(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } catch (err) {
        alert("Import failed. Ensure CSV columns include Name, Lat, Lng, and Tier.");
        setIsProcessing(false);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden font-['Inter']">
      {isProcessing && (
        <div className="absolute inset-0 bg-[#001D5D]/95 backdrop-blur-xl z-[5000] flex flex-col items-center justify-center text-white">
          <RefreshCw className="w-16 h-16 animate-spin text-[#F5BF00] mb-6" />
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">Syncing Dataset...</h2>
        </div>
      )}

      {!hasImportedData && (
        <div className="absolute top-28 right-8 z-[2000] animate-bounce pointer-events-none">
          <div className="bg-[#DB0A40] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <ArrowUpCircle className="animate-pulse" />
            <p className="text-xs font-black uppercase tracking-widest">Click Import to load your CSV</p>
          </div>
        </div>
      )}

      {showTierModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[4000] flex items-center justify-center p-6" onClick={() => setShowTierModal(false)}>
          <div className="bg-white rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="bg-[#001D5D] p-10 text-white flex justify-between items-center">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic">Categorisation Matrix</h2>
              <button onClick={() => setShowTierModal(false)} className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors">
                <X size={28} />
              </button>
            </div>
            <div className="p-10 overflow-y-auto space-y-6 scrollbar-thin">
              {state.categories.map(cat => (
                <div key={cat.id} className="flex flex-col md:flex-row gap-8 p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white font-black text-2xl" style={{ backgroundColor: cat.color }}>
                    {cat.id.toUpperCase().replace('T', '')}
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-black uppercase text-[#001D5D] tracking-tight">{cat.name}</h3>
                    <p className="text-md font-bold text-gray-800 uppercase italic">{cat.summary}</p>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <p className="text-xs text-gray-500 font-semibold italic">{cat.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewMode === 'map' && (
        <Sidebar 
          isOpen={state.isSidebarOpen}
          onToggle={() => setState(s => ({ ...s, isSidebarOpen: !s.isSidebarOpen }))}
          categories={categoriesWithCounts}
          selectedCategoryIds={state.selectedCategoryIds}
          onToggleCategory={toggleCategory}
          searchQuery={state.searchQuery}
          onSearchChange={(q) => setState(s => ({ ...s, searchQuery: q }))}
          totalShown={filteredOutlets.length}
          totalOutlets={state.outlets.length}
        />
      )}

      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-[100] shadow-sm">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-[#001D5D] p-2.5 rounded-xl shadow-lg">
                <Zap className="text-[#F5BF00] w-6 h-6 fill-current" />
              </div>
              <h1 className="font-black text-3xl tracking-tighter text-[#001D5D] uppercase italic leading-none">
                RED BULL <span className="text-[#DB0A40]">INSIGHTS</span>
              </h1>
            </div>
            <nav className="hidden xl:flex items-center bg-gray-100 p-1.5 rounded-2xl gap-1">
               <button onClick={() => setViewMode('map')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase ${viewMode === 'map' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400'}`}><MapIcon size={14} /> Map</button>
               <button onClick={() => setViewMode('stats')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase ${viewMode === 'stats' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400'}`}><BarChart3 size={14} /> Stats</button>
               <button onClick={() => setViewMode('insights')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase ${viewMode === 'insights' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400'}`}><BrainCircuit size={14} /> Briefing</button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
             <button onClick={() => setShowTierModal(true)} className="md:flex items-center gap-2 px-5 py-3 rounded-2xl text-[10px] font-black uppercase bg-gray-50 text-[#001D5D] border border-gray-100 hover:bg-gray-100 transition-all italic"><Info size={14} /> MATRIX</button>
             <label className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-[10px] font-black uppercase cursor-pointer shadow-xl transition-all active:scale-95 ${uploadSuccess ? 'bg-green-600 text-white' : 'bg-[#DB0A40] text-white hover:bg-[#b90836]'}`}>
                {uploadSuccess ? <CheckCircle2 size={16} /> : <FileSpreadsheet size={16} />}
                <span>{uploadSuccess ? 'SAVED' : 'IMPORT CSV'}</span>
                <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
             </label>
             {hasImportedData && (
                <button onClick={() => { if(confirm("Clear imported data?")) { localStorage.removeItem(STORAGE_KEYS.OUTLETS); window.location.reload(); } }} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Trash2 size={20} />
                </button>
             )}
          </div>
        </header>

        <div className="flex-1 flex relative overflow-hidden bg-gray-50">
          {viewMode === 'map' ? (
            <>
              <div className="flex-1 relative z-10">
                <DashboardMap 
                  outlets={filteredOutlets} 
                  categories={state.categories}
                  onSelectOutlet={(o) => setState(s => ({ ...s, activeOutlet: o }))}
                  activeOutlet={state.activeOutlet}
                />
              </div>
              <div className={`bg-white border-l border-gray-200 transition-all duration-500 flex flex-col relative z-50 overflow-hidden ${isListOpen ? 'w-96' : 'w-0'}`}>
                {isListOpen && (
                  <div className="flex flex-col h-full w-96 shadow-xl">
                    <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-30 flex justify-between items-center">
                      <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-800 italic">Nodes In Focus</h3>
                      <span className="bg-[#001D5D] text-white text-[9px] font-black px-3 py-1 rounded-full">{filteredOutlets.length}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/20 scrollbar-thin">
                      {filteredOutlets.length > 0 ? filteredOutlets.map(o => {
                        const cat = state.categories.find(c => c.id === o.categoryId);
                        return (
                          <button key={o.id} onClick={() => setState(s => ({ ...s, activeOutlet: o }))} className={`w-full text-left p-6 rounded-[2.5rem] border transition-all duration-300 group relative ${state.activeOutlet?.id === o.id ? 'bg-white border-[#001D5D] ring-[12px] ring-[#001D5D]/5 transform translate-x-[-8px] shadow-lg' : 'border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl'}`}>
                            <p className="text-[14px] font-black uppercase italic leading-tight mb-4 pr-10">{o.name}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-3.5 h-3.5 rounded-full shadow-inner" style={{ backgroundColor: cat?.color }} />
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{cat?.name}</p>
                            </div>
                          </button>
                        );
                      }) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-10 opacity-40">
                          <FileSpreadsheet size={48} className="mb-4 text-gray-300" />
                          <p className="text-xs font-black uppercase italic tracking-widest">No active nodes in this view</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : viewMode === 'stats' ? (
            <Statistics outlets={state.outlets} categories={state.categories} />
          ) : (
            <AIInsights outlets={state.outlets} categories={state.categories} />
          )}
        </div>

        {viewMode === 'map' && state.activeOutlet && (
          <OutletDetails 
            outlet={state.activeOutlet} 
            category={state.categories.find(c => c.id === state.activeOutlet?.categoryId)!}
            onClose={() => setState(s => ({ ...s, activeOutlet: null }))} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
