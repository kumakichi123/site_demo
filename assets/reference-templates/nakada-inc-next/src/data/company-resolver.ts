import { company as defaultCompany, type CompanyData } from "@/data/company";
import { company as fukuiTosouCompany } from "@/data/token-companies/fukui-tosou";
import { company as hMPaintCompany } from "@/data/token-companies/h-m-paint";
import { company as ishiyamaKensetsuCompany } from "@/data/token-companies/ishiyama-kensetsu";
import { company as koaBousaiCompany } from "@/data/token-companies/koa-bousai";
import { company as kurodaKoumutenCompany } from "@/data/token-companies/kuroda-koumuten";
import { company as nojiriTosouCompany } from "@/data/token-companies/nojiri-tosou";
import { company as nukuiTosouCompany } from "@/data/token-companies/nukui-tosou";
import { company as sapporoShoboMaintenanceCompany } from "@/data/token-companies/sapporo-shobo-maintenance";
import { company as shibataKensetsuCompany } from "@/data/token-companies/shibata-kensetsu";
import { company as souketsuCompany } from "@/data/token-companies/souketsu";
import { company as suzukiDenkiSetsubiCompany } from "@/data/token-companies/suzuki-denki-setsubi";
import { company as tokyoB1970Company } from "@/data/token-companies/tokyo-b1970";
import { company as wakkanaiDenkiCompany } from "@/data/token-companies/wakkanai-denki";

const tokenCompanies: Record<string, CompanyData> = {
  "fukui-tosou": fukuiTosouCompany,
  "h-m-paint": hMPaintCompany,
  "ishiyama-kensetsu": ishiyamaKensetsuCompany,
  "koa-bousai": koaBousaiCompany,
  "kuroda-koumuten": kurodaKoumutenCompany,
  "nojiri-tosou": nojiriTosouCompany,
  "nukui-tosou": nukuiTosouCompany,
  "sapporo-shobo-maintenance": sapporoShoboMaintenanceCompany,
  "shibata-kensetsu": shibataKensetsuCompany,
  souketsu: souketsuCompany,
  "suzuki-denki-setsubi": suzukiDenkiSetsubiCompany,
  "tokyo-b1970": tokyoB1970Company,
  "wakkanai-denki": wakkanaiDenkiCompany,
};

export function getCompanyData(token?: string | null): CompanyData {
  if (!token) return defaultCompany;
  return tokenCompanies[token] ?? defaultCompany;
}

export function hasTokenCompany(token?: string | null): boolean {
  if (!token) return false;
  return token in tokenCompanies;
}
