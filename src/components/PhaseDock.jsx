import { LESSONS } from '../data/lessons';

// Group lessons into phases
const PHASE_DEFS = [
  { key: 'phase0', label: 'HTML & CSS', shortLabel: '00', match: 'Phase 0' },
  { key: 'phase1', label: 'JavaScript', shortLabel: '01', match: 'Phase 1' },
  { key: 'phase2', label: 'React',      shortLabel: '02', match: 'Phase 2' },
  { key: 'phase3', label: 'TypeScript', shortLabel: '03', match: 'Phase 3' },
  { key: 'phase4', label: 'Job Ready',  shortLabel: '04', match: 'Phase 4' },
  { key: 'cap',    label: 'Capstone',   shortLabel: 'CAP', match: 'Capstone' },
];

export function getPhases() {
  return PHASE_DEFS.map(def => {
    const lessons = LESSONS
      .map((l, idx) => ({ ...l, idx }))
      .filter(l => l.phase.includes(def.match));
    return { ...def, lessons };
  }).filter(p => p.lessons.length > 0);
}

export default function PhaseDock({ phases, currentPhaseKey, state }) {
  function getPhaseProgress(phase) {
    const done = phase.lessons.filter(l => state.done?.[l.idx]).length;
    return { done, total: phase.lessons.length, pct: phase.lessons.length ? Math.round((done / phase.lessons.length) * 100) : 0 };
  }

  function scrollToPhase(key) {
    const el = document.getElementById(`phase-${key}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="phase-dock">
      {phases.map((phase, i) => {
        const { done, total, pct } = getPhaseProgress(phase);
        const isCurrent = phase.key === currentPhaseKey;
        const isDone = done === total && total > 0;
        return (
          <div key={phase.key} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <div className={`dock-line ${isDone ? 'done' : ''}`} />}
            <div
              className={`dock-node ${isCurrent ? 'current' : ''} ${isDone ? 'done-phase' : ''}`}
              onClick={() => scrollToPhase(phase.key)}
              title={phase.label}
            >
              <div className="dock-tooltip">{phase.label}</div>
              {isDone ? '✓' : phase.shortLabel}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { PHASE_DEFS };
