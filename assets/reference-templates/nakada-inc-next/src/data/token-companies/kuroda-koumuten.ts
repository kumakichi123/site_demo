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
    labelJp: "工務店の考え方",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "滝川で33年の対応", href: "#concept" },
      { label: "気軽に相談できる工務店", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "新築", href: "#service" },
      { label: "増改築", href: "#service" },
      { label: "リフォーム・リノベーション", href: "#service" },
    ],
  },
  {
    labelJp: "実例案内",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "会社案内",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "所在地", href: "#access" },
      { label: "電話・メール", href: "#access" },
      { label: "事業内容", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "TAKIKAWA",
    titleLine2: "LOCAL BUILDER",
    subtitle: "滝川市で新築・増改築・リフォームを相談できる地域工務店です",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "RENOVATION",
    titleLine2: "& REFORM",
    subtitle: "リノベーション実例とリフォーム実例を見やすく整理します",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "CONTACT",
    titleLine2: "& ACCESS",
    subtitle: "電話とメールの相談導線をトップから迷わず見られる構成です",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "新築",
    titleEn: "NEW BUILD",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "増改築",
    titleEn: "REMODEL",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "リフォーム・リノベーション",
    titleEn: "RENOVATION",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "NEWS",
    date: "2024.01.10",
    dateISO: "2024-01-10",
    title: "リノベーション実例を追加しました。",
    href: "https://www.kuroda-builders.com/index.html#Full",
  },
  {
    category: "NEWS",
    date: "2019.12.03",
    dateISO: "2019-12-03",
    title: "リフォーム実例を追加しました。",
    href: "https://www.kuroda-builders.com/index.html#reform",
  },
  {
    category: "SNS",
    title: "最新情報はSNSにて発信しております。",
    href: "https://www.instagram.com/kuroda6191/?hl=ja",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%BB%9D%E5%B7%9D%E5%B8%82%E6%B1%9F%E9%83%A8%E4%B9%99%E7%94%BA741-34";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "所在地",
  postalCode: "079-0461",
  address: "北海道滝川市江部乙町741-34",
  tel: "0125-75-6191",
  fax: "0125-75-5885",
  mapLink: mapQuery,
  linkLabel: "≫ Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "電話・メール受付",
  postalCode: "",
  address: "住まいに関する相談は電話とメールで受け付けています。",
  tel: "0125-75-6191",
  email: "kuroda-home@msknet.ne.jp",
  mapLink: "mailto:kuroda-home@msknet.ne.jp",
  linkLabel: "≫ お問合せメール",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "黒田工務店",
  nameEn: "KURODA KOUMUTEN",
  corporateName: "有限会社 黒田工務店",
  copyrightName: "Kuroda Koumuten",
  region: "北海道 滝川市",
  tagline:
    "滝川市で新築・増改築・改築・リノベーションを相談できる地域工務店です",
  phone: "0125-75-6191",
  hours: "電話・メールで住まいの相談を受付",
  contactHref: "#access",
  siteTitle: "黒田工務店 | 滝川市で新築・増改築・リフォームを相談できる工務店",
  siteDescription:
    "黒田工務店の公開情報をもとに、滝川市での新築・増改築・リフォーム・リノベーションの案内と、電話・メール導線を見やすく整理したデモページです。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "黒田工務店の考え方",
    headline: "滝川で33年の地域工務店として\n住まいの悩みを相談しやすい導線へ整えます。",
    body: [
      "トップでは、滝川市で開業して33年、地域の工務店として新築・増築・改築・リノベーションなど住まいの夢や問題を解決すると案内されています。",
      "同じ画面で「解らない事や聞きづらい事も気軽に聞ける建築屋さん」と打ち出しており、相談のしやすさをもっと前面に出せる余地があります。",
      "このデモでは、リノベーション実例やリフォーム実例の見せ方を整理しつつ、電話とメールの連絡先にすぐ進める構成を意識しています。",
    ],
    ctaHref: "#access",
    ctaLabel: "連絡方法を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "地域工務店の相談導線イメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "新築からリノベーションまで\n住まいの相談内容を一目で整理します。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "新築とリノベーションの相談イメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessHq,
    model: accessContact,
  },
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/kuroda6191/?hl=ja",
  },
  footerColumns: [
    {
      heading: "住まいづくり",
      links: [
        { label: "黒田工務店の考え方", href: "#concept" },
        { label: "新築", href: "#service" },
        { label: "増改築", href: "#service", indent: true },
        { label: "リフォーム・リノベーション", href: "#service", indent: true },
      ],
    },
    {
      heading: "実例案内",
      links: [
        { label: "リノベーション実例", href: "#information" },
        { label: "リフォーム実例", href: "#information" },
        { label: "最新情報", href: "https://www.instagram.com/kuroda6191/?hl=ja" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "所在地", href: "#access" },
        { label: "事業内容", href: "#access" },
        { label: "プライバシーポリシー", href: "https://www.kuroda-builders.com/privacypolicy.html" },
      ],
    },
    {
      heading: "お問い合わせ",
      links: [
        { label: "電話", href: "#access" },
        { label: "メール", href: "mailto:kuroda-home@msknet.ne.jp" },
        { label: "公式サイト", href: "https://www.kuroda-builders.com/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "リノベーション実例", href: "https://www.kuroda-builders.com/index.html#Full" },
    { label: "リフォーム実例", href: "https://www.kuroda-builders.com/index.html#reform" },
    { label: "プライバシーポリシー", href: "https://www.kuroda-builders.com/privacypolicy.html" },
    { label: "お問合せメール", href: "mailto:kuroda-home@msknet.ne.jp" },
    { label: "公式サイト", href: "https://www.kuroda-builders.com/" },
  ],
}, "builder");
