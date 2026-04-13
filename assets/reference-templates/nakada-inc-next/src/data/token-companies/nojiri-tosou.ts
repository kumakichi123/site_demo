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
      { label: "親方とヨメの二人三脚", href: "#concept" },
      { label: "1級建築塗装技能士の対応", href: "#concept" },
    ],
  },
  {
    labelJp: "対応内容",
    labelEn: "SERVICE",
    href: "#service",
    children: [
      { label: "外壁塗装", href: "#service" },
      { label: "屋根塗装", href: "#service" },
      { label: "除雪", href: "#service" },
    ],
  },
  {
    labelJp: "ブログ案内",
    labelEn: "NEWS",
    href: "#information",
  },
  {
    labelJp: "お問い合わせ",
    labelEn: "COMPANY",
    href: "#access",
    children: [
      { label: "対応エリア", href: "#access" },
      { label: "電話受付", href: "#access" },
      { label: "メールフォーム", href: "#access" },
    ],
  },
];

const heroSlides: HeroSlide[] = [
  {
    titleLine1: "ASAHIKAWA",
    titleLine2: "PAINT WORKS",
    subtitle: "旭川市末広で外壁塗装と屋根塗装を相談できる塗装店です",
    ctaHref: "#concept",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-1.png",
  },
  {
    titleLine1: "ROOF",
    titleLine2: "& EXTERIOR",
    subtitle: "親方野尻が見積りから打合せ、施工まで一貫して担当します",
    ctaHref: "#service",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-2.png",
  },
  {
    titleLine1: "PAINT",
    titleLine2: "& SNOW",
    subtitle: "塗装に加えて除雪の相談先もトップで分かるように整理します",
    ctaHref: "#access",
    ctaLabel: "VIEW DETAIL",
    image: "/images/hero-slide-3.png",
  },
];

const serviceCards: ServiceCard[] = [
  {
    title: "外壁塗装",
    titleEn: "EXTERIOR",
    iconPaths: ["M32 8L4 28V56H24V40H40V56H60V28L32 8Z"],
    href: "#access",
  },
  {
    title: "屋根塗装",
    titleEn: "ROOF",
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
    category: "ブログ更新",
    date: "2026.03.31",
    dateISO: "2026-03-31",
    title: "本日折込チラシをお届けしています♪",
    href: "https://ameblo.jp/nojiritoso/entry-12961246157.html",
  },
  {
    category: "施工事例",
    title: "のじり塗装〜施工事例〜まとめページ",
    href: "https://ameblo.jp/nojiritoso/entry-12346194101.html",
  },
  {
    category: "お問い合わせ",
    title: "メールフォームはこちら 24時間受付中",
    href: "https://nojiritoso.wixsite.com/nojiritoso/contact",
  },
];

const mapQuery =
  "https://www.google.com/maps?q=%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%AD%E5%B7%9D%E5%B8%82%E6%9C%AB%E5%BA%83";
const mapEmbed = `${mapQuery}&output=embed`;

const accessHq: Location = {
  label: "対応エリア",
  postalCode: "",
  address: "北海道旭川市末広",
  tel: "0166-56-3658",
  mapLink: mapQuery,
  linkLabel: "≫ 旭川市末広を地図で見る",
  mapEmbed,
};

const accessContact: Location = {
  label: "お問い合わせ",
  name: "電話・メールフォーム受付",
  postalCode: "",
  address:
    "電話は年中無休 AM7:00〜PM8:00、メールフォームは24時間受付中です。",
  tel: "0166-56-3658",
  mapLink: "https://nojiritoso.wixsite.com/nojiritoso/contact",
  linkLabel: "≫ メールフォームを開く",
  mapEmbed,
};

export const company: CompanyData = applyIndustryImages({
  name: "のじり塗装",
  nameEn: "NOJIRI TOSOU",
  corporateName: "のじり塗装",
  copyrightName: "Nojiri Tosou",
  region: "北海道旭川市末広",
  tagline:
    "旭川市末広で外壁塗装・屋根塗装と除雪を相談できる塗装店です",
  phone: "0166-56-3658",
  hours: "年中無休 AM7:00〜PM8:00",
  contactHref: "#access",
  siteTitle: "のじり塗装 | 旭川市末広で外壁塗装・屋根塗装と除雪を相談できる塗装店",
  siteDescription:
    "のじり塗装は北海道旭川市末広を拠点に、外壁塗装、屋根塗装、除雪の相談を受け付けています。見積り・打合せ・施工は親方野尻が担当し、メールフォームは24時間受付です。",
  navigation,
  heroSlides,
  concept: {
    sectionLabel: "のじり塗装の考え方",
    headline: "親方とヨメの二人三脚で\n塗装と相談の流れを分かりやすく整えます。",
    body: [
      "ブログトップでは、1級建築塗装技能士資格を持つ親方げんちゃんを、代表親方のヨメが支えながら魅力を伝えていることが案内されています。",
      "同じページ内で、お見積りも打合せも施工も親方野尻が担当すると明記されており、誰が対応するのかが分かる安心感があります。",
      "プロフィール欄では、屋根塗装、外壁塗装、車庫・カーポート・灯油タンク・塀などの塗装に加えて、除雪の案内も見つけられます。",
    ],
    ctaHref: "#access",
    ctaLabel: "連絡方法を見る",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "外壁塗装と相談導線のイメージ",
  },
  service: {
    sectionLabel: "対応内容",
    headline: "外壁塗装も屋根塗装も除雪も\nトップで迷わず相談先へ進める構成です。",
    ctaHref: "#access",
    ctaLabel: "お問い合わせ先を見る",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "塗装工事と除雪相談のイメージ",
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
      heading: "塗装と除雪",
      links: [
        { label: "のじり塗装の考え方", href: "#concept" },
        { label: "外壁塗装", href: "#service" },
        { label: "屋根塗装", href: "#service", indent: true },
        { label: "除雪", href: "#service", indent: true },
        { label: "お問い合わせ", href: "#access" },
      ],
    },
    {
      heading: "相談の流れ",
      links: [
        { label: "親方とヨメの二人三脚", href: "#concept" },
        { label: "1級建築塗装技能士の対応", href: "#concept" },
        { label: "施工事例を見る", href: "#information" },
      ],
    },
    {
      heading: "公開情報",
      links: [
        { label: "ブログ更新", href: "#information" },
        { label: "親方プロフィール", href: "https://ameblo.jp/nojiritoso/entry-12336891409.html" },
        { label: "施工事例", href: "https://ameblo.jp/nojiritoso/entry-12346194101.html" },
      ],
    },
    {
      heading: "お問い合わせ",
      links: [
        { label: "電話受付", href: "#access" },
        { label: "メールフォーム", href: "https://nojiritoso.wixsite.com/nojiritoso/contact" },
        { label: "公式ブログ", href: "https://ameblo.jp/nojiritoso/" },
      ],
    },
  ],
  footerBottomLinks: [
    { label: "ブログ更新", href: "#information" },
    { label: "親方プロフィール", href: "https://ameblo.jp/nojiritoso/entry-12336891409.html" },
    { label: "施工事例", href: "https://ameblo.jp/nojiritoso/entry-12346194101.html" },
    { label: "メールフォーム", href: "https://nojiritoso.wixsite.com/nojiritoso/contact" },
    { label: "公式ブログ", href: "https://ameblo.jp/nojiritoso/" },
  ],
}, "painting");
