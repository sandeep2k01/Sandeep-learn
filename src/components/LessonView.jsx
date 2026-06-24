import { useState, useEffect } from 'react';
import StepItem from './StepItem';

export default function LessonView({ lesson, lessonIdx, state, markDone, toggleTask, toggleRubric, onNext, totalLessons, onConfetti }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  // Reset on lesson change
  useEffect(() => {
    setActiveStep(0);
    setCompletedSteps({});
  }, [lessonIdx]);

  const isDone = !!state.done?.[lessonIdx];
  const allStepsDone = lesson.steps
    ? lesson.steps.every((_, i) => completedSteps[i] || lesson.steps[i].tag === 'explain')
    : true;

  function handleStepDone(stepIdx) {
    setCompletedSteps(prev => ({ ...prev, [stepIdx]: true }));
    // Auto-advance to next step
    const nextIdx = stepIdx + 1;
    if (nextIdx < (lesson.steps?.length || 0)) {
      setTimeout(() => setActiveStep(nextIdx), 300);
    }
  }

  function handleMarkComplete() {
    markDone(lessonIdx);
    onConfetti();
  }

  const tasksDone = lesson.tasks
    ? lesson.tasks.filter((_, i) => state.tasks?.[`${lessonIdx}_${i}`]).length
    : 0;

  return (
    <div key={lessonIdx} style={{ animation: 'fadeUp .3s ease' }}>
      {/* Header */}
      <div className="lesson-hdr">
        <div className="lesson-eyebrow">{lesson.phase}</div>
        <div className="lesson-title">{lesson.title}</div>
        <div className="lesson-desc">{lesson.desc}</div>
        <span className={`badge ${lesson.badge}`}>{lesson.badgeText}</span>
        {isDone && <span className="badge b-green">✓ Complete</span>}
      </div>

      {/* Steps */}
      {lesson.steps && lesson.steps.length > 0 && (
        <>
          <div className="sec-lbl">Learning Steps</div>
          {lesson.steps.map((step, i) => (
            <StepItem
              key={i}
              step={step}
              stepIdx={i}
              lessonIdx={lessonIdx}
              isActive={activeStep === i}
              isDone={!!completedSteps[i]}
              onActivate={() => setActiveStep(i)}
              onStepDone={handleStepDone}
            />
          ))}
        </>
      )}

      {/* React Connection */}
      {lesson.react && (
        <div className="react-box">
          <div className="react-lbl">⚛️ React Connection</div>
          <div className="react-text" dangerouslySetInnerHTML={{ __html: lesson.react }} />
        </div>
      )}

      {/* Key Notes */}
      {lesson.notes && lesson.notes.length > 0 && (
        <div className="notes-box">
          <div className="notes-hdr">
            <span className="notes-icon">📌</span>
            <div>
              <div className="notes-title">Key Notes</div>
            </div>
          </div>
          {lesson.notes.map((note, i) => (
            <div className="note-item" key={i}>
              <span>{note.icon}</span>
              <div className="note-text" dangerouslySetInnerHTML={{ __html: note.text }} />
            </div>
          ))}
        </div>
      )}

      {/* Tip */}
      {lesson.tip && (
        <div className="tip-box">
          <div className="tip-lbl">💡 Interview Tip</div>
          <div className="tip-text" dangerouslySetInnerHTML={{ __html: lesson.tip }} />
        </div>
      )}

      {/* Tasks */}
      {lesson.tasks && lesson.tasks.length > 0 && (
        <div className="tasks-sec">
          <div className="tasks-lbl">Practice Tasks ({tasksDone}/{lesson.tasks.length} done)</div>
          <div className="tasks-intro">
            Complete these in VS Code — hands-on practice is how skills stick.
          </div>
          {lesson.tasks.map((task, i) => {
            const key = `${lessonIdx}_${i}`;
            const checked = !!state.tasks?.[key];
            return (
              <div className={`trow ${checked ? 'tdone' : ''}`} key={i}>
                <div
                  className={`tcheck ${checked ? 'checked' : ''}`}
                  onClick={() => toggleTask(lessonIdx, i)}
                >
                  {checked ? '✓' : ''}
                </div>
                <div className="ttext">{task}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Rubric (for projects) */}
      {lesson.rubric && lesson.rubric.length > 0 && (
        <div className="rubric-box">
          <div className="rubric-title">🎯 Self-Assessment Rubric</div>
          <div className="rubric-sub">Check each one honestly before calling this done.</div>
          {lesson.rubric.map((item, i) => {
            const key = `${lessonIdx}_${i}`;
            const checked = !!state.rubric?.[key];
            return (
              <div className="rubric-row" key={i}>
                <div
                  className={`rubric-check ${checked ? 'checked' : ''}`}
                  onClick={() => toggleRubric(lessonIdx, i)}
                >
                  {checked ? '✓' : ''}
                </div>
                <div className="rubric-text">{item}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Complete / Next */}
      {!isDone && (
        <button className="nxt-btn" onClick={handleMarkComplete} style={{ display: 'block', marginTop: 20 }}>
          ✅ Mark Lesson Complete — Next: {lesson.next}
        </button>
      )}
      {isDone && lessonIdx < totalLessons - 1 && (
        <button className="nxt-btn" onClick={onNext} style={{ display: 'block', marginTop: 20 }}>
          ▶ Continue to Next Lesson
        </button>
      )}
      {isDone && lessonIdx === totalLessons - 1 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--green-text)', fontSize: 20, fontWeight: 800 }}>
          🎉 You completed the entire roadmap!
        </div>
      )}
    </div>
  );
}
