import { motion, useReducedMotion } from 'framer-motion';
export default function Reveal({children,className='',delay=0, y=24}){const reduce=useReducedMotion();return <motion.div className={className} initial={{opacity:0,y:reduce?0:y}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:reduce?0:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
