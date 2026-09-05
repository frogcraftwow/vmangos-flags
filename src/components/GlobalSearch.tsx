import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalSearch } from '../lib/search';

export function GlobalSearch() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const results = useMemo(() => q.trim().length >= 2 ? globalSearch(q) : [], [q]);

  useEffect(() => {
    const fn = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
        setTimeout(() => input.current?.focus(), 0);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  return <>
    <button className="global-search-trigger" onClick={() => setOpen(true)}>Search… <kbd>Ctrl K</kbd></button>
    {open && <div className="modal-backdrop" onMouseDown={() => setOpen(false)}>
      <div className="search-modal" role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span>⌕</span>
          <input ref={input} autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="FIREBALL, WAND, 228, SPELL_ATTR_EX_DISMISS_PET_FIRST, Proc…" />
          <button onClick={() => setOpen(false)}>Esc</button>
        </div>
        <div className="search-results">
          {q.trim().length < 2 ? <div className="empty">Type at least two characters.</div> : results.length ? results.map((result, index) => <button key={`${result.path}:${index}`} className="search-result" onClick={() => { navigate(result.path); setOpen(false); setQ(''); }}>
            <span className="badge">{result.kind}</span>
            <strong>{result.title}</strong>
            <small>{result.subtitle}</small>
          </button>) : <div className="empty">No matches.</div>}
        </div>
      </div>
    </div>}
  </>;
}
