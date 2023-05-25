import Hexagon from './Hexagon';
import { Link } from 'react-router-dom';

import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.gif';
import icon5 from '../../img/icon5.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Main() {

   const [t, i18n] = useTranslation();

   return (
      <div className='container-main'>
         <motion.p
         initial={{
            opacity: 0,
            scale: 0
         }}
         animate={{
            opacity: 1,
            scale: 1
         }}
         className='max-w-[600px] text-center mb-8'>{t('main-text')}</motion.p>
         <div className='flex justify-center items-center'>
         <motion.div
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: .3,
            duration: .5
         }}
         className='hex'>
         <Link to={'/counter'}>
         <Hexagon image={icon1} border='border-hexagon1' bg='bg-hexagon1'/>
         </Link>
         </motion.div>
         <motion.div
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: .5,
            duration: .5
         }}
         className='hex'>
         <Link to='/calculator'>
         <Hexagon image={icon2} border='border-hexagon2' bg='bg-hexagon2'/>
         </Link>
         </motion.div>
         <motion.div
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: .7,
            duration: .5
         }}
         className='hex'>
            <Link to='/todo'>
            <Hexagon image={icon3} border='border-hexagon1' bg='bg-hexagon1'/>
            </Link>
         </motion.div>
         </div>
         <div className='flex justify-center items-center hex-flex'>
         <motion.div
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: .9,
            duration: .5
         }}
         className='hex'>
         <Link to='/stopwatch'>
         <Hexagon image={icon4} border='border-hexagon2' bg='bg-hexagon2'/>
         </Link>
         </motion.div>
         <motion.div
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: 1.1,
            duration: .5
         }}
         className='hex'>
            <Link to='/timer'>
            <Hexagon image={icon5} border='border-hexagon1' bg='bg-hexagon1'/>
            </Link>
         </motion.div>
         </div>
      </div>
   );
}

export default Main;