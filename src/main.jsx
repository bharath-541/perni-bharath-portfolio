import { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

/* ── Links ─────────────────────────────────────────────── */
const asset = path => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const L = {
  gh:         'https://github.com/bharath-541',
  ayugh:      'https://github.com/bharath-ayu',
  li:         'https://in.linkedin.com/in/perni-bharath-raghavendra-522529265',
  mail:       'mailto:pernibharath15@gmail.com',
  cv:         asset('Perni-Bharath.pdf'),
  tibzeePlay: 'https://play.google.com/store/apps/details?id=com.arunodeep.tibzee&pli=1',
  tibzeeLive: 'https://tibzee-landing-react.vercel.app/',
}

const NAV  = ['About', 'Work', 'Hackathons', 'Experience', 'Stack', 'Events', 'Contact']
const NIDS = ['about', 'work', 'hackathons', 'experience', 'stack', 'events', 'contact']

/* ── Data ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'tibzee',
    idx: '01',
    name: 'Tibzee',
    cat: 'Ventures & Startups',
    type: 'Preschool Operations & Parent SaaS',
    desc: 'Co-founded and engineered a teacher-parent communication and classroom operations platform. Led customer discovery across 6+ preschools and conducted a 1-month live school pilot.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Android', 'Product'],
    href: L.tibzeePlay,
    source: L.tibzeeLive,
    preview: 'https://tibzee-landing-react.vercel.app/',
    badge: 'Co-Founder'
  },
  {
    id: 'nammaturf',
    idx: '02',
    name: 'Namma Turf',
    cat: 'Ventures & Startups',
    type: 'Corporate Sports League Platform',
    desc: 'Contributed to app and web development for Namma Turf — an automated platform that manages employee sports leagues, match scheduling, and tournament operations.',
    stack: ['React', 'Node.js', 'REST APIs', 'Mobile App'],
    href: 'https://www.nammaturf.com/',
    preview: 'https://www.nammaturf.com/',
    badge: 'Contributor'
  },
  {
    id: 'social',
    idx: '03',
    name: 'Social Media Insights AI',
    cat: 'Backend & AI',
    type: 'AI Performance Analytics Engine',
    desc: 'Built an AI analytics engine using Langflow, LangChain, and DataStax Astra DB vector store to parse engagement signals and derive content strategy metrics. Level SuperMind Hackathon.',
    stack: ['Python', 'Langflow', 'Astra DB', 'Vector Search', 'AWS'],
    href: 'https://github.com/Soham-1304/Social_media_insights',
    badge: 'SuperMind Cert'
  },
  {
    id: 'clyra',
    idx: '04',
    name: 'Clyra',
    cat: 'Backend & AI',
    type: 'AI Insurance Claims Automation',
    desc: 'Intelligent insurance claims workflow integrating automated document OCR extraction, fraud anomaly detection, dynamic triage queues, and real-time dashboard state.',
    stack: ['React', 'Node.js', 'MongoDB', 'AI Extraction', 'Express'],
    href: 'https://github.com/bharath-541/Clyra-insurance-claims',
    badge: 'AI Pipeline'
  },
  {
    id: 'samruddhi',
    idx: '05',
    name: 'Samruddhi',
    cat: 'Hackathons',
    type: 'Hospital Resource & Patient Dashboard',
    desc: 'Built for Mumbai Hacks 2025 — real-time healthcare ops dashboard managing emergency bed queues, doctor shifts, patient records, and emergency triage routing.',
    stack: ['React', 'Node.js', 'Healthcare Ops', 'REST APIs'],
    href: 'https://github.com/bharath-541/Samruddhi_Mumbai_Hacks_25',
    badge: 'Mumbai Hacks'
  },
  {
    id: 'farmus',
    idx: '06',
    name: 'FarmUs',
    cat: 'Hackathons',
    type: 'Agritech Marketplace & Advisory',
    desc: 'Smart India Hackathon (SIH) — agricultural intelligence system connecting regional farmers to verified buyers, crop disease analysis, and dynamic market rates.',
    stack: ['React', 'Node.js', 'Agriculture', 'SIH'],
    href: 'https://github.com/Soham-1304/FarmUs_SIH_NullCrew',
    badge: 'SIH Finalist'
  },
  {
    id: 'finsight',
    idx: '07',
    name: 'FinSight',
    cat: 'Backend & AI',
    type: 'Personal Wealth & Budget Engine',
    desc: 'Full-stack finance architecture tracking liquid assets, recurring EMI schedules, automated debt amortization, and 50/30/20 allocation budgeting.',
    stack: ['MERN', 'MongoDB', 'Express', 'Node.js'],
    href: 'https://github.com/bharath-541/FinSight'
  },
]

const HACKATHONS = [
  {
    id: 'supermind',
    name: 'Level SuperMind Hackathon',
    cls: 'cert',
    result: '🎖️ Certificate of Skill',
    desc: 'Engineered a social media performance analytics module utilizing Langflow and DataStax Astra DB. Awarded certificate from FindCoder, AWS & Langflow.',
    stack: ['Python', 'Langflow', 'Astra DB', 'AWS'],
    href: 'https://github.com/Soham-1304/Social_media_insights'
  },
  {
    id: 'buildathon',
    name: 'Buildathon 3.0',
    cls: 'prize',
    result: '🥈 Runner-Up · ₹5,000',
    org: 'ITM Skills University',
    desc: '"Magic in codes, spells in action." Competed against top university engineering teams and placed runner-up with a ₹5,000 cash prize.',
    stack: ['Full-stack', 'Backend Architecture']
  },
  {
    id: 'skillify',
    name: 'Skillify Hackathon',
    cls: 'prize',
    result: '🥈 2nd Prize Winner',
    desc: 'Built an end-to-end career skill-matching and portfolio workflow platform in my first hackathon, winning 2nd prize.',
    stack: ['Mobile', 'Glide', 'Product Design'],
    href: 'https://skillify.glide.page/dl/d0a5f4',
    li: 'https://www.linkedin.com/posts/perni-bharath-raghavendra-522529265_thrilled-to-share-that-my-team-and-i-won-activity-7272181847315390466-My5N',
    photo: 'images/hack_team1.jpg'
  },
  {
    id: 'hackx',
    name: 'HackX NMIMS',
    cls: 'par',
    result: 'Participant',
    desc: 'Competed in NMIMS HackX under team NullCrew, delivering a full-stack rapid prototype within 24 hours.',
    stack: ['React', 'Node.js', 'MongoDB'],
    href: 'https://github.com/Soham-1304/NullCrew',
    photo: 'images/hack_team2.jpg'
  },
  {
    id: 'sih',
    name: 'Smart India Hackathon',
    cls: 'par',
    result: 'SIH Finalist',
    desc: 'Built FarmUs — an agricultural resource and market intelligence platform, representing ITM Skills University.',
    stack: ['React', 'Node.js', 'Agritech'],
    href: 'https://github.com/Soham-1304/FarmUs_SIH_NullCrew'
  },
  {
    id: 'mumbai',
    name: 'Mumbai Hacks 2025',
    cls: 'par',
    result: 'Participant',
    desc: 'Built Samruddhi — hospital operations and resource triage platform during Mumbai Hacks 2025.',
    stack: ['React', 'Healthcare', 'Node.js'],
    href: 'https://github.com/bharath-541/Samruddhi_Mumbai_Hacks_25'
  },
  {
    id: 'istd',
    name: 'ISTD Hackathon',
    cls: 'par',
    result: 'Participant',
    desc: 'Engineered an ROI and training metrics analytics dashboard for corporate learning teams.',
    stack: ['Analytics', 'Full-stack'],
    href: 'https://github.com/Soham-1304/ISTD-Hackathon'
  },
  {
    id: 'hackacon',
    name: 'Hackacon 2025',
    cls: 'par',
    result: 'Participant',
    desc: 'Code, Caffeine, Conquer — fast-paced 24-hour hacker sprint.',
    stack: ['Full-stack'],
    photo: 'images/hackacon.jpg'
  },
]

const EXPERIENCES = [
  {
    role: 'Co-Founder & Product Lead',
    co: 'Tibzee',
    period: 'Jul 2025 – Dec 2025',
    loc: 'Bengaluru / Remote',
    desc: 'Co-founded a teacher-parent communication and preschool operations platform. Drove customer discovery, product architecture, and go-to-market execution.',
    hl: [
      'Pitched directly to 6+ preschool founders and administrators, validating pain points in parent-teacher updates and attendance.',
      'Secured and ran a 1-month live operational pilot in a school, gathering deep product feedback.',
      'Architected parent notifications, student progress tracking, daily star rewards, and fee record workflows.',
      'Navigated early unit economics and market margins in the early-childhood education space.'
    ],
    stack: ['React', 'Tailwind CSS', 'Android', 'Product Discovery', 'Venture Building'],
    href: '#work'
  },
  {
    role: 'Software Engineering Intern (Backend)',
    co: 'Ayu',
    period: 'Jan 2026 — Present',
    loc: 'Bengaluru / Remote',
    desc: 'Contributing to Ayu\'s private backend services, clinical workflows, and healthcare data exchange systems.',
    hl: [
      'Engineered ABDM / ABHA consent management, health ID discovery, record linking, and PHR exchange pipelines.',
      'Built automated OCR and PDF analysis pipelines for parsing unstructured medical prescriptions and lab reports.',
      'Shipped real-time WebSocket chat infrastructure, automated medication reminder queues, and role-based clinical analytics.'
    ],
    stack: ['Django', 'Python', 'WebSockets', 'PostgreSQL', 'ABDM / ABHA', 'Celery'],
    href: L.li
  },
  {
    role: 'Core Platform Contributor',
    co: 'Namma Turf',
    period: '2025',
    loc: 'Mumbai / Remote',
    desc: 'Contributed to platform architecture and frontend-backend integration for an automated corporate sports league management startup.',
    hl: [
      'Built interactive features for match fixtures, league registrations, and corporate team onboarding.',
      'Engineered responsive interfaces and coordinated API endpoints for real-time score updates.'
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'App Development'],
    href: 'https://www.nammaturf.com/'
  },
]

const EVENTS = [
  { id: 'devfest', name: 'GDG DevFest Mumbai', type: 'Tech Conference', desc: 'Google Developer Group DevFest — deep dives into Cloud, AI agents, Android, and Mumbai\'s developer ecosystem.' },
  { id: 'aws', name: 'AWS Community Day Mumbai', type: 'Cloud Summit', desc: 'Oct 11, 2025 — Serverless architectures, generative AI on AWS, distributed pipelines, and cloud networking.' },
  { id: 'flutter', name: 'FlutterFlow Community Day', type: 'Community Meetup', desc: 'Workshops on rapid application delivery, low-code extensions, and scalable state management.' },
  { id: 'mtw', name: 'Mumbai Tech Week', type: 'Tech Festival', desc: 'Flagship multi-day summit bringing together startup founders, venture capitalists, and top engineering talent.' },
  { id: 'ibs', name: 'India Brand Summit 2025', type: 'Leadership Summit', desc: 'Invited delegate representing ITM Skills University — high-level insights into brand growth and scale.' },
  { id: 'ibex', name: 'IBEX India / SmartTech Asia', type: 'Fintech Trade Fair', desc: '13th International BFSI Technology & Fintech Fair — exploring banking infrastructure, security, and payment rails.' },
]

const SKILLS = [
  { n: 'Python', i: 'python/python-original.svg' },
  { n: 'Django', i: 'django/django-plain.svg' },
  { n: 'FastAPI', i: 'fastapi/fastapi-original.svg' },
  { n: 'Node.js', i: 'nodejs/nodejs-original.svg' },
  { n: 'JavaScript', i: 'javascript/javascript-original.svg' },
  { n: 'TypeScript', i: 'typescript/typescript-original.svg' },
  { n: 'Java', i: 'java/java-original.svg' },
  { n: 'PostgreSQL', i: 'postgresql/postgresql-original.svg' },
  { n: 'MongoDB', i: 'mongodb/mongodb-original.svg' },
  { n: 'Redis', i: 'redis/redis-original.svg' },
  { n: 'MySQL', i: 'mysql/mysql-original.svg' },
  { n: 'Docker', i: 'docker/docker-original.svg' },
  { n: 'GCP', i: 'googlecloud/googlecloud-original.svg' },
  { n: 'Git', i: 'git/git-original.svg' },
  { n: 'WebSockets', s: 'https://cdn.simpleicons.org/socketdotio' },
  { n: 'LangChain', s: 'https://cdn.simpleicons.org/langchain' },
  { n: 'Langflow', s: 'https://cdn.simpleicons.org/langflow' },
  { n: 'OpenAI API', s: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg' },
  { n: 'Groq' },
  { n: 'OpenCV', i: 'opencv/opencv-original.svg' },
  { n: 'React', i: 'react/react-original.svg' },
  { n: 'Next.js', i: 'nextjs/nextjs-original.svg' },
  { n: 'Tailwind CSS', i: 'tailwindcss/tailwindcss-original.svg' },
  { n: 'Flutter', i: 'flutter/flutter-original.svg' },
  { n: 'Firebase', i: 'firebase/firebase-plain.svg' },
  { n: 'GraphQL', i: 'graphql/graphql-plain.svg' },
  { n: 'Playwright', i: 'playwright/playwright-original.svg' },
]

const C = {
  m: '00000000000000000100000000000000000000000000000000000000000000000000100000000000010000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000001100000000000000000000000010000000001000000000000000000000000010000000002040000000000000000000000000000000000000000000000100100000000000000000000000001000040000000000000000030000000000000000000000000000200003000',
  a: '00000000000000000000002110010000000000102300000000000000000000000000000000010120100010302000000100000000000000000000000000000000000000000002211010200001100020200000000000000000000120000020103200200000000001100020000000000000000000001021201200012001001110000000103000000000000000000000010121010000002000000010002300000000000000000000000000011020100300000001014001000200',
}

const AI_USAGE = {
  updated: '19 Aug 2026',
  combined: 6830387901,
  claude: {
    total: 4930387901,
    input: 3297402,
    output: 16429706,
    cacheRead: 4561437695,
    cacheWrite: 349223098,
    messages: 66216,
    sessions: 191,
    activeDays: 84,
    longestSession: '6d 8h 28m',
    models: [
      { name: 'Sonnet 4.6', tokens: 2223840466 },
      { name: 'Sonnet 5', tokens: 1216587508 },
      { name: 'Sonnet 4.5', tokens: 962984250 },
      { name: 'Haiku 4.5', tokens: 277502883 },
      { name: 'Opus 4.7', tokens: 242395857 },
      { name: 'Opus 4.8', tokens: 7076937 },
    ],
  },
  codex: {
    tokens: 1900000000,
    peakTokens: 219400000,
    chats: 415,
    currentStreak: 5,
    longestStreak: 27,
    skillsUsed: 225,
  },
}

const compactNumber = value => {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(2)}B`
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(value >= 100_000 ? 0 : 1)}K`
  return String(value)
}

/* ── Tiny Icons ────────────────────────────────────────── */
function Ico({ n }) {
  const p = {
    gh:   <path d="M9 19c-4 .9-4-2-5.5-2.5M14.5 21v-3.5c0-1 .1-1.5-.5-2 2.1-.2 4.3-1 4.3-4.8 0-1-.4-1.9-1-2.6.1-.2.5-1.2-.1-2.5 0 0-.8-.3-2.7 1a9.6 9.6 0 0 0-5 0c-1.9-1.3-2.7-1-2.7-1-.6 1.3-.2 2.3-.1 2.5-.6.7-1 1.6-1 2.6 0 3.8 2.2 4.6 4.3 4.8-.6.5-.6 1.1-.6 2V21"/>,
    li:   <path d="M5 8v9M5 5.2v.1M9.5 17v-5.2a3 3 0 0 1 6 0V17M9.5 9.5V17M19 17v-5.2a3 3 0 0 0-6-1.8"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></>,
    dl:   <path d="M12 3v13M8 13l4 4 4-4M3 19h18"/>,
    sun:  <><circle cx="12" cy="12" r="3.4"/><path d="M12 2.5v2M12 19.5v2M4.7 4.7l1.4 1.4M17.9 17.9l1.4 1.4M2.5 12h2M19.5 12h2M4.7 19.3l1.4-1.4M17.9 6.1l1.4-1.4"/></>,
    moon: <path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/>,
    menu: <path d="M3 12h18M3 6h18M3 18h18"/>,
    x:    <path d="M18 6 6 18M6 6l12 12"/>,
    ext:  <path d="M7 17 17 7M7 7h10v10"/>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {p[n]}
    </svg>
  )
}

function Preview({ url }) {
  const [err, setErr] = useState(false)
  if (!url || err) return null
  return (
    <div className="proj-preview">
      <iframe src={url} title="preview" sandbox="allow-scripts allow-same-origin" loading="lazy" onError={() => setErr(true)} />
      <div className="proj-preview-ov" />
    </div>
  )
}

function Chip({ s }) {
  const icon = s.s ?? (s.i ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.i}` : null)
  return (
    <div className={`chip${icon ? '' : ' broken'}`}>
      {icon ? <img src={icon} alt="" loading="lazy"
        onError={e => e.currentTarget.closest('.chip').classList.add('broken')} /> : null}
      <span className="chip-fb">{s.n[0]}</span>
      {s.n}
    </div>
  )
}

function ContribMatrix() {
  const cells = useMemo(() => Array.from(
    { length: Math.max(C.m.length, C.a.length) },
    (_, i) => Math.min(4, Number(C.m[i] ?? 0) + Number(C.a[i] ?? 0))
  ), [])
  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']

  return (
    <div className="matrix-shell">
      <div className="matrix-head"><span>Combined contribution matrix</span><span>Aug 2025 — Aug 2026</span></div>
      <div className="matrix-scroll">
        <div className="matrix-months">{months.map((month, index) => <span key={`${month}-${index}`}>{month}</span>)}</div>
        <div className="matrix-body">
          <div className="matrix-days" aria-hidden="true"><span>Mon</span><span>Wed</span><span>Fri</span></div>
          <div className="contribution-matrix" aria-label="Combined daily contributions from both GitHub profiles">
            {cells.map((level, index) => <span key={index} className={`matrix-cell level-${level}`} title={`${level === 0 ? 'No' : `Level ${level}`} contribution activity`} />)}
          </div>
        </div>
      </div>
      <div className="matrix-foot">
        <span>bharath-541 + bharath-ayu</span>
        <div className="matrix-legend"><span>Less</span>{[0, 1, 2, 3, 4].map(level => <i key={level} className={`matrix-cell level-${level}`} />)}<span>More</span></div>
      </div>
    </div>
  )
}

function AIUsage() {
  const maxModel = AI_USAGE.claude.models[0].tokens

  return (
    <div className="ai-usage-block">
      <div className="ai-usage-head">
        <div>
          <span className="ai-kicker">AI build telemetry</span>
          <h3>Tokens behind the work.</h3>
        </div>
        <p>Aggregated local usage only. No prompts, conversations, or repository content are exposed.</p>
      </div>

      <div className="ai-metrics">
        <div className="ai-metric"><strong>{compactNumber(AI_USAGE.combined)}+</strong><span>combined tracked tokens</span></div>
        <div className="ai-metric"><strong>{compactNumber(AI_USAGE.claude.total)}</strong><span>Claude Code</span></div>
        <div className="ai-metric"><strong>{compactNumber(AI_USAGE.codex.tokens)}</strong><span>Codex lifetime</span></div>
        <div className="ai-metric"><strong>{AI_USAGE.codex.chats}</strong><span>Codex chats</span></div>
      </div>

      <div className="ai-usage-grid">
        <div className="model-usage">
          <div className="ai-panel-label">Claude model mix</div>
          {AI_USAGE.claude.models.map(model => (
            <div className="model-row" key={model.name}>
              <div className="model-row-copy"><span>{model.name}</span><span>{compactNumber(model.tokens)}</span></div>
              <div className="model-track"><span style={{ width: `${Math.max(2, (model.tokens / maxModel) * 100)}%` }} /></div>
            </div>
          ))}
        </div>

        <div className="usage-ledger">
          <div className="ai-panel-label">Local snapshot</div>
          <div className="usage-line"><span>Cache read</span><strong>{compactNumber(AI_USAGE.claude.cacheRead)}</strong></div>
          <div className="usage-line"><span>Cache created</span><strong>{compactNumber(AI_USAGE.claude.cacheWrite)}</strong></div>
          <div className="usage-line"><span>Input / output</span><strong>{compactNumber(AI_USAGE.claude.input)} / {compactNumber(AI_USAGE.claude.output)}</strong></div>
          <div className="usage-line"><span>Longest Claude session</span><strong>{AI_USAGE.claude.longestSession}</strong></div>
          <div className="usage-line"><span>Codex peak / streak</span><strong>{compactNumber(AI_USAGE.codex.peakTokens)} / {AI_USAGE.codex.longestStreak}d</strong></div>
          <div className="usage-line"><span>Codex skill runs</span><strong>{AI_USAGE.codex.skillsUsed}</strong></div>
          <div className="usage-source">Claude Code local stats + Codex profile snapshot · rounded totals · {AI_USAGE.updated}</div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════
   MAIN APPLICATION
══════════════════════════════════════════════════════════ */
const CATS = ['All', 'Ventures & Startups', 'Backend & AI', 'Hackathons']

export default function App() {
  const [activeNav, setActiveNav]   = useState('About')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filter, setFilter]         = useState('All')
  const [sent, setSent]             = useState(false)
  const [theme, setTheme]           = useState(
    () => typeof window !== 'undefined' ? (localStorage.getItem('pbr-theme-v4') ?? 'dark') : 'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('pbr-theme-v4', theme)
  }, [theme])

  useEffect(() => {
    const target = window.location.hash.slice(1)
    if (!target) return
    const timer = window.setTimeout(() => document.getElementById(target)?.scrollIntoView(), 250)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = NIDS.indexOf(e.target.id)
          if (i >= 0) setActiveNav(NAV[i])
        }
      })
    }, { threshold: 0.2 })
    NIDS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const scroll = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter)

  return (
    <>
      <div className="grid-bg" aria-hidden="true" />

      {/* ── Navbar ────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scroll('top')} role="button" tabIndex={0} aria-label="Top">BR</div>

        <div className="nav-center">
          {NAV.map((n, i) => (
            <button key={n} className={`nav-lnk ${activeNav === n ? 'on' : ''}`} onClick={() => scroll(NIDS[i])}>{n}</button>
          ))}
        </div>

        <div className="nav-right">
          <a className="nav-resume" href={L.cv} download target="_blank" rel="noreferrer">
            <Ico n="dl" /><span>Résumé</span>
          </a>
          <a className="nav-ico" href={L.gh} target="_blank" rel="noreferrer" aria-label="GitHub"><Ico n="gh" /></a>
          <button className="nav-ico" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            <Ico n={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button className="nav-ico nav-burger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <Ico n={mobileOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mob-nav">
          {NAV.map((n, i) => (
            <button key={n} className={`nav-lnk ${activeNav === n ? 'on' : ''}`} onClick={() => scroll(NIDS[i])}>
              {n}
            </button>
          ))}
          <div style={{ marginTop: 24 }}>
            <a className="btn btn-solid" href={L.cv} download>
              <Ico n="dl" /> Download Résumé
            </a>
          </div>
        </div>
      )}

      <div className="site">

        {/* ── Hero ──────────────────────────────────────── */}
        <section className="hero-section" id="top">
          <div className="wrap hero-wrap">
            <div className="hero-main">
              <div className="hero-copy">
                <span className="hero-label">Backend &amp; AI Systems · Founder &amp; Venture Builder</span>
                <h1 className="hero-name">Perni Bharath<br />Raghavendra</h1>
                <div className="hero-sub">Backend Infrastructure, AI Pipelines &amp; Entrepreneurship</div>
                <p className="hero-p">
                  I architect high-performance backend systems, intelligent AI workflows, and scale products from idea to production with a relentless entrepreneurial drive.
                </p>
                <div className="hero-btns">
                  <button className="btn btn-solid" onClick={() => scroll('work')}>View My Work →</button>
                  <a className="btn btn-outline" href={L.gh} target="_blank" rel="noreferrer">GitHub ↗</a>
                  <a className="btn btn-outline" href={L.li} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                </div>
              </div>
              <aside className="hero-aside">
                <div className="hero-aside-top"><span>BUILD LOG</span><span>2025 — NOW</span></div>
                <div className="hero-aside-mark">&lt;/&gt;</div>
                <p>Systems that move<br />from idea to impact.</p>
                <div className="hero-aside-lines"><span>01 · Ship the useful thing</span><span>02 · Measure what matters</span><span>03 · Keep learning</span></div>
              </aside>
            </div>
            <div className="hero-stats">
              <div className="st">
                <span className="st-n">Tibzee</span>
                <span className="st-l">Co-Founder</span>
                <span className="st-desc">Pitched 6+ preschools · Live pilot</span>
              </div>
              <div className="st">
                <span className="st-n">Ayu</span>
                <span className="st-l">SWE Intern</span>
                <span className="st-desc">ABDM/ABHA · OCR · WebSockets</span>
              </div>
              <div className="st">
                <span className="st-n">8+</span>
                <span className="st-l">Hackathons</span>
                <span className="st-desc">2 Prizes Won · SuperMind Cert</span>
              </div>
              <div className="st">
                <span className="st-n">258</span>
                <span className="st-l">Contributions</span>
                <span className="st-desc">Aug 2025 – Aug 2026 combined</span>
              </div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <span>SCROLL</span>
            <span className="scrl-line" />
          </div>
        </section>

        {/* ── About ─────────────────────────────────────── */}
        <section className="section" id="about">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick">About Me</span>
              <h2 className="sh-title">Engineering Systems &amp; Building Ventures</h2>
              <p className="sh-sub">A blend of robust backend engineering, autonomous AI workflows, and zero-to-one startup grit.</p>
            </div>
            <div className="about-grid">
              <div>
                <div className="about-body">
                  <p>
                    Hey, I'm <strong>Perni Bharath Raghavendra</strong> — a Computer Science undergrad at <strong>ITM Skills University, Mumbai</strong>. My focus centers on <strong>backend distributed systems</strong>, <strong>AI-driven pipelines</strong>, and <strong>practical product building</strong>.
                  </p>
                  <p>
                    As the <strong>Co-Founder of Tibzee</strong>, I took a preschool operations and parent communication platform from concept to market: pitched to <strong>6+ preschool founders</strong>, ran a 1-month live operational pilot, and learned firsthand about unit economics and B2B sales cycles.
                  </p>
                  <p>
                    Currently, I'm a <strong>Software Engineering Intern at Ayu</strong>, where I develop healthcare backend systems, national ABDM/ABHA protocol integrations, medical OCR analysis pipelines, and real-time WebSocket communications.
                  </p>
                </div>
                <div className="fact-table">
                  <div className="fact-row"><span className="fk">Education</span><span className="fv">ITM Skills University, Mumbai (CSE)</span></div>
                  <div className="fact-row"><span className="fk">CGPA</span><span className="fv">9.44 / 10</span></div>
                  <div className="fact-row"><span className="fk">Current Role</span><span className="fv">Software Engineering Intern @ Ayu</span></div>
                  <div className="fact-row"><span className="fk">Venture</span><span className="fv">Co-Founder @ Tibzee (Preschool SaaS)</span></div>
                  <div className="fact-row"><span className="fk">Core Focus</span><span className="fv">Backend Architectures · AI Pipelines · Product Strategy</span></div>
                </div>
              </div>
              <div className="lnk-stack">
                <a href={L.li} target="_blank" rel="noreferrer" className="lnk-row">
                  <div className="lnk-row-l"><Ico n="li" /><span>LinkedIn — Perni Bharath Raghavendra</span></div>
                  <span className="lnk-arr">↗</span>
                </a>
                <a href={L.gh} target="_blank" rel="noreferrer" className="lnk-row">
                  <div className="lnk-row-l"><Ico n="gh" /><span>GitHub Primary — @bharath-541</span></div>
                  <span className="lnk-arr">↗</span>
                </a>
                <a href={L.ayugh} target="_blank" rel="noreferrer" className="lnk-row">
                  <div className="lnk-row-l"><Ico n="gh" /><span>GitHub Organization — @bharath-ayu</span></div>
                  <span className="lnk-arr">↗</span>
                </a>
                <a href={L.mail} className="lnk-row">
                  <div className="lnk-row-l"><Ico n="mail" /><span>pernibharath15@gmail.com</span></div>
                  <span className="lnk-arr">↗</span>
                </a>
                <a href={L.cv} download target="_blank" rel="noreferrer" className="lnk-row res">
                  <div className="lnk-row-l"><Ico n="dl" /><span>Download Official Résumé</span></div>
                  <span className="lnk-arr">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────── */}
        <section className="section section-off" id="work">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick">Featured Work</span>
              <h2 className="sh-title">Startups, AI &amp; Backend Systems</h2>
              <p className="sh-sub">Production applications, AI architectures, venture pilots, and hackathon prototypes.</p>
            </div>
            <div className="filter-bar">
              {CATS.map(c => (
                <button
                  key={c}
                  className={`ftab ${filter === c ? 'on' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="proj-grid">
              {filtered.map(p => (
                <article className="proj-card" key={p.id}>
                  <div className="proj-top" />
                  {p.badge && <div className="proj-badge">{p.badge}</div>}
                  <div className="proj-inner">
                    <div className="proj-kick">{p.type}</div>
                    <div className="proj-name">{p.name}</div>
                    <div className="proj-desc">{p.desc}</div>
                    <div className="tags">
                      {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                    <div className="proj-foot">
                      <a href={p.href} target="_blank" rel="noreferrer" className="tl">
                        View project <Ico n="ext" />
                      </a>
                      {p.source && (
                        <a href={p.source} target="_blank" rel="noreferrer" className="tl dim">
                          Live site <Ico n="ext" />
                        </a>
                      )}
                    </div>
                  </div>
                  <Preview url={p.preview} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hackathons & Certifications ────────────────── */}
        <section className="section" id="hackathons">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick">Hackathons &amp; Honors</span>
              <h2 className="sh-title">8 Hackathons · 2 Prizes · 1 National Cert</h2>
              <p className="sh-sub">Fast-paced engineering under 24–48 hour sprints, building functional AI systems and distributed backends.</p>
            </div>

            {/* SuperMind Certificate */}
            <div className="cert-card">
              <img src={asset('images/supermind_cert.jpg')} alt="Level SuperMind Certificate" className="cert-img" />
              <div>
                <div className="cert-pill">🎖️ Official Certificate — Level SuperMind Hackathon 2025</div>
                <div className="cert-title">Level SuperMind Hackathon (AI Analytics)</div>
                <p className="cert-desc">
                  Awarded by <strong>FindCoder</strong>, <strong>AWS</strong> &amp; <strong>Langflow</strong> for outstanding technical execution, AI agent workflows, and vector-embedded analytics using Langflow and DataStax Astra DB.
                </p>
                <a href="https://github.com/Soham-1304/Social_media_insights" target="_blank" rel="noreferrer" className="tl">
                  View GitHub Repository <Ico n="ext" />
                </a>
              </div>
            </div>

            {/* Buildathon Win */}
            <div className="cert-card">
              <img src={asset('images/buildathon_win.jpg')} alt="Buildathon 3.0 Runner-Up" className="cert-img" />
              <div>
                <div className="cert-pill">🥈 Runner-Up · ₹5,000 Cash Prize — Buildathon 3.0</div>
                <div className="cert-title">Buildathon 3.0 — ITM Skills University</div>
                <p className="cert-desc">
                  "Magic in codes, spells in action." Competed against competitive collegiate teams across universities, securing the runner-up position and ₹5,000 in prize money.
                </p>
              </div>
            </div>

            <div className="hack-grid">
              {HACKATHONS.map(h => (
                <div className={`hcard ${h.cls}`} key={h.id}>
                  <div className="hcard-top">
                    <div>
                      <div className="hname">{h.name}</div>
                      {h.org && <div className="horg">{h.org}</div>}
                    </div>
                    <div className={`hpill ${h.cls}`}>{h.result}</div>
                  </div>
                  <p className="hdesc">{h.desc}</p>
                  {h.stack.length > 0 && (
                    <div className="htags">
                      {h.stack.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  )}
                  {h.photo && (
                    <div className="hphoto">
                      <img src={asset(h.photo)} alt={h.name} loading="lazy" />
                    </div>
                  )}
                  <div className="hlinks">
                    {h.href && (
                      <a href={h.href} target="_blank" rel="noreferrer" className="tl">
                        View project <Ico n="ext" />
                      </a>
                    )}
                    {h.li && (
                      <a href={h.li} target="_blank" rel="noreferrer" className="tl dim">
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience & Entrepreneurship ──────────────── */}
        <section className="section section-off" id="experience">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick">Experience</span>
              <h2 className="sh-title">Startup Ventures &amp; Engineering Roles</h2>
              <p className="sh-sub">Commercial software development, startup founding, and high-stakes healthcare infrastructure.</p>
            </div>
            <div className="exp-list">
              {EXPERIENCES.map(exp => (
                <div className="exp-card" key={exp.co}>
                  <div className="exp-l">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-co">{exp.co}</span>
                    <span className="exp-per">{exp.period}</span>
                    <span className="exp-loc">{exp.loc}</span>
                    <a href={exp.href} target={exp.href.startsWith('#') ? undefined : '_blank'} rel={exp.href.startsWith('#') ? undefined : 'noreferrer'} className="exp-lnk">
                      {exp.href.startsWith('#') ? 'View Work' : 'LinkedIn Profile'} <Ico n="ext" />
                    </a>
                  </div>
                  <div className="exp-r">
                    <p className="exp-desc">{exp.desc}</p>
                    {exp.hl && (
                      <div className="exp-hl">
                        {exp.hl.map(h => <div key={h} className="exp-hli">{h}</div>)}
                      </div>
                    )}
                    <div className="tags">
                      {exp.stack.map(s => <span key={s} className="tag">{s}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ─────────────────────────────────── */}
        <section className="section section-dark" id="stack">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick dark-sh-kick">Toolbox</span>
              <h2 className="sh-title dark-sh-title">Technologies &amp; Systems Architecture</h2>
              <p className="sh-sub dark-sh-sub">Languages, backend frameworks, data stores, AI agent tooling, and cloud infrastructure.</p>
            </div>
            <div className="chips">
              {SKILLS.map(s => <Chip key={s.n} s={s} />)}
            </div>

            <div className="contrib-block">
              <div className="contrib-title">
                GitHub Activity Matrix — bharath-541 + bharath-ayu
              </div>
              <div className="contrib-nums">
                <div className="cn"><strong>258</strong><span>contributions</span></div>
                <div className="cn"><strong>141</strong><span>local commits</span></div>
                <div className="cn"><strong>3</strong><span>private org repos</span></div>
              </div>
              <ContribMatrix />
              <p className="contrib-note">
                Combined Aug 2025 – Aug 2026 · Includes private repositories across ABDM/ABHA healthcare integrations, OCR document processing pipelines, WebSocket chat services, and automated notification engines.
              </p>
            </div>
            <AIUsage />
          </div>
        </section>

        {/* ── Events & Community ────────────────────────── */}
        <section className="section" id="events">
          <div className="wrap">
            <div className="sh">
              <span className="sh-kick">Community &amp; Tech Ecosystem</span>
              <h2 className="sh-title">Events, Meetups &amp; Summits</h2>
              <p className="sh-sub">Actively participating in Mumbai's developer ecosystem, cloud communities, and tech trade fairs.</p>
            </div>
            <div className="events-grid">
              <div className="ev-list">
                {EVENTS.map(ev => (
                  <div className="ev-card" key={ev.id}>
                    <div className="ev-type">{ev.type}</div>
                    <div className="ev-name">{ev.name}</div>
                    <div className="ev-desc">{ev.desc}</div>
                  </div>
                ))}
              </div>
              {/* Photo Mosaic */}
              <div className="photo-mosaic">
                <div className="photo-item span2">
                  <img src={asset('images/devfest1.jpg')} alt="GDG DevFest Mumbai" loading="lazy" />
                  <div className="photo-cap">GDG DevFest Mumbai</div>
                </div>
                <div className="photo-item">
                  <img src={asset('images/aws_badge.jpg')} alt="AWS Community Day" loading="lazy" />
                  <div className="photo-cap">AWS Community Day Mumbai</div>
                </div>
                <div className="photo-item">
                  <img src={asset('images/flutterflow.jpg')} alt="FlutterFlow Day" loading="lazy" />
                  <div className="photo-cap">FlutterFlow Community Day</div>
                </div>
                <div className="photo-item">
                  <img src={asset('images/mtw.jpg')} alt="Mumbai Tech Week" loading="lazy" />
                  <div className="photo-cap">Mumbai Tech Week</div>
                </div>
                <div className="photo-item">
                  <img src={asset('images/ibs_badge.jpg')} alt="India Brand Summit" loading="lazy" />
                  <div className="photo-cap">India Brand Summit 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────── */}
        <section className="section section-off" id="contact">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <h2 className="c-head">Let's build<br />something impactful.</h2>
                <p className="c-sub">
                  Open to backend &amp; AI engineering roles, high-velocity startup collaborations, and hackathon teams. Let's connect.
                </p>
                <div className="c-rows">
                  <a href={L.mail} className="crow">
                    <Ico n="mail" /><span>pernibharath15@gmail.com</span>
                  </a>
                  <a href={L.li} target="_blank" rel="noreferrer" className="crow">
                    <Ico n="li" /><span>linkedin.com/in/perni-bharath-raghavendra</span>
                  </a>
                  <a href={L.gh} target="_blank" rel="noreferrer" className="crow">
                    <Ico n="gh" /><span>github.com/bharath-541</span>
                  </a>
                  <a href={L.cv} download target="_blank" rel="noreferrer" className="crow">
                    <Ico n="dl" /><span>Download Résumé (PDF)</span>
                  </a>
                </div>
              </div>
              <form className="form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="frow">
                  <input className="fi" aria-label="Name" placeholder="Your Name" required />
                  <input className="fi" type="email" aria-label="Email" placeholder="Your Email" required />
                </div>
                <textarea className="fi fta" aria-label="Message" placeholder="Tell me about your project, team, or opportunity..." required />
                <button className="fsub" type="submit">
                  {sent ? 'Message Sent ✓' : 'Send Message →'}
                </button>
                {sent && <p className="fok">Thanks for reaching out! I will respond promptly.</p>}
              </form>
            </div>
            <div className="footer">
              <span>© 2026 Perni Bharath Raghavendra. All rights reserved.</span>
              <span>Backend Systems · AI Engineering · Venture Building &lt;/&gt;</span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
