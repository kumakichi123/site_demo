import type {
  CompanyData,
  HeroSlide,
  Location,
  NavItem,
  NewsItem,
  ServiceCard,
} from "@/data/company";
import { applyIndustryImages } from "@/data/industry-images";

const navigation: NavItem[] = [
  {
    labelJp: "品質方針",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "温井塗装の強み", href: "#concept" },
      { label: "資格者による施工", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "外壁塗装", href: "#service" },
      { label: "屋根塗装", href: "#service" },
      { label: "防水工事", href: "#service" },
    ],
  },
  {
    labelJp: "お知らせ",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "会社案内",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "会社概要", href: "#access" },
      { label: "所在地", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "ASAHIKAWA",
    titleLine2: "PAINT WORKS",
    subtitle: "旭川で外壁塗装・屋根塗装・防水工事を相談できます",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "EXTERIOR",
    titleLine2: "& ROOF",
    subtitle: "診断と見積りは無料。建物の状態に合わせて塗替えを進めます",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "QUALIFIED",
    titleLine2: "CRAFTSMANSHIP",
    subtitle: "一級建築塗装技能士を含む有資格者が施工品質を支えます",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "外壁塗装",
    titleEn: "EXTERIOR",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "屋根塗装",
    titleEn: "ROOF",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "防水工事",
    titleEn: "WATERPROOF",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "トップ",
    title: "外壁塗装・屋根塗装・防水工事の案内",
    href: "https://www.nukuitoso.com/",
  },
  {
    category: "業務内容",
    title: "塗装工事、防水工事、営業エリアの詳細",
    href: "https://www.nukuitoso.com/service",
  },
  {
    category: "塗装について",
    title: "選ばれる理由と塗装の役割",
    href: "https://www.nukuitoso.com/paint",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%AD%E5%B7%9D%E5%B8%82%E5%B7%A5%E6%A5%AD%E5%9B%A3%E5%9C%B04%E6%9D%A12%E4%B8%81%E7%9B%AE2-5";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "本社",
  postalCode: "078-8274",
  address: "北海道旭川市工業団地4条2丁目2-5",
  tel: "0166-36-5053",
  mapLink: mapQuery,
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "電話・メール窓口",
  postalCode: "",
  address: "診断・見積り無料。塗装工事と防水工事の相談を受け付けています。",
  tel: "0166-36-5053",
  email: "nukuitoso@lime.plala.or.jp",
  mapLink: "https://www.nukuitoso.com/",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "温井塗装",
  nameEn: "NUKUI TOSOU",
  corporateName: "株式会社温井塗装",
  copyrightName: "Nukui Tosou Co., Ltd.",
  region: "旭川",
  tagline:
    "旭川で外壁塗装、屋根塗装、防水工事を中心に建物の塗替えを支えます",
  phone: "0166-36-5053",
  hours: "お問い合わせ受付 9:00〜17:00",
  contactHref: "#access",
  siteTitle: "株式会社温井塗装｜旭川で外壁塗装・屋根塗装・防水工事を相談できる会社",
  siteDescription:
    "株式会社温井塗装は北海道旭川市を拠点に、一般建築塗装、外壁塗装、屋根塗装、防水工事、船舶塗装、各種焼付塗装などに対応しています。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "温井塗装の強み",
    headline: "外壁と屋根の塗替えを軸に\n幅広い塗装工事へ対応します。",
    body: [
      "株式会社温井塗装は旭川市を拠点に、一般建築塗装、内装塗装、外壁塗装、屋根塗装、塗替え工事、防水工事に対応しています。",
      "船舶塗装、各種焼付塗装、ブラスト工事も案内されており、戸建てからビル、マンションまで幅広い建物や設備の塗装を相談できます。",
      "一級建築塗装技能士をはじめ、二級橋梁塗装技能士、足場組立作業主任者、有機溶剤作業主任者などの資格保持者が在籍しています。",
    ],
    ctaHref: "#access",
    ctaLabel: "[会社名]に相談する",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "塗装工事の打ち合わせイメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "外壁塗装も屋根塗装も\n防水までまとめて相談できます。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "建物外装の点検と塗装工事のイメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessHq,
    model: accessContact,
  },
  social: {
    facebook: "",
    instagram: "",
  },
  footerColumns: [
    {
      heading: "塗装工事",
      links: [
        { label: "[会社名]の強み", href: "#concept" },
        { label: "外壁塗装", href: "#service" },
        { label: "屋根塗装", href: "#service", indent: true },
        { label: "防水工事", href: "#service", indent: true },
        { label: "お問い合わせ", href: "#access" },
        { label: "アクセス", href: "#access" },
      ],
    },
    {
      heading: "品質方針",
      links: [
        { label: "温井塗装の強み", href: "#concept" },
        { label: "資格者による施工", href: "#concept" },
        { label: "診断・見積り無料", href: "#access" },
      ],
    },
    {
      heading: "ご案内",
      links: [
        { label: "お知らせ", href: "#information" },
        { label: "業務内容", href: "https://www.nukuitoso.com/service" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "会社概要", href: "#access" },
        { label: "所在地", href: "#access" },
        { label: "電話・メール", href: "#access" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "お知らせ", href: "#information" },
    { label: "業務内容", href: "https://www.nukuitoso.com/service" },
    { label: "塗装について", href: "https://www.nukuitoso.com/paint" },
    { label: "お問い合わせ", href: "#access" },
    { label: "公式サイト", href: "https://www.nukuitoso.com/" },
  ],
}, "painting");
