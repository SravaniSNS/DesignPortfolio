// import React from "react";
import { Link } from "react-router-dom";
import "./beacon.css";
import React, { useState } from "react";


export default function Beacon() {
    console.log("NEW BEACON FILE IS RUNNING");
    const [expandedImage, setExpandedImage] = useState(null);
  return (
    <main className="beacon-v2">

      <Link className="beacon-back" to="/">
        ← Back to work
      </Link>


      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="beacon-hero">

        <div className="beacon-hero-label">
          <span>BEACON</span>
          <i />
          <span>SOCIAL × URBAN CONNECTION</span>
        </div>


        <div className="beacon-hero-layout">

          <div className="beacon-hero-copy">

            <h1>
              Find your
              <br />
              <em>shore.</em>
            </h1>

            <p className="beacon-hero-intro">
              A social experience for people finding their footing
              in a new city: using small crews and guided interaction
              to make connection feel less overwhelming.
            </p>

            <a className="beacon-story-link" href="#problem">
              Explore the case study
              <span>↓</span>
            </a>

          </div>


          <div className="beacon-product-stage">

            <div className="beacon-ripple ripple-one" />
            <div className="beacon-ripple ripple-two" />
            <div className="beacon-ripple ripple-three" />


            <figure className="beacon-screen beacon-screen-home">
              <img
                src="/beacon/v2/home.png"
                alt="Beacon home screen showing suggested social crews"
              />
            </figure>


            <figure className="beacon-screen beacon-screen-main">
              <img
                src="/beacon/v2/crews.png"
                alt="Beacon suggested crews screen"
              />

              <figcaption>
                <span>THE CORE IDEA</span>
                <p>
                  Fewer people.
                  <br />
                  More context.
                </p>
              </figcaption>
            </figure>


            <figure className="beacon-screen beacon-screen-crew">
              <img
                src="/beacon/v2/crew.png"
                alt="Beacon Sunday Readers crew screen"
              />
            </figure>

          </div>

        </div>


        <div className="beacon-hero-meta">

          <div>
            <span>ROLE</span>
            <p>UX Research + UX Design</p>
          </div>

          <div>
            <span>FOCUS</span>
            <p>Research · IA · Interaction</p>
          </div>

          <div>
            <span>PLATFORM</span>
            <p>Mobile</p>
          </div>

          <div>
            <span>STATUS</span>
            <p>Hi-fi prototype · evolving</p>
          </div>

        </div>

      </header>


      {/* =====================================================
          CASE STUDY STARTS HERE
      ===================================================== */}

      {/* =====================================================
    01 : PROBLEM
===================================================== */}

<section id="problem" className="beacon-problem">

  <div className="beacon-section-marker">
    <span>01</span>
    <span>THE PROBLEM</span>
  </div>

  <div className="problem-opening">

    <h2>
      Cities are full
      <br />
      of people.
      <br />
      {/* <em>Nobody knows each other.</em> */}
    </h2>

    <div className="problem-context">
      <p>
        Moving to a new city creates plenty of opportunities
        to meet people : but meeting people isn't the same as
        building connection.
      </p>

      <p>
        Existing social spaces can be large, temporary and
        effort-heavy, leaving newcomers to repeatedly start
        from zero.
      </p>
    </div>

  </div>

  <div className="problem-visual">

  <figure className="problem-image problem-image-main">
    <img
      src="/beacon/problem-city.jpg"
      alt="Experience of arriving in a new city without an established social circle"
    />

    <figcaption>
      A new city can offer endless possibilities :
      without making connection feel any easier.
    </figcaption>
  </figure>


  <figure className="problem-image problem-image-secondary">
    <img
      src="/beacon/problem-transit.jpg"
      alt="The difficulty of moving from being around people to meaningful connection"
    />
  </figure>

</div>


  <div className="problem-pullquote">
    <span>THE GAP</span>

    <p>
      The infrastructure for meeting people exists.
      <br />
      <strong>
        The infrastructure for actually connecting
        with them doesn't.
      </strong>
    </p>
  </div>


  <div className="problem-frictions">

    <div className="problem-friction">
      <span>01</span>
      <p>Hard to know where to begin</p>
    </div>

    <div className="problem-friction">
      <span>02</span>
      <p>Large groups feel overwhelming</p>
    </div>

    <div className="problem-friction">
      <span>03</span>
      <p>Approaching strangers takes effort</p>
    </div>

    <div className="problem-friction">
      <span>04</span>
      <p>Conversation can feel forced</p>
    </div>

    <div className="problem-friction">
      <span>05</span>
      <p>Meetings lack continuity</p>
    </div>

  </div>


  <p className="problem-source">
    From an experience audit of how newcomers meet people.
  </p>

</section>

{/* =====================================================
    02 : THE IDEA
===================================================== */}

<section id="idea" className="beacon-idea">

  <div className="beacon-section-marker">
    <span>02</span>
    <span>THE IDEA</span>
  </div>

  <div className="idea-opening">

    <p className="idea-kicker">
      LESS EXPOSURE. MORE STRUCTURE.
    </p>

    <h2>
      Connection doesn't need
      <br />
      <em>more people.</em>
      <br />
      It needs a gentler way in.
    </h2>

    <p className="idea-intro">
      Beacon reduces the pressure before it expects connection :
      moving people gradually from personal space into a small,
      recurring social circle.
    </p>

  </div>


  <div className="connection-path">

    <div className="connection-step">
      <span className="connection-number">01</span>

      <div className="connection-node node-single">
        <span />
      </div>

      <h3>Personal space</h3>

      <p>
        Start with preferences,
        interests and boundaries.
      </p>
    </div>


    <div className="connection-line" aria-hidden="true">
      <span />
    </div>


    <div className="connection-step">
      <span className="connection-number">02</span>

      <div className="connection-node node-crew">
        <span />
        <span />
        <span />
        <span />
      </div>

      <h3>Small crew</h3>

      <p>
        Match into a group
        of 3–5 people.
      </p>
    </div>


    <div className="connection-line" aria-hidden="true">
      <span />
    </div>


    <div className="connection-step">
      <span className="connection-number">03</span>

      <div className="connection-node node-guided">
        <span />
        <span />
        <span />
      </div>

      <h3>Guided interaction</h3>

      <p>
        Shared prompts create
        an easier starting point.
      </p>
    </div>


    <div className="connection-line" aria-hidden="true">
      <span />
    </div>


    <div className="connection-step">
      <span className="connection-number">04</span>

      <div className="connection-node node-open">
        <span />
      </div>

      <h3>Optional meetup</h3>

      <p>
        Continue only when
        the group is ready.
      </p>
    </div>

  </div>


  <div className="idea-principles">

    <span>SMALL FIXED CREWS</span>
    <span>RECURRING SESSIONS</span>
    <span>SYSTEM-FACILITATED MATCHING</span>
    <span>LOW SOCIAL PRESSURE</span>
    <span>OPTIONAL CONTINUATION</span>

  </div>

</section>

{/* =====================================================
    03 : RESEARCH
===================================================== */}

<section id="research" className="beacon-research">

  <div className="beacon-section-marker">
    <span>03</span>
    <span>RESEARCH</span>
  </div>


  <div className="research-opening">

    <div>
      <p className="research-kicker">
        OPEN CARD SORT · FIGJAM
      </p>

      <h2>
        Five people.
        <br />
        About forty cards.
        <br />
        <em>Three ways of seeing the system.</em>
      </h2>
    </div>

    <div className="research-method">
      <p>
        Rather than deciding the information architecture
        from my own assumptions, I used an open card sort
        to understand how people grouped Beacon's content.
      </p>

      <div className="research-stats">
        <div>
          <strong>5</strong>
          <span>participants</span>
        </div>

        <div>
          <strong>~40</strong>
          <span>content items</span>
        </div>

        <div>
          <strong>~20m</strong>
          <span>per session</span>
        </div>
      </div>
    </div>

  </div>


  {/* CARD SORT ARTIFACTS */}

  <div className="research-artifacts">

    <figure className="research-board research-board-primary">
      <img
        src="/beacon/card-sort-01.png"
        alt="Participant card sorting board"
      />

      <figcaption>
        One participant created a more hierarchical structure.
      </figcaption>
    </figure>


    <figure className="research-board research-board-secondary">
      <img
        src="/beacon/card-sort-02.png"
        alt="Participant card sorting board showing a contrasting grouping approach"
      />

      <figcaption>
        Another organised the same content more spatially.
      </figcaption>
    </figure>

  </div>


  <p className="research-artifact-note">
    SAME CONTENT → DIFFERENT MENTAL STRUCTURES
  </p>


  {/* ANALYSIS */}

  <div className="research-analysis">

    <div className="research-analysis-copy">
      <span>FROM SORTS TO PATTERNS</span>

      <h3>
        The differences mattered.
        <br />
        <em>The overlaps mattered more.</em>
      </h3>

      <p>
        Comparing the sorts exposed where participants
        consistently grouped information : and where the
        original structure was fighting their expectations.
      </p>
    </div>


    <div className="research-analysis-images">

      <figure>
        <img
          src="/beacon/similarity-matrix.jpg"
          alt="Similarity matrix from the Beacon card sort"
        />

        <figcaption>
          Similarity matrix
        </figcaption>
      </figure>

      <figure>
        <img
          src="/beacon/dendogram.jpg"
          alt="Cluster analysis from the Beacon card sort"
        />

        <figcaption>
          Cluster analysis
        </figcaption>
      </figure>

    </div>

  </div>


  {/* RESEARCH → DECISIONS */}

  <div className="research-decisions">

    <div className="research-decisions-heading">
      <span>WHAT CHANGED</span>

      <h3>
        Research didn't just
        validate the structure.
        <em>It changed it.</em>
      </h3>
    </div>


    <div className="research-decision-list">

      <article>
        <span className="decision-number">01</span>

        <div>
          <span className="decision-signal">IDENTITY</span>
          <h4>Profile became three different spaces.</h4>
          <p>
            Public Profile, Private Space and Safety & Trust
            replaced one broad profile category.
          </p>
        </div>
      </article>


      <article>
        <span className="decision-number">02</span>

        <div>
          <span className="decision-signal">MATCHING</span>
          <h4>Matching moved before the Crew.</h4>
          <p>
            Preferences and queue-related content became
            Signal : a distinct pre-joining space.
          </p>
        </div>
      </article>


      <article>
        <span className="decision-number">03</span>

        <div>
          <span className="decision-signal">TRUST</span>
          <h4>Trust moved inside the Crew.</h4>
          <p>
            The Trust Indicator was understood as part of
            the active group experience rather than a
            generic setting.
          </p>
        </div>
      </article>


      <article>
        <span className="decision-number">04</span>

        <div>
          <span className="decision-signal">REFLECTION</span>
          <h4>Mood Check-in became Anchored.</h4>
          <p>
            Inconsistent placement suggested it should
            become a contextual post-session reflection.
          </p>
        </div>
      </article>

    </div>

  </div>

</section>

{/* =====================================================
    04 : STRUCTURE
===================================================== */}

<section id="structure" className="beacon-structure">

  <div className="beacon-section-marker">
    <span>04</span>
    <span>STRUCTURE</span>
  </div>


  <div className="structure-opening">

    <div>
      <p className="structure-kicker">
        RESEARCH → INFORMATION ARCHITECTURE
      </p>

      <h2>
        The structure follows
        <br />
        <em>how people think.</em>
      </h2>
    </div>

    <p className="structure-intro">
      The card sort changed how Beacon separated identity,
      matching, active crews and reflection : turning the
      research into a clearer product structure.
    </p>

  </div>


  {/* IA : HERO ARTIFACT */}

  <div className="ia-feature">

    <div className="ia-label">
      <span>INFORMATION ARCHITECTURE</span>

      <p>
        The resulting system separates what belongs to the
        individual, what happens before joining a crew,
        and what belongs inside an active crew.
      </p>
    </div>

    <figure className="ia-artifact">
      <img
        src="/beacon/ia.png"
        alt="Beacon information architecture"
      />

      <figcaption>
        Revised information architecture after card-sort synthesis.
      </figcaption>
    </figure>

  </div>


  {/* EXPERIENCE LOGIC */}

  <div className="structure-flow">

    <div className="structure-flow-heading">
      <span>FROM ARCHITECTURE TO EXPERIENCE</span>

      <h3>
        Four states shape the
        <br />
        <em>journey through Beacon.</em>
      </h3>
    </div>


    <div className="journey-line">

      <article>
        <span className="journey-index">01</span>

        <div className="journey-dot" />

        <p className="journey-question">
          Who am I?
        </p>

        <h4>My Space</h4>

        <p className="journey-detail">
          Identity, interests,
          boundaries and trust.
        </p>
      </article>


      <div className="journey-connector" />


      <article>
        <span className="journey-index">02</span>

        <div className="journey-dot" />

        <p className="journey-question">
          How do I want to connect?
        </p>

        <h4>Signal</h4>

        <p className="journey-detail">
          Preferences, matching
          and finding a crew.
        </p>
      </article>


      <div className="journey-connector" />


      <article>
        <span className="journey-index">03</span>

        <div className="journey-dot" />

        <p className="journey-question">
          Who am I with?
        </p>

        <h4>Crew</h4>

        <p className="journey-detail">
          Members, sessions,
          activity and trust.
        </p>
      </article>


      <div className="journey-connector" />


      <article>
        <span className="journey-index">04</span>

        <div className="journey-dot" />

        <p className="journey-question">
          What happened after?
        </p>

        <h4>Anchored</h4>

        <p className="journey-detail">
          Reflection after
          shared interaction.
        </p>
      </article>

    </div>

  </div>


  {/* LANGUAGE */}

  <div className="structure-language">

    <div className="language-heading">
      <span>LANGUAGE MATTERS TOO</span>

      <h3>
        The architecture became
        <br />
        part of Beacon's world.
      </h3>
    </div>


    <div className="language-list">

      <div>
        <span>Circle</span>
        <span>→</span>
        <strong>Crew</strong>
      </div>

      <div>
        <span>Waiting Pool</span>
        <span>→</span>
        <strong>In the Water</strong>
      </div>

      <div>
        <span>Matching</span>
        <span>→</span>
        <strong>Sensing Signals</strong>
      </div>

      <div>
        <span>Session Complete</span>
        <span>→</span>
        <strong>Anchored</strong>
      </div>

      <div>
        <span>Code of Conduct</span>
        <span>→</span>
        <strong>The Charter</strong>
      </div>

    </div>

  </div>

</section>

{/* ======================================================
    05 : DESIGN EVOLUTION
====================================================== */}

<section className="beacon-evolution">

  <div className="beacon-section-marker">
    <span>05</span>
    <span>DESIGN EVOLUTION</span>
  </div>


  {/* OPENING */}

  <div className="evolution-opening">

    <div>
      <p className="evolution-kicker">
        FROM STRUCTURE TO EXPERIENCE
      </p>

      <h2>
        The system came first.
        <br />
        <em>The interface followed.</em>
      </h2>
    </div>

    <p className="evolution-intro">
      Before refining the interface, I worked through how identity,
      matching, crews, sessions and safety needed to fit together :
      then translated that structure into an experience.
    </p>

  </div>


  {/* ======================================================
      01 : WORKING OUT THE SYSTEM
  ====================================================== */}

  <div className="evolution-system">

    <div className="evolution-system-copy">

      <span>01 / WORKING OUT THE SYSTEM</span>

      <h3>
        Before designing screens,
        <br />
        <em>I mapped the product.</em>
      </h3>

      <p>
        Early explorations focused on relationships between the
        major parts of Beacon: identity, matching, crews, sessions,
        safety and the user's personal space.
      </p>

    </div>


    <div className="evolution-sketch-collage">

      <figure className="system-sketch system-sketch-main">
        <img
  src="/beacon/v2/evolution/system-sketch-1.jpg"
  alt="Early Beacon product structure and information architecture sketches"
  onClick={() =>
    setExpandedImage("/beacon/v2/evolution/system-sketch-1.jpg")
  }
/>

        <figcaption>
          Exploring how the product's major spaces connect.
        </figcaption>
      </figure>


      <figure className="system-sketch system-sketch-secondary">
        <img
  src="/beacon/v2/evolution/system-sketch-2.jpg"
  alt="Early Beacon navigation and product model sketches"
  onClick={() =>
    setExpandedImage("/beacon/v2/evolution/system-sketch-2.jpg")
  }
/>

        <figcaption>
          Testing different relationships between Home, Match,
          Circle and Profile.
        </figcaption>
      </figure>


      <span className="evolution-sketch-note">
        STRUCTURE BEFORE SCREENS
      </span>

    </div>

  </div>


  {/* ======================================================
      02 : WORKING OUT THE EXPERIENCE
  ====================================================== */}

  <div className="evolution-flow">

    <div className="evolution-flow-heading">

      <span>02 / WORKING OUT THE EXPERIENCE</span>

      <h3>
        Then I sketched the journey,
        <br />
        <em>not isolated screens.</em>
      </h3>

      <p>
        The sketches explored how someone could move from arriving
        alone to discovering people, entering a crew, participating
        and reflecting afterwards.
      </p>

    </div>


    <div className="evolution-flow-strip">

      <figure>
        <div className="flow-image">
          <img
            src="/beacon/v2/evolution/flow-onboarding.jpg"
            alt="Beacon onboarding sketches" onClick={() =>
  setExpandedImage("/beacon/v2/evolution/flow-onboarding.jpg")
}
          />
        </div>

        <figcaption>
          <span>01</span>
          <strong>Onboard</strong>
          <p>Set up identity, interests and expectations.</p>
        </figcaption>
      </figure>


      <div className="evolution-flow-arrow">
        <span>→</span>
      </div>


      <figure>
        <div className="flow-image">
          <img
            src="/beacon/v2/evolution/flow-discovery.jpg"
            alt="Beacon home and discovery sketches"
            onClick={() =>
              setExpandedImage("/beacon/v2/evolution/flow-discovery.jpg")
            }
          />
        </div>

        <figcaption>
          <span>02</span>
          <strong>Discover</strong>
          <p>See possible spaces and ways to connect.</p>
        </figcaption>
      </figure>


      <div className="evolution-flow-arrow">
        <span>→</span>
      </div>


      <figure>
        <div className="flow-image">
          <img
            src="/beacon/v2/evolution/flow-crew.jpg"
            alt="Beacon matching and crew sketches" onClick={() =>
  setExpandedImage("/beacon/v2/evolution/flow-crew.jpg")
}
          />
        </div>

        <figcaption>
          <span>03</span>
          <strong>Join</strong>
          <p>Move through matching into a smaller group.</p>
        </figcaption>
      </figure>


      <div className="evolution-flow-arrow">
        <span>→</span>
      </div>


      <figure>
        <div className="flow-image">
          <img
            src="/beacon/v2/evolution/flow-reflection.jpg"
            alt="Beacon post-session and reflection sketches"
            onClick={() =>
              setExpandedImage("/beacon/v2/evolution/flow-reflection.jpg")
            }
          />
        </div>

        <figcaption>
          <span>04</span>
          <strong>Reflect</strong>
          <p>Decide whether the connection should continue.</p>
        </figcaption>
      </figure>

    </div>

  </div>


  {/* ======================================================
      03 : THE PRODUCT CHANGED
  ====================================================== */}

  <div className="evolution-transition">

    <span>03 / REFINEMENT</span>

    <h3>
      And then
      <br />
      <em>Beacon changed.</em>
    </h3>

    <p>
      As the structure became clearer, the product moved away from
      generic social-platform patterns toward a calmer experience
      built around guidance, small groups and gradual connection.
    </p>

  </div>


  {/* CURRENT INTERFACE */}

  <div className="evolution-interface">

    <figure className="evolution-phone evolution-phone-home">
      <img
        src="/beacon/v2/home.png"
        alt="Beacon home screen"
      />

      <figcaption>HOME</figcaption>
    </figure>


    <figure className="evolution-phone evolution-phone-main">
      <img
        src="/beacon/v2/crews.png"
        alt="Beacon suggested crews screen"
      />

      <figcaption>FIND A CREW</figcaption>
    </figure>


    <figure className="evolution-phone evolution-phone-crew">
      <img
        src="/beacon/v2/crew.png"
        alt="Beacon crew detail screen"
      />

      <figcaption>ENTER THE CREW</figcaption>
    </figure>

  </div>


  {/* ======================================================
      VISUAL LANGUAGE
  ====================================================== */}

  <div className="evolution-language">

    <div className="evolution-language-copy">

      <span>VISUAL LANGUAGE</span>

      <h3>
        From social app
        <br />
        to <em>signal in the dark.</em>
      </h3>

      <p>
        Beacon's identity grew around the lighthouse metaphor:
        something that does not demand attention, but quietly helps
        someone find their way toward other people.
      </p>

    </div>


    <div className="evolution-palette">

      <div className="palette-swatch swatch-indigo">
        <span>#1C1A44</span>
      </div>

      <div className="palette-swatch swatch-teal">
        <span>#338D82</span>
      </div>

      <div className="palette-swatch swatch-steel">
        <span>#5B8FB9</span>
      </div>

      <div className="palette-swatch swatch-seafoam">
        <span>#7EC8A0</span>
      </div>

      <div className="palette-swatch swatch-morning">
        <span>#F0F8D0</span>
      </div>

    </div>

  </div>

</section>

{/* ======================================================
    06 : FINAL EXPERIENCE
====================================================== */}

<section className="beacon-experience">

  <div className="beacon-section-marker">
    <span>06</span>
    <span>FINAL EXPERIENCE</span>
  </div>


  {/* OPENING */}

  <div className="experience-opening">

    <div>
      <p className="experience-kicker">
        THE CURRENT BEACON EXPERIENCE
      </p>

      <h2>
        Fewer people.
        <br />
        <em>Better ways in.</em>
      </h2>
    </div>

    <p className="experience-intro">
      Instead of presenting an endless social feed, Beacon guides
      someone through a smaller journey : from expressing how they
      like to connect to finding a crew that feels worth entering.
    </p>

  </div>


  {/* ======================================================
      01 : SETTING THE SIGNAL
  ====================================================== */}

  <div className="experience-onboarding">

    <div className="experience-step-copy">

      <span>01 / SETTING THE SIGNAL</span>

      <h3>
        Start with the person,
        <br />
        <em>not the profile.</em>
      </h3>

      <p>
        Onboarding captures interests, connection style and shared
        expectations before asking someone to enter the social space.
      </p>

    </div>


    <div className="onboarding-screens">

      <figure>
        <img
          src="/beacon/v2/about-you.png"
          alt="Beacon about you onboarding screen"
        />
      </figure>

      <figure>
        <img
          src="/beacon/v2/interests.png"
          alt="Beacon interests onboarding screen"
        />
      </figure>

      <figure>
        <img
          src="/beacon/v2/connection-style.png"
          alt="Beacon connection style onboarding screen"
        />
      </figure>

      <figure>
        <img
          src="/beacon/v2/guidelines.png"
          alt="Beacon community commitments onboarding screen"
        />
      </figure>

    </div>

  </div>


  {/* ======================================================
      02 : ARRIVING
  ====================================================== */}

  <div className="experience-moment experience-home">

    <div className="experience-moment-copy">

      <span>02 / ARRIVING</span>

      <h3>
        A home screen that
        <br />
        doesn't ask you to perform.
      </h3>

      <p>
        Beacon brings active crews and possible spaces for connection
        into one quieter starting point.
      </p>

    </div>


    <figure className="experience-feature-screen">
      <img
        src="/beacon/v2/home.png"
        alt="Beacon home screen"
      />
    </figure>

  </div>


  {/* ======================================================
      03 : FINDING PEOPLE
  ====================================================== */}

  <div className="experience-moment experience-signal">

    <figure className="experience-feature-screen">
      <img
        src="/beacon/v2/signal.png"
        alt="Beacon finding your crew screen"
      />
    </figure>


    <div className="experience-moment-copy">

      <span>03 / FINDING PEOPLE</span>

      <h3>
        Matching happens
        <br />
        <em>before exposure.</em>
      </h3>

      <p>
        Instead of browsing an unlimited pool of people, Beacon
        narrows the experience toward a small compatible crew.
      </p>

    </div>

  </div>


  {/* ======================================================
      04 : CHOOSING A CREW
  ====================================================== */}

  <div className="experience-moment experience-crews">

    <div className="experience-moment-copy">

      <span>04 / CHOOSING A CREW</span>

      <h3>
        Enough context
        <br />
        to make a choice.
      </h3>

      <p>
        Suggested crews show what brings the group together before
        asking someone to step inside.
      </p>

    </div>


    <figure className="experience-feature-screen experience-feature-large">
      <img
        src="/beacon/v2/crews.png"
        alt="Beacon suggested crews screen"
      />
    </figure>

  </div>


  {/* ======================================================
      05 : STEPPING INSIDE
  ====================================================== */}

  <div className="experience-moment experience-inside">

    <figure className="experience-feature-screen experience-feature-large">
      <img
        src="/beacon/v2/crew.png"
        alt="Beacon crew detail screen"
      />
    </figure>


    <div className="experience-moment-copy">

      <span>05 / STEPPING INSIDE</span>

      <h3>
        Connection becomes
        <br />
        <em>smaller and more concrete.</em>
      </h3>

      <p>
        The crew becomes the centre of the experience: a small,
        recurring social space rather than another public audience.
      </p>

    </div>

  </div>


  {/* CLOSING THOUGHT */}

  <div className="experience-closing">

    <span>THE PRODUCT IDEA</span>

    <p>
      Most social platforms create more opportunities to meet people.
      <strong>
        {" "}Beacon tries to create better conditions for connection.
      </strong>
    </p>

  </div>

</section>
{/* ======================================================
    07 : REFLECTION
====================================================== */}

<section className="beacon-reflection">

  <div className="beacon-section-marker">
    <span>07</span>
    <span>REFLECTION</span>
  </div>


  <div className="reflection-opening">

    <p className="reflection-kicker">
      WHAT BEACON TAUGHT ME
    </p>

    <h2>
      Research didn't validate
      <br />
      the interface.
      <br />
      <em>It changed it.</em>
    </h2>

  </div>


  <div className="reflection-grid">

    <article className="reflection-block reflection-block-main">

      <span>WHAT WORKED</span>

      <h3>
        Structure became a
        design decision.
      </h3>

      <p>
        The card sort changed how identity, matching, trust and
        reflection were organised before the final screens existed.
        Research became part of the product architecture rather than
        something added around it.
      </p>

    </article>


    <article className="reflection-block">

      <span>WHAT ISN'T RESOLVED YET</span>

      <h3>
        The current experience
        still needs testing.
      </h3>

      <p>
        Beacon has reached a high-fidelity product direction, but the
        current interaction model has not yet been validated through
        usability testing.
      </p>

    </article>

  </div>


  <div className="reflection-next">

    <div className="reflection-next-heading">

      <span>NEXT ITERATION</span>

      <h3>
        If I continued Beacon,
        <br />
        <em>I would test...</em>
      </h3>

    </div>


    <div className="reflection-next-list">

      <div className="reflection-next-item">
        <span>01</span>

        <p>
          Whether newcomers understand the journey from
          <strong> Signal → Crew → Anchored.</strong>
        </p>
      </div>


      <div className="reflection-next-item">
        <span>02</span>

        <p>
          Whether the language and navigation remain clear
          without explaining Beacon's metaphor first.
        </p>
      </div>


      <div className="reflection-next-item">
        <span>03</span>

        <p>
          Whether compatibility scores support trust :
          or introduce the same metric-driven behaviour
          Beacon is trying to avoid.
        </p>
      </div>


      <div className="reflection-next-item">
        <span>04</span>

        <p>
          How the interface performs for accessibility,
          contrast and readability before building the
          next design-system iteration.
        </p>
      </div>

    </div>

  </div>


  <div className="reflection-final">

    <span>BEACON / 2026</span>

    <p>
      The project began as a question about loneliness in cities.
      It ended as an exploration of how
      <em> structure can make connection feel safer.</em>
    </p>

  </div>

</section>

{expandedImage && (
  <div
    className="beacon-lightbox"
    onClick={() => setExpandedImage(null)}
    role="dialog"
    aria-modal="true"
    aria-label="Expanded design artifact"
  >
    <button
      className="beacon-lightbox-close"
      onClick={() => setExpandedImage(null)}
      aria-label="Close expanded image"
    >
      ×
    </button>

    <img
      src={expandedImage}
      alt="Expanded Beacon design artifact"
      onClick={(e) => e.stopPropagation()}
    />

    <span className="beacon-lightbox-hint">
      CLICK OUTSIDE TO CLOSE
    </span>
  </div>
)}



    </main>
  );
}