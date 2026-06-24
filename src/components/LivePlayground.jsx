import { useState, useRef } from 'react';

const PLAYGROUND_CSS = `
.pg-wrap{background:var(--code-bg);border:1px solid #2a2a3e;border-radius:12px;overflow:hidden;margin-top:16px}
.pg-header{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;background:#12121c;border-bottom:1px solid #2a2a3e}
.pg-title{font-size:11px;font-weight:700;color:#6c6c8a;text-transform:uppercase;letter-spacing:.08em;display:flex;align-items:center;gap:6px}
.pg-lang{font-size:9px;font-weight:700;padding:2px 8px;border-radius:4px;background:#1e1e30;color:#7c6fff;border:1px solid #2e2e50}
.pg-run{display:flex;align-items:center;gap:6px;padding:6px 14px;background:#7c6fff;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s}
.pg-run:hover{background:#9080ff;transform:scale(1.03)}
.pg-run:active{transform:scale(.97)}
.pg-run.running{background:#4ade80;animation:pulse .6s infinite}
.pg-editor{position:relative}
.pg-textarea{width:100%;background:#0d0d18;color:#cdd6f4;font-family:'JetBrains Mono','Fira Code',monospace;font-size:13px;line-height:1.8;padding:16px;border:none;outline:none;resize:vertical;min-height:140px;tab-size:2}
.pg-line-nums{position:absolute;left:0;top:0;bottom:0;width:36px;padding:16px 0;background:#0a0a14;border-right:1px solid #1e1e30;display:flex;flex-direction:column;align-items:center;pointer-events:none;overflow:hidden}
.pg-ln{font-size:11px;color:#3c3c5c;font-family:'JetBrains Mono',monospace;line-height:1.8}
.pg-output{border-top:1px solid #2a2a3e;padding:12px 16px;min-height:52px;max-height:200px;overflow-y:auto;font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.7}
.pg-output-line{display:flex;gap:8px;align-items:flex-start;padding:1px 0}
.pg-output-line.log{color:#cdd6f4}
.pg-output-line.err{color:#f87171}
.pg-output-line.warn{color:#fbbf24}
.pg-output-line.info{color:#60a5fa}
.pg-output-line.ok{color:#4ade80}
.pg-prompt{color:#585b70;flex-shrink:0;font-size:11px;margin-top:2px}
.pg-empty{color:#3c3c5c;font-size:12px;font-style:italic}
.pg-html-preview{border-top:1px solid #2a2a3e;background:#fff;min-height:120px}
.pg-html-preview iframe{width:100%;min-height:120px;border:none;display:block}
.pg-tabs{display:flex;gap:0;border-bottom:1px solid #2a2a3e}
.pg-tab{padding:8px 16px;font-size:11px;font-weight:600;color:#6c6c8a;cursor:pointer;border-bottom:2px solid transparent;transition:all .15s}
.pg-tab.active{color:#7c6fff;border-bottom-color:#7c6fff}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.7}}
`;

function interceptConsole(code) {
  const logs = [];
  const _log = console.log;
  const _err = console.error;
  const _warn = console.warn;
  try {
    const fn = new Function(
      'console',
      `"use strict";\n${code}\n`
    );
    const fakeConsole = {
      log: (...args) => logs.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') }),
      error: (...args) => logs.push({ type: 'err', text: args.map(String).join(' ') }),
      warn: (...args) => logs.push({ type: 'warn', text: args.map(String).join(' ') }),
      info: (...args) => logs.push({ type: 'info', text: args.map(String).join(' ') }),
    };
    const result = fn(fakeConsole);
    if (result !== undefined) logs.push({ type: 'ok', text: `→ ${JSON.stringify(result)}` });
  } catch (e) {
    logs.push({ type: 'err', text: `Error: ${e.message}` });
  }
  return logs;
}

export default function LivePlayground({ code: initialCode = '', lang = 'js', title = 'Try it yourself' }) {
  const [code, setCode] = useState(initialCode.trim());
  const [output, setOutput] = useState([]);
  const [ran, setRan] = useState(false);
  const [running, setRunning] = useState(false);
  const [tab, setTab] = useState('code');
  const iframeRef = useRef(null);

  const lineCount = code.split('\n').length;

  function run() {
    setRunning(true);
    setTimeout(() => {
      if (lang === 'html') {
        setTab('preview');
        if (iframeRef.current) {
          // Use blob URL to avoid cross-origin iframe security issue
          const blob = new Blob([code], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          iframeRef.current.src = url;
          setTimeout(() => URL.revokeObjectURL(url), 5000);
        }
        setOutput([{ type: 'ok', text: 'Preview rendered ✓' }]);
      } else {
        const logs = interceptConsole(code);
        setOutput(logs.length ? logs : [{ type: 'info', text: 'No output. Add console.log() to see results.' }]);
      }
      setRan(true);
      setRunning(false);
    }, 200);
  }

  function reset() { setCode(initialCode.trim()); setOutput([]); setRan(false); setTab('code'); }

  const ICON = { log: '›', err: '✗', warn: '⚠', info: 'ℹ', ok: '✓' };

  return (
    <>
      <style>{PLAYGROUND_CSS}</style>
      <div className="pg-wrap">
        <div className="pg-header">
          <div className="pg-title">
            <span>⚡</span> {title}
            <span className="pg-lang">{lang.toUpperCase()}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {ran && <button onClick={reset} style={{ padding: '5px 10px', background: 'transparent', border: '1px solid #2e2e50', borderRadius: 6, color: '#6c6c8a', fontSize: 11, cursor: 'pointer' }}>Reset</button>}
            <button className={`pg-run ${running ? 'running' : ''}`} onClick={run}>
              {running ? '⟳ Running...' : '▶ Run'}
            </button>
          </div>
        </div>

        {lang === 'html' && (
          <div className="pg-tabs">
            <div className={`pg-tab ${tab === 'code' ? 'active' : ''}`} onClick={() => setTab('code')}>Code</div>
            <div className={`pg-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>Preview</div>
          </div>
        )}

        {(tab === 'code') && (
          <div className="pg-editor">
            <div className="pg-line-nums">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="pg-ln">{i + 1}</div>
              ))}
            </div>
            <textarea
              className="pg-textarea"
              style={{ paddingLeft: 52 }}
              value={code}
              onChange={e => setCode(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Tab') { e.preventDefault(); const s = e.target.selectionStart; const v = code; setCode(v.slice(0, s) + '  ' + v.slice(e.target.selectionEnd)); setTimeout(() => e.target.setSelectionRange(s + 2, s + 2), 0); }
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) run();
              }}
              spellCheck={false}
            />
          </div>
        )}

        {lang === 'html' && tab === 'preview' && (
          <div className="pg-html-preview">
            <iframe ref={iframeRef} title="preview" sandbox="allow-scripts" />
          </div>
        )}

        <div className="pg-output">
          {output.length === 0 && !ran && <div className="pg-empty">Click ▶ Run to execute — Ctrl+Enter also works</div>}
          {output.map((line, i) => (
            <div key={i} className={`pg-output-line ${line.type}`}>
              <span className="pg-prompt">{ICON[line.type]}</span>
              <span style={{ whiteSpace: 'pre-wrap' }}>{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
