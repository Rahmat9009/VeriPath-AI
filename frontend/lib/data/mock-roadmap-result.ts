export interface PathwayStep {
  step: string;
  description: string;
  estimatedCost: string;
  estimatedTime: string;
  source: string;
  riskLevel: "green" | "amber" | "red";
}

export interface MockRoadmapResult {
  destination: string;
  occupation: string;
  educationLevel: string;
  budget: string;
  overallAssessment: string;
  pathway: PathwayStep[];
}

export const mockRoadmapResult: MockRoadmapResult = {
  destination: "Qatar",
  occupation: "Construction Worker (General)",
  educationLevel: "Secondary School Certificate (SSC)",
  budget: "BDT 80,000–1,20,000",
  overallAssessment:
    "The Bangladesh-to-Qatar construction worker pathway is established and regulated. Follow the steps below with verified costs and timelines. Warning: ensure your employer covers visa and transportation costs as required by Qatar Labour Law.",
  pathway: [
    {
      step: "Obtain a Valid Passport",
      description:
        "Ensure your passport has at least 2 years validity remaining. Apply at your local passport office or online through the Department of Immigration & Passports.",
      estimatedCost: "BDT 4,000–6,000",
      estimatedTime: "15–30 working days",
      source: "Department of Immigration & Passports, Bangladesh",
      riskLevel: "green",
    },
    {
      step: "Secure Employment through a Licensed Recruiting Agent",
      description:
        "Find a BMET-licensed recruiting agency. Verify the license on the BMET website. Do not pay any fees before signing a formal job offer.",
      estimatedCost: "BDT 10,000–25,000 (agency service fee)",
      estimatedTime: "1–4 weeks",
      source: "BMET — Bureau of Manpower, Employment & Training",
      riskLevel: "amber",
    },
    {
      step: "Medical Examination",
      description:
        "Complete a medical check at a BMET-approved medical centre. Tests include chest X-ray, blood tests, and physical examination.",
      estimatedCost: "BDT 3,000–5,000",
      estimatedTime: "2–3 working days",
      source: "BMET — Pre-departure Medical Guidelines",
      riskLevel: "green",
    },
    {
      step: "Visa Application & Processing",
      description:
        "Your employer in Qatar applies for a work visa through the Ministry of Interior. You will receive a visa copy electronically. Do not pay for visa processing yourself — this is the employer's responsibility.",
      estimatedCost: "QAR 200–350 (paid by employer)",
      estimatedTime: "2–6 weeks",
      source: "Ministry of Interior, Qatar — Work Visa Services",
      riskLevel: "amber",
    },
    {
      step: "Pre-Departure Orientation & Clearance",
      description:
        "Attend mandatory pre-departure briefing at a BMET centre. Receive your employment contract, visa copy, and flight details. Sign the contract only after reviewing all terms.",
      estimatedCost: "BDT 0 (free)",
      estimatedTime: "1 day",
      source: "BMET — Pre-departure Orientation Programme",
      riskLevel: "green",
    },
    {
      step: "Travel & Arrival in Qatar",
      description:
        "Travel to Qatar on an employer-provided ticket. Upon arrival, complete fingerprinting and health screening. Your employer must provide accommodation within 2 weeks.",
      estimatedCost: "BDT 40,000–60,000 (employer should provide ticket)",
      estimatedTime: "Flight: 5 hours",
      source: "Qatar Ministry of Labour — Migrant Worker Welfare",
      riskLevel: "green",
    },
  ],
};