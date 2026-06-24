import { useState, useEffect } from 'react';

const VS = `
.vis-wrap{background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:20px;margin-top:16px;overflow:hidden}
.vis-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);margin-bottom:16px;display:flex;align-items:center;gap:6px}
.vis-box{display:flex;align-items:center;justify-content:center;padding:12px;border-radius:8px;font-size:12px;font-weight:700;transition:all .3s;cursor:default}
.vis-arrow{font-size:18px;color:var(--text3);margin:0 4px}
.vis-label{font-size:10px;text-align:center;color:var(--text3);margin-top:5px}
`;

/* ── Box Model ── */
function BoxModel() {
  const [hover, setHover] = useState(null);
  const layers = [
    { label: 'margin', color: '#f97316', bg: 'rgba(249,115,22,.15)', desc: 'Space OUTSIDE the border — pushes other elements away' },
    { label: 'border', color: '#a855f7', bg: 'rgba(168,85,247,.15)', desc: 'The visible edge of the element (set with border: 1px solid)' },
    { label: 'padding', color: '#3b82f6', bg: 'rgba(59,130,246,.15)', desc: 'Space INSIDE the border — between content and border' },
    { label: 'content', color: '#10b981', bg: 'rgba(16,185,129,.2)', desc: 'Your actual text / image / child elements live here' },
  ];
  return (
    <div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
        {layers.map((l, i) => (
          <div key={l.label}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              position: i === 0 ? 'relative' : 'absolute',
              width: i === 0 ? '100%' : undefined,
              inset: i > 0 ? `${(i) * 22}px` : undefined,
              background: hover === i ? l.bg : hover === null ? l.bg : 'transparent',
              border: `2px ${i === 1 ? 'solid' : 'dashed'} ${l.color}`,
              borderRadius: 8 - i * 1.5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 200 - i * 44,
              transition: 'background .2s',
              cursor: 'pointer',
            }}
          >
            {i === 3 && (
              <div style={{ textAlign: 'center', color: '#10b981', fontWeight: 700, fontSize: 13 }}>
                content<br />
                <span style={{ fontSize: 11, opacity: .7 }}>width × height</span>
              </div>
            )}
            <div style={{
              position: 'absolute', top: 4, left: 8,
              fontSize: 10, fontWeight: 800, color: l.color,
              textTransform: 'uppercase', letterSpacing: '.06em',
            }}>{l.label}</div>
          </div>
        ))}
      </div>
      {hover !== null && (
        <div style={{ marginTop: 12, padding: '8px 14px', background: layers[hover].bg, border: `1px solid ${layers[hover].color}30`, borderRadius: 8, fontSize: 12.5, color: 'var(--text2)', lineHeight: 1.6 }}>
          <strong style={{ color: layers[hover].color }}>{layers[hover].label}:</strong> {layers[hover].desc}
        </div>
      )}
      {hover === null && <div style={{ marginTop: 12, fontSize: 12, color: 'var(--text3)', textAlign: 'center' }}>Hover over each layer to learn what it does</div>}
    </div>
  );
}

/* ── Flexbox Visual ── */
function FlexVisual() {
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('center');
  const [dir, setDir] = useState('row');
  const items = ['A', 'B', 'C'];
  return (
    <div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        {[['justify', justify, setJustify, ['flex-start','center','flex-end','space-between','space-around']],
          ['align', align, setAlign, ['flex-start','center','flex-end','stretch']],
          ['direction', dir, setDir, ['row','column']]
        ].map(([label, val, setter, opts]) => (
          <div key={label}>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</div>
            <select value={val} onChange={e => setter(e.target.value)}
              style={{ padding: '4px 8px', fontSize: 12, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text)', cursor: 'pointer' }}>
              {opts.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: dir, justifyContent: justify, alignItems: align, gap: 10, background: 'var(--code-bg)', border: '2px dashed #3a3a5a', borderRadius: 10, minHeight: 100, padding: 16, transition: 'all .3s' }}>
        {items.map((item, i) => (
          <div key={i} style={{ width: 48, height: i === 1 ? 56 : 44, background: ['#7c6fff','#4ade80','#f472b6'][i], borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, color: '#fff', transition: 'all .3s', flexShrink: 0 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, background: '#12121c', borderRadius: 8, padding: '8px 12px', fontFamily: 'monospace', fontSize: 12, color: '#cdd6f4' }}>
        .container {'{'} display: flex; flex-direction: {dir}; justify-content: {justify}; align-items: {align}; {'}'}
      </div>
    </div>
  );
}

/* ── Closure Memory ── */
function ClosureVisual() {
  const [count, setCount] = useState(0);
  const [calls, setCalls] = useState([]);
  function increment() {
    const next = count + 1;
    setCount(next);
    setCalls(prev => [...prev.slice(-4), `counter() → ${next}`]);
  }
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ background: '#0a0a18', border: '2px solid #3b82f6', borderRadius: 10, padding: 14 }}>
          <div style={{ fontSize: 10, color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>makeCounter() scope</div>
          <div style={{ fontFamily: 'monospace', fontSize: 12.5, color: '#cdd6f4', lineHeight: 1.8 }}>
            <span style={{ color: '#cba6f7' }}>let</span> <span style={{ color: '#89b4fa' }}>count</span> = <span style={{ color: '#fab387', fontWeight: 800, fontSize: 15 }}>{count}</span><br />
            <span style={{ color: '#585b70', fontSize: 11 }}>// 👆 remembered in closure</span>
          </div>
        </div>
        <div style={{ background: '#0a0a18', border: '2px solid #a855f7', borderRadius: 10, padding: 14 }}>
          <div style={{ fontSize: 10, color: '#c084fc', fontWeight: 700, textTransform: 'uppercase', marginBottom: 10 }}>inner function</div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#cdd6f4', lineHeight: 1.8 }}>
            <span style={{ color: '#cba6f7' }}>return</span> () {'=> {'}<br />
            &nbsp;&nbsp;count++;<br />
            &nbsp;&nbsp;<span style={{ color: '#cba6f7' }}>return</span> count;<br />
            {'}'}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
        <button onClick={increment} style={{ padding: '8px 20px', background: '#7c6fff', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
          Call counter()
        </button>
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--text2)' }}>
          {calls.length === 0 ? 'Click to call the closure' : calls[calls.length - 1]}
        </div>
      </div>
      {calls.length > 0 && (
        <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {calls.map((c, i) => <span key={i} style={{ padding: '2px 8px', background: '#1e1e30', borderRadius: 4, fontSize: 11, color: '#4ade80', fontFamily: 'monospace' }}>{c}</span>)}
        </div>
      )}
    </div>
  );
}

/* ── useState Re-render Flow ── */
function UseStateVisual() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const steps = [
    { label: 'User clicks button', color: '#f472b6', icon: '👆' },
    { label: 'setCount(count + 1) called', color: '#fbbf24', icon: '📢' },
    { label: 'React schedules re-render', color: '#7c6fff', icon: '⚛️' },
    { label: 'Component re-runs, count = ' + (count + 1 > 5 ? 1 : count + 1), color: '#4ade80', icon: '🔄' },
    { label: 'DOM updated — UI shows new value', color: '#60a5fa', icon: '✨' },
  ];
  function runFlow() {
    setStep(0);
    setCount(c => c + 1 > 5 ? 1 : c + 1);
    [0, 1, 2, 3, 4].forEach(i => setTimeout(() => setStep(i), i * 400));
  }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexWrap: 'wrap', justifyContent: 'center', minHeight: 80, padding: '8px 0' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', opacity: step >= i ? 1 : .25, transition: 'opacity .3s', transform: step === i ? 'scale(1.1)' : 'scale(1)' }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: s.color, maxWidth: 80, textAlign: 'center', marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
            </div>
            {i < 4 && <div style={{ width: 20, height: 2, background: step > i ? s.color : 'var(--border)', margin: '0 4px', transition: 'background .3s', marginBottom: 18 }} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, justifyContent: 'center' }}>
        <button onClick={runFlow} style={{ padding: '8px 20px', background: '#7c6fff', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
          Trigger setState
        </button>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', fontFamily: 'monospace' }}>
          count = <span style={{ color: '#4ade80' }}>{count}</span>
        </div>
      </div>
    </div>
  );
}

/* ── DOM Tree ── */
function DOMTree() {
  const [selected, setSelected] = useState(null);
  const nodes = [
    { id: 'html', label: '<html>', x: 50, y: 10, desc: 'Root element — parent of everything on the page' },
    { id: 'head', label: '<head>', x: 25, y: 32, desc: 'Metadata: title, CSS links, scripts — not visible on page' },
    { id: 'body', label: '<body>', x: 75, y: 32, desc: 'Everything visible on the page lives here' },
    { id: 'title', label: '<title>', x: 12, y: 56, desc: 'The text shown in the browser tab' },
    { id: 'nav', label: '<nav>', x: 55, y: 56, desc: 'Semantic navigation landmark' },
    { id: 'main', label: '<main>', x: 88, y: 56, desc: 'The primary content of the page' },
    { id: 'h1', label: '<h1>', x: 72, y: 78, desc: 'Top-level heading — only one per page for SEO' },
    { id: 'p', label: '<p>', x: 96, y: 78, desc: 'Paragraph of text content' },
  ];
  const edges = [['html','head'],['html','body'],['head','title'],['body','nav'],['body','main'],['main','h1'],['main','p']];
  const find = id => nodes.find(n => n.id === id);
  return (
    <div>
      <svg viewBox="0 0 100 92" style={{ width: '100%', maxHeight: 200 }}>
        {edges.map(([a, b], i) => {
          const na = find(a), nb = find(b);
          return <line key={i} x1={na.x} y1={na.y + 3} x2={nb.x} y2={nb.y - 3} stroke="var(--border2)" strokeWidth=".8" />;
        })}
        {nodes.map(n => (
          <g key={n.id} style={{ cursor: 'pointer' }} onClick={() => setSelected(n)}>
            <rect x={n.x - 8} y={n.y - 4} width={16} height={8} rx={2}
              fill={selected?.id === n.id ? '#7c6fff' : 'var(--surface2)'}
              stroke={selected?.id === n.id ? '#7c6fff' : 'var(--border)'}
              strokeWidth=".5" />
            <text x={n.x} y={n.y + 1.5} textAnchor="middle" fontSize="3" fontFamily="monospace"
              fill={selected?.id === n.id ? '#fff' : 'var(--text2)'}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      {selected && (
        <div style={{ padding: '8px 14px', background: 'var(--accent-soft)', border: '1px solid #f0c0b8', borderRadius: 8, fontSize: 12.5, color: 'var(--text2)' }}>
          <strong style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>{selected.label}</strong> — {selected.desc}
        </div>
      )}
      {!selected && <div style={{ fontSize: 11.5, color: 'var(--text3)', textAlign: 'center', marginTop: 4 }}>Click any node to learn about it</div>}
    </div>
  );
}

/* ── Array Methods Visual ── */
function ArrayVisual() {
  const [method, setMethod] = useState('map');
  const items = [
    { name: 'Earbuds', price: 1299, inStock: true },
    { name: 'Charger', price: 799, inStock: false },
    { name: 'Cable', price: 299, inStock: true },
    { name: 'Stand', price: 1499, inStock: true },
  ];
  const results = {
    map: items.map(p => `₹${p.price}`),
    filter: items.filter(p => p.inStock).map(p => p.name),
    reduce: [`Total: ₹${items.reduce((s, p) => s + p.price, 0)}`],
  };
  const colors = { map: '#7c6fff', filter: '#4ade80', reduce: '#f472b6' };
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {['map', 'filter', 'reduce'].map(m => (
          <button key={m} onClick={() => setMethod(m)}
            style={{ padding: '5px 14px', border: `1px solid ${method === m ? colors[m] : 'var(--border)'}`, borderRadius: 99, fontSize: 12, fontWeight: 700, background: method === m ? colors[m] + '22' : 'transparent', color: method === m ? colors[m] : 'var(--text3)', cursor: 'pointer', transition: 'all .15s', fontFamily: 'monospace' }}>
            .{m}()
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 6 }}>INPUT ARRAY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {items.map((p, i) => (
              <div key={i} style={{ padding: '5px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 12, fontFamily: 'monospace', color: 'var(--text2)', opacity: (method === 'filter' && !p.inStock) ? .3 : 1, transition: 'opacity .3s' }}>
                {`{ name: "${p.name}", price: ${p.price}, inStock: ${p.inStock} }`}
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 24, color: colors[method], fontWeight: 700 }}>→</div>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 6 }}>OUTPUT</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {results[method].map((r, i) => (
              <div key={i} style={{ padding: '5px 12px', background: colors[method] + '18', border: `1px solid ${colors[method]}44`, borderRadius: 6, fontSize: 12, fontFamily: 'monospace', color: colors[method], animation: 'fadeIn .3s ease' }}>
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Event Loop ── */
function EventLoopVisual() {
  const [step, setStep] = useState(-1);
  const [auto, setAuto] = useState(false);
  const steps = [
    { zone: 'call', label: 'console.log("start")', output: 'start' },
    { zone: 'web', label: 'fetch() → sent to browser', output: '' },
    { zone: 'call', label: 'console.log("end")', output: 'end' },
    { zone: 'queue', label: 'Response ready → callback queued', output: '' },
    { zone: 'call', label: 'callback runs → data logged', output: '[{...}]' },
  ];
  const zoneColors = { call: '#7c6fff', web: '#f472b6', queue: '#fbbf24' };
  const zoneLabels = { call: 'Call Stack', web: 'Browser APIs', queue: 'Callback Queue' };
  useEffect(() => {
    if (!auto) return;
    if (step >= steps.length - 1) { setAuto(false); return; }
    const t = setTimeout(() => setStep(s => s + 1), 1000);
    return () => clearTimeout(t);
  }, [auto, step]);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
        {Object.entries(zoneLabels).map(([zone, label]) => {
          const cur = step >= 0 ? steps[step] : null;
          const active = cur?.zone === zone;
          return (
            <div key={zone} style={{ background: active ? zoneColors[zone] + '20' : 'var(--surface2)', border: `2px solid ${active ? zoneColors[zone] : 'var(--border)'}`, borderRadius: 10, padding: '10px 8px', transition: 'all .3s', minHeight: 80 }}>
              <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', color: zoneColors[zone], marginBottom: 6, letterSpacing: '.06em' }}>{label}</div>
              <div style={{ fontSize: 11, fontFamily: 'monospace', color: active ? zoneColors[zone] : 'var(--text3)', lineHeight: 1.4, transition: 'color .3s' }}>
                {active ? cur.label : '—'}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button onClick={() => { setStep(-1); setAuto(true); }} style={{ padding: '7px 18px', background: '#7c6fff', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
          ▶ Animate
        </button>
        <div style={{ fontFamily: 'monospace', fontSize: 12 }}>
          Output: <span style={{ color: '#4ade80' }}>{steps.slice(0, step + 1).filter(s => s.output).map(s => s.output).join(' → ') || '...'}</span>
        </div>
      </div>
    </div>
  );
}

const VISUALS = {
  'CSS Box Model & Units': { title: '📦 Interactive Box Model', component: BoxModel },
  'CSS Essentials (Refresher)': { title: '↔️ Flexbox Playground', component: FlexVisual },
  'CSS Positioning & Interactive States': { title: '↔️ Flexbox Playground', component: FlexVisual },
  'HTML Essentials (Refresher)': { title: '🌳 DOM Tree', component: DOMTree },
  'DOM Manipulation': { title: '🌳 DOM Tree', component: DOMTree },
  'Closures & Scope': { title: '🧠 Closure Memory — Interactive', component: ClosureVisual },
  'Arrays & Objects': { title: '⚡ Array Methods Visualizer', component: ArrayVisual },
  'Async JS & Fetch': { title: '🔄 Event Loop Animator', component: EventLoopVisual },
  'useState': { title: '⚛️ useState Re-render Flow', component: UseStateVisual },
  'More React Hooks: useRef & useContext': { title: '⚛️ useState Re-render Flow', component: UseStateVisual },
};

export default function ConceptVisual({ lessonTitle }) {
  const vis = VISUALS[lessonTitle];
  if (!vis) return null;
  const Component = vis.component;
  return (
    <>
      <style>{VS}</style>
      <div className="vis-wrap">
        <div className="vis-title">🎯 {vis.title}</div>
        <Component />
      </div>
    </>
  );
}

export { VISUALS };
