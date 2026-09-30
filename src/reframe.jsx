import './reframe.css'
import { Link } from 'react-router-dom'

function Reframe() {
  return (
    <main className="reframe-case">

      {/* NAV */}
      <nav className="reframe-nav">
        <Link to="/">← Back to work</Link>
        <span>REFRAME · 2026</span>
      </nav>


      {/* HERO */}
      <section className="reframe-hero">

        <div className="reframe-hero-meta">
          <span>UX DESIGN</span>
          <span>PRODUCT DESIGN</span>
          <span>LEARNING EXPERIENCE</span>
        </div>

        <h1>Reframe</h1>

        <p className="reframe-hero-question">
          What if career change didn't mean starting over?
        </p>

        <div className="reframe-hero-summary">

          <div>
            <span>THE CONTEXT</span>
            <p>
              Reframe is a career reskilling platform designed for
              mid-career employees navigating new skills and
              professional possibilities.
            </p>
          </div>

          <div>
            <span>THE IDEA</span>
            <p>
              Bring skill exploration, personalised learning paths,
              progress and career-oriented learning into one
              connected experience.
            </p>
          </div>

        </div>

      </section>


      {/* PRODUCT IDEA */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>01</span>
          <span>THE PRODUCT</span>
        </div>

        <div className="reframe-section-heading">
          <p>Reframing reskilling</p>

          <h2>
            Learning is more useful when people can see where it
            might take them.
          </h2>
        </div>

        <p className="reframe-body-copy">
          Reframe connects learning with career exploration. Rather
          than presenting courses as isolated content, the experience
          helps users explore skills, learning paths and professional
          directions while keeping their progress visible.
        </p>

      </section>


      {/* EXPERIENCE MODEL */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>02</span>
          <span>EXPERIENCE MODEL</span>
        </div>

        <div className="reframe-section-heading">
          <p>Three jobs</p>

          <h2>
            Orient me. Help me explore. Give me somewhere to go.
          </h2>
        </div>

        <div className="reframe-model">

          <article>
            <span>01</span>
            <h3>Understand me</h3>
            <p>
              Onboarding gathers professional context, interests
              and goals to begin shaping the experience.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Help me explore</h3>
            <p>
              Search and discovery connect topics with skills,
              insights, courses and possible directions.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Help me progress</h3>
            <p>
              Learning paths, modules, milestones and progress
              tracking turn exploration into continued learning.
            </p>
          </article>

        </div>

      </section>


      {/* ONBOARDING */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>03</span>
          <span>ONBOARDING</span>
        </div>

        <div className="reframe-section-heading">
          <p>Start with context</p>

          <h2>
            Before recommending where to go, understand where
            the learner is coming from.
          </h2>
        </div>

        <p className="reframe-body-copy">
          The onboarding flow moves from account creation into
          questions that begin shaping a more relevant learning
          experience.
        </p>

        <div className="reframe-artifact-placeholder">
          ONBOARDING FLOW
        </div>

      </section>


      {/* HOME */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>04</span>
          <span>HOME</span>
        </div>

        <div className="reframe-section-heading">
          <p>Make progress visible</p>

          <h2>
            A dashboard that answers:
            what am I learning, and how am I doing?
          </h2>
        </div>

        <div className="reframe-dashboard-points">

          <div>
            <span>ACTIVE LEARNING</span>
            <p>Continue ongoing courses without searching for them again.</p>
          </div>

          <div>
            <span>PROGRESS</span>
            <p>Surface course completion, milestones, streaks and time spent learning.</p>
          </div>

          <div>
            <span>DISCOVERY</span>
            <p>Introduce new skills and topics alongside existing learning.</p>
          </div>

        </div>

        <div className="reframe-artifact-placeholder reframe-artifact-large">
          HOME · EXPLORE · LEARNING
        </div>

      </section>


      {/* SEARCH */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>05</span>
          <span>SEARCH & EXPLORATION</span>
        </div>

        <div className="reframe-section-heading">
          <p>Search as orientation</p>

          <h2>
            Don't just return a result.
            Help the learner understand what the result means.
          </h2>
        </div>

        <p className="reframe-body-copy">
          Search expands into an insight experience: related skills,
          learning content and contextual information help users
          understand a topic before deciding whether to pursue it.
        </p>

        <div className="reframe-artifact-placeholder reframe-artifact-large">
          SEARCH → RESULTS → INSIGHT
        </div>

      </section>


      {/* LEARNING PATH */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>06</span>
          <span>LEARNING PATH</span>
        </div>

        <div className="reframe-section-heading">
          <p>From interest to direction</p>

          <h2>
            Turn curiosity about a skill into a path that feels
            concrete and navigable.
          </h2>
        </div>

        <div className="reframe-path">
          <span>Discover</span>
          <i>→</i>
          <span>Understand</span>
          <i>→</i>
          <span>Choose a path</span>
          <i>→</i>
          <span>Learn</span>
          <i>→</i>
          <span>Track progress</span>
        </div>

        <div className="reframe-artifact-placeholder reframe-artifact-large">
          LEARNING PATH + MODULE
        </div>

      </section>


      {/* DESIGN SYSTEM */}
      <section className="reframe-section">

        <div className="reframe-section-label">
          <span>07</span>
          <span>DESIGN SYSTEM</span>
        </div>

        <div className="reframe-section-heading">
          <p>Structure underneath</p>

          <h2>
            A reusable system keeps a content-heavy product
            understandable.
          </h2>
        </div>

        <div className="reframe-system-grid">

          <div>
            <span>GRID</span>
            <strong>12 columns</strong>
            <p>A consistent desktop structure for dense learning content.</p>
          </div>

          <div>
            <span>COMPONENTS</span>
            <strong>Reusable patterns</strong>
            <p>Buttons, tags, progress trackers, cards and navigation states.</p>
          </div>

          <div>
            <span>CONTENT</span>
            <strong>Cards as units</strong>
            <p>Courses, insights, progress and pathways use a shared visual grammar.</p>
          </div>

        </div>

        <div className="reframe-artifact-placeholder">
          DESIGN SYSTEM
        </div>

      </section>


      {/* REFLECTION */}
      <section className="reframe-reflection">

        <span>REFLECTION</span>

        <h2>
          Reframe made me think about learning as navigation,
          not just content delivery.
        </h2>

        <p>
          The project became an exercise in organising a large
          learning ecosystem so that exploration, direction and
          progress could exist within the same product.
        </p>

        <Link to="/" className="reframe-back">
          ← Back to selected work
        </Link>

      </section>

    </main>
  )
}

export default Reframe