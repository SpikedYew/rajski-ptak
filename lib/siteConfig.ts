export const siteConfig = {
  // Site Information
  siteName: "Studio Bloom & Blossom",
  tagline: "Gdzie Natura Spotyka Sztukę",
  description:
    "Tworzymy wspaniałe kompozycje kwiatowe na najważniejsze chwile w życiu. Od intymnych bukietów po wielkie uroczystości, realizujemy Twoje kwiatowe marzenia.",

  // SEO
  seo: {
    title: "Studio Bloom & Blossom - Profesjonalne Usługi Florystyczne",
    description:
      "Profesjonalne studio florystyczne specjalizujące się w bukietach ślubnych, aranżacjach na wydarzenia i niestandardowych kompozycjach kwiatowych. Obsługujemy społeczność świeżymi, pięknymi kwiatami.",
    keywords: "florystyka, kwiaty ślubne, bukiety, kompozycje kwiatowe, dostawa kwiatów, kwiaty na wydarzenia",
  },

  // Colors (Tailwind classes)
  colors: {
    primary: "rose-300",
    primaryDark: "rose-400",
    secondary: "purple-200",
    accent: "emerald-200",
    background: "rose-50",
    text: "slate-800",
    textLight: "slate-600",
    white: "white",
  },

  // Typography
  fonts: {
    heading: "font-playfair",
    body: "font-inter",
  },

  // Hero Section
  hero: {
    title: "Studio Bloom & Blossom",
    subtitle: "Gdzie Natura Spotyka Sztukę",
    description: "Tworzymy wspaniałe kompozycje kwiatowe na najważniejsze chwile w życiu",
    ctaText: "Zobacz Nasze Prace",
    ctaLink: "#gallery",
    backgroundImage: "/placeholder.svg?height=800&width=1200",
  },

  // About Section
  about: {
    title: "Nasza Historia",
    content:
      "Założone z pasją do wnoszenia piękna natury do wnętrz, Studio Bloom & Blossom od ponad dekady tworzy zapierające dech w piersiach kompozycje kwiatowe. Nasz zespół wykwalifikowanych florystów łączy tradycyjne techniki z nowoczesną wrażliwością projektową, aby tworzyć unikalne dzieła, które opowiadają Twoją historię poprzez kwiaty.",
    image: "/placeholder.svg?height=400&width=600",
    stats: [
      { number: "500+", label: "Szczęśliwych Par" },
      { number: "1000+", label: "Stworzonych Wydarzeń" },
      { number: "10+", label: "Lat Doświadczenia" },
    ],
  },

  // Gallery
  gallery: {
    title: "Nasza Galeria",
    subtitle: "Kolekcja naszych najlepszych prac",
    images: [
      {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Bukiet ślubny z róż i peonii",
        category: "Ślub",
      },
      {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Kompozycja na wydarzenie korporacyjne",
        category: "Korporacyjne",
      },
      { src: "/placeholder.svg?height=400&width=300", alt: "Aranżacja na urodziny", category: "Urodziny" },
      { src: "/placeholder.svg?height=400&width=300", alt: "Kwiaty kondolencyjne", category: "Kondolencje" },
      { src: "/placeholder.svg?height=400&width=300", alt: "Wiosenny bukiet sezonowy", category: "Sezonowe" },
      {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Romantyczna kompozycja rocznicowa",
        category: "Rocznica",
      },
    ],
  },

  // Services
  services: {
    title: "Nasze Usługi",
    subtitle: "Dostosowane rozwiązania kwiatowe na każdą okazję",
    items: [
      {
        name: "Pakiety Ślubne",
        description:
          "Kompletny projekt kwiatowy na ślub obejmujący bukiety panny młodej, kompozycje centralne i dekoracje ceremonii",
        price: "Od 800 zł",
        features: [
          "Bukiet panny młodej",
          "Bukiety druhen",
          "Kompozycje centralne",
          "Łuk ceremonialny",
          "Konsultacja w cenie",
        ],
      },
      {
        name: "Aranżacje Eventowe",
        description: "Niestandardowe projekty kwiatowe na wydarzenia korporacyjne, imprezy i specjalne uroczystości",
        price: "Od 200 zł",
        features: [
          "Kompozycje centralne",
          "Aranżacje powitalne",
          "Dekoracje sceniczne",
          "Dostawa w cenie",
          "Usługa ustawienia",
        ],
      },
      {
        name: "Codzienne Bukiety",
        description: "Piękne bukiety wiązane ręcznie, idealne na prezenty lub dla siebie",
        price: "Od 45 zł",
        features: [
          "Kwiaty sezonowe",
          "Wiązanie ręczne",
          "Instrukcje pielęgnacji",
          "Pakowanie prezentowe",
          "Dostawa tego samego dnia",
        ],
      },
      {
        name: "Usługa Subskrypcji",
        description: "Cotygodniowe lub comiesięczne dostawy świeżych kwiatów, aby rozjaśnić Twoją przestrzeń",
        price: "Od 35 zł/tydzień",
        features: [
          "Dostawa cotygodniowa",
          "Różnorodność sezonowa",
          "Elastyczne planowanie",
          "Opcja pomijania tygodni",
          "Kwiaty premium",
        ],
      },
    ],
  },

  // Contact
  contact: {
    title: "Skontaktuj się z Nami",
    subtitle: "Stwórzmy razem coś pięknego",
    info: {
      address: "ul. Ogrodowa 123, 00-001 Warszawa",
      phone: "(22) 123-KWIATY",
      email: "kontakt@bloomblossom.pl",
      hours: "Pon-Sob: 9:00-18:00, Nie: 10:00-16:00",
    },
    social: {
      instagram: "https://instagram.com/bloomblossom",
      facebook: "https://facebook.com/bloomblossom",
      pinterest: "https://pinterest.com/bloomblossom",
    },
  },

  // Navigation
  navigation: [
    { name: "Strona Główna", href: "#hero" },
    { name: "O Nas", href: "#about" },
    { name: "Galeria", href: "#gallery" },
    { name: "Usługi", href: "#services" },
    { name: "Kontakt", href: "#contact" },
  ],
}
