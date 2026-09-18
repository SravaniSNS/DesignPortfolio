import './App.css'
import Curio from './curio'

function App() {
  
  return (
    <main>
      <nav className="top-nav">
        <a href="/" className="logo">SRAVANI</a>

        <a href="#resume" className="resume-link">RESUME</a>
      </nav>

      <section className="hero">

        <div className="hero-copy">
          <span className="eyebrow">
            UX DESIGNER · CSE × DATA SCIENCE
          </span>

          <h1>I'm Sravani.</h1>

          <p className="hero-thought">
            I'm curious about what exists underneath experience.
          </p>
        </div>


        <div className="explore">
          <span className="explore-label">EXPLORE</span>

          <div className="explore-line"></div>

          <a href="#mind" className="explore-item">
            <span className="node"></span>

            <div>
              <span className="item-title">MIND</span>
              <span className="item-description">
                How I think, question and see.
              </span>
            </div>
          </a>

          <a href="#work" className="explore-item">
            <span className="node"></span>

            <div>
              <span className="item-title">WORK</span>
              <span className="item-description">
                What I make while exploring.
              </span>
            </div>
          </a>

          <a href="#beyond" className="explore-item">
            <span className="node"></span>

            <div>
              <span className="item-title">BEYOND</span>
              <span className="item-description">
                Experiments, stories and rabbit holes.
              </span>
            </div>
          </a>
        </div>

      </section>
            <section id="work" className="work-section">
        <div className="section-intro">
          <span className="section-number">01</span>

          <div>
            <span className="section-label">WORK</span>

            <h2>
              Things I've made
              <br />
              while exploring.
            </h2>
          </div>
        </div>

        <div className="project-list">

          <a href="#curio" className="project">
            <div className="project-meta">
              <span>01</span>
              <span>AI × CURIOSITY × AGENCY</span>
            </div>

            <div className="project-main">
              <div className="project-title">
                <h3>Curio</h3>
                <span className="project-arrow">↗</span>
              </div>

              <p>
                What if curiosity could be guided without being controlled?
              </p>
            </div>
          </a>


          <a href="#beacon" className="project">
            <div className="project-meta">
              <span>02</span>
              <span>SOCIAL DISCOVERY × CONNECTION</span>
            </div>

            <div className="project-main">
              <div className="project-title">
                <h3>Beacon</h3>
                <span className="project-arrow">↗</span>
              </div>

              <p>
                What if meeting people started with shared context instead of profiles?
              </p>
            </div>
          </a>


          <a href="#dating" className="project">
            <div className="project-meta">
              <span>03</span>
              <span>ACTIVITIES × RELATIONSHIPS × TRUST</span>
            </div>

            <div className="project-main">
              <div className="project-title">
                <h3>Event-based dating</h3>
                <span className="project-arrow">↗</span>
              </div>

              <p>
                What if the activity came before the profile?
              </p>
            </div>
          </a>


          <a href="#learning" className="project">
            <div className="project-meta">
              <span>04</span>
              <span>LEARNING × CONFIDENCE × EXPERIENCE</span>
            </div>

            <div className="project-main">
              <div className="project-title">
                <h3>Learning platform</h3>
                <span className="project-arrow">↗</span>
              </div>

              <p>
                What if learning didn't feel like starting over?
              </p>
            </div>
          </a>

        </div>
      </section>
      <Curio />
    </main>
  )
}

export default App