
export interface Category {
  id: string;
  name: string;        // Part 1: Tier Identity (e.g. Tier 1)
  summary: string;     // Part 2: Categorisation Summary
  details: string;     // Part 3: Detailed Business Logic
  color: string;
  count?: number;
}

export interface Outlet {
  id: string;
  name: string;
  categoryId: string;
  lat: number;
  lng: number;
  address: string;
  contactName?: string;
  phone?: string;
  salesVolume?: 'High' | 'Medium' | 'Low';
  lastVisit?: string;
}

export interface DashboardState {
  categories: Category[];
  outlets: Outlet[];
  selectedCategoryIds: string[];
  searchQuery: string;
  isSidebarOpen: boolean;
  activeOutlet: Outlet | null;
}
