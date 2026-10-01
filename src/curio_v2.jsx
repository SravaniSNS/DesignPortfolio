import React from "react";
import { Link } from "react-router-dom";
import "./curio_v2.css";

export default function Curio() {
  return (
    <main className="curio-v2" id="top">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="curio-v2-hero">

        <nav className="curio-v2-nav">

          <Link to="/" className="curio-v2-back">
            ← Portfolio
          </Link>

          <div className="curio-v2-identity">
            <strong>CURIO</strong>
            <span></span>
            <small>HUMAN-CENTRED AI · INTERACTION CONCEPT</small>
          </div>

        </nav>


        {/* LITTLE WORLD SIGNALS */}

        <span className="curio-v2-world-note note-look">
          ✦ look closer
        </span>

        <span className="curio-v2-world-note note-why">
          why now?
        </span>

        <span className="curio-v2-world-note note-maybe">
          maybe worth noticing
        </span>


        <div className="curio-v2-hero-grid">

          {/* LEFT */}

          <div className="curio-v2-hero-copy">

            <span className="curio-v2-eyebrow">
              AN AI CURIOSITY LAYER FOR EVERYDAY EXPLORATION
            </span>

            <h1>
              Same world.
              <br />
              <em>More to see.</em>
            </h1>

            <p>
              Curio explores how context-aware AI might help people
              notice and explore meaningful things around them —
              without turning everyday life into a stream of interruptions.
            </p>


            <div className="curio-v2-hero-question">

              <span>THE QUESTION</span>

              <strong>
                When should AI
                <br />
                <em>say something?</em>
              </strong>

            </div>

          </div>


          {/* RIGHT — WORLD / SYSTEM */}

          <div className="curio-v2-world">

            <div className="curio-v2-world-orbit orbit-outer">
              <span>WORLD</span>
            </div>

            <div className="curio-v2-world-orbit orbit-context">
              <span>CONTEXT</span>
            </div>

            <div className="curio-v2-world-orbit orbit-user">
              <span>YOU</span>
            </div>


            {/* SIGNALS */}

            <div className="curio-v2-signal signal-one">
              <i></i>
              <span>PLACE</span>
            </div>

            <div className="curio-v2-signal signal-two">
              <i></i>
              <span>TIME</span>
            </div>

            <div className="curio-v2-signal signal-three">
              <i></i>
              <span>INTEREST</span>
            </div>

            <div className="curio-v2-signal signal-four">
              <i></i>
              <span>ATTENTION</span>
            </div>
            <div className="curio-v2-found-mark found-mark-one">
  <span>✿</span>
</div>

<div className="curio-v2-found-mark found-mark-two">
  <span>⌁</span>
</div>

<div className="curio-v2-found-mark found-mark-three">
  <span>✦</span>
</div>


            {/* CURIO CORE */}

            <div className="curio-v2-core">

              <small>POSSIBILITY DETECTED</small>

              <strong>CURIO</strong>

              <span>
                worth
                <br />
                surfacing?
              </span>

            </div>


            {/* OUTPUT */}

            <div className="curio-v2-output">

              <span>SIGNAL</span>

              <i>·</i>

              <span>WAIT</span>

              <i>·</i>

              <span>SILENCE</span>

            </div>


            {/* HUMAN NOTE */}

            <div className="curio-v2-paper-note">
              <span>✦</span>
              <p>
                Sometimes the
                <br />
                intelligent response
                <br />
                is <em>nothing.</em>
              </p>
            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="curio-v2-hero-footer">

          <div>
            <span>PROJECT / 04</span>
            <span>CONCEPT + INTERACTION SYSTEM</span>
          </div>

          <a href="#curio-gap">
            01 / THE GAP ↓
          </a>

        </div>

      </section>

    </main>
  );
}

{/* =====================================================
    01 — THE GAP
===================================================== */}

<section
  className="curio-v2-section curio-v2-gap"
  id="curio-gap"
>

  <div className="curio-v2-section-label">
    <span>01</span>
    <span>THE GAP</span>
  </div>


  <div className="curio-v2-gap-intro">

    <span>EVERYDAY CURIOSITY</span>

    <h2>
      We notice more
      <br />
      than we <em>explore.</em>
    </h2>

    <p>
      Curiosity often begins before we have a question —
      with a place, object, sound or moment that briefly
      catches our attention.
    </p>

  </div>


  {/* CURIOSITY MOMENT */}

  <div className="curio-v2-moment">

    <div className="curio-v2-moment-step moment-notice">

      <span className="curio-v2-moment-number">01</span>

      <div className="curio-v2-moment-symbol">
        ✦
      </div>

      <small>NOTICE</small>

      <strong>
        Something catches
        <br />
        your attention.
      </strong>

    </div>


    <div className="curio-v2-moment-line">
      <span>curiosity begins</span>
    </div>


    <div className="curio-v2-moment-step moment-wonder">

      <span className="curio-v2-moment-number">02</span>

      <div className="curio-v2-moment-symbol">
        ?
      </div>

      <small>WONDER</small>

      <strong>
        A question almost
        <br />
        forms.
      </strong>

    </div>


    <div className="curio-v2-moment-line moment-line-fade">
      <span>but then...</span>
    </div>


    <div className="curio-v2-moment-step moment-pass">

      <span className="curio-v2-moment-number">03</span>

      <div className="curio-v2-moment-symbol">
        ·
      </div>

      <small>MOVE ON</small>

      <strong>
        The moment
        <br />
        passes.
      </strong>

    </div>

  </div>


  {/* INTERRUPTION */}

  <div className="curio-v2-gap-break">

    <span className="curio-v2-gap-break-note">
      not every curiosity becomes a search
    </span>

    <div className="curio-v2-gap-break-line">
      <i></i>
    </div>

  </div>


  {/* DESIGN OPPORTUNITY */}

  <div className="curio-v2-gap-question">

    <span>THE OPPORTUNITY</span>

    <p>
      What if technology could support the
      <em> moment before the search?</em>
    </p>

    <div className="curio-v2-gap-shift">

      <span>NOTICE</span>

      <i>→</i>

      <span>?</span>

      <i>→</i>

      <strong>CURIOSITY</strong>

    </div>

  </div>

</section>

{/* =====================================================
    01 — THE GAP
===================================================== */}

<section
  className="curio-v2-section curio-v2-gap"
  id="curio-gap"
>

  <div className="curio-v2-section-label">
    <span>01</span>
    <span>THE GAP</span>
  </div>


  <div className="curio-v2-gap-intro">

    <span>EVERYDAY CURIOSITY</span>

    <h2>
      We notice more
      <br />
      than we <em>explore.</em>
    </h2>

    <p>
      Curiosity often begins before we have a question —
      with a place, object, sound or moment that briefly
      catches our attention.
    </p>

  </div>


  {/* CURIOSITY MOMENT */}

  <div className="curio-v2-moment">

    <div className="curio-v2-moment-step moment-notice">

      <span className="curio-v2-moment-number">01</span>

      <div className="curio-v2-moment-symbol">
        ✦
      </div>

      <small>NOTICE</small>

      <strong>
        Something catches
        <br />
        your attention.
      </strong>

    </div>


    <div className="curio-v2-moment-line">
      <span>curiosity begins</span>
    </div>


    <div className="curio-v2-moment-step moment-wonder">

      <span className="curio-v2-moment-number">02</span>

      <div className="curio-v2-moment-symbol">
        ?
      </div>

      <small>WONDER</small>

      <strong>
        A question almost
        <br />
        forms.
      </strong>

    </div>


    <div className="curio-v2-moment-line moment-line-fade">
      <span>but then...</span>
    </div>


    <div className="curio-v2-moment-step moment-pass">

      <span className="curio-v2-moment-number">03</span>

      <div className="curio-v2-moment-symbol">
        ·
      </div>

      <small>MOVE ON</small>

      <strong>
        The moment
        <br />
        passes.
      </strong>

    </div>

  </div>


  {/* INTERRUPTION */}

  <div className="curio-v2-gap-break">

    <span className="curio-v2-gap-break-note">
      not every curiosity becomes a search
    </span>

    <div className="curio-v2-gap-break-line">
      <i></i>
    </div>

  </div>


  {/* DESIGN OPPORTUNITY */}

  <div className="curio-v2-gap-question">

    <span>THE OPPORTUNITY</span>

    <p>
      What if technology could support the
      <em> moment before the search?</em>
    </p>

    <div className="curio-v2-gap-shift">

      <span>NOTICE</span>

      <i>→</i>

      <span>?</span>

      <i>→</i>

      <strong>CURIOSITY</strong>

    </div>

  </div>

</section>