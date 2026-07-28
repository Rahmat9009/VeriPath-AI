export interface RiskFinding {
  claim: string;
  officialSourceClaim: string;
  source: string;
  status: "green" | "amber" | "red";
  explanation: string;
}

export interface MockShieldResult {
  documentType: string;
  title: string;
  overallStatus: "green" | "amber" | "red";
  summary: string;
  findings: RiskFinding[];
}

export const mockShieldResult: MockShieldResult = {
  documentType: "WhatsApp Recruitment Message",
  title: "Qatar Security Guard Position — Urgent Hiring",
  overallStatus: "red",
  summary:
    "This document contains multiple claims that do not match official sources. The salary figure is significantly higher than the standard rate for this role, the fee request is not part of official visa processing, and the urgency language matches known pressure tactics.",
  findings: [
    {
      claim: "Salary: QAR 3,500 per month",
      officialSourceClaim:
        "Standard security guard salary in Qatar ranges from QAR 1,200–1,800 per month (Ministry of Labour, 2026).",
      source: "Ministry of Labour, Qatar — Wage Protection System",
      status: "red",
      explanation:
        "The offered salary is approximately double the verified market rate for this role in Qatar. Exceptionally high salary offers for unskilled positions are a known recruitment scam indicator.",
    },
    {
      claim: "Visa processing fee: QAR 2,000",
      officialSourceClaim:
        "Qatar work visa processing fee is approximately QAR 200–350 (Ministry of Interior, 2026). Additional agency service fees are not regulated but should be disclosed in writing.",
      source: "Ministry of Interior, Qatar — Visa Services",
      status: "red",
      explanation:
        "The requested fee is 6–10 times the official visa processing cost. Legitimate recruitment fees should be transparent and documented with receipts.",
    },
    {
      claim: '"Limited slots — apply within 48 hours"',
      officialSourceClaim:
        "Qatar work permits are processed throughout the year with no fixed quota deadlines for standard occupations (Ministry of Interior, 2026).",
      source: "Ministry of Interior, Qatar",
      status: "amber",
      explanation:
        "Urgency language pressuring quick decisions is a common tactic in recruitment scams. Official visa processing does not have arbitrary 48-hour deadlines for standard applications.",
    },
    {
      claim: "Free accommodation and transport provided",
      officialSourceClaim:
        "Employers are required to provide accommodation or an accommodation allowance. Standards vary and should be specified in the employment contract (Qatar Labour Law, Article 35).",
      source: "IOM — UN Migration — Qatar Labour Law Guide",
      status: "amber",
      explanation:
        "While accommodation provision is standard, the specific quality and location are not guaranteed. Verify the accommodation details are included in a written contract before travel.",
    },
    {
      claim: "No experience required for security guard role",
      officialSourceClaim:
        "Security guard positions in Qatar typically require a minimum of 2 years relevant experience and a security clearance (Ministry of Interior, 2026).",
      source: "Ministry of Interior, Qatar — Security Licensing",
      status: "red",
      explanation:
        "The claim that no experience is needed contradicts official requirements. Positions with unusually low entry requirements combined with high pay are a strong warning sign.",
    },
  ],
};