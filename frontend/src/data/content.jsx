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
    industry: "HOSPITALITY",
    title: "AI-powered compliance for a restaurant group",
    problem: "Layout and equipment changes kept drifting out of sync with local health and fire code — and the fines arrived before anyone noticed the gap.",
    built: "An AI review system that checks proposed floor-plan and equipment changes against current regulations and flags violations before they're built.",
    result: "Compliance issues caught at the drawing stage instead of the inspection stage.",
    stack: "LLM document analysis · regulation database · review dashboard",
  },
  {
    industry: "B2B SALES",
    title: "Lead generation automation for B2B outbound",
    problem: "Sales reps were spending mornings building call lists by hand — inconsistent data, duplicate targets, cold scripts.",
    built: "An automated pipeline that assembles enriched, industry-specific contact directories and prioritizes them for cold-calling campaigns.",
    result: "List-building time cut to near zero; reps start each day dialing, not researching.",
    stack: "Data enrichment pipeline · dedupe engine · CRM integration",
  },
  {
    industry: "CONSUMER APPS",
    title: "Feature deployment for an existing mobile app",
    problem: "A growing app with real users, no in-house developers, and a feature backlog that kept slipping.",
    built: "Scalable feature releases shipped into the existing codebase — designed, built, tested, and deployed without disrupting the current user base.",
    result: "A shipping cadence the business could finally plan around.",
    stack: "Mobile CI/CD · staged rollouts · codebase documentation",
  },
  {
    industry: "HEALTHCARE",
    title: "Zero-downtime cloud migration for a multi-location clinic",
    problem: "Scheduling and patient communication ran on a single aging server in a back office — no failover, backups on an external drive, and every outage meant staff on paper and patients on hold.",
    built: "A rehearsed migration to managed cloud infrastructure with encrypted backups, monitoring, and access controls sized for health-data obligations — cut over overnight between clinic days.",
    result: "No downtime during the move, and no unplanned outages since.",
    stack: "Cloud migration · encrypted backup regimen · 24/7 monitoring",
  },
  {
    industry: "LOGISTICS",
    title: "Real-time delivery tracking for a regional fleet",
    problem: "Dispatchers spent their day fielding 'where's my delivery?' calls, because the only person who knew a truck's status was the driver inside it.",
    built: "A live dispatch dashboard plus automatic customer notifications at pickup, en route, and delivery — so status questions answer themselves.",
    result: "Status calls dropped to a trickle; dispatchers schedule routes instead of answering the phone.",
    stack: "GPS integration · dispatch dashboard · automated SMS & email notifications",
  },
  {
    industry: "E-COMMERCE",
    title: "Order-to-fulfillment automation for an online retailer",
    problem: "Every order was retyped by hand from the storefront into inventory and shipping systems — hours of daily copying, and the occasional typo that turned into a refund and an apology.",
    built: "An automated pipeline connecting storefront, inventory, and shipping-label generation, with a review queue for the exceptions that genuinely need a human.",
    result: "Order processing went from minutes each to seconds, with entry errors effectively eliminated.",
    stack: "Storefront API integration · inventory sync · shipping automation",
  },
  {
    industry: "LEGAL",
    title: "AI document intake for a law office",
    problem: "Client documents arrived as scans and email attachments, and paralegals retyped the key details — parties, dates, deadlines — into case management by hand.",
    built: "An AI intake pipeline that reads incoming documents, extracts the fields that matter, and files them to the right case — with a paralegal approving every entry before it lands.",
    result: "Intake dropped from most of an hour per file to a few minutes of review.",
    stack: "LLM document analysis · OCR pipeline · case-management integration",
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

// Article bodies use a light markup: "## " starts a section heading,
// blank lines separate paragraphs, **bold** and *italic* work inline.
// Rendered by frontend/src/pages/Article.jsx.
export const POSTS = [
  {
    slug: "what-cloud-migration-actually-costs",
    tag: "CLOUD",
    title: "What cloud migration actually costs a small business — and what makes it cheaper",
    excerpt: "The real line items behind a migration, the ones providers don't put on the pricing page, and the three decisions that cut the bill the most.",
    date: "June 10, 2026",
    readTime: "5 min read",
    body: `The estimate you get from a cloud provider's pricing calculator is not wrong, exactly. It prices the things you typed into it. The problem is that a real migration has costs nobody types into a calculator, and those are usually the ones that blow the budget.

We've watched this play out enough times to know where the money actually goes.

## The part the calculator covers

Compute, storage, bandwidth. If your migration were only that, the calculator would be fine. In practice it covers maybe sixty percent of what you'll spend in year one.

## Where the rest goes

The first surprise is usually **egress fees**. Getting your data into the cloud is free — providers are generous on the way in. Getting it back out is not. If your business regularly ships large files to clients, or you ever want to move to a different provider, you'll pay for every gigabyte on the way out. This is not an accident. It's how providers make leaving expensive.

Then there's the server you moved as-is. On-premise, an oversized server didn't cost you anything extra — you'd already bought it, and it sat there whether you used it or not. Move that same server to the cloud and its idle capacity becomes a monthly charge. We've audited setups where the client was paying for four times the compute they touched on their busiest day, because the sizing was copied straight from a machine bought in 2019 for a worst case that never came.

Downtime and labor are the costs people most want to skip. Somebody has to plan the cutover, rehearse it, and be awake when it happens. Migrations that "save money" by skipping the rehearsal tend to spend it back with interest — emergency hours at 2 a.m., plus whatever an outage costs you in lost orders while it's being sorted out.

And occasionally an application just doesn't want to move. It was written fifteen years ago assuming a specific server, a specific folder, a specific version of something. Rebuilding it for the cloud is a real project with a real price, and it's almost never in the original estimate because nobody knew until they looked.

## What actually keeps the bill down

Three things, in order of impact.

Measure before you move. Pull a month of actual CPU, memory, and storage numbers off your current servers and size the cloud resources to those, not to the label on the old hardware. This one step is the difference between paying for what you use and paying for what someone was afraid of five years ago.

Be picky about managed services. A managed database costs more per hour than running the same database yourself, and it's often worth every penny — backups, patching, and failover become the provider's problem instead of yours. But "managed everything" as a reflex gets expensive. Some of your workloads are simple enough that the premium buys you nothing.

Don't commit early. Reserved pricing can knock 30–50% off compute costs, but only if you reserve the right amount. Committing in month one means locking in a guess. Run on demand for two or three months, look at the real usage, then commit against numbers instead of nerves.

## The bottom line

Migrations planned this way tend to land near the estimate. Migrations that skip the measuring and rehearsing usually run 20–40% over — and the overage doesn't come from bad luck, it comes from the items above, which were always going to show up whether or not anyone priced them.

If the proposal in front of you looks suspiciously clean, ask which of these it includes. The answer tells you a lot about who wrote it.`,
  },
  {
    slug: "five-signs-your-business-is-ready-for-automation",
    tag: "AUTOMATION",
    title: "Five signs your business is ready for automation",
    excerpt: "You don't need to be 'a tech company.' If any of these five patterns shows up in your week, automation will pay for itself.",
    date: "June 24, 2026",
    readTime: "5 min read",
    body: `Most business owners assume automation is for companies bigger than theirs — the ones with an IT department and a budget line for software. In our experience the opposite is closer to true. Small businesses are usually better candidates, because the waste is easier to find and one fix touches a bigger share of the week.

You don't need a technology audit to know if you're ready. You need to recognize a few patterns. Here are the five we see most.

## 1. The same data gets typed twice

A new customer goes into the CRM. Then into the invoicing tool. Then into the shipping system. Nobody designed it this way; the tools just never learned to talk to each other, and re-typing became somebody's job by default.

Each entry takes two minutes. That's the trap — no single instance is worth fixing, so it never gets fixed, and meanwhile it's happening forty times a week with the occasional typo that takes an hour to chase down later. Connecting the systems is usually a small project. The payback starts the same week.

## 2. Monday morning belongs to a spreadsheet

If someone spends half a day pulling numbers from three systems into a report before anyone can make decisions, that's the clearest automation candidate there is. The logic never changes. Same sources, same format, every week. Reports like this can be generated automatically and waiting in an inbox at 7 a.m., and the person who used to build it gets their Monday back.

We like this one as a first project because it pays back fast and everyone in the company can see it working.

## 3. Follow-ups depend on someone remembering

A lead comes in Tuesday. Follow-up happens... when it happens. On a calm week, same day. On a busy week, Thursday — by which point the lead has heard back from two competitors.

Owners tend to read this as a discipline problem and respond with reminders and pep talks. It usually isn't one. It's a process that relies on human memory in exactly the spot where human memory is weakest: routine, low-urgency tasks during busy periods. A follow-up sequence that fires on its own doesn't have busy weeks.

## 4. Your team answers the same email over and over

Sit with your inbox for a week and count how many replies were, roughly, an answer you've written before. For most service businesses it's a large fraction — hours, pricing basics, "what do I need to bring," order status. Each one feels like a one-off to the customer. To your team, it's the tenth time this week.

This work can be drafted automatically, with a person still reading and approving what goes out. Nobody loses the human touch. They just stop typing the same paragraph from scratch.

## 5. The business can't grow past one person's capacity

If every order, application, or new client has to be personally touched by one specific person — often the owner — then the ceiling on your growth is that person's calendar. People usually call this a hiring problem. Before it's a hiring problem, it's a process problem: the workflow was built around one person doing everything by hand, and hiring a second person into a broken process just gives you two people doing it by hand.

## What doesn't belong on this list

Judgment. Pricing exceptions, tough customer conversations, anything where context changes the right answer — that stays with people. Automation earns its keep on the work *around* the judgment calls: the copying, the chasing, the reformatting. The stuff nobody was hired to do but everybody does.

## The arithmetic

Take any pattern above that made you wince. Estimate the hours per week it eats and multiply by what that person's time costs you. In most businesses we look at, at least one of these patterns is quietly consuming a full workday every week. Fixing it usually pays for itself in a quarter — sometimes in a month.`,
  },
  {
    slug: "ai-for-small-businesses-whats-real-whats-hype",
    tag: "AI",
    title: "AI for small businesses: what's real, what's hype",
    excerpt: "A plain-language guide to the AI use cases that reliably return money for small businesses — and the ones that only demo well.",
    date: "July 6, 2026",
    readTime: "5 min read",
    body: `There is a lot of money being spent right now convincing small business owners that they're falling behind on AI. Some of what's being sold is genuinely useful. A lot of it is not. After building these systems for a while, we've found the line between the two is surprisingly easy to spot once you know what to look for.

## The one-question filter

Ask whoever's pitching you: **what specific task does this do?**

Not which department it transforms. Not what capabilities it unlocks. What task. Who does that task today, how long does it take them, and how will we know if the AI version worked?

Real AI projects have boring answers to this question. "It reads incoming invoices and puts the vendor, amount, and due date into your accounting system." "It drafts a first reply to inbound leads for your salesperson to edit." When the answer is specific, the project can be scoped, priced, and measured.

Hype has grand answers. "It will transform how you engage customers." Vague is a feature for the seller — vague is easy to promise and impossible to fail at. If nobody in the room can name the task, nobody will ever be able to say the project didn't work.

## Things that actually work today

Reading documents is the standout. Contracts, invoices, intake forms, compliance paperwork — AI has gotten genuinely good at pulling the relevant fields out of messy documents and routing them where they belong. It works partly because the task is narrow, and partly because the failure mode is safe: a wrong extraction gets caught by the person reviewing it, not silently mailed to a customer.

First drafts are the other big one. Email replies, call summaries, report outlines. The value isn't that the machine replaces the person — it's that the person starts from an 80% draft instead of a blank page. Editing is faster than writing. It always has been.

Sorting and triage, too. Deciding which of this morning's forty inbound emails needs attention first is real work, and it's work AI does well enough to trust, because the cost of an occasional mis-sort is low.

Notice what these have in common: narrow task, human checkpoint, cheap failures. That combination is where AI is reliably worth money right now.

## Things that demo well and then embarrass you

Autonomous decision-making tops the list. Any system meant to make consequential calls — pricing, hiring, anything medical or legal — without a human reviewing the output is being oversold. The demo will be flawless. Demos always are. The failure arrives in month three, on a weird case nobody demoed, and it costs more than the system saved.

Generic chatbots are the most common trap we see. A chat widget bolted onto a website with no grounding in your actual services and policies will answer confidently and wrongly, in your company's name. If it doesn't know your business, it shouldn't speak for your business.

And anything pitched as "transformation" with no number attached. If nobody will say what hours or dollars come back, and when, it isn't a project yet. It's a mood.

## Three questions before you sign anything

What task does it do? Who reviews the output, and what happens when the system isn't sure? What do we expect back, in hours or dollars, and by when?

A real proposal answers all three without flinching. That's the whole test. The businesses getting real value from AI right now aren't the ones with a strategy deck — they're the ones that found the three most repetitive hours in somebody's day and built the narrowest possible system to take them over.`,
  },
];

// ─── About page: mission & leadership statements ───────────────────────────
export const MISSION = {
  eyebrow: "Why we exist",
  // The `highlight` phrase renders in the pine accent inside the headline.
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
    name: "Suley A.",
    role: "Co-founder",
    gradient: ["#2E6647", "#234E36"],
    statement:
      "I founded Pivot Bridge on a simple belief: every business, regardless of size, deserves access to enterprise-grade technology that drives real results. I work directly with clients to understand their challenges and translate them into solutions — software, AI, or automation — that deliver measurable value.",
    bio:
      "Suley leads business strategy and client partnerships while supporting technical delivery. He brings a rare blend of business acumen and engineering depth to every engagement — from architecting enterprise AI and data systems to managing large-scale technology programs that cut complexity through automation. He holds bachelor’s degrees in Computer Engineering and Economics, with a Master’s in Computer Science in progress at Georgia Tech.",
  },
  {
    initials: "YB",
    name: "Yashoda Bokam",
    role: "Co-founder",
    gradient: ["#3E5C4B", "#1C2B22"],
    statement:
      "Technology only matters if it moves the business forward — that's the test I apply to every system we design. My job is to take what's technically impressive and make it practically useful: turning enterprise data platforms and intelligent automation into tools that produce measurable outcomes, not just technical wins.",
    bio:
      "Yashoda drives product vision and technical strategy at Pivot Bridge. With almost a decade of IT product management experience, he's passionate about helping organizations navigate complex technological landscapes to unlock new growth and efficiency. He holds a Master's in Technology Management from the University of Illinois Urbana-Champaign and a Bachelor's in Mechanical Engineering. Across his career he's built a track record of solving complex engineering and business-domain challenges, drawing on deep expertise in IT, advanced AI architectures, data science, and software development to turn highly technical systems — from enterprise data platforms to intelligent automation — into practical, scalable business applications.",
  },
  {
    initials: "TK",
    name: "Tarun Katragadda",
    role: "Head of Engineering",
    gradient: ["#6FA383", "#2E6647"],
    statement:
      "Reliability isn't something you bolt on at the end — it's a decision you make in the first line of architecture. I've spent a decade keeping systems standing for organizations that can't afford a minute of downtime, and that same discipline goes into everything we build here: systems that scale when your business does, and stay up when it matters most.",
    bio:
      "Tarun leads the engineering vision at Pivot Bridge, driving the AI and cloud work that helps businesses modernize their technology, automate complex workflows, and accelerate digital transformation. He brings almost a decade in Site Reliability Engineering, DevOps, and cloud architecture — including large-scale cloud migrations, platform modernization, and AI automation for enterprise organizations, among them global financial institutions like Visa. He holds a Master's in Engineering from the University of Illinois Urbana-Champaign and is pursuing a Ph.D. on the application of AI in business. His work sits where business strategy meets engineering: turning emerging technology into resilient systems and lasting business value.",
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
