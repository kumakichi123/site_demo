import type { CompanyData } from "@/data/company";

export type IndustryKey =
  | "builder"
  | "painting"
  | "electrician"
  | "fire-safety"
  | "other";

interface IndustryImagePack {
  heroSlides: [string, string, string];
  concept: string;
  service: string;
}

const builderPack: IndustryImagePack = {
  heroSlides: [
    "/images/hero-slide-1.png",
    "/images/hero-slide-2.png",
    "/images/hero-slide-3.png",
  ],
  concept: "/images/concept.png",
  service: "/images/service.png",
};

const industryImagePacks: Record<IndustryKey, IndustryImagePack> = {
  builder: builderPack,
  painting: {
    heroSlides: [
      "/images/industries/painting/painting-hero-work.png",
      "/images/industries/painting/painting-finish-house.png",
      "/images/industries/painting/painting-consultation.png",
    ],
    concept: "/images/industries/painting/painting-finish-house.png",
    service: "/images/industries/painting/painting-consultation.png",
  },
  electrician: {
    heroSlides: [
      "/images/industries/electrician/electrician-hero-work.png",
      "/images/industries/electrician/electrician-home-equipment.png",
      "/images/industries/electrician/electrician-consultation.png",
    ],
    concept: "/images/industries/electrician/electrician-home-equipment.png",
    service: "/images/industries/electrician/electrician-consultation.png",
  },
  "fire-safety": {
    heroSlides: [
      "/images/industries/fire-safety/fire-safety-hero-inspection.png",
      "/images/industries/fire-safety/fire-safety-building-equipment.png",
      "/images/industries/fire-safety/fire-safety-consultation.png",
    ],
    concept: "/images/industries/fire-safety/fire-safety-building-equipment.png",
    service: "/images/industries/fire-safety/fire-safety-consultation.png",
  },
  other: builderPack,
};

export function getIndustryImagePack(industryKey: IndustryKey): IndustryImagePack {
  return industryImagePacks[industryKey] ?? builderPack;
}

export function normalizeIndustryLabel(label?: string | null): IndustryKey {
  const normalized = (label ?? "").toLowerCase().replace(/\s+/g, "");

  if (!normalized) return "other";

  if (
    normalized.includes("塗装") ||
    normalized.includes("painting") ||
    normalized.includes("外壁")
  ) {
    return "painting";
  }

  if (
    normalized.includes("電気") ||
    normalized.includes("electric") ||
    normalized.includes("設備工事")
  ) {
    return "electrician";
  }

  if (
    normalized.includes("消防") ||
    normalized.includes("防災") ||
    normalized.includes("fire") ||
    normalized.includes("alarm")
  ) {
    return "fire-safety";
  }

  if (
    normalized.includes("工務店") ||
    normalized.includes("建設") ||
    normalized.includes("建築") ||
    normalized.includes("住宅") ||
    normalized.includes("house") ||
    normalized.includes("builder")
  ) {
    return "builder";
  }

  return "other";
}

export function applyIndustryImages(
  company: CompanyData,
  industryKey: IndustryKey,
): CompanyData {
  const imagePack = getIndustryImagePack(industryKey);

  return {
    ...company,
    heroSlides: company.heroSlides.map((slide, index) => ({
      ...slide,
      image: imagePack.heroSlides[index] ?? imagePack.heroSlides[0],
    })),
    concept: {
      ...company.concept,
      image: imagePack.concept,
    },
    service: {
      ...company.service,
      image: imagePack.service,
    },
  };
}
