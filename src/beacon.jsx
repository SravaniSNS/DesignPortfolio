import './beacon.css'
import { Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import React, { useState } from "react";

function Beacon() {
   const [problemExpanded, setProblemExpanded] = useState(false);
   const [researchExpanded, setResearchExpanded] = useState(false);
  return (
   
    <section id="beacon" className="case-study beacon-case">
      <Link to="/" className="case-back-link">
  <span>←</span>
  Back to portfolio
</Link>

      {/* =========================
          CASE STUDY HERO
      ========================= */}

      {/* =========================
    CASE STUDY HERO
========================= */}

<div className="case-hero">

  <div className="case-hero-main">

  <div className="beacon-hero-lighthouse">
    <img
      src="/beacon/lighthouse-hero.png"
      alt=""
    />
  </div>
    <div className="case-hero-identity">
      <span className="case-project-name">BEACON</span>

      <span className="case-label">
        SOCIAL × URBAN CONNECTION
      </span>
    </div>


    <h2>
      Find your
      <br />
      shore.
    </h2>


    {/* ABSTRACT BEACON SIGNAL */}

    <div className="hero-signal" aria-hidden="true">

      <span className="signal-star signal-star-one">·</span>
      <span className="signal-star signal-star-two">·</span>
      <span className="signal-star signal-star-three">·</span>

      <div className="signal-path">
        <span className="signal-origin"></span>
        <span className="signal-line"></span>

        <span className="signal-beacon">
          <i></i>
        </span>
      </div>

    </div>


    <p className="case-subtitle">
      A social platform for people who've just moved to a new city,
      designed around small groups, guided sessions, and gradual
      connection that doesn't ask for too much, too soon.
    </p>

  </div>


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
    Structure
  </a>

  <a href="#beacon-flow">
    <span>04</span>
    Experience Flow
  </a>

  <a href="#beacon-design">
    <span>05</span>
    Visual System
  </a>

  <a href="#beacon-solution">
    <span>06</span>
    The Solution
  </a>

  <a href="#beacon-reflection">
    <span>07</span>
    Reflection
  </a>

</aside>

{/* =========================
    01 — THE PROBLEM
========================= */}

<section
  id="beacon-problem"
  className="beacon-section beacon-problem-section"
>
  <div className="problem-shell">

    {/* SECTION LABEL */}
    <div className="problem-kicker">
      <span>01</span>
      <span>THE PROBLEM — THE "BEFORE"</span>
    </div>


    {/* TOP STORY */}
    <div className="problem-story">

      <div className="problem-story-copy">

        <h3 className="problem-headline">
          <span>Cities are full of people.</span>
          <strong>Nobody knows each other.</strong>
        </h3>

        <p className="problem-intro">
          People who move to new cities arrive with excitement,
          but often find themselves returning to an empty apartment
          after work or studies.
        </p>

      </div>


      {/* VISUAL — ALWAYS VISIBLE */}
      <div className="problem-visual">

        <figure className="problem-city-image">
          <img
            src="/beacon/problem-city.jpg"
            alt="Crowded city street filled with people"
          />
        </figure>

        <figure className="problem-transit-image">
          <img
            src="/beacon/problem-transit.jpg"
            alt="Commuters sitting close together while remaining socially separate"
          />
        </figure>

        <p className="problem-visual-caption">
          Proximity creates opportunities to meet.
          It doesn't automatically create connection.
        </p>

      </div>

    </div>


    {/* EXPANDABLE DETAILS */}
    <div
      className={`problem-explore ${
        problemExpanded ? "is-expanded" : ""
      }`}
    >

      <button
        className="problem-explore-trigger"
        type="button"
        onClick={() => setProblemExpanded(!problemExpanded)}
        aria-expanded={problemExpanded}
        aria-controls="problem-expanded-content"
      >

        <div className="problem-explore-trigger-copy">

          <span className="problem-explore-symbol">
            {problemExpanded ? "−" : "+"}
          </span>

          <div>

            <span className="problem-explore-title">
              {problemExpanded
                ? "CLOSE DETAILS"
                : "EXPLORE THE PROBLEM"}
            </span>

            {!problemExpanded && (
              <span className="problem-explore-description">
                Context, breakdowns & design framing
              </span>
            )}

          </div>

        </div>

        <span className="problem-explore-arrow">
          {problemExpanded ? "↗" : "↘"}
        </span>

      </button>


      {/* HIDDEN UNTIL EXPANDED */}
      <div
        id="problem-expanded-content"
        className="problem-explore-content"
      >
        <div className="problem-explore-inner">


          {/* CITY REALITY */}
          <div className="problem-reality">

            <span>THE CITY'S REALITY</span>

            <p>
              Cities are built for productivity, not belonging.
              Fast-paced routines and work-driven schedules can make
              sustained social connection difficult to build.
            </p>

          </div>


          {/* KEY TAKEAWAY */}
          <div className="problem-pullquote">

            <span className="problem-pullquote-line" />

            <p>
              The infrastructure for meeting people exists.

              <strong>
                The infrastructure for actually connecting with them doesn't.
              </strong>
            </p>

          </div>


          {/* CONNECTION BREAKDOWN */}
          <div className="problem-breakdown">

            <div className="problem-breakdown-intro">

              <span>WHERE CONNECTION BREAKS DOWN</span>

              <p>
                The challenge wasn't simply finding people. It was making
                connection manageable enough to continue.
              </p>

            </div>


            <div className="problem-breakdown-grid">

              <article>
                <span>01</span>
                <p>Hard to know where to begin.</p>
              </article>

              <article>
                <span>02</span>
                <p>Large groups feel overwhelming.</p>
              </article>

              <article>
                <span>03</span>
                <p>Approaching strangers takes effort.</p>
              </article>

              <article>
                <span>04</span>
                <p>Conversation can feel forced.</p>
              </article>

              <article>
                <span>05</span>
                <p>Meetings lack continuity.</p>
              </article>

            </div>

          </div>

        </div>
      </div>

    </div>


    {/* PROBLEM BRIEF — ALWAYS VISIBLE */}
    <div className="problem-brief-final">

      <span>PROBLEM BRIEF</span>

      <p>
        Newcomers to cities struggle to form meaningful social
        connections because existing ways of meeting people provide
        access without enough structure or continuity.
      </p>

    </div>

  </div>
</section>

      {/* =========================
          02 — RESEARCH
      ========================= */}

      {/* =========================
    02 — RESEARCH
========================= */}

<section
  id="beacon-research"
  className="beacon-section beacon-research-section"
>
  <div className="research-shell">

    {/* HEADER */}
    <div className="research-kicker">
      <span>02</span>
      <span>RESEARCH</span>
    </div>

    <div className="research-header">

      <div>
        <h3>
          From emotional needs
          <br />
          to structured elements.
        </h3>

        <p className="research-intro-copy">
          Before designing screens, I needed to understand how users
          naturally thought about the content and features of a platform
          like Beacon.
        </p>
      </div>


      {/* RESEARCH SNAPSHOT */}
      <div className="research-stats">

        <div>
          <strong>40+</strong>
          <span>Content items</span>
        </div>

        <div>
          <strong>5</strong>
          <span>Participants</span>
        </div>

        <div>
          <strong>20</strong>
          <span>Min / session</span>
        </div>

        <div>
          <strong>5</strong>
          <span>Mental models</span>
        </div>

      </div>

    </div>


    {/* METHOD + PROCESS EVIDENCE */}
    <div className="research-method-layout">

      <div className="research-method-copy">

        <span className="research-eyebrow">
          OPEN CARD SORTING
        </span>

        <h4>
          Understanding users'
          <br />
          natural mental models.
        </h4>

        <p>
          I created a content inventory and tested it through open
          card sorting. Participants grouped items in ways that made
          sense to them, named their groups and explained their reasoning.
        </p>

        <div className="research-method-meta">

          <span>SETUP</span>
          <p>40+ platform content and feature cards</p>

          <span>METHOD</span>
          <p>Open card sorting</p>

          <span>OUTPUT</span>
          <p>Clusters, labels and recurring mental models</p>

        </div>

      </div>


      {/* CARD SORT EVIDENCE */}
      <div className="card-sort-collage">

        <figure className="card-sort-main">
          <img
            src="/beacon/card-sort-01.png"
            alt="Card sorting session showing grouped Beacon content"
          />
        </figure>

        <figure>
          <img
            src="/beacon/card-sort-02.png"
            alt="Participant card sorting arrangement"
          />
        </figure>

        <figure>
          <img
            src="/beacon/card-sort-03.png"
            alt="Card sorting clusters and category labels"
          />
        </figure>

        <figure>
          <img
            src="/beacon/card-sort-04.png"
            alt="Detailed view of the Beacon card sorting process"
          />
        </figure>

      </div>

    </div>


    {/* FINDINGS */}
    <div className="research-findings">

      <div className="research-findings-heading">

        <span className="research-eyebrow">
          WHAT THE STRUCTURE REVEALED
        </span>

        <h4>
          Patterns began to emerge
          <br />
          across participants.
        </h4>

        <p>
          Comparing how participants grouped the same content revealed
          where their mental models aligned and where the structure
          needed more clarity.
        </p>

      </div>


      <div className="research-findings-grid">

        <article>
          <span>F1</span>

          <h5>
            Identity was the clearest section.
          </h5>

          <p>
            Profile-related items showed the strongest agreement
            across participants.
          </p>
        </article>


        <article>
          <span>F2</span>

          <h5>
            Matching happened before joining.
          </h5>

          <p>
            Availability, meeting time and conversation style were
            consistently separated from the Crew itself.
          </p>
        </article>


        <article>
          <span>F3</span>

          <h5>
            Trust belonged inside the Crew.
          </h5>

          <p>
            Trust was associated with members, activity and chat
            rather than a general profile setting.
          </p>
        </article>


        <article>
          <span>F4</span>

          <h5>
            Mood Check-in was ambiguous.
          </h5>

          <p>
            Participants placed it in different contexts,
            suggesting its purpose needed to be reframed.
          </p>
        </article>

      </div>

    </div>


    {/* EXPLORE ANALYSIS */}
    <div
      className={`research-explore ${
        researchExpanded ? "is-expanded" : ""
      }`}
    >

      <button
        className="research-explore-trigger"
        type="button"
        onClick={() => setResearchExpanded(!researchExpanded)}
        aria-expanded={researchExpanded}
        aria-controls="research-expanded-content"
      >

        <div className="research-explore-trigger-copy">

          <span className="research-explore-symbol">
            {researchExpanded ? "−" : "+"}
          </span>

          <div>

            <span className="research-explore-title">
              {researchExpanded
                ? "CLOSE ANALYSIS"
                : "EXPLORE THE ANALYSIS"}
            </span>

            {!researchExpanded && (
              <span className="research-explore-description">
                Similarity matrix & synthesis
              </span>
            )}

          </div>

        </div>

        <span className="research-explore-arrow">
          {researchExpanded ? "↗" : "↘"}
        </span>

      </button>


      <div
        id="research-expanded-content"
        className="research-explore-content"
      >
        <div className="research-explore-inner">

          {/* SYNTHESIS */}
          <div className="research-analysis">

            <div className="research-analysis-copy">

              <span className="research-eyebrow">
                SYNTHESIS
              </span>

              <h4>
                Individual sorts became
                <br />
                patterns.
              </h4>

              <p>
                Comparing the arrangements helped reveal where participants
                agreed, where categories overlapped and where the information
                architecture needed clearer boundaries.
              </p>

            </div>


            <figure className="similarity-matrix">

              <img
                src="/beacon/similarity-matrix.jpg"
                alt="Similarity matrix showing patterns across card sorting participants"
              />

            </figure>

          </div>

        </div>
      </div>

    </div>


    {/* RESEARCH → DESIGN */}
    <div className="research-to-design">

      <div className="research-to-design-heading">

        <span className="research-eyebrow">
          RESEARCH → DESIGN
        </span>

        <h4>
          The findings changed
          <br />
          the structure.
        </h4>

      </div>


      <div className="research-decision-list">

        <div className="research-decision">

          <span className="decision-number">01</span>

          <div className="decision-finding">
            <strong>Matching happens before joining.</strong>
          </div>

          <span className="decision-arrow">→</span>

          <div className="decision-response">
            <span>DESIGN RESPONSE</span>
            <p>Created a distinct pre-joining space.</p>
          </div>

        </div>


        <div className="research-decision">

          <span className="decision-number">02</span>

          <div className="decision-finding">
            <strong>Trust belongs inside the Crew.</strong>
          </div>

          <span className="decision-arrow">→</span>

          <div className="decision-response">
            <span>DESIGN RESPONSE</span>
            <p>Moved trust into the Crew context.</p>
          </div>

        </div>


        <div className="research-decision">

          <span className="decision-number">03</span>

          <div className="decision-finding">
            <strong>Identity already had a clear mental model.</strong>
          </div>

          <span className="decision-arrow">→</span>

          <div className="decision-response">
            <span>DESIGN RESPONSE</span>
            <p>Preserved identity as its own recognisable space.</p>
          </div>

        </div>


        <div className="research-decision">

          <span className="decision-number">04</span>

          <div className="decision-finding">
            <strong>Mood Check-in lacked a clear home.</strong>
          </div>

          <span className="decision-arrow">→</span>

          <div className="decision-response">
            <span>DESIGN RESPONSE</span>
            <p>Reframed it as a post-session moment.</p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* =========================
          03 — INFORMATION ARCHITECTURE
      ========================= */}

      {/* =========================
    03 — STRUCTURE
========================= */}

<section
  id="beacon-architecture"
  className="beacon-section beacon-architecture-section"
>
  <div className="architecture-shell">

    {/* HEADER */}
    <div className="architecture-kicker">
      <span>03</span>
      <span>STRUCTURE</span>
    </div>

    <div className="architecture-header">

      <h3>
        Turning mental models
        <br />
        into product structure.
      </h3>

      <div className="architecture-intro">
        <p>
          Research revealed three distinct contexts: discovering people,
          joining a Crew, and managing personal identity. The architecture
          gave each one a clear home.
        </p>
      </div>

    </div>


    {/* THREE CORE TERRITORIES */}
    <div className="architecture-territories">

      <article>
        <div className="structure-symbol structure-signal">
  <i></i>
  <i></i>
  <i></i>
  <span></span>
</div>
        <span>01</span>

        <h4>Signal</h4>

        <p>
          Discover and find a compatible Crew.
        </p>

        <small>DISCOVERY · MATCHING</small>
      </article>


      <article>
        <div className="structure-symbol structure-crews">
  <i></i>
  <i></i>
  <i></i>
</div>
        <span>02</span>
        

        <h4>Crews</h4>

        <p>
          The shared space where connection develops.
        </p>

        <small>MEMBERS · ACTIVITY · CHAT · TRUST</small>
      </article>


      <article>
        <span>03</span>

        <h4>My Space</h4>

        <p>
          The personal layer of the Beacon experience.
        </p>

        <small>IDENTITY · PREFERENCES</small>
      </article>

    </div>


    {/* IA */}
    <div className="architecture-artifact">

      <div className="architecture-artifact-header">

        <div>
          <span className="architecture-eyebrow">
            INFORMATION ARCHITECTURE
          </span>

          <h4>
            One system.
            <br />
            Three distinct contexts.
          </h4>
        </div>

      </div>


      {/* VISIBLE PREVIEW */}
      <figure className="architecture-map architecture-map-preview">

        <img
          src="/beacon/information-architecture.png"
          alt="Beacon information architecture showing Signal, Crews and My Space"
        />

        <figcaption>
          Beacon — Information Architecture
        </figcaption>

      </figure>


      {/* FULL ARCHITECTURE */}
      <details className="architecture-explore">

        <summary className="architecture-explore-trigger">

          <div className="architecture-explore-trigger-copy">

            <span className="architecture-explore-symbol" />

            <div>
              <span className="architecture-explore-title architecture-title-closed">
  EXPLORE THE FULL ARCHITECTURE
</span>

<span className="architecture-explore-title architecture-title-open">
  CLOSE FULL ARCHITECTURE
</span>

              <span className="architecture-explore-description">
                Complete information architecture
              </span>
            </div>

          </div>

          <span className="architecture-explore-arrow">
            ↘
          </span>

        </summary>


        <div className="architecture-full">

          <figure className="architecture-map architecture-map-full">

            <img
              src="/beacon/information-architecture.png"
              alt="Complete Beacon information architecture"
            />

            <figcaption>
              Full Beacon information architecture
            </figcaption>

          </figure>
          <button
  className="architecture-close-bottom"
  type="button"
  onClick={(e) => {
    e.currentTarget.closest("details").removeAttribute("open");
  }}
>
  <span>−</span>

  <span>
    <strong>CLOSE FULL ARCHITECTURE</strong>
    <small>Return to case study</small>
  </span>

  <span>↗</span>
</button>

        </div>

      </details>

    </div>


    {/* TRANSITION */}
    <div className="architecture-transition">

      <span>STRUCTURE → EXPERIENCE</span>

      <p>
        With the system organised, the next question became:
        <strong>
          {" "}how does someone actually move through it?
        </strong>
      </p>

      <span className="architecture-transition-arrow">
        ↓
      </span>

    </div>

  </div>
</section>
      {/* =========================
          04 — FLOW
      ========================= */}

     {/* =========================
    04 — EXPERIENCE FLOW
========================= */}

<section
  id="beacon-flow"
  className="beacon-section beacon-flow-section"
>
  <div className="flow-shell">

    {/* HEADER */}
    <div className="flow-kicker">
      <span>04</span>
      <span>EXPERIENCE FLOW</span>
    </div>

    <div className="flow-header">

      <h3>
        From arriving alone
        <br />
        to finding a Crew.
      </h3>

      <p>
        With the structure in place, I mapped the core journey through
        Beacon — from setting up a profile and expressing preferences
        to being matched, joining a Crew and returning after a session.
      </p>

    </div>


    {/* JOURNEY OVERVIEW */}
    <div className="flow-journey">

      <article>
        <span>01</span>
        <h4>Set up</h4>
        <p>Profile + preferences</p>
      </article>

      <span className="flow-journey-arrow"></span>

      <article>
        <span>02</span>
        <h4>Explore</h4>
        <p>Discover possibilities</p>
      </article>

      <span className="flow-journey-arrow"></span>

      <article>
        <span>03</span>
        <h4>Match</h4>
        <p>Enter the waiting pool</p>
      </article>

      <span className="flow-journey-arrow"></span>

      <article>
        <span>04</span>
        <h4>Join</h4>
        <p>Enter a recurring Crew</p>
      </article>

      <span className="flow-journey-arrow"></span>

      <article>
        <span>05</span>
        <h4>Participate</h4>
        <p>Guided session</p>
      </article>

      <span className="flow-journey-arrow"></span>

      <article>
        <span>06</span>
        <h4>Reflect</h4>
        <p>Feedback + continue</p>
      </article>

    </div>


    {/* EXPANDABLE USER FLOW */}
    <details className="flow-explore">

      <summary className="flow-explore-trigger">

        <div className="flow-explore-trigger-copy">

          <span className="flow-explore-symbol" />

          <div>
            <span className="flow-explore-title">
              EXPLORE THE USER FLOW
            </span>

            <span className="flow-explore-description">
              Complete happy-path experience
            </span>
          </div>

        </div>

        <span className="flow-explore-arrow">
          ↘
        </span>

      </summary>


      <div className="flow-explore-content">

        <div className="flow-artifact-heading">

          <div>
            <span className="flow-eyebrow">
              HAPPY-PATH USER FLOW
            </span>

            <h4>
              Designing for continuity,
              <br />
              not a single interaction.
            </h4>
          </div>

          <p>
            The flow treats matching as the beginning rather than the
            outcome. After joining, the experience continues through
            sessions, reflection and the choice to continue or rematch.
          </p>

        </div>


        <figure className="flow-map">

          <img
            src="/beacon/user-flow.jpg"
            alt="Beacon happy-path user flow from onboarding through matching, Crew sessions and post-session reflection"
          />

          <figcaption>
            Core Beacon experience flow
          </figcaption>

        </figure>


        <button
          className="flow-close-bottom"
          type="button"
          onClick={(e) => {
            e.currentTarget.closest("details").removeAttribute("open");
          }}
        >
          <span>−</span>

          <span>
            <strong>CLOSE USER FLOW</strong>
            <small>Return to case study</small>
          </span>

          <span>↗</span>
        </button>

      </div>

    </details>


    {/* FLOW PRINCIPLES */}
    <div className="flow-decisions">

      <div className="flow-decisions-heading">

        <span className="flow-eyebrow">
          FLOW PRINCIPLES
        </span>

        <h4>
          Three decisions
          <br />
          shaped the journey.
        </h4>

      </div>


      <div className="flow-decision-grid">

        <article>
          <span>01</span>

          <h5>
            Progressive disclosure
          </h5>

          <p>
            Ask for information when it becomes relevant instead of
            front-loading the experience.
          </p>
        </article>


        <article>
          <span>02</span>

          <h5>
            One clear next step
          </h5>

          <p>
            Keep the primary action obvious as users move through
            discovery, matching and participation.
          </p>
        </article>


        <article>
          <span>03</span>

          <h5>
            User control
          </h5>

          <p>
            Give people clear opportunities to continue, leave,
            reflect or try again.
          </p>
        </article>

      </div>

    </div>

  </div>
</section>

      {/* =========================
          05 — DESIGN SYSTEM
      ========================= */}

      <section
  id="beacon-design-system"
  className="beacon-section beacon-visual-system"
>
  <div className="visual-system-shell">

    <div className="visual-system-kicker">
      <span>05</span>
      <span>VISUAL SYSTEM</span>
    </div>


    {/* INTRO */}

    <div className="visual-system-header">

      <h3>
        A lighthouse for
        <br />
        quieter social connection.
      </h3>

      <p>
        Beacon needed a visual language that felt calm and directional
        rather than loud or socially demanding. The system grew around
        the metaphor of a lighthouse — something that guides without
        demanding attention.
      </p>

    </div>


    {/* METAPHOR */}

    <div className="visual-metaphor">

  <div className="visual-metaphor-copy">

    <span className="visual-eyebrow">
      THE METAPHOR
    </span>

    <h4>
      Like a lighthouse guiding
      lost ships to shore.
    </h4>

    <p>
      A beacon doesn't demand attention. It remains steady in the
      distance — giving people a sense of direction through unfamiliar
      waters.
    </p>

    <p>
      That became the emotional foundation of Beacon: quiet guidance,
      low visual noise and a gradual movement toward connection.
    </p>

  </div>

  <figure className="lighthouse-visual">
    <img
      src="/beacon/lighthouse.jpg"
      alt="Illustrated lighthouse casting a beam across a dark ocean"
    />
  </figure>

</div>

    {/* COLOUR */}

   {/* VISUAL SYSTEM PREVIEW */}

<div className="visual-system-preview">

  <span className="visual-eyebrow">COLOUR SYSTEM</span>

  <div className="visual-colour-preview">

  <div>
    <span style={{ background: "#1C1A4A" }} />
    <small>DEEP INDIGO</small>
  </div>

  <div>
    <span style={{ background: "#338D82" }} />
    <small>DEEP TEAL</small>
  </div>

  <div>
    <span style={{ background: "#5B8FB9" }} />
    <small>STEEL TEAL</small>
  </div>

  <div>
    <span style={{ background: "#7EC8A0" }} />
    <small>SEAFOAM</small>
  </div>

  <div>
    <span style={{ background: "#F0F8D0" }} />
    <small>MORNING</small>
  </div>

</div>

</div>


{/* EXPANDABLE VISUAL SYSTEM */}

<details className="visual-explore">

  <summary className="visual-explore-trigger">

    <div className="visual-explore-trigger-copy">

      <span className="visual-explore-symbol" />

      <div>
        <span className="visual-explore-title visual-title-closed">
          EXPLORE THE VISUAL SYSTEM
        </span>

        <span className="visual-explore-title visual-title-open">
          CLOSE VISUAL SYSTEM
        </span>

        <span className="visual-explore-description">
  Typography & interface language
</span>
      </div>

    </div>

    <span className="visual-explore-arrow">↘</span>

  </summary>


  <div className="visual-explore-content">

    {/* COLOUR */}

    {/* <div className="visual-colour-section">

      <span className="visual-eyebrow">COLOUR ROLES</span>

      <div className="visual-colours">

        <div>
          <span
            className="colour-swatch"
            style={{ background: "#1C1A4A" }}
          />
          <strong>Deep Indigo</strong>
          <small>#1C1A4A</small>
          <p>Environment · screen base</p>
        </div>

        <div>
          <span
            className="colour-swatch"
            style={{ background: "#338D82" }}
          />
          <strong>Deep Teal</strong>
          <small>#338D82</small>
          <p>Structure · panels</p>
        </div>

        <div>
          <span
            className="colour-swatch"
            style={{ background: "#5B8FB9" }}
          />
          <strong>Steel Teal</strong>
          <small>#5B8FB9</small>
          <p>Primary interaction</p>
        </div>

        <div>
          <span
            className="colour-swatch"
            style={{ background: "#7EC8A0" }}
          />
          <strong>Seafoam</strong>
          <small>#7EC8A0</small>
          <p>Trust · success · signal</p>
        </div>

        <div>
          <span
            className="colour-swatch light"
            style={{ background: "#F0F8D0" }}
          />
          <strong>Morning</strong>
          <small>#F0F8D0</small>
          <p>Warmth · arrival · text</p>
        </div>

      </div>

    </div> */}


    {/* TYPOGRAPHY */}

    <div className="visual-type-section">

      <span className="visual-eyebrow">TYPOGRAPHY</span>

      <div className="visual-type-grid">

        <article className="type-display">

          <span>DISPLAY · HEADINGS · WORDMARK</span>

          <h4>Tsurumi Rounded</h4>

          <p>
            Rounded and approachable, giving Beacon's headings and
            identity a warmer character.
          </p>

          <small>
            HEADINGS · WORDMARK · SCREEN TITLES
          </small>

        </article>


        <article className="type-body">

          <span>BODY · UI · LABELS</span>

          <h4>Quicksand</h4>

          <p>
            A clean geometric companion used for interface copy,
            labels and supporting information.
          </p>

          <small>
            BODY · UI · LABELS · METADATA
          </small>

        </article>

      </div>

    </div>


    <button
      className="visual-close-bottom"
      type="button"
      onClick={(e) => {
        e.currentTarget.closest("details").removeAttribute("open");
      }}
    >
      <span>−</span>

      <span>
        <strong>CLOSE VISUAL SYSTEM</strong>
        <small>Return to case study</small>
      </span>

      <span>↗</span>
    </button>

  </div>

</details>

    {/* TRANSITION */}

    <div className="visual-system-transition">

      <span>SYSTEM → PRODUCT</span>

      <p>
        The system created the atmosphere.
        <strong> The interface had to make it usable.</strong>
      </p>

      <span>↓</span>

    </div>

  </div>
</section>


  {/* =========================
    06 — THE SOLUTION
========================= */}

<section
  id="beacon-solution"
  className="beacon-section beacon-solution-section solution-compact"
>
  <div className="solution-shell">

    <div className="solution-kicker">
      <span>06</span>
      <span>THE SOLUTION</span>
    </div>


    <div className="solution-header">

      <h3>
        Designed for connection
        <br />
        that develops gradually.
      </h3>

      <div className="solution-header-copy">
        <p>
          Beacon brings the research, structure and interaction decisions
          together into a social experience built around small groups,
          recurring interaction and gradual familiarity.
        </p>
      </div>

    </div>


    {/* CORE EXPERIENCE */}

    <div className="solution-principles">

      <article>
        <span>01</span>

<div className="solution-principle-visual visual-small">
  <i></i>
  <i></i>
  <i></i>
</div>
        <h4>Small by design.</h4>

        <p>
          Connection begins in small Crews rather than large,
          high-pressure social spaces.
        </p>
      </article>


      <article>
        <span>02</span>

<div className="solution-principle-visual visual-guided">
  <span></span>
  <i></i>
</div>
        <h4>Guided, not forced.</h4>

        <p>
          Prompts and shared sessions provide enough structure
          to make starting a conversation easier.
        </p>
      </article>


      <article>
        <span>03</span>

<div className="solution-principle-visual visual-continuity">
  <i></i>
  <i></i>
  <i></i>
</div>
        <h4>Built for continuity.</h4>

        <p>
          Recurring interaction gives familiarity time to develop
          instead of treating a match as the end goal.
        </p>
      </article>

    </div>


    {/* EXPERIENCE PREVIEW */}

    <div className="solution-preview">

      <span>THE EXPERIENCE</span>

      <p>
        Discover
        <i>→</i>
        Match
        <i>→</i>
        Join
        <i>→</i>
        Participate
        <i>→</i>
        Reflect
      </p>

      <small>
        Final interface and interaction prototype in development.
      </small>

    </div>


    {/* CLOSING */}

    <div className="solution-closing">

      <span>THE CORE IDEA</span>

      <p>
        Beacon isn't designed around collecting connections.
        <strong>
          {" "}It's designed to give connection enough structure
          and continuity to grow.
        </strong>
      </p>

    </div>

  </div>
</section>

      {/* =========================
          08 — REFLECTION
      ========================= */}

      {/* =========================
    07 — REFLECTION
========================= */}

<section
  id="beacon-reflection"
  className="beacon-section beacon-reflection-section"
>

  <div className="reflection-shell">

    <div className="reflection-kicker">
      <span>07</span>
      <span>REFLECTION</span>
    </div>


    <div className="reflection-main">

      <h3>
        The problem wasn't
        <br />
        meeting people.
      </h3>

      <div className="reflection-statement">

        <p>
          It was the emotional cost
          <br />
          of getting from
          <em> stranger </em>
          to
          <em> familiar.</em>
        </p>

      </div>

    </div>


    <div className="reflection-learning">

      <span>WHAT I LEARNED</span>

      <div>
        <p>
          Beacon began as a question about helping people meet after
          moving to a new city. Research shifted the focus away from
          creating more opportunities for discovery and toward reducing
          the pressure surrounding connection itself.
        </p>

        <p>
          The project taught me to think beyond individual screens and
          features. Group size, repetition, trust, pacing and even what
          the product chooses <em>not</em> to expose can shape how safe
          a social experience feels.
        </p>
      </div>

    </div>


    <div className="reflection-next">

      <span>NEXT ITERATION</span>

      <p>
        The next step is to refine the interface and prototype the
        transition from matching to recurring Crew interactions —
        testing whether the structure feels as natural in use as it
        does on paper.
      </p>

    </div>


    <div className="reflection-end">

      <span>BEACON</span>

      <p>
        Designing the conditions for connection,
        <br />
        rather than connection itself.
      </p>

      <span className="reflection-star">✦</span>

    </div>

  </div>

</section>

    </section>
  )
}

export default Beacon