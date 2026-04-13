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
    labelJp: "ごあいさつ",
    labelEn: "GREETING",
    href: "#concept",
  },
  {
    labelJp: "修理について",
    labelEn: "REPAIR",
    href: "#service",
  },
  {
    labelJp: "サービス料金",
    labelEn: "PRICE",
    href: "#information",
  },
  {
    labelJp: "会社概要・アクセス",
    labelEn: "COMPANY",
    href: "#access",
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "WAKKANAI",
    titleLine2: "ELECTRICAL SUPPORT",
    subtitle: "稚内市で電気設備の困りごとに対応する鈴木電気設備工業。",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "ONE STOP",
    titleLine2: "FROM CHECK TO WORK",
    subtitle: "一般家庭から事業者まで、巡回点検から工事までワンストップで案内します。",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "AIRCON",
    titleLine2: "& WATER HEATER",
    subtitle: "エアコン取り付け・クリーニング・給湯器取り付けの相談導線を整理したデモです。",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "電気設備の困りごと対応",
    titleEn: "ELECTRICAL SUPPORT",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "巡回点検から工事まで",
    titleEn: "ONE STOP",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#service",
  },
  {
    title: "エアコン・給湯器対応",
    titleEn: "INSTALLATION",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "トップ導線",
    title: "ごあいさつ",
    href: "http://sd-3247.com/",
  },
  {
    category: "トップ導線",
    title: "修理について",
    href: "http://sd-3247.com/",
  },
  {
    category: "トップ導線",
    title: "サービス料金",
    href: "http://sd-3247.com/",
  },
  {
    category: "トップ導線",
    title: "会社概要",
    href: "http://sd-3247.com/",
  },
];

const accessInfo: Location = {
  label: "会社情報",
  postalCode: "",
  address:
    "北海道稚内市の電気工事会社として、一般家庭から事業者まで電気設備の困りごとに対応すると案内されています。",
  email: "sdsuzuki5323@yahoo.co.jp",
  mapLink: "http://sd-3247.com/",
  linkLabel: "公式サイトを見る",
  mapEmbed: "",
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "メール窓口",
  postalCode: "",
  address:
    "メール窓口はトップページの mailto リンクで案内されています。巡回点検から工事までの相談、エアコン取り付け・クリーニング・給湯器取り付けの相談に対応する構成です。",
  email: "sdsuzuki5323@yahoo.co.jp",
  mapLink: "mailto:sdsuzuki5323@yahoo.co.jp",
  linkLabel: "メールで問い合わせる",
  mapEmbed: "",
};

export const company: CompanyData = applyIndustryImages({
  name: "鈴木電気設備工業",
  nameEn: "SUZUKI DENKI SETSUBI",
  corporateName: "鈴木電気設備工業",
  copyrightName: "Suzuki Denki Setsubi",
  region: "北海道 稚内市",
  tagline:
    "稚内市で一般家庭から事業者まで、電気設備の困りごとに巡回点検から工事までワンストップで対応する案内を整理したデモです。",
  phone: "",
  hours: "お問い合わせはメール窓口で案内",
  contactHref: "#access",
  siteTitle: "稚内市の電気工事なら鈴木電気設備工業",
  siteDescription:
    "鈴木電気設備工業のトップページで確認できた対応内容、導線、メール窓口をもとに整理した営業用デモページです。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "ごあいさつ",
    headline: "電気設備の困りごとを\n相談しやすく整理した入口に整えます。",
    body: [
      "トップページでは、一般家庭から事業者まで電気設備の困りごとに対応すると案内されています。",
      "あわせて、巡回点検から工事までワンストップで対応することが示されており、相談前に強みが把握しやすい見せ方が有効です。",
      "このデモでは、画像中心で古い印象になっている現状に対し、対応内容と問い合わせ導線を短時間で理解できる構成を意識しています。",
    ],
    ctaHref: "#service",
    ctaLabel: "対応内容を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "電気設備の相談内容を整理したイメージ",
  },
  service: {
    sectionLabel: "修理について",
    headline: "巡回点検から工事まで\nワンストップ対応の内容を見やすく配置します。",
    ctaHref: "#access",
    ctaLabel: "メール窓口を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "電気工事と設備対応のイメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessInfo,
    model: accessContact,
  },
  social: {
    facebook: "",
    instagram: "",
  },
  footerColumns: [
    {
      heading: "ご案内",
      links: [
        { label: "ごあいさつ", href: "#concept" },
        { label: "修理について", href: "#service" },
        { label: "サービス料金", href: "#information" },
      ],
    },
    {
      heading: "対応内容",
      links: [
        { label: "一般家庭から事業者まで対応", href: "#concept" },
        { label: "巡回点検から工事まで", href: "#service" },
        { label: "エアコン・給湯器対応", href: "#service" },
      ],
    },
    {
      heading: "会社情報",
      links: [
        { label: "会社概要", href: "#access" },
        { label: "アクセス", href: "#access" },
        { label: "公式サイト", href: "http://sd-3247.com/" },
      ],
    },
    {
      heading: "お問い合わせ",
      links: [
        { label: "メール窓口", href: "mailto:sdsuzuki5323@yahoo.co.jp" },
        { label: "公式サイト", href: "http://sd-3247.com/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "ごあいさつ", href: "#concept" },
    { label: "修理について", href: "#service" },
    { label: "サービス料金", href: "#information" },
    { label: "メールで問い合わせる", href: "mailto:sdsuzuki5323@yahoo.co.jp" },
    { label: "公式サイト", href: "http://sd-3247.com/" },
  ],
}, "electrician");
