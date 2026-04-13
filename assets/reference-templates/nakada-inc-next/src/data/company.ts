/**
 * company.ts — 全差し替えデータの一元管理
 *
 * デモサイト作成エージェントは、このファイルの値を営業先の情報に
 * 差し替えるだけで事業者別デモを生成できる。
 *
 * ★ データ差し替えポイント: このファイル内のすべての値
 */

// ---------------------------------------------------------------------------
// Navigation item type
// ---------------------------------------------------------------------------
export interface NavItem {
  labelJp: string;
  labelEn: string;
  href: string;
  children?: { label: string; href: string }[];
}

// ---------------------------------------------------------------------------
// Hero slide type
// ---------------------------------------------------------------------------
export interface HeroSlide {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel: string;
  image: string;
}

export interface CtaBlock {
  sectionLabel: string;
  headline: string;
  ctaHref: string;
  ctaLabel: string;
  ctaLabelEn: string;
  image: string;
  imageAlt: string;
}

// ---------------------------------------------------------------------------
// Service card type
// ---------------------------------------------------------------------------
export interface ServiceCard {
  title: string;
  titleEn: string;
  /** SVG path data for the icon */
  iconPaths: string[];
  href: string;
}

// ---------------------------------------------------------------------------
// News item type
// ---------------------------------------------------------------------------
export interface NewsItem {
  category: string;
  date?: string;
  dateISO?: string;
  title: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Location type
// ---------------------------------------------------------------------------
export interface Location {
  label: string;
  name?: string;
  postalCode: string;
  address: string;
  tel?: string;
  fax?: string;
  email?: string;
  mapLink: string;
  linkLabel?: string;
  /** Google Maps Embed URL. Empty string = placeholder shown. */
  mapEmbed: string;
}

// ---------------------------------------------------------------------------
// Company data
// ---------------------------------------------------------------------------
export const company = {
  // --- 基本情報 ---
  name: "[会社名]",
  nameEn: "[COMPANY] HOUSE DESIGN",
  corporateName: "株式会社 [会社名]",
  copyrightName: "[Company Name] Co.,Ltd",
  region: "[地域名]",
  tagline:
    "[地域名]の天然木住宅／リフォームを既成概念にとらわれない設計力でご提供します",
  phone: "000-000-0000",
  hours: "お問い合わせ 9:00〜17:30（日・祝を除く）",
  contactHref: "#access",

  // --- SEO ---
  siteTitle: "[会社名]｜[地域名]の工務店",
  siteDescription:
    "[会社名]は[地域名]で天然木を使ったデザイン性の高い住宅を提供する工務店です。新築・リフォーム・アフターサービスまで一貫対応。",

  // --- ナビゲーション ---
  navigation: [
    {
      labelJp: "ラインナップ",
      labelEn: "LINEUP",
      href: "#lineup",
      children: [
        { label: "自由設計", href: "#" },
        { label: "規格住宅", href: "#" },
        { label: "家づくりの流れ", href: "#" },
        { label: "料金体系", href: "#" },
      ],
    },
    {
      labelJp: "リフォーム",
      labelEn: "REFORM",
      href: "#reform",
      children: [
        { label: "サービス内容", href: "#" },
        { label: "リフォームの流れ", href: "#" },
        { label: "料金体系", href: "#" },
      ],
    },
    {
      labelJp: "コンセプト",
      labelEn: "CONCEPT",
      href: "#concept",
      children: [
        { label: "健康", href: "#" },
        { label: "省エネ", href: "#" },
        { label: "耐震", href: "#" },
        { label: "耐久性", href: "#" },
        { label: "デザイン", href: "#" },
        { label: "アフターサービス", href: "#" },
      ],
    },
    {
      labelJp: "モデルハウス",
      labelEn: "MODEL HOUSE",
      href: "#",
    },
    {
      labelJp: "施工事例",
      labelEn: "CASE STUDY",
      href: "#casestudy",
      children: [
        { label: "新築", href: "#" },
        { label: "リフォーム", href: "#" },
      ],
    },
    {
      labelJp: "会社案内",
      labelEn: "COMPANY",
      href: "#company",
      children: [
        { label: "代表ごあいさつ", href: "#" },
        { label: "沿革", href: "#" },
        { label: "採用情報", href: "#" },
      ],
    },
  ] as NavItem[],

  // --- ヒーロースライダー ---
  heroSlides: [
    {
      titleLine1: "NATURAL DESIGN",
      titleLine2: "HOUSE",
      subtitle: "天然木デザインの住まい",
      ctaHref: "#concept",
      ctaLabel: "VIEW DETAIL",
      image: "/images/hero-slide-1.png",
    },
    {
      titleLine1: "QUALITY",
      titleLine2: "CRAFTSMANSHIP",
      subtitle: "匠の技が生み出す上質な空間",
      ctaHref: "#service",
      ctaLabel: "VIEW DETAIL",
      image: "/images/hero-slide-2.png",
    },
    {
      titleLine1: "WOODEN",
      titleLine2: "HOUSE",
      subtitle: "宿泊体感住宅 体験宿泊お申し込み受付中！",
      ctaHref: "#",
      ctaLabel: "VIEW DETAIL",
      image: "/images/hero-slide-3.png",
    },
  ] as HeroSlide[],

  // --- コンセプト ---
  concept: {
    sectionLabel: "[会社名]の家づくり",
    headline: "本物の天然木を使い\nデザイン性の高い住宅を提供します。",
    body: [
      "家づくりは一生に一度の大きな買い物です。お客様が価格以上に大きな満足を得られるよう、ひとつひとつの素材や空間にこだわっています。",
      "家を長寿命にする条件は使う木材をしっかりと乾燥させることと、床下や壁内などに風を通し、木を腐らせないよう通気をとることが必要です。",
      "高い設計力と独自の木材乾燥技術・通気工法によってデザイン性と耐久性を併せ持つ住宅づくりが可能です。",
    ],
    ctaHref: "#access",
    ctaLabel: "[会社名]の家づくり",
    ctaLabelEn: "VIEW CONCEPT",
    image: "/images/concept.png",
    imageAlt: "天然木の温もりある室内空間",
  } as CtaBlock & { body: string[] },

  // --- サービス ---
  service: {
    sectionLabel: "サービス内容",
    headline: "充実のアフターサービスで\nお客様との絆を守ります。",
    ctaHref: "#access",
    ctaLabel: "サービス一覧をみる",
    ctaLabelEn: "VIEW SERVICE",
    image: "/images/service.png",
    imageAlt: "開放的なリビング・ダイニング空間",
    cards: [
      {
        title: "注文住宅",
        titleEn: "ORDER",
        iconPaths: [
          "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
        ],
        href: "#",
      },
      {
        title: "リフォーム",
        titleEn: "REFORM",
        iconPaths: [
          "M32 8L4 28V56H24V40H40V56H60V28L32 8Z",
          "M20 32L32 20L44 32",
        ],
        href: "#",
      },
      {
        title: "アフターサービス",
        titleEn: "AFTER SERVICE",
        iconPaths: [
          "M24 16L8 56H16L20 44H44L48 56H56L40 16",
          "M28 36L36 28M36 36L28 28",
        ],
        href: "#",
      },
    ] as ServiceCard[],
  } as CtaBlock & { cards: ServiceCard[] },

  // --- お知らせ ---
  news: [
    { category: "お知らせ", date: "2024.2.27", dateISO: "2024-02-27", title: "[お知らせタイトル1]", href: "#" },
    { category: "お知らせ", date: "2024.2.26", dateISO: "2024-02-26", title: "[お知らせタイトル2]", href: "#" },
    { category: "お知らせ", date: "2023.2.15", dateISO: "2023-02-15", title: "[お知らせタイトル3]", href: "#" },
    { category: "お知らせ", date: "2022.11.24", dateISO: "2022-11-24", title: "[お知らせタイトル4]", href: "#" },
  ] as NewsItem[],

  // --- アクセス ---
  access: {
    hq: {
      label: "本社",
      postalCode: "000-0000",
      address: "[都道府県][市区町村][番地]",
      tel: "000-000-0000",
      fax: "000-000-0000",
      mapLink: "#",
      mapEmbed: "",
    } as Location,
    model: {
      label: "モデルハウス",
      name: "[モデルハウス名]",
      postalCode: "",
      address: "[都道府県][市区町村][番地]",
      mapLink: "#",
      mapEmbed: "",
    } as Location,
  },

  // --- SNS ---
  social: {
    facebook: "#",
    instagram: "#",
  },

  // --- フッター ---
  footerColumns: [
    {
      heading: "注文住宅",
      links: [
        { label: "[会社名]の家づくり", href: "#" },
        { label: "ラインナップ", href: "#" },
        { label: "自由設計", href: "#", indent: true },
        { label: "規格住宅", href: "#", indent: true },
        { label: "家づくりの流れ", href: "#" },
        { label: "料金体系", href: "#" },
        { label: "モデルハウス", href: "#" },
      ],
    },
    {
      heading: "リフォーム",
      links: [
        { label: "サービス内容", href: "#" },
        { label: "リフォームの流れ", href: "#" },
        { label: "料金体系", href: "#" },
      ],
    },
    {
      heading: "施工事例",
      links: [
        { label: "新築", href: "#" },
        { label: "リフォーム", href: "#" },
      ],
    },
    {
      heading: "会社案内",
      links: [
        { label: "会社概要", href: "#" },
        { label: "代表ごあいさつ", href: "#" },
        { label: "沿革", href: "#" },
        { label: "採用情報", href: "#" },
      ],
    },
  ],

  footerBottomLinks: [
    { label: "お知らせ", href: "#" },
    { label: "見学会情報", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "お問い合わせ", href: "#contact" },
    { label: "資料請求", href: "#" },
    { label: "サイトマップ", href: "#" },
  ],
};

export type CompanyData = typeof company;
