import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getPadTime } from '../getPadTime';


function Stopwatch() {

   const [t, i18n] = useTranslation();

   const [time, setTime] = useState(0);
   const [isCounting, setIsCounting] = useState(false);
   const hours:any = getPadTime(Math.floor(time / 3600));
   const minutes:any = getPadTime(Math.floor(time / 60) - hours * 60);
   const seconds:any = getPadTime(time % 60);

   useEffect(() => {
      const interval = setInterval(() => {
         isCounting && 
            setTime((time) => (time >= 0 ? time + 1 : 0))
      }, 1000);
      return () => {
         clearInterval(interval)
      }
   }, [isCounting])

   const handleStart = () => {
      setIsCounting(true);
   };
   const handleStop = () => {
      setIsCounting(false);
   };
   const handleReset = () => {
      setIsCounting(false);
      setTime(0);
   };

   return (
      <div className='container-main'>
         <div className='flex flex-col items-center space-y-3'>
            <motion.h2
            initial={{
               x: -100,
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            className='text-black font-light uppercase text-2xl'>{t('stopwatch')}</motion.h2>
            <motion.div
            initial={{
               x: 100,
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            className=' flex flex-col items-center space-y-2 justify-center w-[300px] h-[300px] rounded-[50%] border shadow-xl'>
               <div className='text-black text-xl'>
                  <span>{hours}</span>
                  <span>:</span>
                  <span>{minutes}</span>
                  <span>:</span>
                  <span>{seconds}</span>
               </div>
               <div className='flex items-center space-x-3'>
                  {isCounting ? <motion.button
                  whileHover={{
                     scale: 1.1,
                  }}
                  whileTap={{
                     scale: 0.9,
                  }}
                  transition={{
                     type: 'spring',
                     stiffness: 400,
                     damping: 15
                  }}
                  onClick={handleStop} className='text-white bg-[#FF0A36] px-4 py-1 uppercase rounded'>{t('stop')}</motion.button> :
                  <motion.button
                  whileHover={{
                     scale: 1.1,
                  }}
                  whileTap={{
                     scale: 0.9,
                  }}
                  transition={{
                     type: 'spring',
                     stiffness: 400,
                     damping: 15
                  }}
                  onClick={handleStart} className='text-white bg-[#0DCC65] px-4 py-1 uppercase rounded'>{t('start')}</motion.button>                  }
                  <motion.button
                  whileHover={{
                     scale: 1.1,
                  }}
                  whileTap={{
                     scale: 0.9,
                  }}
                  transition={{
                     type: 'spring',
                     stiffness: 400,
                     damping: 15
                  }}
                  onClick={handleReset} className='text-white bg-[#10379A] px-4 py-1 uppercase rounded'>{t('reset')}</motion.button>
               </div>
            </motion.div>
         </div>
      </div>
   );
}

export default Stopwatch;