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
    labelJp: "福井塗装について",
    labelEn: "ABOUT",
    href: "#concept",
  },
  {
    labelJp: "5つのお約束",
    labelEn: "PROMISE",
    href: "#service",
  },
  {
    labelJp: "施工実績",
    labelEn: "WORKS",
    href: "#information",
  },
  {
    labelJp: "お問い合わせ・アクセス",
    labelEn: "ACCESS",
    href: "#access",
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "ASAHIKAWA",
    titleLine2: "PAINTING",
    subtitle: "北海道旭川市で外壁塗装の相談を受け付ける福井塗装。",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "ABOUT",
    titleLine2: "FUKUI TOSOU",
    subtitle: "トップページで確認できる案内をもとに、会社情報と導線を見やすく整理したデモです。",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "CONTACT",
    titleLine2: "& ACCESS",
    subtitle: "営業時間や電話番号、所在地をまとめて確認できる構成にしています。",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "福井塗装について",
    titleEn: "ABOUT",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#concept",
  },
  {
    title: "5つのお約束",
    titleEn: "PROMISE",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#service",
  },
  {
    title: "お問い合わせ・アクセス",
    titleEn: "ACCESS",
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
    title: "福井塗装について",
    href: "http://fukui-tosou.net/",
  },
  {
    category: "トップ導線",
    title: "5つのお約束",
    href: "http://fukui-tosou.net/",
  },
  {
    category: "トップ導線",
    title: "施工実績",
    href: "http://fukui-tosou.net/",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E3%80%92071-8135%20%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%AD%E5%B7%9D%E5%B8%82%E6%9C%AB%E5%BA%835%E6%9D%A19%E4%B8%81%E7%9B%AE8-26";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "所在地",
  postalCode: "071-8135",
  address: "北海道旭川市末広5条9丁目8-26",
  tel: "0166-56-6078",
  mapLink: mapQuery,
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "福井塗装",
  postalCode: "071-8135",
  address: "北海道旭川市末広5条9丁目8-26",
  tel: "0166-56-6078",
  email: "",
  mapLink: "http://fukui-tosou.net/",
  linkLabel: "公式サイトを見る",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "福井塗装",
  nameEn: "FUKUI TOSOU",
  corporateName: "福井塗装",
  copyrightName: "Fukui Tosou",
  region: "北海道旭川市",
  tagline:
    "北海道旭川市の福井塗装。トップページで確認できる会社情報とお問い合わせ導線を中心に整理したデモサイトです。",
  phone: "0166-56-6078",
  hours: "9:00～17:00 / 定休日：日・祝",
  contactHref: "#access",
  siteTitle: "北海道旭川市 福井塗装",
  siteDescription:
    "福井塗装のトップページで確認できた所在地、営業時間、電話番号、主な導線をもとに再構成したデモサイトです。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "福井塗装について",
    headline: "北海道旭川市でのご相談先として\n会社情報をすぐ確認できる導線に整えています。",
    body: [
      "トップページで確認できた会社名、所在地、営業時間、電話番号をもとに、最初に必要な情報へ迷わず進める構成にしています。",
      "導線は「福井塗装について」「5つのお約束」「施工実績」「お問い合わせ・アクセス」に整理し、内容の入口を分かりやすくまとめています。",
      "現状の簡素なトップ構成に対して、必要な案内を見つけやすくすることを優先したデモです。",
    ],
    ctaHref: "#service",
    ctaLabel: "案内を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "福井塗装の案内イメージ",
  },
  service: {
    sectionLabel: "主な案内",
    headline: "トップページで確認できた\n主要導線をそのまま見やすく配置しています。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせを見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "福井塗装の案内導線イメージ",
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
      heading: "案内",
      links: [
        { label: "福井塗装について", href: "#concept" },
        { label: "5つのお約束", href: "#service" },
        { label: "施工実績", href: "#information" },
        { label: "お問い合わせ・アクセス", href: "#access" },
      ],
    },
    {
      heading: "会社情報",
      links: [
        { label: "所在地", href: "#access" },
        { label: "営業時間", href: "#access" },
        { label: "電話番号", href: "#access" },
      ],
    },
    {
      heading: "確認事項",
      links: [
        { label: "北海道旭川市 福井塗装", href: "http://fukui-tosou.net/" },
        { label: "公式サイト", href: "http://fukui-tosou.net/" },
      ],
    },
    {
      heading: "お問い合わせ",
      links: [
        { label: "電話で相談する", href: "#access" },
        { label: "アクセスを見る", href: "#access" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "福井塗装について", href: "#concept" },
    { label: "5つのお約束", href: "#service" },
    { label: "施工実績", href: "#information" },
    { label: "お問い合わせ・アクセス", href: "#access" },
    { label: "公式サイト", href: "http://fukui-tosou.net/" },
  ],
}, "painting");
