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
    labelJp: "石山建設の考え方",
    labelEn: "CONCEPT",
    href: "#concept",
    children: [
      { label: "家づくりで物語をつくる", href: "#concept" },
      { label: "網走を拠点にした対応", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "注文住宅", href: "#service" },
      { label: "住宅リフォーム", href: "#service" },
      { label: "外構・解体・塗装", href: "#service" },
    ],
  },
  {
    labelJp: "見学会・お知らせ",
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
      { label: "お問い合わせフォーム", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "ABASHIRI",
    titleLine2: "LOCAL BUILDER",
    subtitle: "網走市で注文住宅とリフォームを相談できる工務店の案内を整理したデモです",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "CUSTOM HOME",
    titleLine2: "& REFORM",
    subtitle: "匠の家シリーズと住宅リフォームの特徴をトップから短時間で把握できる構成です",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "CONTACT",
    titleLine2: "& ACCESS",
    subtitle: "電話・メール・フォームの相談先を迷わず見つけられるよう再構成しています",
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
    href: "#service",
  },
  {
    title: "住宅リフォーム",
    titleEn: "REFORM",
    iconPaths: [
      "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
      "M20 32L32 20L44 32",
    ],
    href: "#service",
  },
  {
    title: "相談導線",
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
    category: "EVENT",
    date: "2025.06.14",
    dateISO: "2025-06-14",
    title: "完成見学会の案内を掲載",
    href: "https://www.ishiyama-kensetsu.com/",
  },
  {
    category: "BLOG",
    date: "2021.11.17",
    dateISO: "2021-11-17",
    title: "完成見学会を開催します！",
    href: "https://www.ishiyama-kensetsu.com/post/%E5%AE%8C%E6%88%90%E8%A6%8B%E5%AD%A6%E4%BC%9A%E3%82%92%E9%96%8B%E5%82%AC%E3%81%97%E3%81%BE%E3%81%99%EF%BC%81",
  },
  {
    category: "BLOG",
    date: "2021.09.29",
    dateISO: "2021-09-29",
    title: "構造見学会でチェックするポイントは？",
    href: "https://www.ishiyama-kensetsu.com/post/%E6%A7%8B%E9%80%A0%E8%A6%8B%E5%AD%A6%E4%BC%9A%E3%81%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AF%EF%BC%9F",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E7%B6%B2%E8%B5%B0%E5%B8%82%E5%8C%973%E6%9D%A1%E8%A5%BF4%E4%B8%81%E7%9B%AE13-3";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "所在地",
  postalCode: "093-0013",
  address: "北海道網走市北3条西4丁目13-3",
  tel: "0152-44-2832",
  fax: "0152-45-3510",
  mapLink: mapQuery,
  linkLabel: "≫ Google Map",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "株式会社石山建設",
  postalCode: "093-0013",
  address: "北海道網走市北3条西4丁目13-3",
  tel: "0800-222-1480",
  email: "ishiyama@ishimail.com",
  mapLink: "https://www.ishiyama-kensetsu.com/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B",
  linkLabel: "≫ お問い合わせフォーム",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "石山建設",
  nameEn: "ISHIYAMA KENSETSU",
  corporateName: "株式会社石山建設",
  copyrightName: "Ishiyama Kensetsu",
  region: "北海道 網走市",
  tagline:
    "網走市で注文住宅と住宅リフォームを中心に、暮らしの相談を受け付ける地域工務店です",
  phone: "0800-222-1480",
  hours: "電話・メール・フォームでお問い合わせ受付",
  contactHref: "#access",
  siteTitle: "石山建設 | 網走市で注文住宅・リフォームを相談できる工務店",
  siteDescription:
    "石山建設の公開情報をもとに、網走市での注文住宅、住宅リフォーム、会社案内、電話・メール・フォーム導線を見やすく整理した営業用デモページです。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "石山建設の考え方",
    headline: "家づくりで物語をつくる想いと\n網走での相談導線を一画面で伝える構成へ整えます。",
    body: [
      "トップでは「家づくりで、物語をつくる」という言葉とともに、網走市の工務店として新築・リフォーム・商業施設改修まで相談できる案内が掲載されています。",
      "会社概要では1979年創業の経緯や代表のメッセージが丁寧に書かれており、地域で積み重ねてきた姿勢は強みとして十分に伝えられます。",
      "このデモでは、見学会やブログが縦に長く並ぶ現状より先に、対応内容、相談先、会社情報へ短時間で進める流れを意識しています。",
    ],
    ctaHref: "#access",
    ctaLabel: "相談先を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "網走の工務店相談導線イメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "注文住宅と住宅リフォームの内容を\n入口で整理して伝えやすくします。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "注文住宅とリフォームの相談イメージ",
    cards: serviceCards,
  },
  news,
  access: {
    hq: accessHq,
    model: accessContact,
  },
  social: {
    facebook: "https://www.facebook.com/%E5%8C%97%E3%81%AE%E5%8C%A0-%E7%9F%B3%E5%B1%B1%E5%BB%BA%E8%A8%AD-108685751581285",
    instagram: "https://www.instagram.com/ishiyama_kensetsu/?hl=ja",
  },
  footerColumns: [
    {
      heading: "家づくり案内",
      links: [
        { label: "石山建設の考え方", href: "#concept" },
        { label: "注文住宅", href: "#service" },
        { label: "住宅リフォーム", href: "#service", indent: true },
        { label: "外構・解体・塗装", href: "#service", indent: true },
      ],
    },
    {
      heading: "公開情報",
      links: [
        { label: "完成見学会の案内", href: "#information" },
        { label: "会社概要", href: "https://www.ishiyama-kensetsu.com/%E5%BD%93%E7%A4%BE%E3%81%AE%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB" },
        { label: "企業理念", href: "https://www.ishiyama-kensetsu.com/%E5%BD%93%E7%A4%BE%E3%81%AE%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB-1" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "所在地", href: "#access" },
        { label: "電話", href: "#access" },
        { label: "メール", href: "mailto:ishiyama@ishimail.com" },
      ],
    },
    {
      heading: "お問い合わせ",
      links: [
        { label: "お問い合わせフォーム", href: "https://www.ishiyama-kensetsu.com/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B" },
        { label: "公式サイト", href: "https://www.ishiyama-kensetsu.com/" },
        { label: "Instagram", href: "https://www.instagram.com/ishiyama_kensetsu/?hl=ja" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "会社概要", href: "https://www.ishiyama-kensetsu.com/%E5%BD%93%E7%A4%BE%E3%81%AE%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB" },
    { label: "お問い合わせフォーム", href: "https://www.ishiyama-kensetsu.com/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B" },
    { label: "Instagram", href: "https://www.instagram.com/ishiyama_kensetsu/?hl=ja" },
    { label: "Facebook", href: "https://www.facebook.com/%E5%8C%97%E3%81%AE%E5%8C%A0-%E7%9F%B3%E5%B1%B1%E5%BB%BA%E8%A8%AD-108685751581285" },
    { label: "公式サイト", href: "https://www.ishiyama-kensetsu.com/" },
  ],
}, "builder");
