import './App.css'
import Beacon from './beacon'
import { Routes, Route, Link } from 'react-router-dom'

const projects = [
  {
    
  number: '01',
  year: '2026',
  type: 'UX RESEARCH · UX DESIGN',
  title: 'Beacon',
  subtitle: 'Social discovery × connection',
  question: 'What if meeting people started with shared context instead of profiles?',
  problem:
    'Cities are full of people, but the infrastructure for actually connecting with them is harder to find.',
  idea:
    'Small recurring crews of 3–5 people, with guided sessions that let connection build gradually.',
  image: '/beaconHeroImg.jpg',
  link: '/beacon',

  },

  {
    number: '02',
    year: '2026',
    type: 'UX RESEARCH · UX DESIGN',
    title: 'Event-based dating',
    subtitle: 'Activities × relationships × trust',
    question: 'What if the activity came before the profile?',
    problem: '',
    idea: '',
    image: '/hero-placeholder.png',
    link: '#',
  },

  {
    number: '03',
    year: '2026',
    type: 'UX RESEARCH · UX DESIGN',
    title: 'Learning platform',
    subtitle: 'Learning × confidence × experience',
    question: "What if learning didn't feel like starting over?",
    problem: '',
    idea: '',
    image: '/hero-placeholder.png',
    link: '#',
  },

  {
    number: '04',
    year: '2026',
    type: 'AI × UX DESIGN',
    title: 'Curio',
    subtitle: 'AI × curiosity × agency',
    question: 'What if curiosity could be guided without being controlled?',
    problem: '',
    idea: '',
    image: '/hero-placeholder.png',
    link: '#',
  },
]

const worlds = [
  ['Illustration', 'Different worlds, same sky.'],
  ['Worldbuilding', 'Small worlds, big feelings.'],
  ['Blender', 'Turning ideas into spaces.'],
  ['Music', 'Rhythms for restless minds.'],
  ['Writing', 'Notes, stories, random thoughts.'],
  ['Experimental UI', 'Because play is research too.'],
]

// function ProjectCard({ project }) {
//   return (
//     <a className="reference-project-card" href="#case-study">
//       <div className="project-image-frame">
//         <img src={project.image} alt="" />
//         <span className="image-corner">↗</span>
//       </div>
//       <div className="project-card-copy">
//         <div className="project-card-topline">
//           <span>{project.type}</span>
//           <span>{project.year}</span>
//         </div>
//         <h3>{project.title}</h3>
//         <p>{project.subtitle}</p>
//         <em>“{project.quote}”</em>
//         <strong>→ {project.metric}</strong>
//       </div>
//     </a>
//   )
// }

function ProjectCard({ project }) {
  return (
    <Link className="reference-project-card" to={project.link}>

      <div className="project-card-top">
        <span>{project.number}</span>
        <span>{project.year}</span>
      </div>

      <div className="project-image-frame">
        <img src={project.image} alt="" />
        <span className="image-corner">↗</span>
      </div>

      <div className="project-card-copy">
        <span className="project-type">{project.type}</span>

        <h3>{project.title}</h3>

        <p className="project-subtitle">
          {project.subtitle}
        </p>

        <blockquote>
          “{project.question}”
        </blockquote>

        {project.problem && (
          <div className="project-30-second">
            <div>
              <span>THE PROBLEM</span>
              <p>{project.problem}</p>
            </div>

            <div>
              <span>THE IDEA</span>
              <p>{project.idea}</p>
            </div>
          </div>
        )}

        {project.link === '/beacon' && (
          <span className="project-link">
            View full case study <span>→</span>
          </span>
        )}
      </div>
    </Link>
  )
}

function Home() {
  return (
    <main className="site-shell">


      <nav className="reference-nav">
        <a href="#top" className="reference-logo"> SRAVANI</a>
        <div className="nav-links">
          <a className="active" href="#work">Work</a>
          <a href="#notes">Field Notes</a>
          {/* <a href="#worlds">Other Worlds</a> */}
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="top" className="reference-hero">
        <div className="hero-room-glow" />
        <div className="hero-copy-reference">
          <span className="hero-kicker">UX DESIGNER · OBSERVER · OCCASIONAL WANDERER</span>
          <h1>I like figuring out<br />why things feel<br />the way they do.</h1>
          <p className="hero-role">UX DESIGNER <span>·</span> ENGINEER <span>·</span> CURIOUS MIND</p>
          <div className="hero-actions">
            <a className="glow-button" href="#work">Scroll to See selected work <span>→</span></a>
            {/* <a className="outline-button" href="#worlds">Enter the sky</a> */}
          </div>
        </div>

        <div className="hero-art">
          <img src="/hero-placeholder.png" alt="Abstract purple night-time world made of interfaces, systems and small worlds" />
          <span className="hero-note note-one">Same sky,<br />different<br />worlds.</span>
          <span className="hero-note note-two">small things<br />matter </span>
          <span className="hero-cat">⌁</span>
        </div>
      </section>

      <section id="work" className="reference-panel work-panel">
        <div className="panel-heading">
          <h2>Featured Work</h2>
          <span className="heading-line" />
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        <span className="panel-note">different<br />problems,<br />same curiosity.</span>
        <div className="panel-spark"></div>
      </section>

      {/* <section id="case-study" className="reference-panel case-panel">
        <aside className="case-sidebar">
          <div className="case-sidebar-title">01. A Soft Space For Gradual Connection</div>
          <div className="case-steps">
            <span className="current">01 <b>Understand</b></span>
            <span>01.1 <b>The situation</b></span>
            <span>01.2 <b>Initial thoughts</b></span>
            <span>01.3 <b>Research</b></span>
            <span>02 <b>Explore</b></span>
            <span>02.1 <b>Insights</b></span>
            <span>02.2 <b>Ideation</b></span>
            <span>02.3 <b>Prototyping</b></span>
            <span>03 <b>Deliver</b></span>
          </div>
          <div className="case-progress"><span /></div>
          <small>1 / 9</small>
        </aside>
        <div className="case-content">
          <div className="case-quick">
            <div><span>30-second version</span><b>+</b></div>
            <div><small>Problem</small><p>Newcomers to big cities can easily meet people but struggle to build real connection. Groups are large, events are one-off, and nothing follows up.</p></div>
            <div><small>My role</small><p>Solo UX researcher and designer .<br />(research, IA, flows, wireframes, hi-fi prototype)</p></div>
            <div><small>Outcome</small><p>A mobile app concept that puts people into small guided groups ("crews" of 3-5) for repeated sessions, with an IA shaped by card-sort findings.</p></div>
          </div>
          <div className="case-insight">Key insight<br /><em>"People struggle not from lack of access, but from too much exposure and too little structure."</em></div>
          <h3>The situation</h3>
          <p className="case-body">I noticed many wellness apps felt heavy — too much information, too little empathy. The challenge was to make opening the app feel like a small act of care rather than another task.</p>
          <div className="case-image"><img src="/hero-placeholder.png" alt="Project exploration placeholder" /></div>
          <a href="#notes" className="case-next">Next →</a>
        </div>
      </section> */}
      {/* <Beacon /> */}

      {/* <section id="worlds" className="reference-panel worlds-panel">
        <div className="panel-heading">
          <h2>Other Worlds</h2>
          <span className="heading-line" />
        </div>
        <div className="world-grid">
          {worlds.map(([title, copy], index) => (
            <article className="world-card" key={title}>
              <div className={`world-image world-image-${index + 1}`}>
                <img src="/hero-placeholder.png" alt="" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="worlds-footer">Collecting little pieces of joy s</p>
      </section> */}

      <section id="notes" className="reference-panel notes-panel">
        <div className="panel-heading">
          <h2>Field Notes</h2>
          <span className="heading-line" />
        </div>
        <div className="notes-grid">
          <article><span>09.28.26</span><h3>Why do interfaces feel different when we're tired?</h3><p>A small observation about attention, friction and the invisible parts of an experience.</p></article>
          <article><span>08.17.26</span><h3>Things I noticed while walking through Bangalore</h3><p>People, signs, shortcuts, rituals and tiny behaviours worth designing around.</p></article>
          <article><span>07.02.26</span><h3>What makes an interaction feel trustworthy?</h3><p>A running collection of patterns, questions and things I keep returning to.</p></article>
        </div>
      </section>

      <section id="about" className="reference-panel about-panel">
        <div className="about-image">
          <img src="/hero-placeholder.png" alt="Abstract portrait placeholder" />
        </div>
        <div className="about-copy">
          <h2>Hi, I'm Sravani.</h2>
          <p>I'm a designer, a curious mind, and a little bit of chaos enjoyer. I find beauty in small moments, odd ideas and people who feel deeply.</p>
          <p>I make things that help people understand, explore, connect or simply feel a little more human.</p>
          <div className="about-values">
            <span>Curiosity<small>people, stories, possibilities</small></span>
            <span>Authenticity<small>real over perfect</small></span>
            <span>Independence<small>my own path</small></span>
            <span>Kindness<small>to others & to self</small></span>
          </div>
          <div className="about-meta">Bangalore <span>·</span> MDes 2nd year <span>·</span> Open to internships</div>
          <div className="about-actions">
            <a className="glow-button" href="mailto:hello@example.com">Let's connect <span>→</span></a>
            <a href="mailto:hello@example.com">✉ Email</a>
            <a href="#about">in LinkedIn</a>
            <a href="#about">◎ Instagram</a>
          </div>
        </div>
      </section>

      <footer className="reference-footer">
        <span>© 2026 Sravani</span>
      </footer>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beacon" element={<Beacon />} />
    </Routes>
  )
}

export default App
