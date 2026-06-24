import { useState } from 'react';

const TAG_CLASS = {
  explain: 'tag-explain',
  question: 'tag-question',
  modify: 'tag-modify',
  fill: 'tag-fill',
  challenge: 'tag-challenge',
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

export default function StepItem({ step, stepIdx, lessonIdx, isActive, isDone, onActivate, stepState, onStepDone }) {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null); // null | 'good' | 'hint'
  const [showHint, setShowHint] = useState(false);
  const [extraMsgs, setExtraMsgs] = useState([]);

  const needsAnswer = ['question', 'modify', 'fill', 'challenge'].includes(step.tag);

  function checkAnswer() {
    if (!answer.trim()) return;
    const lower = answer.toLowerCase();
    const matched = step.words && step.words.some(w => lower.includes(w.toLowerCase()));
    if (matched) {
      setResult('good');
      setExtraMsgs([{ who: 'y', text: answer }, { who: 'm', text: step.good, cls: 'bsuccess' }]);
      onStepDone(stepIdx);
    } else {
      setResult('hint');
      setExtraMsgs([{ who: 'y', text: answer }]);
      setShowHint(true);
    }
  }

  const numCls = isDone ? 'snum sn-done' : isActive ? 'snum sn-active' : 'snum sn-wait';
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
            {step.chat && step.chat.map((m, i) => (
              <ChatMsg key={i} who={m.who} text={m.text} code={m.code} />
            ))}
            {extraMsgs.map((m, i) => (
              <div key={`extra-${i}`} className="msg">
                <div className={`av av-${m.who}`}>{m.who === 'm' ? 'M' : 'You'}</div>
                <div className={`bub ${m.cls || (m.who === 'y' ? 'by' : 'bm')}`}>
                  <span dangerouslySetInnerHTML={{ __html: m.text }} />
                </div>
              </div>
            ))}
            {showHint && step.hint && (
              <div className="msg">
                <div className="av av-m">M</div>
                <div className="bub bhint">💡 {step.hint}</div>
              </div>
            )}
          </div>

          {needsAnswer && !isDone && result !== 'good' && (
            <>
              <div className="irow">
                <input
                  className="ainput"
                  value={answer}
                  onChange={e => setAnswer(e.target.value)}
                  placeholder={step.ph || 'Your answer...'}
                  onKeyDown={e => e.key === 'Enter' && checkAnswer()}
                />
                <button className="sbtn" onClick={checkAnswer} disabled={!answer.trim()}>
                  Check →
                </button>
              </div>
              {!showHint && (
                <span className="help-link" onClick={() => setShowHint(true)}>
                  Need a hint?
                </span>
              )}
            </>
          )}

          {step.tag === 'explain' && !isDone && (
            <button className="sbtn" style={{ marginTop: 10, width: '100%' }} onClick={() => onStepDone(stepIdx)}>
              Got it ✓
            </button>
          )}
        </div>
      )}
    </div>
  );
}
