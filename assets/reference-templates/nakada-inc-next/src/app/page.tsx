import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { NavMain } from "@/components/NavMain";
import { MobileNav } from "@/components/MobileNav";
import { HeroSlider } from "@/components/HeroSlider";
import { ConceptSection } from "@/components/ConceptSection";
import { ServiceSection } from "@/components/ServiceSection";
import { InfoSection } from "@/components/InfoSection";
import { AccessSection } from "@/components/AccessSection";
import { Footer } from "@/components/Footer";
import { getCompanyData } from "@/data/company-resolver";

type HomeProps = {
  searchParams?: Promise<{
    token?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const params = await searchParams;
  const company = getCompanyData(params?.token);
  return {
    title: company.siteTitle,
    description: company.siteDescription,
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const company = getCompanyData(params?.token);

  return (
    <>
      <Header company={company} />
      <NavMain company={company} />
      <MobileNav company={company} />
      <HeroSlider company={company} />
      <ConceptSection company={company} />
      <ServiceSection company={company} />
      <InfoSection company={company} />
      <AccessSection company={company} />
      <Footer company={company} />
    </>
  );
}
