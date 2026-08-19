import { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const profileLinks = {
  primaryGithub: 'https://github.com/bharath-541',
  ayuGithub: 'https://github.com/bharath-ayu',
  linkedin: 'https://in.linkedin.com/in/perni-bharath-raghavendra-522529265',
  email: 'mailto:pernibharath15@gmail.com',
  tibzeePlay: 'https://play.google.com/store/apps/details?id=com.arunodeep.tibzee&pli=1',
  tibzeeLive: 'https://tibzee-landing-react.vercel.app/',
  tibzeeSource: 'https://github.com/bharath-541/Tibzee_landing_react',
  tibzeeLogo: 'https://raw.githubusercontent.com/bharath-541/Tibzee_landing_react/main/public/tibzee_logo.png',
}

const projects = [
  {
    id: 'tibzee',
    name: 'Tibzee',
    index: '01',
    type: 'Preschool operations platform',
    description:
      'A calm, all-in-one workspace for preschool teachers and administrators: attendance, reports, parent messages, activities, stars, and fee records.',
    stack: ['React', 'Tailwind CSS', 'Android'],
    href: profileLinks.tibzeePlay,
    sourceHref: profileLinks.tibzeeSource,
  },
  {
    id: 'finsight',
    name: 'FinSight',
    index: '02',
    type: 'Full-stack finance app',
    description:
      'A personal finance workspace for tracking expenses, assets, debts, EMIs, and a practical 50 / 30 / 20 budget.',
    stack: ['MERN', 'MongoDB', 'Express'],
    href: 'https://github.com/bharath-541/FinSight',
  },
  {
    id: 'clyra',
    name: 'Clyra',
    index: '03',
    type: 'AI insurance claims system',
    description:
      'A claims workflow combining document extraction, fraud detection, priority queues, and real-time role-based dashboards.',
    stack: ['React', 'Node.js', 'MongoDB'],
    href: 'https://github.com/bharath-541/Clyra-insurance-claims',
  },
  {
    id: 'social-media-insights',
    name: 'Social Media Insights',
    index: '04',
    type: 'AI analytics experiment',
    description:
      'A pre-hackathon analytics module exploring sentiment, keywords, and engagement signals with Langflow and Astra DB.',
    stack: ['Python', 'Langflow', 'Astra DB'],
    href: 'https://github.com/bharath-541/Social_media_insights',
  },
  {
    id: 'conversai',
    name: 'ConversAI Labs',
    index: '05',
    type: 'LLM fine-tuning study',
    description:
      'A focused learning project for understanding the practical path from language model data to fine-tuned behavior.',
    stack: ['Python', 'LLMs', 'Jupyter'],
    href: 'https://github.com/bharath-541/ConversAIlabs-LLM-finetuning-assignment',
  },
]

const learnings = [
  {
    icon: 'box',
    title: 'Ayu backend systems',
    text: 'Contributing to Django health workflows, ABDM/ABHA integrations, OCR and PDF processing, and production-facing API behavior.',
  },
  {
    icon: 'spark',
    title: 'AI agents + automation',
    text: 'Exploring agent frameworks, voice interfaces, and workflows that make everyday productivity feel lighter.',
  },
  {
    icon: 'code',
    title: 'MERN + Tailwind',
    text: 'Building full-stack apps with a sharper eye for modern UI, clean information hierarchy, and product feel.',
  },
  {
    icon: 'sigma',
    title: 'DSA',
    text: 'Strengthening problem solving and algorithmic thinking one pattern at a time.',
  },
]

const experiences = [
  {
    role: 'Founder',
    company: 'Tibzee',
    period: 'Jul 2025 — Dec 2025',
    location: 'Bengaluru / Remote',
    description: 'Founded Tibzee and shaped an early-learning operations product for preschool teachers and school administrators. Worked across product direction, landing experience, feature storytelling, and the first app workflow.',
    stack: ['React', 'Tailwind CSS', 'Product direction'],
    href: '#tibzee',
  },
  {
    role: 'Software engineering intern',
    company: 'Ayu',
    period: 'Jan 2026 — Present',
    location: 'Bengaluru / Remote',
    description: 'Contributing across Ayu’s private backend and dashboard systems, turning complex healthcare workflows into dependable product experiences.',
    highlights: [
      'Built ABDM / ABHA and PHR flows for consent, discovery, linking, and health-record exchange.',
      'Improved OCR, PDF analysis, and document-processing workflows for medical records.',
      'Shipped real-time WebSocket chat features, medication reminders, WhatsApp automation, and role-aware analytics.',
    ],
    stack: ['Django', 'Python', 'WebSockets', 'ABDM / ABHA'],
    href: profileLinks.linkedin,
  },
]

const contributionSnapshot = {
  main: '00000000000000000100000000000000000000000000000000000000000000000000100000000000010000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000001100000000000000000000000010000000001000000000000000000000000010000000002040000000000000000000000000000000000000000000000100100000000000000000000000001000040000000000000000030000000000000000000000000000200003000',
  ayu: '00000000000000000000002110010000000000102300000000000000000000000000000000010120100010302000000100000000000000000000000000000000000000000002211010200001100020200000000000000000000120000020103200200000000001100020000000000000000000001021201200012001001110000000103000000000000000000000010121010000002000000010002300000000000000000000000000011020100300000001014001000200',
  total: 258,
  period: 'Aug 2025 — Aug 2026',
}

const techSkills = [
  { name: 'JavaScript', short: 'JS', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', short: 'TS', icon: 'typescript/typescript-original.svg' },
  { name: 'Python', short: 'Py', icon: 'python/python-original.svg' },
  { name: 'Java', short: 'Java', icon: 'java/java-original.svg' },
  { name: 'HTML5', short: 'HTML', icon: 'html5/html5-original.svg' },
  { name: 'CSS3', short: 'CSS', icon: 'css3/css3-original.svg' },
  { name: 'React', short: 'React', icon: 'react/react-original.svg' },
  { name: 'Next.js', short: 'Next', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Node.js', short: 'Node', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Django', short: 'Django', icon: 'django/django-plain.svg' },
  { name: 'Express', short: 'Ex', icon: 'express/express-original.svg' },
  { name: 'GraphQL', short: 'GQL', icon: 'graphql/graphql-plain.svg' },
  { name: 'Tailwind CSS', short: 'TW', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', short: 'Mongo', icon: 'mongodb/mongodb-original.svg' },
  { name: 'Neo4j', short: 'Neo4j', icon: 'neo4j/neo4j-original.svg' },
  { name: 'MySQL', short: 'SQL', icon: 'mysql/mysql-original.svg' },
  { name: 'PostgreSQL', short: 'PG', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Redis', short: 'Redis', icon: 'redis/redis-original.svg' },
  { name: 'Celery', short: 'Celery', src: 'https://cdn.simpleicons.org/celery' },
  { name: 'FastAPI', short: 'API', icon: 'fastapi/fastapi-original.svg' },
  { name: 'Docker', short: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Google Cloud', short: 'GCP', icon: 'googlecloud/googlecloud-original.svg' },
  { name: 'Flutter', short: 'Flutter', icon: 'flutter/flutter-original.svg' },
  { name: 'Git', short: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', short: 'GitHub', icon: 'github/github-original.svg' },
  { name: 'Figma', short: 'Figma', icon: 'figma/figma-original.svg' },
  { name: 'Firebase', short: 'Firebase', icon: 'firebase/firebase-plain.svg' },
  { name: 'Jupyter', short: 'Jup', icon: 'jupyter/jupyter-original.svg' },
  { name: 'OpenCV', short: 'CV', icon: 'opencv/opencv-original.svg' },
  { name: 'PyMuPDF', short: 'PDF', src: 'https://cdn.simpleicons.org/adobeacrobatreader' },
  { name: 'Playwright', short: 'PW', src: 'https://cdn.simpleicons.org/playwright' },
  { name: 'WebSockets', short: 'WS', src: 'https://cdn.simpleicons.org/socketdotio' },
  { name: 'LangChain', short: 'LC', src: 'https://cdn.simpleicons.org/langchain' },
  { name: 'LangGraph', short: 'LG', src: 'https://cdn.simpleicons.org/langgraph' },
  { name: 'Langflow', short: 'LF', src: 'https://cdn.simpleicons.org/langflow' },
  { name: 'Qdrant', short: 'Q', src: 'https://cdn.simpleicons.org/qdrant' },
  { name: 'MCP', short: 'MCP', src: 'https://cdn.simpleicons.org/modelcontextprotocol' },
  { name: 'OpenAI API', short: 'AI', src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg' },
  { name: 'Gemini API', short: 'Gem', src: 'https://cdn.simpleicons.org/googlegemini' },
  { name: 'Groq', short: 'Groq', src: 'https://cdn.simpleicons.org/groq' },
]

function Arrow({ external = false }) {
  return <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span>
}

function Icon({ name }) {
  const paths = {
    box: <><path d="M12 3.5 19 7.4v9.2L12 20.5 5 16.6V7.4L12 3.5Z" /><path d="m5.3 7.5 6.7 3.8 6.7-3.8M12 11.3v9" /></>,
    spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /><circle cx="12" cy="12" r="3.2" /></>,
    code: <><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20" /></>,
    sigma: <path d="M19 4H6l7.4 8L6 20h13" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.3" /></>,
    github: <><path d="M9 19c-4 .9-4-2-5.5-2.5M14.5 21v-3.5c0-1 .1-1.5-.5-2 2.1-.2 4.3-1 4.3-4.8 0-1-.4-1.9-1-2.6.1-.2.5-1.2-.1-2.5 0 0-.8-.3-2.7 1a9.6 9.6 0 0 0-5 0c-1.9-1.3-2.7-1-2.7-1-.6 1.3-.2 2.3-.1 2.5-.6.7-1 1.6-1 2.6 0 3.8 2.2 4.6 4.3 4.8-.6.5-.6 1.1-.6 2V21" /></>,
    linkedin: <><path d="M5 8v9M5 5.2v.1M9.5 17v-5.2a3 3 0 0 1 6 0V17M9.5 9.5V17M19 17v-5.2a3 3 0 0 0-6-1.8" /></>,
    sun: <><circle cx="12" cy="12" r="3.4" /><path d="M12 2.5v2M12 19.5v2M4.7 4.7l1.4 1.4M17.9 17.9l1.4 1.4M2.5 12h2M19.5 12h2M4.7 19.3l1.4-1.4M17.9 6.1l1.4-1.4" /></>,
    moon: <path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />,
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function SkillLogo({ skill }) {
  return (
    <div className="skill-item" title={skill.name}>
      <div className="skill-logo">
        <span className="skill-logo-fallback">{skill.short}</span>
        <img src={skill.src ?? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`} alt="" loading="lazy" onError={(event) => event.currentTarget.parentElement.classList.add('broken')} />
      </div>
      <span>{skill.name}</span>
    </div>
  )
}

function TerminalField() {
  const glyphs = useMemo(() => {
    const chars = '01{}[]<>/\\$#@%*+=~'.split('')
    return Array.from({ length: 94 }, (_, index) => ({
      id: index,
      char: chars[(index * 13 + 5) % chars.length],
      left: `${8 + ((index * 37) % 88)}%`,
      top: `${12 + ((index * 17) % 76)}%`,
      delay: `${(index % 9) * -0.48}s`,
      opacity: 0.12 + ((index * 11) % 40) / 100,
    }))
  }, [])

  return (
    <div className="terminal-field" aria-hidden="true">
      <div className="terminal-label terminal-label-one"><span>›</span> init</div>
      <div className="terminal-label terminal-label-two"><span>›</span> build</div>
      {glyphs.map((glyph) => <span key={glyph.id} className="terminal-glyph" style={{ left: glyph.left, top: glyph.top, animationDelay: glyph.delay, opacity: glyph.opacity }}>{glyph.char}</span>)}
    </div>
  )
}

function SectionTitle({ children, detail }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {detail && <p>{detail}</p>}
    </div>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [sent, setSent] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash)
        target?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Back to the top">Perni Bharath Raghavendra</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('learning')}>Learning</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('tibzee')}>Tibzee</button>
          <button onClick={() => scrollTo('stack')}>Stack</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <div className="topbar-actions">
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'dark'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /><span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
          <button className="menu-button" aria-label="Scroll to contact" onClick={() => scrollTo('contact')}><span></span><span></span><span></span></button>
        </div>
      </header>

      <main id="top">
        <section className="hero dark-section">
          <TerminalField />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <h1>I build useful<br />things while<br />figuring out how<br />they work.</h1>
              <p>CSE undergrad building AI tools, full-stack apps, and automation workflows.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('work')}>See the work <Arrow /></button>
                <a className="button button-outline" href={profileLinks.primaryGithub} target="_blank" rel="noreferrer">Open GitHub <Arrow external /></a>
              </div>
            </div>
            <div className="hero-aside">
              <span>01 — 04</span>
              <p>Learning in public.<br />Shipping small.<br />Iterating always.</p>
            </div>
          </div>
          <div className="scroll-note page-width"><span>Scroll to explore</span><span className="scroll-line"></span></div>
        </section>

        <section className="section light-section work-section" id="work">
          <div className="page-width">
            <SectionTitle detail="A few things I’ve built and shipped.">Selected work</SectionTitle>
            <div className="work-layout">
              <div className="project-list" role="list" aria-label="Projects">
                {projects.map((project) => (
                  <button className={`project-row ${selectedProject.id === project.id ? 'selected' : ''}`} key={project.id} onClick={() => setSelectedProject(project)}>
                    <span className="project-index">{project.index}</span>
                    <span className="project-name">{project.name}</span>
                    <Arrow />
                  </button>
                ))}
              </div>
              <article className="project-detail" aria-live="polite">
                <div className="detail-kicker">{selectedProject.type}</div>
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>
                <div className="stack-list">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">
                  <a className="text-link" href={selectedProject.id === 'tibzee' ? '#tibzee' : selectedProject.href} target={selectedProject.id === 'tibzee' ? undefined : '_blank'} rel={selectedProject.id === 'tibzee' ? undefined : 'noreferrer'}>{selectedProject.id === 'tibzee' ? 'Open product page' : 'View project'} <Arrow external /></a>
                  {selectedProject.sourceHref && <a className="text-link subtle-link" href={selectedProject.sourceHref} target="_blank" rel="noreferrer">View source <Arrow external /></a>}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section tibzee-section" id="tibzee">
          <div className="page-width">
            <div className="product-page-head">
              <div className="product-brand"><img src={profileLinks.tibzeeLogo} alt="Tibzee" /><span>Product page</span></div>
              <div className="product-page-actions"><a className="button button-dark" href={profileLinks.tibzeePlay} target="_blank" rel="noreferrer">Open on Google Play <Arrow external /></a><a className="text-link" href={profileLinks.tibzeeLive} target="_blank" rel="noreferrer">Visit landing page <Arrow external /></a></div>
            </div>
            <div className="tibzee-hero-grid">
              <div>
                <h2>Making preschool operations feel lighter.</h2>
                <p>Tibzee brings attendance, reports, parent communication, classroom activities, rewards, and admin visibility into one calm workflow for early-learning teams.</p>
                <div className="tibzee-meta"><span>Founder</span><span>Jul 2025 — Dec 2025</span><span>React · Tailwind · Android</span></div>
              </div>
              <div className="product-preview"><div className="preview-bar"><span></span><span></span><span></span></div><div className="preview-screen"><div className="preview-heading">Good morning, teacher.</div><div className="preview-cards"><div className="preview-card pink"><strong>Attendance</strong><span>24 present today</span></div><div className="preview-card yellow"><strong>Stars</strong><span>Celebrate progress</span></div><div className="preview-card green"><strong>Reports</strong><span>Ready to share</span></div></div><div className="preview-footer">Tibzee · simple tools for meaningful classrooms</div></div></div>
            </div>
            <div className="product-feature-row"><div className="product-feature-intro"><span>01 — 04</span><h3>The product I helped shape.</h3></div><div className="product-feature-list"><div><strong>Smart attendance</strong><span>Mark check-in and check-out in seconds, with parent-ready updates.</span></div><div><strong>Professional reports</strong><span>Turn observations and activities into calm, printable progress reports.</span></div><div><strong>Message drafts</strong><span>Generate WhatsApp-ready updates without starting every message from zero.</span></div><div><strong>Classroom engagement</strong><span>Use stars and activity suggestions to make progress visible and motivating.</span></div></div></div>
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <div className="page-width">
            <SectionTitle detail="Notes, experiments, and steady progress.">What I’m learning</SectionTitle>
            <div className="learning-grid">
              <div className="learning-list">
                {learnings.map((learning) => (
                  <div className="learning-row" key={learning.title}>
                    <Icon name={learning.icon} />
                    <div><h3>{learning.title}</h3><p>{learning.text}</p></div>
                  </div>
                ))}
              </div>
              <div className="notebook">
                <div className="notebook-line">Learning in public.</div>
                <div className="notebook-line">Shipping small.</div>
                <div className="notebook-line">Iterating always.</div>
                <div className="notebook-signature">— Bharath</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="page-width">
            <SectionTitle detail="A place for the work that happens with a team.">Experience</SectionTitle>
            <div className="experience-timeline">
              {experiences.map((experience, index) => <article className="timeline-item" key={`${experience.company}-${experience.role}`}><div className="timeline-marker">0{index + 1}</div><div className="timeline-copy"><div className="experience-meta"><span>{experience.role}</span><span>{experience.period}</span></div><h3>{experience.company}</h3><div className="experience-facts"><span>{experience.location}</span><a href={experience.href} target={experience.href.startsWith('#') ? undefined : '_blank'} rel={experience.href.startsWith('#') ? undefined : 'noreferrer'}>{experience.href.startsWith('#') ? 'Read the product story' : 'View LinkedIn'} <Arrow external /></a></div><p>{experience.description}</p>{experience.highlights && <><span className="experience-contribution-label">Selected contributions</span><ul className="experience-highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></>}<div className="stack-list">{experience.stack.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}
            </div>
          </div>
        </section>

        <section className="section dark-section contributions-section" id="contributions">
          <div className="page-width">
            <SectionTitle detail="Showing up, one commit at a time.">Open source / contributions</SectionTitle>
            <div className="contributions-layout">
              <div className="contribution-data">
                <div className="contribution-headline"><strong>bharath-541 + bharath-ayu</strong><span>One combined matrix for both public build logs.</span></div>
                <div className="contribution-links"><a href={profileLinks.primaryGithub} target="_blank" rel="noreferrer">@bharath-541 <Arrow external /></a><a href={profileLinks.ayuGithub} target="_blank" rel="noreferrer">@bharath-ayu <Arrow external /></a></div>
                <div className="contribution-stats"><div><strong>258</strong><span>contributions</span></div><div><strong>141</strong><span>local commits</span></div><div><strong>03</strong><span>private repos</span></div></div>
                <ContributionGrid />
                <p className="snapshot-note">Combined GitHub activity snapshot · {contributionSnapshot.period} · {contributionSnapshot.total} contributions across both accounts.</p>
                <p className="contribution-work-note">Private product work includes ABDM / ABHA health integrations, OCR and PDF processing, WebSocket AI chat, medication reminders, and WhatsApp automation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="stack">
          <div className="page-width">
            <SectionTitle detail="Languages, frameworks, data, and the tools around them.">Tech stack</SectionTitle>
            <div className="skills-grid">{techSkills.map((skill) => <SkillLogo key={skill.name} skill={skill} />)}</div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="page-width">
            <SectionTitle detail="I’d love to hear about your ideas or projects.">Say hello</SectionTitle>
            <div className="contact-layout">
              <div className="contact-details">
                <a href={profileLinks.email}><Icon name="mail" /><span>pernibharath15@gmail.com</span></a>
                <div><Icon name="pin" /><span>Bengaluru, India</span></div>
                <a href={profileLinks.primaryGithub} target="_blank" rel="noreferrer"><Icon name="github" /><span>github.com/bharath-541</span></a>
                <a href={profileLinks.ayuGithub} target="_blank" rel="noreferrer"><Icon name="github" /><span>github.com/bharath-ayu</span></a>
                <a href={profileLinks.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>linkedin.com/in/perni-bharath-raghavendra</span></a>
              </div>
              <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
                <div className="form-row"><input aria-label="Name" placeholder="Name" required /><input type="email" aria-label="Email" placeholder="Email" required /></div>
                <textarea aria-label="Message" placeholder="Message" required></textarea>
                <button className="button button-dark" type="submit">{sent ? 'Message noted' : 'Send message'} <Arrow /></button>
                {sent && <p className="form-success">Thanks — I’ll get back to you soon.</p>}
              </form>
            </div>
            <footer className="footer"><span>© 2026 Perni Bharath Raghavendra</span><span>Built with curiosity &amp; code. <span className="footer-symbol">&lt;/&gt;</span></span></footer>
          </div>
        </section>
      </main>
    </div>
  )
}

function ContributionGrid() {
  const cells = useMemo(() => Array.from({ length: Math.max(contributionSnapshot.main.length, contributionSnapshot.ayu.length) }, (_, index) => Math.max(Number(contributionSnapshot.main[index] ?? 0), Number(contributionSnapshot.ayu[index] ?? 0))), [])
  return (
    <div className="contribution-grid-wrap contribution-grid-scroll">
      <div className="month-row"><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div>
      <div className="grid-and-days"><div className="day-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="contribution-grid">{cells.map((value, index) => <span key={index} className={`cell level-${value}`}></span>)}</div></div>
      <div className="grid-legend"><span>Less</span><i className="cell level-0"></i><i className="cell level-1"></i><i className="cell level-2"></i><i className="cell level-3"></i><i className="cell level-4"></i><span>More</span></div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
