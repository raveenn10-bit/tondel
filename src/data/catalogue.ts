export type CatalogueGroup = {
  name: string;
  items: string[];
};

export type CatalogueDepartment = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  image: string;
  brands: string[];
  groups: CatalogueGroup[];
};

export const catalogueDepartments: CatalogueDepartment[] = [
  {
    number: "01",
    slug: "mobile-phones",
    title: "Mobile Phones",
    summary: "Flagship, foldable, value and business smartphones plus original accessories.",
    image: "/images/catalogue/mobile-phones.webp",
    brands: ["Apple", "Samsung", "Xiaomi", "Redmi", "POCO", "vivo", "OPPO", "OnePlus", "HONOR", "Huawei", "realme", "Infinix", "TECNO"],
    groups: [
      { name: "Apple iPhone", items: ["iPhone 11 / 12 / 13 / 14 / 15 / 16 / 17 series", "Pro and Pro Max models", "Plus models", "iPhone Air", "iPhone SE (older stock)", "Original Apple accessories"] },
      { name: "Samsung Galaxy", items: ["Galaxy S series", "Galaxy Z Fold series", "Galaxy Z Flip series", "Galaxy A series", "Galaxy M series", "Galaxy F series", "Galaxy Tab series"] },
      { name: "Xiaomi / Redmi / POCO", items: ["Xiaomi flagship series", "Redmi Note series", "Redmi Number series", "Redmi A and C series", "Redmi K series", "POCO F series", "POCO X series", "POCO M series"] },
      { name: "vivo and iQOO", items: ["vivo X series", "vivo V series", "vivo Y series", "vivo S series", "iQOO series"] },
      { name: "More phone brands", items: ["OPPO", "OnePlus", "HONOR", "Huawei", "realme", "Infinix", "TECNO"] },
      { name: "Mobile accessories", items: ["Chargers", "Data cables", "Power banks", "Phone cases", "Screen protectors", "Wireless chargers", "Car mounts"] },
    ],
  },
  {
    number: "02",
    slug: "laptops-computers",
    title: "Laptops & Computers",
    summary: "Mac, Windows, business, creator and gaming systems with upgrades and accessories.",
    image: "/images/catalogue/laptops-computers.webp",
    brands: ["Apple", "ASUS", "HP", "Dell", "Lenovo", "Acer", "MSI", "Huawei", "HONOR", "Xiaomi"],
    groups: [
      { name: "Apple", items: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"] },
      { name: "ASUS", items: ["VivoBook", "ZenBook", "ExpertBook", "TUF Gaming", "ROG"] },
      { name: "HP", items: ["Pavilion", "ProBook", "EliteBook", "Envy", "Spectre", "Victus", "Omen"] },
      { name: "Dell", items: ["Inspiron", "Latitude", "XPS", "Precision", "Vostro", "Alienware"] },
      { name: "Lenovo", items: ["ThinkPad", "IdeaPad", "Yoga", "Legion", "LOQ"] },
      { name: "Acer", items: ["Aspire", "Swift", "TravelMate", "Nitro", "Predator"] },
      { name: "Huawei / HONOR / Xiaomi", items: ["Huawei MateBook D", "Huawei MateBook X", "Huawei MateBook", "HONOR MagicBook X", "HONOR MagicBook Pro", "RedmiBook", "Xiaomi Book"] },
      { name: "Computer systems", items: ["Desktop PCs", "All-in-one PCs", "Monitors", "Business workstations", "Gaming desktops"] },
      { name: "Laptop accessories", items: ["Laptop batteries", "Laptop chargers", "Cooling fans", "Laptop bags", "Laptop stands", "USB hubs", "Docking stations"] },
    ],
  },
  {
    number: "03",
    slug: "tablets-wearables",
    title: "Tablets & Smartwatches",
    summary: "Tablets, smartwatches and fitness wearables for work, health and entertainment.",
    image: "/images/catalogue/tablets-wearables.webp",
    brands: ["Apple", "Samsung", "Xiaomi", "Lenovo", "Huawei", "Amazfit"],
    groups: [
      { name: "Tablets", items: ["Apple iPad", "Samsung Galaxy Tab", "Xiaomi Pad", "Lenovo Tab", "Huawei MatePad", "Tablet keyboards", "Styluses and covers"] },
      { name: "Smartwatches", items: ["Apple Watch", "Samsung Galaxy Watch", "Huawei Watch", "Amazfit", "Xiaomi Watch", "Fitness bands", "Watch straps and chargers"] },
    ],
  },
  {
    number: "04",
    slug: "printers-scanners",
    title: "Printers & Scanners",
    summary: "Home, office, photo, receipt and large-format printing with genuine supplies.",
    image: "/images/catalogue/printers-scanners.webp",
    brands: ["Epson", "Canon", "HP", "Brother", "Pantum", "Fujifilm", "Kyocera", "Ricoh", "Xerox", "Konica Minolta", "Toshiba", "G&G"],
    groups: [
      { name: "Epson range", items: ["EcoTank L series", "EcoTank M series", "WorkForce series", "Expression series", "Photo printers", "A3 printers", "Large-format printers", "Receipt printers", "Dot matrix printers", "Document scanners", "Projectors"] },
      { name: "Other printer brands", items: ["Canon", "HP", "Brother", "Pantum", "Lenovo", "Fujifilm", "Kyocera", "Ricoh", "Xerox", "Konica Minolta", "Toshiba", "G&G"] },
      { name: "Printer supplies", items: ["Original ink bottles", "Ink cartridges", "Toner cartridges", "Drum units", "Print heads", "Maintenance boxes", "Waste ink pads", "Printer cables", "Continuous ink systems", "Sublimation ink and paper", "Thermal paper rolls"] },
    ],
  },
  {
    number: "05",
    slug: "cctv-security",
    title: "CCTV & Security",
    summary: "Complete surveillance, access control and smart security systems.",
    image: "/images/catalogue/cctv-security.webp",
    brands: ["Hikvision", "Dahua", "Uniview", "Tiandy", "EZVIZ", "IMOU", "Reolink", "Xiaomi", "TP-Link Tapo"],
    groups: [
      { name: "Cameras", items: ["HD analog cameras", "IP cameras", "Wi-Fi cameras", "PTZ cameras", "4G SIM cameras", "Solar-powered cameras", "Color night-vision cameras", "Thermal cameras", "Dome cameras", "Bullet cameras", "Turret cameras", "Doorbell cameras"] },
      { name: "Recording & networking", items: ["NVR recorders", "DVR recorders", "CCTV hard disks", "PoE switches", "Network switches", "CCTV monitors", "CCTV cables and connectors", "Power supplies and backup systems"] },
      { name: "Access & alarms", items: ["Video door phones", "Access control systems", "Face recognition systems", "Fingerprint attendance machines", "Alarm systems"] },
    ],
  },
  {
    number: "06",
    slug: "dji-drones",
    title: "DJI Drones & Creator Gear",
    summary: "Consumer, enterprise and agricultural drones plus Osmo, Ronin, Mic and Power ranges.",
    image: "/images/catalogue/dji-creator.webp",
    brands: ["DJI"],
    groups: [
      { name: "Consumer drones", items: ["Mavic series", "Mini series", "Air series", "Neo series", "Flip series"] },
      { name: "Enterprise & agriculture", items: ["Matrice series", "Matrice 4 series", "Mavic 3 Enterprise", "Matrice 350 RTK", "Agras agricultural drones", "Dock automated systems", "Zenmuse payloads", "Thermal cameras"] },
      { name: "Osmo cameras & gimbals", items: ["Osmo Pocket series", "Osmo Action series", "Osmo 360", "Osmo Mobile series", "Osmo Nano"] },
      { name: "Professional stabilization", items: ["Ronin series", "RS series", "RSC series", "DJI Focus systems", "Camera transmission systems", "Professional camera accessories"] },
      { name: "Microphones", items: ["DJI Mic series", "DJI Mic Mini", "DJI Mic 2", "Wireless transmitters", "Wireless receivers", "Lavalier microphones"] },
      { name: "Accessories & spares", items: ["Intelligent flight batteries", "Charging hubs", "Propellers", "Remote controllers", "ND filters", "Wide-angle lenses", "Carrying bags", "Landing pads", "Gimbal accessories", "Drone cases", "Charging cables", "Replacement parts"] },
    ],
  },
  {
    number: "07",
    slug: "action-cameras",
    title: "360° & Action Cameras",
    summary: "Insta360, GoPro and creator camera systems with mounts, protection and audio accessories.",
    image: "/images/catalogue/action-cameras.webp",
    brands: ["Insta360", "GoPro", "DJI"],
    groups: [
      { name: "Insta360 range", items: ["X series 360 cameras", "Ace series action cameras", "GO series wearable cameras", "ONE RS modular cameras", "Link series webcams", "Flow smartphone gimbals"] },
      { name: "Camera accessories", items: ["GPS preview remotes", "Motorcycle camera accessories", "Invisible selfie sticks", "Camera mounts", "Protective cases", "Lens guards", "Batteries and charging hubs", "Microphone accessories", "Dive cases", "Memory cards"] },
    ],
  },
  {
    number: "08",
    slug: "computer-components",
    title: "Computer Components & Accessories",
    summary: "Performance components, storage, peripherals, hubs and upgrade parts.",
    image: "/images/catalogue/computer-components.webp",
    brands: ["Intel", "AMD", "NVIDIA", "ASUS", "Gigabyte", "MSI", "Kingston", "Samsung", "Crucial", "UGREEN", "Baseus", "Anker", "Orico"],
    groups: [
      { name: "Core components", items: ["Graphics cards", "Motherboards", "Processors", "RAM", "SSD", "HDD", "Cooling fans", "Power supplies", "PC cases"] },
      { name: "Peripherals", items: ["Monitors", "Keyboards", "Mice", "Webcams", "Speakers", "Headsets", "Gaming controllers"] },
      { name: "Connectivity", items: ["HDD enclosures", "USB hubs", "Docking stations", "HDMI cables", "USB cables", "Network cables", "Adapters"] },
    ],
  },
  {
    number: "09",
    slug: "networking",
    title: "Networking Equipment",
    summary: "Reliable Wi-Fi, switching and business networking for home and office.",
    image: "/images/catalogue/networking.webp",
    brands: ["TP-Link", "Ruijie", "Huawei", "ZTE", "Tenda", "Mercusys", "Ubiquiti"],
    groups: [
      { name: "Home & business networking", items: ["Wi-Fi routers", "4G and 5G routers", "Network switches", "PoE switches", "Access points", "Mesh Wi-Fi systems", "Range extenders", "Network adapters", "Outdoor CPE", "Networking cables and tools"] },
    ],
  },
  {
    number: "10",
    slug: "audio-smart-home",
    title: "Audio & Smart Home",
    summary: "Personal audio, speakers, smart locks, sensors, lighting and cleaning devices.",
    image: "/images/catalogue/audio-smart-home.webp",
    brands: ["JBL", "Edifier", "Soundcore", "Xiaomi", "Aqara", "Roborock", "Dreame"],
    groups: [
      { name: "Audio", items: ["Headphones", "True wireless earbuds", "Bluetooth speakers", "Party speakers", "Computer speakers", "Microphones", "Audio cables"] },
      { name: "Smart home", items: ["Smart locks", "Smart sensors", "Smart bulbs", "Smart switches", "Robot cleaners", "Vacuum cleaners", "Smart hubs", "Smart cameras"] },
    ],
  },
  {
    number: "11",
    slug: "power-products",
    title: "Power, Solar & Backup",
    summary: "Portable energy, battery backup, charging, solar and inverter solutions.",
    image: "/images/catalogue/power-products.webp",
    brands: ["DJI Power", "Anker", "Baseus", "UGREEN"],
    groups: [
      { name: "Power products", items: ["UPS systems", "Portable power stations", "Solar generators", "Batteries", "Solar panels", "Inverters", "Power banks", "GaN chargers", "Charging hubs", "Backup power accessories"] },
    ],
  },
  {
    number: "12",
    slug: "office-pos",
    title: "Office & POS Equipment",
    summary: "Business equipment for sales counters, offices, classrooms and meeting rooms.",
    image: "/images/catalogue/office-pos.webp",
    brands: ["Epson", "Zebra", "Honeywell", "Sunmi", "HP", "Canon"],
    groups: [
      { name: "POS equipment", items: ["POS terminals", "Barcode scanners", "Thermal receipt printers", "Cash drawers", "Customer displays", "Label printers", "Thermal paper rolls"] },
      { name: "Office equipment", items: ["Projectors", "Document scanners", "Webcams", "Shredders", "Fingerprint machines", "Conference accessories", "Business monitors"] },
      { name: "Gaming & storage", items: ["PlayStation", "Xbox", "Gaming PCs", "Controllers", "SSD", "HDD", "USB drives", "Memory cards"] },
    ],
  },
];

export const catalogueSeriesCount = catalogueDepartments.reduce(
  (total, department) => total + department.groups.reduce((groupTotal, group) => groupTotal + group.items.length, 0),
  0,
);
