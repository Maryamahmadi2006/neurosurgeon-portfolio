import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { useLanguage } from '../i18n';

const OPTIONS = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'fa', short: 'دری', name: 'دری', hint: 'Dari' },
  { code: 'ps', short: 'پښتو', name: 'پښتو', hint: 'Pashto' },
];

// Pill button + animated dropdown. Replaces the old native <select> so
// language switching is one visible click and feels like the rest of the UI.
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = OPTIONS.find((o) => o.code === lang) || OPTIONS[0];

  return (
    <div className="lang-switcher" ref={wrapRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
      >
        <Globe2 size={16} className="lang-globe" />
        <span className="lang-current">{current.short}</span>
        <ChevronDown size={14} className={open ? 'lang-caret is-open' : 'lang-caret'} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="lang-menu"
            role="listbox"
            aria-label="Change language"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: .96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: .97 }}
            transition={{ duration: .18, ease: [.22, 1, .36, 1] }}
          >
            {OPTIONS.map((o) => {
              const active = o.code === lang;
              return (
                <li key={o.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={active ? 'lang-option is-active' : 'lang-option'}
                    onClick={() => { setLang(o.code); setOpen(false); }}
                  >
                    <span className="lang-code">{o.short}</span>
                    <span className="lang-name">
                      {o.name}
                      {o.hint ? <small> · {o.hint}</small> : null}
                    </span>
                    <Check size={15} className="lang-check" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
