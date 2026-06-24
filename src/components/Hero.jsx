export default function Hero({ onExplore, onTrack, doneCount, totalLessons }) {
  const pct = totalLessons ? Math.round((doneCount / totalLessons) * 100) : 0;

  return (
    <section className="hero" id="hero">
      <div className="hero-eyebrow">
        <span>🎯</span>
        Frontend Developer Path · {totalLessons} Lessons · 4 Phases + Capstone
      </div>

      <h1 className="hero-title">
        The only roadmap you need<br />
        to become a <em>Frontend React Dev</em>
      </h1>

      <p className="hero-sub">
        A structured, hands-on journey — from HTML basics to React + TypeScript.
        Every lesson has interactive steps, real code, and interview prep built in.
        Built specifically for <strong>Sandeep.</strong>
      </p>

      <div className="hero-actions">
        <button className="btn-primary" onClick={onExplore}>
          EXPLORE THE ROADMAP ↓
        </button>
        {doneCount > 0 && (
          <button className="btn-secondary" onClick={onTrack}>
            Continue Learning ({pct}% done)
          </button>
        )}
        {doneCount === 0 && (
          <button className="btn-secondary" onClick={onExplore}>
            START TRACKING PROGRESS
          </button>
        )}
      </div>

      <div className="hero-stats">
        <div>
          <div className="hero-stat-num">{totalLessons}</div>
          <div className="hero-stat-lbl">Total Lessons</div>
        </div>
        <div>
          <div className="hero-stat-num">4+</div>
          <div className="hero-stat-lbl">Phases</div>
        </div>
        <div>
          <div className="hero-stat-num">{doneCount}</div>
          <div className="hero-stat-lbl">Completed</div>
        </div>
        <div>
          <div className="hero-stat-num">{pct}%</div>
          <div className="hero-stat-lbl">Progress</div>
        </div>
      </div>
    </section>
  );
}
