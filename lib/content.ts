/**
 * Content model for the site.
 *
 * Every service name below comes from spec §1.2 / §1.3. Descriptions are
 * service descriptions only — no clients, statistics, certifications,
 * locations or licensing claims are invented anywhere in this file.
 *
 * Facts that are not established in the spec are marked with the
 * [CONFIRM: ...] placeholder from spec §6 so they stay trivially searchable.
 */

export type IconName =
  | 'bot'
  | 'file-search'
  | 'monitor'
  | 'layout-dashboard'
  | 'receipt'
  | 'users'
  | 'shield-check'
  | 'headphones'
  | 'heart-pulse'
  | 'package'
  | 'landmark'
  | 'car'
  | 'home'
  | 'wallet'
  | 'shopping-bag'
  | 'cpu'
  | 'rocket'
  | 'store'
  | 'building'

export type ServiceCategory = {
  id: string
  name: string
  description: string
  services: string[]
  /** Deep-dive page, where one exists. */
  href?: string
  /** Label shown for the deep-dive link. */
  hrefLabel?: string
}

export type Industry = {
  id: string
  name: string
  note: string
  divisions: Array<'AI & Future Tech' | 'BPO'>
  icon: IconName
}

export type ValueProp = { title: string; body: string }
export type ProcessStep = { title: string; body: string }
export type FlagshipService = {
  id: string
  name: string
  line: string
  href: string
  icon: IconName
}
export type NavItem = { name: string; href: string; description: string }
export type NavMenu = {
  label: string
  href: string
  columns: Array<{ title: string; items: NavItem[] }>
  footer: { label: string; href: string }
}

/* -------------------------------------------------------------------------- */
/* Division one — AI & Future Tech (spec §1.2)                                */
/* -------------------------------------------------------------------------- */

export const futureTechCategories: ServiceCategory[] = [
  {
    id: 'ai-generative-ai',
    name: 'Artificial Intelligence & Generative AI',
    description:
      'Custom AI systems built around a process you already run: assistants, document pipelines and model features inside existing products. We scope one workflow and the outcome it should change.',
    services: [
      'Custom AI software development',
      'AI-powered business solutions',
      'Generative AI applications',
      'LLM integrations',
      'AI business assistants',
      'Custom AI chatbots',
      'AI voice agents',
      'Retrieval-augmented generation (RAG)',
      'Intelligent document processing',
      'AI workflow automation',
      'Enterprise AI integrations',
    ],
    href: '/future-tech/ai-automation',
    hrefLabel: 'Learn more',
  },
  {
    id: 'ai-agents',
    name: 'AI Agents & Autonomous Systems',
    description:
      'Agents that carry a task through several steps and know when to hand back to a person. Built with the permission boundaries, logs and review points your operations need.',
    services: [
      'Custom AI agents',
      'Multi-agent architectures',
      'Autonomous workflow systems',
      'AI research assistants',
      'Business process automation',
      'Intelligent task execution systems',
    ],
    href: '/future-tech/ai-automation',
    hrefLabel: 'Learn more',
  },
  {
    id: 'web-solutions',
    name: 'Web Development & Digital Solutions',
    description:
      'Websites and web applications that hold up under real traffic, real content and editing by people who are not developers.',
    services: [
      'Website development',
      'WordPress & WooCommerce builds',
      'Custom business websites',
      'E-commerce websites',
      'Frontend development',
      'Custom web applications',
      'UI/UX design',
      'Website redesign & optimisation',
      'Responsive development',
      'Landing pages',
      'Website maintenance',
      'Business dashboards & web-based systems',
    ],
    href: '/future-tech/web-software',
    hrefLabel: 'Learn more',
  },
  {
    id: 'custom-software',
    name: 'Custom Software & AI Application Development',
    description:
      'Internal systems and AI-powered products where off-the-shelf tools stop fitting. Scoped as software you own, with the documentation to run it.',
    services: [
      'AI-powered SaaS platforms',
      'Custom business software',
      'Internal management systems',
      'AI-powered dashboards',
      'Data analysis applications',
      'Intelligent reporting systems',
      'Business productivity tools',
    ],
    href: '/future-tech/web-software',
    hrefLabel: 'Learn more',
  },
  {
    id: 'robotics',
    name: 'Robotics & Humanoid Technology',
    description:
      'Humanoid, service and industrial robotics, RPA and AI-powered robotic systems — designed into the workflows where physical work and software meet.',
    services: [
      'Humanoid robotics',
      'Service robotics',
      'Industrial robotics',
      'Robotic process automation (RPA)',
      'Smart manufacturing',
      'AI-powered robotic systems',
    ],
  },
  {
    id: 'agi',
    name: 'AGI & Future Intelligence',
    description:
      'Multi-agent intelligence, autonomous reasoning systems and human–AI collaboration, with responsible development built into how the systems are designed.',
    services: [
      'AGI research',
      'Multi-agent intelligence',
      'Autonomous reasoning systems',
      'Human–AI collaboration',
      'Responsible AI development',
      'Future cognitive computing',
    ],
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    description:
      'Quantum computing, brain–computer interfaces, digital twins and spatial computing, applied where they change how a business operates.',
    services: [
      'Quantum computing',
      'Brain–computer interfaces (BCI)',
      'Digital twins',
      'Augmented reality (AR)',
      'Virtual reality (VR)',
      'Extended reality (XR)',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Division two — BPO & Professional Services (spec §1.3)                      */
/* -------------------------------------------------------------------------- */

export const bpoCategories: ServiceCategory[] = [
  {
    id: 'medical-billing',
    name: 'Medical Billing & Revenue Cycle Management',
    description:
      'Coding, claims and follow-up handled by a team that works inside your practice management system and reports against your revenue cycle, not against a ticket count.',
    services: [
      'Medical coding & billing',
      'Claims submission',
      'Insurance follow-ups',
      'Denial management',
      'Payment posting',
      'RCM support',
    ],
    href: '/bpo/healthcare',
    hrefLabel: 'See full details',
  },
  {
    id: 'dme',
    name: 'Durable Medical Equipment (DME) Services',
    description:
      'Order intake through resupply for DME suppliers, with documentation chased and verified before it turns into a claim problem.',
    services: [
      'DME billing',
      'Order intake',
      'Documentation management',
      'Eligibility verification',
      'Resupply coordination',
      'Customer support',
    ],
    href: '/bpo/healthcare',
    hrefLabel: 'See full details',
  },
  {
    id: 'medicare-insurance',
    name: 'Medicare & Health Insurance Support',
    description:
      'Administrative support for Medicare and commercial insurance workflows — prior authorisations, benefits checks and member-facing support, run to your scripts and escalation rules.',
    services: [
      'Medicare administrative support',
      'Prior authorization coordination',
      'Insurance & benefits verification',
      'Healthcare customer support',
    ],
    href: '/bpo/healthcare',
    hrefLabel: 'See full details',
  },
  {
    id: 'healthcare-staffing',
    name: 'Healthcare Staffing & Physician Recruitment',
    description:
      'Clinical and non-clinical hiring support for providers and telehealth organisations, from sourcing through the credentialing paperwork.',
    services: [
      'Physician & specialist recruitment',
      'Telehealth staffing',
      'Locum tenens recruitment',
      'Nurse recruitment',
      'Medical virtual assistants',
    ],
    href: '/bpo/healthcare',
    hrefLabel: 'See full details',
  },
  {
    id: 'auto-insurance',
    name: 'Auto Insurance BPO',
    description:
      'Policy administration and claims support for auto insurers, agencies and managing general agents, run as a documented back-office function.',
    services: [
      'Policy administration',
      'Claims processing support',
      'Insurance verification',
      'Lead management',
      'Customer support',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate BPO',
    description:
      'Virtual assistants and coordinators for brokerages and agencies — listings, transactions and leads kept moving without adding headcount.',
    services: [
      'Real estate virtual assistants',
      'CRM management',
      'Property listing management',
      'Transaction coordination',
      'Appointment setting',
      'Lead management',
    ],
  },
  {
    id: 'general-outsourcing',
    name: 'General Business Outsourcing',
    description:
      'Customer support, back office and data work for teams that need capacity without a long hiring cycle.',
    services: [
      'Customer support',
      'Technical support',
      'Inbound & outbound calling',
      'Data entry',
      'Back-office management',
      'Administrative support',
    ],
  },
  {
    id: 'finance-accounting',
    name: 'Financial & Accounting Support',
    description:
      'Bookkeeping and reconciliation support for finance teams that need the routine work closed on time, every month.',
    services: [
      'Bookkeeping',
      'Accounts payable',
      'Accounts receivable',
      'Payroll processing support',
      'Financial record management',
      'Reconciliation support',
    ],
  },
  {
    id: 'ecommerce-support',
    name: 'E-commerce Support',
    description:
      'Order, catalogue and marketplace operations for stores that have outgrown a one-person back office.',
    services: [
      'Order processing',
      'Product listing management',
      'Marketplace support',
      'Inventory administration',
      'E-commerce customer support',
    ],
  },
  {
    id: 'final-expense',
    name: 'Final Expense Services',
    description:
      'Administrative and customer-service support for final expense insurance teams. GENBRIK is not an insurance provider, underwriter or licensed agency, and does not sell insurance.',
    services: [
      'Administrative support',
      'Customer service',
      'Lead management',
      'Policy administration',
      'Application processing support',
      'Claims-related administrative assistance',
      'Appointment setting',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Industries (spec §1.4)                                                      */
/* -------------------------------------------------------------------------- */

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & medical practices',
    note: 'Medical billing and RCM, DME and staffing from the BPO side; document processing and internal tools from AI & Future Tech.',
    divisions: ['BPO', 'AI & Future Tech'],
    icon: 'heart-pulse',
  },
  {
    id: 'dme',
    name: 'DME providers',
    note: 'DME billing, order intake, documentation and resupply coordination.',
    divisions: ['BPO'],
    icon: 'package',
  },
  {
    id: 'insurance',
    name: 'Medicare & insurance organizations',
    note: 'Prior authorisation, benefits verification and member support.',
    divisions: ['BPO'],
    icon: 'landmark',
  },
  {
    id: 'auto-insurance',
    name: 'Auto insurance companies',
    note: 'Policy administration, claims processing support and verification.',
    divisions: ['BPO'],
    icon: 'car',
  },
  {
    id: 'real-estate',
    name: 'Real estate agencies',
    note: 'Virtual assistants, transaction coordination, CRM and listing management.',
    divisions: ['BPO'],
    icon: 'home',
  },
  {
    id: 'financial-services',
    name: 'Financial services',
    note: 'Bookkeeping, AP/AR and reconciliation support, plus reporting and internal systems.',
    divisions: ['BPO', 'AI & Future Tech'],
    icon: 'wallet',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce businesses',
    note: 'Storefront and marketplace builds, order operations and customer support.',
    divisions: ['AI & Future Tech', 'BPO'],
    icon: 'shopping-bag',
  },
  {
    id: 'technology',
    name: 'Technology companies',
    note: 'Custom software, AI integration and additional engineering capacity.',
    divisions: ['AI & Future Tech'],
    icon: 'cpu',
  },
  {
    id: 'startups',
    name: 'Startups',
    note: 'Focused first builds — web apps, AI features and the back office behind them.',
    divisions: ['AI & Future Tech', 'BPO'],
    icon: 'rocket',
  },
  {
    id: 'small-business',
    name: 'Small and medium businesses',
    note: 'Websites, internal tools and outsourced operations that scale with headcount.',
    divisions: ['AI & Future Tech', 'BPO'],
    icon: 'store',
  },
  {
    id: 'enterprise',
    name: 'Large enterprises',
    note: 'Enterprise AI integration, internal systems and managed back-office functions.',
    divisions: ['AI & Future Tech', 'BPO'],
    icon: 'building',
  },
]

/* -------------------------------------------------------------------------- */
/* Home page content (spec §4.1)                                               */
/* -------------------------------------------------------------------------- */

export const flagshipServices: FlagshipService[] = [
  {
    id: 'ai-agents',
    name: 'AI agents & assistants',
    line: 'Multi-step agents with human review where it matters.',
    href: '/future-tech/ai-automation',
    icon: 'bot',
  },
  {
    id: 'rag',
    name: 'RAG & document intelligence',
    line: 'Answers grounded in your own documents, with sources.',
    href: '/future-tech/ai-automation',
    icon: 'file-search',
  },
  {
    id: 'web-apps',
    name: 'Custom web applications',
    line: 'Portals and workflow tools built around your process.',
    href: '/future-tech/web-software',
    icon: 'monitor',
  },
  {
    id: 'dashboards',
    name: 'Dashboards & internal tools',
    line: 'Reporting your team opens every morning, not once.',
    href: '/future-tech/web-software',
    icon: 'layout-dashboard',
  },
  {
    id: 'medical-billing',
    name: 'Medical billing & RCM',
    line: 'Coding, claims, denials and posting run as one cycle.',
    href: '/bpo/healthcare',
    icon: 'receipt',
  },
  {
    id: 'healthcare-staffing',
    name: 'Healthcare staffing',
    line: 'Physician, nurse and telehealth recruitment support.',
    href: '/bpo/healthcare',
    icon: 'users',
  },
  {
    id: 'dme',
    name: 'DME & insurance support',
    line: 'Intake, eligibility, authorisation and resupply.',
    href: '/bpo/healthcare',
    icon: 'shield-check',
  },
  {
    id: 'back-office',
    name: 'Back-office operations',
    line: 'Support, data and admin work run to a written process.',
    href: '/bpo',
    icon: 'headphones',
  },
]

export const valueProps: ValueProp[] = [
  {
    title: 'Technology and operations in one company',
    body: 'Most partners do one or the other. GENBRIK builds the system and can run the process around it, so the handoff between them is internal rather than another contract to manage.',
  },
  {
    title: 'Direct communication',
    body: 'You work with the people doing the work. Requirements are not filtered through an account layer in either direction, and questions get answered by whoever is closest to them.',
  },
  {
    title: 'Built for detail-heavy operations',
    body: 'Billing, claims, eligibility, payroll and records work rewards precision over speed. That is the standard the BPO division is organised around, and the standard our software is tested against.',
  },
  {
    title: 'Scope you can hold us to',
    body: 'A written scope, defined deliverables and a review point before each phase closes. Changes are quoted before they are built, and handover documentation is part of the work.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    body: 'A short call, then a written brief. We map the process or product, the systems it touches and what a good outcome looks like.',
  },
  {
    title: 'Proposal',
    body: 'Scope, timeline, team and price in one document. You see what is included, what is not, and what we need from your side.',
  },
  {
    title: 'Build or onboard',
    body: 'Delivery in short cycles with review points. For BPO work this is process documentation, system access and a supervised pilot before volume.',
  },
  {
    title: 'Ongoing support',
    body: 'Handover, monitoring and a defined support window. Retained work gets a monthly review against the measures agreed at kickoff.',
  },
]

export const principles: ValueProp[] = [
  {
    title: 'Scope in writing',
    body: 'Every engagement starts with a written scope: what is included, what is not, and what we need from your team.',
  },
  {
    title: 'One owner per workstream',
    body: 'You get a named owner for the work rather than a shared inbox, and an escalation path that does not change mid-project.',
  },
  {
    title: 'Review points, not surprises',
    body: 'Work is reviewed at defined points. If something is going to change the scope, you hear it before it is built.',
  },
  {
    title: 'Documented handover',
    body: 'Processes and systems are documented so the work does not depend on one person’s memory, on either side.',
  },
]

/* -------------------------------------------------------------------------- */
/* Navigation (spec §3.2)                                                      */
/* -------------------------------------------------------------------------- */

export const navMenus: Record<'future-tech' | 'bpo', NavMenu> = {
  'future-tech': {
    label: 'AI & Future Tech',
    href: '/future-tech',
    columns: [
      {
        title: 'AI & intelligent systems',
        items: [
          {
            name: 'Artificial Intelligence & Generative AI',
            href: '/future-tech#ai-generative-ai',
            description: 'Assistants, RAG, document processing',
          },
          {
            name: 'AI Agents & Autonomous Systems',
            href: '/future-tech#ai-agents',
            description: 'Multi-step agents with review points',
          },
          {
            name: 'Robotics & Humanoid Technology',
            href: '/future-tech#robotics',
            description: 'Humanoid, service and industrial systems',
          },
          {
            name: 'AGI & Future Intelligence',
            href: '/future-tech#agi',
            description: 'Multi-agent intelligence and reasoning',
          },
        ],
      },
      {
        title: 'Software & emerging tech',
        items: [
          {
            name: 'Web Development & Digital Solutions',
            href: '/future-tech#web-solutions',
            description: 'Sites, e-commerce and web apps',
          },
          {
            name: 'Custom Software & AI Applications',
            href: '/future-tech#custom-software',
            description: 'Internal tools, dashboards, SaaS',
          },
          {
            name: 'Emerging Technologies',
            href: '/future-tech#emerging-tech',
            description: 'Quantum, BCI, digital twins, XR',
          },
        ],
      },
    ],
    footer: { label: 'AI & Future Tech overview', href: '/future-tech' },
  },
  bpo: {
    label: 'BPO & Professional Services',
    href: '/bpo',
    columns: [
      {
        title: 'Healthcare & insurance',
        items: [
          {
            name: 'Medical Billing & Revenue Cycle Management',
            href: '/bpo#medical-billing',
            description: 'Coding, claims, denials, posting',
          },
          {
            name: 'Durable Medical Equipment (DME)',
            href: '/bpo#dme',
            description: 'Intake, documentation, resupply',
          },
          {
            name: 'Medicare & Health Insurance Support',
            href: '/bpo#medicare-insurance',
            description: 'Authorisations and benefits checks',
          },
          {
            name: 'Healthcare Staffing & Physician Recruitment',
            href: '/bpo#healthcare-staffing',
            description: 'Physicians, nurses, telehealth',
          },
          {
            name: 'Auto Insurance BPO',
            href: '/bpo#auto-insurance',
            description: 'Policy admin and claims support',
          },
        ],
      },
      {
        title: 'Business operations',
        items: [
          {
            name: 'Real Estate BPO',
            href: '/bpo#real-estate',
            description: 'VAs, listings, transaction coordination',
          },
          {
            name: 'General Business Outsourcing',
            href: '/bpo#general-outsourcing',
            description: 'Support, data entry, admin',
          },
          {
            name: 'Financial & Accounting Support',
            href: '/bpo#finance-accounting',
            description: 'Bookkeeping, AP/AR, payroll support',
          },
          {
            name: 'E-commerce Support',
            href: '/bpo#ecommerce-support',
            description: 'Orders, listings, marketplaces',
          },
          {
            name: 'Final Expense Services',
            href: '/bpo#final-expense',
            description: 'Administrative support only',
          },
        ],
      },
    ],
    footer: { label: 'BPO & Professional Services overview', href: '/bpo' },
  },
}

/* -------------------------------------------------------------------------- */
/* Deep-dive page content (spec §4.3, §4.4)                                    */
/* -------------------------------------------------------------------------- */

export type UseCase = {
  id: string
  title: string
  description: string
  bullets: string[]
}

export const aiUseCases: UseCase[] = [
  {
    id: 'agents',
    title: 'Custom AI agents',
    description:
      'An agent takes a request, gathers what it needs from your systems, decides the next step and completes it — or hands it to a person with the work already assembled. We build for one process at a time and define exactly where human review sits.',
    bullets: [
      'Scoped to a named process, with a written list of permitted actions',
      'Tool access through your existing APIs, with credentials scoped per agent',
      'Human approval gates before anything irreversible happens',
      'A run log for every step the agent takes',
    ],
  },
  {
    id: 'rag',
    title: 'RAG & document intelligence',
    description:
      'Answers and extracted fields grounded in your own documents, with the source shown. Most useful where staff spend the day searching policies, contracts, claims or records.',
    bullets: [
      'Retrieval over your documents, not the open web',
      'Citations back to the source passage',
      'Structured extraction into your systems of record',
      'Evaluation sets built from real questions your team already asks',
    ],
  },
  {
    id: 'workflow',
    title: 'Workflow automation',
    description:
      'Queues, handoffs, approvals and follow-ups that currently live in inboxes and spreadsheets. We map the process first, then automate the parts worth automating.',
    bullets: [
      'Process mapping before any model is chosen',
      'Integrations with the tools already in use',
      'Exception handling that routes to a person',
      'Dashboards showing volume, backlog and turnaround',
    ],
  },
  {
    id: 'voice',
    title: 'Voice & chat assistants',
    description:
      'Inbound calls and messages handled by an assistant that knows your services, hours and escalation rules, with a clean handoff when the request needs a person.',
    bullets: [
      'Call and message triage with clear escalation rules',
      'Answers limited to approved service and policy information',
      'Transcripts and summaries written back to your CRM',
      'Additional languages where the audience needs them',
    ],
  },
  {
    id: 'integration',
    title: 'Enterprise AI integration',
    description:
      'Model features added to software you already run: search, summarisation, drafting and classification inside existing workflows rather than a separate tool nobody opens.',
    bullets: [
      'AI features inside existing products and internal tools',
      'Model choice based on cost, latency and data constraints',
      'Prompt and output versioning, so changes are reviewable',
      'Monitoring for quality drift after launch',
    ],
  },
]

export const aiBuildPrinciples: ValueProp[] = [
  {
    title: 'Start with the process',
    body: 'We write down the current workflow, who owns each step and where it breaks before proposing a model.',
  },
  {
    title: 'Evaluation before scale',
    body: 'A test set built from your real examples. If the system does not clear the agreed bar, it does not ship.',
  },
  {
    title: 'Human review where it matters',
    body: 'Approval gates on anything financial, clinical or irreversible, with a person accountable for the decision.',
  },
  {
    title: 'Monitoring after launch',
    body: 'Logged runs, sampled reviews and a defined path for correcting a bad output once the system is in use.',
  },
]

export type WebService = {
  id: string
  name: string
  description: string
  includes: string[]
} 

export const webServices: WebService[] = [
  {
    id: 'websites',
    name: 'Websites',
    description:
      'Marketing and content-managed sites that stay editable after handover, rather than a static page that needs a developer for every text change.',
    includes: [
      'WordPress or custom Next.js build, chosen for how you will maintain it',
      'Responsive layouts tested at phone, tablet and desktop widths',
      'Page structure and copy guidance, not just a template',
      'Metadata, sitemap and structured data for search',
      'Analytics and form tracking configured at launch',
      'Handover session and a written editing guide',
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description:
      'Stores on WooCommerce or a custom storefront, built around how orders are actually fulfilled and supported.',
    includes: [
      'Catalogue and product data structure',
      'Checkout, payment and tax configuration',
      'Shipping rules and fulfilment handoff',
      'Order operations, returns and refund flows',
      'Performance work on product and listing pages',
      'Support through launch week',
    ],
  },
  {
    id: 'web-apps',
    name: 'Custom web apps',
    description:
      'Portals, booking systems and workflow tools built around your process instead of forcing your process into a template.',
    includes: [
      'Discovery and flow mapping before build',
      'UI/UX design at wireframe and interface level',
      'Authentication, roles and permissions',
      'Integrations with your existing systems',
      'QA across browsers and devices',
      'Deployment, monitoring and documentation',
    ],
  },
  {
    id: 'dashboards',
    name: 'Dashboards & internal tools',
    description:
      'Internal tools that replace the spreadsheet someone built five years ago and everyone is afraid to touch.',
    includes: [
      'Data model and source mapping',
      'Role-based views for different teams',
      'Exports, filters and saved views',
      'Scheduled reports and alerts',
      'Audit trail for changes',
      'Documentation and admin training',
    ],
  },
]

export type HealthcareTab = {
  id: string
  label: string
  title: string
  intro: string
  handles: string[]
  needs: string[]
}

export const healthcareDeepDive: HealthcareTab[] = [
  {
    id: 'medical-billing',
    label: 'Medical billing & RCM',
    title: 'Medical Billing & Revenue Cycle Management',
    intro:
      'Billing support for practices and billing companies: coding, claim submission, payer follow-up, denial management and posting, run inside your practice management system.',
    handles: [
      'Medical coding and charge entry',
      'Claims submission and clearinghouse rejections',
      'Insurance follow-up and appeals',
      'Denial management with root-cause notes',
      'Payment posting and reconciliation',
      'Aging analysis and RCM reporting',
    ],
    needs: [
      'Access to your practice management or EHR system',
      'Payer list and current fee schedules',
      'Recent denial and aging reports',
      'A named escalation contact for clinical questions',
    ],
  },
  {
    id: 'dme',
    label: 'DME services',
    title: 'Durable Medical Equipment (DME) Services',
    intro:
      'Order intake through resupply for DME suppliers, with documentation collected and verified before it becomes a claim problem.',
    handles: [
      'DME billing and claim preparation',
      'Order intake and qualification',
      'Documentation collection and management',
      'Eligibility and benefits verification',
      'Resupply coordination and patient reminders',
      'Patient and referral-source customer support',
    ],
    needs: [
      'Access to your DME billing platform',
      'Product and HCPCS reference data',
      'Payer-specific documentation requirements',
      'Resupply schedule rules',
    ],
  },
  {
    id: 'medicare',
    label: 'Medicare & insurance support',
    title: 'Medicare & Health Insurance Support',
    intro:
      'Administrative support for Medicare and commercial insurance workflows — prior authorisations, benefits checks and member-facing support — handled to your scripts and escalation rules.',
    handles: [
      'Medicare administrative support',
      'Prior authorization coordination',
      'Insurance and benefits verification',
      'Referral and authorisation tracking',
      'Member and patient support',
      'Documentation follow-up with providers',
    ],
    needs: [
      'Payer portals and eligibility tools',
      'Approved scripts and an escalation matrix',
      'Service-level expectations by request type',
      'Compliance requirements supplied in writing',
    ],
  },
  {
    id: 'staffing',
    label: 'Healthcare staffing',
    title: 'Healthcare Staffing & Physician Recruitment',
    intro:
      'Recruitment and staffing support for providers, telehealth organisations and staffing firms — sourcing, screening, scheduling and the credentialing paperwork around it.',
    handles: [
      'Physician and specialist recruitment',
      'Telehealth staffing support',
      'Locum tenens recruitment',
      'Nurse and allied health recruitment',
      'Medical virtual assistants',
      'Credentialing and onboarding coordination',
    ],
    needs: [
      'Role profiles and approved rate ranges',
      'ATS access or a shared tracking sheet',
      'Interview and approval workflow',
      'Credentialing checklist and requirements',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Company facts — deliberately unconfirmed (spec §6)                          */
/* -------------------------------------------------------------------------- */

export const companyFacts: Array<{ label: string; value: string }> = [
  { label: 'Legal entity', value: '[CONFIRM: registered legal name and entity type]' },
  { label: 'Registration', value: '[CONFIRM: company registration number and jurisdiction]' },
  { label: 'Founded', value: '[CONFIRM: founding year]' },
  { label: 'Team size', value: '[CONFIRM: current headcount]' },
  { label: 'Regions served', value: '[CONFIRM: countries and regions served]' },
]
