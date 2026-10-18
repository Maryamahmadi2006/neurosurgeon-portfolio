import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Activity, Brain, ShieldCheck, Waves, Mouse, Stethoscope, HeartPulse } from 'lucide-react';
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
  const motionProps = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };
  const labels = lang === 'fa'
    ? { name: 'داکتر خالد خان زدران', scroll: 'برای ادامه پایین بروید', services: 'خدمات و حوزه‌های مراقبت', bookingEyebrow: 'مشاوره شخصی', bookingTitle: 'برای گام بعدی آماده‌اید؟', bookingDesc: 'برای درخواست وقت ملاقات، فورم آنلاین را تکمیل کنید.', bookingButton: 'درخواست وقت ملاقات' }
    : lang === 'ps'
      ? { name: 'ډاکټر خالد خان ځدراڼ', scroll: 'د دوام لپاره ښکته لاړ شئ', services: 'خدمتونه او د پاملرنې برخې', bookingEyebrow: 'شخصي مشوره', bookingTitle: 'د بل ګام لپاره چمتو یاست؟', bookingDesc: 'د ملاقات غوښتلو لپاره آنلاین فورمه ډکه کړئ.', bookingButton: 'د ملاقات غوښتنه' }
      : { name: 'Dr. Khalid Khan Zadran', scroll: 'Scroll to explore', services: 'Services and areas of care', bookingEyebrow: 'PERSONALIZED CONSULTATION', bookingTitle: 'Ready to discuss your care?', bookingDesc: 'Request an appointment using the online form and share your preferred contact details.', bookingButton: 'Request an Appointment' };

  return <>
    <section className="hero-section hero-clean" aria-labelledby="hero-title">
      <div className="hero-glow glow-one" aria-hidden="true" />
      <div className="hero-glow glow-two" aria-hidden="true" />
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="hero-name-watermark" aria-hidden="true">{labels.name}</div>

      <div className="hero-copy">
        <motion.div className="eyebrow" {...motionProps} transition={{ duration: .55 }}><span />{t.hero.eyebrow}</motion.div>
        <motion.h1 id="hero-title" {...motionProps} transition={{ duration: .65, delay: .08 }}>{t.hero.titleA}<em>{t.hero.titleB}</em></motion.h1>
        <motion.p className="hero-desc" {...motionProps} transition={{ duration: .6, delay: .16 }}>{t.hero.desc}</motion.p>
        <motion.div className="hero-buttons" {...motionProps} transition={{ duration: .6, delay: .23 }}>
          <Link className="button button-primary" to="/appointment">{t.hero.request}<ArrowRight size={17} /></Link>
          <Link className="button button-outline" to="/about">{t.hero.learn}</Link>
        </motion.div>
      </div>

      <motion.div className="doctor-visual doctor-cutout-visual" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1, ease: [.22, 1, .36, 1] }}>
        <div className="doctor-halo" />
        <div className="doctor-ring" />
        <img src={asset('images/doctor-cutout.png')} alt="Dr. Khalid Khan Zadran, neurosurgeon" fetchPriority="high" />
      </motion.div>

      <motion.aside className="credential-stack" initial={reduceMotion ? false : { opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55, delay: .3 }} aria-label="Professional overview">
        <div><Brain /><p><strong>{t.hero.credentials}</strong><span>{t.hero.neurosurgery}</span></p></div>
        <div><Stethoscope /><p><strong>{t.hero.specialist}</strong><span>Brain &amp; Spine</span></p></div>
        <div><ShieldCheck /><p><strong>{t.hero.patient}</strong><span>{t.hero.approach}</span></p></div>
      </motion.aside>
      <a className="scroll-cue" href="#care"><Mouse size={20} /><span>{labels.scroll}</span><ArrowDown size={17} /></a>
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
