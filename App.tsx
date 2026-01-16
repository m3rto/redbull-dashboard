
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  FileSpreadsheet,
  Trash2,
  RefreshCw,
  CheckCircle2,
  List as ListIcon,
  ChevronRight,
  Info,
  X,
  MapPin,
  Code,
  Copy,
  Filter,
  Zap,
  BarChart3,
  Map as MapIcon,
  BrainCircuit
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
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  const [isListOpen, setIsListOpen] = useState(true);
  const [showTierModal, setShowTierModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
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
    setIsUsingMockData(state.outlets.length === 0 || !localStorage.getItem(STORAGE_KEYS.OUTLETS));
  }, [state.outlets]);

  useEffect(() => {
    if (state.outlets.length > 0) {
      localStorage.setItem(STORAGE_KEYS.OUTLETS, JSON.stringify(state.outlets));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(state.categories));
    }
  }, [state.outlets, state.categories]);

  const filteredOutlets = useMemo(() => {
    return state.outlets.filter(outlet => {
      const hasValidCoords = outlet.lat !== null && outlet.lng !== null && !isNaN(outlet.lat) && !isNaN(outlet.lng);
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

  const generateConstantsCode = () => {
    const cleanOutlets = state.outlets.map(({ id, name, categoryId, lat, lng, address }) => ({
      id, name, categoryId, lat, lng, address
    }));
    return `export const MOCK_OUTLETS: Outlet[] = ${JSON.stringify(cleanOutlets, null, 2)};`;
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

    const headers = getRowValues(lines[0]).map(h => h.toLowerCase());
    return lines.slice(1).map((line, index) => {
      const values = getRowValues(line);
      const data: any = {};
      headers.forEach((header, i) => { data[header] = values[i] || ''; });
      
      const lat = parseFloat(data.lat || data.latitude);
      const lng = parseFloat(data.lng || data.longitude);
      const tierVal = (data.tier || data.category || '10').toString();
      const tierMatch = tierVal.match(/\d+/);
      const categoryId = tierMatch ? `t${tierMatch[0]}` : 't10';

      const detectedName = data['display name'] || 
                          data['display_name'] || 
                          data.name || 
                          data.outlet || 
                          data['business name'] || 
                          `Node ${index + 1}`;

      return {
        id: `node-${index}`,
        name: detectedName,
        categoryId: categoryId,
        lat: lat,
        lng: lng,
        address: data.address || data.location || 'N/A'
      };
    }).filter(o => !isNaN(o.lat) && !isNaN(o.lng));
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
        if (parsed.length === 0) throw new Error("No valid data found in CSV");
        
        setState(prev => ({ ...prev, outlets: parsed }));
        setIsProcessing(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      } catch (err) {
        alert("Upload failed. Ensure CSV has Name (or Display Name), Lat, Lng, and Tier headers.");
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
          <p className="text-blue-200 mt-4 font-bold uppercase tracking-widest text-[10px]">Updating Global Nodes</p>
        </div>
      )}

      {/* Modals */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[4000] flex items-center justify-center p-6" onClick={() => setShowExportModal(false)}>
          <div className="bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <div className="bg-gray-900 p-8 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Code className="text-[#F5BF00]" />
                <h2 className="text-xl font-black uppercase italic tracking-tight">System Configuration</h2>
              </div>
              <button onClick={() => setShowExportModal(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-10">
              <p className="text-xs font-bold text-gray-500 mb-6 uppercase tracking-widest leading-relaxed">
                Copy this code and replace the <code className="text-[#DB0A40] bg-red-50 px-1 rounded">MOCK_OUTLETS</code> array in your <code className="text-[#001D5D] bg-blue-50 px-1 rounded">constants.tsx</code> file to make your current data permanent.
              </p>
              <div className="relative group">
                <textarea 
                  readOnly 
                  className="w-full h-80 bg-gray-50 border border-gray-200 rounded-3xl p-6 font-mono text-[11px] text-gray-600 focus:outline-none ring-0 scrollbar-thin" 
                  value={generateConstantsCode()} 
                />
                <button 
                  onClick={() => { navigator.clipboard.writeText(generateConstantsCode()); alert("Configuration copied to clipboard."); }}
                  className="absolute bottom-6 right-6 bg-[#001D5D] text-white p-4 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Copy size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest pr-2">Copy Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTierModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[4000] flex items-center justify-center p-6" onClick={() => setShowTierModal(false)}>
          <div className="bg-white rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="bg-[#001D5D] p-10 text-white flex justify-between items-center">
              <div>
                <h2 className="text-4xl font-black tracking-tighter uppercase italic">Categorisation Matrix</h2>
                <p className="text-[#F5BF00] text-[10px] font-black uppercase tracking-[0.4em] mt-3">Distribution Logic Definitions</p>
              </div>
              <button onClick={() => setShowTierModal(false)} className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors">
                <X size={28} />
              </button>
            </div>
            
            <div className="p-10 overflow-y-auto space-y-6 scrollbar-thin">
              {state.categories.map(cat => (
                <div key={cat.id} className="flex flex-col md:flex-row gap-8 p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white transition-all group">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-white font-black text-2xl" style={{ backgroundColor: cat.color }}>
                    {cat.id.toUpperCase().replace('T', '')}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="text-[9px] font-black text-[#DB0A40] uppercase tracking-widest block mb-1">Categorisation Identity</span>
                      <h3 className="text-xl font-black uppercase text-[#001D5D] tracking-tight">{cat.name}</h3>
                    </div>
                    <div>
                      <p className="text-md font-bold text-gray-800 uppercase italic leading-tight">{cat.summary}</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100">
                      <span className="text-[9px] font-black text-gray-400 uppercase block mb-1 font-black">Business Logic Rule</span>
                      <p className="text-xs text-gray-500 font-semibold leading-relaxed italic">{cat.details}</p>
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
              <div>
                <h1 className="font-black text-3xl tracking-tighter text-[#001D5D] uppercase italic leading-none">
                  RED BULL <span className="text-[#DB0A40]">INSIGHTS</span>
                </h1>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] mt-1.5 ml-0.5">Location Intelligence</p>
              </div>
            </div>

            {/* View Navigation */}
            <nav className="hidden xl:flex items-center bg-gray-100 p-1.5 rounded-2xl gap-1">
               <button 
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
               >
                  <MapIcon size={14} /> Intelligence Map
               </button>
               <button 
                onClick={() => setViewMode('stats')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'stats' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
               >
                  <BarChart3 size={14} /> Data Deck
               </button>
               <button 
                onClick={() => setViewMode('insights')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'insights' ? 'bg-white text-[#001D5D] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
               >
                  <BrainCircuit size={14} /> AI Briefing
               </button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
             {viewMode === 'map' && (
                <>
                  <button 
                      onClick={() => setState(s => ({ ...s, isSidebarOpen: !s.isSidebarOpen }))} 
                      className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${state.isSidebarOpen ? 'bg-[#001D5D] text-white' : 'bg-white text-[#001D5D] border border-gray-200 hover:bg-gray-50'}`}
                  >
                      <Filter size={14} /> {state.isSidebarOpen ? 'HIDE FILTERS' : 'SHOW FILTERS'}
                  </button>
                  <button onClick={() => setIsListOpen(!isListOpen)} className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${isListOpen ? 'bg-[#001D5D] text-white border-[#001D5D]' : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-50'}`}>
                      <ListIcon size={14} /> OUTLET LIST
                  </button>
                </>
             )}
             
             <div className="hidden lg:block h-8 w-px bg-gray-200 mx-2" />

             <button onClick={() => setShowTierModal(true)} className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-gray-50 text-[#001D5D] border border-gray-100 hover:bg-gray-100 transition-all">
                <Info size={14} /> MATRIX
             </button>

             <div className="flex items-center gap-2">
               <button onClick={() => setShowExportModal(true)} className="p-3 rounded-2xl text-gray-400 hover:text-[#001D5D] hover:bg-blue-50 transition-all" title="Export Configuration">
                  <Code size={18} />
               </button>
               
               <label className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest cursor-pointer transition-all shadow-xl ${uploadSuccess ? 'bg-green-600 text-white' : 'bg-[#DB0A40] text-white hover:bg-[#b90836] active:scale-95'}`}>
                  {uploadSuccess ? <CheckCircle2 size={16} /> : <FileSpreadsheet size={16} />}
                  <span>{uploadSuccess ? 'SAVED' : 'IMPORT'}</span>
                  <input type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
               </label>
               
               {!isUsingMockData && (
                <button onClick={() => { if(confirm("Wipe local cache and revert to default?")) { localStorage.clear(); window.location.reload(); } }} className="p-2 text-gray-300 hover:text-red-500 transition-colors" title="Clear Cache">
                  <Trash2 size={20} />
                </button>
               )}
             </div>
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

              <div className={`bg-white border-l border-gray-200 transition-all duration-500 ease-in-out flex flex-col relative z-50 overflow-hidden ${isListOpen ? 'w-96' : 'w-0'}`}>
                {isListOpen && (
                  <div className="flex flex-col h-full w-96 shadow-xl">
                    <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-30 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <ListIcon size={18} className="text-[#001D5D]" />
                        <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-800 italic">Nodes In Focus</h3>
                      </div>
                      <span className="bg-[#001D5D] text-white text-[9px] font-black px-3 py-1 rounded-full">{filteredOutlets.length}</span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/20 scrollbar-thin">
                      {filteredOutlets.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-32 text-center px-10">
                          <Search size={40} className="text-gray-200 mb-4" />
                          <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em] leading-relaxed">No matching nodes found</p>
                        </div>
                      )}
                      {filteredOutlets.map(o => {
                        const cat = state.categories.find(c => c.id === o.categoryId);
                        return (
                          <button 
                            key={o.id} 
                            onClick={() => setState(s => ({ ...s, activeOutlet: o }))} 
                            className={`w-full text-left p-6 rounded-[2.5rem] border transition-all duration-300 group relative ${state.activeOutlet?.id === o.id ? 'bg-white border-[#001D5D] ring-[12px] ring-[#001D5D]/5 transform translate-x-[-8px] shadow-lg' : 'border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl'}`}
                          >
                            <div className={`absolute top-6 right-8 transition-all ${state.activeOutlet?.id === o.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                              <ChevronRight size={20} className="text-[#DB0A40]" />
                            </div>
                            <p className={`text-[14px] font-black uppercase tracking-tight leading-tight mb-4 pr-10 whitespace-normal break-words ${state.activeOutlet?.id === o.id ? 'text-[#001D5D]' : 'text-gray-800'} italic`}>
                              {o.name}
                            </p>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className="w-3.5 h-3.5 rounded-full shadow-inner border border-white" style={{ backgroundColor: cat?.color }} />
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{cat?.name}</p>
                              </div>
                              <div className="flex items-start gap-2 pt-4 border-t border-gray-50">
                                <MapPin size={12} className="text-[#DB0A40] flex-shrink-0 mt-0.5 opacity-50" />
                                <p className="text-[11px] text-gray-500 font-bold leading-relaxed whitespace-normal break-words italic">
                                  {o.address === "0" ? "Address details pending" : o.address}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
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
