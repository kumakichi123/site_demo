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
    labelJp: "安心への取り組み",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "防災設備への考え方", href: "#concept" },
      { label: "札幌での対応体制", href: "#concept" },
    ],
  },
  {
    labelJp: "業務案内",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "保守点検・整備", href: "#service" },
      { label: "消防用設備工事", href: "#service" },
      { label: "弱電設備工事", href: "#service" },
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
      { label: "お問合せ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "SAPPORO",
    titleLine2: "FIRE SAFETY",
    subtitle: "札幌を拠点に防災設備の保守点検・整備に対応します",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "INSPECTION",
    titleLine2: "& MAINTENANCE",
    subtitle: "消火器や火災報知機などの防災設備を丁寧に見直します",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "FIRE ALARM",
    titleLine2: "& LOW-VOLTAGE",
    subtitle: "消防用設備工事と弱電設備工事まで一貫して相談できます",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "保守点検・整備",
    titleEn: "MAINTENANCE",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "消防用設備工事",
    titleEn: "FIRE SYSTEM",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "弱電設備工事",
    titleEn: "LOW VOLTAGE",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "業務案内",
    title: "防災設備の点検・整備と消防用設備工事の対応内容",
    href: "https://www.koa-bousai.com/business-guide",
  },
  {
    category: "法人向け",
    title: "事業所・オフィスビル・店舗向けの対応案内",
    href: "https://www.koa-bousai.com/individual-corporate-customers",
  },
  {
    category: "会社案内",
    title: "札幌市北区の所在地と会社情報",
    href: "https://www.koa-bousai.com/company-profile",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%9C%AD%E5%B9%8C%E5%B8%82%E5%8C%97%E5%8C%BA%E5%8C%9730%E6%9D%A1%E8%A5%BF9%E4%B8%81%E7%9B%AE5-20";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "本社",
  postalCode: "001-0030",
  address: "北海道札幌市北区北30条西9丁目5-20",
  tel: "011-736-1811",
  fax: "011-736-1877",
  mapLink: mapQuery,
  mapEmbed,
};

const accessContact: Location = {
  label: "お問合せ",
  name: "お電話・FAX",
  postalCode: "",
  address: "防災設備のご相談をお電話とFAXで受け付けています。",
  tel: "011-736-1811",
  fax: "011-736-1877",
  mapLink: "https://www.koa-bousai.com/",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "興亜防災設備",
  nameEn: "KOA BOUSAI EQUIPMENT",
  corporateName: "興亜防災設備株式会社",
  copyrightName: "Koa Bousai Equipment Co., Ltd.",
  region: "札幌",
  tagline:
    "札幌で消火器・火災報知機などの防災設備、弱電設備工事、保守点検・整備に対応します",
  phone: "011-736-1811",
  hours: "お電話受付 9:00〜17:00",
  contactHref: "#access",
  siteTitle: "興亜防災設備株式会社｜札幌で防災設備の保守点検・工事を相談できる会社",
  siteDescription:
    "興亜防災設備株式会社は北海道札幌市を拠点に、消火器・火災報知機などの防災設備、弱電設備工事、防災設備の保守点検・整備に対応しています。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "興亜防災設備の取り組み",
    headline: "札幌を拠点に\n防災設備を丁寧に見直します。",
    body: [
      "興亜防災設備株式会社は北海道札幌市を拠点に、消火器・火災報知機などの防災設備を取り扱っています。",
      "防災設備の保守点検・整備に加えて、消防用設備工事と弱電設備工事までまとめて相談できます。",
      "法人向けページでは、事業所やオフィスビル、店舗などの設備工事と、故障や不良箇所の改修・リニューアル工事にも対応していることが案内されています。",
    ],
    ctaHref: "#access",
    ctaLabel: "[会社名]に相談する",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "防災設備の点検と相談のイメージ",
  },
  service: {
    sectionLabel: "業務案内",
    headline: "保守点検から設備工事まで\n防災設備の相談を一本化します。",
    ctaHref: "#access",
    ctaLabel: "お問合せ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "防災設備の点検と設備工事のイメージ",
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
      heading: "防災設備",
      links: [
        { label: "[会社名]の対応内容", href: "#concept" },
        { label: "保守点検・整備", href: "#service" },
        { label: "消防用設備工事", href: "#service", indent: true },
        { label: "弱電設備工事", href: "#service", indent: true },
        { label: "お問合せ", href: "#access" },
        { label: "アクセス", href: "#access" },
      ],
    },
    {
      heading: "業務案内",
      links: [
        { label: "防災設備への考え方", href: "#concept" },
        { label: "札幌での対応体制", href: "#concept" },
        { label: "法人向け対応", href: "#service" },
      ],
    },
    {
      heading: "ご案内",
      links: [
        { label: "お知らせ", href: "#information" },
        { label: "所在地", href: "#access" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "会社概要", href: "#access" },
        { label: "電話で相談", href: "#access" },
        { label: "公式サイト", href: "https://www.koa-bousai.com/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "お知らせ", href: "#information" },
    { label: "業務案内", href: "https://www.koa-bousai.com/business-guide" },
    { label: "会社案内", href: "https://www.koa-bousai.com/company-profile" },
    { label: "法人のお客さま", href: "https://www.koa-bousai.com/individual-corporate-customers" },
    { label: "お問合せ", href: "#access" },
    { label: "公式サイト", href: "https://www.koa-bousai.com/" },
  ],
}, "fire-safety");
