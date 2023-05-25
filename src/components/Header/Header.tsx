import React, { useState } from 'react';
import logo from '../../img/logofb.png';
import { motion } from 'framer-motion';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import arrow from '../../img/arrow.png';
import {Link} from 'react-router-dom';

function Header() {

   const [lang, setLang] = useState('EN');
   const [changeLang, setChangeLang] = useState(false);

   const [t, i18n] = useTranslation();

   function changeLangs(lng: string) {
      changeLanguage(lng);
      setLang(lng.toUpperCase());
      setChangeLang(false);
   }

   return (
      <div className='relative py-[10px] mb-5 bg-white'>
      <div className='container-main flex items-center justify-between'>
      <div>
         <Link to={'/'}>
         <motion.img
         initial={{
            x: 50,
            opacity: 0
         }}
         animate={{
            x: 0,
            opacity: 1,
         }}
         className='max-w-[130px] cursor-pointer' src={logo} alt="logo" />
         </Link>
      </div>
      <div onMouseMove={() => setChangeLang(true)} onMouseOut={() => setChangeLang(false)} className='flex items-center space-x-[5px] cursor-pointer'>
         <div className='relative inline-block'>{lang}
         <ul className={changeLang ? 'opacity-1 transition duration-200 absolute z-20 px-[10px] left-[50%] translate-x-[-50%] border border-slate-200 text-white bg-slate-600 scale-1' : 'opacity-0 transition duration-200 absolute z-20 px-[10px] left-[50%] translate-x-[-50%] border border-slate-200 text-white bg-slate-600 invisible scale-0'}>
            <li onClick={() => changeLangs('en')} className='hover:text-slate-300 active:text-slate-500 transition duration-200'>en</li>
            <li onClick={() => changeLangs('ru')} className='hover:text-slate-300 active:text-slate-500 transition duration-200'>ru</li>
         </ul>
         </div>
         <img className='max-w-[10px]' src={arrow} alt="arrow" />
      </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 gradient-header h-[1px]"></div>
      <motion.div
      initial={{
         x: 0,
         opacity: 1
      }}
      animate={{
         x: 1200,
         opacity: 0,
      }}
      transition={{
         duration: 3
      }}
      className="absolute z-10 inset-x-0 bottom-0 bg-white h-[1px]"></motion.div>
      </div>
   );
}

export default Header;