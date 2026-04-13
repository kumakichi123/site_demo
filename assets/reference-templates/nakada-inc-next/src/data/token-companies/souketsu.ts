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
    labelJp: "創結の考え方",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "登別のリフォーム相談", href: "#concept" },
      { label: "予算と要望の整理", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "住宅リフォーム", href: "#service" },
      { label: "現地調査", href: "#service" },
      { label: "アフターメンテナンス", href: "#service" },
    ],
  },
  {
    labelJp: "案内リンク",
    labelEn: "INFO",
    href: "#information",
  },
  {
    labelJp: "会社案内",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "所在地", href: "#access" },
      { label: "電話・メール", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "NOBORIBETSU",
    titleLine2: "REFORM",
    subtitle: "登別・室蘭・伊達エリアで住宅リフォームを相談できる窓口です",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "SMALL TO",
    titleLine2: "MID SCALE",
    subtitle: "小さな補修から中規模リフォームまで相談内容を整理します",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "CONTACT",
    titleLine2: "& SUPPORT",
    subtitle: "電話・メール・フォームの連絡先を見つけやすくまとめます",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "住宅リフォーム",
    titleEn: "REFORM",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "現地調査・見積もり",
    titleEn: "SURVEY",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "完工後サポート",
    titleEn: "AFTER CARE",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "案内",
    title: "火災保険について",
    href: "https://www.souketsureform.com/bio",
  },
  {
    category: "案内",
    title: "火災保険 住宅リフォームとは",
    href: "https://peraichi.com/landing_pages/view/souketsureform0824/",
  },
  {
    category: "案内",
    title: "当社へのクチコミ",
    href: "https://www.ekiten.jp/shop_14498637/",
  },
  {
    category: "案内",
    title: "最近のできごと",
    href: "https://souketsu.hatenablog.com/",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E7%99%BB%E5%88%A5%E5%B8%82%E6%96%B0%E7%94%9F%E7%94%BA3-3-6";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "所在地",
  postalCode: "",
  address: "北海道登別市新生町3-3-6",
  tel: "0143-83-4751",
  fax: "0143-83-4752",
  mapLink: mapQuery,
  linkLabel: "≫ Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "電話・メール・フォーム受付",
  postalCode: "",
  address:
    "登別・室蘭・伊達エリアの住宅リフォーム相談を、電話・メール・お問い合わせフォームで受け付けています。",
  tel: "0143-83-4751",
  email: "souketureform@gmail.com",
  mapLink: "https://www.souketsureform.com/contact-me",
  linkLabel: "≫ お問い合わせフォーム",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "創結",
  nameEn: "SOUKETSU",
  corporateName: "創結",
  copyrightName: "Souketsu",
  region: "北海道 登別市",
  tagline:
    "登別・室蘭・伊達エリアで住宅リフォームを相談しやすく整理したデモページです",
  phone: "0143-83-4751",
  hours: "電話・メール・フォームでリフォーム相談を受付",
  contactHref: "#access",
  siteTitle: "創結 | 登別市で住宅リフォームを相談できる専門店",
  siteDescription:
    "創結の公開情報をもとに、登別・室蘭・伊達エリアの住宅リフォーム案内と、電話・メール・フォームの連絡導線を見やすく整理したデモページです。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "創結の考え方",
    headline: "登別の住宅リフォーム相談を\n予算と要望から整理しやすく見せます。",
    body: [
      "トップでは、登別・室蘭・伊達を中心エリアとした住宅リフォーム専門店であることが案内されています。",
      "約2,000件超の完工実績を活かし、予算と要望を聞いたうえでプロの立場からアドバイスすると書かれており、相談の入口をもっと分かりやすく前面に出せる余地があります。",
      "このデモでは、対応内容、相談の流れ、電話・メール・フォームの連絡先を上から順に把握しやすい構成に整理しています。",
    ],
    ctaHref: "#access",
    ctaLabel: "相談方法を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "住宅リフォーム相談のイメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "小さな補修から中規模リフォームまで\n相談内容を迷わず見られる構成にします。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "住宅リフォームと相談導線のイメージ",
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
      heading: "リフォーム相談",
      links: [
        { label: "創結の考え方", href: "#concept" },
        { label: "住宅リフォーム", href: "#service" },
        { label: "現地調査・見積もり", href: "#service", indent: true },
        { label: "完工後サポート", href: "#service", indent: true },
      ],
    },
    {
      heading: "案内リンク",
      links: [
        { label: "火災保険について", href: "#information" },
        { label: "住宅リフォーム案内", href: "#information" },
        { label: "最近のできごと", href: "#information" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "所在地", href: "#access" },
        { label: "電話・メール", href: "#access" },
        { label: "お問い合わせフォーム", href: "#access" },
      ],
    },
    {
      heading: "外部リンク",
      links: [
        { label: "施工写真", href: "https://www.souketsureform.com/photo" },
        { label: "クチコミ", href: "https://www.ekiten.jp/shop_14498637/" },
        { label: "公式サイト", href: "https://www.souketsureform.com/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "火災保険について", href: "https://www.souketsureform.com/bio" },
    {
      label: "住宅リフォームとは",
      href: "https://peraichi.com/landing_pages/view/souketsureform0824/",
    },
    { label: "クチコミ", href: "https://www.ekiten.jp/shop_14498637/" },
    { label: "お問い合わせ", href: "https://www.souketsureform.com/contact-me" },
    { label: "施工写真", href: "https://www.souketsureform.com/photo" },
    { label: "公式サイト", href: "https://www.souketsureform.com/" },
  ],
}, "builder");
