import {
  company as baseCompany,
  type CompanyData,
  type HeroSlide,
  type Location,
  type NavItem,
  type NewsItem,
  type ServiceCard,
} from "@/data/company";
import { applyIndustryImages } from "@/data/industry-images";

const navigation: NavItem[] = [
  {
    labelJp: "事業案内",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "消防設備保守点検", href: "#service" },
      { label: "消防設備工事", href: "#service" },
      { label: "弱電設備と清掃管理", href: "#service" },
    ],
  },
  {
    labelJp: "業務内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "各種消防設備の点検と工事", href: "#service" },
      { label: "地下タンク漏洩検査", href: "#service" },
      { label: "ビル・店舗の清掃管理", href: "#service" },
    ],
  },
  {
    labelJp: "お知らせ",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "会社情報",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "本社所在地", href: "#access" },
      { label: "会社概要", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "SAPPORO",
    titleLine2: "FIRE MAINTENANCE",
    subtitle:
      "札幌を中心に消防設備の保守点検と工事を行い、万が一に備える日常の安全管理を支えます。",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "INSPECTION",
    titleLine2: "& CONSTRUCTION",
    subtitle:
      "各種消防設備の点検から工事まで一貫して対応し、正常に作動する状態を維持できるよう取り組みます。",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "LOW-VOLTAGE",
    titleLine2: "& CLEANING",
    subtitle:
      "弱電設備の工事とビル・店舗の清掃管理も含め、建物運用に必要な業務を整理して相談できます。",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "消防設備保守点検",
    titleEn: "MAINTENANCE",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "消防設備工事",
    titleEn: "FIRE SYSTEM",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "弱電設備 / 清掃管理",
    titleEn: "BUILDING SUPPORT",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "HOME",
    title: "札幌消防メンテナンス株式会社 トップページ",
    href: "http://www.s-sm.net/index.html",
  },
  {
    category: "COMPANY",
    title: "会社概要と代表者情報",
    href: "http://www.s-sm.net/company.html",
  },
  {
    category: "SERVICE",
    title: "消防設備保守点検・工事などの業務内容",
    href: "http://www.s-sm.net/info.html",
  },
  {
    category: "CONTACT",
    title: "お問い合わせ案内",
    href: "http://www.s-sm.net/contact.html",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E3%80%92007-0845%20%E5%8C%97%E6%B5%B7%E9%81%93%E6%9C%AD%E5%B9%8C%E5%B8%82%E6%9D%B1%E5%8C%BA%E5%8C%9745%E6%9D%A1%E6%9D%B115%E4%B8%81%E7%9B%AE2-16";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "本社",
  postalCode: "007-0845",
  address: "北海道札幌市東区北45条東15丁目2-16",
  tel: "011-788-8911",
  fax: "011-206-4807",
  mapLink: mapQuery,
  linkLabel: "Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "受付案内",
  postalCode: "",
  address:
    "お問い合わせは本社窓口で承ります。受付時間は 9:00-18:00、土日祝休です。フォーム導線もご利用いただけます。",
  tel: "011-788-8911",
  fax: "011-206-4807",
  mapLink: "http://www.s-sm.net/contact.html",
  linkLabel: "お問い合わせページ",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  ...baseCompany,
  name: "札幌消防メンテナンス",
  nameEn: "SAPPORO SHOBO MAINTENANCE",
  corporateName: "札幌消防メンテナンス株式会社",
  copyrightName: "Sapporo Shobo Maintenance Co., Ltd.",
  region: "北海道札幌市",
  tagline:
    "札幌を中心に消防設備の保守点検と工事、弱電設備工事、ビル・店舗の清掃管理まで対応する消防設備会社です。",
  phone: "011-788-8911",
  hours: "受付 9:00-18:00 / 土日祝休",
  contactHref: "#access",
  siteTitle:
    "札幌消防メンテナンス株式会社 | 札幌市の消防設備保守点検・工事・弱電設備・清掃管理",
  siteDescription:
    "札幌消防メンテナンス株式会社は、北海道札幌市で各種消防設備の保守点検及び工事、地下タンク漏洩検査、弱電設備工事、ビル・店舗の清掃管理を行っています。",
  navigation,
  heroSlides,
  concept: {
    ...baseCompany.concept,
    sectionLabel: "札幌消防メンテナンスの役割",
    headline:
      "命と財産を守る設備が\n正常に作動する状態を日々支える体制へ",
    body: [
      "札幌消防メンテナンス株式会社は、札幌を中心に消火器販売、消防設備点検、ビル・店舗の清掃管理に携わっています。",
      "消防設備は万が一のときに正常に作動するよう、定期的な点検と適切な工事が欠かせません。日々の業務を通じて、安心して使える状態の維持を目指しています。",
      "各種消防設備の保守点検及び工事に加え、地下タンク漏洩検査や弱電設備工事、清掃管理まで整理し、建物ごとの相談導線を分かりやすくまとめています。",
    ],
    ctaHref: "#access",
    ctaLabel: "会社情報を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "消防設備保守点検と工事のイメージ",
  },
  service: {
    ...baseCompany.service,
    sectionLabel: "業務内容",
    headline:
      "消防設備の保守点検と工事を軸に\n建物管理に関わる業務をまとめて相談できます",
    ctaHref: "#access",
    ctaLabel: "お問い合わせへ",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "消防設備保守点検と建物管理のイメージ",
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
      heading: "業務内容",
      links: [
        { label: "消防設備保守点検", href: "#service" },
        { label: "消防設備工事", href: "#service" },
        { label: "地下タンク漏洩検査", href: "#service" },
        { label: "弱電設備工事", href: "#service" },
        { label: "ビル・店舗の清掃管理", href: "#service" },
      ],
    },
    {
      heading: "公開情報",
      links: [
        { label: "HOME", href: "http://www.s-sm.net/index.html" },
        { label: "会社概要", href: "http://www.s-sm.net/company.html" },
        { label: "業務内容", href: "http://www.s-sm.net/info.html" },
        { label: "お問い合わせ", href: "http://www.s-sm.net/contact.html" },
      ],
    },
    {
      heading: "会社情報",
      links: [
        { label: "本社所在地", href: "#access" },
        { label: "代表取締役 青木 良峰", href: "#access" },
        { label: "設立 平成19年10月1日", href: "#access" },
        { label: "資本金 800万円", href: "#access" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "HOME", href: "http://www.s-sm.net/index.html" },
    { label: "会社概要", href: "http://www.s-sm.net/company.html" },
    { label: "業務内容", href: "http://www.s-sm.net/info.html" },
    { label: "お問い合わせ", href: "http://www.s-sm.net/contact.html" },
    { label: "アクセス", href: "#access" },
  ],
}, "fire-safety");
