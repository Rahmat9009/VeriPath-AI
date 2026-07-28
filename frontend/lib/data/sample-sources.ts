export interface OfficialSource {
  name: string;
  organization: string;
  url: string;
  lastReviewed: string;
}

export const sampleSources: OfficialSource[] = [
  {
    name: "Qatar Visa & Entry Requirements",
    organization: "Ministry of Interior, Qatar",
    url: "https://portal.moi.gov.qa",
    lastReviewed: "June 2026",
  },
  {
    name: "Wage Protection System Guidelines",
    organization: "Ministry of Labour, Qatar",
    url: "https://www.adlsa.gov.qa",
    lastReviewed: "May 2026",
  },
  {
    name: "Overseas Employment & Migrant Workers",
    organization: "BMET — Government of Bangladesh",
    url: "https://bmet.gov.bd",
    lastReviewed: "June 2026",
  },
  {
    name: "Recruitment Fees & Contract Terms",
    organization: "International Labour Organization (ILO)",
    url: "https://www.ilo.org/global/topics/labour-migration",
    lastReviewed: "April 2026",
  },
  {
    name: "Qatar Labour Law — Employment Standards",
    organization: "IOM — UN Migration",
    url: "https://www.iom.int/qatar-labour-law",
    lastReviewed: "May 2026",
  },
  {
    name: "Occupational Safety & Health Regulations",
    organization: "Ministry of Public Health, Qatar",
    url: "https://www.moph.gov.qa",
    lastReviewed: "June 2026",
  },
];