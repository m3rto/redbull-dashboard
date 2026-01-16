
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { Outlet, Category } from '../types';

interface DashboardMapProps {
  outlets: Outlet[];
  categories: Category[];
  onSelectOutlet: (outlet: Outlet) => void;
  activeOutlet: Outlet | null;
}

const getIcon = (color: string) => {
  return new L.DivIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2.5px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -7],
  });
};

const DashboardMap: React.FC<DashboardMapProps> = ({ outlets, categories, onSelectOutlet, activeOutlet }) => {
  const defaultCenter: [number, number] = [-26.1076, 28.0567];
  const markerRefs = useRef<{ [key: string]: L.Marker }>({});

  useEffect(() => {
    if (activeOutlet && markerRefs.current[activeOutlet.id]) {
      const marker = markerRefs.current[activeOutlet.id];
      marker.openPopup();
    }
  }, [activeOutlet]);

  return (
    <MapContainer 
      center={defaultCenter} 
      zoom={11} 
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {outlets.map(outlet => {
        // SAFETY GUARD: Ensure coordinates are valid numbers
        if (isNaN(outlet.lat) || isNaN(outlet.lng)) return null;

        const category = categories.find(c => c.id === outlet.categoryId);
        return (
          <Marker 
            key={outlet.id} 
            position={[outlet.lat, outlet.lng]}
            icon={getIcon(category?.color || '#333')}
            ref={(ref) => {
              if (ref) markerRefs.current[outlet.id] = ref;
            }}
            eventHandlers={{
              click: () => onSelectOutlet(outlet),
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[240px]">
                <h3 className="font-black text-[#001D5D] text-[13px] uppercase tracking-tighter leading-tight mb-3 break-words">
                  {outlet.name}
                </h3>
                
                {outlet.address && (
                  <div className="flex items-start gap-2 mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100 shadow-inner">
                    <MapPin size={12} className="text-[#DB0A40] mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] text-gray-700 font-bold leading-relaxed italic">
                      {outlet.address}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: category?.color }} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                      {category?.name}
                    </span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default DashboardMap;
