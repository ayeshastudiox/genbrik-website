/**
 * Content model for the site.
 *
 * Every service name below comes from spec §1.2 / §1.3 or the approved service
 * update. Descriptions are
 * service descriptions only — no clients, statistics, certifications,
 * locations or licensing statements are invented anywhere in this file.
 *
 * Facts that are not established in the spec are marked with the
 * [CONFIRM: ...] placeholder from spec §6 so they stay trivially searchable.
 */

export type IconName =
  | 'bot'
  | 'file-search'
  | 'monitor'
  | 'layout-dashboard'
  | 'heart-pulse'
  | 'cpu'
  | 'circuit-board'
  | 'cctv'
  | 'factory'
  | 'truck'
  | 'microscope'
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

export type IndustryTechnology = 'AI' | 'Robotics' | 'Chips' | 'Surveillance'

export type Industry = {
  id: string
  name: string
  note: string
  technologies: IndustryTechnology[]
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
  railLabel: string
  summary: string
}

export type ServicePresentation = {
  id: string
  name: string
  line: string
  description: string
  capabilities: string[]
  icon: IconName
}

/**
 * The four chip, robotics and surveillance service lines.
 *
 * Descriptions stay at the level of the service: no hardware specifications,
 * manufacturing statements, certifications or performance figures are implied.
 */
export const chipsRoboticsServices: ServicePresentation[] = [
  {
    id: 'chips',
    name: 'Chips',
    line: 'Chip-focused systems for AI and intelligent applications.',
    description:
      'Chip-related technology services for AI and intelligent systems, scoped around the application and the software it connects to.',
    capabilities: ['Chips', 'AI Chips', 'Semiconductor Technology'],
    icon: 'cpu',
  },
  {
    id: 'robot-chips',
    name: 'Robot Chips',
    line: 'Control and compute layers for robotic systems.',
    description:
      "Chip and control-layer services for robotic systems, connecting hardware behaviour with GENBRIK's software and AI engineering.",
    capabilities: ['Robot Chips', 'Robotic Processors and Controllers'],
    icon: 'circuit-board',
  },
  {
    id: 'robots',
    name: 'Robots',
    line: 'Robotic systems built into operational workflows.',
    description:
      'Robotic systems integrated into operational workflows, with the software, controls and review points that surround them.',
    capabilities: [
      'Robots',
      'Robotics Technology',
      'Intelligent Robotics',
      'Autonomous Robotic Systems',
      'Humanoid and Industrial Robotics',
    ],
    icon: 'bot',
  },
  {
    id: 'ai-surveillance',
    name: 'AI Surveillance',
    line: 'AI-assisted monitoring with human review.',
    description:
      'AI-assisted surveillance systems for monitoring environments, designed with defined review points and clear data-handling boundaries.',
    capabilities: [
      'AI Surveillance',
      'Intelligent Monitoring',
      'AI-powered Security Systems',
      'Computer Vision and Object Detection',
    ],
    icon: 'cctv',
  },
]

/* -------------------------------------------------------------------------- */
/* AI & Technology (spec §1.2)                                                 */
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
      'Workflow automation',
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
    id: 'chips-robotics-ai-surveillance',
    name: 'Chips, Robotics & AI Surveillance',
    description:
      "Four connected service lines that extend GENBRIK's AI engineering into chips, robot chips, robots and AI surveillance — scoped as services alongside the rest of the practice.",
    services: chipsRoboticsServices.map((service) => service.name),
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
/* Industries                                                                  */
/* -------------------------------------------------------------------------- */

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & industrial automation',
    note: 'AI, robotics and machine vision for production, inspection and material flow.',
    technologies: ['AI', 'Robotics', 'Chips'],
    icon: 'factory',
  },
  {
    id: 'security',
    name: 'Security & surveillance',
    note: 'AI-assisted monitoring, computer vision and object detection for controlled environments.',
    technologies: ['AI', 'Surveillance'],
    icon: 'cctv',
  },
  {
    id: 'logistics',
    name: 'Logistics & warehousing',
    note: 'Autonomous robotic systems, workflow automation and operational intelligence.',
    technologies: ['AI', 'Robotics'],
    icon: 'truck',
  },
  {
    id: 'infrastructure',
    name: 'Smart infrastructure',
    note: 'Connected systems, intelligent monitoring and automation across physical environments.',
    technologies: ['AI', 'Robotics', 'Surveillance'],
    icon: 'building',
  },
  {
    id: 'healthcare-technology',
    name: 'Healthcare technology',
    note: 'AI, robotics and software products for health technology and care environments.',
    technologies: ['AI', 'Robotics'],
    icon: 'heart-pulse',
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor & electronics',
    note: 'Chips, AI chips and robotic processors for intelligent hardware systems.',
    technologies: ['AI', 'Chips'],
    icon: 'circuit-board',
  },
  {
    id: 'research',
    name: 'Research & technology',
    note: 'Applied AI, robotics and emerging technology for research and engineering teams.',
    technologies: ['AI', 'Robotics', 'Chips'],
    icon: 'microscope',
  },
  {
    id: 'technology',
    name: 'Technology companies',
    note: 'AI integration, custom software and additional engineering capacity.',
    technologies: ['AI', 'Chips'],
    icon: 'cpu',
  },
  {
    id: 'startups',
    name: 'Startups',
    note: 'Focused first builds — AI features, web apps and intelligent products.',
    technologies: ['AI'],
    icon: 'rocket',
  },
  {
    id: 'small-business',
    name: 'Small and medium businesses',
    note: 'Practical AI, automation and web systems that scale with the business.',
    technologies: ['AI'],
    icon: 'store',
  },
  {
    id: 'enterprise',
    name: 'Large enterprises',
    note: 'Enterprise AI integration, robotics and internal systems at scale.',
    technologies: ['AI', 'Robotics', 'Surveillance'],
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
    id: 'robots',
    name: 'Robots',
    line: 'Robotic systems built into operational workflows.',
    href: '/future-tech#robots',
    icon: 'bot',
  },
  {
    id: 'robot-chips',
    name: 'Robot Chips',
    line: 'Control and compute layers for robotic systems.',
    href: '/future-tech#robot-chips',
    icon: 'circuit-board',
  },
  {
    id: 'chips',
    name: 'Chips & semiconductor technology',
    line: 'AI chips and semiconductor technology for intelligent systems.',
    href: '/future-tech#chips',
    icon: 'cpu',
  },
  {
    id: 'ai-surveillance',
    name: 'AI Surveillance',
    line: 'AI-assisted monitoring with human review.',
    href: '/future-tech#ai-surveillance',
    icon: 'cctv',
  },
]

export const valueProps: ValueProp[] = [
  {
    title: 'AI at the core, systems around it',
    body: 'Most partners stop at a model or a prototype. GENBRIK builds the intelligent system, the software around it and the robotics or monitoring layer it connects to — one engineering practice from idea to deployment.',
  },
  {
    title: 'Direct communication',
    body: 'You work with the engineers doing the work. Requirements are not filtered through an account layer in either direction, and questions get answered by whoever is closest to them.',
  },
  {
    title: 'Built for intelligent systems',
    body: 'AI, robotics and real-time monitoring reward precision over speed. Evaluation, review points and operational constraints are designed in from the start, not added after launch.',
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
    title: 'Build and integrate',
    body: 'Delivery in short cycles with review points, from prototype to deployment. Robotics and monitoring work includes the integration, controls and test plan around it.',
  },
  {
    title: 'Ongoing support',
    body: 'Handover, evaluation and a defined support window. Retained systems get monitoring against the measures agreed at kickoff.',
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
    body: 'Systems and operating notes are documented so the work does not depend on one person’s memory, on either side.',
  },
]

/* -------------------------------------------------------------------------- */
/* Navigation (spec §3.2)                                                      */
/* -------------------------------------------------------------------------- */

export const navMenus: Record<'ai-technology' | 'robotics-chips', NavMenu> = {
  'ai-technology': {
    label: 'AI & Technology',
    href: '/future-tech',
    railLabel: 'AI-first engineering',
    summary: 'AI · generative AI · agents · automation · software',
    columns: [
      {
        title: 'Intelligence',
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
            name: 'AI & Automation',
            href: '/future-tech/ai-automation',
            description: 'Agents, document AI, voice, workflow',
          },
          {
            name: 'AGI & Future Intelligence',
            href: '/future-tech#agi',
            description: 'Multi-agent intelligence and reasoning',
          },
        ],
      },
      {
        title: 'Software & systems',
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
    footer: { label: 'AI & Technology overview', href: '/future-tech' },
  },
  'robotics-chips': {
    label: 'Robotics & Chips',
    href: '/future-tech#chips-robotics-ai-surveillance',
    railLabel: 'Applied systems',
    summary: 'Robots · robot chips · chips · surveillance',
    columns: [
      {
        title: 'Robotics',
        items: [
          {
            name: 'Robotics & Humanoid Technology',
            href: '/future-tech#robotics',
            description: 'Humanoid, service and industrial systems',
          },
          {
            name: 'Robots',
            href: '/future-tech#robots',
            description: 'Intelligent and autonomous robotic systems',
          },
          {
            name: 'Robot Chips',
            href: '/future-tech#robot-chips',
            description: 'Robotic processors and controllers',
          },
        ],
      },
      {
        title: 'Chips & monitoring',
        items: [
          {
            name: 'Chips',
            href: '/future-tech#chips',
            description: 'AI chips and semiconductor technology',
          },
          {
            name: 'AI Surveillance',
            href: '/future-tech#ai-surveillance',
            description: 'Intelligent monitoring, security and computer vision',
          },
        ],
      },
    ],
    footer: {
      label: 'Robotics & Chips overview',
      href: '/future-tech#chips-robotics-ai-surveillance',
    },
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
      'Answers and extracted fields grounded in your own documents, with the source shown. Most useful where teams spend the day searching policies, contracts, manuals or records.',
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
    body: 'Approval gates on anything regulated, high-impact or irreversible, with a person accountable for the decision.',
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
