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
    labelJp: "コンセプト",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "家づくりの考え方", href: "#concept" },
      { label: "設計から施工まで", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "注文住宅", href: "#service" },
      { label: "リフォーム", href: "#service" },
      { label: "不動産相談", href: "#service" },
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
      { label: "ご相談窓口", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "WAKKANAI",
    titleLine2: "CUSTOM HOME",
    subtitle: "稚内で理想の家づくりを一級建築士と",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "RENOVATION",
    titleLine2: "& DESIGN",
    subtitle: "リフォームも設計施工も一貫対応",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "LOCAL",
    titleLine2: "PARTNER",
    subtitle: "土地探しや不動産相談まで寄り添います",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "注文住宅",
    titleEn: "CUSTOM HOME",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "リフォーム",
    titleEn: "REFORM",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#access",
  },
  {
    title: "不動産相談",
    titleEn: "REAL ESTATE",
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
    date: "2021.02.25",
    dateISO: "2021-02-25",
    title: "予算計画の基礎知識_第1回：事前に知っておきたい各種費用の内容",
    href: "https://shibakenn1.com/f_plan/various_costs/",
  },
  {
    category: "お知らせ",
    date: "2021.02.25",
    dateISO: "2021-02-25",
    title: "雪や寒さに強い北海道の家づくり_雪対策編その1",
    href: "https://shibakenn1.com/basic2/countermeasure_of_snow01/",
  },
  {
    category: "お知らせ",
    date: "2021.02.15",
    dateISO: "2021-02-15",
    title: "暮らしやすく快適な住まいにするために_第2回",
    href: "https://shibakenn1.com/planning/concept_decided_by_the_family/",
  },
  {
    category: "イベント",
    date: "2020.08.10",
    dateISO: "2020-08-10",
    title: "新築内覧会お礼",
    href: "https://shibakenn1.com/info/orei200805/",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E7%A8%9A%E5%86%85%E5%B8%82%E5%A3%B0%E5%95%8F5%E4%B8%81%E7%9B%AE43-8";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "本社",
  postalCode: "098-6642",
  address: "北海道稚内市声問5丁目43-8",
  tel: "0162-26-2256",
  fax: "0162-26-2257",
  mapLink: mapQuery,
  mapEmbed,
};

const accessConsult: Location = {
  label: "相談窓口",
  name: "お問い合わせフォーム",
  postalCode: "",
  address:
    "注文住宅・リフォーム・不動産相談をメールフォーム経由で受け付けています。",
  mapLink: "https://shibakenn1.com/contact/",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "柴田建設",
  nameEn: "SHIBATA CONSTRUCTION",
  corporateName: "柴田建設",
  copyrightName: "Shibata Construction",
  region: "稚内",
  tagline:
    "稚内で注文住宅・リフォーム・不動産相談まで、一級建築士が一貫して伴走します",
  phone: "0162-26-2256",
  hours: "ご相談受付 平日 8:00〜17:00（土日祝は応相談）",
  contactHref: "#access",
  siteTitle: "柴田建設｜稚内で注文住宅・リフォームを相談できる工務店",
  siteDescription:
    "柴田建設は北海道稚内市で、注文住宅、リフォーム、不動産相談まで一貫して対応する工務店です。一級建築士による設計と現場理解を活かした住まいづくりを行います。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "[会社名]の家づくり",
    headline: "理想の家を、\n設計から施工まで一貫して形にします。",
    body: [
      "柴田建設では、注文住宅のプランニングから施工までを自社で一貫して進め、お客様の理想に合わせた住まいづくりを支えます。",
      "一級建築士が打ち合わせ段階から伴走するため、実現したい間取りや内装イメージを現場までぶらさずに反映できます。",
      "新築だけでなくリフォームや不動産相談まで対応し、稚内で長く住み続けるための選択肢を広く提案します。",
    ],
    ctaHref: "#access",
    ctaLabel: "[会社名]に相談する",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "住まいの設計イメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "注文住宅もリフォームも\n住まいの相談をまとめて受けます。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせへ進む",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "家づくりとリフォームの相談イメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessHq,
    model: accessConsult,
  },
  social: {
    facebook: "https://shibakenn1.com/#facebook",
    instagram: "",
  },
  footerColumns: [
    {
      heading: "注文住宅",
      links: [
        { label: "[会社名]の家づくり", href: "#" },
        { label: "注文住宅", href: "#service" },
        { label: "リフォーム", href: "#service", indent: true },
        { label: "不動産相談", href: "#service", indent: true },
        { label: "お問い合わせ", href: "#access" },
        { label: "アクセス", href: "#access" },
      ],
    },
    {
      heading: "対応内容",
      links: [
        { label: "プランニング", href: "#concept" },
        { label: "設計施工", href: "#concept" },
        { label: "リフォーム", href: "#service" },
      ],
    },
    {
      heading: "情報",
      links: [
        { label: "お知らせ", href: "#information" },
        { label: "ご相談窓口", href: "#access" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "会社概要", href: "#access" },
        { label: "所在地", href: "#access" },
        { label: "電話で相談", href: "#access" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "お知らせ", href: "#information" },
    { label: "住まいの相談", href: "#access" },
    {
      label: "プライバシーポリシー",
      href: "https://shibakenn1.com/privacy-policy/",
    },
    { label: "お問い合わせ", href: "#access" },
    { label: "アクセス", href: "#access" },
    { label: "公式サイト", href: "https://shibakenn1.com/" },
  ],
}, "builder");
