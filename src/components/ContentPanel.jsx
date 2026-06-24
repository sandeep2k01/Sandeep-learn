import { useState, useEffect } from 'react';
import LivePlayground from './LivePlayground';
import ConceptVisual from './ConceptVisual';
import { PRACTICAL_EXAMPLES } from '../data/practicalExamples';

const TAG_CLASS = {
  explain: 'tag-explain', question: 'tag-question',
  modify: 'tag-modify', fill: 'tag-fill', challenge: 'tag-challenge',
};

function ChatMsg({ who, text, code }) {
  return (
    <div className="msg">
      <div className={`av av-${who}`}>{who === 'm' ? 'M' : 'You'}</div>
      <div className={`bub b${who}`}>
        {code
          ? <div className="code-block" dangerouslySetInnerHTML={{ __html: code }} />
          : <span dangerouslySetInnerHTML={{ __html: text }} />}
      </div>
    </div>
  );
}

function StepItem({ step, stepIdx, isDone, isActive, onActivate, onStepDone }) {
  const [answer, setAnswer] = useState('');
  const [extras, setExtras] = useState([]);
  const [hint, setHint] = useState(false);
  const [result, setResult] = useState(null);

  const needsAnswer = ['question', 'modify', 'fill', 'challenge'].includes(step.tag);

  function check() {
    if (!answer.trim()) return;
    const lower = answer.toLowerCase();
    const ok = step.words?.some(w => lower.includes(w.toLowerCase()));
    if (ok) {
      setResult('good');
      setExtras([{ who: 'y', text: answer }, { who: 'm', text: step.good, cls: 'bsuccess' }]);
      onStepDone(stepIdx);
    } else {
      setExtras([{ who: 'y', text: answer }]);
      setHint(true);
    }
  }

  const numCls = `snum ${isDone ? 'sn-done' : isActive ? 'sn-active' : 'sn-wait'}`;
  const stepCls = `step ${isDone ? 's-done' : isActive ? 's-active' : ''}`;

  return (
    <div className={stepCls}>
      <div className="step-hd" onClick={onActivate}>
        <div className={numCls}>{isDone ? '✓' : stepIdx + 1}</div>
        <div className="stitle">{step.title}</div>
        <span className={`stag ${TAG_CLASS[step.tag] || 'tag-explain'}`}>{step.tag}</span>
      </div>
      {(isActive || isDone) && (
        <div className="sbody">
          <div className="chat">
            {step.chat?.map((m, i) => <ChatMsg key={i} who={m.who} text={m.text} code={m.code} />)}
            {extras.map((m, i) => (
              <div key={`e${i}`} className="msg">
                <div className={`av av-${m.who}`}>{m.who === 'm' ? 'M' : 'You'}</div>
                <div className={`bub ${m.cls || (m.who === 'y' ? 'by' : 'bm')}`}>
                  <span dangerouslySetInnerHTML={{ __html: m.text }} />
                </div>
              </div>
            ))}
            {hint && step.hint && (
              <div className="msg">
                <div className="av av-m">M</div>
                <div className="bub bhint">💡 {step.hint}</div>
              </div>
            )}
          </div>
          {needsAnswer && !isDone && result !== 'good' && (
            <>
              <div className="irow">
                <input className="ainput" value={answer} onChange={e => setAnswer(e.target.value)}
                  placeholder={step.ph || 'Your answer...'} onKeyDown={e => e.key === 'Enter' && check()} />
                <button className="sbtn" onClick={check} disabled={!answer.trim()}>Check →</button>
              </div>
              {!hint && <span className="help-link" onClick={() => setHint(true)}>Need a hint?</span>}
            </>
          )}
          {step.tag === 'explain' && !isDone && (
            <button className="sbtn outline" style={{ marginTop: 10, width: '100%' }} onClick={() => onStepDone(stepIdx)}>
              Got it ✓
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ContentPanel({ lesson, lessonIdx, state, markDone, toggleTask, toggleRubric, onNext, totalLessons, onConfetti }) {
  const [activeStep, setActiveStep] = useState(0);
  const [doneSteps, setDoneSteps] = useState({});

  useEffect(() => { setActiveStep(0); setDoneSteps({}); }, [lessonIdx]);

  const isDone = !!state.done?.[lessonIdx];

  function handleStepDone(i) {
    setDoneSteps(prev => ({ ...prev, [i]: true }));
    const next = i + 1;
    if (next < (lesson.steps?.length || 0)) setTimeout(() => setActiveStep(next), 300);
  }

  const tasksDone = lesson.tasks?.filter((_, i) => state.tasks?.[`${lessonIdx}_${i}`]).length || 0;

  if (!lesson) return (
    <div className="content-empty">
      <div className="content-empty-icon">👈</div>
      <div className="content-empty-title">Select a lesson from the list</div>
    </div>
  );

  return (
    <div className="content-panel">
      <div className="lc-eyebrow">{lesson.phase}</div>
      <div className="lc-title">{lesson.title}</div>
      <div className="lc-desc">{lesson.desc}</div>
      <span className={`lc-badge ${lesson.badge}`}>{lesson.badgeText}</span>
      {isDone && <span className="lc-badge b-green">✓ Complete</span>}

      {lesson.steps?.length > 0 && (
        <>
          <div className="sec-lbl">Learning Steps</div>
          {lesson.steps.map((step, i) => (
            <StepItem key={i} step={step} stepIdx={i}
              isDone={!!doneSteps[i]} isActive={activeStep === i}
              onActivate={() => setActiveStep(i)} onStepDone={handleStepDone} />
          ))}
        </>
      )}

      {lesson.react && (
        <div className="react-box">
          <div className="react-lbl">⚛️ React Connection</div>
          <div className="react-text" dangerouslySetInnerHTML={{ __html: lesson.react }} />
        </div>
      )}

      {lesson.notes?.length > 0 && (
        <div className="notes-box">
          <div className="notes-title">📌 Key Notes</div>
          {lesson.notes.map((n, i) => (
            <div className="note-item" key={i}>
              <span>{n.icon}</span>
              <div className="note-text" dangerouslySetInnerHTML={{ __html: n.text }} />
            </div>
          ))}
        </div>
      )}

      {lesson.tip && (
        <div className="tip-box">
          <div className="tip-lbl">💡 Interview Tip</div>
          <div className="tip-text" dangerouslySetInnerHTML={{ __html: lesson.tip }} />
        </div>
      )}

      {/* 🎯 Visual concept diagram */}
      <ConceptVisual lessonTitle={lesson.title} />

      {/* ⚡ Live code playground */}
      {PRACTICAL_EXAMPLES[lesson.title] && (
        <>
          <div className="sec-lbl" style={{ marginTop: 20 }}>⚡ Live Practice</div>
          <LivePlayground
            key={lesson.title}
            code={PRACTICAL_EXAMPLES[lesson.title].code}
            lang={PRACTICAL_EXAMPLES[lesson.title].lang}
            title={PRACTICAL_EXAMPLES[lesson.title].title}
          />
        </>
      )}

      {lesson.tasks?.length > 0 && (
        <div className="tasks-sec">
          <div className="tasks-title">Practice Tasks ({tasksDone}/{lesson.tasks.length})</div>
          <div className="tasks-intro">Complete in VS Code — hands-on practice is how it sticks.</div>
          {lesson.tasks.map((task, i) => {
            const checked = !!state.tasks?.[`${lessonIdx}_${i}`];
            return (
              <div className={`trow ${checked ? 'tdone' : ''}`} key={i}>
                <div className={`tcheck ${checked ? 'checked' : ''}`} onClick={() => toggleTask(lessonIdx, i)}>
                  {checked ? '✓' : ''}
                </div>
                <div className="ttext">{task}</div>
              </div>
            );
          })}
        </div>
      )}

      {lesson.rubric?.length > 0 && (
        <div className="rubric-box">
          <div className="rubric-title">🎯 Self-Assessment Rubric</div>
          <div className="rubric-sub">Check each honestly before calling this done.</div>
          {lesson.rubric.map((item, i) => {
            const checked = !!state.rubric?.[`${lessonIdx}_${i}`];
            return (
              <div className="rubric-row" key={i}>
                <div className={`rubric-check ${checked ? 'checked' : ''}`} onClick={() => toggleRubric(lessonIdx, i)}>
                  {checked ? '✓' : ''}
                </div>
                <div className="rubric-text">{item}</div>
              </div>
            );
          })}
        </div>
      )}

      {!isDone && (
        <button className="complete-btn" onClick={() => { markDone(lessonIdx); onConfetti(); }}>
          ✅ Mark Complete — Next: {lesson.next}
        </button>
      )}
      {isDone && lessonIdx < totalLessons - 1 && (
        <button className="next-btn" onClick={onNext}>▶ Continue to Next Lesson</button>
      )}
      {isDone && lessonIdx === totalLessons - 1 && (
        <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--teal)', fontWeight: 800, fontSize: 18 }}>
          🎉 Entire roadmap complete!
        </div>
      )}
    </div>
  );
}
