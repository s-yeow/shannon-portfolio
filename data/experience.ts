// Experience content, pulled from Shannon's résumé. Edit here to update the Experience section.

export const resumeUrl = 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e6bfc4f9-08a1-4bf3-a39c-14536e07a9f9';

export type Role = {
  org: string;
  role: string;
  dates: string;
  points: string[];
};

export const professional: Role[] = [
  {
    org: 'PricewaterhouseCoopers (PwC)',
    role: 'Data & Analytics Tech Consulting Intern',
    dates: 'Jun – Aug 2025',
    points: [
      'Assessed fraud risk management for client; identified control gaps and delivered regulatory-aligned recommendations.',
      'Led project on client-facing eCommerce fraud co-pilot tools of insights generation, rule optimization, and case review.',
      'Developed executive strategy deck providing a comprehensive overview of firmwide GenAI initiatives.',
      'Won 1st place in PwC’s hackathon with a SQL/ML solution detecting anomalous behavior in post-merger customer data.',
    ],
  },
  {
    org: 'Amazon',
    role: 'Software Development Engineering Intern',
    dates: 'May – Aug 2024',
    points: [
      'Spearheaded development of the Unified MO Explainer, an internal eXplainableAI tool used by 100K+ internal users to investigate order fraud, surfacing fraud analysis insights that inform mitigation strategies for 3.5B+ annual transactions.',
      'Partnered with ML scientists to extract and standardize key fraud signals from model outputs, designing a modular architecture that supported multiple XAI explainers and formatted complex reasoning into clear, analyst-readable insights.',
    ],
  },
  {
    org: 'Alariss Global',
    role: 'Business Development Intern',
    dates: 'Jan – Feb 2024',
    points: ['Researched marketing strategies and designed collateral to promote the US GTM Bootcamp for international startups.'],
  },
  {
    org: 'Amazon',
    role: 'Software Development Engineering Intern',
    dates: 'Jun – Aug 2023',
    points: [
      'Developed and deployed a full-stack automation on Seller Central that dynamically adjusted excess storage reservations when seller base capacity increased, preventing overcharges for 26.5K+ sellers and reducing manual interventions.',
      'Collaborated with PMs and UX designers to shape feature behavior and front-end messaging; translated nuanced seller policies into clear, intuitive UI logic to ensure accurate client interpretation and alignment with business goals.',
    ],
  },
  {
    org: 'Air Force Research Laboratory (AFRL)',
    role: 'Cyber Resiliency Laboratory Intern',
    dates: 'Jun – Jul 2021',
    points: [
      'Developed a proof of concept allowing ground control to operate a Raspberry Pi Camera Module through containerized microservices, demonstrating potential applications for enhancing satellite cyber resiliency.',
    ],
  },
];

/** Selected campus leadership — one line each. */
export const leadership: { org: string; role: string; dates: string; note: string }[] = [
  {
    org: 'The Daily Princetonian',
    role: 'Lead UI/UX Engineer',
    dates: '2022 – 2024',
    note: 'Sole designer of The Daily Prince app (Fall 2023 launch), serving 10K+ users to date.',
  },
  {
    org: 'Princeton Institute for International and Regional Studies',
    role: 'Undergraduate Fellow',
    dates: '2025 – 2026',
    note: '1 of 10 undergraduates awarded $7,500 for independent research on China’s rice supply chain.',
  },
  {
    org: 'Undergraduate Student Government',
    role: 'Class of 2026 Treasurer; Last Lectures \& Annual Giving Committee Chair',
    dates: '2023 – 2026',
    note: 'Managed a $100K+ annual budget for ~1,500 students.',
  },
  {
    org: 'Office of Undergraduate Research',
    role: 'Engineering Correspondent',
    dates: '2023 – 2026',
    note: 'Bi-weekly engineering features for a publication with 28K+ annual views.',
  },
  {
    org: 'Emma Bloomberg Center for Access and Opportunity',
    role: 'Head Fellow',
    dates: '2025 – 2026',
    note: 'Led weekly mentorship programming for a cohort of 30+ first-gen and low-income students.',
  },
  {
    org: 'Computer Science Introductory Program',
    role: 'Founder, Executive Director',
    dates: '2021 – present',
    note: 'Scratch workshops for 200+ students and a web development camp focused on social good.',
  },
];

export const recognition: { title: string; detail: string; year: string }[] = [
  { title: 'Environmental Studies Book Prize in Engineering', detail: 'Princeton University', year: '2026' },
  { title: 'Sigma Xi Induction', detail: 'Princeton University', year: '2026' },
  { title: '1st place, PwC hackathon', detail: 'SQL/ML anomaly detection', year: '2025' },
  { title: 'Student Leadership Summit', detail: 'Palantir · 1 of ~15 nationally', year: '2024' },
  { title: 'Summer Venture in Management Program', detail: 'Harvard Business School · 1 of ~180', year: '2024' },
  { title: 'Nexus Fellow', detail: 'D. E. Shaw · 1 of ~40', year: '2024' },
  { title: 'Rising Fellows Program', detail: 'Bridgewater · 1 of ~30', year: '2023' },
  { title: 'Computer Science Summer Institute', detail: 'Google · 1 of ~70', year: '2022' },
];

export const skills: { label: string; value: string }[] = [
  {
    label: 'Technical',
    value: 'Python, Java, C, C++, TypeScript, JavaScript, React.js, Node.js, HTML/CSS, SQL, AWS, Docker, Git, Figma',
  },
  { label: 'Languages', value: 'Mandarin (native), Spanish (fluent), Cantonese (beginner), Malay (learning)' },
];
