import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Calculator() {

   const [calc, setCalc] = useState('');
   const [result, setResult] = useState('');

   const operators = ['+', '-', '/', '*', '.'];

   const updateCalc = (value: string) => {
      try {
         if (
            (operators.includes(value) && calc === "") ||
            (operators.includes(value) && operators.includes(calc.slice(-1)))
         ) {
            return;
         }
         setCalc(calc + value);
         if (!operators.includes(value)) {
            let updatedResult = eval(calc + value).toString();
            setResult(updatedResult);
         }
      } catch (error) {
         console.error(error);
         setResult("incorrectly");
      }
}

   const numDigits = () => {
      const digits = [];
      for(let i = 1; i < 10; i++){
         digits.push(
            <motion.button
            initial={{
               opacity: 0,
            }}
            animate={{
               opacity: 1
            }}
            transition={{
               delay: 0.3,
               duration: 0.5,
            }}
            onClick={() => updateCalc(`${i}`)} className='calc-btn text-2xl text-black hover:bg-slate-100 active:bg-slate-500 active:duration-0 transition duration-500' key={i}>{i}</motion.button>
         );
      };
      return digits;
   }
   const calculate = () => {
      if(result !== 'incorrectly'){
         const lastChar = calc.charAt(calc.length - 1);
      if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || calc === ''){
         return;
      };
      setCalc(eval(calc).toString());
      }
   }
   const deleteLast = () => {
      if(calc === ''){return};
      setCalc(calc.slice(0, -1));
   }
   const clear = () => {
      setCalc('');
      setResult('');
   }

   return (
      <div className='max-w-[300px]'>
         <motion.div
         initial={{
            y: -100,
            opacity: 0,
         }}
         animate={{
            y: 0,
            opacity: 1
         }}
         transition={{
            delay: 0.2
         }}
         className='p-3 bg-[#0D707D] rounded-t-[20px]'>
            <div className={`flex justify-end p-3 rounded-[5px] bg-white text-black ${
            calc.length > 10 ? 'break-all' : ''}`}>
               {result ? <span className='text-slate-500 text-sm mr-2'>({result})</span> : ''}
               {calc || '0'}
            </div>
         </motion.div>
         <motion.div
         initial={{
            y: -100,
            opacity: 0,
         }}
         animate={{
            y: 0,
            opacity: 1
         }}
         transition={{
            delay: 0.1
         }}
         className='flex items-center'>
            <button onClick={() => updateCalc('+')} className='calc-btn calc-operator'>+</button>
            <button onClick={() => updateCalc('-')} className='calc-btn calc-operator'>-</button>
            <button onClick={() => updateCalc('/')} className='calc-btn calc-operator'>/</button>
            <button onClick={() => updateCalc('*')} className='calc-btn calc-operator'>*</button>
         </motion.div>
         <div className='flex'>
         <div className='grid grid-cols-3'>
            { numDigits() }
         </div>
         <motion.div
         initial={{
            x: 100,
            opacity: 0,
         }}
         animate={{
            x: 0,
            opacity: 1
         }}
         transition={{
            delay: 0.3
         }}
         className='flex flex-col'>
            <button onClick={() => updateCalc('.')} className='calc-btn calc-cookie'>.</button>
            <button onClick={() => deleteLast()} className='calc-btn calc-cookie'>DEL</button>
            <button onClick={() => clear()} className='calc-btn calc-cookie'>C</button>
         </motion.div>
         </div>
         <div className='flex'>
            <motion.div
            initial={{
               x: -100,
               opacity: 0,
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            transition={{
               delay: 0.4
            }}
            >
            <button
            onClick={() => updateCalc('0')} className='calc-last-btn calc-btn rounded-bl-[20px] text-2xl text-black hover:bg-slate-100 active:bg-slate-500 active:duration-0 transition duration-500'>0</button>
            </motion.div>
            <motion.div
            initial={{
               x: 100,
               opacity: 0,
            }}
            animate={{
               x: 0,
               opacity: 1
            }}
            transition={{
               delay: 0.4
            }}>
            <button
            onClick={calculate} className='calc-last-btn calc-btn rounded-br-[20px] text-2xl text-white bg-[#F63B3B] hover:bg-[#ea3535] active:bg-[#a41717] active:duration-0 transition duration-500'>=</button>
            </motion.div>
         </div>
      </div>
   );
}

export default Calculator;