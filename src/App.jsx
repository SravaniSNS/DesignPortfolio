import './App.css'
import Beacon from './beacon'
import Wibi from './wibi_v2'
import Reframe from './reframe'
import Curio from './curio'
import { Routes, Route, Link, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


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
  image: '/beaconHero.png',
  link: '/beacon',

  },

  {
  number: '02',
  year: '2026',
  type: 'UX RESEARCH · SERVICE DESIGN',
  title: 'WIBI',
  subtitle: 'Activities × relationships × trust',
  question:
    'What if dating started with something you wanted to do, rather than someone you wanted to swipe on?',
  problem:
    'Dating apps make it easy to encounter profiles, but research revealed recurring gaps around trust, emotional fatigue and turning matches into meaningful real-world interaction.',
  idea:
    'WIBI shifts discovery from profiles to shared activities and events — using context, progressive trust and lower-pressure interaction to help connection develop around experience.',
  image: '/wibiHero.png',
  link: '/wibi',
},

  {
  number: '03',
  year: '2026',
  type: 'UX DESIGN · PRODUCT DESIGN',
  title: 'Reframe',
  subtitle: 'Reskilling × experience × career transition',
  question:
    "What if career change didn't mean starting over?",
  problem:
    'Mid-career professionals may need to adapt to changing roles and skills, while already carrying years of professional experience.',
  idea:
    'Reframe supports career reskilling through personalised learning paths, skill exploration and progress that builds on the learner’s existing professional context.',
  image: '/reframeHero.png',
  link: '/reframe',
},

  {
  number: '04',
  year: '2026',
  type: 'AI × UX · INTERACTION DESIGN',
  title: 'Curio',
  subtitle: 'Context × curiosity × agency',
  question:
    "What if curiosity didn't have to start with a search?",
  problem:
    'Interesting things surround us constantly, but exploring them often requires noticing a question, knowing what to search for and deliberately pursuing it.',
  idea:
    'Curio is a contextual curiosity layer that uses signals from the user, their situation and the world around them to surface possibilities — while leaving the choice to explore with the person.',
  image: '/curioHero.png',
  link: '/curio',
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
    <Link
      className={`world-project world-project-${project.number}`}
      to={project.link}
    >
      <div className="world-project-visual">
        <img src={project.image} alt={`${project.title} project`} />

        <span className="world-project-number">
          {project.number}
        </span>

        <span className="world-project-arrow">↗</span>
      </div>

      <div className="world-project-info">
        <span className="world-project-type">
          {project.type}
        </span>

        <h3>{project.title}</h3>

        <p>{project.subtitle}</p>

        {/* <span className="world-project-explore">
          Explore project <span>↗</span>
        </span> */}
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
          <a href="#work">Work</a>
          {/* <a href="#notes">Field Notes</a> */}
          {/* <a href="#worlds">Other Worlds</a> */}
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="top" className="reference-hero">
        <div className="hero-room-glow" />
        <div className="hero-copy-reference">

  <span className="hero-kicker">
    UX / INTERACTION DESIGNER · CSE BACKGROUND
  </span>

  <h1>
    I look for the invisible
    <br />
    systems shaping experience.
  </h1>

  <p className="hero-description">
   I’m interested in the systems, behaviours and stories


    <br />
    hiding underneath everyday experiences.
  </p>

  <a className="hero-work-link" href="#work">
    See Where This Leads <span>↓</span>
  </a>

</div>

        <div className="hero-art">
          <img src="/hero-placeholder.png" alt="Abstract purple night-time world made of interfaces, systems and small worlds" />
          {/* <span className="hero-note note-one">Same sky,<br />different<br />worlds.</span>
          <span className="hero-note note-two">small things<br />matter </span> */}
          
        </div>
      </section>

      <section id="work" className="reference-panel work-panel">
        <div className="work-intro">

  <span className="work-eyebrow">
    SELECTED INVESTIGATIONS · 2026
  </span>

  <div className="work-title-row">
    <h2>Featured Work</h2>

    <p>
      Questions I followed far enough
      <br />
      to become projects.
    </p>
  </div>

  {/* <div className="work-thread">
    <span>01</span>
    <span className="work-thread-line" />
    <span>04</span>
  </div> */}

</div>
        <div className="project-world">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        {/* <span className="panel-note">different<br />problems,<br />same curiosity.</span> */}
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

      {/* <section id="notes" className="reference-panel notes-panel">
        <div className="panel-heading">
          <h2>Field Notes</h2>
          <span className="heading-line" />
        </div>
        <div className="notes-grid">
          <article><span>09.28.26</span><h3>Why do interfaces feel different when we're tired?</h3><p>A small observation about attention, friction and the invisible parts of an experience.</p></article>
          <article><span>08.17.26</span><h3>Things I noticed while walking through Bangalore</h3><p>People, signs, shortcuts, rituals and tiny behaviours worth designing around.</p></article>
          <article><span>07.02.26</span><h3>What makes an interaction feel trustworthy?</h3><p>A running collection of patterns, questions and things I keep returning to.</p></article>
        </div>
      </section> */}

      <section id="about" className="reference-panel about-panel">
  <div className="about-visual">
    <img
      src="/aboutHero.png"
      alt="A collection of sketches, observations and things that inspire my work"
    />
    <span className="about-visual-note">things I notice →</span>
  </div>

  <div className="about-copy">
    <span className="about-eyebrow">ABOUT / 05</span>

    <h2>Hi, I'm Sravani.</h2>

    <p className="about-intro">
      I'm a UX and interaction designer with a background in computer science.
      I'm curious about the systems underneath everyday experiences — how
      people behave, what shapes their choices, and how technology quietly
      changes the way we interact.
    </p>

    <p>
      I like turning those questions into products, interactions and
      experiments that help people understand, explore and connect.
    </p>

    <div className="about-values">
      <span>
        Curiosity
        <small>people, stories, possibilities</small>
      </span>

      <span>
        Authenticity
        <small>real over perfect</small>
      </span>

      <span>
        Independence
        <small>my own path</small>
      </span>

      <span>
        Kindness
        <small>to others & to self</small>
      </span>
    </div>

    <div className="about-meta">
      Bengaluru
      <span>·</span>
      M.Des, UX / Interaction Design
      <span>·</span>
      Open to UX opportunities
    </div>

    <div className="about-actions">
      <a className="about-primary-link" href="mailto:snssravani19@gmail.com">
        Let's connect <span>↗</span>
      </a>

      <a
  className="contact-email"
  href="mailto:yourname@gmail.com"
>
snssravani19@gmail.com
</a>
      <a href="#about">LinkedIn ↗</a>
      {/* <a href="#about">Instagram ↗</a> */}
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
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <div
        key={location.pathname}
        className="page-transition"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/beacon" element={<Beacon />} />
          <Route path="/wibi" element={<Wibi />} />
          <Route path="/reframe" element={<Reframe />} />
          <Route path="/curio" element={<Curio />} />
        </Routes>
      </div>
    </>
  );
}

export default App
