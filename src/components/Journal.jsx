import { useState } from 'react';
import { LESSONS } from '../data/lessons';

export default function Journal({ state, saveJournal, cur }) {
  const lesson = LESSONS[cur];
  const existing = state.journal?.[cur] || {};
  const [confidence, setConfidence] = useState(existing.confidence || 5);
  const [notes, setNotes] = useState(existing.notes || '');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    saveJournal(cur, {
      confidence,
      notes,
      title: lesson?.title,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  // All journal entries
  const entries = Object.entries(state.journal || {})
    .map(([idx, entry]) => ({ idx: Number(idx), ...entry }))
    .sort((a, b) => b.idx - a.idx);

  const confLabel = (c) => c >= 8 ? '🟢 Confident' : c >= 5 ? '🟡 Getting there' : '🔴 Needs review';
  const confColor = (c) => c >= 8 ? 'var(--green-text)' : c >= 5 ? 'var(--amber-text)' : 'var(--red-text)';

  return (
    <div style={{ animation: 'fadeUp .3s ease' }}>
      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>📓 Learning Journal</div>
      <div style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 24 }}>
        Reflect on what you learned — spaced repetition starts here.
      </div>

      {/* Current lesson entry */}
      <div className="jcard">
        <div className="jtitle">Today's Reflection</div>
        <div className="jsub">Lesson: {lesson?.title || 'Select a lesson first'}</div>

        <div className="jlbl">
          Confidence level: <span className="jval">{confidence}/10 — {confLabel(confidence)}</span>
        </div>
        <input
          type="range" min="1" max="10" value={confidence}
          className="jslider"
          onChange={e => setConfidence(Number(e.target.value))}
        />

        <div className="jlbl">What did you learn? What's still unclear?</div>
        <textarea
          className="jtextarea"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Write what you learned, what confused you, or what you want to review..."
        />

        <button className="jsave" onClick={handleSave}>
          {saved ? '✓ Saved!' : 'Save Entry'}
        </button>
      </div>

      {/* Past entries */}
      {entries.length > 0 && (
        <>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.09em', color: 'var(--text3)', margin: '28px 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
            Past Entries ({entries.length}) <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          {entries.map(entry => (
            <div className="jentry" key={entry.idx}>
              <div className="jentry-top">
                <div className="jentry-title">{LESSONS[entry.idx]?.title || `Lesson ${entry.idx}`}</div>
                <div className="jentry-conf" style={{ background: 'var(--surface2)', color: confColor(entry.confidence) }}>
                  {entry.confidence}/10
                </div>
              </div>
              <div className="jentry-date">{entry.date}</div>
              {entry.notes && <div className="jentry-notes">{entry.notes}</div>}
            </div>
          ))}
        </>
      )}

      {entries.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text3)', fontSize: 14 }}>
          No journal entries yet. Save your first reflection above!
        </div>
      )}
    </div>
  );
}
