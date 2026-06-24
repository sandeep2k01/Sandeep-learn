import { LESSONS } from '../data/lessons';

const PHASE_COLORS = {
  'Phase 0': 'b-blue',
  'Phase 1': 'b-green',
  'Phase 2': 'b-amber',
  'Phase 3': 'b-red',
  'Phase 4': 'b-pink',
  'Capstone': 'b-pink',
};

function getPhaseKey(phase) {
  for (const key of Object.keys(PHASE_COLORS)) {
    if (phase.startsWith(key)) return key;
  }
  return 'Phase 0';
}

export default function Sidebar({ cur, setCur, state, doneCount, view, setView, theme, toggleTheme }) {
  const total = LESSONS.length;
  const pct = Math.round((doneCount / total) * 100);

  // Group lessons by phase
  const phases = [];
  let lastPhase = null;
  LESSONS.forEach((lesson, idx) => {
    if (lesson.phase !== lastPhase) {
      phases.push({ label: lesson.phase, items: [] });
      lastPhase = lesson.phase;
    }
    phases[phases.length - 1].items.push({ lesson, idx });
  });

  const isLocked = (idx) => idx > (state.unlocked ?? 0);
  const isDone = (idx) => !!state.done?.[idx];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-icon">🎯</div>
          <div>
            <div className="brand-name">Sandeep Learns</div>
            <div className="brand-goal">Frontend → React Dev</div>
          </div>
        </div>
        <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="topnav">
        <div className={`tnbtn ${view === 'lesson' ? 'active' : ''}`} onClick={() => setView('lesson')}>📚 Learn</div>
        <div className={`tnbtn ${view === 'dash' ? 'active' : ''}`} onClick={() => setView('dash')}>📊 Dash</div>
        <div className={`tnbtn ${view === 'journal' ? 'active' : ''}`} onClick={() => setView('journal')}>📓 Journal</div>
      </div>

      <div id="navlist">
        {phases.map(({ label, items }) => (
          <div className="phase-block" key={label}>
            <div className="phase-lbl">
              <span>{label}</span>
              <div className="phase-lbl-bar" />
            </div>
            {items.map(({ lesson, idx }) => {
              const locked = isLocked(idx);
              const done = isDone(idx);
              const active = cur === idx && view === 'lesson';
              let cls = 'nav-item';
              if (active) cls += ' active';
              if (locked) cls += ' locked';
              if (done && !active) cls += ' done-item';
              if (lesson.track === 'project') cls += ' is-project';

              let dotCls = 'ndot';
              if (done) dotCls += ' done';
              else if (active) dotCls += ' cur';

              return (
                <div
                  key={idx}
                  className={cls}
                  onClick={() => { if (!locked) { setCur(idx); setView('lesson'); } }}
                >
                  <div className={dotCls} />
                  <div className="nav-text">{lesson.track === 'project' ? '🛠 ' : ''}{lesson.title}</div>
                  {locked && <span style={{ fontSize: 10, color: 'var(--text3)' }}>🔒</span>}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sidebar-foot">
        <div className="prog-row">
          <span>Overall progress</span>
          <span id="pct-lbl">{pct}%</span>
        </div>
        <div className="prog-track">
          <div className="prog-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="streak">{doneCount} / {total} lessons complete</div>
      </div>
    </div>
  );
}
