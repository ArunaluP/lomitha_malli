// ─────────────────────────────────────────────────────────────
//  All editable website text lives here.
//  Change company details, services, projects, clients etc.
// ─────────────────────────────────────────────────────────────

export const company = {
  name: 'EPT Solutions (Pvt) Ltd',
  formerly: 'Energy Power Technology',
  founded: 2004,
  regNo: 'PV 00370031',
  whatsapp: '94702742607',
  phones: [
    { label: '+94 70 274 2607', tel: '+94702742607' },
    { label: '+94 77 758 6326', tel: '+94777586326' },
  ],
  emails: ['eptgalle@gmail.com', 'lomithamanudana@gmail.com'],
  offices: [
    { title: 'GALLE · REGISTERED OFFICE', address: 'Amila Building, Akurassa Road, Kalahe, Wanchawala, Galle' },
    { title: 'NUGEGODA', address: '107A, Old Kesbawa Road, Gangodawila, Nugegoda' },
  ],
  instagram: { handle: '@ept.solutions', url: 'https://www.instagram.com/ept.solutions/' },
  facebook: { name: 'Energy Power Technology', url: 'https://www.facebook.com/search/top?q=Energy%20Power%20Technology' },
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'software', label: 'Software' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const typerWords = [
  'secure your premises.',
  'connect your business.',
  'power your systems.',
  'build your software.',
  'protect what matters.',
  'support you 24/7.',
];

export const heroFacts = [
  { k: 'HQ', v: 'Galle' },
  { k: 'BRANCH', v: 'Nugegoda' },
  { k: 'COVERAGE', v: 'All of Sri Lanka' },
  { k: 'DEALER', v: 'Hikvision Authorised' },
];

export const stats = [
  { value: 2004, plain: true, label: 'Founded as Energy Power Technology' },
  { value: 20, suffix: '+', label: 'Years of industry experience' },
  { value: 2000, suffix: '+', label: 'Satisfied clients' },
  { value: 1000, suffix: '+', label: 'Successful projects' },
  { text: '24/7', label: 'Support & maintenance' },
];

export const tickerWords = ['CCTV & Security', 'Software Solutions', 'Networking', 'Fiber Optic', 'UPS & Power', 'Access Control', 'Computers', 'Printers', 'IT Support', 'Wi-Fi', 'Web Development', 'Inventory Systems', 'Repairs'];

export const timeline = [
  { yr: '2004', title: 'Energy Power Technology', text: 'Founded in Galle — power, IT and security for local businesses and homes.' },
  { yr: '2004 → 2026', title: '20+ years of growth', text: '2000+ clients and 1000+ projects across Sri Lanka.' },
  { yr: '05 AUG 2026', title: 'EPT Solutions (Pvt) Ltd', text: 'Incorporated as a Private Limited Company · Reg. PV 00370031.' },
];

export const values = [
  { title: 'Integrity', text: 'Honesty, transparency, accountability and ethical practice.' },
  { title: 'Innovation', text: 'Adopting modern technologies as customer needs change.' },
  { title: 'Excellence', text: 'Quality products, reliable installations, dependable support.' },
  { title: 'Customer focus', text: 'Practical solutions with long-term value.' },
  { title: 'Teamwork', text: 'Working with customers and partners towards shared success.' },
];

// art: key of the illustration component in Illustrations.jsx
export const services = [
  {
    code: 'CORE_EXPERTISE', size: 'xl', art: 'cctv', icon: 'cctv',
    title: 'CCTV & security solutions',
    text: 'Authorised Hikvision dealer. Analog, IP, solar, ColorVu and AcuSense cameras, EZVIZ and Imou smart cameras, Redlink alarms, access control and smart locks.',
    chips: ['CCTV installation', 'IP camera systems', 'DVR / NVR', 'Remote monitoring', 'Mobile access', 'Surveillance storage', 'Access control', 'Door access', 'Alarm & fire alarm', 'Solar & 4G cameras', 'Custom security design', 'Maintenance'],
    securityFor: 'Homes · Offices · Shops · Warehouses · Hotels · Institutions · Factories · Commercial premises',
  },
  { code: '02.2', art: 'network', icon: 'network', title: 'Networking', text: 'Structured cabling, fiber optic, LAN & Wi-Fi, switch and router configuration, network security.' },
  { code: '02.3', art: 'ups', icon: 'power', title: 'UPS & power', text: 'UPS systems, installation and maintenance, surge protection, CCTV and network backup power.' },
  { code: '02.4', art: 'computers', icon: 'monitor', title: 'Computers & repairs', text: 'Desktops, laptops, NUC PCs, hardware repairs, upgrades, OS and software setup.' },
  { code: '02.5', art: 'printers', icon: 'printer', title: 'Printers & toner', text: 'Printer sales and repairs, toner cartridges, ink bottles and printing consumables.' },
  {
    code: '02.6', size: 'w2', art: 'accessories', icon: 'keyboard', title: 'IT products & accessories',
    text: 'Components, monitors, keyboards and mice, storage and memory, gaming gear, cables and connectivity — from brands you trust.',
    chips: ['Components', 'Monitors', 'Storage', 'Memory upgrades', 'Gaming', 'Networking gear'],
  },
  {
    code: '02.7', size: 'w2', art: 'custom', icon: 'star', title: 'Customised IT solutions',
    text: "Designed around each client's operational requirements — from consultation to annual maintenance contracts.",
    chips: ['Consultation', 'System design', 'Infrastructure planning', 'Integration', 'AMC', 'On-site support'],
  },
];

export const processSteps = [
  { title: 'Consult', text: 'Understand the site, needs & budget' },
  { title: 'Design', text: 'Plan the system & infrastructure' },
  { title: 'Supply & install', text: 'Genuine products, quality workmanship' },
  { title: 'Commission', text: 'Configure, integrate & hand over' },
  { title: 'Support', text: 'Maintenance, repairs & upgrades' },
];

export const infraCaps = ['Cat6 / Cat6A cabling', 'Single & multi-mode fibre', 'Fusion splicing & OTDR', 'PoE+ switching', 'Wi-Fi access points', 'Cisco · Aruba · TP-Link', 'Racks & cabinets', 'Testing & certification'];

export const projectRows = [
  { name: 'ICC – Alfred House', kind: 'luxury_residential', pct: 100, count: '150+', ongoing: true },
  { name: 'MAS Linea – Pallekele', kind: 'industrial_factory', pct: 83, count: '125+' },
  { name: 'ICC – IIT University', kind: 'higher_education', pct: 67, count: '100+', ongoing: true },
  { name: 'Ocean Front, Galle – ICC', kind: 'apartment_&_hotel', pct: 63, count: '95+' },
  { name: 'ICC Agro Farm – Haputale', kind: 'agricultural', pct: 11, count: '16' },
];

export const caseStudies = [
  {
    layout: 'big', images: ['factory.jpg'], hud: ['PRJ_01 · PALLEKELE', '125+ CAM'], ongoing: false,
    loc: 'INDUSTRIAL / FACTORY', title: 'MAS Linea – Pallekele', kind: 'High-end Hikvision IP CCTV surveillance',
    text: 'A centralised, high-definition system covering critical production areas and the external perimeter, with every camera monitored and managed from the security guard room.',
    kpis: [['125+', 'CCTV cameras'], ['HD', 'Hikvision IP'], ['Central', 'Guard room'], ['Full', 'Perimeter']],
  },
  {
    images: ['ocean1.jpg', 'ocean2.jpg'], hud: ['PRJ_02 · GALLE', '95+ CAM'],
    loc: 'APARTMENT & HOTEL', title: 'Ocean Front Condominiums', kind: 'Integrated CCTV surveillance system',
    text: 'A 14-floor residential and hospitality development — lift lobbies, courtyard, gardens, boundaries and common areas, with centralised connectivity and recording.',
    kpis: [['95+', 'Cameras'], ['14', 'Floors'], ['2', 'NVRs'], ['2', 'Core switches']],
  },
  {
    images: ['agro1.jpg', 'agro2.jpg'], hud: ['PRJ_03 · HAPUTALE', '16 CAM'],
    loc: 'AGRICULTURAL', title: 'ICC Agro Farm', kind: 'High-end solar & 4G CCTV surveillance',
    text: 'A Hikvision wireless system combining solar-powered and 4G-enabled cameras — reliable security without conventional wired power or cabling.',
    kpis: [['16', 'Cameras'], ['4G', 'Remote'], ['Solar', 'Off-grid'], ['Wireless', 'No cabling']],
  },
  {
    layout: 'third', images: ['alfred.jpg'], hud: ['PRJ_04 · RESIDENTIAL', '150+ CAM'], ongoing: true,
    loc: 'LUXURY RESIDENTIAL', title: 'ICC – Alfred House Residencies', kind: 'High-end CCTV surveillance & networking',
    text: 'Residential and common areas, access points and critical security zones, on a dedicated structured network for centralised CCTV connectivity.',
    kpis: [['150+', 'Cameras'], ['Net', 'Structured']],
  },
  {
    layout: 'third', images: ['iit.jpg'], hud: ['PRJ_05 · THELAWALA', '100+ CAM'], ongoing: true,
    loc: 'HIGHER EDUCATION', title: 'ICC – IIT University', kind: 'Integrated CCTV, PA & Cisco network',
    text: 'Surveillance for lecture halls and common areas, a public address system, and a robust Cisco-based network for the campus.',
    kpis: [['100+', 'Cameras'], ['Cisco', 'Network']],
  },
];

export const reasons = [
  { title: '20+ years of experience', text: 'Roots back to 2004 bring two decades of practical know-how.' },
  { title: 'Complete solutions', text: 'IT, CCTV, security, networking, printing and power under one roof.' },
  { title: 'Professional team', text: 'Experienced staff committed to quality installation and support.' },
  { title: 'Customised solutions', text: 'Designed around your environment, budget and operations.' },
  { title: 'Trusted brands', text: 'Recognised manufacturers and suppliers for dependable results.' },
  { title: 'Competitive pricing', text: 'Cost-effective without compromising reliability or service.' },
  { title: 'After-sales support', text: 'Maintenance, repairs and upgrades long after installation.' },
  { title: 'Long-term relationships', text: 'Reliable, responsive service that keeps customers with us.' },
];

// logo: file in public/img/clients/
export const clients = [
  { logo: 'icc', name: 'International Construction Consortium', sector: 'Construction' },
  { logo: 'mas', name: 'MAS Holdings – Lean Apparel Pallekele', sector: 'Apparel' },
  { logo: 'moe', name: 'Ministry of Education', sector: 'Government' },
  { logo: 'sltb', name: 'Sri Lanka Transport Board', sector: 'Transport' },
  { logo: 'queensbury', name: 'Queensbury Hospitals', sector: 'Healthcare' },
  { logo: 'mbsl', name: 'MBSL', sector: 'Finance' },
  { logo: 'cecb', name: 'CECB', sector: 'Engineering' },
  { logo: 'creative', name: 'Creative Software', sector: 'Software' },
  { logo: 'ocean', name: 'Oceanfront Condominiums', sector: 'Residential & hospitality' },
  { logo: 'iccagro', name: 'ICC Agro – Fresh Crop', sector: 'Agriculture' },
  { logo: 'jrj', name: 'J.R. Jayewardene Centre', sector: 'Institution' },
  { logo: 'mpcs', name: 'MPCS Kotapola', sector: 'Co-operative' },
];
export const alsoTrustedBy = ['IHRA – University of Colombo', 'ON House Villas – Weligama'];

// logo: file in public/img/brands/ ; bg: plate colour for logos with a solid background
export const brandRows = [
  {
    label: 'Security & networking',
    items: [
      { logo: 'hikvision', name: 'Hikvision' }, { logo: 'dahua', name: 'Dahua' }, { logo: 'ezviz', name: 'EZVIZ' },
      { logo: 'imou', name: 'Imou' }, { logo: 'hiksemi', name: 'HIKSEMI' }, { logo: 'redlink', name: 'Redlink' },
      { logo: 'cisco', name: 'Cisco' }, { logo: 'aruba', name: 'Aruba Networks' }, { logo: 'tplink', name: 'TP-Link' },
      { logo: 'prolink', name: 'Prolink' }, { logo: 'kingston', name: 'Kingston' }, { logo: 'verbatim', name: 'Verbatim' },
    ],
  },
  {
    label: 'Computing & peripherals',
    reverse: true,
    items: [
      { logo: 'apple', name: 'Apple' }, { logo: 'dell', name: 'Dell' }, { logo: 'hp', name: 'HP' },
      { logo: 'lenovo', name: 'Lenovo' }, { logo: 'asus', name: 'ASUS' }, { logo: 'msi', name: 'MSI' },
      { logo: 'nvidia', name: 'NVIDIA', bg: '#80ba08' }, { logo: 'canon', name: 'Canon' }, { logo: 'brother', name: 'Brother' },
      { logo: 'logitech', name: 'Logitech', bg: '#28e8cf' }, { logo: 'jbl', name: 'JBL', bg: '#ff6600' },
      { logo: 'microlab', name: 'Microlab' }, { logo: 'mi', name: 'Xiaomi Mi', bg: '#ff6800' },
    ],
  },
];

export const team = [
  { initials: 'SG', photo: 'samantha.jpg', name: 'Samantha Gamage', role: 'Managing Director', text: 'Strategic direction, business development, customer relationships and corporate management.' },
  { initials: 'LM', photo: 'lomitha.jpg', name: 'Lomitha Manudana', role: 'Director — Head of Operations', text: 'Operational management, project coordination, technical service delivery, installations and customer support.' },
  { initials: 'NN', photo: 'nemitha.jpg', name: 'Nemitha Nimdinu', role: 'Director — Southern Region', text: "Responsible for the company's work and clients in the Southern Region." },
];

export const environmentPoints = ['Energy-efficient technology solutions', 'Responsible e-waste handling & disposal', 'Equipment reuse where practical', 'Reducing electronic waste', 'Promoting sustainable technology'];

export const quoteServices = ['CCTV & security', 'Networking', 'Computers & IT products', 'UPS & power protection', 'Printers & toner', 'Repairs & maintenance', 'Customised IT solution', 'Custom software', 'Website / web app', 'Inventory management system', 'Other'];

// ── Software solutions (highlighted section) ─────────────────
export const software = {
  inventory: {
    tag: 'FLAGSHIP PRODUCT',
    title: 'Inventory Management System',
    text: 'Know exactly what you have, where it is and when to reorder. A complete stock, sales and purchasing system built for Sri Lankan shops, warehouses and multi-branch businesses.',
    features: [
      ['Real-time stock tracking', 'Live quantities across every store and warehouse'],
      ['Barcode & POS billing', 'Scan, bill and print receipts in seconds'],
      ['Low-stock alerts', 'Automatic reorder reminders before you run out'],
      ['Purchases & suppliers', 'GRNs, supplier records and purchase history'],
      ['Reports & dashboards', 'Sales, profit and stock-value reports at a glance'],
      ['Multi-branch & user roles', 'Control who can see and change what'],
    ],
  },
  custom: {
    title: 'Custom Software',
    text: 'Software designed around the way your business actually works — from internal tools and automation to complete business systems.',
    chips: ['Business systems', 'Process automation', 'Billing & HR tools', 'Integrations', 'Desktop & cloud', 'Ongoing support'],
  },
  web: {
    title: 'Web Development',
    text: 'Fast, modern, mobile-friendly websites and web applications that look great on every screen — just like this one.',
    chips: ['Company websites', 'Web applications', 'E-commerce', 'Responsive design', 'Hosting & domains', 'Maintenance'],
  },
  steps: ['Discover', 'Design', 'Develop', 'Deploy', 'Support'],
};
