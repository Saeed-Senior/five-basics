import React from 'react';
import gh from '../../img/gh.gif';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Footer() {

   const [t, i18n] = useTranslation();

   return (
   <div className='absolute bottom-0 w-full -z-10 mt-[100px] bg-white'>
      <div className='relative py-[10px]'>
      <div className='container-main'>
      <motion.div
      initial={{
         x: -50,
         opacity: 0
      }}
      animate={{
         x: 0,
         opacity: 1,
      }}
      className='flex items-center space-x-2 justify-end'>
         <span>{t('author')}: Sayid</span>
         <img className='max-w-[45px] cursor-pointer' src={gh} alt="img" />
      </motion.div>
      </div>
      <div className="absolute inset-x-0 top-0 gradient-footer h-[1px]"></div>
      <motion.div
      initial={{
         x: 0,
         opacity: 1
      }}
      animate={{
         x: -1200,
         opacity: 0,
      }}
      transition={{
         duration: 3
      }}
      className="absolute z-10 inset-x-0 top-0 bg-white h-[1px]"></motion.div>
      </div>
   </div>
   );
}

export default Footer;
