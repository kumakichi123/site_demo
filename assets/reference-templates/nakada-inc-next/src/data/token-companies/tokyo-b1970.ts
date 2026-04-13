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
    labelJp: "会社案内",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "会社概要", href: "#concept" },
      { label: "札幌本社・千歳支店", href: "#access" },
    ],
  },
  {
    labelJp: "業務案内",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "消防用設備工事", href: "#service" },
      { label: "保守点検", href: "#service" },
      { label: "機器販売", href: "#service" },
    ],
  },
  {
    labelJp: "お知らせ",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "お問合せ",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "札幌本社", href: "#access" },
      { label: "千歳支店", href: "#access" },
      { label: "お問い合わせ", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "SINCE",
    titleLine2: "1970",
    subtitle: "札幌と千歳を拠点に消防用設備と弱電設備の設計・施工・保守点検に対応します",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "FIRE",
    titleLine2: "SYSTEM",
    subtitle: "自動火災報知設備や消火設備の改修工事・修繕工事を継続して支えます",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "INSPECTION",
    titleLine2: "& SALES",
    subtitle: "法定点検から消火器や住宅用火災警報器の販売まで相談できます",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "消防用設備工事",
    titleEn: "FIRE SYSTEM",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "保守点検",
    titleEn: "INSPECTION",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "機器販売",
    titleEn: "SALES",
    iconPaths: [
      "M24 16L8 56H16L20 44H44L48 56H56L40 16",
      "M28 36L36 28M36 36L28 28",
    ],
    href: "#access",
  },
];

const news: NewsItem[] = [
  {
    category: "お知らせ",
    title: "消火栓 除雪ボランティアの実施案内",
    href: "https://www.tokyo-b1970.com/",
  },
  {
    category: "会社案内",
    title: "創立・設立・加盟団体を含む会社概要",
    href: "https://www.tokyo-b1970.com/%E4%BC%9A%E7%A4%BE%E6%A1%88%E5%86%85",
  },
  {
    category: "業務案内",
    title: "消防用設備・弱電設備・保守点検・機器販売の対応内容",
    href: "https://www.tokyo-b1970.com/%E6%A5%AD%E5%8B%99%E6%A1%88%E5%86%85",
  },
];

const sapporoMapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%9C%AD%E5%B9%8C%E5%B8%82%E8%B1%8A%E5%B9%B3%E5%8C%BA%E5%B9%B3%E5%B2%B83%E6%9D%A12%E4%B8%81%E7%9B%AE2-15";
const sapporoMapEmbed = `${sapporoMapQuery}&output=embed`;

const chitoseMapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E5%8D%83%E6%AD%B3%E5%B8%82%E8%8A%B1%E5%9C%926%E4%B8%81%E7%9B%AE3-8";
const chitoseMapEmbed = `${chitoseMapQuery}&output=embed`;

const accessHq: Location = {
  label: "札幌本社",
  postalCode: "",
  address: "北海道札幌市豊平区平岸3条2丁目2-15",
  tel: "011-887-0471",
  mapLink: sapporoMapQuery,
  mapEmbed: sapporoMapEmbed,
};

const accessBranch: Location = {
  label: "千歳支店",
  postalCode: "",
  address: "北海道千歳市花園6丁目3-8",
  tel: "0123-22-7012",
  mapLink: chitoseMapQuery,
  mapEmbed: chitoseMapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "東京防災設備",
  nameEn: "TOKYO BOUSAI SETSUBI",
  corporateName: "東京防災設備株式会社",
  copyrightName: "Tokyo Bousai Setsubi Co., Ltd.",
  region: "北海道札幌市",
  tagline:
    "消防用設備・弱電設備の設計・施工・保守点検・機器販売を札幌と千歳で支えます",
  phone: "011-887-0471",
  hours: "平日 9:00〜17:30 / 土曜日 9:00〜12:00（第2・4を除く）",
  contactHref: "#access",
  siteTitle:
    "東京防災設備株式会社｜札幌と千歳で消防用設備・弱電設備を相談できる会社",
  siteDescription:
    "東京防災設備株式会社は北海道札幌市豊平区と千歳市を拠点に、消防用設備・弱電設備の設計施工、改修工事、修繕工事、法定点検、機器販売に対応しています。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "東京防災設備の会社案内",
    headline: "1970年創立の体制で\n消防用設備と弱電設備を継続支援します。",
    body: [
      "東京防災設備株式会社は1970年7月5日に創立、1970年8月12日に設立された消防用設備・弱電設備の会社です。",
      "札幌本社は北海道札幌市豊平区平岸3条2丁目2-15、千歳支店は北海道千歳市花園6丁目3-8にあり、2拠点で対応しています。",
      "一般社団法人北海道消防設備協会、北海道消防設備事業組合、札幌弱電設備業協同組合などに加盟し、消防設備士や消防設備点検資格者などの資格者体制を備えています。",
    ],
    ctaHref: "#access",
    ctaLabel: "[会社名]へ相談する",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "消防用設備と弱電設備の相談イメージ",
  },
  service: {
    sectionLabel: "業務案内",
    headline: "設計施工から法定点検まで\n設備運用を一貫して支えます。",
    ctaHref: "#access",
    ctaLabel: "拠点情報を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "消防用設備の点検と工事のイメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessHq,
    model: accessBranch,
  },
  social: {
    facebook: "",
    instagram: "",
  },
  footerColumns: [
    {
      heading: "会社案内",
      links: [
        { label: "[会社名]の概要", href: "#concept" },
        { label: "札幌本社", href: "#access" },
        { label: "千歳支店", href: "#access", indent: true },
        { label: "お問合せ", href: "#access" },
        { label: "公式サイト", href: "https://www.tokyo-b1970.com/" },
      ],
    },
    {
      heading: "業務案内",
      links: [
        { label: "消防用設備工事", href: "#service" },
        { label: "保守点検", href: "#service" },
        { label: "機器販売", href: "#service" },
      ],
    },
    {
      heading: "お知らせ",
      links: [
        { label: "トップページ", href: "https://www.tokyo-b1970.com/" },
        { label: "会社案内", href: "https://www.tokyo-b1970.com/%E4%BC%9A%E7%A4%BE%E6%A1%88%E5%86%85" },
        { label: "業務案内", href: "https://www.tokyo-b1970.com/%E6%A5%AD%E5%8B%99%E6%A1%88%E5%86%85" },
      ],
    },
    {
      heading: "お問合せ",
      links: [
        { label: "お問い合わせフォーム", href: "https://www.tokyo-b1970.com/%E3%81%8A%E5%95%8F%E5%90%88%E3%81%9B" },
        { label: "電話で相談", href: "#access" },
        { label: "個人情報保護方針", href: "https://www.tokyo-b1970.com/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "お知らせ", href: "https://www.tokyo-b1970.com/" },
    { label: "会社案内", href: "https://www.tokyo-b1970.com/%E4%BC%9A%E7%A4%BE%E6%A1%88%E5%86%85" },
    { label: "業務案内", href: "https://www.tokyo-b1970.com/%E6%A5%AD%E5%8B%99%E6%A1%88%E5%86%85" },
    { label: "お問合せ", href: "https://www.tokyo-b1970.com/%E3%81%8A%E5%95%8F%E5%90%88%E3%81%9B" },
    { label: "札幌本社", href: "#access" },
    { label: "千歳支店", href: "#access" },
  ],
}, "fire-safety");
