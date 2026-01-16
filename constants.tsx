
import { Category, Outlet } from './types';

export const RED_BULL_THEME = {
  blue: '#001D5D',
  red: '#DB0A40',
  yellow: '#F5BF00',
  silver: '#F1F2F2',
  white: '#FFFFFF',
};

export const STORAGE_KEYS = {
  OUTLETS: 'rb_outlets',
  CATEGORIES: 'rb_categories'
};

export const MOCK_CATEGORIES: Category[] = [
  { 
    id: 't1', 
    name: 'Tier 1', 
    summary: 'Cash and Carry with Google ID and 100+ ratings', 
    details: 'Has Google ID. Cash and Carry / Wholesaler type business - inferred size and longevity taken from number of Google ratings.',
    color: '#DB0A40' 
  },
  { 
    id: 't2', 
    name: 'Tier 2', 
    summary: 'Cash and Carry with Google ID', 
    details: 'Verified Cash and Carry / Wholesaler business with active Google presence but fewer than 100 ratings.',
    color: '#003DFF' 
  },
  { 
    id: 't3', 
    name: 'Tier 3', 
    summary: 'Elite Food Wholesalers with Google ID and 100+ Ratings', 
    details: 'Specialized food and beverage distribution nodes with high digital social proof and verified operational scale.',
    color: '#F5BF00' 
  },
  { 
    id: 't4', 
    name: 'Tier 4', 
    summary: 'Food Wholesalers with Google ID', 
    details: 'Confirmed food-sector wholesalers with digital identifiers but unverified volume/rating history.',
    color: '#FF7A00' 
  },
  { 
    id: 't5', 
    name: 'Tier 5', 
    summary: 'Bulk Breakers', 
    details: 'Nodes identified as high-priority local distribution hubs often determined by business name or local market status.',
    color: '#8B5CF6' 
  },
  { 
    id: 't6', 
    name: 'Tier 6', 
    summary: 'General Wholesalers', 
    details: 'Diverse wholesalers dealing in general merchandise or non-food specific categories.',
    color: '#64748b' 
  },
  { 
    id: 't7', 
    name: 'Tier 7', 
    summary: 'Limited C&C', 
    details: 'Smaller or unverified Cash and Carry operations with limited public data.',
    color: '#94a3b8' 
  },
  { 
    id: 't8', 
    name: 'Supermarkets', 
    summary: 'Standard retail grocery outlets',
    details: 'Standard retail supermarket models that do not meet wholesale or distribution hub criteria.',
    color: '#cbd5e1' 
  },
  { 
    id: 't9', 
    name: 'Legacy Data', 
    summary: 'Historical field data requiring verification',
    details: 'Nodes from historical datasets requiring fresh field verification for the current distribution cycle.',
    color: '#e2e8f0' 
  },
  { 
    id: 't10', 
    name: 'Miscellaneous', 
    summary: 'Uncategorized nodes requiring research',
    details: 'Nodes requiring manual research or on-site visits to determine their final tier logic.',
    color: '#f1f5f9' 
  },
];

  export const MOCK_OUTLETS: Outlet[] = [
  {
    "id": "node-0",
    "name": "Kit Kat Cash & Carry Kliptown",
    "categoryId": "t1",
    "lat": -26.2795849,
    "lng": 27.8878885,
    "address": "137 3rd St, Klipriviersoog Estate, Soweto, 1811, South Africa"
  },
  {
    "id": "node-1",
    "name": "Laxmi Cash & Carry Nagin Spices",
    "categoryId": "t1",
    "lat": -26.3193574,
    "lng": 27.8273566,
    "address": "4 Concorde Pl, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-2",
    "name": "Frontline Cash & Carry C C Ishmail",
    "categoryId": "t1",
    "lat": -25.7410343,
    "lng": 28.1866643,
    "address": "181 Bloed St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-3",
    "name": "Superland Cash & Carry (Devland Springs)",
    "categoryId": "t1",
    "lat": -26.2642156,
    "lng": 28.4197873,
    "address": "Gold St, New Era, Springs, 1559, South Africa"
  },
  {
    "id": "node-4",
    "name": "SAKYNO BROTHER CASH & CARRY",
    "categoryId": "t1",
    "lat": -26.21231,
    "lng": 28.0205,
    "address": "10 Bonanza St, Selby, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-5",
    "name": "Tembisa Cash And Carry",
    "categoryId": "t1",
    "lat": -26.0245719,
    "lng": 28.2039347,
    "address": "39 Nakuru St, Ehlanzeni, Thembisa, 1691, South Africa"
  },
  {
    "id": "node-6",
    "name": "SA Cash & Carry | SA Liquor Boksburg",
    "categoryId": "t1",
    "lat": -26.2027224,
    "lng": 28.283708,
    "address": "18-, 20 Atlas Rd, Dunswart, Boksburg, 1501, South Africa"
  },
  {
    "id": "node-7",
    "name": "SA Cash and Carry | SA Liquor Junction Hill",
    "categoryId": "t1",
    "lat": -26.2922581,
    "lng": 28.1628701,
    "address": "Ginstein St, Union Settlement, Junction Hill, Germiston, 1428, South Africa"
  },
  {
    "id": "node-8",
    "name": "Vuuma Cash & Carry",
    "categoryId": "t1",
    "lat": -25.474529,
    "lng": 28.061621,
    "address": "pengulani street, Makgato Road, Mabopane, 0198, South Africa"
  },
  {
    "id": "node-9",
    "name": "Cash & Carry Pretoria West",
    "categoryId": "t1",
    "lat": -25.7166767,
    "lng": 28.1055736,
    "address": "1599 Van Der Hoff Rd, Zandfontein 317-Jr, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-10",
    "name": "Sweet Mart Cash & Carry",
    "categoryId": "t1",
    "lat": -26.2186291,
    "lng": 28.0119201,
    "address": "85 Planet Ave, Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-11",
    "name": "Soweto Cash & Carry",
    "categoryId": "t1",
    "lat": -26.1781008,
    "lng": 27.8791087,
    "address": "Rich Man & Poor Man Complex, & Corna Elias Motsoaledi, 1 Main Reef Rd, Roodepoort 237-Iq, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-12",
    "name": "Top1 Cash & Carry",
    "categoryId": "t1",
    "lat": -26.3442293,
    "lng": 28.1864227,
    "address": "14919 Bierman Rd, Vosloorus Ext 31, Vosloorus, 1475, South Africa"
  },
  {
    "id": "node-13",
    "name": "Wholesale Meat Cash and Carry - Meyerton",
    "categoryId": "t1",
    "lat": -26.5595016,
    "lng": 28.0166994,
    "address": "29c Loch St, Meyerton, Vereeniging, 1960, South Africa"
  },
  {
    "id": "node-14",
    "name": "Africa Cash & Carry Crown Mines (PTY) Ltd",
    "categoryId": "t1",
    "lat": -26.2171074,
    "lng": 28.0101833,
    "address": "Cnr Crownwood Road & Mines, Coach St, Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-15",
    "name": "Zns Cash And Carry",
    "categoryId": "t1",
    "lat": -26.2181754,
    "lng": 28.0190114,
    "address": "32 genesis boulevard crown mines, Crown City, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-16",
    "name": "Cash & Carry Springs",
    "categoryId": "t1",
    "lat": -26.264212,
    "lng": 28.418424,
    "address": "Gold St, New Era, Springs, 1559, South Africa"
  },
  {
    "id": "node-17",
    "name": "Yarona Cash and Carry",
    "categoryId": "t1",
    "lat": -26.2177108,
    "lng": 28.0112633,
    "address": "Carriage Close &, Coach St, Crown, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-18",
    "name": "Save More Cash & Carry",
    "categoryId": "t1",
    "lat": -25.7443696,
    "lng": 28.1600545,
    "address": "339 Luttig St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-19",
    "name": "Tshwane cash and carry",
    "categoryId": "t1",
    "lat": -25.7438432,
    "lng": 28.1631176,
    "address": "284 Vom Hagen St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-20",
    "name": "Wholesale Meat Cash & Carry KITKAT - Pretoria West",
    "categoryId": "t1",
    "lat": -25.7478466,
    "lng": 28.1619196,
    "address": "327 WF Nkomo St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-21",
    "name": "UNIMART CASH CARRY",
    "categoryId": "t1",
    "lat": -26.1606175,
    "lng": 27.8680998,
    "address": "1 Luttig St, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-22",
    "name": "5 Star Cash & Carry Lenasia",
    "categoryId": "t1",
    "lat": -26.3401059,
    "lng": 27.8575728,
    "address": "22 Tugela St, Lenasia, 1820, South Africa"
  },
  {
    "id": "node-23",
    "name": "Devland Cash And Carry Wholesaler",
    "categoryId": "t1",
    "lat": -26.2786588,
    "lng": 27.9344877,
    "address": "Klepkas Rd &, Piston Rd, Lenasia, Soweto, 1811, South Africa"
  },
  {
    "id": "node-24",
    "name": "Advance Cash n Carry",
    "categoryId": "t1",
    "lat": -25.7147567,
    "lng": 28.16808,
    "address": "904 Haarlem St, Hermanstad, Pretoria, 0082, South Africa"
  },
  {
    "id": "node-25",
    "name": "Sunshine Cash & Carry Plaza",
    "categoryId": "t1",
    "lat": -26.1637765,
    "lng": 27.8709428,
    "address": "21, Roodepoort Plaza Centre, Main Reef, Van Wyk St, &, Johannesburg, 1724, South Africa"
  },
  {
    "id": "node-26",
    "name": "Kit Kat Cash & Carry Silverton",
    "categoryId": "t1",
    "lat": -25.73402,
    "lng": 28.30621,
    "address": "Cnr Stanza Bopape, 161 Van Wyk St, Silverton, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-27",
    "name": "Super Jumbo Cash & Carry",
    "categoryId": "t1",
    "lat": -26.2158442,
    "lng": 28.0101629,
    "address": "Crownwood Rd &, Main Reef Rd, Amalgam, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-28",
    "name": "Kit Kat Cash & Carry Pretoria West",
    "categoryId": "t2",
    "lat": -25.7472449,
    "lng": 28.1610359,
    "address": "Kit Kat Plaza W.F, 327 WF Nkomo St, 685 Christoffel St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-29",
    "name": "Kit Kat Cash & Carry Benoni",
    "categoryId": "t2",
    "lat": -26.1863349,
    "lng": 28.3266175,
    "address": "Oos St & Princess St, Klein, Benoni, 1500, South Africa"
  },
  {
    "id": "node-30",
    "name": "DB Cash And Carry",
    "categoryId": "t2",
    "lat": -26.3223239,
    "lng": 27.827125,
    "address": "Extension 2, 45 Gemsbok St, Lenasia, 1826, South Africa"
  },
  {
    "id": "node-31",
    "name": "Sunshine Cash & Carry Westgate",
    "categoryId": "t2",
    "lat": -26.1384236,
    "lng": 27.8580835,
    "address": "Cnr Albertina Sisulu Road, Wilgespruit St, &, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-32",
    "name": "China Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2204032,
    "lng": 28.0127107,
    "address": "Johannesburg Crown City Cnr Of Renaissance BLVD and, MINES Building D, Discovery Dr, Crown City, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-33",
    "name": "Aazies Cash & Carry Cc",
    "categoryId": "t2",
    "lat": -26.205035,
    "lng": 28.034244,
    "address": "33 Gerard Sekoto St, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-34",
    "name": "Vosloorus Cash And Carry",
    "categoryId": "t2",
    "lat": -26.3426906,
    "lng": 28.2089085,
    "address": "9, Vosloorus Square, Bierman Rd, Vosloorus, Johannesburg, 1475, South Africa"
  },
  {
    "id": "node-35",
    "name": "Kit Kat Cash & Carry Mabopane",
    "categoryId": "t2",
    "lat": -25.5004132,
    "lng": 28.0863189,
    "address": "No 17 Block N, Central House Road, Mabopane Unit N, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-36",
    "name": "Wholesale meat cash and carry Silverton",
    "categoryId": "t2",
    "lat": -25.7339985,
    "lng": 28.3055949,
    "address": "161 Van Wyk St, Silverton, Pretoria, 0184, South Africa"
  },
  {
    "id": "node-37",
    "name": "Mursal Cash & Carry",
    "categoryId": "t2",
    "lat": -25.9991875,
    "lng": 28.2070625,
    "address": "2624+8R, Ivory Park, Midrand, 1693, South Africa"
  },
  {
    "id": "node-38",
    "name": "SA Cash & Carry | SA Liquor Springs",
    "categoryId": "t2",
    "lat": -26.269412,
    "lng": 28.4045325,
    "address": "1 Vlakfontein St, Fulcrum, Springs, 1559, South Africa"
  },
  {
    "id": "node-39",
    "name": "Big Daddy's Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7551019,
    "lng": 28.188985,
    "address": "484 Jeff Masemola St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-40",
    "name": "Heidelberg cash&carry",
    "categoryId": "t2",
    "lat": -26.5157021,
    "lng": 28.3554154,
    "address": "7 Kismet St, Shalimar Ridge, Heidelberg - GP, 1441, South Africa"
  },
  {
    "id": "node-41",
    "name": "Vereeniging Cash & Carry",
    "categoryId": "t2",
    "lat": -26.6749549,
    "lng": 27.917307,
    "address": "Beaconsfield Ave, Leeuwkuil, Vereeniging, South Africa"
  },
  {
    "id": "node-42",
    "name": "Rago Cash & Carry - King Of Snacks (Factory Shop)",
    "categoryId": "t2",
    "lat": -26.3277939,
    "lng": 27.8254974,
    "address": "07 Albert St, Lenasia, 1820, South Africa"
  },
  {
    "id": "node-43",
    "name": "Continental Cash & Carry",
    "categoryId": "t2",
    "lat": -26.215496,
    "lng": 27.9954681,
    "address": "14 Mineral Cres, Crown, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-44",
    "name": "Newtown Cash And Carry",
    "categoryId": "t2",
    "lat": -26.204119,
    "lng": 28.028502,
    "address": "85 Barney Simon St, Newtown, Johannesburg, 2113, South Africa"
  },
  {
    "id": "node-45",
    "name": "Kwik Kat Cash And Carry (Pty) Ltd",
    "categoryId": "t2",
    "lat": -25.7413013,
    "lng": 28.1799868,
    "address": "35 Kgoši Mampuru St, Pretoria Central, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-46",
    "name": "Bel-Air Cash and Carry",
    "categoryId": "t2",
    "lat": -26.1796263,
    "lng": 27.9673608,
    "address": "8 Bessie Rd, Newlands, Randburg, 2092, South Africa"
  },
  {
    "id": "node-47",
    "name": "Sunshine Cash and Carry Electron",
    "categoryId": "t2",
    "lat": -26.1561976,
    "lng": 27.8681766,
    "address": "02 Electron St, Manufacta, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-48",
    "name": "Lucky's Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3418199,
    "lng": 28.217573,
    "address": "Barry Marais Rd, Vosloorus, Johannesburg, 1475, South Africa"
  },
  {
    "id": "node-49",
    "name": "Beder Cash And Carry",
    "categoryId": "t2",
    "lat": -26.0233658,
    "lng": 27.9236339,
    "address": "Cosmo City, Roodepoort, 2188, South Africa"
  },
  {
    "id": "node-50",
    "name": "Cash & Carry Sunshine Plaza-Mart Liquors",
    "categoryId": "t2",
    "lat": -26.1629206,
    "lng": 27.8702425,
    "address": "Shop 7, Nel St, Roodepoort, 1725, South Africa"
  },
  {
    "id": "node-51",
    "name": "7 Days Cash & Carry",
    "categoryId": "t2",
    "lat": -26.5297541,
    "lng": 28.3650947,
    "address": "3 D F Malan St, Heidelberg, Heidelberg - GP, 1439, South Africa"
  },
  {
    "id": "node-52",
    "name": "Stationery Cash and Carry",
    "categoryId": "t2",
    "lat": -26.2424774,
    "lng": 28.0071014,
    "address": "5 Rente St, Ormonde, Johannesburg South, 2091, South Africa"
  },
  {
    "id": "node-53",
    "name": "Tem's Cash And Carry",
    "categoryId": "t2",
    "lat": -26.2297811,
    "lng": 28.0920795,
    "address": "Merino Ave, City Deep, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-54",
    "name": "Wholesale Meat Cash and Carry - City Deep",
    "categoryId": "t2",
    "lat": -26.2290801,
    "lng": 28.0914937,
    "address": "Merino Ave, City Deep, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-55",
    "name": "Much Better Cash and carry",
    "categoryId": "t2",
    "lat": -26.2142229,
    "lng": 28.0016674,
    "address": "280 African trade center, Amalgam, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-56",
    "name": "J&E Cash ‘n Carry",
    "categoryId": "t2",
    "lat": -25.7481964,
    "lng": 28.1560309,
    "address": "423 WF Nkomo St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-57",
    "name": "Boksburg Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2235358,
    "lng": 28.2469749,
    "address": "22Leeuwpoort St, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-58",
    "name": "Market Cash & Carry & Drinks Liquor",
    "categoryId": "t2",
    "lat": -26.227194,
    "lng": 28.0796515,
    "address": "Hall 2, Market, Heidelberg Rd, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-59",
    "name": "Africa Cash & Carry Warehouse",
    "categoryId": "t2",
    "lat": -26.2042039,
    "lng": 28.023769,
    "address": "82-90 Dolly Radebe Road, Fordsburg, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-60",
    "name": "Tayo Cash N Carry",
    "categoryId": "t2",
    "lat": -26.2182692,
    "lng": 28.0101144,
    "address": "08 Carriage Cl, Crown Mines, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-61",
    "name": "China Cash & Carry Vereeniging",
    "categoryId": "t2",
    "lat": -26.6543655,
    "lng": 27.9740371,
    "address": "36 Bashee St, Three Rivers, Vereeniging, 1935, South Africa"
  },
  {
    "id": "node-62",
    "name": "Edge Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7496464,
    "lng": 28.1608952,
    "address": "335 Frederick St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-63",
    "name": "Shoprite Cash and Carry SW Springs",
    "categoryId": "t2",
    "lat": -26.2642536,
    "lng": 28.4199386,
    "address": "Corner Gold &, Industry Street, New Era, Springs, 1559, South Africa"
  },
  {
    "id": "node-64",
    "name": "Elangeni Cash & Carry",
    "categoryId": "t2",
    "lat": -26.1588096,
    "lng": 28.4184586,
    "address": "N12, Daveyton, Benoni, 1507, South Africa"
  },
  {
    "id": "node-65",
    "name": "Budget Cash & Carry",
    "categoryId": "t2",
    "lat": -25.8470056,
    "lng": 28.1035475,
    "address": "Sunderland Ridge, Centurion, 0186, South Africa"
  },
  {
    "id": "node-66",
    "name": "Blue moon cash and carry",
    "categoryId": "t2",
    "lat": -26.2883818,
    "lng": 27.8489235,
    "address": "5 Gateway St, Klipriviersoog, Soweto, 1811, South Africa"
  },
  {
    "id": "node-67",
    "name": "Germiston Cash And Carry",
    "categoryId": "t2",
    "lat": -26.2145992,
    "lng": 28.1698664,
    "address": "130 High St, Georgetown, Germiston, 1401, South Africa"
  },
  {
    "id": "node-68",
    "name": "Unimart Cash & Carry",
    "categoryId": "t2",
    "lat": -26.0094915,
    "lng": 28.2206053,
    "address": "Shop 10, Tembi Mall, Thembisa, Johannesburg, 1624, South Africa"
  },
  {
    "id": "node-69",
    "name": "Discount Cash and Carry (Xavier Boulevard)",
    "categoryId": "t2",
    "lat": -26.259677,
    "lng": 28.0090237,
    "address": "Building 3 Corner Vleiroos Road &, Xavier St, Winchester Hills, Johannesburg South, 2091, South Africa"
  },
  {
    "id": "node-70",
    "name": "PROTEA GLEN CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.2784305,
    "lng": 27.8154644,
    "address": "3558 Protea Blvd, Protea Glen, Soweto, 1819, South Africa"
  },
  {
    "id": "node-71",
    "name": "Q Cash And Carry",
    "categoryId": "t2",
    "lat": -26.182755,
    "lng": 27.70238,
    "address": "28 Park St S, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-72",
    "name": "Shoprite Cash and Carry SW Vosloorus",
    "categoryId": "t2",
    "lat": -26.343184,
    "lng": 28.206342,
    "address": "Bierman Road, Mc Botha Dr, &, Rusloo, 1475, South Africa"
  },
  {
    "id": "node-73",
    "name": "Kalkaal Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3886779,
    "lng": 28.1427086,
    "address": "Shop No: 9, Palm Ridge Shopping Centre, Palm Ridge, Johannesburg, 1654, South Africa"
  },
  {
    "id": "node-74",
    "name": "Darusalaam Cash & Carry",
    "categoryId": "t2",
    "lat": -26.6776357,
    "lng": 27.9298752,
    "address": "Senator Marks Ave, Vereeniging, 1938, South Africa"
  },
  {
    "id": "node-75",
    "name": "Shoprite Cash and Carry SW Pretoria West",
    "categoryId": "t2",
    "lat": -25.7171267,
    "lng": 28.1058821,
    "address": "1599 Van Der Hoff Road Zandfontein, West, Pretoria, 0019, South Africa"
  },
  {
    "id": "node-76",
    "name": "ERISA Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7491305,
    "lng": 28.1562179,
    "address": "Near 422, 422 WF Nkomo St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-77",
    "name": "Bangla Bazar Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3440784,
    "lng": 28.2057152,
    "address": "19955 Mc Botha Dr, Vosloorus Ext 37, Vosloorus, 1475, South Africa"
  },
  {
    "id": "node-78",
    "name": "KitKat cash&carry",
    "categoryId": "t2",
    "lat": -26.2025558,
    "lng": 28.050683,
    "address": "83-89 Mooi St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-79",
    "name": "CHAMPION CASH AND CARRY",
    "categoryId": "t2",
    "lat": -25.7475063,
    "lng": 28.1634536,
    "address": "279 WF Nkomo St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-80",
    "name": "Discover Cash And Carry",
    "categoryId": "t2",
    "lat": -26.1986344,
    "lng": 27.6948673,
    "address": "20 Fiat St, Aureus, Randfontein, 1759, South Africa"
  },
  {
    "id": "node-81",
    "name": "unimart cash carry",
    "categoryId": "t2",
    "lat": -26.2441107,
    "lng": 28.0551145,
    "address": "592 Geranium St, Rosettenville, Johannesburg South, 2190, South Africa"
  },
  {
    "id": "node-82",
    "name": "VAAL CASH & CARRY SA (New Kal Kal Vereeniging)",
    "categoryId": "t2",
    "lat": -26.6776318,
    "lng": 27.9325169,
    "address": "Senator Marks Ave, Slyvanna, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-83",
    "name": "Carletonville Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3539397,
    "lng": 27.3955456,
    "address": "Shop No 1, 4 Zeolite St, Carletonville, 9594, South Africa"
  },
  {
    "id": "node-84",
    "name": "Lotto Cash Carry",
    "categoryId": "t2",
    "lat": -26.2049424,
    "lng": 28.028153,
    "address": "Noria Mabasa St, Newtown, Johannesburg, 2113, South Africa"
  },
  {
    "id": "node-85",
    "name": "Tembisa Cash And Carry",
    "categoryId": "t2",
    "lat": -25.5019183,
    "lng": 28.0589133,
    "address": "Block A, Mabopane Unit A, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-86",
    "name": "GTR Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7433359,
    "lng": 28.1683841,
    "address": "174 Vom Hagen St, Pretoria West, Pretoria, 0181, South Africa"
  },
  {
    "id": "node-87",
    "name": "Ocean Cash N Carry (Ltd)pty",
    "categoryId": "t2",
    "lat": -25.6056914,
    "lng": 27.9691211,
    "address": "896 Kgware Rd, Mapetla, Mmakau, 0208, South Africa"
  },
  {
    "id": "node-88",
    "name": "SD Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2597099,
    "lng": 28.01991,
    "address": "195 Rifle Range Rd, Robertsham, Johannesburg South, 2091, South Africa"
  },
  {
    "id": "node-89",
    "name": "Bismillah Waltloo Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7192289,
    "lng": 28.3311943,
    "address": "Waltloo Shopping Centre, Zasm St, Waltloo, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-90",
    "name": "New Generation Cash & Carry",
    "categoryId": "t2",
    "lat": -26.6647657,
    "lng": 27.9003551,
    "address": "Lager St, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-91",
    "name": "Segwagwa Cash & Carry",
    "categoryId": "t2",
    "lat": -25.9029051,
    "lng": 28.094007,
    "address": "6750 tebalelo street, Olievenhoutbosch, Centurion, 0187, South Africa"
  },
  {
    "id": "node-92",
    "name": "Baraka Cash & Carry",
    "categoryId": "t2",
    "lat": -26.1082552,
    "lng": 28.0880632,
    "address": "38 1st Ave, Wynberg, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-93",
    "name": "Mega Cash & Carry",
    "categoryId": "t2",
    "lat": -26.205275,
    "lng": 28.0346159,
    "address": "2nd, 32 Becker St, Newtown, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-94",
    "name": "117 Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2790921,
    "lng": 27.8870338,
    "address": "Main Rd, Kliptown, Johannesburg, 1812, South Africa"
  },
  {
    "id": "node-95",
    "name": "Unimart Cash & Carry Pretoria West",
    "categoryId": "t2",
    "lat": -25.7553088,
    "lng": 28.1541804,
    "address": "462 Charlotte Maxeke St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-96",
    "name": "Midway Cash and Carry Coca Cola wholesaler",
    "categoryId": "t2",
    "lat": -26.2903029,
    "lng": 27.8456437,
    "address": "55 Chris Hani Rd, Protea South, Johannesburg, 1820, South Africa"
  },
  {
    "id": "node-97",
    "name": "M.A. Cash And Carry Wholesale & Retail",
    "categoryId": "t2",
    "lat": -26.2017236,
    "lng": 28.0334215,
    "address": "149 Lilian Ngoyi St, Newtown, Johannesburg, 2113, South Africa"
  },
  {
    "id": "node-98",
    "name": "Vaal Save Cash & Carry Super Market",
    "categoryId": "t2",
    "lat": -26.6771216,
    "lng": 27.9308709,
    "address": "Voortrekker St, Vereeniging, 1938, South Africa"
  },
  {
    "id": "node-99",
    "name": "4 SQUARE WHOLESASLE AND CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.2761629,
    "lng": 27.8914179,
    "address": "3495 Klipspruit Valley Rd, Kliptown, Soweto, 1811, South Africa"
  },
  {
    "id": "node-100",
    "name": "WORLD FOODS CASH AND CARRY",
    "categoryId": "t2",
    "lat": -26.4161352,
    "lng": 27.8753957,
    "address": "1835, 32 Barium St, Lenasia South, Lenasia, 1835, South Africa"
  },
  {
    "id": "node-101",
    "name": "Cash and Carry - Vanderbijlpark",
    "categoryId": "t2",
    "lat": -26.7026662,
    "lng": 27.8590575,
    "address": "101 Edison Blvd, Vanderbijlpark C. E. 6, Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-102",
    "name": "M & S CASH AND CARRY",
    "categoryId": "t2",
    "lat": -26.2049821,
    "lng": 28.0345062,
    "address": "Gerard Sekoto St, Johannesburg, 2113, South Africa"
  },
  {
    "id": "node-103",
    "name": "Metro Cash & Carry - Head Office",
    "categoryId": "t2",
    "lat": -26.144699,
    "lng": 27.921719,
    "address": "Cnr Rhinoceros & Hendrik Potgieter Road, Weltevredenpark, Roodepoort, 1709, South Africa"
  },
  {
    "id": "node-104",
    "name": "ALBARAKA CASH AND CARRY MAYFAIR",
    "categoryId": "t2",
    "lat": -26.2055318,
    "lng": 28.0328601,
    "address": "1856 Albertina Sisulu Rd, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-105",
    "name": "Front Row Cash N Carry",
    "categoryId": "t2",
    "lat": -26.220176,
    "lng": 28.0045853,
    "address": "2 Jupiter Rd, Crown Mines, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-106",
    "name": "United Cash & Carry",
    "categoryId": "t2",
    "lat": -26.6701609,
    "lng": 27.9311792,
    "address": "Service Lane 3, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-107",
    "name": "Devland Cash N Carry",
    "categoryId": "t2",
    "lat": -26.27983,
    "lng": 27.93677,
    "address": "Devland, Soweto, 1832, South Africa"
  },
  {
    "id": "node-108",
    "name": "Star 2010 Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2486595,
    "lng": 28.0519087,
    "address": "Kenilworth, Johannesburg South, 2190, South Africa"
  },
  {
    "id": "node-109",
    "name": "Pretoria cash and Carry",
    "categoryId": "t2",
    "lat": -25.748193,
    "lng": 28.1678284,
    "address": "120 Church St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-110",
    "name": "B and a Cash and Carry",
    "categoryId": "t2",
    "lat": -25.7403414,
    "lng": 28.1856441,
    "address": "160 Bloed St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-111",
    "name": "Save Cash and Carry",
    "categoryId": "t2",
    "lat": -25.7567452,
    "lng": 28.1868455,
    "address": "158 Scheiding St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-112",
    "name": "K's Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7566874,
    "lng": 28.1874036,
    "address": "172 Scheiding St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-113",
    "name": "Pakistan Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7490465,
    "lng": 28.1884133,
    "address": "294 Paul Kruger St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-114",
    "name": "Chalie Wholesale Cash And Carry",
    "categoryId": "t2",
    "lat": -25.377513,
    "lng": 28.2572313,
    "address": "Mosimegi St, Kudube Unit 2, Temba, 0400, South Africa"
  },
  {
    "id": "node-115",
    "name": "Family Cash And Carry",
    "categoryId": "t2",
    "lat": -26.2405679,
    "lng": 28.3621373,
    "address": "Brakpan, 1541, South Africa"
  },
  {
    "id": "node-116",
    "name": "Vaal Cash And Carry",
    "categoryId": "t2",
    "lat": -26.6888,
    "lng": 27.8058,
    "address": "4 Krupp St, Vanderbijlpark N. W. 7, Vanderbijlpark, 1913, South Africa"
  },
  {
    "id": "node-117",
    "name": "BARAKA CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.6933578,
    "lng": 27.7976902,
    "address": "Bophelong, Vanderbijlpark, 1913, South Africa"
  },
  {
    "id": "node-118",
    "name": "Arafa Mini Cash & Carry Wholesale",
    "categoryId": "t2",
    "lat": -26.2060544,
    "lng": 28.018132,
    "address": "168 8th Ave, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-119",
    "name": "Sweet Way Cash 'N Carry C C",
    "categoryId": "t2",
    "lat": -26.2090542,
    "lng": 28.0461442,
    "address": "Cnr Coach & Carriage Close Cnr Rivonia &, Harries St, Crown, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-120",
    "name": "Pakistan Cash And Carry (Pty)Ltd.",
    "categoryId": "t2",
    "lat": -25.7531565,
    "lng": 28.1656035,
    "address": "246 Soutter St, Pretoria West, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-121",
    "name": "Friendly Cash & carry",
    "categoryId": "t2",
    "lat": -25.6652062,
    "lng": 28.1642224,
    "address": "634 President Steyn St, Wolmer, Pretoria, 0182, South Africa"
  },
  {
    "id": "node-122",
    "name": "New Cash & Carry Wholesale",
    "categoryId": "t2",
    "lat": -26.3890249,
    "lng": 28.1412219,
    "address": "13 Teebos Ave, Palm Ridge, Katlehong, 1488, South Africa"
  },
  {
    "id": "node-123",
    "name": "Lucky's Cash Carry (Wholesalers)",
    "categoryId": "t2",
    "lat": -26.36037,
    "lng": 28.19127,
    "address": "1 Mc Botha Dr, Vosloorus Ext 7, Vosloorus, 1475, South Africa"
  },
  {
    "id": "node-124",
    "name": "M&S Cash N Carry",
    "categoryId": "t2",
    "lat": -26.2008838,
    "lng": 28.0405802,
    "address": "183 Lilian Ngoyi St, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-125",
    "name": "Yalona Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2164012,
    "lng": 28.0199146,
    "address": "1 Renaissance Dr, Crown City, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-126",
    "name": "Z&Z Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2090878,
    "lng": 28.0214584,
    "address": "2 Central Rd, Fordsburg, Johannesburg, 2033, South Africa"
  },
  {
    "id": "node-127",
    "name": "WHITE GEM CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.2152943,
    "lng": 28.0265599,
    "address": "39 Vlak St, Selby South, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-128",
    "name": "Ocean Cash n Carry",
    "categoryId": "t2",
    "lat": -25.7346579,
    "lng": 28.3765392,
    "address": "8782 real lovers street,and, ext 7, Koporo St, Nellmapius, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-129",
    "name": "Siza abantu cash and carry",
    "categoryId": "t2",
    "lat": -25.98651487,
    "lng": 28.20281709,
    "address": "13930 Motaung St, Ivory Park, Midrand, 1693, South Africa"
  },
  {
    "id": "node-130",
    "name": "Kanana Cash & Carry",
    "categoryId": "t2",
    "lat": -25.4075645,
    "lng": 28.2666698,
    "address": "Juba Street, Hammanskraal West, Hammanskraal, South Africa"
  },
  {
    "id": "node-131",
    "name": "SA Giant Cash & Carry",
    "categoryId": "t2",
    "lat": -26.4724002,
    "lng": 27.8458081,
    "address": "3617 Golden Hwy, Drieziek, 1841, South Africa"
  },
  {
    "id": "node-132",
    "name": "Good One Price Cash & Carry",
    "categoryId": "t2",
    "lat": -26.1812924,
    "lng": 28.0642177,
    "address": "71 Raleigh St, Yeoville, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-133",
    "name": "Elsha Cash & Carry",
    "categoryId": "t2",
    "lat": -25.5031865,
    "lng": 28.0814615,
    "address": "Shop 165 Mabopane Rd, Mabopane Unit N, Pretoria, 0190, South Africa"
  },
  {
    "id": "node-134",
    "name": "Maluleka cash and carry",
    "categoryId": "t2",
    "lat": -26.0448975,
    "lng": 28.1779535,
    "address": "Edward Ave &, Maduna Ave, Chloorkop, Edenvale, 1624, South Africa"
  },
  {
    "id": "node-135",
    "name": "ADAM & SIWAR CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.2493868,
    "lng": 28.037152,
    "address": "74 Hay St, Turffontein, Johannesburg South, 2140, South Africa"
  },
  {
    "id": "node-136",
    "name": "A.A.A.T Cash n Carry",
    "categoryId": "t2",
    "lat": -26.6774218,
    "lng": 27.9299472,
    "address": "22 Stanley Ave, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-137",
    "name": "One Way Cash & Carry (Pty) Ltd T/A One Way Buildmart",
    "categoryId": "t2",
    "lat": -25.6400523,
    "lng": 27.7792067,
    "address": "51 Spoorweg St, Brits, 0250, South Africa"
  },
  {
    "id": "node-138",
    "name": "Foodline Cash & Carry",
    "categoryId": "t2",
    "lat": -25.7838783,
    "lng": 28.0965764,
    "address": "313 Bengal St, Laudium, Centurion, 0037, South Africa"
  },
  {
    "id": "node-139",
    "name": "Kit Kat Cash & Carry Mamelodi",
    "categoryId": "t2",
    "lat": -25.69691,
    "lng": 28.4210231,
    "address": "1683 Tsamaya Ave, Mahube Valley, Pretoria, 0147, South Africa"
  },
  {
    "id": "node-140",
    "name": "Weston Cash & Carry C C",
    "categoryId": "t2",
    "lat": -26.3179407,
    "lng": 27.6514519,
    "address": "88 Edwards Ave, Westonaria, 1779, South Africa"
  },
  {
    "id": "node-141",
    "name": "Honeydew Cash And Carry",
    "categoryId": "t2",
    "lat": -26.0635689,
    "lng": 27.905508,
    "address": "60 Beyers Naudé Dr, Zandspruit, Randburg, 1724, South Africa"
  },
  {
    "id": "node-142",
    "name": "Global Food Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3941029,
    "lng": 27.8778056,
    "address": "Uniualle, 43 Golden Hwy, Lenasia South, Johannesburg, 1829, South Africa"
  },
  {
    "id": "node-143",
    "name": "USAVE MORE CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.25987,
    "lng": 28.4227592,
    "address": "56 Watt Rd, New Era, Springs, 1559, South Africa"
  },
  {
    "id": "node-144",
    "name": "Tiger Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3175122,
    "lng": 27.6521302,
    "address": "93 Edwards Ave, Westonaria, 1779, South Africa"
  },
  {
    "id": "node-145",
    "name": "New blue star cash and carry",
    "categoryId": "t2",
    "lat": -25.3753203,
    "lng": 28.2614841,
    "address": "4413, Kudube Unit 2, Temba, 0400, South Africa"
  },
  {
    "id": "node-146",
    "name": "MIMOS CASH & CARRY",
    "categoryId": "t2",
    "lat": -26.6964118,
    "lng": 27.8345929,
    "address": "Vanderbijlpark C. C., Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-147",
    "name": "Budget cash and carry",
    "categoryId": "t2",
    "lat": -25.5008831,
    "lng": 28.0845023,
    "address": "Industrial site, Mabopane Unit N, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-148",
    "name": "Vom Hagen Cash Carry",
    "categoryId": "t2",
    "lat": -25.7435186,
    "lng": 28.1636551,
    "address": "264 Vom Hagen St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-149",
    "name": "Tembisa Cash And Carry",
    "categoryId": "t2",
    "lat": -25.5206613,
    "lng": 28.0885967,
    "address": "Block A, 2023 Bushveld Rd, Soshanguve - NNME 1, Mabopane, 0164, South Africa"
  },
  {
    "id": "node-150",
    "name": "4 Square Wholesale & Cash & Carry",
    "categoryId": "t2",
    "lat": -26.2023285,
    "lng": 28.0242135,
    "address": "45 Lilian Ngoyi St, Fordsburg, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-151",
    "name": "ABUNDANCE CASH & CARRY",
    "categoryId": "t2",
    "lat": -25.7484509,
    "lng": 28.161438,
    "address": "314 WF Nkomo St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-152",
    "name": "North Cash & Carry",
    "categoryId": "t2",
    "lat": -25.67707,
    "lng": 28.1757151,
    "address": "244 Danie Theron St, Pretoria North, Pretoria, 0182, South Africa"
  },
  {
    "id": "node-153",
    "name": "Ilanga Cash And Carry",
    "categoryId": "t2",
    "lat": -26.3884309,
    "lng": 28.142371,
    "address": "Shop No. 3, Stans Place, Teebos Ave, Palm Ridge, Johannesburg, 1458, South Africa"
  },
  {
    "id": "node-154",
    "name": "Thembisa cash and carry.in Mayibuye",
    "categoryId": "t2",
    "lat": -26.0315319,
    "lng": 28.1740386,
    "address": "134 Modderfontein commercia,Midrand, 5Rotweiler street,Commercial,1685, Commercia, Thembisa, 1401, South Africa"
  },
  {
    "id": "node-155",
    "name": "Orient Cash & Carry",
    "categoryId": "t2",
    "lat": -26.276957,
    "lng": 27.8890195,
    "address": "Unit No: 4, Walter Sisulu Square, Klipspruit Valley Rd, Soweto, Johannnesburg, 1809, South Africa"
  },
  {
    "id": "node-156",
    "name": "METRO CASH & CARRY",
    "categoryId": "t2",
    "lat": -25.5877588,
    "lng": 27.986289,
    "address": "208 Lucas Mangope Rd, Ga-Rankuwa Rural, Ga-Rankuwa, 0208, South Africa"
  },
  {
    "id": "node-157",
    "name": "METRO HEBRON CASH & CARRY",
    "categoryId": "t2",
    "lat": -25.580496,
    "lng": 28.104712,
    "address": "119, M20 Hebron Rd, ERASMUS, Soshanguve, 0190, South Africa"
  },
  {
    "id": "node-158",
    "name": "Pta North Cash and Carry",
    "categoryId": "t2",
    "lat": -25.6752722,
    "lng": 28.1718737,
    "address": "261 Emily Street. Hobhouse evenue, Pretoria North, Pretoria, 0116, South Africa"
  },
  {
    "id": "node-159",
    "name": "MM Cash & Carry",
    "categoryId": "t2",
    "lat": -26.3200438,
    "lng": 27.8263767,
    "address": "Shop No, 20 Rose Ave, Johannesburg, 1827, South Africa"
  },
  {
    "id": "node-160",
    "name": "Igal Cash and carry",
    "categoryId": "t2",
    "lat": -26.3737509,
    "lng": 28.1618969,
    "address": "819 Rammokonopi Section, Sontonga Rd, Likole, Katlehong, 1431, South Africa"
  },
  {
    "id": "node-161",
    "name": "SHAHBAZ MUSHTAQ CASH AND CARRY (PTY)LTD",
    "categoryId": "t2",
    "lat": -25.784664,
    "lng": 28.104992,
    "address": "250 Aquamarine St, Laudium, Johannesburg, 0037, South Africa"
  },
  {
    "id": "node-162",
    "name": "Makhulu Cash And Carry",
    "categoryId": "t2",
    "lat": -26.536154,
    "lng": 27.892031,
    "address": "346 Eve Street, The Evaton Estate, Vereeniging, 1984, South Africa"
  },
  {
    "id": "node-163",
    "name": "Lyttelton Fresh Produce Housewives Market",
    "categoryId": "t3",
    "lat": -25.8280028,
    "lng": 28.2051276,
    "address": "Government Rd, 102 Napier Rd, Lyttelton Manor, Centurion, 0157, South Africa"
  },
  {
    "id": "node-164",
    "name": "Barrie's Meat Traders (PTY) Ltd",
    "categoryId": "t3",
    "lat": -26.1729152,
    "lng": 28.2247097,
    "address": "53 Rudo Nell Rd, Hughes, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-165",
    "name": "Savemor Meatgood",
    "categoryId": "t3",
    "lat": -25.5600124,
    "lng": 28.0018693,
    "address": "Zone 15, 1 Main St, Ga-Rankuwa Industrial Twp, Ga-Rankuwa, 0208, South Africa"
  },
  {
    "id": "node-166",
    "name": "Roxana Fruit Market",
    "categoryId": "t3",
    "lat": -26.2211833,
    "lng": 28.1682254,
    "address": "18 Webber Rd, Germiston South (Industries E A), Germiston, 1401, South Africa"
  },
  {
    "id": "node-167",
    "name": "Sunrise Sweet Market",
    "categoryId": "t3",
    "lat": -26.2218411,
    "lng": 28.0774073,
    "address": "110-111, Product City Deer, City Deep, Johannesburg, 2197, South Africa"
  },
  {
    "id": "node-168",
    "name": "MULTImeat",
    "categoryId": "t3",
    "lat": -26.2786064,
    "lng": 27.9332523,
    "address": "2018, 30 East St, Devland, Soweto, 1811, South Africa"
  },
  {
    "id": "node-169",
    "name": "Big Save Tshwane Market",
    "categoryId": "t3",
    "lat": -25.7413877,
    "lng": 28.1675368,
    "address": "The Tshwane Fresh Produce Market, Es'kia Mphahlele Dr, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-170",
    "name": "Econofoods Fourways",
    "categoryId": "t3",
    "lat": -26.0244256,
    "lng": 27.9889745,
    "address": "Waterford Shopping Centre, Nerine St, Fourways, Sandton, 2055, South Africa"
  },
  {
    "id": "node-171",
    "name": "SH Supermarket Wholesale & Retailer",
    "categoryId": "t3",
    "lat": -25.623527,
    "lng": 28.096327,
    "address": "02, Rosslyn Plaza, De Waal St, Rosslyn, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-172",
    "name": "Econofoods Krugersdorp",
    "categoryId": "t3",
    "lat": -26.084432,
    "lng": 27.7788593,
    "address": "Cecil Knight Street &, De Wet St, Krugersdorp North, Krugersdorp, 1718, South Africa"
  },
  {
    "id": "node-173",
    "name": "Elangeni Powertrade",
    "categoryId": "t3",
    "lat": -26.1585376,
    "lng": 28.4181031,
    "address": "Shop No. 1, Majutene Square, Alliance Rd, Daveyton, Johannesburg, 1520, South Africa"
  },
  {
    "id": "node-174",
    "name": "Econofoods North Gate",
    "categoryId": "t3",
    "lat": -26.0623192,
    "lng": 27.9454049,
    "address": "21 Northumberland Ave, Northgate, Roodepoort, 2162, South Africa"
  },
  {
    "id": "node-175",
    "name": "Econofoods Vanderbijlpark",
    "categoryId": "t3",
    "lat": -26.7089156,
    "lng": 27.8199179,
    "address": "Vaal Mall, Barrage Rd, Vanderbijlpark S. W. 2, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-176",
    "name": "Platinum Cash & Cash",
    "categoryId": "t3",
    "lat": -26.7186749,
    "lng": 27.066919,
    "address": "15 Industria St, Potchindustria, Potchefstroom, 2520, South Africa"
  },
  {
    "id": "node-177",
    "name": "Randburg Wholesale Market",
    "categoryId": "t3",
    "lat": -26.0994033,
    "lng": 27.9928016,
    "address": "Carreira Centre, 252 Pine Ave, Ferndale, Johannesburg, 2160, South Africa"
  },
  {
    "id": "node-178",
    "name": "Bunning Wholesalers And Distributors",
    "categoryId": "t3",
    "lat": -26.2051671,
    "lng": 28.0118752,
    "address": "98/100 8th Ave, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-179",
    "name": "Big Bull Meat Wholesalers",
    "categoryId": "t3",
    "lat": -26.7048545,
    "lng": 27.8123385,
    "address": "1 Rautenbach Rd, Staalrus AH, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-180",
    "name": "Ouklip Supermarket and Wholesalers",
    "categoryId": "t3",
    "lat": -26.1089245,
    "lng": 27.8551299,
    "address": "61 Ouklip Rd, Wilro Park, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-181",
    "name": "Blue Bell Wholesalers",
    "categoryId": "t3",
    "lat": -26.3592178,
    "lng": 27.4105539,
    "address": "2 Platinum St, Carletonville, 2499, South Africa"
  },
  {
    "id": "node-182",
    "name": "Roxana Fruit Market 2",
    "categoryId": "t4",
    "lat": -26.2910823,
    "lng": 28.2287902,
    "address": "Cnr Heidelberg and Van Dyk Road, Rondebult, Klippoortjie, Germiston, 1401, South Africa"
  },
  {
    "id": "node-183",
    "name": "Econofoods Pretoria",
    "categoryId": "t4",
    "lat": -25.7334765,
    "lng": 28.3307448,
    "address": "Axle St, Silverton, Pretoria, 0184, South Africa"
  },
  {
    "id": "node-184",
    "name": "Food For Life",
    "categoryId": "t4",
    "lat": -26.2303352,
    "lng": 28.0823554,
    "address": "Hall 2, 206A, Johannesburg, Fresh Produce Market, 02 Fortune St, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-185",
    "name": "Tems Fresh Meat Wholesalers (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.2293364,
    "lng": 28.0914072,
    "address": "cnr houer road and merino avenue City Deep, Houer Rd, City Deep, Johannesburg South, 2197, South Africa"
  },
  {
    "id": "node-186",
    "name": "Eggspert Eggs",
    "categoryId": "t4",
    "lat": -26.0066109,
    "lng": 28.3059891,
    "address": "24 Riverview Dr, Elandsfontein AH, South Africa"
  },
  {
    "id": "node-187",
    "name": "Chicken @ Wholesale Depot",
    "categoryId": "t4",
    "lat": -26.3464275,
    "lng": 28.2390807,
    "address": "54 Caresbee Rd, Waterlands, Boksburg, 1475, South Africa"
  },
  {
    "id": "node-188",
    "name": "Bidfood Alberton",
    "categoryId": "t4",
    "lat": -26.2497672,
    "lng": 28.112806,
    "address": "34 Eland Cl, Elandspark, Alberton, South Africa"
  },
  {
    "id": "node-189",
    "name": "Vassco Distributors",
    "categoryId": "t4",
    "lat": -25.756087,
    "lng": 28.3630555,
    "address": "X 65, 86 Rooiberg St, Willow Park Manor, Pretoria, 0184, South Africa"
  },
  {
    "id": "node-190",
    "name": "Africa Spice Mart",
    "categoryId": "t4",
    "lat": -26.2051332,
    "lng": 28.018648,
    "address": "48 Langerman St, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-191",
    "name": "Egg Depot - Mamelodi & Eersterust",
    "categoryId": "t4",
    "lat": -25.7159917,
    "lng": 28.323989,
    "address": "514 David Diedricks Ave, Eersterust, Pretoria, 0021, South Africa"
  },
  {
    "id": "node-192",
    "name": "Urban Foods-Fresh Produce Wholesaler",
    "categoryId": "t4",
    "lat": -26.1200992,
    "lng": 28.0831204,
    "address": "7 Andries St, Raumaraispark, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-193",
    "name": "Econofoods Horizon View",
    "categoryId": "t4",
    "lat": -26.1441311,
    "lng": 27.8695045,
    "address": "Horizon Shopping Centre, 61 Sonop St, Horizon View, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-194",
    "name": "Econofoods Alberton Town Square at Newmarket",
    "categoryId": "t4",
    "lat": -26.2765884,
    "lng": 28.12892,
    "address": "Heidelberg Rd, Newmarket Park, Alberton, 1449, South Africa"
  },
  {
    "id": "node-195",
    "name": "Food Trucks - Food Service Supplier",
    "categoryId": "t4",
    "lat": -26.080873,
    "lng": 28.089434,
    "address": "17 Eastern Service Rd, Eastgate, Sandton, 2148, South Africa"
  },
  {
    "id": "node-196",
    "name": "Bismillah Wholesaler",
    "categoryId": "t4",
    "lat": -26.2523667,
    "lng": 28.4392349,
    "address": "29 2nd St, Springs Old, Springs, 1560, South Africa"
  },
  {
    "id": "node-197",
    "name": "The House of atchar",
    "categoryId": "t4",
    "lat": -26.0098529,
    "lng": 28.2217013,
    "address": "394 Sheba St, Thembisa, Kempton Park, 1632, South Africa"
  },
  {
    "id": "node-198",
    "name": "Roodepoort R wholesales",
    "categoryId": "t4",
    "lat": -26.1704566,
    "lng": 27.8246034,
    "address": "Randfontein Rd, Witpoortjie, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-199",
    "name": "Makgatho Wholesalers",
    "categoryId": "t4",
    "lat": -25.4832374,
    "lng": 28.068008,
    "address": "1611 Bushveld Rd, Makgatho, Winterveld, 0198, South Africa"
  },
  {
    "id": "node-200",
    "name": "On the Run Marketing",
    "categoryId": "t4",
    "lat": -26.2073891,
    "lng": 28.1211545,
    "address": "Unit 9/10/11, The Gables Commercial Park, Wychwood, Johannesburg, 2197, South Africa"
  },
  {
    "id": "node-201",
    "name": "Econofoods Vereeniging",
    "categoryId": "t4",
    "lat": -26.6610048,
    "lng": 27.9709594,
    "address": "Nile Dr, Three Rivers, Vereeniging, 1935, South Africa"
  },
  {
    "id": "node-202",
    "name": "Surplus Grain Traders Retail",
    "categoryId": "t4",
    "lat": -26.2294338,
    "lng": 28.0771975,
    "address": "Hall 9 , Store 945 4 Fortune St, market, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-203",
    "name": "Owethu Wholesalers",
    "categoryId": "t4",
    "lat": -26.1612365,
    "lng": 27.8642847,
    "address": "16 Van Wyk St, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-204",
    "name": "Econofoods Brakpan",
    "categoryId": "t4",
    "lat": -26.2513269,
    "lng": 28.3195126,
    "address": "Airport Rd, Dalpark, Brakpan, 1541, South Africa"
  },
  {
    "id": "node-205",
    "name": "Erabo Wholesale Trading",
    "categoryId": "t4",
    "lat": -26.240737,
    "lng": 28.0553004,
    "address": "242 Johannesburg Rd, Rosettenville, Johannesburg, 2190, South Africa"
  },
  {
    "id": "node-206",
    "name": "Food For Life",
    "categoryId": "t4",
    "lat": -26.114195,
    "lng": 28.088564,
    "address": "2nd St, Wynberg, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-207",
    "name": "Pioneer Foods",
    "categoryId": "t4",
    "lat": -26.2499559,
    "lng": 27.972752,
    "address": "76 Aerodrome Rd, Aeroton, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-208",
    "name": "Wholesale & Retail",
    "categoryId": "t4",
    "lat": -26.2531723,
    "lng": 28.4388696,
    "address": "16 2nd St, Springs Central, Springs, 1559, South Africa"
  },
  {
    "id": "node-209",
    "name": "The Fat Greek Deli - Foods Delivery Service",
    "categoryId": "t4",
    "lat": -25.8264242,
    "lng": 28.2865365,
    "address": "618-628 Spes Bona Dr, Moreleta Park, Pretoria, 0044, South Africa"
  },
  {
    "id": "node-210",
    "name": "B & S Agencies",
    "categoryId": "t4",
    "lat": -25.992396,
    "lng": 28.0740985,
    "address": "Halfway House, Indianapolis St, Kyalami, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-211",
    "name": "Econofoods Germiston",
    "categoryId": "t4",
    "lat": -26.25537,
    "lng": 28.15803,
    "address": "Shop 68, The Reef Shopping Centre, 118 Chris St, Norton Small Farms, Germiston, 1401, South Africa"
  },
  {
    "id": "node-212",
    "name": "Lotus House (Kwa Muti Wholesalers cc )",
    "categoryId": "t4",
    "lat": -26.2075761,
    "lng": 28.0295092,
    "address": "194 Main Reef Rd, Westgate, Johannesburg, 2048, South Africa"
  },
  {
    "id": "node-213",
    "name": "Nayeem & Nassir Wholesale",
    "categoryId": "t4",
    "lat": -26.25427,
    "lng": 28.4391,
    "address": "53 2nd St, Springs New, Springs, 1560, South Africa"
  },
  {
    "id": "node-214",
    "name": "Mother Earth Peanuts, Grains and other Commodities (Johannesburg)",
    "categoryId": "t4",
    "lat": -25.9464781,
    "lng": 27.9336867,
    "address": "11 Middel Rd, Sunrella AH, 1748, South Africa"
  },
  {
    "id": "node-215",
    "name": "Tiga's Cafe and General Dealer",
    "categoryId": "t4",
    "lat": -25.480532,
    "lng": 28.104518,
    "address": "1265 Moeding St, Soshanguve, Pretoria, 0152, South Africa"
  },
  {
    "id": "node-216",
    "name": "Grayston Fruit & Vegetable",
    "categoryId": "t4",
    "lat": -26.1080796,
    "lng": 28.0845882,
    "address": "81 Pretoria Main Service Rd, Wynberg, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-217",
    "name": "Ingwe Foods (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.5187274,
    "lng": 28.0410542,
    "address": "63 Rooibok Rd, Highbury, Randvaal, 1960, South Africa"
  },
  {
    "id": "node-218",
    "name": "Mina Bulk & Save",
    "categoryId": "t4",
    "lat": -26.2320593,
    "lng": 28.0813093,
    "address": "Hall 2, Door 214, Joburg Market, Heidelberg Rd, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-219",
    "name": "GRL Sedibeng Wholesalers",
    "categoryId": "t4",
    "lat": -26.0079569,
    "lng": 28.2327839,
    "address": "Thami Mnyele Dr, Sedibeng Tembisa, Johannesburg, 1637, South Africa"
  },
  {
    "id": "node-220",
    "name": "Ak Eggs Wholesale pty ltd",
    "categoryId": "t4",
    "lat": -26.205274,
    "lng": 28.0150263,
    "address": "51 Princess St, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-221",
    "name": "Ireana Wholesalers",
    "categoryId": "t4",
    "lat": -26.1298108,
    "lng": 28.1804102,
    "address": "Unit 4, 54 Mopedi Rd, Sebenza, Johannesburg, 1610, South Africa"
  },
  {
    "id": "node-222",
    "name": "EARTH PRODUCTS",
    "categoryId": "t4",
    "lat": -26.1706701,
    "lng": 28.0888826,
    "address": "Observatory Sport Club, 59 Frederick St, Observatory, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-223",
    "name": "Azinaz Trading cc",
    "categoryId": "t4",
    "lat": -25.8347918,
    "lng": 28.1035185,
    "address": "131 Ellman St, Sunderland Ridge, Centurion, 0157, South Africa"
  },
  {
    "id": "node-224",
    "name": "Kliptown Plaza",
    "categoryId": "t4",
    "lat": -26.2786014,
    "lng": 27.8882309,
    "address": "Affodil St, Kliptown, Johannesburg, 1809, South Africa"
  },
  {
    "id": "node-225",
    "name": "Abdullah Miah General Dealer",
    "categoryId": "t4",
    "lat": -26.498001,
    "lng": 27.873807,
    "address": "Palm Dr, Orange Farm, 1841, South Africa"
  },
  {
    "id": "node-226",
    "name": "Kool Kwenchas",
    "categoryId": "t4",
    "lat": -26.2279626,
    "lng": 28.2880673,
    "address": "Corner of 158 Lily Van Niekerk, Reservoir Rd, Boksburg East Industrial, Benoni, 1540, South Africa"
  },
  {
    "id": "node-227",
    "name": "Top Line C&C",
    "categoryId": "t4",
    "lat": -26.2134818,
    "lng": 28.3005412,
    "address": "Manzil Traders Square, Actonville, Benoni, 1500, South Africa"
  },
  {
    "id": "node-228",
    "name": "Rohbot Sweet Wholesale",
    "categoryId": "t4",
    "lat": -26.213403,
    "lng": 28.16831,
    "address": "High St, Germiston, Johannesburg, 1400, South Africa"
  },
  {
    "id": "node-229",
    "name": "Generation Shop",
    "categoryId": "t4",
    "lat": -25.7434235,
    "lng": 28.1697411,
    "address": "147 Retief St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-230",
    "name": "Kingston Wholesale",
    "categoryId": "t4",
    "lat": -26.1112227,
    "lng": 28.0855065,
    "address": "690 Pretoria Main Rd, Wynberg, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-231",
    "name": "Stop Perishables Wholesalers",
    "categoryId": "t4",
    "lat": -26.2308207,
    "lng": 28.0804884,
    "address": "Store 211A, Johannesburg Fresh Produce Market, Fortune St, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-232",
    "name": "Moosa Hassen & Co (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.2054521,
    "lng": 28.0341397,
    "address": "21 Market St, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-233",
    "name": "Save-Mor wholesale. Centurion",
    "categoryId": "t4",
    "lat": -25.8580026,
    "lng": 28.1431034,
    "address": "183 Koedoe St, Wierdapark, Centurion, 0157, South Africa"
  },
  {
    "id": "node-234",
    "name": "Ali Sweets",
    "categoryId": "t4",
    "lat": -25.9241709,
    "lng": 28.0959493,
    "address": "44, Olifantsfontein Rd, Centurion, Pretoria, 0175, South Africa"
  },
  {
    "id": "node-235",
    "name": "Blue Market Wholesale",
    "categoryId": "t4",
    "lat": -25.3934201,
    "lng": 28.156793,
    "address": "Thintha Street, South Africa"
  },
  {
    "id": "node-236",
    "name": "Gitto's Sweet Wholesalers",
    "categoryId": "t4",
    "lat": -26.29173,
    "lng": 27.906719,
    "address": "Shoprite Center Eldorado, Sirkel Rd, Eldorado Park, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-237",
    "name": "Ndima Farms",
    "categoryId": "t4",
    "lat": -26.2698728,
    "lng": 27.7756429,
    "address": "ext 29 Main Rd, Protea Glen, Johannesburg, 1819, South Africa"
  },
  {
    "id": "node-238",
    "name": "Naledi Trading and Commodities (PTY) ltd",
    "categoryId": "t4",
    "lat": -26.0959311,
    "lng": 27.8126017,
    "address": "3 Loftus Rd, Noordheuwel, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-239",
    "name": "Assif's Trading Cc",
    "categoryId": "t4",
    "lat": -26.696344,
    "lng": 27.836843,
    "address": "Shop 2 Eric Louw St, Vanderbijlpark C. C., Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-240",
    "name": "TSS WHOLESALE AND DISTRIBUTORS",
    "categoryId": "t4",
    "lat": -25.7525187,
    "lng": 28.1732982,
    "address": "71 Von Wielligh St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-241",
    "name": "Vaal Distribution & Depot",
    "categoryId": "t4",
    "lat": -26.6602843,
    "lng": 27.9245127,
    "address": "Unit 15, 22 Dickenson Ln, Duncanville, Vereeniging, 1930, South Africa"
  },
  {
    "id": "node-242",
    "name": "KGH Flour & Maize",
    "categoryId": "t4",
    "lat": -26.2044263,
    "lng": 28.0897501,
    "address": "286 Jules St, Jeppestown, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-243",
    "name": "Sa green marketing and distribution (pty) ltd",
    "categoryId": "t4",
    "lat": -26.1998587,
    "lng": 28.0454738,
    "address": "60 Plein St, Newtown, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-244",
    "name": "Quality African Foods Stuff & Cosmetics",
    "categoryId": "t4",
    "lat": -26.1898191,
    "lng": 28.0486009,
    "address": "Opp.High Point Building, Kotze St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-245",
    "name": "Royal tansarik int (pty)LTD",
    "categoryId": "t4",
    "lat": -26.2049088,
    "lng": 28.0117772,
    "address": "47 BIRDS STREET, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-246",
    "name": "Bronkho- Super- Save",
    "categoryId": "t4",
    "lat": -25.804156,
    "lng": 28.746707,
    "address": "3, 32 Lanham St, Erasmus, Bronkhorstspruit, 1020, South Africa"
  },
  {
    "id": "node-247",
    "name": "Sumeya Wholesale & Retail",
    "categoryId": "t4",
    "lat": -25.803292,
    "lng": 28.74613,
    "address": "Shop No. P1 - 3, Godrich Square, Lahham Street, Erasmus, Bronkhorstspruit, 1020, South Africa"
  },
  {
    "id": "node-248",
    "name": "Rashida trading",
    "categoryId": "t4",
    "lat": -25.6166709,
    "lng": 27.9801305,
    "address": "608 Pilane St, RAMOGODI, Mmakau, 0208, South Africa"
  },
  {
    "id": "node-249",
    "name": "Mohale & Daughters Green Grocer",
    "categoryId": "t4",
    "lat": -25.7099084,
    "lng": 28.3890847,
    "address": "58 Broadway St, Mamelodi, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-250",
    "name": "E Wholesale World",
    "categoryId": "t4",
    "lat": -25.7258441,
    "lng": 28.1858861,
    "address": "156 Van Heerden St, Capital Park, Pretoria, 0084, South Africa"
  },
  {
    "id": "node-251",
    "name": "nsa Sweets & Groceries",
    "categoryId": "t4",
    "lat": -26.2889988,
    "lng": 27.8502086,
    "address": "Midway St, Midway, Johannesburg, 1864, South Africa"
  },
  {
    "id": "node-252",
    "name": "Rafati Shop",
    "categoryId": "t4",
    "lat": -26.2564601,
    "lng": 27.8261007,
    "address": "Phuti St, Naledi, Johannesburg, 1868, South Africa"
  },
  {
    "id": "node-253",
    "name": "Zanu & Ali",
    "categoryId": "t4",
    "lat": -26.159976,
    "lng": 27.868439,
    "address": "Station St, Roodepoort, Johannesburg, 1725, South Africa"
  },
  {
    "id": "node-254",
    "name": "Ninety9cent",
    "categoryId": "t4",
    "lat": -26.1187536,
    "lng": 28.1528177,
    "address": "No.3, Pebble Park 9, Pebble Creek Estate, Stoneridge Dr, Greenstone Hill, Johannesburg, 1609, South Africa"
  },
  {
    "id": "node-255",
    "name": "The Food Service Company",
    "categoryId": "t4",
    "lat": -26.0325624,
    "lng": 27.9550931,
    "address": "Unit 3, 199 on Epsom, 39 Epsom Ave, Hoogland, Randburg, 2169, South Africa"
  },
  {
    "id": "node-256",
    "name": "ALARAIEEN TRADING cc",
    "categoryId": "t4",
    "lat": -26.0112999,
    "lng": 28.1238821,
    "address": "UNIT 10 MIDLINE BUSINESS PARK, CNR LE ROUX & RICHARDS DRIVE, MIDRAND, midrand, Midrand, 1682, South Africa"
  },
  {
    "id": "node-257",
    "name": "RAJA BUSINESS ENTERPRISE",
    "categoryId": "t4",
    "lat": -26.1699514,
    "lng": 27.7578815,
    "address": "Commercial Centre Rd, Azaadville, Krugersdorp, 1754, South Africa"
  },
  {
    "id": "node-258",
    "name": "Mama T Tuck Shop",
    "categoryId": "t4",
    "lat": -25.9626016,
    "lng": 28.2065468,
    "address": "Angola St, Tswelopele, Thembisa, 1628, South Africa"
  },
  {
    "id": "node-259",
    "name": "Trading unlimited",
    "categoryId": "t4",
    "lat": -26.3214,
    "lng": 27.84512,
    "address": "9 Sirkon Ave, Lenasia, 2001, South Africa"
  },
  {
    "id": "node-260",
    "name": "Pick A Pack Stores",
    "categoryId": "t4",
    "lat": -26.1890228,
    "lng": 28.1617261,
    "address": "118 Rietfontein Rd, Primrose, Johannesburg, 1401, South Africa"
  },
  {
    "id": "node-261",
    "name": "ali wholesale",
    "categoryId": "t4",
    "lat": -26.1892736,
    "lng": 28.1609081,
    "address": "j, 42 Gorst Ave, Primrose, Germiston, 1401, South Africa"
  },
  {
    "id": "node-262",
    "name": "Vosloorus Veg And Spice",
    "categoryId": "t4",
    "lat": -26.342707,
    "lng": 28.2091828,
    "address": "6 Bierman Rd, Vosloorus, Johannesburg, 1475, South Africa"
  },
  {
    "id": "node-263",
    "name": "ZD Wholesalers & Retailers",
    "categoryId": "t4",
    "lat": -26.6897359,
    "lng": 27.8092,
    "address": "Curie Blvd, Vanderbijlpark N. W. 7, Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-264",
    "name": "THM SUPERMARKET WHOLESALE",
    "categoryId": "t4",
    "lat": -26.2102487,
    "lng": 28.0446071,
    "address": "Salisbury Claims, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-265",
    "name": "Big O Trading Distributors",
    "categoryId": "t4",
    "lat": -26.2129427,
    "lng": 28.0108089,
    "address": "34 Church St, Crown North, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-266",
    "name": "Badar store and eggs wholesalers",
    "categoryId": "t4",
    "lat": -25.7452945,
    "lng": 28.1697804,
    "address": "327 Retief St, Pretoria West, Pretoria, 2092, South Africa"
  },
  {
    "id": "node-267",
    "name": "DF Wholesalers",
    "categoryId": "t4",
    "lat": -26.6776567,
    "lng": 27.9299989,
    "address": "11 Senator Marks Ave, Vereeniging, 1930, South Africa"
  },
  {
    "id": "node-268",
    "name": "Saima Less Price Wholesale & Retail",
    "categoryId": "t4",
    "lat": -26.258857,
    "lng": 27.942198,
    "address": "Chris Hani Rd, Diepkloof, Johannesburg, 1864, South Africa"
  },
  {
    "id": "node-269",
    "name": "Kazi & Sons Discount",
    "categoryId": "t4",
    "lat": -26.2801333,
    "lng": 27.8870754,
    "address": "2nd St, Kliptown, Johannesburg, 1804, South Africa"
  },
  {
    "id": "node-270",
    "name": "S& JN Ake Tuck Shop",
    "categoryId": "t4",
    "lat": -26.2754257,
    "lng": 27.9097783,
    "address": "S 587 Mpondonde St, Pimville Zone 6, Johannesburg, 1809, South Africa"
  },
  {
    "id": "node-271",
    "name": "New Stop N Shop",
    "categoryId": "t4",
    "lat": -26.2286283,
    "lng": 28.0826554,
    "address": "05, Joburg Market, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-272",
    "name": "Lucky Mini Market",
    "categoryId": "t4",
    "lat": -26.1952537,
    "lng": 28.0532654,
    "address": "11, Naledi Student Residence, Bait Street, Dornfontein, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-273",
    "name": "Nzeli Trading Ent CC",
    "categoryId": "t4",
    "lat": -26.2043849,
    "lng": 28.06196,
    "address": "287 Main St, Jeppestown, Johannesburg, 2043, South Africa"
  },
  {
    "id": "node-274",
    "name": "Family Trading",
    "categoryId": "t4",
    "lat": -26.1790232,
    "lng": 28.0628657,
    "address": "Muller St, Yeoville, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-275",
    "name": "RA Trading",
    "categoryId": "t4",
    "lat": -26.2050446,
    "lng": 28.013897,
    "address": "56 Bird St, Mayfair, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-276",
    "name": "KSP Spice Enterprise",
    "categoryId": "t4",
    "lat": -26.20188,
    "lng": 28.02566,
    "address": "2 Gwigwi Mrwebi St, Newtown, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-277",
    "name": "Siyabonga s/m 157mnisi evenue",
    "categoryId": "t4",
    "lat": -25.731772,
    "lng": 28.4340871,
    "address": "157mnisi evenue, Mamelodi, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-278",
    "name": "Hmperco",
    "categoryId": "t4",
    "lat": -25.854663,
    "lng": 28.185779,
    "address": "1263 Embankment Rd, Centurion Central, Centurion, 0157, South Africa"
  },
  {
    "id": "node-279",
    "name": "Welcome Wholesale",
    "categoryId": "t4",
    "lat": -25.7021073,
    "lng": 28.2095789,
    "address": "Meyer St, Wonderboom, Pretoria, 0186, South Africa"
  },
  {
    "id": "node-280",
    "name": "Kalihati bargain centre",
    "categoryId": "t4",
    "lat": -25.7203784,
    "lng": 28.2597634,
    "address": "25 Lynette St, Kilner Park, Pretoria, 0186, South Africa"
  },
  {
    "id": "node-281",
    "name": "Muelelwa M Business Enterprise",
    "categoryId": "t4",
    "lat": -25.727367,
    "lng": 28.205945,
    "address": "290 Johan Heyns Dr, Gezina, Pretoria, 0084, South Africa"
  },
  {
    "id": "node-282",
    "name": "Hyper Wholesale",
    "categoryId": "t4",
    "lat": -26.489086,
    "lng": 27.8689182,
    "address": "Palm Road, Orange Farm, Johannesburg, 1841, South Africa"
  },
  {
    "id": "node-283",
    "name": "Mzansi Wholesale",
    "categoryId": "t4",
    "lat": -26.594801,
    "lng": 27.84741,
    "address": "13 Moshoeshoe St, Sebokeng, Vereeniging, 1983, South Africa"
  },
  {
    "id": "node-284",
    "name": "Salahdin Wholesale & Retail brakpan",
    "categoryId": "t4",
    "lat": -26.2341784,
    "lng": 28.3697432,
    "address": "442Voortrekker Road, Brakpan, 1540, South Africa"
  },
  {
    "id": "node-285",
    "name": "Bomiza Pty ltd",
    "categoryId": "t4",
    "lat": -26.371384,
    "lng": 28.375413,
    "address": "Spring, 479 nkanyenzi, Tsakani, Brakpan, 1550, South Africa"
  },
  {
    "id": "node-286",
    "name": "Mateme general dealer",
    "categoryId": "t4",
    "lat": -25.5373628,
    "lng": 28.0756009,
    "address": "3188, Etsoseng phase 8, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-287",
    "name": "Dubi's Mini Wholesaler",
    "categoryId": "t4",
    "lat": -26.220053,
    "lng": 27.8674225,
    "address": "Makobosi St, Soweto, Johannesburg, 1865, South Africa"
  },
  {
    "id": "node-288",
    "name": "Rose Consortium",
    "categoryId": "t4",
    "lat": -26.1281793,
    "lng": 27.8413325,
    "address": "Unit 1 - Princess Square Park President Street, Princess, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-289",
    "name": "Mama Ebite's",
    "categoryId": "t4",
    "lat": -26.2882548,
    "lng": 27.8493952,
    "address": "Midway St, Soweto, Johannesburg, 1864, South Africa"
  },
  {
    "id": "node-290",
    "name": "Good Price Wholesalers",
    "categoryId": "t4",
    "lat": -26.387711,
    "lng": 28.141854,
    "address": "Shop No:4, S.M.W. Shopping Centre, Palm Ridge, Johannesburg, 1456, South Africa"
  },
  {
    "id": "node-291",
    "name": "Skhulu's Atchaar Wholesaler",
    "categoryId": "t4",
    "lat": -26.3280669,
    "lng": 28.150398,
    "address": "141 Hospital Rd, Twala, Johannesburg, 1431, South Africa"
  },
  {
    "id": "node-292",
    "name": "esau's investment",
    "categoryId": "t4",
    "lat": -26.3205925,
    "lng": 28.1460744,
    "address": "368 mabizela street .maphanga section ,katlehong, Katlehong, Germiston, 1432, South Africa"
  },
  {
    "id": "node-293",
    "name": "DSR Traders pty ltd",
    "categoryId": "t4",
    "lat": -25.7881981,
    "lng": 28.1040253,
    "address": "Phase 1 Shop 1B, 280 Tangerine St, Laudium, Pretoria, 0037, South Africa"
  },
  {
    "id": "node-294",
    "name": "Rafiq Wholesaler",
    "categoryId": "t4",
    "lat": -26.1112652,
    "lng": 28.0894666,
    "address": "195 1st Ave, Wynwood, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-295",
    "name": "Mahin Shorty Hawkers",
    "categoryId": "t4",
    "lat": -26.1076063,
    "lng": 28.0862581,
    "address": "38 1st Ave, Alexandra, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-296",
    "name": "Ethio Snacks & Sweets Supermarker",
    "categoryId": "t4",
    "lat": -25.4093829,
    "lng": 28.280105,
    "address": "Kudebe Douglas Rens Rd, Hammanskraal, Pretoria, South Africa"
  },
  {
    "id": "node-297",
    "name": "P.J.W. General Dealers",
    "categoryId": "t4",
    "lat": -25.6272016,
    "lng": 28.2035984,
    "address": "5 Lavender Rd, Bon Accord AH, Pretoria, 0009, South Africa"
  },
  {
    "id": "node-298",
    "name": "Thembalethu Mahube Wholesaler",
    "categoryId": "t4",
    "lat": -25.9990954,
    "lng": 28.2059753,
    "address": "Ext. 3, 6927 Dlamini Dr, Ivory Park, Johannesburg, 1689, South Africa"
  },
  {
    "id": "node-299",
    "name": "Abz Wholesalers",
    "categoryId": "t4",
    "lat": -26.0024093,
    "lng": 28.2098188,
    "address": "Leboeng Section, Johannesburg, 1632, South Africa"
  },
  {
    "id": "node-300",
    "name": "Senyaka Tuck Shop",
    "categoryId": "t4",
    "lat": -25.989869,
    "lng": 28.208094,
    "address": "8688 Thutlo Street, Ivory Park, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-301",
    "name": "Shabalala Fruit And Snack Wholesale",
    "categoryId": "t4",
    "lat": -26.0021875,
    "lng": 28.2092722,
    "address": "152 Peacock St, Leboeng, Thembisa, 1632, South Africa"
  },
  {
    "id": "node-302",
    "name": "African Wholesaler",
    "categoryId": "t4",
    "lat": -26.2222502,
    "lng": 27.9007062,
    "address": "Soweto, Johannesburg, 1852, South Africa"
  },
  {
    "id": "node-303",
    "name": "Molemoeng Corporation Trading As Molly's wholesaler",
    "categoryId": "t4",
    "lat": -26.2915222,
    "lng": 27.8973569,
    "address": "171 Turf Ave, Eldorado Park, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-304",
    "name": "Safari Wholesalers",
    "categoryId": "t4",
    "lat": -26.3182091,
    "lng": 27.824033,
    "address": "Ajmery Centre, 176 Lenasia Dr, Lenasia, Johannesburg, 1820, South Africa"
  },
  {
    "id": "node-305",
    "name": "Kalatiya Aman Wholesalers",
    "categoryId": "t4",
    "lat": -26.212072,
    "lng": 28.1676502,
    "address": "61, 1401 High St, Georgetown, Germiston, 1401, South Africa"
  },
  {
    "id": "node-306",
    "name": "Acton Sweets & Snacks",
    "categoryId": "t4",
    "lat": -26.2147826,
    "lng": 28.2980027,
    "address": "415 Mayet Dr, Actonville, Johannesburg, 1501, South Africa"
  },
  {
    "id": "node-307",
    "name": "Primrose Wholesaler",
    "categoryId": "t4",
    "lat": -26.188847,
    "lng": 28.1624099,
    "address": "122 Rietfontein Rd, Primrose, Johannesburg, 1400, South Africa"
  },
  {
    "id": "node-308",
    "name": "Prime Hyper Meat & Chicken",
    "categoryId": "t4",
    "lat": -26.2094989,
    "lng": 28.284251,
    "address": "Main Reef Rd, Boksburg, Johannesburg, 1508, South Africa"
  },
  {
    "id": "node-309",
    "name": "Malume Wholesaler",
    "categoryId": "t4",
    "lat": -26.5370609,
    "lng": 27.893393,
    "address": "Shop 05 Springbok St, The Evaton Estate, Vereeniging, 1980, South Africa"
  },
  {
    "id": "node-310",
    "name": "Mzansi Wholesaler",
    "categoryId": "t4",
    "lat": -26.537584,
    "lng": 27.893106,
    "address": "167 Adam St, The Evaton Estate, Vereeniging, 1984, South Africa"
  },
  {
    "id": "node-311",
    "name": "Meyerton Rite Price",
    "categoryId": "t4",
    "lat": -26.557864,
    "lng": 28.0123309,
    "address": "9 Loch St, Meyerton, 1961, South Africa"
  },
  {
    "id": "node-312",
    "name": "Rainbowland Fruit & Veg",
    "categoryId": "t4",
    "lat": -26.5573579,
    "lng": 28.011144,
    "address": "4 Loch St, Meyerton, 1963, South Africa"
  },
  {
    "id": "node-313",
    "name": "Damas Wholesalers",
    "categoryId": "t4",
    "lat": -25.7406699,
    "lng": 28.195101,
    "address": "10 Sisulu St, Pretoria Central, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-314",
    "name": "Fresh Selextion",
    "categoryId": "t4",
    "lat": -25.7861014,
    "lng": 28.2838607,
    "address": "210 Amarand Avenue Pegasus, Building 1, Maine, Menlyn, Pretoria, 0181, South Africa"
  },
  {
    "id": "node-315",
    "name": "Gosave Wholesale & Retail",
    "categoryId": "t4",
    "lat": -26.022963,
    "lng": 27.9423186,
    "address": "Tennessee Ave, Sandpark, Johannesburg, 1748, South Africa"
  },
  {
    "id": "node-316",
    "name": "Woc",
    "categoryId": "t4",
    "lat": -26.0217712,
    "lng": 27.9290548,
    "address": "6 Central African Republic Ave, Cosmo City, Johannesburg, 2188, South Africa"
  },
  {
    "id": "node-317",
    "name": "Brentford distribution pty ltd",
    "categoryId": "t4",
    "lat": -26.2165033,
    "lng": 28.0088021,
    "address": "14 Vogt St, Crown mines, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-318",
    "name": "MORONDO CHICKEN WHOLESALE",
    "categoryId": "t4",
    "lat": -25.7408583,
    "lng": 28.1715461,
    "address": "468B Es'kia Mphahlele Dr, Pretoria West, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-319",
    "name": "Yellow Wholesalers",
    "categoryId": "t4",
    "lat": -25.739037,
    "lng": 28.175919,
    "address": "Shop C3, 24 Mogul St, Marabastad, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-320",
    "name": "AFROPRODUCTS: PREMIER ZIMBABWEAN FOOD DISTRIBUTORS",
    "categoryId": "t4",
    "lat": -25.7389306,
    "lng": 28.1728707,
    "address": "16 Lorentz St, Marabastad, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-321",
    "name": "CS22Investments",
    "categoryId": "t4",
    "lat": -25.7445933,
    "lng": 28.1711393,
    "address": "118 Luttig St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-322",
    "name": "Higher Life FMCG",
    "categoryId": "t4",
    "lat": -26.1007614,
    "lng": 27.9436763,
    "address": "104 Kayburne Ave, Randpark Ridge, Randburg, 2169, South Africa"
  },
  {
    "id": "node-323",
    "name": "The Cheff (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.1359,
    "lng": 27.93646,
    "address": "125B 8th Avenue, Fairland, Randburg, 2123, South Africa"
  },
  {
    "id": "node-324",
    "name": "Mmata Wholesale Distributor",
    "categoryId": "t4",
    "lat": -26.38107122,
    "lng": 28.3895039,
    "address": "Mandela St, Bluegum View, Nigel, 1499, South Africa"
  },
  {
    "id": "node-325",
    "name": "JERUSALEM Fruit & Veg",
    "categoryId": "t4",
    "lat": -26.1163417,
    "lng": 28.456562,
    "address": "24723 Kopie Motebang Ave, Winnie Mandela, Benoni, South Africa"
  },
  {
    "id": "node-326",
    "name": "Kaalfontein Wholesalers",
    "categoryId": "t4",
    "lat": -25.98759763,
    "lng": 28.17568296,
    "address": "Angelfish St, Kaalfontein, Midrand, 1632, South Africa"
  },
  {
    "id": "node-327",
    "name": "Almadina Supermarket 73",
    "categoryId": "t4",
    "lat": -26.3899306,
    "lng": 28.1419728,
    "address": "73 Celtis St, Palm Ridge, Katlehong, 1488, South Africa"
  },
  {
    "id": "node-328",
    "name": "Lefabo Wholesale",
    "categoryId": "t4",
    "lat": -26.2146434,
    "lng": 28.1702163,
    "address": "Georgetown, Germiston, 1401, South Africa"
  },
  {
    "id": "node-329",
    "name": "Addisalem Sweets General Dealer And Wholesalers",
    "categoryId": "t4",
    "lat": -25.3780648,
    "lng": 28.2563399,
    "address": "Mosimegi St, Kudube Unit 2, Temba, 0400, South Africa"
  },
  {
    "id": "node-330",
    "name": "Al-Baraka Wholesale & Retail",
    "categoryId": "t4",
    "lat": -25.9874709,
    "lng": 28.1758711,
    "address": "2608 Angelfish St, Kaalfontein, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-331",
    "name": "Brothers Tobacco King Wholesaler",
    "categoryId": "t4",
    "lat": -26.2493163,
    "lng": 28.0519923,
    "address": "Rosettenville, Johannesburg South, 2190, South Africa"
  },
  {
    "id": "node-332",
    "name": "Hope Right Wholesale & Retail",
    "categoryId": "t4",
    "lat": -25.9403215,
    "lng": 28.005988,
    "address": "Plum St, Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-333",
    "name": "2010 sweet shop",
    "categoryId": "t4",
    "lat": -26.4173843,
    "lng": 28.4692272,
    "address": "Lavers St, Nigel, 1491, South Africa"
  },
  {
    "id": "node-334",
    "name": "Raphael Fresh Produce Market & Wholesale",
    "categoryId": "t4",
    "lat": -26.18864175,
    "lng": 28.0497949,
    "address": "53 Pretoria St, Hillbrow, Johannesburg, 2038, South Africa"
  },
  {
    "id": "node-335",
    "name": "Best-Buy Wholesalers C C",
    "categoryId": "t4",
    "lat": -26.1832913,
    "lng": 27.7030339,
    "address": "18 Village St, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-336",
    "name": "Rainbow Wholesale",
    "categoryId": "t4",
    "lat": -26.3419879,
    "lng": 28.2169514,
    "address": "Barry Marais Rd, Vosloorus, 1486, South Africa"
  },
  {
    "id": "node-337",
    "name": "JERUSALEM SUPERMARKET",
    "categoryId": "t4",
    "lat": -25.93332326,
    "lng": 28.01460638,
    "address": "Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-338",
    "name": "Mt Discount Center",
    "categoryId": "t4",
    "lat": -25.98206054,
    "lng": 28.20621898,
    "address": "Riverside St, Ivory Park, Midrand, 1693, South Africa"
  },
  {
    "id": "node-339",
    "name": "Tladi's Wholesalers",
    "categoryId": "t4",
    "lat": -26.1084567,
    "lng": 28.1060233,
    "address": "Josias Madzunya St, Alexandra, 2014, South Africa"
  },
  {
    "id": "node-340",
    "name": "kaalfontein min market",
    "categoryId": "t4",
    "lat": -25.98710932,
    "lng": 28.17674968,
    "address": "Angelfish St, Kaalfontein, Midrand, 1685, South Africa"
  },
  {
    "id": "node-341",
    "name": "Mama Sweet Shop",
    "categoryId": "t4",
    "lat": -26.21141971,
    "lng": 28.16685992,
    "address": "37 High St, Georgetown, Johannesburg, 1400, South Africa"
  },
  {
    "id": "node-342",
    "name": "Plaza Wholesaler & Retailer",
    "categoryId": "t4",
    "lat": -25.5966517,
    "lng": 28.08574108,
    "address": "Barred Minnon St, Klipfontein, Soshanguve, 0152, South Africa"
  },
  {
    "id": "node-343",
    "name": "Pan Afric Wholesale And Retail",
    "categoryId": "t4",
    "lat": -26.2797408,
    "lng": 27.8868803,
    "address": "89 Main Rd, Kliptown, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-344",
    "name": "Mothapo Mokgaga B. Enterprises",
    "categoryId": "t4",
    "lat": -25.9417235,
    "lng": 28.0118707,
    "address": "Plum St, Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-345",
    "name": "Sweets To Go Factory Shop",
    "categoryId": "t4",
    "lat": -26.2322731,
    "lng": 28.3751974,
    "address": "271 Voortrekker Rd, Brakpan, 1541, South Africa"
  },
  {
    "id": "node-346",
    "name": "Pele Pele Trading Store",
    "categoryId": "t4",
    "lat": -26.2428919,
    "lng": 27.9257669,
    "address": "2137 Msimang St, Orlando East, Johannesburg, 1804, South Africa"
  },
  {
    "id": "node-347",
    "name": "Trinity African Food Stuff & Supermarket",
    "categoryId": "t4",
    "lat": -26.0297166,
    "lng": 27.9270147,
    "address": "150 Sierra Leone Ave, Cosmo City, Roodepoort, 2188, South Africa"
  },
  {
    "id": "node-348",
    "name": "Sun Wholesale",
    "categoryId": "t4",
    "lat": -25.9350259,
    "lng": 28.0145234,
    "address": "2832 Peach Rd, Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-349",
    "name": "Central Super Save",
    "categoryId": "t4",
    "lat": -26.201638,
    "lng": 28.1114105,
    "address": "527 Jules St, Malvern, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-350",
    "name": "Mohammed Wholesalers",
    "categoryId": "t4",
    "lat": -26.2784339,
    "lng": 27.8881132,
    "address": "Klipriviersoog Estate, Soweto, 1811, South Africa"
  },
  {
    "id": "node-351",
    "name": "Ajams Wholesaler",
    "categoryId": "t4",
    "lat": -26.3268574,
    "lng": 27.8256229,
    "address": "10 Albert St, Lenasia, 1820, South Africa"
  },
  {
    "id": "node-352",
    "name": "Prosperity Wholesale And Retail",
    "categoryId": "t4",
    "lat": -26.67749925,
    "lng": 27.92987971,
    "address": "18A Senator Marks Ave, Sedibeng, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-353",
    "name": "Kush supermarket fruit and vegetable",
    "categoryId": "t4",
    "lat": -26.20468822,
    "lng": 28.01023758,
    "address": "80 8th Ave, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-354",
    "name": "Al Falah Supermarket",
    "categoryId": "t4",
    "lat": -26.2800484,
    "lng": 27.8870597,
    "address": "5 Future Rd, Kliptown, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-355",
    "name": "Nikitta Wholesaler",
    "categoryId": "t4",
    "lat": -26.2246716,
    "lng": 27.9025831,
    "address": "Marsh St, Meadowlands, Johannesburg, 1852, South Africa"
  },
  {
    "id": "node-356",
    "name": "EGAD WHOLESALERS",
    "categoryId": "t4",
    "lat": -26.0988156,
    "lng": 28.0885976,
    "address": "18 3rd St, Marlboro, Sandton, 2063, South Africa"
  },
  {
    "id": "node-357",
    "name": "DHOOMBE GENERAL TRADING",
    "categoryId": "t4",
    "lat": -25.9337753,
    "lng": 28.0146699,
    "address": "2844 Peach Rd, Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-358",
    "name": "Madiba Retail & Wholesalers",
    "categoryId": "t4",
    "lat": -26.1879324,
    "lng": 27.8003175,
    "address": "Tshepisong, Soweto, 1754, South Africa"
  },
  {
    "id": "node-359",
    "name": "Club 57",
    "categoryId": "t4",
    "lat": -25.71097167,
    "lng": 28.3804735,
    "address": "Tsamaya Ave, Mamelodi, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-360",
    "name": "Delhi Spice Centre",
    "categoryId": "t4",
    "lat": -26.20081204,
    "lng": 28.012676,
    "address": "Cnr 4th Ave, 102 Church St, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-361",
    "name": "Nellamapius Wholesaler",
    "categoryId": "t4",
    "lat": -25.7436189,
    "lng": 28.3603806,
    "address": "200 Malebo Rd, Nellmapius, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-362",
    "name": "Mr.Snax 2 Hawkers Centre",
    "categoryId": "t4",
    "lat": -26.20631193,
    "lng": 28.03483808,
    "address": "30 Commissioner St, Ferreiras Dorp, Johannesburg, 2048, South Africa"
  },
  {
    "id": "node-363",
    "name": "BETAGI SUPER SAVE WHOLESALE & RETAIL",
    "categoryId": "t4",
    "lat": -26.18689868,
    "lng": 28.04869522,
    "address": "131 Claim St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-364",
    "name": "AFRICAN SIMBA",
    "categoryId": "t4",
    "lat": -26.013266,
    "lng": 28.2418137,
    "address": "107 Brian Mazibuko E, Mqantsa, Thembisa, 1632, South Africa"
  },
  {
    "id": "node-365",
    "name": "Gora's Wholesaler",
    "categoryId": "t4",
    "lat": -26.3488453,
    "lng": 27.389855,
    "address": "69 Van Zyl Smit St, Oberholzer, Carletonville, 2502, South Africa"
  },
  {
    "id": "node-366",
    "name": "Ezibeleni General Dealer",
    "categoryId": "t4",
    "lat": -26.2430487,
    "lng": 27.9229604,
    "address": "4457 Masupha St, Orlando East, Johannesburg, 1804, South Africa"
  },
  {
    "id": "node-367",
    "name": "Hillbrow Bazaar Wholesaler & Retail",
    "categoryId": "t4",
    "lat": -26.18896436,
    "lng": 28.04815884,
    "address": "35B Pretoria St, Hillbrow, Johannesburg, 2038, South Africa"
  },
  {
    "id": "node-368",
    "name": "Saulsville Liquor Wholesalers",
    "categoryId": "t4",
    "lat": -25.77209899,
    "lng": 28.0528442,
    "address": "68 Masopha St, Saulsville, Pretoria, 0125, South Africa"
  },
  {
    "id": "node-369",
    "name": "Hendon Business Enterprises Wholesale And Retail",
    "categoryId": "t4",
    "lat": -26.18824827,
    "lng": 28.05403586,
    "address": "36 Abel Rd, Berea, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-370",
    "name": "distribution ltd pty",
    "categoryId": "t4",
    "lat": -25.9329248,
    "lng": 28.0095524,
    "address": "Jb Marks Street, Diepsloot West, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-371",
    "name": "Grand Station Super Market",
    "categoryId": "t4",
    "lat": -26.2042452,
    "lng": 28.0625427,
    "address": "293 Main St, Jeppestown, Johannesburg, 2043, South Africa"
  },
  {
    "id": "node-372",
    "name": "Shakiba Supermarket",
    "categoryId": "t4",
    "lat": -26.2015095,
    "lng": 28.0493253,
    "address": "106 Kerk St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-373",
    "name": "Olives & Plates Ellipse",
    "categoryId": "t4",
    "lat": -26.01500417,
    "lng": 28.10309234,
    "address": "Ellipse Residential Development, Karkloof Cres, Midrand, 2066, South Africa"
  },
  {
    "id": "node-374",
    "name": "AZ WHOLESALERS & RETAILERS",
    "categoryId": "t4",
    "lat": -26.1878288,
    "lng": 28.0504923,
    "address": "Catherine Ave, Berea, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-375",
    "name": "Mpho Supermarket & Distribution",
    "categoryId": "t4",
    "lat": -25.9892157,
    "lng": 28.2283767,
    "address": "7511 Jabu Mdunge St, Thembisa, 1628, South Africa"
  },
  {
    "id": "node-376",
    "name": "Mr Wholesale",
    "categoryId": "t4",
    "lat": -26.6771703,
    "lng": 27.9269853,
    "address": "32 Senator Marks Ave, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-377",
    "name": "Themba Wholesalers",
    "categoryId": "t4",
    "lat": -25.93680216,
    "lng": 28.014286,
    "address": "3168 Lemon St, Diepsloot West 2, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-378",
    "name": "Fahimoe Wholesalers",
    "categoryId": "t4",
    "lat": -26.41782885,
    "lng": 28.4671344,
    "address": "43 1st Ave, nigel, Nigel, 1490, South Africa"
  },
  {
    "id": "node-379",
    "name": "Lucky Superstore",
    "categoryId": "t4",
    "lat": -26.2787249,
    "lng": 27.8871552,
    "address": "58 Main Rd, Kliptown, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-380",
    "name": "Bafikile Trading Store",
    "categoryId": "t4",
    "lat": -26.2321074,
    "lng": 27.8661268,
    "address": "Two, 454 Masingafi St, Zondi, Soweto, 1864, South Africa"
  },
  {
    "id": "node-381",
    "name": "S V Supermarket",
    "categoryId": "t4",
    "lat": -26.2789919,
    "lng": 27.8870383,
    "address": "Main Street, Kliptown, Johannesburg, 1809, South Africa"
  },
  {
    "id": "node-382",
    "name": "99 Ninety-Nine Day & Night Supermarket",
    "categoryId": "t4",
    "lat": -26.1812357,
    "lng": 28.0616721,
    "address": "49 Raleigh St, Yeoville, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-383",
    "name": "Midway sweet & grocery",
    "categoryId": "t4",
    "lat": -26.288937,
    "lng": 27.85013,
    "address": "21-11 Midway St, Klipriviersoog, Soweto, 1811, South Africa"
  },
  {
    "id": "node-384",
    "name": "Bazabaza Liquor Store",
    "categoryId": "t4",
    "lat": -26.2376507,
    "lng": 27.9289474,
    "address": "Sofasonke St, Orlando East, Soweto, 1804, South Africa"
  },
  {
    "id": "node-385",
    "name": "7rocks bottle store",
    "categoryId": "t4",
    "lat": -25.7453727,
    "lng": 28.18569454,
    "address": "179 Bosman St, Pretoria Central, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-386",
    "name": "PHAMBILI MEAT WHOLESALERS",
    "categoryId": "t4",
    "lat": -25.98174917,
    "lng": 28.20494842,
    "address": "Shop 8, Kopanong Shopping Centre, Riverside St, Ivory Park, Midrand, 1689, South Africa"
  },
  {
    "id": "node-387",
    "name": "Hawkers Spot",
    "categoryId": "t4",
    "lat": -26.159328,
    "lng": 27.8693579,
    "address": "01A Station St, Roodepoort, 1725, South Africa"
  },
  {
    "id": "node-388",
    "name": "TAWAKAL2 SUPERMARKET",
    "categoryId": "t4",
    "lat": -26.2045735,
    "lng": 28.0140796,
    "address": "134 8th Ave, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-389",
    "name": "AFIFA Cosmetics",
    "categoryId": "t4",
    "lat": -26.1824853,
    "lng": 27.7031271,
    "address": "Next To, Standard Bank, 15 Main Reef Rd, West Porges, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-390",
    "name": "J T Wholesaler",
    "categoryId": "t4",
    "lat": -26.6773259,
    "lng": 27.9289827,
    "address": "Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-391",
    "name": "JB3 Supermarket & Wholesalers",
    "categoryId": "t4",
    "lat": -26.1898523,
    "lng": 28.0477088,
    "address": "1004, Tower Hill, 37 Kotze St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-392",
    "name": "Rand Supermarket",
    "categoryId": "t4",
    "lat": -26.2790326,
    "lng": 27.8870332,
    "address": "Main Rd, Soweto, Johannnesburg, 1809, South Africa"
  },
  {
    "id": "node-393",
    "name": "Coco Mansions Lifestyle",
    "categoryId": "t4",
    "lat": -26.1890876,
    "lng": 28.3185373,
    "address": "67 Princes Ave, Benoni, 1500, South Africa"
  },
  {
    "id": "node-394",
    "name": "11 Brothers Supermarket",
    "categoryId": "t4",
    "lat": -25.7449886,
    "lng": 28.16979967,
    "address": "President Burgers St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-395",
    "name": "Binchamo Wholesales",
    "categoryId": "t4",
    "lat": -25.7469028,
    "lng": 28.1819633,
    "address": "Pretoria Central, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-396",
    "name": "Kalkfontein Supermarket",
    "categoryId": "t4",
    "lat": -25.99410989,
    "lng": 28.1856702,
    "address": "620 Solphin St, Kaalfontein, Johannesburg, 1632, South Africa"
  },
  {
    "id": "node-397",
    "name": "THANDABANTU Shop",
    "categoryId": "t4",
    "lat": -26.0306643,
    "lng": 27.9278204,
    "address": "Ivory Coast Cres, Cosmo City, Roodepoort, 2188, South Africa"
  },
  {
    "id": "node-398",
    "name": "Desaiâ€™s Wholesalers and Distributors",
    "categoryId": "t4",
    "lat": -29.601774,
    "lng": 30.3629082,
    "address": "1 Perth St, Pietermaritzburg, 3201, South Africa"
  },
  {
    "id": "node-399",
    "name": "NMR Trading cc",
    "categoryId": "t4",
    "lat": -26.3417306,
    "lng": 27.8275642,
    "address": "6 Blackwood Rd, Anchorville, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-400",
    "name": "PICK N WIN EXPRESS",
    "categoryId": "t4",
    "lat": -26.2161371,
    "lng": 28.0097888,
    "address": "CNR MAIN REEF &, Crownwood Rd, CROWN MINES, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-401",
    "name": "Kit Kat Express Breenugget",
    "categoryId": "t4",
    "lat": -26.1997574,
    "lng": 28.0524493,
    "address": "Lilian Ngoyi St &, Nugget St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-402",
    "name": "Sunrise Sweets",
    "categoryId": "t4",
    "lat": -25.7151808,
    "lng": 28.1676339,
    "address": "846 Haarlem St, Roseville, Pretoria, 0082, South Africa"
  },
  {
    "id": "node-403",
    "name": "Sunrise Sweets",
    "categoryId": "t4",
    "lat": -25.7151808,
    "lng": 28.1676339,
    "address": "846 Haarlem St, Roseville, Pretoria, 0082, South Africa"
  },
  {
    "id": "node-404",
    "name": "Supa Save Polokwane",
    "categoryId": "t4",
    "lat": -23.8993633,
    "lng": 29.4471796,
    "address": "Shop B27, Indian Center, Indian center, 10 Excelsior St, Polokwane Ext 15, Polokwane, 0699, South Africa"
  },
  {
    "id": "node-405",
    "name": "Unimart Hyper Midrand",
    "categoryId": "t4",
    "lat": -25.9971719,
    "lng": 28.1289151,
    "address": "5 North St, Halfway House, Midrand, 1635, South Africa"
  },
  {
    "id": "node-406",
    "name": "Overland Hyper",
    "categoryId": "t4",
    "lat": -26.256143,
    "lng": 28.1681233,
    "address": "Dinwiddie, Germiston, 1401, South Africa"
  },
  {
    "id": "node-407",
    "name": "Mimos Sweet Shop Polar Ice Cream",
    "categoryId": "t4",
    "lat": -26.6956854,
    "lng": 27.832306,
    "address": "Shop 4C, Frikkie Meyer Blvd, Vanderbijlpark C. W, Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-408",
    "name": "Rebel Food",
    "categoryId": "t4",
    "lat": -26.1540952,
    "lng": 28.2890993,
    "address": "28 Star St, Kleinfontein AH, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-409",
    "name": "Big Save Supermarket",
    "categoryId": "t4",
    "lat": -26.1085141,
    "lng": 28.2281371,
    "address": "Zuurfontein, Corner Central &, Kempstar Mall, Pretoria Rd, Zuurfontein 33-Ir, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-410",
    "name": "BENE DEVELOPMENT COMPANY (PTY) LTD",
    "categoryId": "t4",
    "lat": -26.367223,
    "lng": 27.9835302,
    "address": "118 Bronk Dr, Eikenhof, South Africa"
  },
  {
    "id": "node-411",
    "name": "Zaffsons Distributors",
    "categoryId": "t4",
    "lat": -26.3399144,
    "lng": 27.8571698,
    "address": "75 Nirvana Dr, Lenasia South, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-412",
    "name": "Adams Cafe And Superette",
    "categoryId": "t4",
    "lat": -26.3244034,
    "lng": 27.8582389,
    "address": "4, Protea Centre, Protea Ave, Protea, Johannesburg, 1820, South Africa"
  },
  {
    "id": "node-413",
    "name": "VAAL FOODZONE SUPERMARKET",
    "categoryId": "t4",
    "lat": -26.7119335,
    "lng": 27.8296051,
    "address": "Helena Lochner St, SW1, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-414",
    "name": "Sunrise Sweets (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.1343362,
    "lng": 27.9125033,
    "address": "Hendrik Potgieter Rd, Strubens Valley, Roodepoort, 1735, South Africa"
  },
  {
    "id": "node-415",
    "name": "Sabers Wholesalers",
    "categoryId": "t4",
    "lat": -26.1684081,
    "lng": 28.1611321,
    "address": "Sabers Wholesalers, 106 North Reef Road, Sunview Centre, Unit 12 Rietfontein 63-IR, Wilbart, Germiston, 2007, South Africa"
  },
  {
    "id": "node-416",
    "name": "Zorba's Cafe",
    "categoryId": "t4",
    "lat": -25.665215,
    "lng": 28.157206,
    "address": "757 President Steyn St, Wolmer, Pretoria, 0182, South Africa"
  },
  {
    "id": "node-417",
    "name": "Express School Foods (Pty) Ltd | Express Corporate Foods (Pty) Ltd",
    "categoryId": "t4",
    "lat": -26.17014,
    "lng": 28.1866639,
    "address": "14 Activia Rd, Activia Park, Germiston, 1429, South Africa"
  },
  {
    "id": "node-418",
    "name": "Massmart Holdings Ltd",
    "categoryId": "t4",
    "lat": -26.0323162,
    "lng": 28.0791543,
    "address": "16 Peltier Dr, Sunninghill, Sandton, 2191, South Africa"
  },
  {
    "id": "node-419",
    "name": "More4Less",
    "categoryId": "t4",
    "lat": -26.2050862,
    "lng": 28.0287157,
    "address": "82 Dolly Rathebe Rd, Newtown, Johannesburg, 2113, South Africa"
  },
  {
    "id": "node-420",
    "name": "Mofago Overland Hyper Liquors",
    "categoryId": "t4",
    "lat": -25.6172022,
    "lng": 27.9730387,
    "address": "Hoekfontein, Mmakau, 0208, South Africa"
  },
  {
    "id": "node-421",
    "name": "Makro South Africa",
    "categoryId": "t4",
    "lat": -26.0323162,
    "lng": 28.0791543,
    "address": "Sunninghill, Sandton, 2191, South Africa"
  },
  {
    "id": "node-422",
    "name": "HYPERLAND PHUMULA",
    "categoryId": "t4",
    "lat": -26.3147689,
    "lng": 28.1972194,
    "address": "CNR Ludlelo &, 3413 Luthando St, Roodekop, Germiston, 1410, South Africa"
  },
  {
    "id": "node-423",
    "name": "Paul's spaza center",
    "categoryId": "t4",
    "lat": -25.7398195,
    "lng": 28.1818536,
    "address": "93 Boom St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-424",
    "name": "Kit Kat Distribution Centre",
    "categoryId": "t4",
    "lat": -25.7686749,
    "lng": 28.1242427,
    "address": "Pretoria Industrial, Cnr Stephenson & Staal Road, Pretoria West, Pretoria Industrial, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-425",
    "name": "Unitrade Management Services Pty (Ltd)",
    "categoryId": "t4",
    "lat": -26.2388094,
    "lng": 28.0047935,
    "address": "5 Handel Rd, Ormonde, Johannesburg South, 2091, South Africa"
  },
  {
    "id": "node-426",
    "name": "ROOTS HOME",
    "categoryId": "t4",
    "lat": -26.2050623,
    "lng": 28.0554525,
    "address": "Shop No.27, Block 4, Jewel City Retail Cnr Fox Street and, Phillips St, City and Suburban, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-427",
    "name": "Sunshine Plaza",
    "categoryId": "t4",
    "lat": -26.1628784,
    "lng": 27.8702369,
    "address": "Olivier St, Roodepoort, 1714, South Africa"
  },
  {
    "id": "node-428",
    "name": "Dhodas Dried Fruit And Nuts",
    "categoryId": "t4",
    "lat": -26.3188079,
    "lng": 27.8359263,
    "address": "11 Swan St, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-429",
    "name": "Appel tree springs",
    "categoryId": "t4",
    "lat": -26.2533938,
    "lng": 28.4221468,
    "address": "PCWF+92, Geduld, Springs, 1559, South Africa"
  },
  {
    "id": "node-430",
    "name": "Roots Grill Olievenhoutsbos",
    "categoryId": "t4",
    "lat": -25.923814,
    "lng": 28.09654,
    "address": "3 Olifantsfontein Rd, Olievenhoutbosch, Centurion, 0187, South Africa"
  },
  {
    "id": "node-431",
    "name": "School Food Marketing",
    "categoryId": "t4",
    "lat": -26.077759,
    "lng": 27.969575,
    "address": "Unit 18, Skyway Business Park, Corner CR Swart Drive & Freda Road, Bromhof Ext 48, Randburg, 2188, South Africa"
  },
  {
    "id": "node-432",
    "name": "Ramadan distributor",
    "categoryId": "t4",
    "lat": -25.752968,
    "lng": 28.158634,
    "address": "Soutter St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-433",
    "name": "salahadin wholesaler & retailer/NOMAD",
    "categoryId": "t5",
    "lat": -26.2188235,
    "lng": 28.0125615,
    "address": "387 Church St, Kenilworth, Johannesburg South, 2190, South Africa"
  },
  {
    "id": "node-434",
    "name": "Wholesale Point",
    "categoryId": "t5",
    "lat": -26.7034718,
    "lng": 27.8160381,
    "address": "27 Langenhoven St, Vanderbijlpark C. W. 6, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-435",
    "name": "Badat's Wholesalers",
    "categoryId": "t5",
    "lat": -26.2749385,
    "lng": 27.8912904,
    "address": "Klipspruit Valley Rd, Klip Town, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-436",
    "name": "Ekasi Chicken Retailer & Wholesaler",
    "categoryId": "t5",
    "lat": -25.980874,
    "lng": 28.20538,
    "address": "Kopanong Shopping Centre, Riverside St, Ivory Park, Johannesburg, 1689, South Africa"
  },
  {
    "id": "node-437",
    "name": "MacJ's Food Wholesalers",
    "categoryId": "t5",
    "lat": -26.2011644,
    "lng": 28.2726212,
    "address": "UNIT 7, KUDU PROPERTY, 12 Tile Rd, Anderbolt, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-438",
    "name": "Fahimoe T/A Magazine Wholesalers",
    "categoryId": "t5",
    "lat": -26.4175131,
    "lng": 28.4693279,
    "address": "31 Lavers St, Nigel, 1490, South Africa"
  },
  {
    "id": "node-439",
    "name": "Noakhali Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.2006538,
    "lng": 28.0446951,
    "address": "Shop 1234 Lilian Ngoyi St, Newtown, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-440",
    "name": "Hygienic Wholesalers",
    "categoryId": "t5",
    "lat": -26.1833119,
    "lng": 28.2263368,
    "address": "Newton Rd, Hughes, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-441",
    "name": "J.C. Supermarket & Cold Drink Wholesaler",
    "categoryId": "t5",
    "lat": -26.167095,
    "lng": 28.204214,
    "address": "4 Kraft Rd, Elandsfontein, Johannesburg, 1429, South Africa"
  },
  {
    "id": "node-442",
    "name": "Al-Amin Super Market & Wholesale",
    "categoryId": "t5",
    "lat": -26.2466445,
    "lng": 28.045688,
    "address": "146 Tramway St, Kenilworth, Johannesburg South, 2190, South Africa"
  },
  {
    "id": "node-443",
    "name": "Lenasia Wholesale Groceries",
    "categoryId": "t5",
    "lat": -26.3200221,
    "lng": 27.8268154,
    "address": "22 Rose Ave, Lenasia, 1820, South Africa"
  },
  {
    "id": "node-444",
    "name": "Paradise Wholesaler",
    "categoryId": "t5",
    "lat": -26.413474,
    "lng": 27.8481039,
    "address": "58 Percy St, Mid-Ennerdale, Ennerdale, 1820, South Africa"
  },
  {
    "id": "node-445",
    "name": "africa sweets wholesale",
    "categoryId": "t5",
    "lat": -26.0174099,
    "lng": 28.18137,
    "address": "3235 Freedom Dr, Ivory Park, Midrand, 1693, South Africa"
  },
  {
    "id": "node-446",
    "name": "MD AND SONS WHOLESALE",
    "categoryId": "t5",
    "lat": -26.32704,
    "lng": 27.82728,
    "address": "Unit 10, lenasia Warehouse, 15 Chrysanthemum St, Gauteng, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-447",
    "name": "Mohamed Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.695496,
    "lng": 27.839155,
    "address": "Klasie Havenga St, Vanderbijlpark C. C., Vanderbijlpark, 1900, South Africa"
  },
  {
    "id": "node-448",
    "name": "Koseng Wholesale Super Market & Sweets Shop",
    "categoryId": "t5",
    "lat": -26.2032122,
    "lng": 27.971492,
    "address": "Office No. 5, Motorcity Complex, Main Reef Rd, Langlaagte, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-449",
    "name": "South King supermarket ( retail and wholesale)",
    "categoryId": "t5",
    "lat": -26.3841588,
    "lng": 27.8483432,
    "address": "183 183 13 jivan center, Lenasia South, Lenasia, 1829, South Africa"
  },
  {
    "id": "node-450",
    "name": "Momalis Chicken Wholesale",
    "categoryId": "t5",
    "lat": -25.5077228,
    "lng": 28.08572,
    "address": "37, Mabopane Unit N, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-451",
    "name": "Mr. Veg Supermarket Wholesaler",
    "categoryId": "t5",
    "lat": -26.2290673,
    "lng": 28.2328855,
    "address": "16 Goedehoop Ave, Reiger Park, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-452",
    "name": "SK Plastic, Supermarket & Wholesaler",
    "categoryId": "t5",
    "lat": -26.2479125,
    "lng": 28.0523428,
    "address": "150 Main St, Rosettenville, Johannesburg, 2190, South Africa"
  },
  {
    "id": "node-453",
    "name": "SuperValue Wholesale Butchery Benoni",
    "categoryId": "t5",
    "lat": -26.1852608,
    "lng": 28.3189108,
    "address": "Shop E, Cnr Voortrekker &, Benoni Centre, Kemston Ave, Lakeside, Benoni, 1501, South Africa"
  },
  {
    "id": "node-454",
    "name": "DB Wholesalers",
    "categoryId": "t5",
    "lat": -26.2331209,
    "lng": 28.0235802,
    "address": "Booysens Rd, Booysens, Johannesburg, 2016, South Africa"
  },
  {
    "id": "node-455",
    "name": "Bangladesh Wholesale And supermarket",
    "categoryId": "t5",
    "lat": -26.2009518,
    "lng": 28.0452611,
    "address": "187 Rahima Moosa St, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-456",
    "name": "K.K WHOLESALERS & RETALERS",
    "categoryId": "t5",
    "lat": -25.4795503,
    "lng": 28.1145358,
    "address": "DD Bus Stop, Soshanguve - SS, Soshanguve, 0164, South Africa"
  },
  {
    "id": "node-457",
    "name": "Palm's Wholesale And Supermarket",
    "categoryId": "t5",
    "lat": -26.3886105,
    "lng": 28.1427102,
    "address": "Shop No. 8, Palm Ridge Rd, Palm Ridge, Johannesburg, 1458, South Africa"
  },
  {
    "id": "node-458",
    "name": "Shames And Nuradin Fruit And Veg Wholesale",
    "categoryId": "t5",
    "lat": -26.2049001,
    "lng": 28.0125982,
    "address": "103 8th Ave, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-459",
    "name": "W&L Wholesale Store D Block R101 old Johannesburg road",
    "categoryId": "t5",
    "lat": -25.8878196,
    "lng": 28.1616751,
    "address": "Rooihuiskraal, Centurion, 0154, South Africa"
  },
  {
    "id": "node-460",
    "name": "Suurman Wholesalers & Retail Centre",
    "categoryId": "t5",
    "lat": -25.3926622,
    "lng": 28.2102533,
    "address": "J646+W4, Dilopye, South Africa"
  },
  {
    "id": "node-461",
    "name": "nurjahan wholesale and retail",
    "categoryId": "t5",
    "lat": -26.32083,
    "lng": 27.82844,
    "address": "41 Rose Ave, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-462",
    "name": "M. M Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.3199283,
    "lng": 27.8261449,
    "address": "Shop 5, 16 Rose Ave, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-463",
    "name": "DISCOUNT WHOLESALE & RETAILER.",
    "categoryId": "t5",
    "lat": -26.32041,
    "lng": 27.82576,
    "address": "17 Rose Ave, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-464",
    "name": "SA wholesale & Retailer",
    "categoryId": "t5",
    "lat": -26.3214959,
    "lng": 27.8269864,
    "address": "24 Pelikaan Ave, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-465",
    "name": "AJS RETAIL & WHOLESALE",
    "categoryId": "t5",
    "lat": -26.23098,
    "lng": 28.2266066,
    "address": "81 Leon Ferreira Dr, Reiger Park, Boksburg, 1466, South Africa"
  },
  {
    "id": "node-466",
    "name": "S.K. Super Market Retail & Wholesale",
    "categoryId": "t5",
    "lat": -26.1864078,
    "lng": 28.206104,
    "address": "62 Main St, Witfield, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-467",
    "name": "Heidelberg Hosanna Wholesalers",
    "categoryId": "t5",
    "lat": -26.5160168,
    "lng": 28.3554158,
    "address": "5B Kismet St, Heidelberg, Heidelberg - GP, 1441, South Africa"
  },
  {
    "id": "node-468",
    "name": "Benoni wholesale&retail",
    "categoryId": "t5",
    "lat": -26.1850347,
    "lng": 28.3189917,
    "address": "1 Voortrekker St, Benoni, 1500, South Africa"
  },
  {
    "id": "node-469",
    "name": "Super Wholesalers",
    "categoryId": "t5",
    "lat": -26.70341,
    "lng": 27.84993,
    "address": "1 Mollier St, Vanderbijlpark C. E. 6, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-470",
    "name": "Precious Fruits & Veggies Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.1888444,
    "lng": 28.0923695,
    "address": "78 Albertina Sisulu Rd, Bezuidenhout Valley, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-471",
    "name": "Rite Price Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.1893125,
    "lng": 28.0460385,
    "address": "Shop No. 2, 16 Pretoria St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-472",
    "name": "J/B Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.1875054,
    "lng": 28.0478175,
    "address": "26 Goldreich St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-473",
    "name": "Olifantsfontein Wholesale",
    "categoryId": "t5",
    "lat": -25.9487302,
    "lng": 28.2323206,
    "address": "380 Main St, Clayville, Olifantsfontein, 1666, South Africa"
  },
  {
    "id": "node-474",
    "name": "Big 7 Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.3138648,
    "lng": 28.3890219,
    "address": "Black Rd, Kwa-Thema, Springs, 1575, South Africa"
  },
  {
    "id": "node-475",
    "name": "Thandabantu Supermarket & Wholesale",
    "categoryId": "t5",
    "lat": -26.3886219,
    "lng": 28.1422227,
    "address": "Stans Pl, Palm Ridge, Katlehong, 1458, South Africa"
  },
  {
    "id": "node-476",
    "name": "Sunrise Wholesale",
    "categoryId": "t5",
    "lat": -26.3454975,
    "lng": 27.3902647,
    "address": "42 Van Zyl Smit St, Oberholzer, Carletonville, 2499, South Africa"
  },
  {
    "id": "node-477",
    "name": "Enos wholesale and retail Atchar",
    "categoryId": "t5",
    "lat": -26.0066527,
    "lng": 28.1783723,
    "address": "740 June Rd, Ivory Park, Midrand, 1693, South Africa"
  },
  {
    "id": "node-478",
    "name": "Orion Wholesale",
    "categoryId": "t5",
    "lat": -25.9818208,
    "lng": 28.2043634,
    "address": "August Dr, Ivory Park, Johannesburg, 1682, South Africa"
  },
  {
    "id": "node-479",
    "name": "Cleo Peanut Butter Wholesale Supplies",
    "categoryId": "t5",
    "lat": -25.744035,
    "lng": 28.1718863,
    "address": "360 Es'kia Mphahlele Dr, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-480",
    "name": "Lm Supermarket & Wholesalers",
    "categoryId": "t5",
    "lat": -26.4176492,
    "lng": 28.4696077,
    "address": "35 Lavers St, Nigel, 1490, South Africa"
  },
  {
    "id": "node-481",
    "name": "Bismillah Super Store, Cosmetic & Wholesale",
    "categoryId": "t5",
    "lat": -26.2768187,
    "lng": 27.8907511,
    "address": "Shop 14, Klipspruit Valley Rd, Klipspruit 298-Iq, Soweto, 1809, South Africa"
  },
  {
    "id": "node-482",
    "name": "TAW WHOLESALE AND SUPERMARKET",
    "categoryId": "t5",
    "lat": -26.201128,
    "lng": 28.0735406,
    "address": "Troyeville, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-483",
    "name": "Shalom Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.1813637,
    "lng": 28.0658022,
    "address": "2 Rockey St, Bellevue, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-484",
    "name": "Gulshan wholesale and retail",
    "categoryId": "t5",
    "lat": -26.1988142,
    "lng": 28.0453442,
    "address": "57 De Villiers St, Braamfontein, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-485",
    "name": "Royal wholesale &retail",
    "categoryId": "t5",
    "lat": -26.19954,
    "lng": 28.04892,
    "address": "92 Plein St, Hillbrow, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-486",
    "name": "Mahir Supermarket Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.181391,
    "lng": 28.0632275,
    "address": "40 Raleigh St, Yeoville, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-487",
    "name": "ANK SUPERMARKET & WHOLESALE",
    "categoryId": "t5",
    "lat": -26.1993892,
    "lng": 28.0401848,
    "address": "7 De Villiers St, Braamfontein, Johannesburg, 2017, South Africa"
  },
  {
    "id": "node-488",
    "name": "Towfiq One Wholesale & Retailers",
    "categoryId": "t5",
    "lat": -26.2054621,
    "lng": 28.0115722,
    "address": "Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-489",
    "name": "Railway Supermarket Fruit & Veg Wholesale",
    "categoryId": "t5",
    "lat": -26.2037614,
    "lng": 28.014201,
    "address": "65 Bird St, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-490",
    "name": "Choice Wholesale Retail",
    "categoryId": "t5",
    "lat": -25.3572008,
    "lng": 28.2455122,
    "address": "5371 Parktown Temba Majaneng Hammanskraal ,Temba, Temba Rural, Pretoria, 0401, South Africa"
  },
  {
    "id": "node-491",
    "name": "Mmakgaro Wholesale Supermarket",
    "categoryId": "t5",
    "lat": -25.4453019,
    "lng": 28.0905872,
    "address": "Soshanguve - KK West, Soshanguve, 0164, South Africa"
  },
  {
    "id": "node-492",
    "name": "T&Y Wholesale",
    "categoryId": "t5",
    "lat": -25.9346662,
    "lng": 28.0148515,
    "address": "10 Africa street tanganani diepsloot, Tanganani, Randburg, 2189, South Africa"
  },
  {
    "id": "node-493",
    "name": "Sunrise Zimba And Sweet Wholesale",
    "categoryId": "t5",
    "lat": -25.9871717,
    "lng": 28.1760355,
    "address": "2605 Angelfish St, Kaalfontein, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-494",
    "name": "Emanuel 'Wholesale",
    "categoryId": "t5",
    "lat": -25.9175086,
    "lng": 28.0941885,
    "address": "Olievenhoutbos 23, Centurion, 0175, South Africa"
  },
  {
    "id": "node-495",
    "name": "Farm Yard Fresh Produce Wholesale Market",
    "categoryId": "t5",
    "lat": -26.0605966,
    "lng": 27.9536154,
    "address": "Northgate, Randburg, 2162, South Africa"
  },
  {
    "id": "node-496",
    "name": "Baraka Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.1078578,
    "lng": 28.0879277,
    "address": "31 1st Ave, Wynberg, Sandton, 2090, South Africa"
  },
  {
    "id": "node-497",
    "name": "MJT Trade & Wholesale",
    "categoryId": "t5",
    "lat": -25.4093443,
    "lng": 28.2652736,
    "address": "Mokoena Street, C776 Bhekindabazakho, Hammanskraal, 0100, South Africa"
  },
  {
    "id": "node-498",
    "name": "SANJIDA SUPERMARKET AND WHOLESALE",
    "categoryId": "t5",
    "lat": -25.665222,
    "lng": 28.158007,
    "address": "747 President Steyn St, Pretoria North, Pretoria, 0188, South Africa"
  },
  {
    "id": "node-499",
    "name": "Eyoel Sweet Wholesale Ltd",
    "categoryId": "t5",
    "lat": -26.0017204,
    "lng": 28.2091536,
    "address": "166 George Nyanga Dr, Leboeng, Thembisa, 1632, South Africa"
  },
  {
    "id": "node-500",
    "name": "Ndadza wholesale",
    "categoryId": "t5",
    "lat": -26.2324311,
    "lng": 27.9006079,
    "address": "Sibabsa St, Meadowlands East Zone 5, Meadowlands East, 1852, South Africa"
  },
  {
    "id": "node-501",
    "name": "Mo Wholesale Fruit & Veg Market",
    "categoryId": "t5",
    "lat": -26.1093923,
    "lng": 28.2292144,
    "address": "Kempton Park Cbd, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-502",
    "name": "LOGA'S Super Save & Wholesale",
    "categoryId": "t5",
    "lat": -26.3274733,
    "lng": 27.8713181,
    "address": "Capella St, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-503",
    "name": "Satyam Wholesalers",
    "categoryId": "t5",
    "lat": -26.3194406,
    "lng": 27.82351,
    "address": "Station Mall, Lenasia Dr, Lenasia, Johannesburg, 1857, South Africa"
  },
  {
    "id": "node-504",
    "name": "Food Africa wholesale",
    "categoryId": "t5",
    "lat": -26.32212,
    "lng": 27.82785,
    "address": "46 Gemsbok St, Lenasia, Johannesburg South, 1821, South Africa"
  },
  {
    "id": "node-505",
    "name": "SA wholesale & Retailers",
    "categoryId": "t5",
    "lat": -26.3216274,
    "lng": 27.8270361,
    "address": "26 Anemone Ave, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-506",
    "name": "Number One Wholesale & Supermarket",
    "categoryId": "t5",
    "lat": -26.2134119,
    "lng": 28.2970837,
    "address": "331 Mayet Dr, Actonville, Benoni, 1506, South Africa"
  },
  {
    "id": "node-507",
    "name": "BARGAIN wholesale price",
    "categoryId": "t5",
    "lat": -26.5024189,
    "lng": 28.3600909,
    "address": "Voortrekker St, Heidelberg, Heidelberg - GP, 1441, South Africa"
  },
  {
    "id": "node-508",
    "name": "L. E. Wholesale Trading",
    "categoryId": "t5",
    "lat": -26.5011379,
    "lng": 28.3584874,
    "address": "PG Centre, Voortrekker St, Heidelberg, Heidelberg - GP, 1438, South Africa"
  },
  {
    "id": "node-509",
    "name": "Discount supermarket & wholesale",
    "categoryId": "t5",
    "lat": -26.373706,
    "lng": 28.355657,
    "address": "1377 Mashimin St, Tsakani, Johannnesburg, 1550, South Africa"
  },
  {
    "id": "node-510",
    "name": "Easian Supermarket & wholesale Retail",
    "categoryId": "t5",
    "lat": -26.2407355,
    "lng": 28.362211,
    "address": "Brakpan, 1541, South Africa"
  },
  {
    "id": "node-511",
    "name": "West Supermarket Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.2391828,
    "lng": 28.3644705,
    "address": "137A Kitzinger Ave, Brakpan, 1541, South Africa"
  },
  {
    "id": "node-512",
    "name": "ISIDINGO FRUIT & VEG WHOLESALE",
    "categoryId": "t5",
    "lat": -26.0975152,
    "lng": 27.7713537,
    "address": "61 Pretoria St, Krugersdorp, Johannesburg, 1739, South Africa"
  },
  {
    "id": "node-513",
    "name": "Islam supermarket and wholesale",
    "categoryId": "t5",
    "lat": -25.7390069,
    "lng": 28.3116563,
    "address": "194 Manser St, Meyerspark, Pretoria, 0103, South Africa"
  },
  {
    "id": "node-514",
    "name": "Healthy Products Wholesale & Retail",
    "categoryId": "t5",
    "lat": -26.0287506,
    "lng": 27.9243457,
    "address": "S Africa Dr, Cosmo City, Roodepoort, 2188, South Africa"
  },
  {
    "id": "node-515",
    "name": "Avutu Super Market Wholesale",
    "categoryId": "t5",
    "lat": -26.2111953,
    "lng": 28.0445728,
    "address": "Salisbury Claims, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-516",
    "name": "Badar Supermarket Wholesale & Retail",
    "categoryId": "t5",
    "lat": -25.7409366,
    "lng": 28.1803931,
    "address": "Bloed St, Pretoria Central, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-517",
    "name": "Nile Wholesale & Retailers",
    "categoryId": "t5",
    "lat": -25.7394261,
    "lng": 28.1767223,
    "address": "24 7th Ave, Marabastad, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-518",
    "name": "SWEET MART WHOLESALE",
    "categoryId": "t5",
    "lat": -25.7455678,
    "lng": 28.1698233,
    "address": "Retief St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-519",
    "name": "Africa Supermarket",
    "categoryId": "t5",
    "lat": -26.208519,
    "lng": 28.2547879,
    "address": "40D Cason Rd, Boksburg North, Johannesburg, 1459, South Africa"
  },
  {
    "id": "node-520",
    "name": "Big 11",
    "categoryId": "t5",
    "lat": -25.71330294,
    "lng": 28.15658134,
    "address": "751 Hendriks St, Hermanstad, Pretoria, 0082, South Africa"
  },
  {
    "id": "node-521",
    "name": "Silverstars Supermarket",
    "categoryId": "t5",
    "lat": -26.2934658,
    "lng": 27.8749688,
    "address": "St Ives St, Klipspruit West, Soweto, 1811, South Africa"
  },
  {
    "id": "node-522",
    "name": "BESTWAY SUPERMARKET",
    "categoryId": "t5",
    "lat": -25.975989,
    "lng": 28.2240952,
    "address": "Madiba Dr, Tswelopele, Thembisa, 1666, South Africa"
  },
  {
    "id": "node-523",
    "name": "Nazeer's Superette",
    "categoryId": "t5",
    "lat": -25.7878187,
    "lng": 28.1046443,
    "address": "Tangerine St, Laudium, Pretoria, 0037, South Africa"
  },
  {
    "id": "node-524",
    "name": "TAWAKAL SUPERMARKET",
    "categoryId": "t5",
    "lat": -26.3897856,
    "lng": 28.14206124,
    "address": "71 Celtis St, Palm Ridge, Katlehong, 1488, South Africa"
  },
  {
    "id": "node-525",
    "name": "MONJU GENERAL TRADING",
    "categoryId": "t5",
    "lat": -25.6653852,
    "lng": 28.162581,
    "address": "669 President Steyn St, Wolmer, Pretoria, 0182, South Africa"
  },
  {
    "id": "node-526",
    "name": "K & L Supermarket",
    "categoryId": "t5",
    "lat": -26.202472,
    "lng": 28.10645467,
    "address": "460 Jules St, Malvern, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-527",
    "name": "Sahan Trading Cc",
    "categoryId": "t5",
    "lat": -26.20540758,
    "lng": 28.01502826,
    "address": "Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-528",
    "name": "Maunde City",
    "categoryId": "t5",
    "lat": -25.4673434,
    "lng": 28.0710111,
    "address": "1444 Molefe Makinta Road, Highway, Winterveld, 0198, South Africa"
  },
  {
    "id": "node-529",
    "name": "Jue General Trading",
    "categoryId": "t5",
    "lat": -26.1813042,
    "lng": 28.0642962,
    "address": "52 Raleigh St, Yeoville, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-530",
    "name": "Lucky Super Market",
    "categoryId": "t5",
    "lat": -26.1883009,
    "lng": 28.0527674,
    "address": "21 Abel Rd, Berea, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-531",
    "name": "PheliBev",
    "categoryId": "t5",
    "lat": -25.7621151,
    "lng": 28.0852114,
    "address": "2C Seeiso St, Atteridgeville, Pretoria, 0006, South Africa"
  },
  {
    "id": "node-532",
    "name": "TAWAKAL2 SUPERMARKET",
    "categoryId": "t5",
    "lat": -26.2054592,
    "lng": 28.0152395,
    "address": "134 8th Ave, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-533",
    "name": "Lavane Trading Shop",
    "categoryId": "t5",
    "lat": -26.26235809,
    "lng": 27.8994043,
    "address": "Msilinga St, Pimville Zone 3, Pimville, 1809, South Africa"
  },
  {
    "id": "node-534",
    "name": "Machtrass Cafe",
    "categoryId": "t5",
    "lat": -25.7134768,
    "lng": 28.184899,
    "address": "576 Begemann St, Eloffsdal, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-535",
    "name": "Rosslyn Plaza Cafe & Take Away",
    "categoryId": "t5",
    "lat": -25.6234307,
    "lng": 28.0970219,
    "address": "22 De Waal St, Rosslyn, Pretoria, 0200, South Africa"
  },
  {
    "id": "node-536",
    "name": "King George Cafe & Superette",
    "categoryId": "t5",
    "lat": -26.19013078,
    "lng": 28.04507579,
    "address": "28A Kotze St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-537",
    "name": "Al-Medina Supermarket",
    "categoryId": "t5",
    "lat": -25.78795222,
    "lng": 28.10450117,
    "address": "03 9th Ave, Laudium, Pretoria, 0037, South Africa"
  },
  {
    "id": "node-538",
    "name": "Arooj supermarket and takeaway",
    "categoryId": "t5",
    "lat": -26.70107597,
    "lng": 27.8491879,
    "address": "Petter St, Vanderbijlpark C. E. 6, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-539",
    "name": "Ramadan Supermarket",
    "categoryId": "t5",
    "lat": -26.1930968,
    "lng": 28.0478338,
    "address": "24 Edith Cavell St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-540",
    "name": "MAKOTI HARDWARE",
    "categoryId": "t5",
    "lat": -26.10154803,
    "lng": 28.08914637,
    "address": "Joe Nhlanhla St, Alexandra, 2014, South Africa"
  },
  {
    "id": "node-541",
    "name": "White House supermarket",
    "categoryId": "t5",
    "lat": -25.7836908,
    "lng": 28.0483893,
    "address": "Elandsfontein 352-Jr, Atteridgeville, Pretoria, 0008, South Africa"
  },
  {
    "id": "node-542",
    "name": "Discount Supermarket",
    "categoryId": "t5",
    "lat": -26.1871667,
    "lng": 28.0525065,
    "address": "23 O'Reilly Rd, Berea, Johannesburg, 2198, South Africa"
  },
  {
    "id": "node-543",
    "name": "Barakat Mini Market",
    "categoryId": "t5",
    "lat": -26.2057708,
    "lng": 28.0116462,
    "address": "Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-544",
    "name": "Woza Woza Supermarket",
    "categoryId": "t5",
    "lat": -25.9326984,
    "lng": 28.0149672,
    "address": "Pear St, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-545",
    "name": "China City Wholesale Center Johannesburg",
    "categoryId": "t6",
    "lat": -26.1942656,
    "lng": 28.0596968,
    "address": "2 Dora St, New Doornfontein, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-546",
    "name": "Sweet Depot",
    "categoryId": "t6",
    "lat": -26.2193117,
    "lng": 28.0145621,
    "address": "Corner Discovery Rd &, Genesis Blvd, Crown mines, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-547",
    "name": "BIG TIME SUPERMARKET",
    "categoryId": "t6",
    "lat": -26.2030075,
    "lng": 28.0544572,
    "address": "7 Siemert Rd, Doornfontein, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-548",
    "name": "Jamaica Coca-Cola Wholesalers Boksburg",
    "categoryId": "t6",
    "lat": -26.2081479,
    "lng": 28.2701525,
    "address": "C/O Main Reef (Cason) and, Turf Rd, Anderbolt, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-549",
    "name": "Lactalis (Parmalat) Factory Shop",
    "categoryId": "t6",
    "lat": -25.9053161,
    "lng": 28.164285,
    "address": "234 Landshut Rd, Louwlardia, Centurion, 1683, South Africa"
  },
  {
    "id": "node-550",
    "name": "BMTirkasso Mart",
    "categoryId": "t6",
    "lat": -26.2012245,
    "lng": 28.0446896,
    "address": "Cavindish Building’s Opposite to Boxer Supermarket, 183 Rahima Moosa St, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-551",
    "name": "Red Cap Hyper",
    "categoryId": "t6",
    "lat": -26.3532135,
    "lng": 27.3959708,
    "address": "Carletonville, 1437, South Africa"
  },
  {
    "id": "node-552",
    "name": "Classic Wholesalers",
    "categoryId": "t6",
    "lat": -26.2256122,
    "lng": 28.1424465,
    "address": "Ext 3, 101 Dimitri St, Jupiter, Germiston, 2094, South Africa"
  },
  {
    "id": "node-553",
    "name": "The Sweet Hyper Mega - Woodmead",
    "categoryId": "t6",
    "lat": -26.0550224,
    "lng": 28.0926247,
    "address": "Shop 5, Woodmead Value Mart, Waterval Cres S, Woodmead, Sandton, 2191, South Africa"
  },
  {
    "id": "node-554",
    "name": "Big Save Distribution Centre/Head Office",
    "categoryId": "t6",
    "lat": -25.7193165,
    "lng": 28.3234814,
    "address": "313 Zasm St, Waltloo, Pretoria, 0184, South Africa"
  },
  {
    "id": "node-555",
    "name": "City Medical Wholesalers - Head Office",
    "categoryId": "t6",
    "lat": -25.7496729,
    "lng": 28.1607428,
    "address": "Block 4, 335 Frederick St, Pretoria West, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-556",
    "name": "Palm Tree Distributors (Pty) Ltd",
    "categoryId": "t6",
    "lat": -26.3468569,
    "lng": 28.1232561,
    "address": "19 Ellis Rd, Alrode, Alberton, 1453, South Africa"
  },
  {
    "id": "node-557",
    "name": "Thakathur",
    "categoryId": "t6",
    "lat": -26.3499001,
    "lng": 27.8515228,
    "address": "Portion 13, Farm Roodepoort 302iq, Lenasia Ext. 10, Johannesburg, 1827, South Africa"
  },
  {
    "id": "node-558",
    "name": "Livance Distribution (PTY) Ltd",
    "categoryId": "t6",
    "lat": -26.0418491,
    "lng": 27.9492395,
    "address": "Paddock Lane Building D Boundary Park Cnr Malibongwe Dr &, Epsom Ave, Northriding, Johannesburg, 2188, South Africa"
  },
  {
    "id": "node-559",
    "name": "The Sweet Hyper Express",
    "categoryId": "t6",
    "lat": -26.4906466,
    "lng": 27.93548,
    "address": "Unit 2, 360 Main road, Walkers Fruit Farms SH, De Deur, 1878, South Africa"
  },
  {
    "id": "node-560",
    "name": "Loxion Plug Store",
    "categoryId": "t6",
    "lat": -26.2204317,
    "lng": 27.8184101,
    "address": "ext 3, Langa St, Doornkop, Johannesburg, 1723, South Africa"
  },
  {
    "id": "node-561",
    "name": "Jr Meat Wholesaler",
    "categoryId": "t6",
    "lat": -26.2955957,
    "lng": 28.1902688,
    "address": "4 Aberdein St, Klippoortjie, Germiston, 1401, South Africa"
  },
  {
    "id": "node-562",
    "name": "Jamaica Coca-Cola Wholesalers Hillbrow",
    "categoryId": "t6",
    "lat": -26.1894237,
    "lng": 28.0457071,
    "address": "10 Pretoria Street C/O, Klein St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-563",
    "name": "Manjoh Foods",
    "categoryId": "t6",
    "lat": -26.2592511,
    "lng": 28.4210722,
    "address": "203 Watt Rd, New Era, Springs, 1501, South Africa"
  },
  {
    "id": "node-564",
    "name": "Red Star Wholesale Catering Services Centurion",
    "categoryId": "t6",
    "lat": -25.9270443,
    "lng": 28.1496626,
    "address": "N 1, Business Park, 3 Travertine Ave, Kosmosdal, Centurion, 0157, South Africa"
  },
  {
    "id": "node-565",
    "name": "Oceans Best Trading",
    "categoryId": "t6",
    "lat": -25.99109,
    "lng": 28.0748316,
    "address": "Kyalami Business Park, 6 Brands Hatch Cl, Kyalami, Johannesburg, 1684, South Africa"
  },
  {
    "id": "node-566",
    "name": "SA Best",
    "categoryId": "t6",
    "lat": -26.2215901,
    "lng": 28.0133784,
    "address": "China Cash & Carry, Crown Mines, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-567",
    "name": "Merlog Foods Offices",
    "categoryId": "t6",
    "lat": -26.1739159,
    "lng": 28.1278125,
    "address": "1 Osborne Ln, Bedfordview, Germiston, 2007, South Africa"
  },
  {
    "id": "node-568",
    "name": "Wamz Trading Pty Ltd",
    "categoryId": "t6",
    "lat": -26.2385629,
    "lng": 28.3610753,
    "address": "48 Station St, Brakpan, 1541, South Africa"
  },
  {
    "id": "node-569",
    "name": "One Stop Online",
    "categoryId": "t6",
    "lat": -26.2237559,
    "lng": 28.0736395,
    "address": "Unit 14, Production Park, 83 Heidelberg Rd, City Deep, Johannesburg, 2197, South Africa"
  },
  {
    "id": "node-570",
    "name": "Greens FMCG (Pty) Ltd",
    "categoryId": "t6",
    "lat": -25.8530345,
    "lng": 28.1835188,
    "address": "Inkwazi Office Park, 1249 Embankment Rd, Zwartkop, Centurion, 0157, South Africa"
  },
  {
    "id": "node-571",
    "name": "Wicked Convenience",
    "categoryId": "t6",
    "lat": -26.0035524,
    "lng": 28.073846,
    "address": "Unit 4, 135 River Rd, Barbeque Downs, Kyalami, 1684, South Africa"
  },
  {
    "id": "node-572",
    "name": "Twizza",
    "categoryId": "t6",
    "lat": -26.0718222,
    "lng": 28.1231927,
    "address": "Laneshaw St, Klipfontein 12-Ir, Lethabong, 1609, South Africa"
  },
  {
    "id": "node-573",
    "name": "Biza Trade Hub (Pty) Ltd",
    "categoryId": "t6",
    "lat": -25.952814,
    "lng": 28.2205089,
    "address": "Unit 14, Gauteng Business Park, Clayville, Olifantsfontein, 1682, South Africa"
  },
  {
    "id": "node-574",
    "name": "Wisdom International",
    "categoryId": "t6",
    "lat": -26.2071623,
    "lng": 28.0205069,
    "address": "15 Mint Rd, Fordsburg, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-575",
    "name": "Shwe.co.za",
    "categoryId": "t6",
    "lat": -26.19293,
    "lng": 28.07063,
    "address": "Victoria Yards, 16 Viljoen St, Bertrams, Johannesburg, 2193, South Africa"
  },
  {
    "id": "node-576",
    "name": "KARA'S WHOLESALERS",
    "categoryId": "t6",
    "lat": -26.2006,
    "lng": 28.05396,
    "address": "25 Davies St, Doornfontein, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-577",
    "name": "Blue storm(Electronics, Hardware, Household",
    "categoryId": "t6",
    "lat": -25.7538567,
    "lng": 28.1697849,
    "address": "Charlotte Maxeke St, Pretoria West, Pretoria, 0157, South Africa"
  },
  {
    "id": "node-578",
    "name": "UFI Distribution Centre",
    "categoryId": "t6",
    "lat": -25.8443494,
    "lng": 28.1074663,
    "address": "30 Van Tonder St, Sunderland Ridge, Centurion, 0157, South Africa"
  },
  {
    "id": "node-579",
    "name": "Madiba retail and wholesale",
    "categoryId": "t6",
    "lat": -26.1909549,
    "lng": 28.0712536,
    "address": "Derby Rd, Bertrams, Johannesburg, 1238, South Africa"
  },
  {
    "id": "node-580",
    "name": "Family wholesale & Retail",
    "categoryId": "t6",
    "lat": -26.2358785,
    "lng": 28.3670641,
    "address": "545 Voortrekker Rd, Brakpan, 1541, South Africa"
  },
  {
    "id": "node-581",
    "name": "AHAD Wholesalers & Distributors",
    "categoryId": "t6",
    "lat": -26.2112878,
    "lng": 28.0163277,
    "address": "SHOP V36, DRAGON 2, 29 Hanover St, Selby, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-582",
    "name": "BAORONG WHOLESALE",
    "categoryId": "t6",
    "lat": -26.2156788,
    "lng": 28.0217071,
    "address": "SHOP B05, 3 Press Ave, CROWN MINES, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-583",
    "name": "TGS Wholesale",
    "categoryId": "t6",
    "lat": -26.2198142,
    "lng": 28.0142573,
    "address": "Cnr Discovery &, China Cash & Carry, Renaissance Dr, Crown Mines, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-584",
    "name": "MaggsStartUps",
    "categoryId": "t6",
    "lat": -26.2463289,
    "lng": 28.0390017,
    "address": "104 Stanton St, Turffontein, Johannesburg, 2190, South Africa"
  },
  {
    "id": "node-585",
    "name": "Vince Craft",
    "categoryId": "t6",
    "lat": -26.5123096,
    "lng": 27.9265615,
    "address": "6958, The De Deur Estates, De Deur, 1984, South Africa"
  },
  {
    "id": "node-586",
    "name": "No name to show",
    "categoryId": "t6",
    "lat": -26.1570115,
    "lng": 28.3347981,
    "address": "95 Pretoria Rd, Rynfield, Benoni, 1501, South Africa"
  },
  {
    "id": "node-587",
    "name": "Lucky Arrow Enterprises",
    "categoryId": "t6",
    "lat": -26.0790987,
    "lng": 27.9256344,
    "address": "4 clinic street, Honeydew, johannesburg, 2040, South Africa"
  },
  {
    "id": "node-588",
    "name": "Awan Industries",
    "categoryId": "t6",
    "lat": -25.8472106,
    "lng": 28.2211049,
    "address": "35 Theron St, Waterkloof 378-Jr, Centurion, 0157, South Africa"
  },
  {
    "id": "node-589",
    "name": "Vital Trading Group",
    "categoryId": "t6",
    "lat": -25.8865745,
    "lng": 28.2063554,
    "address": "south downs ridge office park, john, John Vorster Dr, Irene, Centurion, 0062, South Africa"
  },
  {
    "id": "node-590",
    "name": "Themill",
    "categoryId": "t6",
    "lat": -26.135081,
    "lng": 28.020511,
    "address": "18, linkin, Parkhurst, Randburg, 2009, South Africa"
  },
  {
    "id": "node-591",
    "name": "Ambicor Trading",
    "categoryId": "t6",
    "lat": -26.1334395,
    "lng": 28.2031327,
    "address": "Unit 4, Jet Works, 40 Electron Ave, Isando, Kempton Park, 1609, South Africa"
  },
  {
    "id": "node-592",
    "name": "Packaging Connections",
    "categoryId": "t6",
    "lat": -26.0035545,
    "lng": 28.0738581,
    "address": "Unit 3, Riverview Business Park, 135 River Rd, Barbeque Downs, Midrand, 1684, South Africa"
  },
  {
    "id": "node-593",
    "name": "TZIBUYS",
    "categoryId": "t6",
    "lat": -26.1919565,
    "lng": 28.1588916,
    "address": "10 Marguerite Ave, Primrose, Germiston, 1401, South Africa"
  },
  {
    "id": "node-594",
    "name": "More4you",
    "categoryId": "t6",
    "lat": -26.32553,
    "lng": 27.8529835,
    "address": "7 Bonita St, Lenasia, 1821, South Africa"
  },
  {
    "id": "node-595",
    "name": "Molehabang Trading and Projects",
    "categoryId": "t6",
    "lat": -25.7677778,
    "lng": 28.0744631,
    "address": "39 Ramushu St, Atteridgeville, Pretoria, 0008, South Africa"
  },
  {
    "id": "node-596",
    "name": "Le Cassa",
    "categoryId": "t6",
    "lat": -25.8375938,
    "lng": 28.1048918,
    "address": "11 Centurion Centrurion, Sunderland Ridge, Centurion, 1008, South Africa"
  },
  {
    "id": "node-597",
    "name": "1-Way group of food products",
    "categoryId": "t6",
    "lat": -26.0947166,
    "lng": 28.1092147,
    "address": "3249 Walter Masemola St, Far East Bank, Alexandra, 2090, South Africa"
  },
  {
    "id": "node-598",
    "name": "Excellent Pies",
    "categoryId": "t6",
    "lat": -26.1138542,
    "lng": 28.1050323,
    "address": "8 Brighton Road, Bramley View, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-599",
    "name": "Asumos Distribution",
    "categoryId": "t6",
    "lat": -26.1171376,
    "lng": 28.1765729,
    "address": "26 Imvubu Rd, Sebenza, Johannesburg, 1609, South Africa"
  },
  {
    "id": "node-600",
    "name": "Sosi Foods Distribution",
    "categoryId": "t6",
    "lat": -26.1492341,
    "lng": 27.7990263,
    "address": "11 Chenik St, Chamdor, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-601",
    "name": "Esta di la pty ltd",
    "categoryId": "t6",
    "lat": -26.1255839,
    "lng": 27.8677169,
    "address": "09 Banket Dr, Helderkruin, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-602",
    "name": "Imax Distributors (PTY) LTD",
    "categoryId": "t6",
    "lat": -26.207398,
    "lng": 28.3100516,
    "address": "Unit 5&6, Secure Poplar Business Park, 16 Lancaster Rd, Actonville, Benoni, 1500, South Africa"
  },
  {
    "id": "node-603",
    "name": "Good vehicles",
    "categoryId": "t6",
    "lat": -26.2223689,
    "lng": 28.2557657,
    "address": "75b Market St, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-604",
    "name": "Jck & Vgl Holdings",
    "categoryId": "t6",
    "lat": -26.1166899,
    "lng": 28.35632,
    "address": "16 Busschau Rd, Fairleads, Benoni, 1501, South Africa"
  },
  {
    "id": "node-605",
    "name": "Africa Distributor (Pty) Ltd",
    "categoryId": "t6",
    "lat": -26.0252524,
    "lng": 27.9512924,
    "address": "Unit 9, 9 Engineering Cl, Kya Sand, Johannesburg, 2169, South Africa"
  },
  {
    "id": "node-606",
    "name": "Find Your Flava",
    "categoryId": "t6",
    "lat": -26.0523197,
    "lng": 27.9615857,
    "address": "Northriding, Randburg, 2188, South Africa"
  },
  {
    "id": "node-607",
    "name": "ANH Trading",
    "categoryId": "t6",
    "lat": -26.2034553,
    "lng": 28.0204578,
    "address": "Crown Rd, Crown Mines, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-608",
    "name": "Hempe",
    "categoryId": "t6",
    "lat": -26.3335508,
    "lng": 28.2001219,
    "address": "2 Moletasaka Rd, Vosloorus Ext 6, Vosloorus, 1475, South Africa"
  },
  {
    "id": "node-609",
    "name": "Triple Crown Oil PTY LTD",
    "categoryId": "t6",
    "lat": -26.0402301,
    "lng": 27.7199015,
    "address": "66/25 N14 Ventersdorp road, Sterkfontein, Oaktree, Krugersdorp, 1740, South Africa"
  },
  {
    "id": "node-610",
    "name": "Hameez Trading",
    "categoryId": "t6",
    "lat": -26.1997221,
    "lng": 27.9641885,
    "address": "35 Springbok Rd, Longdale, Johannesburg, 2093, South Africa"
  },
  {
    "id": "node-611",
    "name": "Exigofin CC",
    "categoryId": "t6",
    "lat": -26.2184157,
    "lng": 28.0027614,
    "address": "38 Planet Ave, Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-612",
    "name": "Aeves Atchaar Supplier",
    "categoryId": "t6",
    "lat": -26.2578784,
    "lng": 27.9428125,
    "address": "Cnr chrishani&Patrick road, blackchain, Diepkloof Zone 6, Soweto, 1818, South Africa"
  },
  {
    "id": "node-613",
    "name": "Flordnce",
    "categoryId": "t6",
    "lat": -26.2738662,
    "lng": 27.9951862,
    "address": "Mondeor, Johannesburg South, 2110, South Africa"
  },
  {
    "id": "node-614",
    "name": "MARHABA TRADING (Pty) ltd",
    "categoryId": "t6",
    "lat": -26.2198486,
    "lng": 28.0034353,
    "address": "Unit 5, 49 Stellar Ave, Crown Mines, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-615",
    "name": "Citizen",
    "categoryId": "t6",
    "lat": -26.2302972,
    "lng": 27.9190418,
    "address": "20/11904, Soweto, 1804, South Africa"
  },
  {
    "id": "node-616",
    "name": "Metcash Trading Africa",
    "categoryId": "t7",
    "lat": -25.7408782,
    "lng": 28.1868754,
    "address": "181 Bloed St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-617",
    "name": "MAMS CASH AND CARRY",
    "categoryId": "t7",
    "lat": -25.7283181,
    "lng": 28.4342466,
    "address": "0"
  },
  {
    "id": "node-618",
    "name": "Metro Cash & Carry -Temba",
    "categoryId": "t7",
    "lat": -25.3776869,
    "lng": 28.2569534,
    "address": "0"
  },
  {
    "id": "node-619",
    "name": "Germiston Cash And Carry",
    "categoryId": "t7",
    "lat": -26.2291492,
    "lng": 28.1966801,
    "address": "0"
  },
  {
    "id": "node-620",
    "name": "osizweni cash and carry",
    "categoryId": "t7",
    "lat": -25.7115548,
    "lng": 28.3738423,
    "address": "0"
  },
  {
    "id": "node-621",
    "name": "Fast Grow Cash & Carry",
    "categoryId": "t7",
    "lat": -25.4393086,
    "lng": 28.1068603,
    "address": "0"
  },
  {
    "id": "node-622",
    "name": "Devland Cash And Carry Wholesaler",
    "categoryId": "t7",
    "lat": -26.25467095,
    "lng": 27.8748698,
    "address": "0"
  },
  {
    "id": "node-623",
    "name": "Bel-Air Cash and Carry",
    "categoryId": "t7",
    "lat": -26.2118542,
    "lng": 28.167153,
    "address": "0"
  },
  {
    "id": "node-624",
    "name": "Big Daddy's Cash & Carry",
    "categoryId": "t7",
    "lat": -25.7235427,
    "lng": 28.4199441,
    "address": "0"
  },
  {
    "id": "node-625",
    "name": "Sweet Mart Cash & Carry",
    "categoryId": "t7",
    "lat": -25.9335248,
    "lng": 28.0147202,
    "address": "0"
  },
  {
    "id": "node-626",
    "name": "Africa Cash & Carry Crown Mines (PTY) Ltd",
    "categoryId": "t7",
    "lat": -26.12122572,
    "lng": 28.45774774,
    "address": "0"
  },
  {
    "id": "node-627",
    "name": "Tembisa Cash And Carry",
    "categoryId": "t7",
    "lat": -25.503531,
    "lng": 28.0773861,
    "address": "0"
  },
  {
    "id": "node-628",
    "name": "Rehoboth Cash & Carry",
    "categoryId": "t7",
    "lat": -26.2135126,
    "lng": 28.16885492,
    "address": "0"
  },
  {
    "id": "node-629",
    "name": "Isaac Wholesale (Adam's Cash and Carry Peterborough)",
    "categoryId": "t7",
    "lat": -25.8033997,
    "lng": 28.7468845,
    "address": "0"
  },
  {
    "id": "node-630",
    "name": "Selma Cash & Carry",
    "categoryId": "t7",
    "lat": -25.7461708,
    "lng": 28.1674631,
    "address": "0"
  },
  {
    "id": "node-631",
    "name": "Goshen Land Cash & Carry",
    "categoryId": "t7",
    "lat": -26.1999541,
    "lng": 28.04909829,
    "address": "0"
  },
  {
    "id": "node-632",
    "name": "Safina Cash And Carry",
    "categoryId": "t7",
    "lat": -25.4101673,
    "lng": 28.2812523,
    "address": "0"
  },
  {
    "id": "node-633",
    "name": "Big Man 2 Cash & Carry",
    "categoryId": "t7",
    "lat": -26.280109,
    "lng": 27.8876048,
    "address": "0"
  },
  {
    "id": "node-634",
    "name": "AKIES CASH & CARRY CC",
    "categoryId": "t7",
    "lat": -25.6392804,
    "lng": 27.7977421,
    "address": "Brits 8 Piet Rautenbach Brits 0256"
  },
  {
    "id": "node-635",
    "name": "UNIMART CASH & CARRY",
    "categoryId": "t7",
    "lat": -25.8433845,
    "lng": 28.1077132,
    "address": "Newton 30 Van Tonder Street Sunderland Ridge Centurion"
  },
  {
    "id": "node-636",
    "name": "PICK N SAVE CASH & CARRY",
    "categoryId": "t7",
    "lat": -26.2289253,
    "lng": 28.1980475,
    "address": "Germiston 75 Ostend Road Dellville Germiston"
  },
  {
    "id": "node-637",
    "name": "President Hyper Krugersdorp",
    "categoryId": "t8",
    "lat": -26.0978385,
    "lng": 27.776579,
    "address": "Freedom, Corner Market &, Pretoria St, Paardeplaats 177 IQ, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-638",
    "name": "President Hyper Vaal",
    "categoryId": "t8",
    "lat": -26.697812,
    "lng": 27.88638,
    "address": "Corner Playfair Boulevard &, Ascot On Vaal Rd, Vaal, Vereeniging, 1911, South Africa"
  },
  {
    "id": "node-639",
    "name": "Frontline Hyper Hillfox",
    "categoryId": "t8",
    "lat": -26.1418405,
    "lng": 27.9221232,
    "address": "Hendrik Potgieter Rd, Weltevredenpark, Johannesburg, 1709, South Africa"
  },
  {
    "id": "node-640",
    "name": "President Hyper Fochville",
    "categoryId": "t8",
    "lat": -26.4922451,
    "lng": 27.4941272,
    "address": "Corner Kerk Street and, Losberg Ave, Fochville, 2515, South Africa"
  },
  {
    "id": "node-641",
    "name": "Checkers Norkem Park",
    "categoryId": "t8",
    "lat": -26.063008,
    "lng": 28.220467,
    "address": "Norkem Park Shopping Centre, Cnr James Wright Ave, Mooirivier Dr, and, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-642",
    "name": "Frontline Hyper Edenvale",
    "categoryId": "t8",
    "lat": -26.1582345,
    "lng": 28.168393,
    "address": "Meadowdale, Germiston, 1614, South Africa"
  },
  {
    "id": "node-643",
    "name": "Roots Butchery Protea Glen",
    "categoryId": "t8",
    "lat": -26.2766346,
    "lng": 27.8118005,
    "address": "Protea Glen Mall, Protea Blvd, Soweto, Johannesburg, 1818, South Africa"
  },
  {
    "id": "node-644",
    "name": "Checkers Bryanston",
    "categoryId": "t8",
    "lat": -26.075,
    "lng": 28.028,
    "address": "17, 21 Ballyclare Dr, Bryanston, Sandton, 2021, South Africa"
  },
  {
    "id": "node-645",
    "name": "Discount Foods",
    "categoryId": "t8",
    "lat": -26.2013301,
    "lng": 28.0493092,
    "address": "103 Kerk St, Hillbrow, Johannesburg, 2038, South Africa"
  },
  {
    "id": "node-646",
    "name": "Shoprite Vosloorus GS",
    "categoryId": "t8",
    "lat": -26.3415455,
    "lng": 28.2146914,
    "address": "Golden Spot Shopping Centre, Bierman Rd, Vosloorus, Rusloo, 1475, South Africa"
  },
  {
    "id": "node-647",
    "name": "Yat Sang Chinese Supermarket",
    "categoryId": "t8",
    "lat": -25.7896424,
    "lng": 28.3145161,
    "address": "12 & 13, Faeriedale Centre, Cliffendale Dr, Faerie Glen, Pretoria, 0081, South Africa"
  },
  {
    "id": "node-648",
    "name": "Savemoor Mafutha Oakmoor Station",
    "categoryId": "t8",
    "lat": -26.005418,
    "lng": 28.248468,
    "address": "Crocodile St, Thembisa, Johannesburg, 1619, South Africa"
  },
  {
    "id": "node-649",
    "name": "much better dragon city（H71-H75）",
    "categoryId": "t8",
    "lat": -26.2102397,
    "lng": 28.0188888,
    "address": "1-3 Park Dr, Crown North, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-650",
    "name": "Jivan Supermarket",
    "categoryId": "t8",
    "lat": -26.1855637,
    "lng": 27.9670484,
    "address": "Corner Hamilton and Dowling Street, Newclare, Randburg, 2093, South Africa"
  },
  {
    "id": "node-651",
    "name": "Electron Foods",
    "categoryId": "t8",
    "lat": -26.2425979,
    "lng": 28.10058,
    "address": "Southern Klipriviersberg Rd, Steeldale, Johannesburg, 2197, South Africa"
  },
  {
    "id": "node-652",
    "name": "Shoprite Carletonville",
    "categoryId": "t8",
    "lat": -26.3578972,
    "lng": 27.3826083,
    "address": "Carletonville Complex, Onxy Drive, and, Paul Kruger St, Carletonville, 2499, South Africa"
  },
  {
    "id": "node-653",
    "name": "Taj Supermarket",
    "categoryId": "t8",
    "lat": -26.324509,
    "lng": 27.8579495,
    "address": "Extension 8, 1 Protea Ave, Lenasia, Johannesburg, 1827, South Africa"
  },
  {
    "id": "node-654",
    "name": "Molare Meats Factory Shop",
    "categoryId": "t8",
    "lat": -25.9692003,
    "lng": 28.2381916,
    "address": "22 Main Rd, Clayville Industrial, Olifantsfontein, 1666, South Africa"
  },
  {
    "id": "node-655",
    "name": "Mokwena Super Stores",
    "categoryId": "t8",
    "lat": -26.008349,
    "lng": 28.1838773,
    "address": "296 29 September Dr, Midrand, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-656",
    "name": "Santos Liquors",
    "categoryId": "t8",
    "lat": -25.6199362,
    "lng": 27.9836251,
    "address": "South Africa"
  },
  {
    "id": "node-657",
    "name": "Sui Hing Hong",
    "categoryId": "t8",
    "lat": -26.2062459,
    "lng": 28.0336817,
    "address": "17 Commissioner St, Ferreiras Dorp, Johannesburg, 2048, South Africa"
  },
  {
    "id": "node-658",
    "name": "Mayesela General Dealerw",
    "categoryId": "t8",
    "lat": -26.1146147,
    "lng": 28.4548152,
    "address": "Winnie Mandela, Benoni, South Africa"
  },
  {
    "id": "node-659",
    "name": "Shoprite SCF Randburg",
    "categoryId": "t8",
    "lat": -26.094667,
    "lng": 28.00505,
    "address": "Bram Fischer Dr, Ferndale, Randburg, 2194, South Africa"
  },
  {
    "id": "node-660",
    "name": "Rank Supermarket",
    "categoryId": "t8",
    "lat": -26.0975272,
    "lng": 27.7709783,
    "address": "45 Pretoria St, Krugersdorp, Johannesburg, 1739, South Africa"
  },
  {
    "id": "node-661",
    "name": "Food Centre",
    "categoryId": "t8",
    "lat": -26.1986394,
    "lng": 28.0546612,
    "address": "28 Sherwell and, Rocky St, Doornfontein, Johannesburg, 2028, South Africa"
  },
  {
    "id": "node-662",
    "name": "Food Town Freedom Supermarket",
    "categoryId": "t8",
    "lat": -26.1106241,
    "lng": 28.0877381,
    "address": "216 Watt Ave, Wynberg, Sandton, 2090, South Africa"
  },
  {
    "id": "node-663",
    "name": "Maplotters Friendly Mini Supermarket",
    "categoryId": "t8",
    "lat": -25.7211323,
    "lng": 27.9946852,
    "address": "Plot 127, South Africa"
  },
  {
    "id": "node-664",
    "name": "Kwa Mkulu Supermarket",
    "categoryId": "t8",
    "lat": -26.3882689,
    "lng": 28.139581,
    "address": "3 Teebos Ave, Palm Ridge, Katlehong, 1458, South Africa"
  },
  {
    "id": "node-665",
    "name": "FMS Super Market",
    "categoryId": "t8",
    "lat": -26.1581723,
    "lng": 27.783008,
    "address": "9093 Kagiso Ave, Kagiso, Johannesburg, 1754, South Africa"
  },
  {
    "id": "node-666",
    "name": "Abdul Discount Super Mart",
    "categoryId": "t8",
    "lat": -26.1854573,
    "lng": 28.0586616,
    "address": "Saunders St, Yeoville, Johannesburg, 2981, South Africa"
  },
  {
    "id": "node-667",
    "name": "Ramadan Supermarket",
    "categoryId": "t8",
    "lat": -26.2052649,
    "lng": 28.0127412,
    "address": "55 Clifton St, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-668",
    "name": "Hyperland Krugersdorp",
    "categoryId": "t8",
    "lat": -26.0968005,
    "lng": 27.7717638,
    "address": "Paardeplaats 177 IQ, Krugersdorp, South Africa"
  },
  {
    "id": "node-669",
    "name": "Econofoods Norkem Mall",
    "categoryId": "t8",
    "lat": -26.0631506,
    "lng": 28.2193619,
    "address": "Norkem Corner, Mooirivier Dr, Norkem Park, Kempton Park, 1618, South Africa"
  },
  {
    "id": "node-670",
    "name": "Rosslyn Bulk Sellers",
    "categoryId": "t8",
    "lat": -25.6238914,
    "lng": 28.0979828,
    "address": "112 De Waal St, Rosslyn, Akasia, 0200, South Africa"
  },
  {
    "id": "node-671",
    "name": "Majutene Food Town Hyper",
    "categoryId": "t8",
    "lat": -26.1588326,
    "lng": 28.4186472,
    "address": "Alliance Rd, Modderfontein 76-Ir, Benoni, 1507, South Africa"
  },
  {
    "id": "node-672",
    "name": "Kagiso Frozen Foods",
    "categoryId": "t8",
    "lat": -26.1560888,
    "lng": 27.796055,
    "address": "2 Dobson St, Chamdor, Johannesburg, 1754, South Africa"
  },
  {
    "id": "node-673",
    "name": "KM2 SUPERMARKET",
    "categoryId": "t8",
    "lat": -26.3242498,
    "lng": 28.3813403,
    "address": "2573, ex 1, 1550 Imbala Boulevard, Langaville, Brakpan, 1550, South Africa"
  },
  {
    "id": "node-674",
    "name": "R82 Supermarket",
    "categoryId": "t8",
    "lat": -26.5751214,
    "lng": 27.9468675,
    "address": "12, Ebenhazer park old, Grossly, Vereeniging, 1938, South Africa"
  },
  {
    "id": "node-675",
    "name": "Zak Park BD Supermarket",
    "categoryId": "t8",
    "lat": -26.3664832,
    "lng": 27.8924537,
    "address": "22 Tumeric Dr, Zakariyya Park, 1821, South Africa"
  },
  {
    "id": "node-676",
    "name": "Shourov Supermarket",
    "categoryId": "t8",
    "lat": -26.3194375,
    "lng": 27.823571,
    "address": "Station Mall, Lenasia, 1827, South Africa"
  },
  {
    "id": "node-677",
    "name": "HOME CITY",
    "categoryId": "t9",
    "lat": -26.1826864,
    "lng": 27.7029746,
    "address": "0"
  },
  {
    "id": "node-678",
    "name": "Shoprite Pritchard Street",
    "categoryId": "t9",
    "lat": -26.2013159,
    "lng": 28.0369657,
    "address": "0"
  },
  {
    "id": "node-679",
    "name": "A To Z Supermarket @ The Achaar King",
    "categoryId": "t9",
    "lat": -26.326678,
    "lng": 27.8255776,
    "address": "0"
  },
  {
    "id": "node-680",
    "name": "Rite Price Wholesalers",
    "categoryId": "t9",
    "lat": -26.2478871,
    "lng": 28.4384991,
    "address": "0"
  },
  {
    "id": "node-681",
    "name": "Let's Build Soutpan Crossing",
    "categoryId": "t9",
    "lat": -25.40666293,
    "lng": 28.1085851,
    "address": "0"
  },
  {
    "id": "node-682",
    "name": "Checkers Selcourt",
    "categoryId": "t9",
    "lat": -26.2890297,
    "lng": 28.44632031,
    "address": "0"
  },
  {
    "id": "node-683",
    "name": "Marabastad Retail Wholesalers",
    "categoryId": "t9",
    "lat": -25.40665602,
    "lng": 28.27175771,
    "address": "0"
  },
  {
    "id": "node-684",
    "name": "Mamelodi Square",
    "categoryId": "t9",
    "lat": -25.7113542,
    "lng": 28.4010599,
    "address": "0"
  },
  {
    "id": "node-685",
    "name": "Viva Supermarket",
    "categoryId": "t9",
    "lat": -26.19352584,
    "lng": 28.04922862,
    "address": "0"
  },
  {
    "id": "node-686",
    "name": "SUPERSPAR Bloed Street",
    "categoryId": "t9",
    "lat": -25.7376783,
    "lng": 28.1786403,
    "address": "0"
  },
  {
    "id": "node-687",
    "name": "Az Wholesalers & Retailers",
    "categoryId": "t9",
    "lat": -26.1897518,
    "lng": 28.046384,
    "address": "0"
  },
  {
    "id": "node-688",
    "name": "Robot Wholesales Trading",
    "categoryId": "t9",
    "lat": -26.24445174,
    "lng": 28.03821626,
    "address": "0"
  },
  {
    "id": "node-689",
    "name": "Molly's place",
    "categoryId": "t9",
    "lat": -26.220029,
    "lng": 27.8722411,
    "address": "0"
  },
  {
    "id": "node-690",
    "name": "Ethio Africa Big Discount Supermarket",
    "categoryId": "t9",
    "lat": -26.038844,
    "lng": 28.1776135,
    "address": "0"
  },
  {
    "id": "node-691",
    "name": "Mini Wholesalers",
    "categoryId": "t9",
    "lat": -26.1887845,
    "lng": 28.0508623,
    "address": "0"
  },
  {
    "id": "node-692",
    "name": "Siyazama Projects & Fresh Water Supply",
    "categoryId": "t9",
    "lat": -25.91465162,
    "lng": 28.09142787,
    "address": "0"
  },
  {
    "id": "node-693",
    "name": "ROSPA SUPERMARKET",
    "categoryId": "t9",
    "lat": -25.92318337,
    "lng": 28.0974683,
    "address": "0"
  },
  {
    "id": "node-694",
    "name": "A&N Supermarket And Take Away",
    "categoryId": "t9",
    "lat": -26.200624,
    "lng": 28.0126324,
    "address": "0"
  },
  {
    "id": "node-695",
    "name": "New Hyper Save Supermarket",
    "categoryId": "t9",
    "lat": -26.2940496,
    "lng": 27.9213973,
    "address": "0"
  },
  {
    "id": "node-696",
    "name": "Mpumelelo Street",
    "categoryId": "t9",
    "lat": -26.2296866,
    "lng": 27.8387123,
    "address": "0"
  },
  {
    "id": "node-697",
    "name": "Goolams Take & Pay",
    "categoryId": "t9",
    "lat": -25.7554802,
    "lng": 28.1531448,
    "address": "0"
  },
  {
    "id": "node-698",
    "name": "Supa Saver",
    "categoryId": "t9",
    "lat": -26.1959703,
    "lng": 28.0382901,
    "address": "0"
  },
  {
    "id": "node-699",
    "name": "Cosmetics",
    "categoryId": "t9",
    "lat": -25.3775668,
    "lng": 28.2576095,
    "address": "0"
  },
  {
    "id": "node-700",
    "name": "Bless Supermarket",
    "categoryId": "t9",
    "lat": -26.0251069,
    "lng": 28.1916147,
    "address": "0"
  },
  {
    "id": "node-701",
    "name": "Choma Supermarket",
    "categoryId": "t9",
    "lat": -25.5854705,
    "lng": 28.0462648,
    "address": "0"
  },
  {
    "id": "node-702",
    "name": "Chicken @ Wholesale Depot",
    "categoryId": "t9",
    "lat": -26.3102673,
    "lng": 28.249993,
    "address": "0"
  },
  {
    "id": "node-703",
    "name": "Awasa Supermarket (Monaco)",
    "categoryId": "t9",
    "lat": -25.7158587,
    "lng": 28.3419032,
    "address": "0"
  },
  {
    "id": "node-704",
    "name": "NORAIZ GROCERY HUB",
    "categoryId": "t9",
    "lat": -26.1599342,
    "lng": 27.8687138,
    "address": "0"
  },
  {
    "id": "node-705",
    "name": "Oh Baby Co",
    "categoryId": "t9",
    "lat": -26.0091326,
    "lng": 28.1848588,
    "address": "0"
  },
  {
    "id": "node-706",
    "name": "Second 2 None",
    "categoryId": "t9",
    "lat": -26.1055824,
    "lng": 28.2272583,
    "address": "0"
  },
  {
    "id": "node-707",
    "name": "Nonnie's Book Exchange",
    "categoryId": "t9",
    "lat": -26.6775283,
    "lng": 27.9296478,
    "address": "0"
  },
  {
    "id": "node-708",
    "name": "BulkChoice Wholesaler (Mofaya Depot)",
    "categoryId": "t9",
    "lat": -26.2012605,
    "lng": 28.0514906,
    "address": "0"
  },
  {
    "id": "node-709",
    "name": "Surplus Grain Traders Retail",
    "categoryId": "t9",
    "lat": -26.18865596,
    "lng": 28.04990266,
    "address": "0"
  },
  {
    "id": "node-710",
    "name": "Pay Less Roxanna Branch Supermarket",
    "categoryId": "t9",
    "lat": -26.31419819,
    "lng": 28.38900015,
    "address": "0"
  },
  {
    "id": "node-711",
    "name": "Bot Shop",
    "categoryId": "t9",
    "lat": -25.7413739,
    "lng": 28.1717154,
    "address": "0"
  },
  {
    "id": "node-712",
    "name": "Africa Liquor Distribution",
    "categoryId": "t9",
    "lat": -26.2278481,
    "lng": 28.2266569,
    "address": "0"
  },
  {
    "id": "node-713",
    "name": "Viva Supa-Save",
    "categoryId": "t9",
    "lat": -25.7383942,
    "lng": 28.1768352,
    "address": "0"
  },
  {
    "id": "node-714",
    "name": "Mayibuye Street",
    "categoryId": "t9",
    "lat": -26.276768,
    "lng": 27.7627188,
    "address": "0"
  },
  {
    "id": "node-715",
    "name": "Corner Tuck Shop",
    "categoryId": "t9",
    "lat": -26.4072142,
    "lng": 27.8373822,
    "address": "0"
  },
  {
    "id": "node-716",
    "name": "Marvelous One General Dealer",
    "categoryId": "t9",
    "lat": -26.0081869,
    "lng": 28.2231762,
    "address": "0"
  },
  {
    "id": "node-717",
    "name": "Jabu's Busy corner",
    "categoryId": "t9",
    "lat": -25.4759437,
    "lng": 28.0555376,
    "address": "0"
  },
  {
    "id": "node-718",
    "name": "Robot Industrial Supplies (Pty) Ltd",
    "categoryId": "t9",
    "lat": -26.2133314,
    "lng": 28.1687013,
    "address": "0"
  },
  {
    "id": "node-719",
    "name": "Fml Supermarket",
    "categoryId": "t9",
    "lat": -26.182579,
    "lng": 27.7030068,
    "address": "0"
  },
  {
    "id": "node-720",
    "name": "Edenvale Post Office",
    "categoryId": "t9",
    "lat": -26.1810137,
    "lng": 28.0596186,
    "address": "0"
  },
  {
    "id": "node-721",
    "name": "Creative Sweets Factory Shop",
    "categoryId": "t9",
    "lat": -26.0100244,
    "lng": 28.2214222,
    "address": "0"
  },
  {
    "id": "node-722",
    "name": "N & M General Dealer",
    "categoryId": "t9",
    "lat": -26.1885454,
    "lng": 28.0500382,
    "address": "0"
  },
  {
    "id": "node-723",
    "name": "Save Supermarket",
    "categoryId": "t9",
    "lat": -26.19589354,
    "lng": 28.03824078,
    "address": "0"
  },
  {
    "id": "node-724",
    "name": "Pick n Pay Family Strubenvale",
    "categoryId": "t9",
    "lat": -26.3509639,
    "lng": 28.3889948,
    "address": "0"
  },
  {
    "id": "node-725",
    "name": "Mac's Wholesalers",
    "categoryId": "t9",
    "lat": -26.2799392,
    "lng": 27.8872312,
    "address": "0"
  },
  {
    "id": "node-726",
    "name": "DDS Pty LTD - Drinks Dispense Services",
    "categoryId": "t9",
    "lat": -25.99941957,
    "lng": 28.2072342,
    "address": "0"
  },
  {
    "id": "node-727",
    "name": "Bismillah Chicken wholesalers",
    "categoryId": "t9",
    "lat": -26.1599346,
    "lng": 27.8686566,
    "address": "0"
  },
  {
    "id": "node-728",
    "name": "Randburg Wholesale Market",
    "categoryId": "t9",
    "lat": -26.23240736,
    "lng": 28.02339993,
    "address": "0"
  },
  {
    "id": "node-729",
    "name": "Benoni Discount Store",
    "categoryId": "t9",
    "lat": -26.11625548,
    "lng": 28.45656189,
    "address": "0"
  },
  {
    "id": "node-730",
    "name": "Lizzy's Inn",
    "categoryId": "t9",
    "lat": -26.3142553,
    "lng": 27.7578851,
    "address": "0"
  },
  {
    "id": "node-731",
    "name": "Suliman Ismail Mia & Co. Pty Ltd",
    "categoryId": "t9",
    "lat": -26.2790761,
    "lng": 27.8869427,
    "address": "0"
  },
  {
    "id": "node-732",
    "name": "African Brothers Supermarket",
    "categoryId": "t9",
    "lat": -26.6774484,
    "lng": 27.929132,
    "address": "0"
  },
  {
    "id": "node-733",
    "name": "Hussain Supermarket No. 2",
    "categoryId": "t9",
    "lat": -26.3191264,
    "lng": 27.65218436,
    "address": "0"
  },
  {
    "id": "node-734",
    "name": "The Sweet Hyper",
    "categoryId": "t9",
    "lat": -26.1695234,
    "lng": 27.7583469,
    "address": "0"
  },
  {
    "id": "node-735",
    "name": "ZAMA ZAMA SUPERMARKET",
    "categoryId": "t9",
    "lat": -25.9337116,
    "lng": 28.0145855,
    "address": "0"
  },
  {
    "id": "node-736",
    "name": "The Lollipop Lounge",
    "categoryId": "t9",
    "lat": -26.22959426,
    "lng": 27.83873349,
    "address": "0"
  },
  {
    "id": "node-737",
    "name": "Lenasia Wholesale Groceries",
    "categoryId": "t9",
    "lat": -26.2345849,
    "lng": 27.6118853,
    "address": "0"
  },
  {
    "id": "node-738",
    "name": "sweetland super store",
    "categoryId": "t9",
    "lat": -26.70144601,
    "lng": 27.83799504,
    "address": "0"
  },
  {
    "id": "node-739",
    "name": "Star Wholesalers",
    "categoryId": "t9",
    "lat": -26.24885442,
    "lng": 28.05198042,
    "address": "0"
  },
  {
    "id": "node-740",
    "name": "Bismillah Wholesaler",
    "categoryId": "t9",
    "lat": -26.1666909,
    "lng": 28.2047212,
    "address": "0"
  },
  {
    "id": "node-741",
    "name": "ALHAMDU SUPER MARKET",
    "categoryId": "t9",
    "lat": -26.0319908,
    "lng": 28.1692695,
    "address": "0"
  },
  {
    "id": "node-742",
    "name": "Malik schoolwear and stationary wholesalers",
    "categoryId": "t9",
    "lat": -26.4005955,
    "lng": 27.8715678,
    "address": "0"
  },
  {
    "id": "node-743",
    "name": "AFROPRODUCTS: PREMIER ZIMBABWEAN FOOD DISTRIBUTORS",
    "categoryId": "t9",
    "lat": -25.9368272,
    "lng": 28.0142098,
    "address": "0"
  },
  {
    "id": "node-744",
    "name": "Freedom Family Supermarket",
    "categoryId": "t9",
    "lat": -25.9338245,
    "lng": 28.0146148,
    "address": "0"
  },
  {
    "id": "node-745",
    "name": "Wholesale Sweet Market",
    "categoryId": "t9",
    "lat": -25.4941619,
    "lng": 28.0895947,
    "address": "0"
  },
  {
    "id": "node-746",
    "name": "KK wholesalers",
    "categoryId": "t9",
    "lat": -25.47955524,
    "lng": 28.11461899,
    "address": "0"
  },
  {
    "id": "node-747",
    "name": "M C N Motor Spares",
    "categoryId": "t9",
    "lat": -26.4740729,
    "lng": 27.8357981,
    "address": "0"
  },
  {
    "id": "node-748",
    "name": "Wholesale Meat Services",
    "categoryId": "t9",
    "lat": -26.0984826,
    "lng": 27.7708709,
    "address": "0"
  },
  {
    "id": "node-749",
    "name": "The Generator King",
    "categoryId": "t9",
    "lat": -26.2417615,
    "lng": 27.9037914,
    "address": "0"
  },
  {
    "id": "node-750",
    "name": "Amen Apparel",
    "categoryId": "t9",
    "lat": -25.9337017,
    "lng": 28.0145644,
    "address": "0"
  },
  {
    "id": "node-751",
    "name": "Robot Mini Market",
    "categoryId": "t9",
    "lat": -25.4023068,
    "lng": 28.283083,
    "address": "0"
  },
  {
    "id": "node-752",
    "name": "Busy Corner",
    "categoryId": "t9",
    "lat": -25.93953907,
    "lng": 28.01394672,
    "address": "0"
  },
  {
    "id": "node-753",
    "name": "T.M.W Trading E.T.P",
    "categoryId": "t9",
    "lat": -26.2137342,
    "lng": 28.1692672,
    "address": "0"
  },
  {
    "id": "node-754",
    "name": "JMP Group",
    "categoryId": "t9",
    "lat": -26.6775563,
    "lng": 27.9301829,
    "address": "0"
  },
  {
    "id": "node-755",
    "name": "Abdullah Miah General Dealer",
    "categoryId": "t9",
    "lat": -26.0308287,
    "lng": 27.9253987,
    "address": "0"
  },
  {
    "id": "node-756",
    "name": "PINKY COSMETICS WHOLESALER",
    "categoryId": "t9",
    "lat": -25.4933796,
    "lng": 28.0658421,
    "address": "0"
  },
  {
    "id": "node-757",
    "name": "Al-Amin Super Market & Wholesale",
    "categoryId": "t9",
    "lat": -25.7199179,
    "lng": 28.1541579,
    "address": "0"
  },
  {
    "id": "node-758",
    "name": "None",
    "categoryId": "t9",
    "lat": -26.1253776,
    "lng": 28.47738395,
    "address": "0"
  },
  {
    "id": "node-759",
    "name": "None",
    "categoryId": "t9",
    "lat": -26.11404069,
    "lng": 28.4806071,
    "address": "0"
  },
  {
    "id": "node-760",
    "name": "Itumeleng's Fresh Egg's",
    "categoryId": "t9",
    "lat": -25.500684,
    "lng": 28.072109,
    "address": "0"
  },
  {
    "id": "node-761",
    "name": "None",
    "categoryId": "t9",
    "lat": -25.6091532,
    "lng": 28.0025227,
    "address": "0"
  },
  {
    "id": "node-762",
    "name": "Robot Industrial Supplies (Pty) Ltd",
    "categoryId": "t9",
    "lat": -25.4023533,
    "lng": 28.2836416,
    "address": "0"
  },
  {
    "id": "node-763",
    "name": "MTN TUCKSHOP",
    "categoryId": "t9",
    "lat": -26.2357433,
    "lng": 28.36680723,
    "address": "0"
  },
  {
    "id": "node-764",
    "name": "Thandabantu WHOLESALERS",
    "categoryId": "t9",
    "lat": -25.9990763,
    "lng": 28.2066403,
    "address": "0"
  },
  {
    "id": "node-765",
    "name": "Al-Amin Super Market & Wholesale",
    "categoryId": "t9",
    "lat": -25.40867744,
    "lng": 28.2813766,
    "address": "0"
  },
  {
    "id": "node-766",
    "name": "Nahome Trading",
    "categoryId": "t9",
    "lat": -26.0975218,
    "lng": 27.7714497,
    "address": "0"
  },
  {
    "id": "node-767",
    "name": "SIYABONGA SUPERMARKET",
    "categoryId": "t9",
    "lat": -25.7318395,
    "lng": 28.4341097,
    "address": "0"
  },
  {
    "id": "node-768",
    "name": "ABYSSINIA WHOLESALE & SUPEMARKET",
    "categoryId": "t9",
    "lat": -25.5188966,
    "lng": 28.0924489,
    "address": "0"
  },
  {
    "id": "node-769",
    "name": "J P Pelesi Trading n General",
    "categoryId": "t9",
    "lat": -26.3493447,
    "lng": 28.434184,
    "address": "0"
  },
  {
    "id": "node-770",
    "name": "Thanda Bantu",
    "categoryId": "t9",
    "lat": -26.0974592,
    "lng": 27.7700862,
    "address": "0"
  },
  {
    "id": "node-771",
    "name": "GMK Supermarket",
    "categoryId": "t9",
    "lat": -25.7416721,
    "lng": 28.1907534,
    "address": "0"
  },
  {
    "id": "node-772",
    "name": "Dididi Supermarket & Supplies",
    "categoryId": "t9",
    "lat": -26.182953,
    "lng": 27.7021997,
    "address": "0"
  },
  {
    "id": "node-773",
    "name": "CÃ´te d'Ivoire",
    "categoryId": "t9",
    "lat": -26.0269009,
    "lng": 27.9280368,
    "address": "0"
  },
  {
    "id": "node-774",
    "name": "Green Leaf Supermarket",
    "categoryId": "t9",
    "lat": -25.7378018,
    "lng": 28.1796515,
    "address": "0"
  },
  {
    "id": "node-775",
    "name": "Bilal Textiles",
    "categoryId": "t9",
    "lat": -26.6775174,
    "lng": 27.9298517,
    "address": "0"
  },
  {
    "id": "node-776",
    "name": "SAFWAN GROCERIES",
    "categoryId": "t9",
    "lat": -26.2038452,
    "lng": 28.0207347,
    "address": "0"
  },
  {
    "id": "node-777",
    "name": "Oom Fred waffles and pancakes",
    "categoryId": "t9",
    "lat": -26.1486258,
    "lng": 28.4284586,
    "address": "0"
  },
  {
    "id": "node-778",
    "name": "Rush Savings Supermarket Ltd",
    "categoryId": "t9",
    "lat": -26.3739357,
    "lng": 27.8789397,
    "address": "0"
  },
  {
    "id": "node-779",
    "name": "Getty Liquor & Smoke",
    "categoryId": "t9",
    "lat": -26.2575454,
    "lng": 27.9442307,
    "address": "0"
  },
  {
    "id": "node-780",
    "name": "Freedom Wholesale",
    "categoryId": "t9",
    "lat": -25.9339846,
    "lng": 27.9978825,
    "address": "0"
  },
  {
    "id": "node-781",
    "name": "United Supermarkets",
    "categoryId": "t9",
    "lat": -25.73948488,
    "lng": 28.1786235,
    "address": "0"
  },
  {
    "id": "node-782",
    "name": "Zwothe Supermarket",
    "categoryId": "t9",
    "lat": -25.61464064,
    "lng": 28.00998617,
    "address": "0"
  },
  {
    "id": "node-783",
    "name": "Berry Crush Wholesaler",
    "categoryId": "t9",
    "lat": -25.9159423,
    "lng": 28.091364,
    "address": "0"
  },
  {
    "id": "node-784",
    "name": "Herego Wholesale",
    "categoryId": "t9",
    "lat": -26.6773702,
    "lng": 27.9295903,
    "address": "0"
  },
  {
    "id": "node-785",
    "name": "Bahaji Wholesalers",
    "categoryId": "t9",
    "lat": -26.18257976,
    "lng": 27.7023356,
    "address": "0"
  },
  {
    "id": "node-786",
    "name": "Mozamo Wholesaler",
    "categoryId": "t9",
    "lat": -25.94160284,
    "lng": 28.0118511,
    "address": "0"
  },
  {
    "id": "node-787",
    "name": "Threnetic",
    "categoryId": "t9",
    "lat": -26.47288381,
    "lng": 27.86964181,
    "address": "0"
  },
  {
    "id": "node-788",
    "name": "Testimony Retail And Wholesale",
    "categoryId": "t9",
    "lat": -26.6775745,
    "lng": 27.9302671,
    "address": "0"
  },
  {
    "id": "node-789",
    "name": "Tangani Supermarket",
    "categoryId": "t9",
    "lat": -25.9346639,
    "lng": 28.0145469,
    "address": "0"
  },
  {
    "id": "node-790",
    "name": "Roxanna Supermarket Branch 4",
    "categoryId": "t9",
    "lat": -26.1489125,
    "lng": 28.4229508,
    "address": "0"
  },
  {
    "id": "node-791",
    "name": "Zed Wholesale",
    "categoryId": "t9",
    "lat": -26.1832414,
    "lng": 27.7020144,
    "address": "0"
  },
  {
    "id": "node-792",
    "name": "Sheriff's Take Aways Liquor Store",
    "categoryId": "t9",
    "lat": -26.2594413,
    "lng": 27.949739,
    "address": "0"
  },
  {
    "id": "node-793",
    "name": "Abundula",
    "categoryId": "t9",
    "lat": -25.58495389,
    "lng": 28.06330476,
    "address": "0"
  },
  {
    "id": "node-794",
    "name": "ROOTS ALEX MALL",
    "categoryId": "t9",
    "lat": -26.1051252,
    "lng": 28.1205013,
    "address": "Johannesburg Cnr London Road & Lenin Drive Alex Mall Johanesburg"
  },
  {
    "id": "node-795",
    "name": "DELAREYVILLE FISH & CHIPS 2",
    "categoryId": "t9",
    "lat": -26.6894388,
    "lng": 25.4592173,
    "address": "Westonaria 47 Du Toit Street  Delareyville"
  },
  {
    "id": "node-796",
    "name": "UNIMART MIDDLEBURG T/A SHARPRIE SUPERMARKET",
    "categoryId": "t9",
    "lat": -25.766415,
    "lng": 29.4577922,
    "address": "Johannesburg 25 SADC Street Middleburg"
  },
  {
    "id": "node-797",
    "name": "SWEETMART",
    "categoryId": "t9",
    "lat": -26.2192734,
    "lng": 28.0145634,
    "address": "Johannesburg 1 Genesis Boulevard Crown Mines Johannesburg"
  },
  {
    "id": "node-798",
    "name": "SOMEAST WHOLESALERS",
    "categoryId": "t9",
    "lat": -26.2111801,
    "lng": 28.0250855,
    "address": "Johannesburg 36 Western Boulevard City West Johannesburg"
  },
  {
    "id": "node-799",
    "name": "MAKRO RIVERSANDS DC",
    "categoryId": "t9",
    "lat": -25.9608635,
    "lng": 28.0212704,
    "address": "Johannesburg 37 Century Boulevard DC Riversands Gauteng"
  },
  {
    "id": "node-800",
    "name": "BD Fruiters CC TA Apple Tree Srings",
    "categoryId": "t9",
    "lat": -26.2557512,
    "lng": 28.4183537,
    "address": "Cnr Paul Kruger & South Main Reef Road"
  },
  {
    "id": "node-801",
    "name": "ALRODE SOUTH DISTRIBUTORS",
    "categoryId": "t9",
    "lat": -26.3441672,
    "lng": 28.1278091,
    "address": "Gauteng Cnr Bosworth & Delfos Street Alrode Gauteng"
  },
  {
    "id": "node-802",
    "name": "EMIR SWEETS",
    "categoryId": "t9",
    "lat": -26.2131146,
    "lng": 28.00864,
    "address": "Newton 140 Industrial Road Amalgam"
  },
  {
    "id": "node-803",
    "name": "EMIR TRADING CC",
    "categoryId": "t9",
    "lat": -26.2131146,
    "lng": 28.00864,
    "address": "Newton 140 Industrial Road Amalgam"
  },
  {
    "id": "node-804",
    "name": "ROOTS KEMPTON PARK",
    "categoryId": "t9",
    "lat": -26.1071454,
    "lng": 28.2311823,
    "address": "Johannesburg Shop 13 Central Park Shopping Centre Cnr Central Avenue and Monument Road Kempton Park, Johannesburg"
  },
  {
    "id": "node-805",
    "name": "SUPERSAVE POWERTRADE SPRINGS",
    "categoryId": "t9",
    "lat": -26.2569971,
    "lng": 28.4253051,
    "address": "Nigel Cnr Marconi & Edison Roads New Era Springs"
  },
  {
    "id": "node-806",
    "name": "DLAMINI QUALITY FOODS T/A SOWETO OLD POTCH",
    "categoryId": "t9",
    "lat": -26.2658305,
    "lng": 27.8800567,
    "address": "Soweto 2122 Luvhuvu & Chris Hani Road Ext 5 Soweto"
  },
  {
    "id": "node-807",
    "name": "SOWETO OLD POTCH",
    "categoryId": "t9",
    "lat": -26.2654917,
    "lng": 27.8794829,
    "address": "Soweto 2122 Luvhuvu & Chris Hani Road Dlamini Ext5; Sowet o"
  },
  {
    "id": "node-808",
    "name": "FINIZ INTERNATIONAL CC",
    "categoryId": "t9",
    "lat": -26.3396332,
    "lng": 27.8256332,
    "address": "Alrode MHI Industrial Park; Erf1 Main Lawley Road Anchorv ille"
  },
  {
    "id": "node-809",
    "name": "JUST IMAGINE CONSULTING CC",
    "categoryId": "t9",
    "lat": -26.1461011,
    "lng": 27.997525,
    "address": "Newton 21 Tana Road  Linden"
  },
  {
    "id": "node-810",
    "name": "LIMPOPO C&C",
    "categoryId": "t9",
    "lat": -23.9113471,
    "lng": 29.4421082,
    "address": "Newton 15 Mangaan Street Pietersburg"
  },
  {
    "id": "node-811",
    "name": "NMR IMPORT & EXPORT - DIRECT ACC",
    "categoryId": "t9",
    "lat": -26.3216391,
    "lng": 27.843288,
    "address": "Alrode 101 Nerina Avenue Ext 3 Lenasia"
  },
  {
    "id": "node-812",
    "name": "BRANDCATZ (PTY) LTD T/A BRANDCATZ",
    "categoryId": "t9",
    "lat": -26.0111097,
    "lng": 27.9458181,
    "address": "Johannesburg 9 Helen Road Mostyn Road Kayasands, Jhb"
  },
  {
    "id": "node-813",
    "name": "GOOLAMS TAKE & PAY",
    "categoryId": "t9",
    "lat": -25.7554887,
    "lng": 28.1530454,
    "address": "Tshwane 500 Charlotte Complex Maxeke Street Pta West"
  },
  {
    "id": "node-814",
    "name": "TEST",
    "categoryId": "t9",
    "lat": -26.2165819,
    "lng": 27.9941102,
    "address": "36 mineral crescent"
  },
  {
    "id": "node-815",
    "name": "LITHULI MEDICAL",
    "categoryId": "t9",
    "lat": -25.9820674,
    "lng": 28.15847,
    "address": "Newton 23 Hampton Road Glen Austin Midrand"
  },
  {
    "id": "node-816",
    "name": "KITKAT GROUP CROWN MINES",
    "categoryId": "t9",
    "lat": -26.21477,
    "lng": 28.0170935,
    "address": "Johannesburg 45 Press Avenue Crown Mines Johannesburg"
  },
  {
    "id": "node-817",
    "name": "ROOTS BUYING GROUP (PTY) LTD",
    "categoryId": "t9",
    "lat": -25.9900792,
    "lng": 27.9789739,
    "address": "Johannesburg Plot 235, 108 Runnymead Avenue Chartwell, Lonehill, 2191"
  },
  {
    "id": "node-818",
    "name": "ROOTS CARLETONVILLE MALL",
    "categoryId": "t9",
    "lat": -26.3526602,
    "lng": 27.3584659,
    "address": "Johannesburg Shop 40, Carletonville Mall, Station Road West Rand Merafong City"
  },
  {
    "id": "node-819",
    "name": "HAPPY FAMILY EAST RAND",
    "categoryId": "t9",
    "lat": -26.1792081,
    "lng": 28.264063,
    "address": "Boksburg East Rand Metro Hyper 162 North Rand Road Boksburg"
  },
  {
    "id": "node-820",
    "name": "MAKRO CHLOORKOP DC      M900",
    "categoryId": "t9",
    "lat": -26.0585189,
    "lng": 28.1689577,
    "address": "Kempton Park 5 Brine Avenue Chloorkop Kempton Park"
  },
  {
    "id": "node-821",
    "name": "SUNSHINE PLAZA DC",
    "categoryId": "t9",
    "lat": -26.2001135,
    "lng": 27.9634854,
    "address": "Johannesburg 5 Springbok Road Longdale, Johannesburg Gauteng"
  },
  {
    "id": "node-822",
    "name": "SUNSHINE ELECTRON DC",
    "categoryId": "t9",
    "lat": -26.2001135,
    "lng": 27.9634854,
    "address": "Johannesburg 5 Springbok Road Longdale Johannesburg, Gauteng"
  },
  {
    "id": "node-823",
    "name": "HILAAL CONSULTING (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.2023945,
    "lng": 27.9976953,
    "address": "Johannesburg 35 Winston Road Homestead Park Johannesburg"
  },
  {
    "id": "node-824",
    "name": "SUNSHINE WESTGATE DC",
    "categoryId": "t9",
    "lat": -26.2001135,
    "lng": 27.9634854,
    "address": "Johannesburg 5 Springbok Road Longdale Johannesburg, Gauteng"
  },
  {
    "id": "node-825",
    "name": "KATANA FOODS CC",
    "categoryId": "t9",
    "lat": -26.1579258,
    "lng": 28.1827281,
    "address": "Kempton Park 481 Flower Close Crescent Tunney; Ext 9 Germiston"
  },
  {
    "id": "node-826",
    "name": "ACA CAPITAL (PTY) LTD T/A ACA DISTRIBUTION",
    "categoryId": "t9",
    "lat": -25.9623835,
    "lng": 28.2180697,
    "address": "Johannesburg 14 Tile Crescent Southward Drive, Clayville Gauteng Industrial Park"
  },
  {
    "id": "node-827",
    "name": "ADVANCE WAREHOUSING PTY LTD",
    "categoryId": "t9",
    "lat": -25.7159245,
    "lng": 28.1680286,
    "address": "Arcadia cnr Eskia Mphahlele & Moot Street Hermanstad"
  },
  {
    "id": "node-828",
    "name": "HIKMA MARKETING",
    "categoryId": "t9",
    "lat": -26.2107325,
    "lng": 28.2773969,
    "address": "Boksburg 8 Haggie Road Dunswart Boksburg"
  },
  {
    "id": "node-829",
    "name": "5 Star CC Westonaria",
    "categoryId": "t9",
    "lat": -26.3173305,
    "lng": 27.6504303,
    "address": "29 Allen Street"
  },
  {
    "id": "node-830",
    "name": "BLADE RAYS TRADING P/LTD",
    "categoryId": "t9",
    "lat": -26.2188305,
    "lng": 28.2897011,
    "address": "Boksburg Unit 91A Vandyk Secure Business Park cnr Van Dyk &  Brakpan Roads"
  },
  {
    "id": "node-831",
    "name": "TRADEPORT DC AFRICA BOKSBURG",
    "categoryId": "t9",
    "lat": -26.1788458,
    "lng": 28.2621139,
    "address": "Boksburg 265 North Rand Road  Boksburg"
  },
  {
    "id": "node-832",
    "name": "KADAM WHOLESALERS",
    "categoryId": "t9",
    "lat": -26.2284489,
    "lng": 28.0808257,
    "address": "Johannesburg Hall 9 907A Jhb Fresh produce Market City Deep"
  },
  {
    "id": "node-833",
    "name": "CLUMZEE CLOWNZ",
    "categoryId": "t9",
    "lat": -26.2490121,
    "lng": 28.0269025,
    "address": "Johannesburg 134 Side Road West Turffontein Johannesburg South"
  },
  {
    "id": "node-834",
    "name": "BEBS SERVICES (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.0908471,
    "lng": 27.7994787,
    "address": "Johannesburg 15 Chateau De Vie-Van Oordt Noordheuwel Krugersdorp, 1793"
  },
  {
    "id": "node-835",
    "name": "GREEN COFFEE             COD",
    "categoryId": "t9",
    "lat": -26.2188305,
    "lng": 28.2897011,
    "address": "Boksburg Unit 22 Van Dyk Secure B/Prk Cnr Van Dyk & Brakpan  Roads Boksburg"
  },
  {
    "id": "node-836",
    "name": "KARA COFFEE PTY LTD",
    "categoryId": "t9",
    "lat": -26.2188305,
    "lng": 28.2897011,
    "address": "Boksburg Unit 22 Van Dyk Secure B/Prk Cnr Van Dyk & Brakpan  Roads Boksburg"
  },
  {
    "id": "node-837",
    "name": "SAANIA DISTRIBUTORS",
    "categoryId": "t9",
    "lat": -25.8323398,
    "lng": 28.2479824,
    "address": "Newton 17 Noriet Street Amalgam Crown Mines, Jhb"
  },
  {
    "id": "node-838",
    "name": "MANTELLA TRADING 220CC",
    "categoryId": "t9",
    "lat": -25.7695683,
    "lng": 28.1196955,
    "address": "Pretoria 292 Research Road Pretoria West Industrial Sites"
  },
  {
    "id": "node-839",
    "name": "MANTELLA TRADING 220CC (HUB)",
    "categoryId": "t9",
    "lat": -25.7695983,
    "lng": 28.1192761,
    "address": "Pretoria 292 Research Road Pretoria West Industrial Sites"
  },
  {
    "id": "node-840",
    "name": "CHOPPIES S/MARKET SA (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.2097353,
    "lng": 28.0950141,
    "address": "Johannesburg 65 Mimetes Road Denver Johannesburg"
  },
  {
    "id": "node-841",
    "name": "XPECTRADE AFRICA (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.1346512,
    "lng": 28.071145,
    "address": "Johannesburg 8A Scott Street Waverley Johannesburg"
  },
  {
    "id": "node-842",
    "name": "L KOM POWERTRADE WHOLESALERS",
    "categoryId": "t9",
    "lat": -26.660049,
    "lng": 27.925766,
    "address": "Alrode 24 Telford Street Duncanville Vereeniging"
  },
  {
    "id": "node-843",
    "name": "ICC BUYING GROUP (PTY) LTD",
    "categoryId": "t9",
    "lat": -25.9650926,
    "lng": 28.2226199,
    "address": "Johannesburg Clayville Mini UGautemgnits, No 2 16B Axle Drive, Clayville Ext11, Olifantsfontein Gauteng"
  },
  {
    "id": "node-844",
    "name": "A5 HAMMARSDALE",
    "categoryId": "t9",
    "lat": -29.8017037,
    "lng": 30.628546,
    "address": "Pieter Shop A73 Hammarsdale Junct Mall; cnr Kunene Rd & M R385 Hammarsdale; Mpumalanga T/S"
  },
  {
    "id": "node-845",
    "name": "ALIAYSHA TRADING",
    "categoryId": "t9",
    "lat": -26.2059373,
    "lng": 28.019912,
    "address": "Newton 30 Crown Road Fordsburg Johannesburg"
  },
  {
    "id": "node-846",
    "name": "ALIAYSHA TRADING (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.2173678,
    "lng": 28.00563,
    "address": "Newton Enco Park 73 Planet Avenue Crown Mines"
  },
  {
    "id": "node-847",
    "name": "NP DE BARROS T/A",
    "categoryId": "t9",
    "lat": -26.689703,
    "lng": 25.4571311,
    "address": "Westonaria 23 General De La Rey Street  Delareyville"
  },
  {
    "id": "node-848",
    "name": "SMUDZ DISTRI & LOGISTICS",
    "categoryId": "t9",
    "lat": -26.3263549,
    "lng": 27.8279503,
    "address": "Alrode 42 Chrysanthemum Street Unit 6 Ext 6 Lenasia"
  },
  {
    "id": "node-849",
    "name": "SMUDZ DISTRIBUT & LOGISTICS",
    "categoryId": "t9",
    "lat": -26.3263549,
    "lng": 27.8279503,
    "address": "Alrode 42 Chrysanthemum Street Unit 6 Ext 6 Lenasia"
  },
  {
    "id": "node-850",
    "name": "AZMA 786 (PTY) LTD  T/A",
    "categoryId": "t9",
    "lat": -26.2490121,
    "lng": 28.0269025,
    "address": "Johannesburg 134 Side Road West Turffontein Johannesburg South"
  },
  {
    "id": "node-851",
    "name": "GHILLINO (PTY) LTD",
    "categoryId": "t9",
    "lat": -26.006053,
    "lng": 27.9365373,
    "address": "Kya Sands 28 Malta Road Cosmo Business Park Kya Sands"
  },
  {
    "id": "node-852",
    "name": "ASHEN AND AJOODA DISTRIBUTOR",
    "categoryId": "t9",
    "lat": -26.3639024,
    "lng": 27.9465413,
    "address": "Walkerville 30 Grassmere Road Walkerville"
  },
  {
    "id": "node-853",
    "name": "MEDIHERB DISTRIBUTOR",
    "categoryId": "t9",
    "lat": -25.8016117,
    "lng": 28.3238015,
    "address": "Pretoria Unit 34 50 Eros Street Faerie Glen Pretoria, Gauteng"
  },
  {
    "id": "node-854",
    "name": "Aca Export (Pty) Ltd",
    "categoryId": "t9",
    "lat": -25.9623003,
    "lng": 28.218126,
    "address": "14 Tile Crescent"
  },
  {
    "id": "node-855",
    "name": "French Rose Properties (Pty) Ltd - Dlamini Warehouse",
    "categoryId": "t9",
    "lat": -26.2548384,
    "lng": 27.9800248,
    "address": "57 Guy Gisbon Avenue"
  },
  {
    "id": "node-856",
    "name": "Top Star Supermarket",
    "categoryId": "t9",
    "lat": -26.67688961,
    "lng": 27.92703491,
    "address": "0"
  },
  {
    "id": "node-857",
    "name": "SMS tuck shop",
    "categoryId": "t9",
    "lat": -26.09099388,
    "lng": 28.1055332,
    "address": "0"
  },
  {
    "id": "node-858",
    "name": "UK Supermarket",
    "categoryId": "t9",
    "lat": -26.2044544,
    "lng": 28.063187,
    "address": "0"
  },
  {
    "id": "node-859",
    "name": "CHIPILE SUPERMARKET",
    "categoryId": "t9",
    "lat": -25.407887,
    "lng": 28.1377213,
    "address": "0"
  },
  {
    "id": "node-860",
    "name": "Blf Discount Supermarket",
    "categoryId": "t9",
    "lat": -26.1954686,
    "lng": 28.0695029,
    "address": "0"
  },
  {
    "id": "node-861",
    "name": "Khawuleza Supermarket",
    "categoryId": "t9",
    "lat": -26.3436512,
    "lng": 28.3970626,
    "address": "0"
  },
  {
    "id": "node-862",
    "name": "NDICHE TUCK SHOP",
    "categoryId": "t9",
    "lat": -26.25898129,
    "lng": 27.93984884,
    "address": "0"
  },
  {
    "id": "node-863",
    "name": "hallelujah tuck shop",
    "categoryId": "t9",
    "lat": -25.7161799,
    "lng": 28.38539191,
    "address": "0"
  },
  {
    "id": "node-864",
    "name": "Brothers Supermarket",
    "categoryId": "t9",
    "lat": -26.1937988,
    "lng": 27.9979286,
    "address": "0"
  },
  {
    "id": "node-865",
    "name": "Nada Convenience Store",
    "categoryId": "t9",
    "lat": -25.78778951,
    "lng": 28.1049163,
    "address": "0"
  },
  {
    "id": "node-866",
    "name": "David Supermarket",
    "categoryId": "t9",
    "lat": -26.1370086,
    "lng": 27.8519053,
    "address": "0"
  },
  {
    "id": "node-867",
    "name": "Second 2 None",
    "categoryId": "t9",
    "lat": -26.0328704,
    "lng": 28.1736019,
    "address": "0"
  },
  {
    "id": "node-868",
    "name": "Ahmed's Foodzone",
    "categoryId": "t9",
    "lat": -26.53639968,
    "lng": 27.83809458,
    "address": "0"
  },
  {
    "id": "node-869",
    "name": "Bless Supermarket",
    "categoryId": "t9",
    "lat": -25.9354409,
    "lng": 28.014533,
    "address": "0"
  },
  {
    "id": "node-870",
    "name": "Pick n Pay Family Cradlestone Mall",
    "categoryId": "t9",
    "lat": -26.2051426,
    "lng": 28.0141745,
    "address": "0"
  },
  {
    "id": "node-871",
    "name": "Kamrul Supar Market",
    "categoryId": "t9",
    "lat": -25.9333119,
    "lng": 28.0148614,
    "address": "0"
  },
  {
    "id": "node-872",
    "name": "East Rand Traders Square",
    "categoryId": "t9",
    "lat": -26.030972,
    "lng": 27.9288889,
    "address": "0"
  },
  {
    "id": "node-873",
    "name": "Batho Pele General Dealer",
    "categoryId": "t9",
    "lat": -26.200003,
    "lng": 27.7433648,
    "address": "0"
  },
  {
    "id": "node-874",
    "name": "Freddie's Inn",
    "categoryId": "t9",
    "lat": -26.1583901,
    "lng": 28.4194336,
    "address": "0"
  },
  {
    "id": "node-875",
    "name": "Robot Superstore",
    "categoryId": "t9",
    "lat": -25.7867008,
    "lng": 28.048772,
    "address": "0"
  },
  {
    "id": "node-876",
    "name": "Tshabalala Bottle Store",
    "categoryId": "t9",
    "lat": -26.5508583,
    "lng": 28.3305633,
    "address": "0"
  },
  {
    "id": "node-877",
    "name": "Madiba Supermarket.",
    "categoryId": "t9",
    "lat": -25.5847914,
    "lng": 28.0425608,
    "address": "0"
  },
  {
    "id": "node-878",
    "name": "The General Store",
    "categoryId": "t9",
    "lat": -26.6774121,
    "lng": 27.9293464,
    "address": "0"
  },
  {
    "id": "node-879",
    "name": "Xiangyuan Supermarket æ¹˜ç¼˜è¶…å¸‚",
    "categoryId": "t9",
    "lat": -25.40914204,
    "lng": 28.2805317,
    "address": "0"
  },
  {
    "id": "node-880",
    "name": "None",
    "categoryId": "t9",
    "lat": -25.6234058,
    "lng": 28.0964023,
    "address": "0"
  },
  {
    "id": "node-881",
    "name": "SA Supermarket",
    "categoryId": "t9",
    "lat": -25.6615516,
    "lng": 28.7301411,
    "address": "0"
  },
  {
    "id": "node-882",
    "name": "N T K",
    "categoryId": "t9",
    "lat": -25.6380842,
    "lng": 28.5319417,
    "address": "0"
  },
  {
    "id": "node-883",
    "name": "Rise & Shine Supermarket",
    "categoryId": "t9",
    "lat": -26.2477717,
    "lng": 28.052414,
    "address": "0"
  },
  {
    "id": "node-884",
    "name": "Al Hilal F.C. Store",
    "categoryId": "t9",
    "lat": -26.2045583,
    "lng": 28.0139563,
    "address": "0"
  },
  {
    "id": "node-885",
    "name": "Haji Abdul Rahim Trading LLC - Office and Warehouse",
    "categoryId": "t9",
    "lat": -26.188088,
    "lng": 28.0550263,
    "address": "0"
  },
  {
    "id": "node-886",
    "name": "Sibi Super Market",
    "categoryId": "t9",
    "lat": -25.93232049,
    "lng": 27.99922431,
    "address": "0"
  },
  {
    "id": "node-887",
    "name": "Al-Rahim Trading Co. (Pvt.) Limited",
    "categoryId": "t9",
    "lat": -25.9309789,
    "lng": 28.004305,
    "address": "0"
  },
  {
    "id": "node-888",
    "name": "Pan Deluxe Scandinavian Bakery",
    "categoryId": "t9",
    "lat": -25.7883357,
    "lng": 28.10408307,
    "address": "0"
  },
  {
    "id": "node-889",
    "name": "Maharaj Westside Supermarket",
    "categoryId": "t9",
    "lat": -26.2053331,
    "lng": 28.0148429,
    "address": "0"
  },
  {
    "id": "node-890",
    "name": "Jayam Supermarket",
    "categoryId": "t9",
    "lat": -26.2026534,
    "lng": 28.1026015,
    "address": "0"
  },
  {
    "id": "node-891",
    "name": "Gold City Supermarket",
    "categoryId": "t9",
    "lat": -26.1941627,
    "lng": 28.0372734,
    "address": "0"
  },
  {
    "id": "node-892",
    "name": "Metropolis Big John Super Str",
    "categoryId": "t9",
    "lat": -25.92478496,
    "lng": 28.0101569,
    "address": "0"
  },
  {
    "id": "node-893",
    "name": "Makro Centurion",
    "categoryId": "t10",
    "lat": -25.8661212,
    "lng": 28.1980696,
    "address": "2 Bloukrans Rd, Highveld, Centurion, 0157, South Africa"
  },
  {
    "id": "node-894",
    "name": "Makro Germiston",
    "categoryId": "t10",
    "lat": -26.1521979,
    "lng": 28.171689,
    "address": "16 Herman St, Meadowdale, Germiston, 1614, South Africa"
  },
  {
    "id": "node-895",
    "name": "Carreira's Fruit And Veg Market",
    "categoryId": "t10",
    "lat": -26.0991055,
    "lng": 27.9927584,
    "address": "252 Pine Ave, Ferndale, Randburg, 2194, South Africa"
  },
  {
    "id": "node-896",
    "name": "Joburg Market",
    "categoryId": "t10",
    "lat": -26.2297819,
    "lng": 28.0799588,
    "address": "4 Fortune St, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-897",
    "name": "Pick n Pay Family Protea Boulevard",
    "categoryId": "t10",
    "lat": -26.27567,
    "lng": 27.81195,
    "address": "Randfontein Road, Protea Glen, Soweto, 1819, South Africa"
  },
  {
    "id": "node-898",
    "name": "Pick n Pay Northlands Corner",
    "categoryId": "t10",
    "lat": -26.039992,
    "lng": 27.9567977,
    "address": "Cnr, NewMarket Rd, Hoogland, Randburg, 2194, South Africa"
  },
  {
    "id": "node-899",
    "name": "Trig Distributors C C",
    "categoryId": "t10",
    "lat": -26.0755137,
    "lng": 28.1896901,
    "address": "10 Vaseur Rd, Chloorkop, Edenvale, 1624, South Africa"
  },
  {
    "id": "node-900",
    "name": "SPAR Orchards",
    "categoryId": "t10",
    "lat": -25.6434208,
    "lng": 28.1021547,
    "address": "Garden Rd Orchards Shopping Centre, The Orchards, Akasia, 0182, South Africa"
  },
  {
    "id": "node-901",
    "name": "Ultra Liquors - Corlett",
    "categoryId": "t10",
    "lat": -26.1262206,
    "lng": 28.0843256,
    "address": "220/228 Louis Botha Ave &, Corlett Dr, Bramley, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-902",
    "name": "Honeydew Market Gardens",
    "categoryId": "t10",
    "lat": -26.073953,
    "lng": 27.9318658,
    "address": "Honeydew Eco Village, 281 Honeydew Rd W, Northriding, Johannesburg, 2040, South Africa"
  },
  {
    "id": "node-903",
    "name": "Monument Liquor Warehouse",
    "categoryId": "t10",
    "lat": -26.111662,
    "lng": 27.80475,
    "address": "Voortrekker Rd, Monument, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-904",
    "name": "Food Town Hyper Savemoor",
    "categoryId": "t10",
    "lat": -26.28427,
    "lng": 28.38669,
    "address": "31 12th Rd, Maryvlei, Brakpan, 1554, South Africa"
  },
  {
    "id": "node-905",
    "name": "Pick n Pay Phillip Nel Park",
    "categoryId": "t10",
    "lat": -25.7419528,
    "lng": 28.1369323,
    "address": "776 Sytze Wierda Ave, Philip Nel Park, Pretoria, 0029, South Africa"
  },
  {
    "id": "node-906",
    "name": "Cambridge Food Vosloorus",
    "categoryId": "t10",
    "lat": -26.343597,
    "lng": 28.206299,
    "address": "Bierman Rd & Mc Botha Dr, Vosloorus, 1475, South Africa"
  },
  {
    "id": "node-907",
    "name": "PC International: Computers, Laptops & Accessories",
    "categoryId": "t10",
    "lat": -26.0823596,
    "lng": 28.0092152,
    "address": "200 Bram Fischer Dr, Kensington B, Randburg, 2194, South Africa"
  },
  {
    "id": "node-908",
    "name": "Kokoro Rivonia Gardens",
    "categoryId": "t10",
    "lat": -26.0658304,
    "lng": 28.0619069,
    "address": "Cnr Rivonia Road &, North Rd, Rivonia, Sandton, 2128, South Africa"
  },
  {
    "id": "node-909",
    "name": "Big Save Mabopane",
    "categoryId": "t10",
    "lat": -25.507675,
    "lng": 28.082795,
    "address": "Plot 174, Block N Industrial Rd, Mabopane Unit N, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-910",
    "name": "Hyperland Devland",
    "categoryId": "t10",
    "lat": -26.2800527,
    "lng": 27.9336937,
    "address": "East Street &, Golden Hwy, Devland, Soweto, 1811, South Africa"
  },
  {
    "id": "node-911",
    "name": "Mac's Wholesalers",
    "categoryId": "t10",
    "lat": -26.2174723,
    "lng": 28.0072812,
    "address": "Ext. 7, 81 Planet Ave, Crown, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-912",
    "name": "Game",
    "categoryId": "t10",
    "lat": -25.8573983,
    "lng": 28.1855771,
    "address": "Shop 333, Heuwel Rd, Centurion Central, Centurion, 0157, South Africa"
  },
  {
    "id": "node-913",
    "name": "Salvage Mart",
    "categoryId": "t10",
    "lat": -25.674046,
    "lng": 28.174341,
    "address": "284 Ben Viljoen St, Pretoria North, Pretoria, 0116, South Africa"
  },
  {
    "id": "node-914",
    "name": "The Fruit, Flower & Nut Market",
    "categoryId": "t10",
    "lat": -26.1140946,
    "lng": 28.0130279,
    "address": "2 Fir Cnr, Blairgowrie, Johannesburg, 2194, South Africa"
  },
  {
    "id": "node-915",
    "name": "Express Power Save",
    "categoryId": "t10",
    "lat": -26.0922059,
    "lng": 28.005661,
    "address": "171 Bram Fischer Dr, Ferndale, Randburg, 2194, South Africa"
  },
  {
    "id": "node-916",
    "name": "Big Save Hammanskraal",
    "categoryId": "t10",
    "lat": -25.4109106,
    "lng": 28.2808581,
    "address": "Kudebe Ext, 4, 4449 Kudebe Douglas Rens Rd, Hammanskraal, Pretoria, 0400, South Africa"
  },
  {
    "id": "node-917",
    "name": "Best Before Woodmead",
    "categoryId": "t10",
    "lat": -26.057419,
    "lng": 28.0897627,
    "address": "Dunwoody Shopping Centre, 147 Western Service Rd, Woodmead, Sandton, 2191, South Africa"
  },
  {
    "id": "node-918",
    "name": "Geldhof Chocolates Factory Shop",
    "categoryId": "t10",
    "lat": -26.0825845,
    "lng": 27.9748208,
    "address": "Unit No. C 1, Mikro Industrial Park, 19 Hammer Ave, Strydompark, Randburg, 2169, South Africa"
  },
  {
    "id": "node-919",
    "name": "Palace Blue Basket Supermarket",
    "categoryId": "t10",
    "lat": -26.1203257,
    "lng": 27.810171,
    "address": "205 Main Reef Rd, Lewisham, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-920",
    "name": "Samca Tiles (Pty) Ltd",
    "categoryId": "t10",
    "lat": -25.3449182,
    "lng": 28.2774654,
    "address": "Stand 70, 71 9th St, Babelegi, Hammanskraal, 0400, South Africa"
  },
  {
    "id": "node-921",
    "name": "SA Baking Supplies",
    "categoryId": "t10",
    "lat": -25.8210962,
    "lng": 28.2003546,
    "address": "Cnr Cradock and Warren str, Lyttelton Manor, Lyttelton, 0083, South Africa"
  },
  {
    "id": "node-922",
    "name": "Bakers Bin Garsfontein",
    "categoryId": "t10",
    "lat": -25.7948011,
    "lng": 28.3011427,
    "address": "566 Serene St, Garsfontein, Pretoria, 0042, South Africa"
  },
  {
    "id": "node-923",
    "name": "Perfect Dealz",
    "categoryId": "t10",
    "lat": -26.1003588,
    "lng": 28.0812724,
    "address": "77 5th St, Wynberg, Sandton, 2090, South Africa"
  },
  {
    "id": "node-924",
    "name": "Big Save Waltloo",
    "categoryId": "t10",
    "lat": -25.7200815,
    "lng": 28.3313184,
    "address": "349 Zasm St, Waltloo, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-925",
    "name": "Usave Etwatwa",
    "categoryId": "t10",
    "lat": -26.12964,
    "lng": 28.47936,
    "address": "2 Cothisasa St, Daveyton, Benoni, 1519, South Africa"
  },
  {
    "id": "node-926",
    "name": "Pick n Pay Market Protea",
    "categoryId": "t10",
    "lat": -26.2703735,
    "lng": 27.775348,
    "address": "Corner Main Rd (R559) and, George Saches St, Protea Glen Extension 28, Soweto, 1862, South Africa"
  },
  {
    "id": "node-927",
    "name": "Italian Cheese Distributors",
    "categoryId": "t10",
    "lat": -26.2935839,
    "lng": 28.0609582,
    "address": "67 Hythe Ave, Mulbarton, Johannesburg South, 2059, South Africa"
  },
  {
    "id": "node-928",
    "name": "The Spice Co.",
    "categoryId": "t10",
    "lat": -26.0990265,
    "lng": 27.9928549,
    "address": "252 Pine Ave, Ferndale, Randburg, 2194, South Africa"
  },
  {
    "id": "node-929",
    "name": "ABC SWEETS - PRETORIA CENTRAL",
    "categoryId": "t10",
    "lat": -25.7423609,
    "lng": 28.1978253,
    "address": "84 Du Toit St, Arcadia, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-930",
    "name": "Ponta Do Sol Fruit Market",
    "categoryId": "t10",
    "lat": -26.0978962,
    "lng": 27.7456468,
    "address": "76 Rustenburg Rd, Krugersdorp West, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-931",
    "name": "E. Akhalwaya & Sons",
    "categoryId": "t10",
    "lat": -26.2082233,
    "lng": 28.0212316,
    "address": "13 Central Rd, Fordsburg, Johannesburg, 2033, South Africa"
  },
  {
    "id": "node-932",
    "name": "Dawood Megastore Crown Mines",
    "categoryId": "t10",
    "lat": -26.2116524,
    "lng": 28.0056887,
    "address": "26 Basalt Ave, Amalgam, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-933",
    "name": "Sweet Home",
    "categoryId": "t10",
    "lat": -26.2061033,
    "lng": 28.0232883,
    "address": "30 High Rd, Fordsburg, Johannesburg, 2033, South Africa"
  },
  {
    "id": "node-934",
    "name": "Best Before Fourways",
    "categoryId": "t10",
    "lat": -26.0247074,
    "lng": 27.9891291,
    "address": "Nerine St, Witkoppen, Sandton, 2068, South Africa"
  },
  {
    "id": "node-935",
    "name": "Sweet Street",
    "categoryId": "t10",
    "lat": -26.1820669,
    "lng": 27.7023794,
    "address": "Sutherland Ave, Randfontein, Johannesburg, 1760, South Africa"
  },
  {
    "id": "node-936",
    "name": "AGT Foods",
    "categoryId": "t10",
    "lat": -26.1613152,
    "lng": 27.8013177,
    "address": "8 Jacobs St, Chamdor, Krugersdorp, 1754, South Africa"
  },
  {
    "id": "node-937",
    "name": "Bazaruto Seafoods Groenkloof",
    "categoryId": "t10",
    "lat": -25.772286,
    "lng": 28.215989,
    "address": "Shop 7, Groenkloof Shop Ctr, 51 George Storrar Dr, Groenkloof, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-938",
    "name": "Frontline Hyper Vanderbijlpark",
    "categoryId": "t10",
    "lat": -26.6970332,
    "lng": 27.8875714,
    "address": "16 Playfair Blvd, Powerville, Vereeniging, 1900, South Africa"
  },
  {
    "id": "node-939",
    "name": "Johannesburg Fresh Produce Delivery",
    "categoryId": "t10",
    "lat": -26.2322769,
    "lng": 28.0746283,
    "address": "City Deep, Johannesburg South, 2049, South Africa"
  },
  {
    "id": "node-940",
    "name": "JUMBO Crown Mines",
    "categoryId": "t10",
    "lat": -26.2163906,
    "lng": 28.010958,
    "address": "Crownwood Rd, Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-941",
    "name": "Abu Yusuf Dates Market",
    "categoryId": "t10",
    "lat": -26.2052661,
    "lng": 28.0203972,
    "address": "198 Albertina Sisulu Rd, Fordsburg, Johannesburg, 2033, South Africa"
  },
  {
    "id": "node-942",
    "name": "Madibi Foods",
    "categoryId": "t10",
    "lat": -26.0833776,
    "lng": 27.9750455,
    "address": "Unit D7, Strydom Industrial Park, 12 Hammer Ave, Strydompark, Randburg, 2619, South Africa"
  },
  {
    "id": "node-943",
    "name": "Dreamcelsius Group South Africa",
    "categoryId": "t10",
    "lat": -26.1963431,
    "lng": 28.0504834,
    "address": "30-38 Claim St, Doornfontein, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-944",
    "name": "Akhalwaya Spice World",
    "categoryId": "t10",
    "lat": -26.2056851,
    "lng": 28.0174292,
    "address": "44 Hanover St, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-945",
    "name": "Seawork Seafood",
    "categoryId": "t10",
    "lat": -25.7765335,
    "lng": 28.3523996,
    "address": "12 Bendeman Blvd, Six Fountains Residential Estate, 0081, South Africa"
  },
  {
    "id": "node-946",
    "name": "Samore eggs",
    "categoryId": "t10",
    "lat": -25.8989445,
    "lng": 28.0673543,
    "address": "Koppie St, Knoppieslaagte, Centurion, 0157, South Africa"
  },
  {
    "id": "node-947",
    "name": "Patel Wholesalers",
    "categoryId": "t10",
    "lat": -25.7375787,
    "lng": 28.1760711,
    "address": "7th Ave, Marabastad, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-948",
    "name": "Price Rite butchery Hillbrow",
    "categoryId": "t10",
    "lat": -26.1888643,
    "lng": 28.0505162,
    "address": "60 Pretoria St, Hillbrow, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-949",
    "name": "Fourways Flower Market",
    "categoryId": "t10",
    "lat": -26.0220598,
    "lng": 28.0149654,
    "address": "Corner of Witkoppen and, Pineslopes Shopping Center, The Straight Ave, Fourways, Sandton, 2062, South Africa"
  },
  {
    "id": "node-950",
    "name": "Mimosa Sweets",
    "categoryId": "t10",
    "lat": -26.6822807,
    "lng": 27.9314611,
    "address": "3 Smuts Ave, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-951",
    "name": "Frontline Hyper",
    "categoryId": "t10",
    "lat": -25.7410442,
    "lng": 28.1866734,
    "address": "181 Bloed St, Pretoria Central, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-952",
    "name": "Airlaid Napkins | Napking JHB",
    "categoryId": "t10",
    "lat": -25.9916321,
    "lng": 28.0740343,
    "address": "Kyalami Business Park, 10 Indianapolis St, Khayalami Park, Midrand, 1684, South Africa"
  },
  {
    "id": "node-953",
    "name": "Reliable Indian Groceries & Spices",
    "categoryId": "t10",
    "lat": -26.2050946,
    "lng": 28.0182967,
    "address": "1805 Albertina Sisulu Rd, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-954",
    "name": "Diplomat Distributors",
    "categoryId": "t10",
    "lat": -26.1564881,
    "lng": 28.1686525,
    "address": "8 Corobrik St, Meadowdale, Germiston, 1401, South Africa"
  },
  {
    "id": "node-955",
    "name": "Waterkloof flower and mini market",
    "categoryId": "t10",
    "lat": -25.777262,
    "lng": 28.246413,
    "address": "378 Milner St, Waterkloof, Pretoria, 0181, South Africa"
  },
  {
    "id": "node-956",
    "name": "Vereeniging fresh produce",
    "categoryId": "t10",
    "lat": -26.6647033,
    "lng": 27.8998069,
    "address": "Vereeniging, 1930, South Africa"
  },
  {
    "id": "node-957",
    "name": "Shield Chemicals",
    "categoryId": "t10",
    "lat": -26.208502,
    "lng": 28.333242,
    "address": "London Street &, Antwerp St, Apex, Benoni, 1540, South Africa"
  },
  {
    "id": "node-958",
    "name": "Sunbright Goods",
    "categoryId": "t10",
    "lat": -26.1022477,
    "lng": 27.7418299,
    "address": "7 Reseda St, Boltonia, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-959",
    "name": "Cremalat Cheese PRETORIA",
    "categoryId": "t10",
    "lat": -25.7722806,
    "lng": 28.2162522,
    "address": "Shopping Center, 51 George Storrar Dr, Groenkloof, Pretoria, 0027, South Africa"
  },
  {
    "id": "node-960",
    "name": "TURKISH MARKET",
    "categoryId": "t10",
    "lat": -26.0099889,
    "lng": 28.1269318,
    "address": "68 Richards Dr, Halfway House, Midrand, 1685, South Africa"
  },
  {
    "id": "node-961",
    "name": "NCP Chlorchem (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.0684818,
    "lng": 28.184193,
    "address": "3 Norwalk Rd, Chloorkop, Edenvale, 1622, South Africa"
  },
  {
    "id": "node-962",
    "name": "Freshlinq Vaal - Fresh Produce Market",
    "categoryId": "t10",
    "lat": -26.7063388,
    "lng": 27.8519477,
    "address": "Corner Edison Blvd and, Muir St, Vanderbijlpark C. E. 6, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-963",
    "name": "TOSH Detergents",
    "categoryId": "t10",
    "lat": -25.8459686,
    "lng": 28.1031001,
    "address": "West Hills Business Estate 15 Cloud street Mooiplaats 355-JR, Sunderlandrif, Pretoria, 0157, South Africa"
  },
  {
    "id": "node-964",
    "name": "Nalsons Super Savers (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.2055612,
    "lng": 28.0228605,
    "address": "42 Lilian Rd, Fordsburg, Johannesburg, 2033, South Africa"
  },
  {
    "id": "node-965",
    "name": "RCL Foods Consumer Beverages",
    "categoryId": "t10",
    "lat": -25.7674035,
    "lng": 28.1249,
    "address": "257 Edison Rd, Pretoria Industrial, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-966",
    "name": "Egad Madiba Store (Pty)Ltd",
    "categoryId": "t10",
    "lat": -26.1113448,
    "lng": 28.0854896,
    "address": "690 Pretoria Main Rd, Wynberg, Sandton, 2090, South Africa"
  },
  {
    "id": "node-967",
    "name": "Coca-Cola Beverages South Africa",
    "categoryId": "t10",
    "lat": -26.077094,
    "lng": 28.1159314,
    "address": "Linbro Business Park, 5 Milkyway Ave, Frankenwald, Johannesburg, 2065, South Africa"
  },
  {
    "id": "node-968",
    "name": "LANDGANO",
    "categoryId": "t10",
    "lat": -26.1845044,
    "lng": 27.7026014,
    "address": "9 Village St, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-969",
    "name": "Twistville Investments",
    "categoryId": "t10",
    "lat": -26.2166805,
    "lng": 27.9996032,
    "address": "9 Lepus Rd, Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-970",
    "name": "Fruit, Veg and Flower Market Bryanston",
    "categoryId": "t10",
    "lat": -26.0739042,
    "lng": 28.0124136,
    "address": "Cramerview Village Centre, 277 Main Rd, Bryanston, Sandton, 2191, South Africa"
  },
  {
    "id": "node-971",
    "name": "LM Cafe",
    "categoryId": "t10",
    "lat": -26.4176983,
    "lng": 28.4696129,
    "address": "26, 32 2nd Ave, Nigel, 1490, South Africa"
  },
  {
    "id": "node-972",
    "name": "Fresh produce wholesaler",
    "categoryId": "t10",
    "lat": -26.0038704,
    "lng": 28.07471,
    "address": "52 Forssman Cl, Barbeque Downs, Johannesburg, 1685, South Africa"
  },
  {
    "id": "node-973",
    "name": "FMC Logistics",
    "categoryId": "t10",
    "lat": -26.1348237,
    "lng": 28.2160138,
    "address": "16 Industrie St, Isando, Kempton Park, 1600, South Africa"
  },
  {
    "id": "node-974",
    "name": "Saania Distributors.",
    "categoryId": "t10",
    "lat": -26.2096105,
    "lng": 28.0058165,
    "address": "17 Noriet Rd, Amalgam, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-975",
    "name": "Awesome Distributors",
    "categoryId": "t10",
    "lat": -26.2006741,
    "lng": 27.6907769,
    "address": "4 Toyota St, Aureus, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-976",
    "name": "Crazy Groceries",
    "categoryId": "t10",
    "lat": -26.0775241,
    "lng": 27.9764593,
    "address": "Shop No. 718, Phoenix Centre, Malibongwe Dr, Strydompark, Johannesburg, 2160, South Africa"
  },
  {
    "id": "node-977",
    "name": "Pomona Juice Traders",
    "categoryId": "t10",
    "lat": -26.0919931,
    "lng": 28.2703395,
    "address": "69 Pomona Rd, Pomona AH, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-978",
    "name": "Ismail Cassim & Sons",
    "categoryId": "t10",
    "lat": -26.2159048,
    "lng": 27.998627,
    "address": "Ismail Cassim & Sons, Corner Dorado Ave, Amalgam, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-979",
    "name": "Germiston Foods C C",
    "categoryId": "t10",
    "lat": -26.2127994,
    "lng": 28.1659828,
    "address": "Corner Second Avenue and, Garden Street, Georgetown, Germiston, 1401, South Africa"
  },
  {
    "id": "node-980",
    "name": "Devland Distribution Centre",
    "categoryId": "t10",
    "lat": -26.2827939,
    "lng": 27.9279088,
    "address": "4 Pallet Cres, Devland, Soweto, 1811, South Africa"
  },
  {
    "id": "node-981",
    "name": "KGG EGGS WHOLESALE&RETAILS",
    "categoryId": "t10",
    "lat": -26.20474,
    "lng": 28.01394,
    "address": "59 Bird St, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-982",
    "name": "Boss Exports",
    "categoryId": "t10",
    "lat": -26.2169991,
    "lng": 28.0140914,
    "address": "28 Press Ave, Crown Mines, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-983",
    "name": "Metro Crown Mines Salahadin wholesaler and Retailer",
    "categoryId": "t10",
    "lat": -26.2184908,
    "lng": 28.0127101,
    "address": "83 Genesis Blvd, Crown City, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-984",
    "name": "Elandsfontein VleisMark",
    "categoryId": "t10",
    "lat": -26.5103466,
    "lng": 28.3589797,
    "address": "2 Albert St, Heidelberg, Heidelberg - GP, 1441, South Africa"
  },
  {
    "id": "node-985",
    "name": "Jumbo Brands Factory Shop",
    "categoryId": "t10",
    "lat": -25.9600942,
    "lng": 28.2534526,
    "address": "13 Purlin Street North, 21 Industrial Estate, Olifantsfontein, 1666, South Africa"
  },
  {
    "id": "node-986",
    "name": "The Brand & Beverage Company",
    "categoryId": "t10",
    "lat": -26.154071,
    "lng": 28.179379,
    "address": "Erf 291 Albert Amon Road, Meadowdale, Johannesburg, 1614, South Africa"
  },
  {
    "id": "node-987",
    "name": "Yummy Mayfair",
    "categoryId": "t10",
    "lat": -26.2003597,
    "lng": 28.0122265,
    "address": "86 3rd Ave, Mayfair, Johannesburg, 2108, South Africa"
  },
  {
    "id": "node-988",
    "name": "vabro distributors",
    "categoryId": "t10",
    "lat": -26.1942673,
    "lng": 27.6965384,
    "address": "43 Dodge St, Aureus, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-989",
    "name": "Jumbo Supermarket",
    "categoryId": "t10",
    "lat": -25.7251017,
    "lng": 28.163545,
    "address": "244 Van Der Hoff Rd, Hermanstad, Pretoria, 0082, South Africa"
  },
  {
    "id": "node-990",
    "name": "Goolams Take & Pay",
    "categoryId": "t10",
    "lat": -25.7374714,
    "lng": 28.1751729,
    "address": "1-89 Bazaar St, Marabastad, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-991",
    "name": "Premier FMCG - Manhattan Sweets",
    "categoryId": "t10",
    "lat": -26.1588306,
    "lng": 28.1926326,
    "address": "36 Gross St, Tunney Industrial, Germiston, 1429, South Africa"
  },
  {
    "id": "node-992",
    "name": "Tia's Muesli",
    "categoryId": "t10",
    "lat": -26.0835882,
    "lng": 27.9716732,
    "address": "Unit 2 & 3 Saxon Industrial Park Sterling Street, Strydompark, Randburg, 2194, South Africa"
  },
  {
    "id": "node-993",
    "name": "Sunnypark Greengrocers",
    "categoryId": "t10",
    "lat": -25.751923,
    "lng": 28.203128,
    "address": "85 Jeppe St, Sunnyside, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-994",
    "name": "Akhalwaya's Spices (Avenue Road)",
    "categoryId": "t10",
    "lat": -26.2042881,
    "lng": 28.0256352,
    "address": "53 Dolly Rathebe Rd, Fordsburg, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-995",
    "name": "Universal Paper & Plastics",
    "categoryId": "t10",
    "lat": -25.560503,
    "lng": 27.9906647,
    "address": "Park, 35 Fourth St, Ga-Rankuwa Industrial, Ga-Rankuwa, 0208, South Africa"
  },
  {
    "id": "node-996",
    "name": "Tri Star Foods",
    "categoryId": "t10",
    "lat": -26.0318325,
    "lng": 27.9540752,
    "address": "Northlands Industrial Park, 229 Trademark Rd, Northriding, Johannesburg, 2169, South Africa"
  },
  {
    "id": "node-997",
    "name": "Reliable Produce & Provisions",
    "categoryId": "t10",
    "lat": -26.2348037,
    "lng": 28.0038497,
    "address": "42 Crownwood Rd, Ormonde, Johannesburg, 2091, South Africa"
  },
  {
    "id": "node-998",
    "name": "Johannesburg market",
    "categoryId": "t10",
    "lat": -26.2294987,
    "lng": 28.0806481,
    "address": "Q3CJ+67, City Deep, Johannesburg South, 2049, South Africa"
  },
  {
    "id": "node-999",
    "name": "Premier FMCG - Vereeniging Wheat Mill",
    "categoryId": "t10",
    "lat": -26.6546369,
    "lng": 27.907156,
    "address": "2 Eisenhower St, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-1000",
    "name": "Key Distributors (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.1546576,
    "lng": 28.1905366,
    "address": "10 Essex St, Tunney Ex 10, Elandsfontein, Germiston, 1601, Rietfontein 63-Ir, Germiston, 1614, South Africa"
  },
  {
    "id": "node-1001",
    "name": "Yarona Distribution center",
    "categoryId": "t10",
    "lat": -26.2193525,
    "lng": 28.0117494,
    "address": "Crown, Johannesburg, 2025, South Africa"
  },
  {
    "id": "node-1002",
    "name": "BeeGlow",
    "categoryId": "t10",
    "lat": -25.8102121,
    "lng": 28.2520261,
    "address": "249 Oom Jochem's Pl, Erasmusrand, Pretoria, 0181, South Africa"
  },
  {
    "id": "node-1003",
    "name": "Premier FMCG - Pretoria Wheat Mill",
    "categoryId": "t10",
    "lat": -25.7248423,
    "lng": 28.3215572,
    "address": "300 Kuit St, Waltloo, Pretoria, 0184, South Africa"
  },
  {
    "id": "node-1004",
    "name": "Spice Zone Indian Kitchen",
    "categoryId": "t10",
    "lat": -26.2034816,
    "lng": 28.0223277,
    "address": "68 Central Rd, Fordsburg, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-1005",
    "name": "Enterprise",
    "categoryId": "t10",
    "lat": -25.9680046,
    "lng": 28.2378436,
    "address": "Hoof Rd, Clayville Industrial, Olifantsfontein, 1666, South Africa"
  },
  {
    "id": "node-1006",
    "name": "JOINT SPAZA SHOP",
    "categoryId": "t10",
    "lat": -25.4666298,
    "lng": 28.0364658,
    "address": "Winterveld, 0198, South Africa"
  },
  {
    "id": "node-1007",
    "name": "AVI Limited",
    "categoryId": "t10",
    "lat": -26.1277722,
    "lng": 28.0467241,
    "address": "2 Harries Rd, Illovo, Johannesburg, 2196, South Africa"
  },
  {
    "id": "node-1008",
    "name": "SIMBA (PTY) LTD",
    "categoryId": "t10",
    "lat": -26.65669,
    "lng": 27.91575,
    "address": "29 Eisenhower St, Duncanville, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-1009",
    "name": "Paneer4u",
    "categoryId": "t10",
    "lat": -26.053004,
    "lng": 27.973948,
    "address": "Pritchard St, Northriding, Randburg, 2158, South Africa"
  },
  {
    "id": "node-1010",
    "name": "Teubes | Oils & Extracts Supplier",
    "categoryId": "t10",
    "lat": -26.0796299,
    "lng": 27.9762,
    "address": "75 Wakis Ave, Strydompark, Johannesburg, 2194, South Africa"
  },
  {
    "id": "node-1011",
    "name": "Bounty Foods & Care",
    "categoryId": "t10",
    "lat": -25.9592515,
    "lng": 28.2544679,
    "address": "Gauteng, Warehouse No.3, Twenty-One Industrial Estate, 15 Purlin St N, Olifantsfontein, 1667, South Africa"
  },
  {
    "id": "node-1012",
    "name": "Discount Foods Midrand",
    "categoryId": "t10",
    "lat": -25.998451,
    "lng": 28.1289733,
    "address": "Shop 5 Midrand Taxi Rank Centre, Cnr South &, Market St, Halfway House, Midrand, 1685, South Africa"
  },
  {
    "id": "node-1013",
    "name": "Packaging machinery chemicals & FMCG",
    "categoryId": "t10",
    "lat": -25.7752399,
    "lng": 28.2701609,
    "address": "256B Thatchers Fields St, Lynnwood, Pretoria, 0081, South Africa"
  },
  {
    "id": "node-1014",
    "name": "SPSK",
    "categoryId": "t10",
    "lat": -26.0074915,
    "lng": 28.3889419,
    "address": "2 Gerald Rd, Cilvale AH, Bronkhorstspruit, South Africa"
  },
  {
    "id": "node-1015",
    "name": "MEGA MART SUNDRA",
    "categoryId": "t10",
    "lat": -26.1880904,
    "lng": 28.5294241,
    "address": "38 R555, Delmas, South Africa"
  },
  {
    "id": "node-1016",
    "name": "Fat Cake Land 3 &Tuck Shop",
    "categoryId": "t10",
    "lat": -26.2352394,
    "lng": 27.8636447,
    "address": "Koma St, Zondi, Johannesburg, 1868, South Africa"
  },
  {
    "id": "node-1017",
    "name": "Foods n Goods - Groceries Online",
    "categoryId": "t10",
    "lat": -26.0844899,
    "lng": 28.0926229,
    "address": "Corner Spartan Crescent and Olympia Street Marlboro, Eastgate, Sandton, 2090, South Africa"
  },
  {
    "id": "node-1018",
    "name": "Avi Fieldmarketing",
    "categoryId": "t10",
    "lat": -26.1433642,
    "lng": 28.2107194,
    "address": "36 Quality Rd, Isando, Kempton Park, 1600, South Africa"
  },
  {
    "id": "node-1019",
    "name": "Casmara",
    "categoryId": "t10",
    "lat": -26.1334571,
    "lng": 28.2031277,
    "address": "Unit 5, Jet Works, 40 Electron Ave, Isando, Johannesburg, 1609, South Africa"
  },
  {
    "id": "node-1020",
    "name": "Agro-Serve (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.139338,
    "lng": 28.208801,
    "address": "15 Diesel Street, Isando, Kempton Park, 1600, South Africa"
  },
  {
    "id": "node-1021",
    "name": "Form Scaff Boksburg",
    "categoryId": "t10",
    "lat": -26.2091113,
    "lng": 28.2357916,
    "address": "Angelo, Boksburg, South Africa"
  },
  {
    "id": "node-1022",
    "name": "Mzantsi Solutions",
    "categoryId": "t10",
    "lat": -26.1026946,
    "lng": 28.2632003,
    "address": "Unit 18, Blue Drop Business Park, 105 E.P. Malan Rd, Pomona, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-1023",
    "name": "Model Product Distributors",
    "categoryId": "t10",
    "lat": -26.2008743,
    "lng": 28.0630436,
    "address": "11 Gous St, Troyeville, Johannesburg, 2094, South Africa"
  },
  {
    "id": "node-1024",
    "name": "Rupas Food Packaging",
    "categoryId": "t10",
    "lat": -26.202831,
    "lng": 28.0261307,
    "address": "66A Lilian Ngoyi St, Newtown, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-1025",
    "name": "Manea's Organix",
    "categoryId": "t10",
    "lat": -26.0562551,
    "lng": 28.3578828,
    "address": "Orchard street, benoni, Benoni, 1501, South Africa"
  },
  {
    "id": "node-1026",
    "name": "Imi Fruit & Veg",
    "categoryId": "t10",
    "lat": -25.7876805,
    "lng": 28.1042078,
    "address": "185 9th Ave, Laudium, Centurion, 0037, South Africa"
  },
  {
    "id": "node-1027",
    "name": "Chicken for Africa",
    "categoryId": "t10",
    "lat": -26.3547973,
    "lng": 27.3980539,
    "address": "8 Amethyst St, Johannesburg, 2499, South Africa"
  },
  {
    "id": "node-1028",
    "name": "Mohammad Furniture and Asian bazar",
    "categoryId": "t10",
    "lat": -25.4067269,
    "lng": 28.2717387,
    "address": "Kanana street, Hammanskraal West, Hammanskraal, 0400, South Africa"
  },
  {
    "id": "node-1029",
    "name": "T Trading (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.562152,
    "lng": 27.8223303,
    "address": "F41 Boitumelo Extension, Sebokeng, 1983, South Africa"
  },
  {
    "id": "node-1030",
    "name": "FMCG Search",
    "categoryId": "t10",
    "lat": -26.1564455,
    "lng": 28.1823877,
    "address": "479 Flower Cl, Tunney, Germiston, 1614, South Africa"
  },
  {
    "id": "node-1031",
    "name": "Litmo trading",
    "categoryId": "t10",
    "lat": -26.1091064,
    "lng": 28.0840387,
    "address": "Unit 1 Progress Industrial Centre Cnr 4th and, North St, Wynberg, Sandton, 2090, South Africa"
  },
  {
    "id": "node-1032",
    "name": "Full Basket Brands",
    "categoryId": "t10",
    "lat": -25.9552712,
    "lng": 28.2530108,
    "address": "148 Purlin St N, Olifantsfontein, Kempton Park, 1666, South Africa"
  },
  {
    "id": "node-1033",
    "name": "TJ CORNER FRUITS & VEG WHOLESAL",
    "categoryId": "t10",
    "lat": -26.6774833,
    "lng": 27.9289114,
    "address": "29 Senator Marks Ave, Vereeniging, 1939, South Africa"
  },
  {
    "id": "node-1034",
    "name": "Wellworth Factory Shop",
    "categoryId": "t10",
    "lat": -26.2802172,
    "lng": 27.8876609,
    "address": "2nd St, Soweto, Johannesburg, 1804, South Africa"
  },
  {
    "id": "node-1035",
    "name": "Kanara Agri SA",
    "categoryId": "t10",
    "lat": -26.1837415,
    "lng": 27.6829301,
    "address": "10 Kanarie Rd, Helikon Park, Randfontein, 1759, South Africa"
  },
  {
    "id": "node-1036",
    "name": "Malik Spice & Grocery Shop",
    "categoryId": "t10",
    "lat": -26.206035,
    "lng": 28.034453,
    "address": "27 Gerard Sekoto St, Ferreiras Dorp, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-1037",
    "name": "More and Cheap",
    "categoryId": "t10",
    "lat": -26.2371879,
    "lng": 28.3638303,
    "address": "650, Sonic Place, Voortrekker Rd, Brakpan, 5141, South Africa"
  },
  {
    "id": "node-1038",
    "name": "MJC Distributors (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.0482713,
    "lng": 27.8049121,
    "address": "114 N14, Honingklip, Krugersdorp, 1747, South Africa"
  },
  {
    "id": "node-1039",
    "name": "WV Squared Pty Ltd",
    "categoryId": "t10",
    "lat": -26.0992292,
    "lng": 28.05063,
    "address": "5th Floor, Capital Hill Building, 6 Benmore Rd, Morningside, Johannesburg, 2057, South Africa"
  },
  {
    "id": "node-1040",
    "name": "Nepo facilities management services",
    "categoryId": "t10",
    "lat": -25.624503,
    "lng": 28.0615227,
    "address": "Nkwe estates, 778 Leholi St, Rosslyn, Akasia, 0200, South Africa"
  },
  {
    "id": "node-1041",
    "name": "Jwayelani Randfontein",
    "categoryId": "t10",
    "lat": -26.1808892,
    "lng": 27.6993988,
    "address": "36 Fedler St, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-1042",
    "name": "Choppies Pretoria North",
    "categoryId": "t10",
    "lat": -25.6753465,
    "lng": 28.1719429,
    "address": "259 Emily Hobhouse Ave, Pretoria North, Pretoria, 0116, South Africa"
  },
  {
    "id": "node-1043",
    "name": "Checkout Lenasia",
    "categoryId": "t10",
    "lat": -26.3214061,
    "lng": 27.8260889,
    "address": "21 Anemone Ave, Lenasia, 1820, South Africa"
  },
  {
    "id": "node-1044",
    "name": "Saverite Supermarket Freedom",
    "categoryId": "t10",
    "lat": -25.7560844,
    "lng": 28.186632,
    "address": "524 Bosman St, Bosman, Pretoria, 0001, South Africa"
  },
  {
    "id": "node-1045",
    "name": "Roots Kaalfontein",
    "categoryId": "t10",
    "lat": -25.9885382,
    "lng": 28.1752141,
    "address": "3117 Angelfish St, Kaalfontein, Midrand, 1632, South Africa"
  },
  {
    "id": "node-1046",
    "name": "Vasco Da Gama Supermarket",
    "categoryId": "t10",
    "lat": -26.7025708,
    "lng": 27.8161655,
    "address": "4 Vondel St, Vanderbijlpark C. W. 6, Vanderbijlpark, 1911, South Africa"
  },
  {
    "id": "node-1047",
    "name": "Jwayelani De Villiers",
    "categoryId": "t10",
    "lat": -26.1990448,
    "lng": 28.0456592,
    "address": "44 De Villiers St, Johannesburg, 2000, South Africa"
  },
  {
    "id": "node-1048",
    "name": "Loginet Distribution and Warehousig",
    "categoryId": "t10",
    "lat": -26.2536836,
    "lng": 28.1333335,
    "address": "2 Pieter Uys Ave, Alberton North, Alberton, 1449, South Africa"
  },
  {
    "id": "node-1049",
    "name": "Witbeeck Multisave",
    "categoryId": "t10",
    "lat": -26.1475942,
    "lng": 27.8286966,
    "address": "30 Stumke St, Witpoortjie, Roodepoort, 1724, South Africa"
  },
  {
    "id": "node-1050",
    "name": "Hene Q Logistics",
    "categoryId": "t10",
    "lat": -26.3175782,
    "lng": 28.1389982,
    "address": "49 Bosworth St, Alrode, Alberton, 1452, South Africa"
  },
  {
    "id": "node-1051",
    "name": "Evergreens The Fresh Market @ PTA West",
    "categoryId": "t10",
    "lat": -25.7418571,
    "lng": 28.1657483,
    "address": "Tshwane National Fresh Produce Market, Pretoria West, Pretoria, 0181, South Africa"
  },
  {
    "id": "node-1052",
    "name": "Hyperland Ennerdale (old choppies )",
    "categoryId": "t10",
    "lat": -26.4140853,
    "lng": 27.8351223,
    "address": "3400 1st Ave, Ennerdale, 1830, South Africa"
  },
  {
    "id": "node-1053",
    "name": "Jubilee Crossing",
    "categoryId": "t10",
    "lat": -25.4055836,
    "lng": 28.2656924,
    "address": "Corner of, Jubilee Road, Harry Gwala Ave, Hammanskraal, 0407, South Africa"
  },
  {
    "id": "node-1054",
    "name": "Sky City Mall",
    "categoryId": "t10",
    "lat": -26.4139975,
    "lng": 28.120387,
    "address": "Vereeniging NU, South Africa"
  },
  {
    "id": "node-1055",
    "name": "Hyperland Cliffs",
    "categoryId": "t10",
    "lat": -26.3243984,
    "lng": 28.1382638,
    "address": "34 Bosworth St, Alrode, Alberton, 1449, South Africa"
  },
  {
    "id": "node-1056",
    "name": "Roots Grill Olifantsfontein",
    "categoryId": "t10",
    "lat": -25.9642274,
    "lng": 28.2126239,
    "address": "2, Mega Mart, Olifantsfontein Rd, Tswelopele, Johannesburg, 1682, South Africa"
  },
  {
    "id": "node-1057",
    "name": "SPAR Kismet",
    "categoryId": "t10",
    "lat": -25.7925364,
    "lng": 28.1000547,
    "address": "264 18th Ave, Laudium, Pretoria, 0037, South Africa"
  },
  {
    "id": "node-1058",
    "name": "Tshwane Regional Mall",
    "categoryId": "t10",
    "lat": -25.7193605,
    "lng": 28.3396398,
    "address": "Mamelodi - K18, Pretoria, 0101, South Africa"
  },
  {
    "id": "node-1059",
    "name": "Plus DC",
    "categoryId": "t10",
    "lat": -26.2688132,
    "lng": 28.1883134,
    "address": "69 Steenbras Rd, Wadeville, Germiston, 1422, South Africa"
  },
  {
    "id": "node-1060",
    "name": "Daxina Supermarket",
    "categoryId": "t10",
    "lat": -26.3915487,
    "lng": 27.8471315,
    "address": "Shop No: 9, NTN Centre, Starling Rd, Lenasia South, Johannesburg, 1835, South Africa"
  },
  {
    "id": "node-1061",
    "name": "HyperLand Old Choppies",
    "categoryId": "t10",
    "lat": -26.260402,
    "lng": 28.2955733,
    "address": "9 Geelhout St, Van Dykpark, Boksburg, 1459, South Africa"
  },
  {
    "id": "node-1062",
    "name": "Frontline Hyper Lenasia",
    "categoryId": "t10",
    "lat": -26.3247069,
    "lng": 27.8567056,
    "address": "205 Protea Ave, Lenasia, 1825, South Africa"
  },
  {
    "id": "node-1063",
    "name": "Greens Supermarket",
    "categoryId": "t10",
    "lat": -25.5575715,
    "lng": 27.6989372,
    "address": "Brits, South Africa"
  },
  {
    "id": "node-1064",
    "name": "PICK N WIN EXPRESS",
    "categoryId": "t10",
    "lat": -26.2158594,
    "lng": 28.0098798,
    "address": "CNR MAIN REEF &, Crownwood Rd, CROWN MINES, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-1065",
    "name": "Roots mabopane",
    "categoryId": "t10",
    "lat": -25.5049034,
    "lng": 28.0433301,
    "address": "1908 Mangope Rd, Mabopane Unit X, Mabopane, 0190, South Africa"
  },
  {
    "id": "node-1066",
    "name": "Roots Mams Mall",
    "categoryId": "t10",
    "lat": -25.7019551,
    "lng": 28.4215935,
    "address": "Roots Mams Mall, Mahube Valley, Pretoria, 0122, South Africa"
  },
  {
    "id": "node-1067",
    "name": "Jwayelani Krugersdorp",
    "categoryId": "t10",
    "lat": -26.0980069,
    "lng": 27.7726444,
    "address": "Corner Kruger &, Pretoria St, Krugersdorp, 1740, South Africa"
  },
  {
    "id": "node-1068",
    "name": "Clippa Sales",
    "categoryId": "t10",
    "lat": -26.0269994,
    "lng": 28.264304,
    "address": "Eastport Logistics Park Corner R21 Expressway & R25 Witfontein, Extension 86 Kempton Park, Glen marais, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-1069",
    "name": "Reddy Logistics",
    "categoryId": "t10",
    "lat": -26.2168225,
    "lng": 28.1336996,
    "address": "134-135 Nasmith Rd, Jupiter, Germiston, 2094, South Africa"
  },
  {
    "id": "node-1070",
    "name": "Evergreens the Fresh Market @ Kempton",
    "categoryId": "t10",
    "lat": -26.0353636,
    "lng": 28.2566978,
    "address": "Link Rd, Esselen Park, Kempton Park, 1626, South Africa"
  },
  {
    "id": "node-1071",
    "name": "Checkout Springs",
    "categoryId": "t10",
    "lat": -26.2553775,
    "lng": 28.4418687,
    "address": "6th Ave, Springs New, Springs, 1560, South Africa"
  },
  {
    "id": "node-1072",
    "name": "Pick n Pay, Eastport Distribution Center",
    "categoryId": "t10",
    "lat": -26.0196708,
    "lng": 28.2657074,
    "address": "EASTPORT LOGISTICS PARK, 100 Arniston St, Witfontein, Kempton Park, 1620, South Africa"
  },
  {
    "id": "node-1073",
    "name": "OBC GROUP (Pty) Ltd.",
    "categoryId": "t10",
    "lat": -25.9172107,
    "lng": 28.1776362,
    "address": "1158 Louwlardia Dr, Louwlardia, Centurion, 1683, South Africa"
  },
  {
    "id": "node-1074",
    "name": "Shoprite / Checkers DC",
    "categoryId": "t10",
    "lat": -25.9143938,
    "lng": 28.1721385,
    "address": "20 Watershed Cl, Louwlardia, Centurion, 01573, South Africa"
  },
  {
    "id": "node-1075",
    "name": "THEOVIDAS TRADING & CONSULT",
    "categoryId": "t10",
    "lat": -26.1412144,
    "lng": 28.080997,
    "address": "Newton 106 Athol Road  Highlands North"
  },
  {
    "id": "node-1076",
    "name": "RED CAP HYPER POTCHEFSTROOM",
    "categoryId": "t10",
    "lat": -26.7139068,
    "lng": 27.098483,
    "address": "Westonaria 33 Market Street  Potchefstroom"
  },
  {
    "id": "node-1077",
    "name": "HYPERCHECK GRAND PLACE",
    "categoryId": "t10",
    "lat": -26.3185721,
    "lng": 27.8269548,
    "address": "Lenasia 43 Concord Place Ext 1 lenasia"
  },
  {
    "id": "node-1078",
    "name": "Hyperland Evaton (Pty) Ltd",
    "categoryId": "t10",
    "lat": -26.5282569,
    "lng": 27.8277536,
    "address": "Golden Highway"
  },
  {
    "id": "node-1079",
    "name": "HYPERLAND ELDORADO PARK EXT 9",
    "categoryId": "t10",
    "lat": -26.2991299,
    "lng": 27.8897173,
    "address": "Johannesburg 97 Noundary Road Eldorado Park Johannesburg"
  },
  {
    "id": "node-1080",
    "name": "METCASH TRADING AFRICA (PTY) LTD T/A METRO CROWN M",
    "categoryId": "t10",
    "lat": -26.2185388,
    "lng": 28.0165784,
    "address": "Johannesburg 83 Genesis Boulevard Crown Mines, Johannesburg Gauteng, 2016"
  },
  {
    "id": "node-1081",
    "name": "HYPERLAND BRONKHORSTSPRUIT",
    "categoryId": "t10",
    "lat": -25.8037977,
    "lng": 28.7463493,
    "address": "Bronkhorstspruit Cnr Kort and Lanham Str Caverdale Bronkhorstspruit"
  },
  {
    "id": "node-1082",
    "name": "JWAYELANI BRONKHORSPRUIT",
    "categoryId": "t10",
    "lat": -25.8057555,
    "lng": 28.7459319,
    "address": "Bronkhorstspruit ERF 1918 Erasmus Bronkhorspruit"
  },
  {
    "id": "node-1083",
    "name": "ROOTS DLAMINI",
    "categoryId": "t10",
    "lat": -26.2708186,
    "lng": 27.8760341,
    "address": "Soweto Shop 11 Dlamnini Square Chris Hani Road & Mtambo Street Dlamini"
  },
  {
    "id": "node-1084",
    "name": "BEST BEFORE CLEARANCE STORE T/A BEST BEFORE",
    "categoryId": "t10",
    "lat": -26.0829006,
    "lng": 28.0854504,
    "address": "Johannesburg 1 Daphny Street, Wendywood Wendywood Shopping Centre Sandton"
  },
  {
    "id": "node-1085",
    "name": "ROOTS MAMELODI SQUARE",
    "categoryId": "t10",
    "lat": -25.7048479,
    "lng": 28.3930102,
    "address": "Mamelodi Shop 26 Corner of Shilouhane and Tsamaya Avenue Mamelodi, Gauteng - 0122"
  },
  {
    "id": "node-1086",
    "name": "CASH SALES TK",
    "categoryId": "t10",
    "lat": -26.2174103,
    "lng": 27.9938373,
    "address": "Newton Trade Kings South Africa 36 Mineral Crescent Crown  Mines Ext 3"
  },
  {
    "id": "node-1087",
    "name": "CASH SALES TK (COD)",
    "categoryId": "t10",
    "lat": -26.2174103,
    "lng": 27.9938373,
    "address": "Newton Trade Kings South Africa 36 Mineral Crescent Crown  Mines Ext 3"
  },
  {
    "id": "node-1088",
    "name": "ROOTS MAMELODI",
    "categoryId": "t10",
    "lat": -25.7133722,
    "lng": 28.3753049,
    "address": "Tshwane 18874 Tsamaya Ave Mamelodi Pretoria"
  },
  {
    "id": "node-1089",
    "name": "HYPERLAND HEBRON",
    "categoryId": "t10",
    "lat": -25.5380528,
    "lng": 28.0176467,
    "address": "Pretoria Lucas Mangope Highway Mabopane Hebron"
  },
  {
    "id": "node-1090",
    "name": "Savemoor Hyper Thembisa (Pty) Ltd TA Savemoor",
    "categoryId": "t10",
    "lat": -26.0340025,
    "lng": 28.1763062,
    "address": "Mayibuye Shopping Centre"
  },
  {
    "id": "node-1091",
    "name": "GAAC SALES & DISTRIBUTION (PTY) LTD",
    "categoryId": "t10",
    "lat": -25.96183,
    "lng": 28.2161304,
    "address": "Johannesburg 19 Tile Crescent Gauteng Industrial Park, Unit E Eoka Properties, Clayville"
  },
  {
    "id": "node-1092",
    "name": "HYPERLAND RANDFONTEIN",
    "categoryId": "t10",
    "lat": -26.1808627,
    "lng": 27.6994119,
    "address": "Johannesburg 36 Fedler Street Randfontein"
  },
  {
    "id": "node-1093",
    "name": "PEP STORES JHB DC2",
    "categoryId": "t10",
    "lat": -26.1324437,
    "lng": 28.2106239,
    "address": "Newton Pep DC - JHB2 34 Wrench Road Isando"
  },
  {
    "id": "node-1094",
    "name": "Hyperland Germiston",
    "categoryId": "t10",
    "lat": -26.213426,
    "lng": 28.1672029,
    "address": "51 Platantion Road"
  },
  {
    "id": "node-1095",
    "name": "HYPERLAND DE VILLIERS",
    "categoryId": "t10",
    "lat": -26.1989964,
    "lng": 28.0455274,
    "address": "Johannesburg 42 De Villiers Street Johannesburg"
  },
  {
    "id": "node-1096",
    "name": "CHOPPIES SUPERMARKET SA (PTY) LTD - DENVER DC",
    "categoryId": "t10",
    "lat": -26.2097353,
    "lng": 28.0950141,
    "address": "Johannesburg 65 Mimetes Road Denver Johannesburg"
  },
  {
    "id": "node-1097",
    "name": "OVERLAND HYPER FOOD TOWN MADEIRA",
    "categoryId": "t10",
    "lat": -25.7470316,
    "lng": 28.1133408,
    "address": "Pretoria Corner Seklgras & Pylgras Street Danville Pretoria"
  },
  {
    "id": "node-1098",
    "name": "RDM LOGISTICS & FORWARDING",
    "categoryId": "t10",
    "lat": -22.2392034,
    "lng": 29.9850809,
    "address": "Johannesburg Office Block D No 4 Gateway Truck Shop Beitbridge"
  },
  {
    "id": "node-1099",
    "name": "VINCEMUS INVESTMENTS (PTY) LTD",
    "categoryId": "t10",
    "lat": -26.2710232,
    "lng": 28.1246864,
    "address": "Johannesburg 9 Heston Road New Red Ruth Alberton"
  },
  {
    "id": "node-1100",
    "name": "JUBA TRANSPORT SA",
    "categoryId": "t10",
    "lat": -26.1952357,
    "lng": 28.2321779,
    "address": "Johannesburg 531 Pretoria Road Comet X14 Boksburg, Johannesburg"
  },
  {
    "id": "node-1101",
    "name": "TRADE KINGS CASH SALES ACC",
    "categoryId": "t10",
    "lat": -26.2174103,
    "lng": 27.9938373,
    "address": "Newton Trade Kings South Africa 36 Mineral Crescent Crown  Mines Ext 3"
  },
  {
    "id": "node-1102",
    "name": "STATEGIC SALES & MARKETING (PTY) LTD",
    "categoryId": "t10",
    "lat": -26.1412692,
    "lng": 27.897569,
    "address": "Johannesburg 1 Pauline Street Constantia Kloof Roodepoort, Gauteng,1709"
  },
  {
    "id": "node-1103",
    "name": "EVILOX 366CC",
    "categoryId": "t10",
    "lat": -26.1947896,
    "lng": 28.3649606,
    "address": "Johannesburg 12 Rolina Street Rynsoord, Benoni Gauteng"
  },
  {
    "id": "node-1104",
    "name": "KNL MOTORS AND TRANSPORTERS",
    "categoryId": "t10",
    "lat": -26.3618184,
    "lng": 28.1120581,
    "address": "Johannesburg 41 Drakensberg Boulevard Alrode South Johannesburg"
  },
  {
    "id": "node-1105",
    "name": "Bulk Pack Meat",
    "categoryId": "t10",
    "lat": -26.1826299,
    "lng": 27.9108653,
    "address": "20 Kathleen St, Florida, Roodepoort, 1709, South Africa"
  },
  {
    "id": "node-1106",
    "name": "Bynes Slaghuis",
    "categoryId": "t10",
    "lat": -25.7224769,
    "lng": 27.9780712,
    "address": "Van der Hoff Road, Pretoria, 0183, South Africa"
  },
  {
    "id": "node-1107",
    "name": "Moses Chicken And Fresh Meat (MOSES OBC)",
    "categoryId": "t10",
    "lat": -26.2065118,
    "lng": 27.8052279,
    "address": "Moses Shopping Centre, Old Impala Rd, Valkfontein, Johannesburg, 1724, South Africa"
  },
  {
    "id": "node-1108",
    "name": "Jumbo Goodmans",
    "categoryId": "t10",
    "lat": -26.099109,
    "lng": 27.9933163,
    "address": "Carreira Centre, Ferndale, Johannesburg, 2160, South Africa"
  },
  {
    "id": "node-1109",
    "name": "Seylloyd fruit and veg",
    "categoryId": "t10",
    "lat": -26.2284987,
    "lng": 28.0823831,
    "address": "Joburg Market, 04 Heidelberg Rd, City Deep, Johannesburg, 2049, South Africa"
  },
  {
    "id": "node-1110",
    "name": "Model Butchery",
    "categoryId": "t10",
    "lat": -26.2045059,
    "lng": 28.0131948,
    "address": "1858 Albertina Sisulu Rd, Mayfair, Johannesburg, 2092, South Africa"
  },
  {
    "id": "node-1111",
    "name": "Chamdor Meat Supply",
    "categoryId": "t10",
    "lat": -26.1593965,
    "lng": 27.7992449,
    "address": "20 Jacobs St, Chamdor, Krugersdorp, 1740, South Africa"
  },
  {
    "id": "node-1112",
    "name": "Roots Butchery Randfontein Station",
    "categoryId": "t10",
    "lat": -26.181806,
    "lng": 27.69849,
    "address": "Cnr Station and, 5 Sutherland Ave, Randfontein, 1760, South Africa"
  },
  {
    "id": "node-1113",
    "name": "Roots Butchery Mohlakeng (Randfontein)",
    "categoryId": "t10",
    "lat": -26.2075804,
    "lng": 27.6968246,
    "address": "Middelvlei, Main Rd, Middelvlei 255-Iq, Randfontein, 1764, South Africa"
  },
  {
    "id": "node-1114",
    "name": "United Meat Merchants Crossroads",
    "categoryId": "t10",
    "lat": -26.6704277,
    "lng": 27.9400194,
    "address": "3 Golf Rd, Peacehaven, Vereeniging, 1934, South Africa"
  },
  {
    "id": "node-1115",
    "name": "Black Mountain Supermarket Krugersdorp",
    "categoryId": "t10",
    "lat": -26.0991668,
    "lng": 27.7708315,
    "address": "59 President St, Krugersdorp, 1739, South Africa"
  },
  {
    "id": "node-1116",
    "name": "T.N Tuck Shop And Butchery",
    "categoryId": "t10",
    "lat": -25.993762,
    "lng": 28.201873,
    "address": "2nd October Dr, Ivory Park, Midrand, 6328, South Africa"
  },
  {
    "id": "node-1117",
    "name": "Station Meat & Chicken Centre",
    "categoryId": "t10",
    "lat": -26.1202842,
    "lng": 27.811458,
    "address": "Meghof, 209 Albertina Sisulu Rd, Lewisham, Johannesburg, 1739, South Africa"
  },
  {
    "id": "node-1118",
    "name": "Roman Supermarket & Butcher",
    "categoryId": "t10",
    "lat": -26.2452331,
    "lng": 27.9276652,
    "address": "Gaobatlelwe St, Orlando East, Johannesburg, 1804, South Africa"
  },
  {
    "id": "node-1119",
    "name": "Kasi Farm Style Butchery",
    "categoryId": "t10",
    "lat": -26.0231674,
    "lng": 28.1955639,
    "address": "0"
  },
  {
    "id": "node-1120",
    "name": "Islamic Meat and Deli",
    "categoryId": "t10",
    "lat": -26.1593958,
    "lng": 27.8694398,
    "address": "0"
  },
  {
    "id": "node-1121",
    "name": "Forsmay Muslim Butchery",
    "categoryId": "t10",
    "lat": -26.2033902,
    "lng": 28.098026,
    "address": "0"
  },
  {
    "id": "node-1122",
    "name": "Al-Fatah Meat and Grocery",
    "categoryId": "t10",
    "lat": -26.1516645,
    "lng": 28.4173124,
    "address": "0"
  },
  {
    "id": "node-1123",
    "name": "Waltloo Meat & Chicken Palm Springs",
    "categoryId": "t10",
    "lat": -26.4977515,
    "lng": 27.8449985,
    "address": "Shop 10 - 12, Palm Springs Mall Corner Falcon and, Fig Rd, Johannesburg, Orange Farm, 1805, South Africa"
  },
  {
    "id": "node-1124",
    "name": "Roots Butchery Benoni",
    "categoryId": "t10",
    "lat": -26.191802,
    "lng": 28.317951,
    "address": "loound, 29 Tom Jones St, Benoni, 1500, South Africa"
  },
  {
    "id": "node-1125",
    "name": "Roots Butchery Kagiso Mall",
    "categoryId": "t10",
    "lat": -26.1662698,
    "lng": 27.7801285,
    "address": "Kagiso Mall, Kagiso, Johannesburg, 1754, South Africa"
  },
  {
    "id": "node-1126",
    "name": "Roots Butchery Meadowlands",
    "categoryId": "t10",
    "lat": -26.2196444,
    "lng": 27.8998037,
    "address": "Shop no 33 Meadow Point Shopping Center, Heckroodt Ave, Meadowlands, Soweto, 1852, South Africa"
  },
  {
    "id": "node-1127",
    "name": "Roots Butchery Krugersdorp",
    "categoryId": "t10",
    "lat": -26.1000316,
    "lng": 27.7713196,
    "address": "53 Kruger and, Church St, Krugersdorp, 1740, South Africa"
  },
  {
    "id": "node-1128",
    "name": "Roots Butchery Lethlabile",
    "categoryId": "t10",
    "lat": -25.469386,
    "lng": 27.8298327,
    "address": "Lethlabile-C, Brits, South Africa"
  },
  {
    "id": "node-1129",
    "name": "Roots Butchery Midrand",
    "categoryId": "t10",
    "lat": -25.9981998,
    "lng": 28.1274599,
    "address": "20a Old Pretoria Rd, Halfway House, Midrand, 1685, South Africa"
  },
  {
    "id": "node-1130",
    "name": "Roots Butchery Olievenhoutbosch Corner",
    "categoryId": "t10",
    "lat": -25.9035688,
    "lng": 28.0948011,
    "address": "Legaola St, Rua Vista, Centurion, 0187, South Africa"
  },
  {
    "id": "node-1131",
    "name": "Roots Butchery Sunnyside",
    "categoryId": "t10",
    "lat": -25.7534682,
    "lng": 28.2072438,
    "address": "277 Robert Sobukwe St, Sunnyside, Pretoria, 0002, South Africa"
  },
  {
    "id": "node-1132",
    "name": "Roots Thabong butchery &grill",
    "categoryId": "t10",
    "lat": -26.5960511,
    "lng": 27.8473725,
    "address": "Sebokeng Unit 10, Sebokeng, 1983, South Africa"
  },
  {
    "id": "node-1133",
    "name": "Roots Butchery Vereeniging",
    "categoryId": "t10",
    "lat": -26.6760659,
    "lng": 27.9338101,
    "address": "Shop 56, 56 C Union St, Vereeniging, 1936, South Africa"
  },
  {
    "id": "node-1134",
    "name": "Roots Butchery Vereeniging",
    "categoryId": "t10",
    "lat": -26.6760659,
    "lng": 27.9338101,
    "address": "Shop 56, 56 C Union St, Vereeniging, 1936, South Africa"
  },
  {
    "id": "node-1135",
    "name": "Roots Butchery Fourways Mall",
    "categoryId": "t10",
    "lat": -26.0175665,
    "lng": 28.0055757,
    "address": "Shop No NB111 & NB113, Fourways Mall, Cnr William Nicol and, Fourways Blvd, Fourways, Johannesburg, 2068, South Africa"
  },
  {
    "id": "node-1136",
    "name": "Roots Butchery Protea Gardens",
    "categoryId": "t10",
    "lat": -26.286004,
    "lng": 27.8493056,
    "address": "Shop No. 1, Protea Gardens Mall, Chris Hani Rd, Soweto, Johannesburg, 1818, South Africa"
  },
  {
    "id": "node-1137",
    "name": "Roots Butchery Daveyton",
    "categoryId": "t10",
    "lat": -26.1636763,
    "lng": 28.4016096,
    "address": "30569 Kgaka St, Daveyton, Benoni, 1507, South Africa"
  },
  {
    "id": "node-1138",
    "name": "Roots Butchery and Grill",
    "categoryId": "t10",
    "lat": -26.091128,
    "lng": 28.0062787,
    "address": "177 Bram Fischer Dr, Ferndale, Randburg, 2194, South Africa"
  },
  {
    "id": "node-1139",
    "name": "Roots Butchery",
    "categoryId": "t10",
    "lat": -25.7625836,
    "lng": 28.0666157,
    "address": "Atteridgeville, Pretoria, 0006, South Africa"
  },
  {
    "id": "node-1140",
    "name": "Roots butchery tshepiso",
    "categoryId": "t10",
    "lat": -26.6744619,
    "lng": 27.8682028,
    "address": "C/n first and second street ext 2 Tshepiso, Sharpeville, Vanderbijlpark, 1928, South Africa"
  },
  {
    "id": "node-1141",
    "name": "Roots BUTCHERY",
    "categoryId": "t10",
    "lat": -26.3538757,
    "lng": 27.3982268,
    "address": "95 Osmium St, Carletonville, 2499, South Africa"
  },
  {
    "id": "node-1142",
    "name": "Roots Butchery Chris Hani",
    "categoryId": "t10",
    "lat": -26.344109,
    "lng": 28.184112,
    "address": "49, Chris Hani Crossing, Bierman Rd, Vosloorus, Johannesburg, 1425, South Africa"
  },
  {
    "id": "node-1143",
    "name": "Roots Butchery Orange Farm",
    "categoryId": "t10",
    "lat": -26.4703561,
    "lng": 27.870224,
    "address": "Shop U15/16, Eyethu Orange Farm Mall, Link St, Orange Farm, Johannesburg, 2001, South Africa"
  },
  {
    "id": "node-1144",
    "name": "Roots BUTCHERY MEAT & CHICKEN",
    "categoryId": "t10",
    "lat": -26.2405261,
    "lng": 27.9490316,
    "address": "Diepkloof Square, Immink Dr, Soweto, Johannesburg, 1862, South Africa"
  },
  {
    "id": "node-1145",
    "name": "Roots Butchery Diepsloot.",
    "categoryId": "t10",
    "lat": -25.9350143,
    "lng": 28.0199587,
    "address": "118 Badiri St, Tanganani, Diepsloot, 2189, South Africa"
  },
  {
    "id": "node-1146",
    "name": "Roots Butchery KwaThema",
    "categoryId": "t10",
    "lat": -26.2821082,
    "lng": 28.3870309,
    "address": "CNR 11th Rd and, ext1, 12th Rd, Maryvlei, Brakpan, 1554, South Africa"
  },
  {
    "id": "node-1147",
    "name": "Roots Butchery, Factory Shop",
    "categoryId": "t10",
    "lat": -26.1074357,
    "lng": 28.222784,
    "address": "Esther Park, Kempton Park, 1619, South Africa"
  },
  {
    "id": "node-1148",
    "name": "Roots BUTCHERY",
    "categoryId": "t10",
    "lat": -26.2777479,
    "lng": 27.8914147,
    "address": "CNR Klipspruit Valley & Union RN, 6 Klipspruit Valley Rd, Klip Town, Johannesburg, 1811, South Africa"
  },
  {
    "id": "node-1149",
    "name": "Roots Butchery Thokoza",
    "categoryId": "t10",
    "lat": -26.3545205,
    "lng": 28.1307497,
    "address": "Thokoza, 1426, South Africa"
  },
  {
    "id": "node-1150",
    "name": "Roots Butchery Cloverdene",
    "categoryId": "t10",
    "lat": -26.1570915,
    "lng": 28.3751818,
    "address": "2 Cloverdene Rd, Van Ryn SH, Benoni, 1513, South Africa"
  },
  {
    "id": "node-1151",
    "name": "ROOTS BUTCHERY Dawn Park",
    "categoryId": "t10",
    "lat": -26.3131849,
    "lng": 28.2507962,
    "address": "Ext 31 Shop 21, Dawn Park Centre, Galahad Rd, Boksburg, Johannesburg, 1459, South Africa"
  },
  {
    "id": "node-1152",
    "name": "Waltloo Meat & Chicken Tembisa",
    "categoryId": "t10",
    "lat": -26.0339911,
    "lng": 28.1733995,
    "address": "Ext 34, 194 Theresa St, Commercia, Midrand, 1685, South Africa"
  },
  {
    "id": "node-1153",
    "name": "Roots Butchery Thorntree",
    "categoryId": "t10",
    "lat": -25.5806513,
    "lng": 28.1048453,
    "address": "Thorntree Plaza, m20 Hebron Rd, Soshanguve - XX, Pretoria, 0152, South Africa"
  },
  {
    "id": "node-1154",
    "name": "Roots Butchery Alexandra Pan Africa",
    "categoryId": "t10",
    "lat": -26.1091625,
    "lng": 28.0871082,
    "address": "Third St, Wynberg, Johannesburg, 2090, South Africa"
  },
  {
    "id": "node-1155",
    "name": "Roots Butchery Mall of Thembisa",
    "categoryId": "t10",
    "lat": -25.9596224,
    "lng": 28.2031247,
    "address": "Olifantsfontein Rd, Olifantsfontein 410-JR, Thembisa, 1683, South Africa"
  },
  {
    "id": "node-1156",
    "name": "Roots Butchery Katlehong",
    "categoryId": "t10",
    "lat": -26.3304748,
    "lng": 28.1538125,
    "address": "Shop 18, Motse Wa Lijane, EGoli, Nota St, Hlahatsi, Katlehong, 1431, South Africa"
  },
  {
    "id": "node-1157",
    "name": "Roots Butchery Cosmo Mall",
    "categoryId": "t10",
    "lat": -26.0131904,
    "lng": 27.9393757,
    "address": "Shop No.13, Cosmo Mall, 13 Malibongwe Dr, Cosmo City, Johannesburg, 2188, South Africa"
  },
  {
    "id": "node-1158",
    "name": "Roots Butchery Soshanguve",
    "categoryId": "t10",
    "lat": -25.549593,
    "lng": 28.0919631,
    "address": "M43 Aubrey Matlakala St, Soshanguve - RR South, Pretoria, 0152, South Africa"
  },
  {
    "id": "node-1159",
    "name": "Roots Butchery Tsakane",
    "categoryId": "t10",
    "lat": -26.3531754,
    "lng": 28.3729126,
    "address": "Tsakane Mall, Malandela St, Tsakani, Brakpan, 1550, South Africa"
  },
  {
    "id": "node-1160",
    "name": "Roots Butchery Evaton Mall",
    "categoryId": "t10",
    "lat": -26.5315396,
    "lng": 27.8266728,
    "address": "Shop 226, Evaton Mall, Corner Of Eastern & Evaton St, Evaton West, Vereeniging, 1984, South Africa"
  },
  {
    "id": "node-1161",
    "name": "Roots Butchery",
    "categoryId": "t10",
    "lat": -26.3954745,
    "lng": 27.8788475,
    "address": "Unaville AH, South Africa"
  },
  {
    "id": "node-1162",
    "name": "Roots Butchery Bara Mall",
    "categoryId": "t10",
    "lat": -26.2577776,
    "lng": 27.9311902,
    "address": "Bara Mall, Chris Hani Rd, Diepkloof Zone 6, Diepkloof, 1862, South Africa"
  },
  {
    "id": "node-1163",
    "name": "Roots Choice Butchery Cosmo Shopping Centre",
    "categoryId": "t10",
    "lat": -26.0220623,
    "lng": 27.92778,
    "address": "Cosmo shopping center, Cosmo City, Roodepoort, 2188, South Africa"
  },
  {
    "id": "node-1164",
    "name": "Waltloo Meat & Chicken Baragwanath",
    "categoryId": "t10",
    "lat": -26.2594357,
    "lng": 27.9434801,
    "address": "CNR CHRIS HANI &, Patrick Rd, Diepkloof Zone 6, Soweto, 1862, South Africa"
  }
];
