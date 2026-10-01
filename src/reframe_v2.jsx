import { Link } from "react-router-dom";
import "./reframe_v2.css";

export default function ReframeV2() {
  return (
    <main className="reframe-v2">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="reframe-v2-hero">

        <Link to="/" className="reframe-v2-back">
          ← Portfolio
        </Link>


        {/* identity */}
        <div className="reframe-v2-identity">
          <strong>REFRAME</strong>
          <span></span>
          <p>CAREER RESKILLING · DESKTOP</p>
        </div>


        {/* main thought */}
        <div className="reframe-v2-hero-copy">

          <span className="reframe-v2-eyebrow">
            CAREER EXPERIENCE ≠ STARTING OVER
          </span>

          <h1>
            Your experience
            <br />
            isn't obsolete.
          </h1>

          <p className="reframe-v2-hero-shift">
            It needs to be
            <em> reframed.</em>
          </p>

        </div>


        {/* translation system */}
        <div className="reframe-v2-translation">

          <span className="reframe-v2-translation-label">
            TRANSLATING WHAT YOU ALREADY KNOW
          </span>

          <div className="reframe-v2-map">

            <div className="reframe-v2-map-node node-experience">
              <span>01</span>
              <strong>EXPERIENCE</strong>
              <p>What I've already done</p>
            </div>

            <i className="reframe-v2-map-line line-one"></i>

            <div className="reframe-v2-map-node node-skills">
              <span>02</span>
              <strong>SKILLS</strong>
              <p>What that experience means</p>
            </div>

            <i className="reframe-v2-map-line line-two"></i>

            <div className="reframe-v2-map-node node-direction">
              <span>03</span>
              <strong>DIRECTION</strong>
              <p>Where it could take me</p>
            </div>

            <i className="reframe-v2-map-line line-three"></i>

            <div className="reframe-v2-map-node node-learning">
              <span>04</span>
              <strong>LEARNING</strong>
              <p>What I need next</p>
            </div>

          </div>

        </div>


        {/* project note */}
        <aside className="reframe-v2-project-note">

          <div className="reframe-v2-note-top">
            <span>REFRAME / PROJECT 03</span>
            <i>↗</i>
          </div>

          <div className="reframe-v2-note-thesis">
            <span>THE IDEA</span>

            <p>
              Don't erase
              <br />
              experience.
              <br />
              <strong>Translate it.</strong>
            </p>
          </div>

          <div className="reframe-v2-note-meta">

            <div>
              <span>CONTEXT</span>
              <p>
                Career reskilling
                <br />
                platform
              </p>
            </div>

            <div>
              <span>AUDIENCE</span>
              <p>
                Mid-career
                <br />
                professionals
              </p>
            </div>

          </div>

          <div className="reframe-v2-note-foot">
            <span>EXPERIENCE → POSSIBILITY</span>
            <i>03</i>
          </div>

        </aside>

      </section>


      {/* =====================================================
          01 , PROBLEM
      ===================================================== */}

      <section
  className="reframe-v2-section reframe-v2-problem"
  id="reframe-problem"
>

  <div className="reframe-v2-section-label">
    <span>01</span>
    <span>THE PROBLEM</span>
  </div>


  <div className="reframe-v2-problem-intro">

    <span className="reframe-v2-kicker">
      THE CAREER TRANSFER GAP
    </span>

    <h2>
      Years of experience.
      <br />
      Yet changing direction can feel like
      <em> starting again.</em>
    </h2>

  </div>


  {/* RESEARCH PATTERN */}

  <div className="reframe-v2-problem-pattern">

    <div className="reframe-v2-pattern-label">
      <span>RESEARCH PATTERN / 01</span>
      <i>↘</i>
    </div>

    <p>
      Experience exists.
      <br />
      The translation
      <br />
      <em>isn't always clear.</em>
    </p>

    <div className="reframe-v2-pattern-context">
      <span>WHAT WE SAW</span>

      <p>
        Existing experience could become difficult to map onto
        unfamiliar roles, skills and expectations.
      </p>
    </div>

  </div>


  {/* THE GAP */}

  <div className="reframe-v2-transfer-gap">

    <div className="reframe-v2-transfer-point">
      <span>01</span>
      <strong>EXPERIENCE</strong>
      <p>What I already bring</p>
    </div>


    <div className="reframe-v2-gap-system">

      <div className="reframe-v2-gap-line"></div>

      <div className="reframe-v2-gap-node">
        <span>?</span>
      </div>

      <div className="reframe-v2-gap-line"></div>

      <small>TRANSLATION MISSING</small>

    </div>


    <div className="reframe-v2-transfer-point transfer-end">
      <span>02</span>
      <strong>NEW DIRECTION</strong>
      <p>Where I want to go</p>
    </div>

  </div>


  {/* PRESSURES */}

  <div className="reframe-v2-problem-signals">

    <article>
      <span>TRANSFER</span>

      <strong>
        Where does my
        <br />
        experience fit?
      </strong>

      <p>
        Existing skills did not always map clearly to the
        language of new roles.
      </p>
    </article>


    <article>
      <span>DIRECTION</span>

      <strong>
        What should I
        <br />
        learn next?
      </strong>

      <p>
        Without a clear destination, choosing what to learn
        could become overwhelming.
      </p>
    </article>


    <article>
      <span>CONFIDENCE</span>

      <strong>
        Am I starting
        <br />
        from zero?
      </strong>

      <p>
        Career transition could make accumulated experience
        feel disconnected from what came next.
      </p>
    </article>

  </div>


  {/* DESIGN QUESTION */}

  <div className="reframe-v2-design-question">

    <span>THE QUESTION THAT CHANGED THE DIRECTION</span>

    <p>
      What if learning didn't begin with
      <em> “What don't you know?”</em>
    </p>

    <div className="reframe-v2-question-shift">

      <span>INSTEAD</span>

      <strong>
        What do you
        <br />
        already bring?
      </strong>

      <div>
        EXPERIENCE
        <i>→</i>
        POSSIBILITY
      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          02 , RESEARCH
      ===================================================== */}

      {/* =====================================================
    02 , RESEARCH
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-research"
  id="reframe-research"
>

  <div className="reframe-v2-section-label">
    <span>02</span>
    <span>RESEARCH</span>
  </div>


  {/* INTRO */}

  <div className="reframe-v2-research-head">

    <div>
      <span>BEFORE DESIGNING THE PLATFORM</span>

      <h2>
        We looked at what
        <br />
        made career change
        <br />
        feel <em>so heavy.</em>
      </h2>
    </div>

    <p>
      The research moved the problem beyond course discovery.
      The recurring challenge was making existing experience,
      future direction and learning feel connected.
    </p>

  </div>


  {/* RESEARCH ARTIFACT */}

  <div className="reframe-v2-research-artifact">

    <div className="reframe-v2-artifact-meta">
      <div>
        <span>RESEARCH ARTIFACT / 01</span>
        <strong>Affinity mapping</strong>
      </div>

      <p>
        Raw observations were clustered to surface recurring
        tensions across career transition and learning.
      </p>
    </div>

    <div className="reframe-v2-artifact-frame">
      <img
        src="/reframe/research/affinity-map.jpg"
        alt="Affinity mapping from the Reframe research process"
      />

      <div className="reframe-v2-scan-line"></div>

      <span className="reframe-v2-artifact-tag tag-transfer">
        EXPERIENCE TRANSFER
      </span>

      <span className="reframe-v2-artifact-tag tag-overwhelm">
        OVERWHELM
      </span>

      <span className="reframe-v2-artifact-tag tag-direction">
        DIRECTION
      </span>

      <span className="reframe-v2-artifact-tag tag-confidence">
        CONFIDENCE
      </span>
    </div>

  </div>


  {/* SYNTHESIS */}

  <div className="reframe-v2-research-synthesis">

    <div className="reframe-v2-synthesis-intro">
      <span>SYNTHESIS / SIGNALS</span>

      <h3>
        Four patterns kept
        <br />
        resurfacing.
      </h3>
    </div>


    <div className="reframe-v2-signal-map">

      <article>
        <span>01</span>

        <div className="reframe-v2-signal-node"></div>

        <strong>EXPERIENCE</strong>

        <p>
          Existing experience could feel difficult to transfer
          into unfamiliar roles.
        </p>
      </article>


      <article>
        <span>02</span>

        <div className="reframe-v2-signal-node"></div>

        <strong>DIRECTION</strong>

        <p>
          People needed clarity about where they were going
          before deciding what to learn.
        </p>
      </article>


      <article>
        <span>03</span>

        <div className="reframe-v2-signal-node"></div>

        <strong>OVERWHELM</strong>

        <p>
          Learning options could become another source of
          cognitive load rather than guidance.
        </p>
      </article>


      <article>
        <span>04</span>

        <div className="reframe-v2-signal-node"></div>

        <strong>CONFIDENCE</strong>

        <p>
          Career transition could make accumulated experience
          feel less visible or valuable.
        </p>
      </article>

    </div>

  </div>


  {/* RESEARCH → DESIGN */}

  <div className="reframe-v2-research-output">

    <span>RESEARCH OUTPUT</span>

    <div className="reframe-v2-output-flow">

      <div>
        <small>INPUT</small>
        <strong>What I've done</strong>
      </div>

      <i>→</i>

      <div>
        <small>TRANSLATE</small>
        <strong>What I already bring</strong>
      </div>

      <i>→</i>

      <div>
        <small>ORIENT</small>
        <strong>Where I could go</strong>
      </div>

      <i>→</i>

      <div>
        <small>LEARN</small>
        <strong>What I need next</strong>
      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          03 , THE REFRAME
      ===================================================== */}

      {/* =====================================================
    03 , THE REFRAME
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-reframe"
  id="reframe-the-reframe"
>

  <div className="reframe-v2-section-label">
    <span>03</span>
    <span>THE REFRAME</span>
  </div>


  {/* SHORT INTRO */}

  <div className="reframe-v2-reframe-head">

    <span>THE DESIGN SHIFT</span>

    <h2>
      Don't erase experience.
      <br />
      <em>Translate it.</em>
    </h2>

  </div>


  {/* BEFORE → AFTER */}

  <div className="reframe-v2-shift">

    <div className="reframe-v2-shift-before">

      <span className="reframe-v2-shift-label">
        THE DEFAULT MODEL
      </span>

      <div className="reframe-v2-old-path">

        <span>NEW CAREER</span>

        <i>↓</i>

        <strong>START OVER</strong>

        <i>↓</i>

        <span>LEARN EVERYTHING</span>

      </div>

      <small>
        EXPERIENCE LEFT BEHIND
      </small>

    </div>


    <div className="reframe-v2-shift-pivot">

      <span>REFRAME</span>

      <div>↗</div>

    </div>


    <div className="reframe-v2-shift-after">

      <span className="reframe-v2-shift-label">
        THE OPPORTUNITY
      </span>

      <strong>
        Start with the
        <br />
        person,
        <br />
        <em>not the gap.</em>
      </strong>

    </div>

  </div>


  {/* CORE SYSTEM */}

  <div className="reframe-v2-system">

    <div className="reframe-v2-system-topline">
      <span>REFRAME / CORE LOGIC</span>
      <span>EXPERIENCE → POSSIBILITY</span>
    </div>


    <div className="reframe-v2-system-flow">

      <article className="reframe-v2-system-node">
        <span>01 / INPUT</span>

        <div className="reframe-v2-system-symbol">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <strong>EXPERIENCE</strong>

        <p>
          What have I already done?
        </p>
      </article>


      <div className="reframe-v2-system-connector">
        <span>→</span>
        <small>TRANSLATE</small>
      </div>


      <article className="reframe-v2-system-node">
        <span>02 / INTERPRET</span>

        <div className="reframe-v2-system-symbol symbol-skills">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <strong>SKILLS</strong>

        <p>
          What does that experience mean?
        </p>
      </article>


      <div className="reframe-v2-system-connector">
        <span>→</span>
        <small>MAP</small>
      </div>


      <article className="reframe-v2-system-node">
        <span>03 / ORIENT</span>

        <div className="reframe-v2-system-symbol symbol-direction">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <strong>DIRECTION</strong>

        <p>
          Where could those skills take me?
        </p>
      </article>


      <div className="reframe-v2-system-connector">
        <span>→</span>
        <small>BRIDGE</small>
      </div>


      <article className="reframe-v2-system-node">
        <span>04 / ACTION</span>

        <div className="reframe-v2-system-symbol symbol-learning">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <strong>LEARNING</strong>

        <p>
          What do I actually need next?
        </p>
      </article>

    </div>


    {/* OUTPUT */}

    <div className="reframe-v2-system-output">

      <span>OUTPUT</span>

      <div className="reframe-v2-output-line"></div>

      <strong>
        A learning path built around
        <em> where you already are.</em>
      </strong>

    </div>

  </div>


  {/* PRODUCT PRINCIPLE */}

  <div className="reframe-v2-principle">

    <span>PRODUCT PRINCIPLE / 01</span>

    <p>
      Learning becomes more useful when
      <br />
      it connects the <em>past</em> to the <strong>next step.</strong>
    </p>

  </div>

</section>


      {/* =====================================================
          04 , RESEARCH → SYSTEM
      ===================================================== */}

{/* =====================================================
    04 , RESEARCH → SYSTEM
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-system-bridge"
  id="reframe-system-bridge"
>

  <div className="reframe-v2-section-label">
    <span>04</span>
    <span>RESEARCH → SYSTEM</span>
  </div>


  <div className="reframe-v2-bridge-head">

    <span>TURNING EVIDENCE INTO PRODUCT DECISIONS</span>

    <h2>
      Every major friction
      <br />
      needed a
      <em> product response.</em>
    </h2>

  </div>


  {/* REAL ARTIFACT 01 */}

  <div className="reframe-v2-bridge-artifact bridge-map">

    <div className="reframe-v2-bridge-copy">
      <span>ARTIFACT / 01</span>

      <h3>
        Research →
        <br />
        design response
      </h3>

      <p>
        Pain points were mapped directly to product decisions,
        helping keep the platform grounded in the needs surfaced
        through research.
      </p>
    </div>


    <div className="reframe-v2-bridge-image">
      <img
        src="/reframe/system/research-response-map.jpg"
        alt="Mapping between research pain points and Reframe design responses"
      />
    </div>

  </div>


  {/* FOUR TRANSLATIONS */}

  <div className="reframe-v2-decision-map">

    <article>
      <span>01</span>

      <div>
        <small>TIME SHORTAGE</small>
        <i>→</i>
        <strong>TIME-AWARE LEARNING</strong>
      </div>
    </article>


    <article>
      <span>02</span>

      <div>
        <small>INFORMATION OVERLOAD</small>
        <i>→</i>
        <strong>GUIDED PATHWAYS</strong>
      </div>
    </article>


    <article>
      <span>03</span>

      <div>
        <small>UNCLEAR LEARNING PATHS</small>
        <i>→</i>
        <strong>EXPERIENCE MAPPING</strong>
      </div>
    </article>


    <article>
      <span>04</span>

      <div>
        <small>FEAR OF IRRELEVANCE</small>
        <i>→</i>
        <strong>CONFIDENCE TRACKING</strong>
      </div>
    </article>

  </div>


  {/* REAL ARTIFACT 02 */}

  <div className="reframe-v2-bridge-artifact bridge-flows">

    <div className="reframe-v2-bridge-image">
      <img
        src="/reframe/system/user-flow.jpg"
        alt="Reframe user and task flows"
      />

      <span className="reframe-v2-flow-tag flow-tag-one">
        EXPERIENCE MAPPING
      </span>

      <span className="reframe-v2-flow-tag flow-tag-two">
        SKILL PATHWAYS
      </span>

      <span className="reframe-v2-flow-tag flow-tag-three">
        LEARNING
      </span>
    </div>


    <div className="reframe-v2-bridge-copy">
      <span>ARTIFACT / 02</span>

      <h3>
        From features
        <br />
        to journeys.
      </h3>

      <p>
        The product logic was then translated into task flows
        connecting profile setup, career clarity, skill pathways
        and learning progress.
      </p>
    </div>

  </div>


  <div className="reframe-v2-bridge-end">

    <span>THE RESULT</span>

    <p>
      Research didn't sit beside the product.
      <br />
      <strong>It became its structure.</strong>
    </p>

  </div>

</section>

      {/* =====================================================
          05 , STRUCTURE + FLOWS
      ===================================================== */}

      {/* =====================================================
    05 , STRUCTURE + FLOWS
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-structure"
  id="reframe-structure"
>

  <div className="reframe-v2-section-label">
    <span>05</span>
    <span>STRUCTURE + FLOWS</span>
  </div>


  <div className="reframe-v2-structure-head">

    <span>DESIGNING THE JOURNEY</span>

    <h2>
      From <em>“Where do I stand?”</em>
      <br />
      to “I know what comes next.”
    </h2>

  </div>
  {/* REAL INFORMATION ARCHITECTURE */}

<div className="reframe-v2-ia">

  <div className="reframe-v2-ia-meta">

    <div>
      <span>PRODUCT ARCHITECTURE / 01</span>

      <h3>
        Organising the
        <br />
        learning system.
      </h3>
    </div>

    <p>
      The information architecture organised Reframe around
      career clarity, skill pathways, learning and progress ,
      keeping movement through the platform goal-oriented.
    </p>

  </div>


  <div className="reframe-v2-ia-artifact">

    <img
      src="/reframe/structure/information-architecture.jpg"
      alt="Information architecture for the Reframe platform"
    />

    <span className="reframe-v2-ia-tag ia-career">
      CAREER CLARITY
    </span>

    <span className="reframe-v2-ia-tag ia-pathways">
      SKILL PATHWAYS
    </span>

    <span className="reframe-v2-ia-tag ia-learning">
      LEARNING
    </span>

  </div>


  <div className="reframe-v2-ia-transition">

    <span>ARCHITECTURE</span>

    <div></div>

    <strong>
      How does someone actually
      <em> move through it?</em>
    </strong>

    <span>↓</span>

  </div>

</div>


  {/* MAIN JOURNEY */}

  <div className="reframe-v2-journey">

    <div className="reframe-v2-journey-start">
      <span>START</span>
      <strong>ME</strong>
      <p>My experience, goals and constraints</p>
    </div>


    <div className="reframe-v2-journey-line">
      <span>01</span>
    </div>


    <article>
      <span>UNDERSTAND</span>

      <div className="reframe-v2-journey-icon">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <strong>
        Experience
        <br />
        Mapping
      </strong>

      <p>
        Translate past roles and responsibilities
        into transferable skills.
      </p>
    </article>


    <div className="reframe-v2-journey-line">
      <span>02</span>
    </div>


    <article>
      <span>ORIENT</span>

      <div className="reframe-v2-journey-icon journey-target">
        ↗
      </div>

      <strong>
        Career
        <br />
        Direction
      </strong>

      <p>
        Connect existing strengths with possible
        directions and role opportunities.
      </p>
    </article>


    <div className="reframe-v2-journey-line">
      <span>03</span>
    </div>


    <article>
      <span>PLAN</span>

      <div className="reframe-v2-journey-icon journey-path">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <strong>
        Skill
        <br />
        Pathways
      </strong>

      <p>
        Turn career direction into a structured,
        prioritised learning roadmap.
      </p>
    </article>


    <div className="reframe-v2-journey-line">
      <span>04</span>
    </div>


    <article>
      <span>ACT</span>

      <div className="reframe-v2-journey-icon journey-learn">
        ✓
      </div>

      <strong>
        Learn +
        <br />
        Progress
      </strong>

      <p>
        Complete manageable modules while tracking
        progress and confidence.
      </p>
    </article>

  </div>


  {/* PRODUCT LOOP */}

  <div className="reframe-v2-product-loop">

    <div className="reframe-v2-loop-copy">

      <span>NOT A ONE-WAY COURSE</span>

      <h3>
        A system that keeps
        <br />
        <em>re-orienting around you.</em>
      </h3>

    </div>


    <div className="reframe-v2-loop-visual">

      <div className="reframe-v2-loop-ring ring-one">
        <span>EXPERIENCE</span>
      </div>

      <div className="reframe-v2-loop-ring ring-two">
        <span>DIRECTION</span>
      </div>

      <div className="reframe-v2-loop-ring ring-three">
        <span>LEARNING</span>
      </div>

      <div className="reframe-v2-loop-core">
        YOU
      </div>

    </div>

  </div>


  <div className="reframe-v2-structure-end">

    <span>THE EXPERIENCE MODEL</span>

    <p>
      Understand yourself
      <i>→</i>
      choose a direction
      <i>→</i>
      build what you need
      <i>→</i>
      see your progress.
    </p>

  </div>

</section>


      {/* =====================================================
          06 , DESIGN EVOLUTION
      ===================================================== */}

      {/* =====================================================
    06 , DESIGN EVOLUTION
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-evolution"
  id="reframe-evolution"
>

  <div className="reframe-v2-section-label">
    <span>06</span>
    <span>DESIGN EVOLUTION</span>
  </div>


  {/* INTRO */}

  <div className="reframe-v2-evolution-head">

    <span>FROM SYSTEM TO INTERFACE</span>

    <h2>
      Giving the structure
      <br />
      a <em>visual language.</em>
    </h2>

    <p>
      With the product structure established, the interface
      began by making pathways, progress and learning actions
      easy to scan and understand.
    </p>

  </div>


  {/* =====================================================
      01 , WIREFRAMES
  ====================================================== */}

  <div className="reframe-v2-evolution-stage evolution-wireframes">

    <div className="reframe-v2-evolution-stage-meta">

      <span>01 / STRUCTURE</span>

      <h3>
        Before styling,
        <br />
        <em>make the path clear.</em>
      </h3>

      <p>
        Early wireframes focused on hierarchy, navigation
        and the relationship between career direction,
        pathways and learning.
      </p>

    </div>


    <div className="reframe-v2-evolution-artifact wireframe-artifact">

      <img
        src="/reframe/evolution/wireframes.jpg"
        alt="Early Reframe wireframes"
      />

      <span className="reframe-v2-evolution-tag evolution-tag-one">
        HIERARCHY
      </span>

      <span className="reframe-v2-evolution-tag evolution-tag-two">
        PATHWAYS
      </span>

      <span className="reframe-v2-evolution-tag evolution-tag-three">
        PROGRESS
      </span>

    </div>

  </div>


  {/* SMALL TRANSITION */}

  <div className="reframe-v2-evolution-shift">

    <span>STRUCTURE ESTABLISHED</span>

    <div className="reframe-v2-evolution-shift-line"></div>

    <strong>
      Now, how should Reframe
      <em> feel?</em>
    </strong>

    <span>↘</span>

  </div>


  {/* =====================================================
      02 , VISUAL SYSTEM
  ====================================================== */}

  <div className="reframe-v2-evolution-stage evolution-system">

    <div className="reframe-v2-evolution-artifact system-artifact">

      <img
        src="/reframe/evolution/design-system.jpg"
        alt="Reframe visual design system"
      />

    </div>


    <div className="reframe-v2-evolution-stage-meta">

      <span>02 / VISUAL SYSTEM</span>

      <h3>
        Calm.
        <br />
        Structured.
        <br />
        <em>Forward-looking.</em>
      </h3>

      <p>
        A lightweight visual system established typography,
        colour, layout and reusable components for the
        desktop experience.
      </p>


      <div className="reframe-v2-system-principles">

        <div>
          <span>01</span>
          <strong>CLARITY</strong>
        </div>

        <div>
          <span>02</span>
          <strong>GUIDANCE</strong>
        </div>

        <div>
          <span>03</span>
          <strong>PROGRESS</strong>
        </div>

      </div>

    </div>

  </div>


  {/* =====================================================
      EVOLUTION STRIP
  ====================================================== */}

  <div className="reframe-v2-evolution-strip">

    <div>
      <span>01</span>
      <strong>STRUCTURE</strong>
      <small>What belongs where?</small>
    </div>

    <i>→</i>

    <div>
      <span>02</span>
      <strong>HIERARCHY</strong>
      <small>What needs attention?</small>
    </div>

    <i>→</i>

    <div>
      <span>03</span>
      <strong>LANGUAGE</strong>
      <small>How should it feel?</small>
    </div>

    <i>→</i>

    <div className="reframe-v2-evolution-next">
      <span>04</span>
      <strong>PRODUCT</strong>
      <small>Bring it together.</small>
    </div>

  </div>


  {/* FINAL TEASE */}

  <div className="reframe-v2-evolution-end">

    <span>NEXT / THE PRODUCT</span>

    <p>
      The system was ready.
      <br />
      <em>Now it needed to work as an experience.</em>
    </p>

  </div>

</section>


      {/* =====================================================
          07 , FINAL EXPERIENCE
      ===================================================== */}

      {/* =====================================================
    07 , FINAL EXPERIENCE
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-final"
  id="reframe-final"
>

  <div className="reframe-v2-section-label">
    <span>07</span>
    <span>FINAL EXPERIENCE</span>
  </div>


  {/* INTRO */}

  <div className="reframe-v2-final-head">

    <span>THE PRODUCT</span>

    <h2>
      Experience becomes
      <br />
      <em>something you can build from.</em>
    </h2>

    <p>
      Reframe connects career direction and learning in one
      experience , helping users understand where they are,
      explore where they could go, and act on what comes next.
    </p>

  </div>


  {/* =====================================================
      01 , UNDERSTAND
  ====================================================== */}

  <article className="reframe-v2-final-moment final-understand">

    <div className="reframe-v2-final-moment-head">

      <div>
        <span>01 / UNDERSTAND</span>

        <h3>
          Where am
          <br />
          <em>I right now?</em>
        </h3>
      </div>

      <div className="reframe-v2-final-moment-copy">
        <span>EXPERIENCE → VISIBILITY</span>

        <p>
          The home experience brings current learning,
          market signals and progress together , giving
          users a clearer picture of where they stand.
        </p>
      </div>

    </div>


    <div className="reframe-v2-home-stage">

      <span className="reframe-v2-stage-ghost">01</span>

      <span className="reframe-v2-screen-tag home-tag-one">
        CURRENT FOCUS
      </span>

      <span className="reframe-v2-screen-tag home-tag-two">
        MARKET SIGNALS
      </span>

      <span className="reframe-v2-screen-tag home-tag-three">
        PROGRESS
      </span>

      <div className="reframe-v2-final-screen">
        <img
          src="/reframe/final/home.jpg"
          alt="Reframe home dashboard showing current focus, market insights and learning progress"
        />
      </div>

    </div>

  </article>


  {/* =====================================================
      02 , EXPLORE
  ====================================================== */}

  <article className="reframe-v2-final-moment final-explore">

    <div className="reframe-v2-final-moment-head">

      <div>
        <span>02 / EXPLORE</span>

        <h3>
          Where could
          <br />
          <em>I go?</em>
        </h3>
      </div>

      <div className="reframe-v2-final-moment-copy">
        <span>QUERY → DISCOVERY → UNDERSTANDING</span>

        <p>
          Search becomes more than retrieval. It connects
          learning content with market insights and possible
          directions worth investigating.
        </p>
      </div>

    </div>


    <div className="reframe-v2-search-story">

      {/* SEARCH */}

      <div className="reframe-v2-search-step search-step-one">

        <div className="reframe-v2-step-label">
          <span>01</span>
          <strong>ASK</strong>
        </div>

        <div className="reframe-v2-final-screen">
          <img
            src="/reframe/final/search-open.jpg"
            alt="Reframe search interaction"
          />
        </div>

      </div>


      <div className="reframe-v2-search-arrow">
        <span>QUERY</span>
        <i>↘</i>
      </div>


      {/* RESULTS */}

      <div className="reframe-v2-search-step search-step-two">

        <div className="reframe-v2-step-label">
          <span>02</span>
          <strong>DISCOVER</strong>
        </div>

        <div className="reframe-v2-final-screen">
          <img
            src="/reframe/final/search-results.jpg"
            alt="Reframe search results showing insights, modules and learning paths"
          />
        </div>

      </div>


      <div className="reframe-v2-search-arrow search-arrow-two">
        <span>FOLLOW</span>
        <i>↘</i>
      </div>


      {/* INSIGHT */}

      <div className="reframe-v2-search-step search-step-three">

        <div className="reframe-v2-step-label">
          <span>03</span>
          <strong>UNDERSTAND</strong>
        </div>

        <div className="reframe-v2-final-screen">
          <img
            src="/reframe/final/insight.jpg"
            alt="Reframe detailed market insight"
          />
        </div>

      </div>

    </div>


    <div className="reframe-v2-search-summary">

      <span>SEARCH ISN'T THE DESTINATION</span>

      <p>
        It becomes a bridge between
        <em> curiosity and direction.</em>
      </p>

    </div>

  </article>


  {/* =====================================================
      03 , ACT
  ====================================================== */}

  <article className="reframe-v2-final-moment final-act">

    <div className="reframe-v2-final-moment-head">

      <div>
        <span>03 / ACT</span>

        <h3>
          What should
          <br />
          <em>I do next?</em>
        </h3>
      </div>

      <div className="reframe-v2-final-moment-copy">
        <span>DIRECTION → ACTION</span>

        <p>
          Career direction is translated into learning
          pathways that make the next step concrete,
          manageable and connected to a larger goal.
        </p>
      </div>

    </div>


    {/* LEARNING PATH HERO */}

    <div className="reframe-v2-path-hero">

      <div className="reframe-v2-path-side">

        <span>THE PATH</span>

        <h4>
          Direction becomes
          <br />
          <em>a plan.</em>
        </h4>

        <div className="reframe-v2-path-signals">

          <span>WHY THIS PATH</span>
          <span>MARKET DEMAND</span>
          <span>MATCH SCORE</span>
          <span>SKILLS</span>
          <span>CAREER OUTCOMES</span>

        </div>

      </div>


      <div className="reframe-v2-path-screen-wrap">

        <span className="reframe-v2-stage-ghost path-ghost">
          03
        </span>

        <div className="reframe-v2-final-screen">
          <img
            src="/reframe/final/learning-path.jpg"
            alt="Reframe learning path showing market demand, match score, skills and career outcomes"
          />
        </div>

      </div>

    </div>


    {/* PATH → LEARNING */}

    <div className="reframe-v2-path-transition">

      <span>CHOOSE A DIRECTION</span>

      <div></div>

      <strong>
        Then make it
        <em> doable.</em>
      </strong>

      <span>↓</span>

    </div>


    {/* MODULE */}

    <div className="reframe-v2-module-stage">

      <div className="reframe-v2-module-screen-wrap">

        <span className="reframe-v2-screen-tag module-tag">
          LEARNING MODE
        </span>

        <div className="reframe-v2-final-screen">
          <img
            src="/reframe/final/module.jpg"
            alt="Reframe learning module with learning style options and structured lesson content"
          />
        </div>

      </div>


      <div className="reframe-v2-module-copy">

        <span>THE NEXT STEP</span>

        <h4>
          Learning that fits
          <br />
          into the journey.
        </h4>

        <p>
          Modules break the pathway into smaller learning
          actions while supporting different content modes
          and visible progression.
        </p>

        <div className="reframe-v2-module-modes">
          <span>VISUAL</span>
          <span>AUDIO</span>
          <span>VIDEO</span>
        </div>

      </div>

    </div>

  </article>


  {/* =====================================================
      PAYOFF
  ====================================================== */}

  <div className="reframe-v2-final-payoff">

    <span>THE REFRAME</span>

    <div className="reframe-v2-payoff-path">

      <div>
        <small>I HAVE EXPERIENCE</small>
        <strong>EXPERIENCE</strong>
      </div>

      <i>→</i>

      <div>
        <small>I CAN SEE ITS VALUE</small>
        <strong>CLARITY</strong>
      </div>

      <i>→</i>

      <div>
        <small>I CAN SEE A DIRECTION</small>
        <strong>POSSIBILITY</strong>
      </div>

      <i>→</i>

      <div>
        <small>I KNOW WHAT TO DO</small>
        <strong>ACTION</strong>
      </div>

    </div>


    <p>
      Your experience isn't
      <br />
      where you got stuck.
      <br />
      <em>It's where you begin.</em>
    </p>

  </div>

</section>


      {/* =====================================================
          08 , REFLECTION
      ===================================================== */}

      {/* =====================================================
    08 , REFLECTION
===================================================== */}

<section
  className="reframe-v2-section reframe-v2-reflection"
  id="reframe-reflection"
>

  <div className="reframe-v2-section-label">
    <span>08</span>
    <span>REFLECTION</span>
  </div>

  <div className="reframe-v2-reflection-grid">

    <div className="reframe-v2-reflection-main">

      <span>WHAT I TOOK FORWARD</span>

      <h2>
        Designing for change isn't only
        about teaching something
        <em> new.</em>
      </h2>

      <p>
        Reframe shifted my attention from simply organising
        learning content to designing the transition around it:
        recognising what a person already knows, helping them
        understand its value, and making the next step feel clearer.
      </p>

    </div>


    <div className="reframe-v2-reflection-next">

      <span>NEXT ITERATION</span>

      <p>
        The next step would be to test the experience with
        mid-career professionals and evaluate whether Experience
        Mapping, career direction and learning pathways actually
        improve clarity and confidence during career transition.
      </p>

    </div>

  </div>


  <div className="reframe-v2-reflection-close">

    <span>REFRAME / 2026</span>

    <p>
      Don't erase experience.
      <br />
      <em>Translate it.</em>
    </p>

    <a href="#top">
      BACK TO TOP ↑
    </a>

  </div>

</section>

    </main>
  );
}