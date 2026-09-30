import './curio.css'
import { Link } from 'react-router-dom'

function Curio() {
  return (
    <main className="curio-case">

      {/* NAV */}
      <nav className="curio-nav">
        <Link to="/">← Back to work</Link>
        <span>CURIO · 2026</span>
      </nav>


      {/* HERO */}
      <section className="curio-hero">

        <div className="curio-hero-meta">
          <span>AI × UX</span>
          <span>INTERACTION DESIGN</span>
          <span>CONTEXT-AWARE SYSTEMS</span>
        </div>

        <div className="curio-hero-title">
          <span className="curio-spark">✦</span>
          <h1>Curio</h1>
        </div>

        <p className="curio-hero-tagline">
          Your curiosity has a new companion.
        </p>

        <p className="curio-hero-question">
          What if curiosity didn't have to start with a search?
        </p>

        <div className="curio-hero-summary">
          <div>
            <span>THE OBSERVATION</span>
            <p>
              The world constantly presents things we could be curious
              about. But noticing a gap and actually exploring it are
              two different moments.
            </p>
          </div>

          <div>
            <span>THE IDEA</span>
            <p>
              Curio is a contextual curiosity layer that surfaces
              possibilities from the world around you without deciding
              what deserves your attention.
            </p>
          </div>
        </div>

      </section>


      {/* CURIOSITY */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>01</span>
          <span>THE OBSERVATION</span>
        </div>

        <div className="curio-section-heading">
          <p>Before the product</p>

          <h2>
            Curiosity begins with a gap.
          </h2>
        </div>

        <div className="curio-curiosity-loop">
          <div>
            <span>01</span>
            <p>Something catches our attention.</p>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <p>We notice what we don't know.</p>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <p>A question forms.</p>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <p>We explore — or the moment passes.</p>
          </div>
        </div>

        <p className="curio-note">
          Same world. More to see.
        </p>

      </section>


      {/* CONTEXT */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>02</span>
          <span>CONTEXT</span>
        </div>

        <div className="curio-section-heading">
          <p>Where curiosity lives</p>

          <h2>
            Curiosity doesn't happen in a search box.
            It happens in context.
          </h2>
        </div>

        <div className="curio-context-model">

          <article>
            <span>USER</span>
            <h3>Who am I?</h3>
            <p>
              What I know<br />
              What I like<br />
              What I avoid<br />
              How I explore
            </p>
          </article>

          <span className="curio-plus">+</span>

          <article>
            <span>CONTEXT</span>
            <h3>What is happening?</h3>
            <p>
              Where I am<br />
              What I'm doing<br />
              When it is<br />
              How much attention I have
            </p>
          </article>

          <span className="curio-plus">+</span>

          <article>
            <span>WORLD</span>
            <h3>What surrounds me?</h3>
            <p>
              People · Places · Food<br />
              Events · Objects · Stories
            </p>
          </article>

        </div>

        <div className="curio-context-result">
          <span>↓</span>
          <strong>Context-aware curiosity</strong>
        </div>

      </section>


      {/* PROBLEM */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>03</span>
          <span>THE FRICTION</span>
        </div>

        <div className="curio-section-heading">
          <p>A tiny question, a long path</p>

          <h2>
            Information is available.
            Exploration still requires effort.
          </h2>
        </div>

        <p className="curio-body-copy">
          When something unfamiliar catches our attention, pursuing it
          often requires us to recognise the question, know what to
          search, formulate a query, open a tool, search, and then decide
          whether what we found is relevant.
        </p>

        <div className="curio-friction-flow">
          <span>Notice</span>
          <i>→</i>
          <span>Recognise</span>
          <i>→</i>
          <span>Formulate</span>
          <i>→</i>
          <span>Open</span>
          <i>→</i>
          <span>Search</span>
          <i>→</i>
          <span>Evaluate</span>
        </div>

        <p className="curio-note">
          Sometimes, the effort is greater than the motivation to pursue it.
        </p>

      </section>


      {/* DESIGN QUESTION */}
      <section className="curio-shift">
        <span>THE DESIGN QUESTION</span>

        <h2>
          What if curiosity
          <em> didn't have to start </em>
          with a search?
        </h2>

        <p>
          Not a replacement for search.
          Another way into discovery.
        </p>
      </section>


      {/* INTERACTION SHIFT */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>04</span>
          <span>THE INTERACTION SHIFT</span>
        </div>

        <div className="curio-section-heading">
          <p>Query → possibility</p>

          <h2>
            Move from answering known questions
            to surfacing possible ones.
          </h2>
        </div>

        <div className="curio-comparison">

          <article>
            <span>TRADITIONAL DIGITAL EXPERIENCE</span>

            <p>User knows what they want</p>
            <i>↓</i>
            <p>User initiates search</p>
            <i>↓</i>
            <p>Query → answer</p>

            <strong>Optimised for efficiency</strong>
          </article>

          <article>
            <span>EMERGING OPPORTUNITY</span>

            <p>System notices potential relevance</p>
            <i>↓</i>
            <p>System surfaces a possibility</p>
            <i>↓</i>
            <p>Context → possibility</p>

            <strong>Designed for exploration</strong>
          </article>

        </div>

      </section>


      {/* AI */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>05</span>
          <span>WHERE AI ENTERS</span>
        </div>

        <div className="curio-section-heading">
          <p>Open the machine</p>

          <h2>
            Curio needs to understand both the person
            and the moment.
          </h2>
        </div>

        <div className="curio-ai-layers">

          <div>
            <span>01</span>
            <strong>User model</strong>
            <p>Preferences, history and patterns of exploration.</p>
          </div>

          <div>
            <span>02</span>
            <strong>Situational context</strong>
            <p>Location, time, activity, mobility and available attention.</p>
          </div>

          <div>
            <span>03</span>
            <strong>World context</strong>
            <p>Places, events, objects, food, people and stories nearby.</p>
          </div>

          <div>
            <span>04</span>
            <strong>Inference</strong>
            <p>Estimate what may be relevant enough to surface.</p>
          </div>

        </div>

      </section>


      {/* ENGINE */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>06</span>
          <span>THE CURIOSITY ENGINE</span>
        </div>

        <div className="curio-section-heading">
          <p>The system underneath</p>

          <h2>
            Context enters.
            A possibility comes out.
            The human still decides.
          </h2>
        </div>

        <div className="curio-artifact-placeholder curio-artifact-large">
          CURIOSITY ENGINE DIAGRAM
        </div>

      </section>


      {/* EXPERIENCE LOOP */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>07</span>
          <span>THE EXPERIENCE</span>
        </div>

        <div className="curio-section-heading">
          <p>From world to discovery</p>

          <h2>
            A quiet loop that begins with attention,
            not a prompt.
          </h2>
        </div>

        <div className="curio-experience-loop">

          <div>
            <span>01</span>
            <strong>Explore</strong>
            <p>Open yourself intentionally to discovery.</p>
          </div>

          <i>→</i>

          <div>
            <span>02</span>
            <strong>Notice</strong>
            <p>Curio detects contextual opportunities.</p>
          </div>

          <i>→</i>

          <div>
            <span>03</span>
            <strong>Signal</strong>
            <p>A subtle cue creates an opening.</p>
          </div>

          <i>→</i>

          <div>
            <span>04</span>
            <strong>Choose</strong>
            <p>Explore it, ignore it or redirect.</p>
          </div>

          <i>→</i>

          <div>
            <span>05</span>
            <strong>Learn</strong>
            <p>Feedback helps Curio adapt.</p>
          </div>

        </div>

      </section>


      {/* REAL WORLD */}
      <section className="curio-section curio-world">

        <div className="curio-section-label">
          <span>08</span>
          <span>IN THE WORLD</span>
        </div>

        <div className="curio-section-heading">
          <p>Chinatown · Kuala Lumpur</p>

          <h2>
            A moment of curiosity becomes
            an opportunity to explore.
          </h2>
        </div>

        <p className="curio-body-copy">
          The user is walking through Chinatown with Exploration Mode
          turned on. They're interested in the place, but don't
          necessarily know what to look for. Curio helps surface what
          might otherwise go unnoticed.
        </p>

        <div className="curio-artifact-placeholder curio-artifact-large">
          CHINATOWN EXPERIENCE STORYBOARD
        </div>

      </section>


      {/* AGENCY */}
      <section className="curio-agency">

        <span>THE PRINCIPLE UNDERNEATH IT ALL</span>

        <h2>
          Curio doesn't decide
          what is worth exploring.
        </h2>

        <p>
          It helps you notice what you might otherwise miss.
        </p>

        <div className="curio-agency-loop">
          <span>AI suggests</span>
          <i>→</i>
          <strong>Human decides</strong>
          <i>→</i>
          <span>AI adapts</span>
        </div>

      </section>


      {/* INTERACTION STATES */}
      <section className="curio-section">

        <div className="curio-section-label">
          <span>09</span>
          <span>INTERACTION STATES</span>
        </div>

        <div className="curio-section-heading">
          <p>Quiet → curious</p>

          <h2>
            From a dormant widget
            to a moment of discovery.
          </h2>
        </div>

        <div className="curio-states">
          <span>Dormant</span>
          <i>→</i>
          <span>Signal</span>
          <i>→</i>
          <span>Glimpse</span>
          <i>→</i>
          <span>Explore</span>
          <i>→</i>
          <span>Learn</span>
        </div>

        <div className="curio-artifact-placeholder curio-artifact-large">
          INTERACTION STATES
        </div>

      </section>


      {/* REFLECTION */}
      <section className="curio-reflection">

        <span>THE BIGGER PICTURE</span>

        <h2>
          The world is more interesting
          than it seems.
        </h2>

        <p>
          Curio became an exploration of how AI might support curiosity
          without taking ownership of it — using context to create
          opportunities for discovery while preserving the person's
          ability to choose what deserves their attention.
        </p>

        <strong>
          Not just a notification.<br />
          A curious companion.<br />
          In your world.
        </strong>

        <Link to="/" className="curio-back">
          ← Back to selected work
        </Link>

      </section>

    </main>
  )
}

export default Curio