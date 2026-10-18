import { ArrowRight, BadgeCheck, Brain, BriefcaseMedical, CheckCircle2, Clock3, GraduationCap, HeartHandshake, MapPin, ShieldCheck, Stethoscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import Reveal from '../components/Reveal';

const gallery = [
  { src: '/images/doctor-consultation.jpg', alt: 'Doctor seated in a consultation room', key: 'consultation' },
  { src: '/images/doctor-conference.jpg', alt: 'Doctor attending a professional conference', key: 'conference' },
  { src: '/images/doctor-reviewing-scans.jpg', alt: 'Doctor reviewing medical scans and documents', key: 'review' },
  { src: '/images/doctor-office.jpg', alt: 'Doctor in his office', key: 'office' },
];

export default function About() {
  const { t, lang } = useLanguage();
  const copy = {
    en: {
      profileLabel: 'PROFESSIONAL PROFILE', profileTitle: 'A thoughtful, patient-centred approach',
      profileLead: 'Clear communication is an important part of neurosurgical care. Consultations should give patients and families time to discuss symptoms, understand investigations and consider the next steps.',
      profileBody: 'Dr. Khalid Khan Zadran is presented here as a consultant neurosurgeon with a clinical focus on brain and spine care. The website is designed to help visitors learn about the practice and request a consultation.',
      location: 'Practice location', focus: 'Clinical focus', approach: 'Care approach', locationValue: 'Rifah Medical Complex, Kabul, Afghanistan', focusValue: 'Neurosurgery · Brain · Spine', approachValue: 'Assessment, explanation and shared decisions',
      photosLabel: 'PHOTOS', photosTitle: 'In the clinic and beyond', photosDesc: 'A selection of images from the doctor’s clinical and professional environment.',
      credentialsLabel: 'CREDENTIALS', credentialsTitle: 'Education, memberships and career', credentialsDesc: 'Professional qualifications and memberships will be listed here after the details have been confirmed.',
      education: 'Education & training', membership: 'Professional memberships', career: 'Career highlights', pending: 'Details to be confirmed before publication',
      valuesLabel: 'CARE PRINCIPLES', valuesTitle: 'What patients can expect', value1: 'Time to explain symptoms and concerns', value2: 'A careful review of available clinical information', value3: 'A clear discussion of appropriate next steps',
      ctaTitle: 'Would you like to arrange a consultation?', ctaDesc: 'Send an appointment request and the clinic can follow up using your preferred contact details.', ctaButton: 'Request an appointment', imageLabels: ['Consultation setting', 'Professional conference', 'Reviewing a case', 'Clinical workspace']
    },
    fa: {
      profileLabel: 'پروفایل حرفه‌ای', profileTitle: 'رویکرد سنجیده و بیمارمحور',
      profileLead: 'ارتباط روشن بخش مهمی از مراقبت جراحی اعصاب است. در مشاوره باید به بیمار و خانواده فرصت داده شود تا درباره علایم، بررسی‌ها و گام‌های بعدی پرسش کنند.',
      profileBody: 'در این وب‌سایت، داکتر خالد خان زدران به‌عنوان متخصص مشاور جراحی اعصاب با تمرکز بر مراقبت مغز و ستون فقرات معرفی می‌شود. هدف این صفحه، آشنایی با فعالیت حرفه‌ای و درخواست مشاوره است.',
      location: 'محل فعالیت', focus: 'حوزه تخصص', approach: 'رویکرد مراقبت', locationValue: 'مجتمع طبی رفاه، کابل، افغانستان', focusValue: 'جراحی اعصاب · مغز · ستون فقرات', approachValue: 'ارزیابی، توضیح و تصمیم‌گیری مشترک',
      photosLabel: 'تصاویر', photosTitle: 'در کلینیک و بیرون از آن', photosDesc: 'گزیده‌ای از تصاویر محیط کاری و فعالیت‌های حرفه‌ای داکتر.',
      credentialsLabel: 'مدارک حرفه‌ای', credentialsTitle: 'تحصیلات، عضویت‌ها و سوابق کاری', credentialsDesc: 'مدارک تحصیلی و عضویت‌های حرفه‌ای پس از تأیید جزئیات در این بخش درج می‌شوند.',
      education: 'تحصیلات و آموزش', membership: 'عضویت‌های حرفه‌ای', career: 'سوابق کاری', pending: 'جزئیات پیش از انتشار تأیید می‌شوند',
      valuesLabel: 'اصول مراقبت', valuesTitle: 'بیماران چه انتظاری داشته باشند؟', value1: 'فرصت برای توضیح علایم و نگرانی‌ها', value2: 'بررسی دقیق معلومات طبی موجود', value3: 'گفت‌وگوی روشن درباره گام‌های مناسب بعدی',
      ctaTitle: 'آیا می‌خواهید وقت مشاوره بگیرید؟', ctaDesc: 'درخواست نوبت را ثبت کنید تا کلینیک از طریق راه تماس ترجیحی شما پیگیری کند.', ctaButton: 'درخواست وقت ملاقات', imageLabels: ['محیط مشاوره', 'کنفرانس حرفه‌ای', 'بررسی یک پرونده', 'محیط کاری']
    },
    ps: {
      profileLabel: 'مسلکي پېژندنه', profileTitle: 'له پاملرنې ډکه او د ناروغ پر محور تګلاره',
      profileLead: 'روښانه اړیکه د عصبي جراحۍ د پاملرنې مهمه برخه ده. ناروغ او کورنۍ یې باید د نښو، معایناتو او راتلونکو ګامونو په اړه د خبرو فرصت ولري.',
      profileBody: 'په دې وېبپاڼه کې ډاکټر خالد خان ځدراڼ د مغز او ملا د پاملرنې په برخه کې د عصبي جراحۍ د مشاور په توګه معرفي کېږي. د دې پاڼې موخه د مسلکي فعالیت پېژندنه او د مشورې غوښتنه ده.',
      location: 'د کار ځای', focus: 'د تخصص ساحه', approach: 'د پاملرنې تګلاره', locationValue: 'رفاه طبي کمپلکس، کابل، افغانستان', focusValue: 'عصبي جراحي · مغز · ملا', approachValue: 'ارزونه، وضاحت او ګډې پرېکړې',
      photosLabel: 'انځورونه', photosTitle: 'په کلینیک او له هغې بهر', photosDesc: 'د ډاکټر د کاري چاپېریال او مسلکي فعالیتونو ځینې انځورونه.',
      credentialsLabel: 'مسلکي اسناد', credentialsTitle: 'زده کړې، غړیتوبونه او کاري مخینه', credentialsDesc: 'تحصیلي اسناد او مسلکي غړیتوبونه به د جزئیاتو تر تایید وروسته دلته خپاره شي.',
      education: 'زده کړې او روزنه', membership: 'مسلکي غړیتوبونه', career: 'کاري مخینه', pending: 'د خپرېدو مخکې جزئیات تاییدېږي',
      valuesLabel: 'د پاملرنې اصول', valuesTitle: 'ناروغان څه تمه لرلی شي؟', value1: 'د نښو او اندېښنو د بیانولو فرصت', value2: 'د شته طبي معلوماتو دقیقه کتنه', value3: 'د مناسبو راتلونکو ګامونو روښانه بحث',
      ctaTitle: 'غواړئ د مشورې وخت واخلئ؟', ctaDesc: 'د ملاقات غوښتنه ثبت کړئ، څو کلینیک ستاسو د خوښې د اړیکې له لارې تعقیب وکړي.', ctaButton: 'د ملاقات غوښتنه', imageLabels: ['د مشورې چاپېریال', 'مسلکي کنفرانس', 'د قضیې کتنه', 'کاري چاپېریال']
    }
  }[lang] || {};

  const facts = [
    { icon: MapPin, title: copy.location, text: copy.locationValue },
    { icon: Brain, title: copy.focus, text: copy.focusValue },
    { icon: HeartHandshake, title: copy.approach, text: copy.approachValue },
  ];
  const credentialCards = [
    { icon: GraduationCap, title: copy.education },
    { icon: Users, title: copy.membership },
    { icon: BriefcaseMedical, title: copy.career },
  ];

  return <div className="about-page-clean">
    <section className="about-intro section-wrap">
      <Reveal className="about-intro-copy"><div className="eyebrow"><span />{t.about.eyebrow}</div><h1>{t.about.title}</h1><p>{t.about.desc}</p><div className="about-intro-note"><ShieldCheck size={19} /><span>{copy.profileLead}</span></div></Reveal>
      <Reveal className="about-intro-image" delay={.12}><div className="about-image-backdrop" /><img src="/images/doctor-cutout.png" alt="Dr. Khalid Khan Zadran" /><div className="about-image-caption"><span className="about-caption-icon"><Stethoscope size={20} /></span><span><strong>Dr. Khalid Khan Zadran</strong><small>{t.hero.specialist}</small></span></div></Reveal>
    </section>

    <section className="about-profile-section section-wrap">
      <Reveal className="about-section-heading"><div className="eyebrow"><span />{copy.profileLabel}</div><h2>{copy.profileTitle}</h2><p>{copy.profileBody}</p></Reveal>
      <div className="about-fact-grid">{facts.map(({ icon: Icon, title, text }, i) => <Reveal className="about-fact-card" key={title} delay={i * .07}><span className="about-fact-icon"><Icon size={22} /></span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
      <div className="about-principles"><div><div className="eyebrow"><span />{copy.valuesLabel}</div><h2>{copy.valuesTitle}</h2></div><ul>{[copy.value1, copy.value2, copy.value3].map((value) => <li key={value}><CheckCircle2 size={19} />{value}</li>)}</ul></div>
    </section>

    <section className="about-photos-section">
      <div className="section-wrap"><Reveal className="about-section-heading about-photo-heading"><div className="eyebrow"><span />{copy.photosLabel}</div><h2>{copy.photosTitle}</h2><p>{copy.photosDesc}</p></Reveal>
        <div className="about-photo-grid">{gallery.map((photo, i) => <Reveal key={photo.src} className={`about-photo-card about-photo-${i + 1}`} delay={i * .06}><img src={photo.src} alt={photo.alt} loading="lazy" /><div className="about-photo-overlay"><span>{String(i + 1).padStart(2, '0')}</span><strong>{copy.imageLabels[i]}</strong></div></Reveal>)}</div>
      </div>
    </section>

    <section className="about-credentials-section section-wrap">
      <Reveal className="about-section-heading"><div className="eyebrow"><span />{copy.credentialsLabel}</div><h2>{copy.credentialsTitle}</h2><p>{copy.credentialsDesc}</p></Reveal>
      <div className="about-credential-grid">{credentialCards.map(({ icon: Icon, title }, i) => <Reveal key={title} className="about-credential-card" delay={i * .07}><span className="about-credential-icon"><Icon size={24} /></span><h3>{title}</h3><p><Clock3 size={16} />{copy.pending}</p></Reveal>)}</div>
      <div className="about-verification-note"><BadgeCheck size={19} /><p>{lang === 'fa' ? 'برای دقت و اعتماد، هیچ مدرک یا عضویت تأییدنشده به‌عنوان واقعیت قطعی منتشر نمی‌شود.' : lang === 'ps' ? 'د دقت او باور لپاره، ناتایید شوي اسناد او غړیتوبونه د ثابتو حقایقو په توګه نه خپرېږي.' : 'For accuracy and trust, unverified qualifications or memberships are not presented as confirmed facts.'}</p></div>
    </section>

    <section className="about-cta-section section-wrap"><div className="about-cta-copy"><div className="eyebrow"><span />{lang === 'fa' ? 'گام بعدی' : lang === 'ps' ? 'راتلونکی ګام' : 'NEXT STEP'}</div><h2>{copy.ctaTitle}</h2><p>{copy.ctaDesc}</p></div><Link className="button button-primary" to="/appointment">{copy.ctaButton}<ArrowRight size={17} /></Link></section>
  </div>;
}
