import { Product, ProductCategory, Testimonial } from "@/lib/types";

export const storeInfo = {
  name: "Poshak",
  tagline: "Dress the Divine – Poshak for Your Deities"
};

export const deityCategories = [
  {
    slug: "krishna",
    name: "Laddu Gopal / Krishna",
    description: "Peetambar poshak, mukut, bansuri and festive shringar.",
    image: "https://picsum.photos/seed/deity-krishna-poshak/900/700"
  },
  {
    slug: "radha",
    name: "Radha Rani",
    description: "Graceful lehenga sets with floral and pearl accents.",
    image: "https://picsum.photos/seed/deity-radha-shringar/900/700"
  },
  {
    slug: "ganesh",
    name: "Shree Ganesh",
    description: "Velvet vastra, festive crowns, and pooja ornaments.",
    image: "https://picsum.photos/seed/deity-ganesh-alankar/900/700"
  },
  {
    slug: "lakshmi",
    name: "Maa Lakshmi",
    description: "Gold-toned adornments and auspicious red ensembles.",
    image: "https://picsum.photos/seed/deity-lakshmi-poshak/900/700"
  },
  {
    slug: "shiva",
    name: "Mahadev",
    description: "Elegant rudraksha-inspired malas and vastra sets.",
    image: "https://picsum.photos/seed/deity-shiva-shringar/900/700"
  },
  {
    slug: "durga",
    name: "Maa Durga",
    description: "Regal festive outfits with zari and temple jewelry.",
    image: "https://picsum.photos/seed/deity-durga-ornaments/900/700"
  }
] as const;

export const productTypeOptions: { value: ProductCategory; label: string }[] = [
  { value: "clothes", label: "Clothes" },
  { value: "ornaments", label: "Ornaments" },
  { value: "full-set", label: "Full Sets" },
  { value: "crowns-mukut", label: "Crowns / Mukut" },
  { value: "jewelry", label: "Jewelry" }
];

export const sizeOptions = ['6-8"', '8-10"', '10-12"', '12-15"'] as const;

export const products: Product[] = [
  {
    id: 101,
    slug: "laddu-gopal-yellow-silk-poshak-set-with-mukut",
    name: "Laddu Gopal Yellow Silk Poshak Set with Mukut",
    deity: "Krishna / Laddu Gopal",
    deitySlug: "krishna",
    category: "full-set",
    price: 1299,
    size: ['6-8"', '8-10"', '10-12"'],
    material: "Banarasi silk, zari border, kundan-stone mukut",
    description:
      "A bright peetambar-inspired poshak set handcrafted for daily and festive seva. The soft inner lining keeps the vastra gentle for murti dressing. Every stitch is prepared with devotion for your beloved Kanha.",
    image: "/1.jpg",
    images: [
      "/1.jpg"
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    createdAt: "2026-03-19"
  },
  {
    id: 102,
    slug: "radha-rani-rose-velvet-lehenga-poshak",
    name: "Radha Rani Rose Velvet Lehenga Poshak",
    deity: "Radha Rani",
    deitySlug: "radha",
    category: "clothes",
    price: 1499,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Velvet, gota-patti lace, pearl trims",
    description:
      "This graceful lehenga-style poshak adds a soft festive look to Radha Rani darshan. Fine pearl detailing enriches the silhouette without overpowering the murti. Crafted to honor simplicity, beauty, and bhakti.",
    image: "/2.jpg",
    images: [
      "/2.jpg"
    ],
    inStock: true,
    featured: true,
    createdAt: "2026-03-14"
  },
  {
    id: 103,
    slug: "ganesh-maroon-zari-festive-vastra",
    name: "Ganesh Maroon Zari Festive Vastra",
    deity: "Shree Ganesh",
    deitySlug: "ganesh",
    category: "clothes",
    price: 899,
    size: ['6-8"', '8-10"', '10-12"'],
    material: "Silk-blend brocade, zari embroidery",
    description:
      "A rich maroon vastra set that reflects auspicious festive warmth. Easy-tie pattern supports smooth draping during daily pooja and special vrat days. Made with reverence for Ganpati Bappa seva.",
    image: "/3.jpg",
    images: [
      "/3.jpg"
    ],
    inStock: true,
    bestSeller: true,
    createdAt: "2026-03-01"
  },
  {
    id: 104,
    slug: "lakshmi-gold-thread-ornament-kit",
    name: "Maa Lakshmi Gold Thread Ornament Kit",
    deity: "Maa Lakshmi",
    deitySlug: "lakshmi",
    category: "ornaments",
    price: 1699,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Gold-tone alloy, mirror stones, silk thread",
    description:
      "A complete ornament kit with necklace, waist-belt, and earrings for shubh alankar. Gold accents are balanced for an elegant temple-style look at home mandirs. Designed to elevate Lakshmi Pooja darshan beautifully.",
    image: "/4.webp",
    images: [
      "/4.webp"
    ],
    inStock: true,
    featured: true,
    createdAt: "2026-02-18"
  },
  {
    id: 105,
    slug: "radha-krishna-royal-blue-zari-full-set",
    name: "Radha-Krishna Royal Blue Zari Full Set",
    deity: "Radha-Krishna",
    deitySlug: "radha-krishna",
    category: "full-set",
    price: 2499,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Pure silk, zari motifs, pearl-lace finish",
    description:
      "A coordinated couple set for Radha-Krishna with matching zari patterns and ornaments. The premium drape and festive color make it ideal for Janmashtami and daily shringar alike. Handcrafted by artisans devoted to temple aesthetics.",
    image: "/5.jpg",
    images: [
      "/5.jpg"
    ],
    inStock: true,
    bestSeller: true,
    featured: true,
    createdAt: "2026-04-01"
  },
  {
    id: 106,
    slug: "maha-shivratri-shiva-rudraksha-mala-set",
    name: "Mahadev Rudraksha-Inspired Mala Set",
    deity: "Shiva",
    deitySlug: "shiva",
    category: "jewelry",
    price: 799,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Wood beads, antique-finish caps, cotton thread",
    description:
      "A serene mala set inspired by traditional rudraksha styling for Mahadev murti. Lightweight and balanced proportions keep the alankar graceful for everyday darshan. Suitable for Shivratri and regular abhishek seva settings.",
    image: "/6.webp",
    images: [
      "/6.webp"
    ],
    inStock: true,
    createdAt: "2026-01-22"
  },
  {
    id: 107,
    slug: "durga-rani-red-gold-crown-mukut",
    name: "Maa Durga Red-Gold Crown Mukut",
    deity: "Maa Durga",
    deitySlug: "durga",
    category: "crowns-mukut",
    price: 1199,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Hand-embossed fiber base, kundan and sequins",
    description:
      "A regal mukut designed with Durga utsav tones of red and gold. The inner padding supports secure, comfortable placement on idols during daily and festive worship. Finished carefully to preserve the sanctity of your altar.",
    image: "/7.webp",
    images: [
      "/7.webp"
    ],
    inStock: true,
    featured: true,
    createdAt: "2026-03-28"
  },
  {
    id: 108,
    slug: "sai-baba-cream-cotton-vastra-set",
    name: "Sai Baba Cream Cotton Vastra Set",
    deity: "Sai Baba",
    deitySlug: "sai-baba",
    category: "clothes",
    price: 699,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Soft cotton, satin trims",
    description:
      "A simple and serene cotton vastra for Sai Baba idols in mandir and home setups. Breathable material and clean tailoring support easy daily dressing and maintenance. Made for devotees who prefer calm, sattvic elegance.",
    image: "/8.webp",
    images: [
      "/8.webp"
    ],
    inStock: true,
    createdAt: "2026-02-07"
  },
  {
    id: 109,
    slug: "krishna-mor-pankh-premium-mukut",
    name: "Krishna Mor-Pankh Premium Mukut",
    deity: "Krishna / Laddu Gopal",
    deitySlug: "krishna",
    category: "crowns-mukut",
    price: 999,
    size: ['6-8"', '8-10"', '10-12"'],
    material: "Velvet base, faux mor-pankh, kundan",
    description:
      "A peacock-inspired mukut that complements festive Kanha poshak sets. Structured design offers stable fit while keeping the visual light and devotional. An ideal crown for Janmashtami, Annakut, and daily shringar.",
    image: "/9.webp",
    images: [
      "/9.webp"
    ],
    inStock: true,
    bestSeller: true,
    createdAt: "2026-03-22"
  },
  {
    id: 110,
    slug: "radha-pearl-kundan-necklace-set",
    name: "Radha Pearl Kundan Necklace Set",
    deity: "Radha Rani",
    deitySlug: "radha",
    category: "jewelry",
    price: 1399,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Pearls, kundan stones, alloy clasp",
    description:
      "A refined necklace and earring set styled for Radha Rani alankar. The pearl-kundan balance keeps the look devotional, graceful, and festive. Works beautifully with both pastel and deep-tone poshaks.",
    image: "/10.jpg",
    images: [
      "/10.jpg"
    ],
    inStock: true,
    createdAt: "2026-02-26"
  },
  {
    id: 111,
    slug: "ganesh-festive-shringar-full-set",
    name: "Ganesh Festival Shringar Full Set",
    deity: "Shree Ganesh",
    deitySlug: "ganesh",
    category: "full-set",
    price: 2199,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Silk brocade, lace, crown and jewelry combo",
    description:
      "A complete Ganesh shringar pack including vastra, crown, and matching ornaments. Coordinated tones create a balanced festive presentation for Ganesh Chaturthi and special poojas. Thoughtfully assembled for effortless seva.",
    image: "https://picsum.photos/seed/ganesh-fullset-111/1200/1200",
    images: [
      "https://picsum.photos/seed/ganesh-fullset-111/1200/1200",
      "https://picsum.photos/seed/ganesh-fullset-111-b/1200/1200",
      "https://picsum.photos/seed/ganesh-fullset-111-c/1200/1200"
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    createdAt: "2026-04-06"
  },
  {
    id: 112,
    slug: "lakshmi-pink-lotus-silk-poshak",
    name: "Maa Lakshmi Pink Lotus Silk Poshak",
    deity: "Maa Lakshmi",
    deitySlug: "lakshmi",
    category: "clothes",
    price: 1199,
    size: ['6-8"', '8-10"', '10-12"'],
    material: "Silk satin, lotus motifs, zari edging",
    description:
      "Lotus-toned silk poshak inspired by shubh Lakshmi worship traditions. Gentle pleats and smooth finish make daily draping easy and elegant. Handcrafted to bring warmth and grace to Diwali and Friday poojas.",
    image: "https://picsum.photos/seed/lakshmi-clothes-112/1200/1200",
    images: [
      "https://picsum.photos/seed/lakshmi-clothes-112/1200/1200",
      "https://picsum.photos/seed/lakshmi-clothes-112-b/1200/1200",
      "https://picsum.photos/seed/lakshmi-clothes-112-c/1200/1200"
    ],
    inStock: true,
    createdAt: "2026-03-04"
  },
  {
    id: 113,
    slug: "shiv-parvati-temple-jewelry-combo",
    name: "Shiv-Parvati Temple Jewelry Combo",
    deity: "Shiva",
    deitySlug: "shiva",
    category: "jewelry",
    price: 1899,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Temple-finish alloy, pearl drops",
    description:
      "A traditional jewelry combo inspired by classic temple alankar styles. The set offers a harmonious look for Shiv-Parvati murtis during festivals and regular worship. Lightweight composition keeps handling simple during seva.",
    image: "https://picsum.photos/seed/shiva-jewel-113/1200/1200",
    images: [
      "https://picsum.photos/seed/shiva-jewel-113/1200/1200",
      "https://picsum.photos/seed/shiva-jewel-113-b/1200/1200",
      "https://picsum.photos/seed/shiva-jewel-113-c/1200/1200"
    ],
    inStock: true,
    createdAt: "2026-01-30"
  },
  {
    id: 114,
    slug: "durga-navratri-zari-lehenga-set",
    name: "Maa Durga Navratri Zari Lehenga Set",
    deity: "Maa Durga",
    deitySlug: "durga",
    category: "clothes",
    price: 1599,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Velvet blend, zari floral motifs",
    description:
      "A festive lehenga-style poshak in rich Navratri tones for Durga Maa idols. The zari work adds dignified radiance while preserving a devotional look. Ideal for Navratri, Ashtami, and daily temple offerings.",
    image: "https://picsum.photos/seed/durga-clothes-114/1200/1200",
    images: [
      "https://picsum.photos/seed/durga-clothes-114/1200/1200",
      "https://picsum.photos/seed/durga-clothes-114-b/1200/1200",
      "https://picsum.photos/seed/durga-clothes-114-c/1200/1200"
    ],
    inStock: true,
    featured: true,
    createdAt: "2026-03-11"
  },
  {
    id: 115,
    slug: "sai-baba-gold-border-shawl",
    name: "Sai Baba Gold Border Shawl",
    deity: "Sai Baba",
    deitySlug: "sai-baba",
    category: "ornaments",
    price: 599,
    size: ['8-10"', '10-12"', '12-15"'],
    material: "Cotton-silk shawl, zari thread border",
    description:
      "A dignified shawl with subtle golden border to elevate Sai Baba darshan. Soft drape and lightweight construction make it perfect for everyday dressing. Crafted for devotees who value calm elegance and comfort.",
    image: "https://picsum.photos/seed/saibaba-ornament-115/1200/1200",
    images: [
      "https://picsum.photos/seed/saibaba-ornament-115/1200/1200",
      "https://picsum.photos/seed/saibaba-ornament-115-b/1200/1200",
      "https://picsum.photos/seed/saibaba-ornament-115-c/1200/1200"
    ],
    inStock: true,
    createdAt: "2026-02-15"
  },
  {
    id: 116,
    slug: "laddu-gopal-cotton-dailywear-poshak-pack-of-3",
    name: "Laddu Gopal Cotton Dailywear Poshak (Pack of 3)",
    deity: "Krishna / Laddu Gopal",
    deitySlug: "krishna",
    category: "clothes",
    price: 999,
    size: ['6-8"', '8-10"'],
    material: "Pure cotton, printed trims",
    description:
      "A practical daily seva pack featuring three comfortable cotton poshaks for Kanha. Easy to wash and quick to dress, ideal for routine bhog and aarti schedules. Designed for devotional simplicity and regular use.",
    image: "https://picsum.photos/seed/krishna-clothes-116/1200/1200",
    images: [
      "https://picsum.photos/seed/krishna-clothes-116/1200/1200",
      "https://picsum.photos/seed/krishna-clothes-116-b/1200/1200",
      "https://picsum.photos/seed/krishna-clothes-116-c/1200/1200"
    ],
    inStock: true,
    bestSeller: true,
    createdAt: "2026-03-09"
  },
  {
    id: 117,
    slug: "radha-krishna-premium-janmashtami-shringar-box",
    name: "Radha-Krishna Premium Janmashtami Shringar Box",
    deity: "Radha-Krishna",
    deitySlug: "radha-krishna",
    category: "full-set",
    price: 3999,
    size: ['10-12"', '12-15"'],
    material: "Banarasi silk, pearl jewelry, velvet mukut, flute",
    description:
      "Our premium Janmashtami box includes coordinated poshak, ornaments, and accessories for divine couple shringar. Each piece is selected for harmony in color, texture, and devotional presentation. A complete festive solution for special darshan.",
    image: "https://picsum.photos/seed/rk-premium-117/1200/1200",
    images: [
      "https://picsum.photos/seed/rk-premium-117/1200/1200",
      "https://picsum.photos/seed/rk-premium-117-b/1200/1200",
      "https://picsum.photos/seed/rk-premium-117-c/1200/1200"
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    createdAt: "2026-04-09"
  },
  {
    id: 118,
    slug: "ganesh-silver-tone-anklet-and-kamarbandh",
    name: "Ganesh Silver-Tone Anklet & Kamarbandh",
    deity: "Shree Ganesh",
    deitySlug: "ganesh",
    category: "ornaments",
    price: 749,
    size: ['6-8"', '8-10"', '10-12"'],
    material: "Silver-tone alloy, ghungroo bead accents",
    description:
      "A delicate ornament pair crafted to complement Ganesh vastra sets with a bright silver finish. Minimal ghungroo accents add charm while keeping the look respectful and balanced. Great for weekly pooja and special celebrations.",
    image: "https://picsum.photos/seed/ganesh-ornament-118/1200/1200",
    images: [
      "https://picsum.photos/seed/ganesh-ornament-118/1200/1200",
      "https://picsum.photos/seed/ganesh-ornament-118-b/1200/1200",
      "https://picsum.photos/seed/ganesh-ornament-118-c/1200/1200"
    ],
    inStock: true,
    createdAt: "2026-02-21"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Vrindavan",
    quote:
      "The Laddu Gopal poshak felt truly premium and very easy to dress. Packaging was respectful and arrived on time before Janmashtami."
  },
  {
    id: 2,
    name: "Raghav Joshi",
    city: "Pune",
    quote:
      "We ordered a Ganesh shringar full set and the quality exceeded expectations. The colors looked even better in our mandir."
  },
  {
    id: 3,
    name: "Anjali Iyer",
    city: "Chennai",
    quote:
      "Beautiful finishing, soft fabric, and devotional craftsmanship. Poshak has become my go-to store for festival alankar."
  }
];

export const whyChoosePoints = [
  {
    title: "Handcrafted with Bhakti",
    description: "Every design is prepared with devotional intent and fine artisan care."
  },
  {
    title: "Respectful Quality Checks",
    description: "Each piece is inspected for fit, finish, and temple-appropriate presentation."
  },
  {
    title: "Fast Delivery Across India",
    description: "Quick dispatch for festivals, vrat dates, and special mandir occasions."
  }
];
