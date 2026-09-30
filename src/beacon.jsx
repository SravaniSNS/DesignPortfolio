import './beacon.css'

function Beacon() {
  return (
    <section id="beacon" className="case-study beacon-case">

      {/* =========================
          CASE STUDY HERO
      ========================= */}

      <div className="case-hero">

        <span className="case-label">
          SOCIAL × URBAN CONNECTION
        </span>

        <h2>
          Find your
          <br />
          shore.
        </h2>

        <p className="case-subtitle">
          A social platform for people who've just moved to a new city,
          designed around small groups, guided sessions, and gradual
          connection that doesn't ask for too much, too soon.
        </p>

        <div className="case-meta">
          <div>
            <span>ROLE</span>
            <p>UX Researcher & Designer</p>
          </div>

          <div>
            <span>PLATFORM</span>
            <p>Mobile App</p>
          </div>

          <div>
            <span>DOMAIN</span>
            <p>Social / Urban Connection</p>
          </div>
        </div>

      </div>


      {/* =========================
          CASE STUDY NAVIGATION
      ========================= */}

      <aside className="case-navigation">

        <a href="#beacon-problem">
          <span>01</span>
          The Problem
        </a>

        <a href="#beacon-research">
          <span>02</span>
          Research
        </a>

        <a href="#beacon-ia">
          <span>03</span>
          Information Architecture
        </a>

        <a href="#beacon-flow">
          <span>04</span>
          Flow & Wireframes
        </a>

        <a href="#beacon-design">
          <span>05</span>
          Design System
        </a>

        <a href="#beacon-solution">
          <span>06</span>
          The Solution
        </a>

        <a href="#beacon-prototype">
          <span>07</span>
          Prototype
        </a>

        <a href="#beacon-reflection">
          <span>08</span>
          Reflection
        </a>

      </aside>


      {/* =========================
          01 — THE PROBLEM
      ========================= */}

      <section id="beacon-problem" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">01</span>

          <div>
            <span className="case-label">
              THE PROBLEM — THE "BEFORE"
            </span>

            <h3>
              Cities are full
              <br />
              of people.
            </h3>
          </div>

        </div>


        <div className="beacon-intro">

          <p className="beacon-large-text">
            Nobody knows each other.
          </p>

          <p>
            People who move to new cities arrive with excitement,
            but often find themselves returning to an empty apartment
            after work or studies.
          </p>

          <p>
            The infrastructure for meeting people exists.
            The infrastructure for actually connecting with them doesn't.
          </p>

        </div>


        <div className="beacon-problem-grid">

          <article>
            <span>THE CITY'S REALITY</span>

            <p>
              Urban cities are built for productivity, not belonging.
              Large populations, fast-paced lifestyles and work-driven
              schedules can create a paradox: being surrounded by people
              while feeling alone.
            </p>
          </article>


          <article>
            <span>THE NEWCOMER'S ARC</span>

            <p>
              Initial excitement and curiosity can gradually give way
              to loneliness, social exhaustion and withdrawal into work,
              routines and screens.
            </p>
          </article>

        </div>


        <div className="beacon-problem-list">

          <div>
            <span>01</span>
            <p>It's hard to know where to begin socially.</p>
          </div>

          <div>
            <span>02</span>
            <p>Large groups can feel overwhelming.</p>
          </div>

          <div>
            <span>03</span>
            <p>Approaching strangers can feel uncomfortable and draining.</p>
          </div>

          <div>
            <span>04</span>
            <p>Conversations can feel forced rather than organic.</p>
          </div>

          <div>
            <span>05</span>
            <p>There is often no continuity after meeting.</p>
          </div>

        </div>


        <div className="beacon-problem-brief">

          <span className="case-label">
            PROBLEM BRIEF
          </span>

          <p>
            Newcomers to urban cities struggle to form meaningful
            social connections due to overwhelming scale, lack of
            structure and absence of continuity in existing platforms.
          </p>

        </div>

      </section>


      {/* =========================
          02 — RESEARCH
      ========================= */}

      <section id="beacon-research" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">02</span>

          <div>
            <span className="case-label">
              THE RESEARCH
            </span>

            <h3>
              From emotional needs
              <br />
              to structured elements.
            </h3>
          </div>

        </div>


        <div className="beacon-research-intro">

          <p>
            Before designing screens, I needed to understand how users
            naturally think about the content and features of a platform
            like this.
          </p>

          <div className="beacon-research-stats">

            <div>
              <strong>40+</strong>
              <span>Content items</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Card-sort participants</span>
            </div>

            <div>
              <strong>20</strong>
              <span>Minutes per session</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Mental models found</span>
            </div>

          </div>

        </div>


        <div className="beacon-research-method">

          <span className="case-label">
            OPEN CARD SORTING
          </span>

          <h4>
            Understanding users'
            <br />
            natural mental models.
          </h4>

          <p>
            I created a complete content inventory and tested it
            through open card sorting. Participants grouped items
            in ways that made sense to them, named their groups and
            explained their reasoning.
          </p>

        </div>


        <div className="beacon-insights">

          <article>
            <span>01</span>

            <h4>Identity is the clearest section.</h4>

            <p>
              Profile-related items showed the strongest agreement
              across participants.
            </p>

          </article>


          <article>
            <span>02</span>

            <h4>Matching feels like a before-joining stage.</h4>

            <p>
              Availability, preferred meeting time and conversation
              style were consistently separated from the crew itself.
            </p>

          </article>


          <article>
            <span>03</span>

            <h4>Trust belongs inside the Crew.</h4>

            <p>
              Trust was strongly associated with members, activity
              and chat rather than a general profile setting.
            </p>

          </article>


          <article>
            <span>04</span>

            <h4>Mood Check-in created confusion.</h4>

            <p>
              Participants placed it in different contexts, so its
              purpose needed to be reframed.
            </p>

          </article>

        </div>

      </section>


      {/* =========================
          03 — INFORMATION ARCHITECTURE
      ========================= */}

      <section id="beacon-ia" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">03</span>

          <div>
            <span className="case-label">
              INFORMATION ARCHITECTURE
            </span>

            <h3>
              From chaos
              <br />
              to structure.
            </h3>
          </div>

        </div>


        <p className="beacon-section-lead">
          Every section in the sitemap exists because of the research.
        </p>


        <div className="beacon-ia-grid">

          <article>
            <span>CREWS</span>
            <p>
              The core experience: small groups of 3–5 people,
              matched and recurring.
            </p>
          </article>

          <article>
            <span>SIGNAL</span>
            <p>
              The pre-joining phase containing preferences,
              compatibility and suggested crews.
            </p>
          </article>

          <article>
            <span>MY SPACE</span>
            <p>
              Identity across public profile, private space,
              safety and trust.
            </p>
          </article>

        </div>


        <div className="beacon-before-after">

          <div>
            <span className="case-label">BEFORE</span>

            <p>Profile was one flat section.</p>
            <p>Trust lived in generic settings.</p>
            <p>Mood Check-in was top-level.</p>
            <p>Matching was buried inside Circle.</p>
          </div>


          <div>
            <span className="case-label">AFTER</span>

            <p>Profile split into distinct contexts.</p>
            <p>Trust moved into Crew Info.</p>
            <p>Mood became a post-session moment.</p>
            <p>Signal became the pre-joining space.</p>
          </div>

        </div>

      </section>


      {/* =========================
          04 — FLOW
      ========================= */}

      <section id="beacon-flow" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">04</span>

          <div>
            <span className="case-label">
              FLOW & WIREFRAMES
            </span>

            <h3>
              Reducing anxiety
              <br />
              at every step.
            </h3>
          </div>

        </div>


        <p className="beacon-section-lead">
          The user flow was designed around one principle:
          lower the emotional cost of each transition.
        </p>


        <div className="beacon-flow">

          <span>Sign Up</span>
          <span>→</span>
          <span>Set Up Profile</span>
          <span>→</span>
          <span>Set Preferences</span>
          <span>→</span>
          <span>Explore</span>
          <span>→</span>
          <span>Select a Crew</span>
          <span>→</span>
          <span>In the Water</span>
          <span>→</span>
          <span>Matched</span>
          <span>→</span>
          <span>Crew Space</span>
          <span>→</span>
          <span>Session</span>
          <span>→</span>
          <span>Anchored.</span>

        </div>


        <div className="beacon-decisions">

          <article>
            <span>PROGRESSIVE DISCLOSURE</span>
            <p>
              Only the information needed at each stage is introduced.
            </p>
          </article>

          <article>
            <span>SINGLE PRIMARY CTA</span>
            <p>
              Important moments have one obvious next action.
            </p>
          </article>

          <article>
            <span>USER CONTROL</span>
            <p>
              Users can leave queues, skip reflection and decide later.
            </p>
          </article>

        </div>

      </section>


      {/* =========================
          05 — DESIGN SYSTEM
      ========================= */}

      <section id="beacon-design" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">05</span>

          <div>
            <span className="case-label">
              DESIGN SYSTEM
            </span>

            <h3>
              A lighthouse
              <br />
              doesn't exist in daylight.
            </h3>
          </div>

        </div>


        <div className="beacon-metaphor">

          <p>
            The dark, atmospheric aesthetic mirrors the emotional state
            of someone navigating an unfamiliar city.
          </p>

          <p>
            Like a beacon, the interface should quietly offer direction
            without demanding attention.
          </p>

        </div>


        <div className="beacon-colours">

          <div style={{ background: '#1C1A44' }}>
            <span>DEEP INDIGO</span>
            <small>#1C1A44</small>
          </div>

          <div style={{ background: '#338D82' }}>
            <span>DEEP TEAL</span>
            <small>#338D82</small>
          </div>

          <div style={{ background: '#5B8FB9' }}>
            <span>STEEL TEAL</span>
            <small>#5B8FB9</small>
          </div>

          <div style={{ background: '#7EC8A0' }}>
            <span>SEAFOAM</span>
            <small>#7EC8A0</small>
          </div>

          <div style={{ background: '#F0F8D0', color: '#1C1A44' }}>
            <span>MORNING</span>
            <small>#F0F8D0</small>
          </div>

        </div>

      </section>


      {/* =========================
          06 — SOLUTION
      ========================= */}

      <section id="beacon-solution" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">06</span>

          <div>
            <span className="case-label">
              THE SOLUTION — THE "AFTER"
            </span>

            <h3>
              People don't struggle
              <br />
              from lack of access.
            </h3>
          </div>

        </div>


        <p className="beacon-section-lead">
          They struggle from too much.
        </p>


        <div className="beacon-solution-grid">

          <article>
            <span>01</span>
            <h4>Small Crews</h4>
            <p>
              Groups of 3–5 keep interaction manageable and reduce
              performance pressure.
            </p>
          </article>

          <article>
            <span>02</span>
            <h4>Recurring Sessions</h4>
            <p>
              Familiarity builds through repeated exposure rather
              than forced intensity.
            </p>
          </article>

          <article>
            <span>03</span>
            <h4>Guided Interaction</h4>
            <p>
              Every session has a prompt so nobody has to figure
              out what to say first.
            </p>
          </article>

          <article>
            <span>04</span>
            <h4>Facilitated Matching</h4>
            <p>
              Beacon handles matching based on interests,
              conversation style and social energy.
            </p>
          </article>

          <article>
            <span>05</span>
            <h4>Minimal Public Metrics</h4>
            <p>
              No follower counts, public feeds or engagement numbers.
            </p>
          </article>

          <article>
            <span>06</span>
            <h4>Optional In-Person Meetups</h4>
            <p>
              Physical meetings become available only after trust
              has had time to develop.
            </p>
          </article>

        </div>

      </section>


      {/* =========================
          07 — PROTOTYPE
      ========================= */}

      <section id="beacon-prototype" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">07</span>

          <div>
            <span className="case-label">
              PROTOTYPE
            </span>

            <h3>
              From structure
              <br />
              to experience.
            </h3>
          </div>

        </div>


        <p className="beacon-section-lead">
          The prototype brings the research, information architecture
          and interaction decisions together into a single experience.
        </p>


        <div className="beacon-prototype-placeholder">
          <span>PROTOTYPE SCREENS</span>
          <p>
            Screens and interaction walkthroughs will go here.
          </p>
        </div>

      </section>


      {/* =========================
          08 — REFLECTION
      ========================= */}

      <section id="beacon-reflection" className="beacon-section">

        <div className="beacon-section-heading">

          <span className="case-number">08</span>

          <div>
            <span className="case-label">
              REFLECTION
            </span>

            <h3>
              Designing for
              <br />
              gradual connection.
            </h3>
          </div>

        </div>


        <div className="beacon-reflection">

          <p>
            Beacon started as a problem about meeting people in a new city.
            Through research, it became more specifically about reducing
            the emotional cost of connection.
          </p>

          <p>
            The final system therefore doesn't simply create more
            opportunities to meet people. It structures the journey
            so that users can move from uncertainty toward familiarity
            at their own pace.
          </p>

        </div>

      </section>

    </section>
  )
}

export default Beacon