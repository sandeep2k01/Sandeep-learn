import { useState } from 'react';
import ContentPanel from './ContentPanel';

const PHASE_COLORS = {
  phase0: '#0d6e5e', phase1: '#b8860b', phase2: '#1e4a8c',
  phase3: '#8c1a5a', phase4: '#1a6e3c', cap: '#c0392b',
};

const TRACK_COLORS = {
  htmlcss: '#1e4a8c', js: '#b8860b', dom: '#1a6e3c',
  react: '#1e4a8c', ts: '#8c1a5a', git: '#0d6e5e',
  portfolio: '#1a6e3c', project: '#c0392b',
};

function ProgressRing({ pct, size = 52, color = '#0d6e5e' }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth={4} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={4}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)' }} />
      </svg>
      <div className="progress-ring-text">{pct}%</div>
    </div>
  );
}

export default function PhaseSection({ phase, phaseNum, state, markDone, toggleTask, toggleRubric, onConfetti, totalLessons }) {
  const [activeLessonIdx, setActiveLessonIdx] = useState(null);

  const color = PHASE_COLORS[phase.key] || '#0d6e5e';
  const doneLessons = phase.lessons.filter(l => state.done?.[l.idx]).length;
  const pct = phase.lessons.length ? Math.round((doneLessons / phase.lessons.length) * 100) : 0;

  const isLocked = () => false; // All lessons unlocked

  function handleNext() {
    if (activeLessonIdx === null) return;
    const cur = phase.lessons.findIndex(l => l.idx === activeLessonIdx);
    if (cur < phase.lessons.length - 1) {
      setActiveLessonIdx(phase.lessons[cur + 1].idx);
    }
  }

  const activeLesson = activeLessonIdx !== null
    ? phase.lessons.find(l => l.idx === activeLessonIdx)
    : null;

  // Auto-select first unlocked lesson
  function handlePhaseEnter() {
    if (activeLessonIdx === null) {
      const first = phase.lessons.find(l => !isLocked(l));
      if (first) setActiveLessonIdx(first.idx);
    }
  }

  return (
    <section className="phase-section" id={`phase-${phase.key}`} onMouseEnter={handlePhaseEnter}>
      <div className="phase-inner">
        <div className="phase-progress-row" style={{ alignItems: 'flex-start', marginBottom: 0 }}>
          <div className="phase-header" style={{ marginBottom: 0, flex: 1 }}>
            <div className="phase-pill" style={{ background: color }}>PHASE {String(phaseNum).padStart(2, '0')}</div>
            <div className="phase-title">{phase.label}</div>
            <div className="phase-desc">
              {phase.lessons[0]?.phase?.split('—')[1]?.trim() || ''}
            </div>
            <div className="phase-meta">
              <div className="phase-meta-item">📚 {phase.lessons.length} lessons</div>
              <div className="phase-meta-item">✅ {doneLessons} done</div>
              <div className="phase-meta-item" style={{ gap: 3 }}>
                Difficulty:
                {[1, 2, 3, 4, 5].map(d => (
                  <div key={d} className={`diff-dot ${d <= phaseNum + 1 ? 'filled' : ''}`} />
                ))}
              </div>
            </div>
          </div>
          <ProgressRing pct={pct} color={color} size={46} />
        </div>

        <div className="phase-split">
          {/* LEFT: Lesson List */}
          <div className="lesson-list">
            {phase.lessons.map((lesson, i) => {
              const locked = isLocked(lesson);
              const done = !!state.done?.[lesson.idx];
              const active = activeLessonIdx === lesson.idx;
              const tc = TRACK_COLORS[lesson.track] || color;
              let cls = 'lesson-list-item';
              if (active) cls += ' active';
              if (done && !active) cls += ' done';
              if (locked) cls += ' locked';

              return (
                <div key={lesson.idx} className={cls}
                  onClick={() => !locked && setActiveLessonIdx(lesson.idx)}>
                  <div className="lesson-num">{String(phaseNum).padStart(1,'0')}.{i + 1}</div>
                  <div className="lesson-list-title">
                    {lesson.track === 'project' ? '🛠 ' : ''}{lesson.title}
                  </div>
                  {done && <span style={{ fontSize: 11, color: 'var(--teal)' }}>✓</span>}
                  {locked && <span style={{ fontSize: 10, color: 'var(--text3)' }}>🔒</span>}
                  {!locked && !done && <span className="lesson-list-arrow">▶</span>}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Interactive Content */}
          {activeLesson ? (
            <ContentPanel
              key={activeLesson.idx}
              lesson={activeLesson}
              lessonIdx={activeLesson.idx}
              state={state}
              markDone={markDone}
              toggleTask={toggleTask}
              toggleRubric={toggleRubric}
              onNext={handleNext}
              totalLessons={totalLessons}
              onConfetti={onConfetti}
            />
          ) : (
            <div className="content-empty">
              <div className="content-empty-icon">👈</div>
              <div className="content-empty-title">Select a lesson</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>Click any lesson from the list to begin</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
