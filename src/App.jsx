import { useState, useEffect } from 'react';
import { useProgress } from './hooks/useProgress';
import { LESSONS } from './data/lessons';
import Hero from './components/Hero';
import PhaseSection from './components/PhaseSection';
import PhaseDock, { getPhases } from './components/PhaseDock';
import Confetti from './components/Confetti';

export default function App() {
  const { state, theme, toggleTheme, markDone, toggleTask, toggleRubric, doneCount } = useProgress();
  const [confetti, setConfetti] = useState(0);
  const [currentPhaseKey, setCurrentPhaseKey] = useState('phase0');

  const phases = getPhases();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Track which phase is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id.replace('phase-', '');
            setCurrentPhaseKey(id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    phases.forEach(p => {
      const el = document.getElementById(`phase-${p.key}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollToPhases() {
    const el = document.getElementById(`phase-${phases[0]?.key}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToCurrent() {
    // Find first incomplete phase
    const p = phases.find(ph => ph.lessons.some(l => !state.done?.[l.idx]));
    if (p) {
      const el = document.getElementById(`phase-${p.key}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToPhases();
    }
  }

  return (
    <>
      <Confetti trigger={confetti} />

      {/* Top Navigation Bar */}
      <nav className="topbar">
        <div className="topbar-brand">
          <div className="topbar-logo">🎯</div>
          <div className="topbar-title">Sandeep Learns</div>
        </div>
        <div className="topbar-right">
          <span className="topbar-pill" style={{ fontSize: 11, padding: '4px 12px' }}>
            {doneCount}/{LESSONS.length} done
          </span>
          <a className="topbar-pill" href="#hero">Home</a>
          <a className="topbar-pill" onClick={scrollToPhases} href="#">Roadmap</a>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <Hero
        onExplore={scrollToPhases}
        onTrack={scrollToCurrent}
        doneCount={doneCount}
        totalLessons={LESSONS.length}
      />

      {/* Phase Sections */}
      <div className="phases-container">
        {phases.map((phase, i) => (
          <PhaseSection
            key={phase.key}
            phase={phase}
            phaseNum={i}
            state={state}
            markDone={markDone}
            toggleTask={toggleTask}
            toggleRubric={toggleRubric}
            onConfetti={() => setConfetti(c => c + 1)}
            totalLessons={LESSONS.length}
          />
        ))}
      </div>

      {/* Bottom Phase Dock */}
      <PhaseDock phases={phases} currentPhaseKey={currentPhaseKey} state={state} />
    </>
  );
}
