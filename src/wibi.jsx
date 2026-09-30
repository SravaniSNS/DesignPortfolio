import './wibi.css'
import { Link } from 'react-router-dom'

function Wibi() {
  return (
    <main className="wibi-case">

      {/* BACK TO PORTFOLIO */}
<Link to="/" className="wibi-back-link">
  <span className="wibi-back-arrow">←</span>
  <span>Back to portfolio</span>
</Link>


      {/* HERO */}
      {/* =========================================
    HERO
========================================= */}

<section className="wibi-hero">

  <div className="wibi-hero-main">

    <div className="wibi-hero-identity">
      <span className="wibi-project-name">WIBI</span>

      <span className="wibi-project-type">
        ACTIVITY-FIRST DATING · MOBILE
      </span>
    </div>


    <div className="wibi-hero-title">

      <p className="wibi-hero-name">
        Where Will You Be?
      </p>

      <h1>
        Start with
        <br />
        somewhere to be.
      </h1>

    </div>


    <p className="wibi-hero-question">
      What if dating started with something you wanted to do,
      rather than someone you wanted to swipe on?
    </p>


    {/* CONCEPT VISUAL

    <div className="wibi-orbit" aria-hidden="true">

      <div className="wibi-orbit-ring ring-one"></div>
      <div className="wibi-orbit-ring ring-two"></div>

      <span className="wibi-orbit-item item-coffee">
        COFFEE
      </span>

      <span className="wibi-orbit-item item-music">
        MUSIC
      </span>

      <span className="wibi-orbit-item item-books">
        BOOKS
      </span>

      <span className="wibi-orbit-item item-pottery">
        POTTERY
      </span>

      <span className="wibi-orbit-center">
        WIBI
      </span>

    </div> */}

  </div>


  <aside className="wibi-hero-summary">

    <div>
      <span>THE IDEA</span>

      <p>
        WIBI shifts dating from profile-first discovery to shared
        activities and events — creating context for connection
        before asking people to evaluate one another.
      </p>
    </div>


    <div>
      <span>CONTEXT</span>

      <p>
        Team project · UX Studio 2
      </p>
    </div>


    <div>
      <span>MY CONTRIBUTION</span>

      <p>
        Led research and research documentation. Problem framing,
        synthesis, ideation and service design were developed
        collaboratively by the three-person team.
      </p>
    </div>

  </aside>

</section>

{/* =========================================
    CASE STUDY NAVIGATION
========================================= */}

<aside className="wibi-case-navigation">

  <a href="#wibi-problem">
    <span>01</span>
    The Problem
  </a>

  <a href="#wibi-research">
    <span>02</span>
    Research
  </a>

  <a href="#wibi-synthesis">
    <span>03</span>
    Synthesis
  </a>

  <a href="#wibi-translation">
    <span>04</span>
    Research → Design
  </a>

  <a href="#wibi-system">
    <span>05</span>
    The System
  </a>

  <a href="#wibi-structure">
    <span>06</span>
    Structure
  </a>

  <a href="#wibi-solution">
    <span>07</span>
    The Solution
  </a>

  <a href="#wibi-reflection">
    <span>08</span>
    Reflection
  </a>

</aside>


      {/* RESEARCH */}
<section className="wibi-section wibi-research" id="wibi-research">

  <div className="wibi-section-label">
    <span>02</span>
    <span>RESEARCH</span>
  </div>

  <div className="wibi-section-heading">
    <p>Understanding the experience</p>

    <h2>
      We looked beyond the match to understand what was
      getting in the way of connection.
    </h2>
  </div>


  {/* METHODS */}
  <div className="wibi-research-stats">

    <div>
      <strong>15</strong>
      <span>Peer-reviewed papers</span>
      <p>Secondary research</p>
    </div>

    <div>
      <strong>25</strong>
      <span>Survey responses</span>
      <p>Quantitative research</p>
    </div>

    <div>
      <strong>9</strong>
      <span>In-depth interviews</span>
      <p>Qualitative research</p>
    </div>

  </div>


  {/* RESEARCH STORY */}
  <div className="wibi-research-story">

    <div className="wibi-research-story-label">
      <span>WHAT WE INVESTIGATED</span>
    </div>

    <div className="wibi-research-story-copy">
      <p>
        The research moved across three levels: what existing
        literature says about digital dating, what broader patterns
        appeared across users, and how those experiences felt in
        individual stories.
      </p>

      <p>
        Together, the methods helped us look beyond matching metrics
        and examine trust, authenticity, emotional fatigue, shared
        interests and the transition from online interaction to
        meeting in person.
      </p>
    </div>

  </div>


  {/* SURVEY SNAPSHOT */}
  <div className="wibi-survey-snapshot">

    <div className="wibi-survey-intro">
      <span>SURVEY SNAPSHOT</span>

      <h3>
        Matching was happening.
        <br />
        Connection often wasn't.
      </h3>
    </div>

    <div className="wibi-survey-findings">

      <div>
        <strong>56%</strong>
        <p>
          said matches never led to
          a real-world meeting.
        </p>
      </div>

      <div>
        <strong>75%</strong>
        <p>
          said profiles only sometimes
          felt authentic.
        </p>
      </div>

      <div>
        <strong>44%</strong>
        <p>
          cited a lack of meaningful
          conversation as the #1 issue.
        </p>
      </div>

    </div>

  </div>


  {/* INTERVIEW THEMES */}
  <div className="wibi-interview-themes">

    <div className="wibi-interview-heading">
      <span>INTERVIEW THEMES</span>

      <p>
        Nine in-depth conversations helped us understand
        the experiences underneath the numbers.
      </p>
    </div>

    <div className="wibi-theme-list">
      <span>Trust & authenticity</span>
      <span>Clear intentions</span>
      <span>Meaningful connection</span>
      <span>Shared interests</span>
      <span>Dating fatigue</span>
      <span>Safety</span>
      <span>Real experiences</span>
      <span>Fair opportunities</span>
    </div>

  </div>

</section>


      {/* INSIGHTS */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>02</span>
          <span>WHAT WE FOUND</span>
        </div>

        <div className="wibi-section-heading">
          <p>Synthesis</p>
          <h2>
            The problem wasn't simply dating fatigue.
            It was the structure surrounding connection.
          </h2>
        </div>

        <div className="wibi-insights">

          <article>
            <span>01</span>
            <h3>Trust is broken early.</h3>
            <p>
              Concerns around profile authenticity made trust difficult
              before interaction had even begun.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Swiping creates fatigue.</h3>
            <p>
              Repetitive evaluation, rejection and ghosting contributed
              to emotional exhaustion and disengagement.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Context matters.</h3>
            <p>
              Shared interests and activities gave people something
              meaningful to connect through.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>The meeting gap is real.</h3>
            <p>
              Matching is supported extensively. Moving from a match
              to a comfortable real-world meeting is not.
            </p>
          </article>

        </div>

      </section>


      {/* SHIFT */}
      <section className="wibi-shift">

        <span>THE DESIGN SHIFT</span>

        <p>
          Instead of asking
        </p>

        <h2>“Who do you want?”</h2>

        <p>
          WIBI begins with
        </p>

        <h2>“Where do you want to be?”</h2>

      </section>


      {/* TRANSLATION */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>03</span>
          <span>FROM RESEARCH TO DESIGN</span>
        </div>

        <div className="wibi-section-heading">
          <p>Translation</p>
          <h2>
            Each recurring research pattern became a constraint
            for the service.
          </h2>
        </div>

        <div className="wibi-translation">

          <div>
            <span>Swipe fatigue</span>
            <span>→</span>
            <strong>Remove infinite swiping</strong>
          </div>

          <div>
            <span>Authenticity concerns</span>
            <span>→</span>
            <strong>Verification systems</strong>
          </div>

          <div>
            <span>Preference for activities</span>
            <span>→</span>
            <strong>Activity-first interaction</strong>
          </div>

          <div>
            <span>Fear of rejection</span>
            <span>→</span>
            <strong>Low-pressure engagement</strong>
          </div>

          <div>
            <span>Safety concerns</span>
            <span>→</span>
            <strong>Embedded trust mechanisms</strong>
          </div>

        </div>

      </section>


      {/* SYSTEM */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>04</span>
          <span>THE SYSTEM</span>
        </div>

        <div className="wibi-section-heading">
          <p>Service design</p>
          <h2>
            Connection doesn't happen on one screen.
            WIBI was designed around the journey surrounding it.
          </h2>
        </div>

        <div className="wibi-journey">
          <span>Profile setup</span>
          <i>→</i>
          <span>Browse & find</span>
          <i>→</i>
          <span>Match & connect</span>
          <i>→</i>
          <span>Plan & chat</span>
          <i>→</i>
          <span>Meet & enjoy</span>
          <i>→</i>
          <span>Reflect & grow</span>
        </div>

        <p className="wibi-support-copy">
          The service blueprint mapped each stage across what users see,
          what they do, the interface supporting them and the invisible
          systems operating behind the experience.
        </p>

      </section>


      {/* IA */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>05</span>
          <span>STRUCTURE BEFORE SURFACE</span>
        </div>

        <div className="wibi-section-heading">
          <p>Information architecture</p>
          <h2>
            What users want to do surfaces before who they are.
          </h2>
        </div>

        <p className="wibi-support-copy">
          The information architecture centres Events and Activities,
          with Profile, Explore and Chats supporting the experience.
          Fifteen wireframe screens were developed to explore the system
          before moving into the visual layer.
        </p>

        <div className="wibi-artifact-placeholder">
          INFORMATION ARCHITECTURE + WIREFRAMES
        </div>

      </section>


      {/* PRINCIPLES */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>06</span>
          <span>DESIGN RATIONALE</span>
        </div>

        <div className="wibi-section-heading">
          <p>Four principles</p>
          <h2>
            The interface followed the same philosophy as the service.
          </h2>
        </div>

        <div className="wibi-principles">

          <article>
            <span>01</span>
            <h3>Depth over volume</h3>
            <p>
              Quality of interaction over quantity of matches.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Context before appearance</h3>
            <p>
              Activities and shared interests before photographs.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Emotional safety by design</h3>
            <p>
              Design around anxiety, rejection and fatigue rather
              than treating them as edge cases.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Progressive trust</h3>
            <p>
              Trust is built gradually throughout interaction
              instead of demanded upfront.
            </p>
          </article>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="wibi-section">

        <div className="wibi-section-label">
          <span>07</span>
          <span>THE EXPERIENCE</span>
        </div>

        <div className="wibi-section-heading">
          <p>From browsing to belonging</p>
          <h2>
            Events become the context through which people discover,
            interact and eventually meet.
          </h2>
        </div>

        <div className="wibi-artifact-placeholder wibi-artifact-large">
          FINAL WIBI EXPERIENCE
        </div>

      </section>


      {/* LIMITATIONS */}
      <section className="wibi-section wibi-limitations">

        <div className="wibi-section-label">
          <span>08</span>
          <span>WHAT REMAINS UNSOLVED</span>
        </div>

        <div className="wibi-section-heading">
          <p>Limitations</p>
          <h2>
            Designing for trust also means recognising
            what an interface cannot solve alone.
          </h2>
        </div>

        <div className="wibi-limit-grid">

          <div>
            <span>01</span>
            <p>
              The research sample was limited to 25 survey
              participants in an urban context.
            </p>
          </div>

          <div>
            <span>02</span>
            <p>
              The prototype has not yet been validated
              through real-user usability testing.
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              Verification and moderation require operational
              infrastructure beyond interface design.
            </p>
          </div>

          <div>
            <span>04</span>
            <p>
              Real-world safety cannot be completely solved
              through a digital service.
            </p>
          </div>

        </div>

      </section>


      {/* REFLECTION */}
      <section className="wibi-reflection">

        <span>REFLECTION</span>

        <h2>
          The challenge wasn't helping people meet more people.
          It was designing better conditions for connection.
        </h2>

        <p>
          WIBI became an exploration of how digital systems can move
          away from optimising encounters and instead support context,
          trust and shared experience.
        </p>

        

      </section>

    </main>
  )
}

export default Wibi