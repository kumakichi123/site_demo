import { company as baseCompany, type CompanyData, type HeroSlide, type Location, type NavItem, type NewsItem, type ServiceCard } from "@/data/company";
import { applyIndustryImages } from "@/data/industry-images";

const navigation: NavItem[] = [
  {
    labelJp: "選ばれる理由",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "地域密着の対応", href: "#concept" },
      { label: "問い合わせ導線", href: "#concept" },
    ],
  },
  {
    labelJp: "サービス",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "電気工事", href: "#service" },
      { label: "施工実績", href: "#service" },
      { label: "相談受付", href: "#service" },
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
      { label: "所在地", href: "#access" },
      { label: "営業時間", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "WAKKANAI",
    titleLine2: "ELECTRICAL WORKS",
    subtitle: "電気工事の対応内容と相談先を短時間で把握できる構成へ",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "LOCAL",
    titleLine2: "SUPPORT",
    subtitle: "地域密着の相談窓口を明確にし、電話とフォームを見つけやすく整理",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "CASE",
    titleLine2: "& CONTACT",
    subtitle: "施工実績と問い合わせ導線を一つの流れで確認できる営業用デモ",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "電気工事",
    titleEn: "ELECTRICAL",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "施工実績",
    titleEn: "CASE STUDY",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#information",
  },
  {
    title: "相談受付",
    titleEn: "CONTACT",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "施工実績",
    title: "工事実績ページから対応事例を確認",
    href: "https://www.wakkanaidenkikouji.jp/case",
  },
  {
    category: "お問い合わせ",
    title: "電話とフォームの両方で相談可能",
    href: "https://www.wakkanaidenkikouji.jp/contact",
  },
  {
    category: "会社情報",
    title: "所在地・受付時間・アクセス情報を整理",
    href: "https://www.wakkanaidenkikouji.jp/access",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E7%A8%9A%E5%86%85%E5%B8%82%E8%90%A9%E8%A6%8B5%E4%B8%81%E7%9B%AE33%E7%95%AA4%E5%8F%B7";
const mapEmbed = `${mapQuery}&output=embed`;

const accessOffice: Location = {
  label: "所在地",
  postalCode: "097-0016",
  address: "北海道稚内市萩見5丁目33番4号",
  tel: "0162-32-6568",
  mapLink: mapQuery,
  linkLabel: "≫ Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "電話・フォーム",
  postalCode: "",
  address: "受付時間 8:00〜17:30。日曜日・祝日・年末年始を除き相談受付。",
  tel: "0162-32-6568",
  mapLink: "https://www.wakkanaidenkikouji.jp/contact",
  linkLabel: "≫ お問い合わせフォーム",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  ...baseCompany,
  name: "稚内電気工事",
  nameEn: "WAKKANAI DENKI",
  corporateName: "稚内電気工事株式会社",
  copyrightName: "Wakkanai Denki Kouji Co., Ltd.",
  region: "稚内市",
  tagline:
    "稚内での電気工事相談を受ける窓口として、対応内容・施工実績・問い合わせ導線を整理した提案デモです。",
  phone: "0162-32-6568",
  hours: "受付時間 8:00〜17:30 / 定休日 日曜日・祝日・年末年始",
  contactHref: "#access",
  siteTitle: "稚内電気工事株式会社 | 稚内の電気工事デモ",
  siteDescription:
    "稚内電気工事株式会社の電気工事、施工実績、問い合わせ導線を見やすく整理した営業用デモページです。",
  navigation,
  heroSlides,
  concept: {
    ...baseCompany.concept,
    sectionLabel: "稚内電気工事の見せ方改善",
    headline: "電気工事の相談先として\n必要な情報を迷わず確認できる構成へ",
    body: [
      "既存サイトにある受付時間、所在地、電話番号、フォーム導線を冒頭から見つけやすくし、相談前に必要な情報へ短く到達できる流れにしています。",
      "工事実績ページにつながる導線を整理し、対応内容の把握と問い合わせが分断されないよう構成をまとめました。",
      "本文の読みやすさと導線の明確さを優先し、地域密着の電気工事会社として第一印象を整える営業用デモにしています。",
    ],
    ctaHref: "#access",
    ctaLabel: "相談方法を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "電気工事の相談導線を整理したイメージ",
  },
  service: {
    ...baseCompany.service,
    sectionLabel: "サービス",
    headline: "電気工事の案内から施工実績確認まで\n一続きで見られる構成へ",
    ctaHref: "#access",
    ctaLabel: "お問い合わせへ",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "電気工事サービス案内のイメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessOffice,
    model: accessContact,
  },
  social: {
    facebook: "",
    instagram: "",
  },
  footerColumns: [
    {
      heading: "サービス",
      links: [
        { label: "電気工事", href: "#service" },
        { label: "施工実績", href: "https://www.wakkanaidenkikouji.jp/case" },
        { label: "相談受付", href: "#access" },
      ],
    },
    {
      heading: "ご案内",
      links: [
        { label: "お知らせ", href: "#information" },
        { label: "お問い合わせフォーム", href: "https://www.wakkanaidenkikouji.jp/contact" },
        { label: "アクセス", href: "https://www.wakkanaidenkikouji.jp/access" },
      ],
    },
    {
      heading: "会社情報",
      links: [
        { label: "所在地", href: "#access" },
        { label: "受付時間", href: "#access" },
        { label: "公式サイト", href: "https://www.wakkanaidenkikouji.jp/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "施工実績", href: "https://www.wakkanaidenkikouji.jp/case" },
    { label: "お問い合わせ", href: "https://www.wakkanaidenkikouji.jp/contact" },
    { label: "公式サイト", href: "https://www.wakkanaidenkikouji.jp/" },
  ],
}, "electrician");
