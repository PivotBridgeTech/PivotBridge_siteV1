import {
  Bot, Code2, Workflow, Cloud, HeartPulse, Scale, ShoppingCart, Truck,
  Landmark, Film, Search, PenTool, Rocket, LifeBuoy,
} from "lucide-react";

export const SERVICES = [
  {
    slug: "ai",
    icon: Bot,
    tag: "AI & AUTOMATION",
    title: "AI that earns its keep",
    short: "Custom AI integrations, LLM workflows, and intelligent business agents — scoped to a real ROI, not a demo.",
    heroLine: "AI scoped to a number, not a novelty.",
    intro: "Most businesses don't need 'an AI strategy' — they need three specific tasks taken off a human's plate. We find those tasks, build the system that handles them, and measure the hours and dollars it returns.",
    offerings: [
      { name: "Custom AI integrations", body: "LLMs wired into the tools you already run — your CRM, inbox, documents, and databases — so answers and drafts appear where work actually happens." },
      { name: "Intelligent business agents", body: "Agents that triage inbound leads, draft responses, summarize calls, and prepare reports — with a human approving anything that leaves the building." },
      { name: "Document & data intelligence", body: "Systems that read contracts, invoices, compliance docs, and forms, extract what matters, and route it — the paperwork bottleneck, automated." },
      { name: "LLM workflow design", body: "Multi-step AI pipelines with guardrails, review checkpoints, and fallbacks — built for reliability, not just impressive first demos." },
    ],
    fit: "A good fit if your team spends hours on reading, writing, sorting, or answering the same kinds of things every week.",
  },
  {
    slug: "software",
    icon: Code2,
    tag: "SOFTWARE & APPS",
    title: "Full-stack product development",
    short: "Web and mobile applications built end to end — owned by you, documented, and built to be extended.",
    heroLine: "Software you own, built to outlast us.",
    intro: "We design and ship web and mobile applications from first wireframe to production — and we build them so any competent developer after us can pick up the codebase without a treasure map.",
    offerings: [
      { name: "Web application development", body: "Customer portals, internal tools, dashboards, and SaaS products — modern stacks, responsive by default, deployed on infrastructure we can also manage." },
      { name: "Mobile app development", body: "iOS and Android apps, from new builds to feature deployments inside your existing app — shipped without disrupting your current users." },
      { name: "System integrations & APIs", body: "Making your tools talk to each other: payment systems, CRMs, inventory, booking platforms — one source of truth instead of five spreadsheets." },
      { name: "Legacy rescue & modernization", body: "Inheriting the app your last developer abandoned, stabilizing it, documenting it, and getting it moving again." },
    ],
    fit: "A good fit if you need a product built, a stalled build rescued, or features shipped into an app you already run.",
  },
  {
    slug: "automation",
    icon: Workflow,
    tag: "WORKFLOW OPTIMIZATION",
    title: "Kill the manual work",
    short: "Automating data entry, CRM pipelines, reporting, and the operational bottlenecks that eat hours weekly.",
    heroLine: "Your team keeps the judgment calls. The system does the rest.",
    intro: "Every growing business accumulates manual glue-work: copying data between systems, chasing statuses, assembling the same report every Monday. We map those workflows and replace the repetitive parts with systems that don't get bored.",
    offerings: [
      { name: "Data workflow automation", body: "Entry, transfer, cleanup, and syncing between systems — eliminated. The copy-paste jobs go first." },
      { name: "CRM & sales pipeline automation", body: "Lead capture, enrichment, follow-up sequences, and handoffs that fire automatically — so deals stop dying in the gaps between steps." },
      { name: "Reporting & operations dashboards", body: "The Monday report that takes someone three hours, generated automatically and waiting in your inbox before you sit down." },
      { name: "Process mapping & bottleneck audits", body: "We trace how work actually moves through your business — then show you, with numbers, where the hours are leaking." },
    ],
    fit: "A good fit if you've ever said 'someone spends half their day just moving information around.'",
  },
  {
    slug: "cloud",
    icon: Cloud,
    tag: "CLOUD & INFRASTRUCTURE",
    title: "Migration and management",
    short: "Cloud migration, server management, security hardening, and architecture that scales with revenue.",
    heroLine: "Infrastructure that's boring — in the way you want it to be.",
    intro: "Servers should be the part of your business you never think about. We migrate you to the cloud without the downtime horror stories, then run, monitor, and secure everything so the answer to 'is the site up?' is always yes.",
    offerings: [
      { name: "Cloud migration", body: "Planned, rehearsed moves from on-premise or aging hosts to modern cloud infrastructure — with rollback plans, not crossed fingers." },
      { name: "Managed servers & monitoring", body: "24/7 monitoring, patching, backups, and incident response. Problems get fixed before your customers meet them." },
      { name: "Security hardening & compliance support", body: "Access controls, encryption, and backup discipline set up correctly — with the audit trail your industry's regulators expect." },
      { name: "Scalable architecture design", body: "Infrastructure designed for where your revenue is going, not just where it is — so growth doesn't mean rebuilds." },
    ],
    fit: "A good fit if downtime costs you money, your host is aging, or nobody currently 'owns' your servers.",
  },
];

export const PAINS = [
  { text: "We type the same data into multiple systems", slug: "automation" },
  { text: "Staff spend hours reading and answering the same documents and emails", slug: "ai" },
  { text: "Sales follow-ups keep slipping through the cracks", slug: "automation" },
  { text: "We need an app or customer portal built — or rescued", slug: "software" },
  { text: "Our systems go down, or our host is aging and nobody owns it", slug: "cloud" },
  { text: "We're growing and our current setup can't keep up", slug: "cloud" },
];

export const INDUSTRIES = [
  { icon: HeartPulse, name: "Healthcare & clinics", pain: "Patient records, scheduling systems, and EHR integrations that can't afford downtime — with HIPAA-grade security and backups handled for you.", detail: "Multi-location clinics run on systems that simply cannot go dark. We build and manage the infrastructure behind scheduling, records, and patient communication with the security discipline health data demands." },
  { icon: Scale, name: "Legal & professional services", pain: "Secure document servers, client-confidential storage, and retention policies that hold up under scrutiny.", detail: "Firms live and die on confidentiality. We set up document management, secure client portals, and retention systems that satisfy both your partners and your professional obligations." },
  { icon: ShoppingCart, name: "E-commerce & retail", pain: "Infrastructure that survives traffic spikes — checkout stays up on your biggest sales day.", detail: "Your busiest day is the worst possible day for an outage. We architect stores and inventory systems for spike loads, and automate the order-to-fulfillment pipeline in between." },
  { icon: Truck, name: "Logistics & field services", pain: "Dispatch systems, fleet tracking, and always-on APIs that keep drivers, warehouses, and customers synced.", detail: "When trucks are moving, systems can't pause. We build the real-time tracking, dispatch, and customer-notification systems that keep operations visible end to end." },
  { icon: Landmark, name: "Finance & accounting", pain: "Audit trails, encrypted client data, and disaster-recovery backups built for compliance questions.", detail: "Financial firms need infrastructure that answers auditors before they ask. We implement the logging, encryption, and backup regimens that make compliance reviews uneventful." },
  { icon: Film, name: "Media & creative agencies", pain: "High-volume asset storage and delivery pipelines that don't choke your team's machines or deadlines.", detail: "Creative work generates enormous files and brutal deadlines. We build asset storage, transfer, and delivery pipelines that keep projects moving at the speed clients expect." },
];

export const CASES = [
  {
    ref: "CASE / A",
    title: "AI-powered compliance for a restaurant group",
    problem: "Layout and equipment changes kept drifting out of sync with local health and fire code — and the fines arrived before anyone noticed the gap.",
    built: "An AI review system that checks proposed floor-plan and equipment changes against current regulations and flags violations before they're built.",
    result: "Compliance issues caught at the drawing stage instead of the inspection stage.",
    stack: "LLM document analysis · regulation database · review dashboard",
  },
  {
    ref: "CASE / B",
    title: "Lead generation automation for B2B outbound",
    problem: "Sales reps were spending mornings building call lists by hand — inconsistent data, duplicate targets, cold scripts.",
    built: "An automated pipeline that assembles enriched, industry-specific contact directories and prioritizes them for cold-calling campaigns.",
    result: "List-building time cut to near zero; reps start each day dialing, not researching.",
    stack: "Data enrichment pipeline · dedupe engine · CRM integration",
  },
  {
    ref: "CASE / C",
    title: "Feature deployment for an existing mobile app",
    problem: "A growing app with real users, no in-house developers, and a feature backlog that kept slipping.",
    built: "Scalable feature releases shipped into the existing codebase — designed, built, tested, and deployed without disrupting the current user base.",
    result: "A shipping cadence the business could finally plan around.",
    stack: "Mobile CI/CD · staged rollouts · codebase documentation",
  },
];

export const PROCESS = [
  { icon: Search, name: "Diagnose", body: "A free consultation plus a short discovery: we find where hours and dollars are actually leaking before proposing anything." },
  { icon: PenTool, name: "Scope", body: "A fixed proposal in plain language — what gets built, what it costs, what it returns. No jargon, no open-ended billing surprises." },
  { icon: Rocket, name: "Build & ship", body: "Short cycles with something reviewable every week or two. You see progress, not status reports." },
  { icon: LifeBuoy, name: "Run & support", body: "We stay on for monitoring, maintenance, and iteration — or hand over clean documentation if you'd rather run it yourself." },
];

export const FAQS = [
  { q: "What does a typical project cost?", a: "It depends on scope, which is why every engagement starts with a free consultation and ends discovery with a fixed written proposal. Automation projects often start smaller; full application builds are larger. You'll know the number before any work begins." },
  { q: "Do we need to be technical to work with you?", a: "No — that's the point. We translate everything into business terms: what it does, what it costs, what it returns. You'll never need to decode jargon to make a decision." },
  { q: "Who owns the code and accounts?", a: "You do. Code, servers, domains, and credentials all live in accounts you control. If we part ways, everything keeps working and any competent developer can take over from our documentation." },
  { q: "Can you take over an existing system another developer built?", a: "Yes — legacy rescue is a regular part of our work. We audit what exists, stabilize it, document it, and then improve it." },
];

export const POSTS = [
  { tag: "CLOUD", title: "What cloud migration actually costs a small business — and what makes it cheaper", excerpt: "The real line items behind a migration, the ones providers don't put on the pricing page, and the three decisions that cut the bill the most." },
  { tag: "AUTOMATION", title: "Five signs your business is ready for automation", excerpt: "You don't need to be 'a tech company.' If any of these five patterns shows up in your week, automation will pay for itself." },
  { tag: "AI", title: "AI for small businesses: what's real, what's hype", excerpt: "A plain-language guide to the AI use cases that reliably return money for small businesses — and the ones that only demo well." },
];

// ─── About page: mission & leadership statements ───────────────────────────
// MISSION and Suleyman’s entry are real. The other two people (Jordan, Maya)
// are PLACEHOLDERS — replace names, roles, quotes, and bios before launch.
export const MISSION = {
  eyebrow: "Why we exist",
  // The `highlight` phrase renders in blue inside the headline.
  lead: "Small and medium businesses shouldn’t have to choose between ",
  highlight: "fighting their tools",
  rest: " and growing their company.",
  body:
    "We take technology off your plate — the custom apps, the AI, the automations, the servers — and give you back the time, money, and peace of mind it was costing you, so you can focus on running the business only you can run.",
  statementLabel: "Our mission",
  statement:
    "Pivot Bridge Technology designs, builds, and runs the custom software, AI tools, and automations that give small and medium businesses the capabilities of companies ten times their size — explained in plain language, owned by you outright, and only built when it returns more than it costs.",
};

export const TEAM_STATEMENTS = [
  {
    initials: "SA",
    name: "Suleyman Abdirahman",
    role: "Co-founder",
    gradient: ["#2E6647", "#234E36"],
    statement:
      "I founded Pivot Bridge on a simple belief: every business, regardless of size, deserves access to enterprise-grade technology that drives real results. I work directly with clients to understand their challenges and translate them into solutions — software, AI, or automation — that deliver measurable value.",
    bio:
      "Suleyman leads business strategy and client partnerships while supporting technical delivery. He brings a rare blend of business acumen and engineering depth to every engagement — from architecting enterprise AI and data systems to managing large-scale technology programs that cut complexity through automation. He holds bachelor’s degrees in Computer Engineering and Economics, with a Master’s in Computer Science in progress at Georgia Tech.",
  },
  {
    initials: "YB",
    name: "Yashoda Bokam",
    role: "Co-founder",
    gradient: ["#3E5C4B", "#1C2B22"],
    statement:
      "Technology only matters if it moves the business forward — that's the test I apply to every system we design. My job is to take what's technically impressive and make it practically useful: turning enterprise data platforms and intelligent automation into tools that produce measurable outcomes, not just technical wins.",
    bio:
      "Yashoda drives product vision and technical strategy at Pivot Bridge. With over 5 years of IT product management experience, he's passionate about helping organizations navigate complex technological landscapes to unlock new growth and efficiency. He holds a Master's in Technology Management from the University of Illinois Urbana-Champaign and a Bachelor's in Mechanical Engineering. Across his career he's built a track record of solving complex engineering and business-domain challenges, drawing on deep expertise in IT, advanced AI architectures, data science, and software development to turn highly technical systems — from enterprise data platforms to intelligent automation — into practical, scalable business applications.",
  },
  {
    // PLACEHOLDER person — replace before launch
    initials: "MO",
    name: "Maya Okafor",
    role: "Head of Engineering",
    gradient: ["#6FA383", "#2E6647"],
    statement:
      "’Built to outlast us’ isn’t a slogan to me — it’s the standard every code review is held to. Every system we ship has to be one a competent stranger could maintain from the documentation alone. If it needs us around to survive, I haven’t finished the job.",
    bio:
      "Maya sets the engineering bar across every build — architecture, code review, and the documentation standard that makes client ownership real. (Placeholder bio.)",
  },
];

// Placeholder contact details — replace before launch
export const CONTACT = {
  email: "hello@pivotbridge.example",
  phone: "+1 (555) 012-3456",
  base: "Remote-first · serving clients across North America",
};

export const PROJECT_TYPES = [
  "AI & automation", "Software or app development", "Workflow optimization",
  "Cloud migration / management", "Not sure yet — let's talk",
];
