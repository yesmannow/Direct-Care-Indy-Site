/**
 * Single Source of Truth - Image Asset Library
 *
 * All image paths are centralized here to prevent broken links
 * and ensure consistent asset usage across the platform.
 */

export const SITE_ASSETS = {
  clinical: {
    roundTable: '/images/clinical/round-table.webp',
    pulmonary: '/images/clinical/pulmonary-clinic.webp',
    ninetyTen: '/images/clinical/ninety-ten-model.svg',
    specialist: '/images/clinical/specialist-team.webp',
    medicalDiagram: '/images/clinical/medical-diagram-1.webp',
    healthcareChart: '/images/clinical/healthcare-chart-1.webp',
    medicalLaboratory: '/images/clinical/medical-laboratory.webp',
  },
  marketing: {
    employer: '/images/marketing/trades-90-10.webp',
    hvac: '/images/marketing/hvac-technician.webp',
    seniors: '/images/marketing/senior-healthcare.webp',
    seniorWellness: '/images/marketing/senior-wellness.webp',
    smallBiz: '/images/marketing/small-business-team.webp',
    smallBizOffice: '/images/marketing/small-business-office.webp',
    tradesDiverse: '/images/marketing/trades-diverse.webp',
    employerWellness: '/images/marketing/employer-wellness.webp',
  },
  locations: {
    carmel: '/images/locations/carmel-hero.webp',
    zionsville: '/images/locations/zionsville-hero.webp',
    fishers: '/images/locations/fishers-hero.webp',
    geist: '/images/locations/geist-hero.webp',
    indianaSuburban: '/images/locations/indiana-suburban-home.webp',
    indianapolisSuburban: '/images/locations/indianapolis-suburban.webp',
  },
  ui: {
    megaMenu: '/images/ui/mega-menu-overlay.webp',
    texture: '/images/ui/clinical-texture.webp',
    glass: '/images/ui/glass-overlay.svg',
    tealGradient: '/images/ui/teal-gradient.webp',
  },
  providers: {
    jamesPike: '/images/providers/james-pike.webp',
    karinaWhite: '/images/providers/karina-white.webp',
    maddieKlinger: '/images/providers/maddie-klinger.webp',
    chaseKeirn: '/images/providers/chase-keirn.webp',
  },
  blog: {
    medigapBirthdayRule: '/images/marketing/senior-wellness.webp',
    seniorHealthcare: '/images/marketing/senior-healthcare.webp',
  },
  logos: {
    primary: '/images/optimized/logos/dci logo primary.webp',
    secondary: '/images/optimized/logos/dci logo secondary.webp',
  },
} as const;

/**
 * Helper function to get asset path with type safety
 */
export function getAsset(category: keyof typeof SITE_ASSETS, key: string): string {
  const categoryAssets = SITE_ASSETS[category] as Record<string, string>;
  return categoryAssets[key] || '';
}

/**
 * Type-safe asset access
 */
export type ClinicalAsset = keyof typeof SITE_ASSETS.clinical;
export type MarketingAsset = keyof typeof SITE_ASSETS.marketing;
export type LocationAsset = keyof typeof SITE_ASSETS.locations;
export type UIAsset = keyof typeof SITE_ASSETS.ui;
export type ProviderAsset = keyof typeof SITE_ASSETS.providers;
export type BlogAsset = keyof typeof SITE_ASSETS.blog;
export type LogoAsset = keyof typeof SITE_ASSETS.logos;

