

import { Link } from "react-router-dom";
import "./wibi_v2.css";

export default function WibiV2() {
  return (
    <main className="wibi-v2">

      <Link to="/" className="wibi-v2-back">
        <span>←</span>
        Back to portfolio
      </Link>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="wibi-v2-hero">

        <header className="wibi-v2-identity">
          <span className="wibi-v2-project">WIBI</span>
          <i></i>
          <span>ACTIVITY-FIRST DATING · MOBILE</span>
        </header>


        <div className="wibi-v2-hero-copy">

          <p className="wibi-v2-name">
            Where Will You Be?
          </p>

          <h1>
            Start with
            <br />
            somewhere to be.
          </h1>

          <p className="wibi-v2-question">
            What if dating started with something you wanted to do,
            rather than someone you wanted to swipe on?
          </p>

        </div>


        <div className="wibi-v2-world" aria-hidden="true">

          <span className="wibi-v2-tag tag-pottery">
            POTTERY
          </span>

          <span className="wibi-v2-tag tag-coffee">
            COFFEE
          </span>

          <span className="wibi-v2-tag tag-music">
            LIVE MUSIC
          </span>

          <span className="wibi-v2-tag tag-books">
            BOOKSTORE
          </span>

          <div className="wibi-v2-orbit orbit-one"></div>
          <div className="wibi-v2-orbit orbit-two"></div>

          <div className="wibi-v2-collage">
            <img
              src="/wibi/hero-img.png"
              alt=""
            />
          </div>

          <p className="wibi-v2-handnote">
            something to do
            <span>→</span>
            someone to meet
          </p>

        </div>


        <aside className="wibi-v2-summary">

  <div className="wibi-v2-summary-top">
    <span>WIBI / PROJECT NOTE</span>
    <i>✦</i>
  </div>

  <div className="wibi-v2-summary-idea">
    <span>THE IDEA</span>

    <p>
      Activity before profiles.
      <br />
      Context before evaluation.
    </p>
  </div>

  <div className="wibi-v2-summary-meta">

    <div>
      <span>CONTEXT</span>
      <p>
        UX Studio 2
        <br />
        Team of three
      </p>
    </div>

    <div>
      <span>MY ROLE</span>
      <p>
        Research lead
        <br />
        Experience strategy
      </p>
    </div>

  </div>

  <div className="wibi-v2-summary-contribution">
    <span>CONTRIBUTION</span>

    <p>
      Led research and research documentation. Problem framing,
      synthesis, ideation and service design were developed
      collaboratively with the team.
    </p>
  </div>

  <div className="wibi-v2-summary-foot">
    <span>WHERE WILL YOU BE?</span>
    <i>↗</i>
  </div>

</aside>


        {/* <div className="wibi-v2-scroll">
          <span>01</span>
          THE PROBLEM
          <i>↓</i>
        </div> */}

      </section>




      {/* 01 — PROBLEM */}

      <section className="wibi-v2-problem" id="wibi-problem">

  <div className="wibi-v2-section-label">
    <span>01</span>
    <span>THE PROBLEM</span>
  </div>


  <div className="wibi-v2-problem-opening">

    <p className="wibi-v2-problem-intro">
      Dating apps made
      <br />
      meeting people easier.
    </p>

    <div className="wibi-v2-problem-tension">

      <span className="wibi-v2-tension-word">
        MATCH
      </span>

      <span className="wibi-v2-tension-symbol">
        ≠
      </span>

      <span className="wibi-v2-tension-word">
        CONNECTION
      </span>

    </div>

  </div>


  <div className="wibi-v2-problem-story">

    <div className="wibi-v2-frictions">

      <article>
        <span>01</span>
        <h3>Swipe fatigue</h3>
        <p>
          Repeated evaluation, rejection and stalled conversations
          made the experience emotionally exhausting.
        </p>
      </article>

      <article>
        <span>02</span>
        <h3>Low trust</h3>
        <p>
          Questions around authenticity and intentions made trust
          difficult before interaction had even begun.
        </p>
      </article>

      <article>
        <span>03</span>
        <h3>The meeting gap</h3>
        <p>
          Matching was easy to support. Moving comfortably from
          a match to a real-world meeting was not.
        </p>
      </article>

    </div>


    <aside className="wibi-v2-problem-evidence">

      <div className="wibi-v2-evidence-top">
        <span>SURVEY SIGNAL</span>
        <i>↘</i>
      </div>

      <strong>56%</strong>

      <p>
        said their matches never led
        to a real-world meeting.
      </p>

      <div className="wibi-v2-gap-line" aria-hidden="true">
        <span>MATCH</span>
        <i></i>
        <b>×</b>
        <i></i>
        <span>MEET</span>
      </div>

      <small>
        25 survey responses
      </small>

    </aside>

  </div>


  <div className="wibi-v2-problem-close">

    <span>THE OPPORTUNITY</span>

    <p>
      What if connection started with
      <em>something people genuinely wanted to do?</em>
    </p>

    <i>↓</i>

  </div>

</section>


      {/* 02 — RESEARCH */}
      <section className="wibi-v2-research" id="wibi-research">

  <div className="wibi-v2-section-label">
    <span>02</span>
    <span>RESEARCH</span>
  </div>


  <div className="wibi-v2-research-head">

    <h2>
      We looked beyond
      <br />
      <em>the swipe.</em>
    </h2>

    <p>
      The research explored what people experienced before,
      during and after matching — and where digital interaction
      struggled to become meaningful connection.
    </p>

  </div>


  <div className="wibi-v2-research-scale">

    <div>
      <strong>15</strong>
      <span>research papers</span>
    </div>

    <div>
      <strong>25</strong>
      <span>survey responses</span>
    </div>

    <div>
      <strong>09</strong>
      <span>in-depth interviews</span>
    </div>

  </div>


  <div className="wibi-v2-research-evidence">

    <article className="wibi-v2-stat stat-meeting">
      <span>SURVEY / 01</span>
      <strong>56%</strong>
      <p>
        said matches never led
        to a real-world meeting.
      </p>
    </article>

    <article className="wibi-v2-stat stat-authenticity">
      <span>SURVEY / 02</span>
      <strong>75%</strong>
      <p>
        felt profiles were only
        sometimes authentic.
      </p>
    </article>

    <article className="wibi-v2-stat stat-conversation">
      <span>SURVEY / 03</span>
      <strong>44%</strong>
      <p>
        identified the lack of meaningful
        conversation as the #1 issue.
      </p>
    </article>

  </div>


  <div className="wibi-v2-research-convergence">

    <span className="wibi-v2-convergence-label">
      ACROSS METHODS
    </span>

    <div className="wibi-v2-convergence-lines" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
    </div>

    <div className="wibi-v2-convergence-copy">

      <p>
        Emotional
        <strong>fatigue</strong>
      </p>

      <p>
        Uncertainty around
        <strong>trust</strong>
      </p>

      <p>
        Weak movement toward
        <strong>real-world interaction</strong>
      </p>

      <p>
        A desire for
        <strong>shared context</strong>
      </p>

    </div>

  </div>


  <details className="wibi-v2-research-depth">

    <summary>
      <span>OPEN THE RESEARCH PROCESS</span>
      <i>+</i>
    </summary>

    <div className="wibi-v2-research-depth-body">

      <div>
        <span>LITERATURE</span>
        <p>
          Research across dating platforms surfaced recurring
          questions around gamification, trust, emotional wellbeing,
          commercialisation and the quality of digital connection.
        </p>
      </div>

      <div>
        <span>SURVEY</span>
        <p>
          25 responses helped examine authenticity, conversation,
          activity preferences and whether matches were translating
          into offline meetings.
        </p>
      </div>

      <div>
        <span>INTERVIEWS</span>
        <p>
          Nine in-depth interviews with active and former dating-app
          users explored emotional toll, performance anxiety, safety
          and the gap between matching and meeting.
        </p>
      </div>

    </div>

  </details>


  <div className="wibi-v2-research-close">

    <span>THE PATTERN</span>

    <p>
      People weren't only looking for
      <em>more people to match with.</em>
      <br />
      They needed better conditions
      <em>to connect.</em>
    </p>

  </div>

</section>


      {/* 03 — DESIGN SHIFT */}

      <section className="wibi-v2-shift" id="wibi-shift">

  <div className="wibi-v2-section-label">
    <span>03</span>
    <span>THE DESIGN SHIFT</span>
  </div>


  <div className="wibi-v2-shift-opening">

    <p>
      The research changed
      <br />
      the starting question.
    </p>

    <div className="wibi-v2-question-shift">

      <div className="wibi-v2-old-question">
        <span>PROFILE-FIRST</span>
        <h2>
          Who do you
          <br />
          want?
        </h2>
      </div>

      <div className="wibi-v2-shift-arrow" aria-hidden="true">
        <i></i>
        <span>→</span>
      </div>

      <div className="wibi-v2-new-question">
        <span>ACTIVITY-FIRST</span>
        <h2>
          Where do you
          <br />
          want to be?
        </h2>
      </div>

    </div>

  </div>


  <div className="wibi-v2-shift-idea">

    <span>THE IDEA</span>

    <p>
      Give people <em>something to do</em>,
      somewhere to go and something real to talk about —
      before asking them to evaluate one another.
    </p>

  </div>


  <div className="wibi-v2-translation">

    <div className="wibi-v2-translation-head">
      <span>RESEARCH</span>
      <i>→</i>
      <span>DESIGN RESPONSE</span>
    </div>


    <article>
      <div>
        <span>01</span>
        <p>Swipe fatigue</p>
      </div>

      <i></i>

      <strong>
        Event-first discovery
      </strong>
    </article>


    <article>
      <div>
        <span>02</span>
        <p>Superficial matching</p>
      </div>

      <i></i>

      <strong>
        Shared interests + activities
      </strong>
    </article>


    <article>
      <div>
        <span>03</span>
        <p>Low trust</p>
      </div>

      <i></i>

      <strong>
        Progressive verification
      </strong>
    </article>


    <article>
      <div>
        <span>04</span>
        <p>The meeting gap</p>
      </div>

      <i></i>

      <strong>
        Design toward real-world participation
      </strong>
    </article>

  </div>


  <div className="wibi-v2-activity-model">

    <span className="wibi-v2-model-label">
      THE NEW STARTING POINT
    </span>

    <div className="wibi-v2-model-flow">

      <div>
        <i>01</i>
        <strong>ACTIVITY</strong>
        <span>something I want to do</span>
      </div>

      <b>→</b>

      <div>
        <i>02</i>
        <strong>PLACE</strong>
        <span>somewhere I want to be</span>
      </div>

      <b>→</b>

      <div>
        <i>03</i>
        <strong>PEOPLE</strong>
        <span>others already sharing the context</span>
      </div>

      <b>→</b>

      <div>
        <i>04</i>
        <strong>CONNECTION</strong>
        <span>interaction has somewhere to begin</span>
      </div>

    </div>

  </div>

</section>


      {/* 04 — THE SYSTEM */}

      <section className="wibi-v2-system" id="wibi-system">

  <div className="wibi-v2-section-label">
    <span>04</span>
    <span>THE SYSTEM</span>
  </div>


  <div className="wibi-v2-system-head">

    <h2>
      Connection doesn't
      <br />
      happen on <em>one screen.</em>
    </h2>

    <p>
      WIBI had to support more than discovery. The experience needed
      to help people move from finding something interesting to
      participating, interacting and eventually meeting.
    </p>

  </div>


  <div className="wibi-v2-journey">

    <article>
      <span>01</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Set up</h3>

      <p>
        Build enough identity and preference context to begin.
      </p>
    </article>


    <article>
      <span>02</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Browse</h3>

      <p>
        Discover activities, events and places worth showing up for.
      </p>
    </article>


    <article>
      <span>03</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Connect</h3>

      <p>
        Meet people through an already shared context.
      </p>
    </article>


    <article>
      <span>04</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Plan</h3>

      <p>
        Move from interest into conversation and coordination.
      </p>
    </article>


    <article>
      <span>05</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Meet</h3>

      <p>
        Let the digital experience support real-world participation.
      </p>
    </article>


    <article>
      <span>06</span>

      <div className="wibi-v2-journey-node">
        <i></i>
      </div>

      <h3>Reflect</h3>

      <p>
        Carry the experience forward rather than ending at the match.
      </p>
    </article>

  </div>


  <div className="wibi-v2-system-principle">

    <span>THE SERVICE IDEA</span>

    <p>
      The interface gets people there.
      <br />
      <em>The system supports what happens around it.</em>
    </p>

  </div>


  <details className="wibi-v2-blueprint">

    <summary>
      <div>
        <span>SERVICE BLUEPRINT</span>
        <strong>See the system behind the experience</strong>
      </div>

      <i>+</i>
    </summary>

    <div className="wibi-v2-blueprint-body">

      <div className="wibi-v2-blueprint-intro">
        <p>
          We mapped the experience across customer actions,
          front-end interactions, back-end processes and supporting
          systems to understand what each stage would require beyond
          the visible interface.
        </p>
      </div>

      <div className="wibi-v2-artifact wibi-v2-artifact-ia">

  <div className="wibi-v2-artifact-frame">

    <div className="wibi-v2-artifact-top">
      <span>INFORMATION ARCHITECTURE</span>
      <span>STRUCTURING THE JOURNEY ↗</span>
    </div>

    <img
      src="/wibi/information-architecture.jpg"
      alt="WIBI information architecture showing the structure of the product experience"
    />

  </div>

</div>

    </div>

  </details>

</section>


      {/* 05 — DESIGN EVOLUTION */}

    <section className="wibi-v2-evolution" id="wibi-evolution">

  <div className="wibi-v2-section-label">
    <span>05</span>
    <span>DESIGN EVOLUTION</span>
  </div>


  {/* -----------------------------------------------------
      OPENING
  ------------------------------------------------------ */}

  <div className="wibi-v2-evolution-head">

    <h2>
      From a service idea
      <br />
      to an <em>interaction.</em>
    </h2>

    <p>
      The activity-first model gave us the direction.
      Information architecture and wireframing helped us work out
      how people would actually move through it.
    </p>

  </div>


  {/* =====================================================
      01 — INFORMATION ARCHITECTURE
  ====================================================== */}

  <article className="wibi-v2-evolution-block">

    <div className="wibi-v2-evolution-side">

      <span>01 / STRUCTURE</span>

      <h3>
        Organising the
        <br />
        experience.
      </h3>

      <p>
        The information architecture connected onboarding,
        event discovery, matching and conversation into one
        journey toward real-world participation.
      </p>

    </div>


    <div className="wibi-v2-evolution-artifact">

      <div className="wibi-v2-artifact-header">
        <span>INFORMATION ARCHITECTURE</span>
        <span>EARLY STRUCTURE ↗</span>
      </div>

      <img
        src="/wibi/information-architecture.jpg"
        alt="Information architecture developed for WIBI"
      />

    </div>

  </article>


  {/* =====================================================
      02 — FOUNDATION
  ====================================================== */}

  <article className="wibi-v2-wireframe-chapter">

    <div className="wibi-v2-wireframe-title">

      <div>
        <span>02 / WIREFRAMES</span>

        <h3>
          First, establish enough
          <br />
          context to connect.
        </h3>
      </div>

      <p>
        Early flows explored how identity, intentions, interests
        and trust could be established before discovery began.
      </p>

    </div>


    <div className="wibi-v2-foundation-grid">

      <figure className="wibi-v2-board board-onboarding">

        <div className="wibi-v2-board-image">
          <img
            src="/wibi/wireframes/onboarding.jpg"
            alt="Early WIBI onboarding, login and profile wireframes"
          />
        </div>

        <figcaption>
          <span>01</span>

          <div>
            <strong>Enter the experience</strong>
            <p>Onboarding · Login · Profile</p>
          </div>
        </figcaption>

      </figure>


      <figure className="wibi-v2-board board-preferences">

        <div className="wibi-v2-board-image">
          <img
            src="/wibi/wireframes/preferences.jpg"
            alt="WIBI preference selection wireframes"
          />
        </div>

        <figcaption>
          <span>02</span>

          <div>
            <strong>Express intent</strong>
            <p>Preferences · Relationship context</p>
          </div>
        </figcaption>

      </figure>


      <figure className="wibi-v2-board board-trust">

        <div className="wibi-v2-board-image">
          <img
            src="/wibi/wireframes/profile-trust.jpg"
            alt="WIBI interests, photo upload and verification wireframes"
          />
        </div>

        <figcaption>
          <span>03</span>

          <div>
            <strong>Build context + trust</strong>
            <p>Interests · Photos · Verification</p>
          </div>
        </figcaption>

      </figure>

    </div>


    <div className="wibi-v2-foundation-flow">

      <span>IDENTITY</span>
      <i>→</i>

      <span>INTENT</span>
      <i>→</i>

      <span>INTERESTS</span>
      <i>→</i>

      <span>TRUST</span>

    </div>

  </article>


  {/* =====================================================
      03 — CORE PRODUCT JOURNEY
  ====================================================== */}

  <article className="wibi-v2-core-flow">

    <div className="wibi-v2-core-copy">

      <span>03 / CORE JOURNEY</span>

      <h3>
        Then, design for
        <br />
        <em>showing up.</em>
      </h3>

      <p>
        The core flow shifted attention from evaluating profiles
        toward discovering an activity, seeing who was participating
        and moving naturally into interaction.
      </p>


      <div className="wibi-v2-core-path">

        <div>
          <span>01</span>
          <strong>DISCOVER</strong>
          <p>Find something worth doing.</p>
        </div>

        <i>↓</i>

        <div>
          <span>02</span>
          <strong>SHOW UP</strong>
          <p>See the activity, place and people around it.</p>
        </div>

        <i>↓</i>

        <div>
          <span>03</span>
          <strong>CONNECT</strong>
          <p>Let shared context open the conversation.</p>
        </div>

      </div>

    </div>


    <figure className="wibi-v2-core-board">

      <div className="wibi-v2-core-board-top">
        <span>HOME → EVENT → MAP → EXPLORE → CHAT</span>
        <span>CORE PRODUCT FLOW</span>
      </div>

      <img
        src="/wibi/wireframes/discovery.jpg"
        alt="WIBI home, event, map, matching and chat wireframes"
      />

      <figcaption>
        The product journey begins with a place or activity,
        then gradually introduces people and conversation.
      </figcaption>

    </figure>

  </article>


  {/* =====================================================
      04 — TRACEABILITY
  ====================================================== */}

  <article className="wibi-v2-traceability">

    <div className="wibi-v2-traceability-head">

      <span>04 / TRACEABILITY</span>

      <h3>
        The wireframes weren't
        <br />
        arbitrary screens.
      </h3>

      <p>
        Key interface decisions were tied back to problems
        surfaced during research.
      </p>

    </div>


    <div className="wibi-v2-traceability-list">

      <div>
        <span>Swipe fatigue</span>
        <i>→</i>
        <strong>Event-first interaction</strong>
      </div>

      <div>
        <span>Fake profiles</span>
        <i>→</i>
        <strong>Verification system</strong>
      </div>

      <div>
        <span>Low real-world conversion</span>
        <i>→</i>
        <strong>Activity-based matching</strong>
      </div>

      <div>
        <span>Social anxiety</span>
        <i>→</i>
        <strong>Low-pressure conversation</strong>
      </div>

      <div>
        <span>Superficial matching</span>
        <i>→</i>
        <strong>Interest-based discovery</strong>
      </div>

    </div>

  </article>


  {/* -----------------------------------------------------
      CLOSE
  ------------------------------------------------------ */}

  <div className="wibi-v2-evolution-close">

    <span>STRUCTURE → INTERACTION → INTERFACE</span>

    <p>
      The wireframes gave the idea
      <br />
      <em>a path people could actually follow.</em>
    </p>

    <i>↓</i>

  </div>

</section>

{/* =========================================================
    VISUAL LANGUAGE INTERLUDE
========================================================= */}

<section className="wibi-v2-visual-language">

  <div className="wibi-v2-visual-intro">

    <span>FROM SYSTEM → IDENTITY</span>

    <h2>
      A tulip,
      <br />
      <em>as an invite.</em>
    </h2>

    <p>
      WIBI's visual identity uses the tulip as a metaphor for
      connection that grows through shared time and repeated presence.
    </p>

  </div>


  <div className="wibi-v2-tulip-stage">

    <div className="wibi-v2-invite-line">
  <span>WIBI / AN INVITATION</span>

  <p>
    “I will be there.
    <br />
    But where will you be?”
  </p>

  <i>↗</i>
</div>

   
  </div>


  <div className="wibi-v2-brand-system">

    <div className="wibi-v2-brand-colour">

      <span>PRIMARY COLOUR</span>

      <div className="wibi-v2-colour-swatch">
        <strong>#9C77AF</strong>
      </div>

    </div>


    <div className="wibi-v2-brand-type">

      <span>TYPOGRAPHY</span>

      <div>
        <p>Heading</p>
        <strong className="wibi-v2-brand-serif">
          Cormorant Garamond
        </strong>
      </div>

      <div>
        <p>Body</p>
        <strong className="wibi-v2-brand-sans">
          Poppins
        </strong>
      </div>

    </div>


    <div className="wibi-v2-brand-spectrum">

      <span>VISUAL PALETTE</span>

      <div className="wibi-v2-spectrum">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <p>
        Soft lavender tones support a calm,
        approachable visual language.
      </p>

    </div>

  </div>


  <details className="wibi-v2-brand-original">

    <summary>
      <div>
        <span>ORIGINAL DESIGN DOCUMENTATION</span>
        <strong>See the brand exploration</strong>
      </div>

      <i>+</i>
    </summary>


    <div className="wibi-v2-brand-original-grid">

      <img
        src="/wibi/brand/brand-story.jpg"
        alt="Original WIBI brand identity exploration"
      />

      <img
        src="/wibi/brand/design-system.jpg"
        alt="Original WIBI design system documentation"
      />

    </div>

  </details>

</section>

      {/* 06 — TEAM SOLUTION */}

      {/* =========================================================
    06 — TEAM OUTCOME
========================================================= */}

<section className="wibi-v2-outcome" id="wibi-outcome">

  <div className="wibi-v2-section-label">
    <span>06</span>
    <span>TEAM OUTCOME</span>
  </div>


  {/* INTRO ------------------------------------------------ */}

  <div className="wibi-v2-outcome-head">

    <div>
      <span>THE FINAL EXPERIENCE</span>

      <h2>
        Where the system
        <br />
        <em>landed.</em>
      </h2>
    </div>

    <p>
      The team's final concept brought the activity-first model
      into a mobile experience centred on places, shared interests
      and real-world participation.
    </p>

  </div>


  {/* ACT 01 — DISCOVER ----------------------------------- */}

  <article className="wibi-v2-product-act outcome-discover">

    <div className="wibi-v2-product-copy">

      <span>01 / DISCOVER</span>

      <h3>
        Start with somewhere
        <br />
        you want to be.
      </h3>

      <p>
        Instead of beginning with a stack of profiles, WIBI
        foregrounds local events and activities — giving people
        a reason to show up before asking them to evaluate
        one another.
      </p>

      <div className="wibi-v2-product-path">
        <span>ACTIVITY</span>
        <i>→</i>
        <span>PLACE</span>
      </div>

    </div>


    <div className="wibi-v2-phone-stage phone-stage-home">

      <div className="wibi-v2-screen-note">
        <span>HOME / EVENT DISCOVERY</span>
        <i>01</i>
      </div>

      <img
        src="/wibi/final/home.png"
        alt="WIBI final home screen showing local events"
      />

    </div>

  </article>


  {/* ACT 02 — SHOW UP ------------------------------------ */}

  <article className="wibi-v2-product-act outcome-event">

    <div className="wibi-v2-event-stage">

      <div className="wibi-v2-screen-note">
        <span>EVENT / BEFORE + AFTER JOINING</span>
        <i>02</i>
      </div>

      <img
        src="/wibi/final/event.png"
        alt="WIBI final event detail screens before and after joining"
      />

    </div>


    <div className="wibi-v2-product-copy">

      <span>02 / SHOW UP</span>

      <h3>
        Let the activity
        create the context.
      </h3>

      <p>
        Event details, attendance and nearby participants make
        the social context visible before conversation begins.
      </p>

      <div className="wibi-v2-product-path">
        <span>PLACE</span>
        <i>→</i>
        <span>PEOPLE</span>
      </div>

    </div>

  </article>


  {/* ACT 03 — PEOPLE ------------------------------------- */}

  <article className="wibi-v2-product-act outcome-people">

    <div className="wibi-v2-product-copy">

      <span>03 / FIND PEOPLE</span>

      <h3>
        People appear
        <br />
        <em>inside a context.</em>
      </h3>

      <p>
        Maps and profile discovery connect people back to
        shared places, interests and experiences rather than
        presenting identity in isolation.
      </p>

      <div className="wibi-v2-product-path">
        <span>PLACE</span>
        <i>→</i>
        <span>PEOPLE</span>
      </div>

    </div>


    <div className="wibi-v2-dual-screens">

      <figure className="wibi-v2-map-screen">
        <span>MAP</span>

        <img
          src="/wibi/final/map.png"
          alt="WIBI map showing nearby activities and people"
        />
      </figure>


      <figure className="wibi-v2-explore-screen">
        <span>EXPLORE</span>

        <img
          src="/wibi/final/explore.png"
          alt="WIBI profile discovery experience"
        />
      </figure>

    </div>

  </article>


  {/* ACT 04 — CONNECT ------------------------------------ */}

  <article className="wibi-v2-connect">

    <div className="wibi-v2-connect-copy">

      <span>04 / CONNECT</span>

      <h3>
        And only then,
        <br />
        <em>conversation.</em>
      </h3>

      <p>
        Chat becomes a continuation of an existing shared
        context rather than the entire burden of creating one.
      </p>

    </div>


    <div className="wibi-v2-chat-stage">

      <div className="wibi-v2-chat-orbit orbit-one"></div>
      <div className="wibi-v2-chat-orbit orbit-two"></div>

      <span className="wibi-v2-chat-tag tag-activity">
        SHARED ACTIVITY
      </span>

      <span className="wibi-v2-chat-tag tag-context">
        CONTEXT
      </span>

      <span className="wibi-v2-chat-tag tag-conversation">
        CONVERSATION
      </span>

      <img
        src="/wibi/final/chat.png"
        alt="WIBI final chat screen"
      />

    </div>

  </article>


  {/* JOURNEY --------------------------------------------- */}

  <div className="wibi-v2-outcome-journey">

    <span>ACTIVITY</span>
    <i>→</i>

    <span>PLACE</span>
    <i>→</i>

    <span>PEOPLE</span>
    <i>→</i>

    <span>CONVERSATION</span>

  </div>


  {/* AUTHORSHIP ------------------------------------------ */}

  <div className="wibi-v2-authorship">

    <span>MY CONTRIBUTION</span>

    <p>
      I led the research and research documentation. Problem framing,
      synthesis, ideation and service design were developed collaboratively
      within the three-person team. The final interface was developed
      collaboratively, with my primary contribution focused on research
      and experience strategy.
    </p>

  </div>

</section>


      {/* 07 — REFLECTION */}
      {/* =========================================================
    07 — REFLECTION
========================================================= */}

<section className="wibi-v2-reflection" id="wibi-reflection">

  <div className="wibi-v2-section-label">
    <span>07</span>
    <span>REFLECTION</span>
  </div>


  {/* OPENING --------------------------------------------- */}

  <div className="wibi-v2-reflection-hero">

    <span>WHAT THE PROJECT CHANGED</span>

    <h2>
      Maybe connection
      <br />
      shouldn't begin with
      <br />
      <em>evaluation.</em>
    </h2>

  </div>


  {/* SHIFT ------------------------------------------------ */}

  <div className="wibi-v2-reflection-shift">

    <div className="reflection-old">

      <span>THE FAMILIAR MODEL</span>

      <p>
        PROFILE
        <i>→</i>
        EVALUATION
        <i>→</i>
        MATCH
      </p>

    </div>


    <div className="reflection-turn">
      <span>↓</span>
    </div>


    <div className="reflection-new">

      <span>THE WIBI QUESTION</span>

      <p>
        ACTIVITY
        <i>→</i>
        CONTEXT
        <i>→</i>
        PEOPLE
        <i>→</i>
        CONNECTION
      </p>

    </div>

  </div>


  {/* LEARNING -------------------------------------------- */}

  <div className="wibi-v2-reflection-grid">

    <article>

      <span>01 / WHAT I LEARNED</span>

      <h3>
        Research can change
        the shape of a product.
      </h3>

      <p>
        The research did more than identify pain points.
        It shifted the design conversation away from improving
        matching itself and toward reconsidering what should happen
        before a match.
      </p>

    </article>


    <article>

      <span>02 / WHAT REMAINS OPEN</span>

      <h3>
        The concept still
        needs to meet people.
      </h3>

      <p>
        The current experience has not yet been usability tested.
        The next iteration should examine whether activity-first
        discovery actually feels lower-pressure, whether the route
        from event to conversation is clear, and how trust features
        are perceived in practice.
      </p>

    </article>

  </div>


  {/* NEXT ITERATION -------------------------------------- */}

  <div className="wibi-v2-next">

    <div className="wibi-v2-next-title">

      <span>NEXT ITERATION</span>

      <h3>
        What I would test next.
      </h3>

    </div>


    <div className="wibi-v2-next-list">

      <div>
        <span>01</span>

        <p>
          Can people understand the activity-first model without
          having the concept explained to them?
        </p>
      </div>

      <div>
        <span>02</span>

        <p>
          Does moving from event discovery to people discovery
          actually feel more natural and less evaluative?
        </p>
      </div>

      <div>
        <span>03</span>

        <p>
          Do verification and attendance cues increase perceived
          trust without making the experience feel intrusive?
        </p>
      </div>

      <div>
        <span>04</span>

        <p>
          Where does the journey from discovering an activity
          to beginning a conversation still create friction?
        </p>
      </div>

    </div>

  </div>


  {/* FINAL THOUGHT --------------------------------------- */}

  <div className="wibi-v2-final-thought">

    <span>WIBI / WHERE WILL YOU BE?</span>

    <p>
      We didn't set out to build
      <br />
      another dating app.
      <br />
      <em>
        We asked what might happen
        <br />
        if people had somewhere to be.
      </em>
    </p>

    <div className="wibi-v2-final-signal">
      <span>ACTIVITY</span>
      <i>→</i>
      <span>CONNECTION</span>
    </div>

  </div>

</section>

    </main>
  );
}