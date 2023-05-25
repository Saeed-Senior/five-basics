import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import rpt from '../../../img/repeat.png';

function Counter() {

   const [countPlus, setCountPlus] = useState(1);
   const [countMinus, setCountMinus] = useState(1);
   const [countP, setCountP] = useState(false);
   const [countM, setCountM] = useState(false);
   const counter = useSelector((state: any) => state.counter);
   const dispatch = useDispatch();

   const minus = () => {
      if(counter > 0 && counter >= countMinus){
         dispatch({ type: 'minus', payload: countMinus, }); 
      } else {
         dispatch({ type: 'not-minus', payload: 0, });
      }
   }
   const plus = () => dispatch({ type: 'plus', payload: countPlus, });
   const repeat = () =>  dispatch({ type: 'repeat', payload: 0, });
   const plusF = (c: number) => { setCountPlus(c); setCountP(false); };
   const minusF = (c: number) => { setCountMinus(c); setCountM(false); };

   return (
      <div className='container-main flex flex-col items-center'>
         <motion.div
         initial={{
            y: -100,
            opacity: 0
         }}
         animate={{
            y: 0,
            opacity: 1
         }}
         className='inline-block text-[100px] sm:text-[200px] font-medium leading-none'>{counter}</motion.div>
         <div className='flex items-center space-x-[10px]'>
            <motion.div
            initial={{
               x: -100,
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            className='relative flex items-center'>
            <div onClick={() => setCountM(!countM)} className='count-choise bg-[#931111]'>{countMinus}</div>
            <button onClick={() => minus()} className='counter-btn bg-[#DC1717] hover:bg-[#ce1717] active:bg-[#DC1717]'>-</button>
            <ul className={countM ? 'count-list opacity-100' : 'count-list opacity-0 invisible'}>
               <li onClick={() => minusF(1)} className='count'>1</li>
               <li onClick={() => minusF(2)} className='count'>2</li>
               <li onClick={() => minusF(5)} className='count'>5</li>
               <li onClick={() => minusF(10)} className='count'>10</li>
            </ul>
            </motion.div>
            <motion.div
            initial={{
               x: 100,
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            className='relative flex items-center'>
            <button onClick={() => plus()} className='counter-btn bg-[#17DC72] hover:bg-[#13be63] active:bg-[#17DC72]'>+</button>
            <div onClick={() => setCountP(!countP)} className='count-choise bg-[#0e8d49]'>{countPlus}</div>
            <ul className={countP ? 'count-list opacity-100' : 'count-list opacity-0 invisible'}>
               <li onClick={() => plusF(1)} className='count'>1</li>
               <li onClick={() => plusF(2)} className='count'>2</li>
               <li onClick={() => plusF(5)} className='count'>5</li>
               <li onClick={() => plusF(10)} className='count'>10</li>
            </ul>
            </motion.div>
         </div>
         <motion.button
         initial={{
            opacity: 0
         }}
         animate={{
            opacity: 1,
            transition:{
               duration: 1
            }
         }}
         onClick={() => repeat()} className='w-[370px] sm:w-[410px] h-[50px] flex items-center justify-center bg-[#16E1D5] hover:bg-[#12c0b4] transition duration-200 active:bg-[#16E1D5] mt-[10px]'>
            <motion.img
            initial={{
               rotate: 0,
            }}
            whileTap={{
               rotate: 360,
            }}
            className='max-w-[40px]' src={rpt} alt="repeat" />
         </motion.button>
      </div>
   );
}

export default Counter;