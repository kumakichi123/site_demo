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
    labelJp: "塗装への考え方",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "自社職人の施工体制", href: "#concept" },
      { label: "無料の現地調査と見積り", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "一般建築塗装", href: "#service" },
      { label: "住宅リフォーム", href: "#service" },
      { label: "除雪", href: "#service" },
    ],
  },
  {
    labelJp: "お知らせ",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "店舗情報",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "所在地", href: "#access" },
      { label: "連絡先", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "ASAHIKAWA",
    titleLine2: "PAINT & REFORM",
    subtitle: "旭川市を拠点に外壁塗装と住宅リフォームを相談できます",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "SELF-RUN",
    titleLine2: "CRAFTSMANSHIP",
    subtitle: "現地調査から施工、アフターフォローまで自社で対応します",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "HOKKAIDO",
    titleLine2: "WIDE AREA",
    subtitle: "北海道全域の塗装と住まいの相談に応える体制を案内します",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "一般建築塗装",
    titleEn: "PAINT WORKS",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "住宅リフォーム",
    titleEn: "REFORM",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "除雪",
    titleEn: "SNOW REMOVAL",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "インフォメーション",
    date: "2025.07.23",
    dateISO: "2025-07-23",
    title: "塗装工事も中盤",
    href: "https://r.goope.jp/h-m-paint/info",
  },
  {
    category: "インフォメーション",
    date: "2025.06.04",
    dateISO: "2025-06-04",
    title: "5月・6月各地域チラシ配布！！",
    href: "https://r.goope.jp/h-m-paint/info",
  },
  {
    category: "お問合せ",
    title: "現地調査・見積り・施工・アフターフォローの案内",
    href: "https://r.goope.jp/h-m-paint/contact",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%AD%E5%B7%9D%E5%B8%82%E6%98%A5%E5%85%89%E5%8F%B01%E6%9D%A13%E4%B8%81%E7%9B%AE5-17";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "所在地",
  postalCode: "",
  address: "北海道旭川市春光台1条3丁目5-17",
  tel: "0166-56-3678",
  fax: "0166-30-9123",
  email: "hm.paint710@gmail.com",
  mapLink: mapQuery,
  linkLabel: "≫ Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "メール・電話受付",
  postalCode: "",
  address:
    "メールは24時間受付、返信は営業時間内です。日中は現場対応のため、まずはメール問い合わせが案内されています。",
  tel: "0166-56-3678",
  fax: "0166-30-9123",
  email: "hm.paint710@gmail.com",
  mapLink: "https://r.goope.jp/h-m-paint/contact",
  linkLabel: "≫ お問い合わせページ",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "H.m paint",
  nameEn: "H.M. PAINT",
  corporateName: "H.m paint",
  copyrightName: "H.M. PAINT",
  region: "北海道旭川市",
  tagline:
    "北海道全域に対応し、外壁塗装と住宅リフォームを自社職人で支える旭川の塗装店です",
  phone: "0166-56-3678",
  hours: "営業時間 08:00〜17:00",
  contactHref: "#access",
  siteTitle: "H.m paint | 旭川市で外壁塗装と住宅リフォームを相談できる塗装店",
  siteDescription:
    "H.m paint は北海道旭川市を拠点に、一般建築塗装、住宅・マンション・店舗の塗替え、住宅リフォーム、リノベーション、外壁張替え、除雪に対応しています。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "H.m paint の塗装への考え方",
    headline: "自社職人の施工体制で\n現地調査から施工後まで丁寧に対応します。",
    body: [
      "公開情報では、細かな気配りとお客様の希望を大切にする姿勢、自社職人ならではのきめ細かい配慮が強みとして案内されています。",
      "店舗情報では、一般建築塗装を中心に住宅・マンション・店舗の塗替え、住宅リフォーム、リノベーション、外壁張替えまで対応可能とされています。",
      "お問い合わせ案内では、現地調査、見積り、施工、アフターフォローまで自社で行い、見積りや相談は無料で受け付けることが明記されています。",
    ],
    ctaHref: "#access",
    ctaLabel: "お問い合わせ方法を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "外壁塗装と住まいの相談イメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "塗替えからリフォームまで\n北海道全域の相談導線を見やすく整理します。",
    ctaHref: "#access",
    ctaLabel: "連絡先を確認する",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "塗装工事と住宅リフォームのイメージ",
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
      heading: "塗装と住まい",
      links: [
        { label: "H.m paint の塗装への考え方", href: "#concept" },
        { label: "一般建築塗装", href: "#service" },
        { label: "住宅リフォーム", href: "#service", indent: true },
        { label: "除雪", href: "#service", indent: true },
        { label: "お問い合わせ", href: "#access" },
      ],
    },
    {
      heading: "対応方針",
      links: [
        { label: "自社職人の施工体制", href: "#concept" },
        { label: "無料の現地調査と見積り", href: "#concept" },
        { label: "北海道全域対応", href: "#concept" },
      ],
    },
    {
      heading: "公開情報",
      links: [
        { label: "インフォメーション", href: "#information" },
        { label: "現場・工程完了写真", href: "https://r.goope.jp/h-m-paint/photo" },
        { label: "お問い合わせ", href: "https://r.goope.jp/h-m-paint/contact" },
      ],
    },
    {
      heading: "店舗情報",
      links: [
        { label: "所在地", href: "#access" },
        { label: "連絡先", href: "#access" },
        { label: "公式サイト", href: "https://r.goope.jp/h-m-paint" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "インフォメーション", href: "#information" },
    { label: "店舗情報", href: "https://r.goope.jp/h-m-paint/about" },
    { label: "現場・工程完了写真", href: "https://r.goope.jp/h-m-paint/photo" },
    { label: "お問い合わせ", href: "https://r.goope.jp/h-m-paint/contact" },
    { label: "公式サイト", href: "https://r.goope.jp/h-m-paint" },
  ],
}, "painting");
