import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Activity, Brain, ShieldCheck, Waves, Mouse, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../i18n';

// Public assets must be prefixed with Vite's BASE_URL so they resolve
// correctly both locally and when hosted from a GitHub Pages sub-path.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const quickIcons = [Brain, Activity, Waves, ShieldCheck];

export default function Home() {
  const { t, lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  // Staggered fade-in, mirroring the reference video: ambience first, then
  // headline, paragraph, buttons and finally the floating credential chip.
  const appear = (delay, duration = .6) => reduceMotion
    ? { initial: false }
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration, delay, ease: [.22, 1, .36, 1] } };
  const labels = lang === 'fa'
    ? { name: 'داکتر خالد خان زدران', scroll: 'برای ادامه پایین بروید', services: 'خدمات و حوزه‌های مراقبت', bookingEyebrow: 'مشاوره شخصی', bookingTitle: 'برای گام بعدی آماده‌اید؟', bookingDesc: 'برای درخواست وقت ملاقات، فورم آنلاین را تکمیل کنید.', bookingButton: 'درخواست وقت ملاقات' }
    : lang === 'ps'
      ? { name: 'ډاکټر خالد خان ځدراڼ', scroll: 'د دوام لپاره ښکته لاړ شئ', services: 'خدمتونه او د پاملرنې برخې', bookingEyebrow: 'شخصي مشوره', bookingTitle: 'د بل ګام لپاره چمتو یاست؟', bookingDesc: 'د ملاقات غوښتلو لپاره آنلاین فورمه ډکه کړئ.', bookingButton: 'د ملاقات غوښتنه' }
      : { name: 'Dr. Khalid Khan Zadran', scroll: 'Scroll to explore', services: 'Services and areas of care', bookingEyebrow: 'PERSONALIZED CONSULTATION', bookingTitle: 'Ready to discuss your care?', bookingDesc: 'Request an appointment using the online form and share your preferred contact details.', bookingButton: 'Request an Appointment' };

  // With HashRouter, href="#care" would be treated as a route change, so the
  // scroll cue scrolls programmatically instead of touching the URL hash.
  const scrollToCare = () => document.getElementById('care')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

  return <>
    <section className="hero-section hero-v2" aria-labelledby="hero-title">
      <div className="hero-v2-ambience" aria-hidden="true">
        <span className="hero-bloom bloom-one" />
        <span className="hero-bloom bloom-two" />
        <span className="hero-bloom bloom-three" />
        <span className="hero-light-band" />
      </div>

      <div className="hero-v2-inner">
        <div className="hero-copy">
          <motion.div className="eyebrow hero-eyebrow-pill" {...appear(.3, .5)}><span />{t.hero.eyebrow}</motion.div>
          <motion.h1 id="hero-title" {...appear(.4, .7)}>{t.hero.titleA}<em>{t.hero.titleB}</em></motion.h1>
          <motion.p className="hero-desc" {...appear(.58)}>{t.hero.desc}</motion.p>
          <motion.div className="hero-buttons" {...appear(.7)}>
            <Link className="button button-primary" to="/appointment">{t.nav.book}</Link>
            <Link className="button button-outline" to="/services">{t.nav.services}</Link>
          </motion.div>
        </div>

        <div className="hero-v2-visual">
          <motion.div
            className="hero-glass-card"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9, delay: .08, ease: [.22, 1, .36, 1] }}
          >
            <img src={asset('images/doctor-cutout.png')} alt="Dr. Khalid Khan Zadran, neurosurgeon" fetchPriority="high" />
            <span className="hero-card-sheen" aria-hidden="true" />
          </motion.div>

          <motion.aside className="hero-stat-chip" {...appear(.95, .55)} aria-label={t.hero.specialist}>
            <span className="hero-stat-icon"><Brain size={18} strokeWidth={1.7} /></span>
            <p><strong>{t.hero.credentials}</strong><span>{t.hero.neurosurgery}</span></p>
          </motion.aside>
        </div>
      </div>

      <motion.button type="button" className="scroll-cue" onClick={scrollToCare} {...appear(1.1, .5)}><Mouse size={19} /><span>{labels.scroll}</span><ArrowDown size={16} /></motion.button>
    </section>

    <section className="quick-services-band" aria-label={labels.services}>
      <div className="quick-services-inner">
        {t.quick.map((item, i) => {
          const Icon = quickIcons[i] || HeartPulse;
          return <Reveal key={item[0]} delay={i * .06} className="quick-service-card">
            <span className="quick-service-icon"><Icon size={30} strokeWidth={1.55} /></span>
            <div><h2>{item[0]}</h2><p>{item[1]}</p></div>
          </Reveal>;
        })}
      </div>
    </section>

    <section id="care" className="care-section care-section-large">
      <div className="care-ambient" aria-hidden="true" />
      <div className="care-inner care-inner-large">
        <Reveal className="care-copy">
          <div className="eyebrow eyebrow-light"><span />{t.second.eyebrow}</div>
          <h2>{t.second.title}</h2>
          <p>{t.second.desc}</p>
          <Link to="/about" className="button button-glass">{t.second.button}<ArrowRight size={17} /></Link>
        </Reveal>
        <Reveal className="brain-art brain-art-large" delay={.1}>
          <div className="brain-rings" aria-hidden="true" />
          <img src={asset('images/brain.jpg')} alt="Illustration of the human brain and nervous system" loading="lazy" />
          <div className="brain-art-caption"><span />{lang === 'fa' ? 'مغز و سیستم عصبی' : lang === 'ps' ? 'مغز او عصبي سیستم' : 'BRAIN & NERVOUS SYSTEM'}</div>
        </Reveal>
        <Reveal className="expertise-panel expertise-panel-large" delay={.18}>
          <span className="panel-label">{t.second.expertise}</span>
          {t.second.items.map((item) => <Link to="/services" key={item}><span>{item}</span><ArrowRight size={17} /></Link>)}
          <Link to="/services" className="expertise-all">{lang === 'fa' ? 'دیدن تمام خدمات' : lang === 'ps' ? 'ټول خدمتونه وګورئ' : 'Explore all services'}<ArrowRight size={15} /></Link>
        </Reveal>
      </div>
    </section>

    <section className="home-more section-wrap">
      <Reveal className="section-heading"><div className="eyebrow"><span />{t.services.eyebrow}</div><h2>{t.services.title}</h2><p>{t.services.desc}</p></Reveal>
      <div className="service-grid home-service-grid">{t.services.items.slice(0, 3).map((s, i) => <Reveal key={s[0]} delay={i * .08} className="service-card"><div className="service-icon">{i === 0 ? <Brain /> : i === 1 ? <Activity /> : <Waves />}</div><span className="service-number">0{i + 1}</span><h3>{s[0]}</h3><p>{s[1]}</p><Link to="/services" aria-label={s[0]}><ArrowRight size={18} /></Link></Reveal>)}</div>
      <div className="center-cta"><Link to="/services" className="button button-primary">{t.nav.services}<ArrowRight size={17} /></Link></div>
    </section>

    <section className="appointment-banner" aria-labelledby="home-appointment-title">
      <div className="appointment-banner-glow" aria-hidden="true" />
      <div className="appointment-banner-copy"><div className="eyebrow"><span />{labels.bookingEyebrow}</div><h2 id="home-appointment-title">{labels.bookingTitle}</h2><p>{labels.bookingDesc}</p></div>
      <Link to="/appointment" className="button button-primary">{labels.bookingButton}<ArrowRight size={18} /></Link>
    </section>
  </>;
}
