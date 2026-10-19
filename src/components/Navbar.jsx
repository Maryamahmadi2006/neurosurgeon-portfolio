import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Brain, Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const links = [['/', 'home'], ['/about', 'about'], ['/services', 'services'], ['/appointment', 'appointment'], ['/contact', 'contact']];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Brain size={34} strokeWidth={1.45} /></span>
          <span>
            <strong>Dr. Khalid Khan Zadran</strong>
            <small>Neurosurgeon <i>·</i> Brain &amp; Spine</small>
          </span>
        </Link>

        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          {links.map(([to, key]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{t.nav[key]}</NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
          <Link className="nav-book" to="/appointment">{t.nav.book}<ArrowRight size={16} /></Link>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
