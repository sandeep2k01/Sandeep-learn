import { LESSONS } from '../data/lessons';

const TRACKS = ['htmlcss', 'js', 'dom', 'react', 'ts', 'git', 'portfolio', 'project'];
const TRACK_LABELS = { htmlcss: 'HTML/CSS', js: 'JavaScript', dom: 'DOM', react: 'React', ts: 'TypeScript', git: 'Git/Deploy', portfolio: 'Career', project: 'Projects' };
const TRACK_COLORS = { htmlcss: 'var(--blue-text)', js: 'var(--amber-text)', dom: 'var(--green-text)', react: 'var(--accent-text)', ts: 'var(--red-text)', git: 'var(--pink-text)', portfolio: 'var(--green-text)', project: 'var(--pink-text)' };

export default function Dashboard({ state, doneCount, setCur, setView }) {
  const total = LESSONS.length;
  const pct = Math.round((doneCount / total) * 100);

  // Per-track stats
  const trackStats = TRACKS.map(track => {
    const lessons = LESSONS.map((l, i) => ({ l, i })).filter(({ l }) => l.track === track);
    const done = lessons.filter(({ i }) => state.done?.[i]).length;
    return { track, label: TRACK_LABELS[track], total: lessons.length, done, color: TRACK_COLORS[track] };
  }).filter(t => t.total > 0);

  // Recent completions
  const recent = Object.keys(state.done || {})
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, 5);

  return (
    <div style={{ animation: 'fadeUp .3s ease' }}>
      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>📊 Your Dashboard</div>
      <div style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 24 }}>Track your progress across every phase</div>

      {/* Big stats */}
      <div className="dash-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginBottom: 20 }}>
        <div className="dash-big">
          <div className="dash-bignum">{doneCount}</div>
          <div className="dash-bigsub">Lessons Done</div>
        </div>
        <div className="dash-big">
          <div className="dash-bignum">{pct}%</div>
          <div className="dash-bigsub">Complete</div>
        </div>
        <div className="dash-big">
          <div className="dash-bignum">{total - doneCount}</div>
          <div className="dash-bigsub">Remaining</div>
        </div>
      </div>

      {/* Overall bar */}
      <div className="dash-card" style={{ marginBottom: 20 }}>
        <div className="dash-lbl">Overall Progress <span className="dash-pct">{pct}%</span></div>
        <div className="dash-track"><div className="dash-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      {/* Per-track bars */}
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.09em', color: 'var(--text3)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        By Track <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>
      <div className="dash-grid">
        {trackStats.map(t => (
          <div className="dash-card" key={t.track}>
            <div className="dash-lbl">
              <span style={{ color: t.color }}>{t.label}</span>
              <span className="dash-pct">{t.done}/{t.total}</span>
            </div>
            <div className="dash-track">
              <div className="dash-fill" style={{ width: `${Math.round((t.done / t.total) * 100)}%`, background: t.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent completions */}
      {recent.length > 0 && (
        <>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.09em', color: 'var(--text3)', margin: '24px 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            Recently Completed <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          {recent.map(i => (
            <div
              key={i}
              className="jentry"
              style={{ cursor: 'pointer', marginBottom: 8 }}
              onClick={() => { setCur(i); setView('lesson'); }}
            >
              <div className="jentry-top">
                <div className="jentry-title">✓ {LESSONS[i]?.title}</div>
                <span className={`badge ${LESSONS[i]?.badge || 'b-green'}`} style={{ fontSize: 10 }}>{LESSONS[i]?.phase?.split('—')[0].trim()}</span>
              </div>
              <div className="jentry-date" style={{ fontSize: 12, color: 'var(--text3)' }}>{LESSONS[i]?.desc?.slice(0, 80)}...</div>
            </div>
          ))}
        </>
      )}

      {doneCount === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text3)' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚀</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text2)', marginBottom: 8 }}>Ready to start?</div>
          <div style={{ fontSize: 14 }}>Complete your first lesson to see progress here</div>
          <button className="sbtn" style={{ marginTop: 20 }} onClick={() => { setCur(0); setView('lesson'); }}>
            Start Learning →
          </button>
        </div>
      )}
    </div>
  );
}
