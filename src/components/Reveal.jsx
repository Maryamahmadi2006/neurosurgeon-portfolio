import { motion, useReducedMotion } from 'framer-motion';

// Sections fade in as they enter the viewport — a soft, mostly-opacity rise
// with a short stagger, matching the gentle scroll reveals in the reference
// video. `once: true` means each element animates only on its first reveal.
export default function Reveal({ children, className = '', delay = 0, y = 12 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .18 }}
      transition={{ duration: reduce ? 0 : .6, delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </motion.div>
  );
}
