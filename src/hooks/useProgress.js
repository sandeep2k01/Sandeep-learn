import { useState, useCallback } from 'react';

const KEY_STATE = 'sl_state';
const KEY_CUR   = 'sl_cur';
const KEY_THEME = 'sl_theme';

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(KEY_STATE) || '{}');
  } catch { return {}; }
}

const defaults = { unlocked: 0, done: {}, tasks: {}, journal: {}, rubric: {} };

export function useProgress() {
  const [state, setState] = useState(() => ({ ...defaults, ...loadState() }));
  const [cur, setCurRaw] = useState(() => parseInt(localStorage.getItem(KEY_CUR) || '0', 10));
  const [theme, setThemeRaw] = useState(() => localStorage.getItem(KEY_THEME) || 'dark');

  const save = useCallback((newState, newCur) => {
    localStorage.setItem(KEY_STATE, JSON.stringify(newState));
    if (newCur !== undefined) localStorage.setItem(KEY_CUR, String(newCur));
  }, []);

  const setCur = useCallback((idx) => {
    setCurRaw(idx);
    localStorage.setItem(KEY_CUR, String(idx));
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeRaw(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY_THEME, next);
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  const markDone = useCallback((idx) => {
    setState(prev => {
      const next = {
        ...prev,
        done: { ...prev.done, [idx]: true },
        unlocked: Math.max(prev.unlocked, idx + 1),
      };
      save(next, idx);
      return next;
    });
  }, [save]);

  const toggleTask = useCallback((lessonIdx, taskIdx) => {
    setState(prev => {
      const key = `${lessonIdx}_${taskIdx}`;
      const next = {
        ...prev,
        tasks: { ...prev.tasks, [key]: !prev.tasks[key] },
      };
      save(next);
      return next;
    });
  }, [save]);

  const toggleRubric = useCallback((lessonIdx, rubricIdx) => {
    setState(prev => {
      const key = `${lessonIdx}_${rubricIdx}`;
      const next = {
        ...prev,
        rubric: { ...prev.rubric, [key]: !prev.rubric[key] },
      };
      save(next);
      return next;
    });
  }, [save]);

  const saveJournal = useCallback((lessonIdx, entry) => {
    setState(prev => {
      const next = {
        ...prev,
        journal: { ...prev.journal, [lessonIdx]: entry },
      };
      save(next);
      return next;
    });
  }, [save]);

  const doneCount = Object.keys(state.done).length;

  return { state, cur, setCur, theme, toggleTheme, markDone, toggleTask, toggleRubric, saveJournal, doneCount };
}
