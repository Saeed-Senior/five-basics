import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import add from '../../../img/add.png';
import completed from '../../../img/completed.png';
import { useTranslation } from 'react-i18next';

function Todo() {

   const todo = useSelector((state: any) => state.todo);
   const [t, i18n] = useTranslation();
   const dispatch = useDispatch();
   const [inp, setInp] = useState('');

   const handleToggle = async (id: number) => {
      await dispatch({type: 'completed', payload: id});
      setTimeout(() => {
         dispatch({type: 'remove-task', payload: id});
      },500)
   }
   
   const handleChange = (e: any) => {
      return setInp(e.target.value);
   }

   const addTask = (e: any) => {
      if(inp.length > 0 || inp.length > 0 && e.keyCode === 13) {
         dispatch({
            type: 'add-task',
            payload: {
               id: Math.random().toString(36).substr(2, 9),
               text: inp,
               completed: false,
            }
         })
      }
      setInp('');
   }

   const write = t('write')

   return (
      <div className='container-main'>
         <motion.div
         initial={{
            opacity: 0,
            y: -100,
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         className='w-[360px] sm:w-[400px] min-h-[100px] shadow-xl'>
            <div className='bg-[#16E1D5] text-white text-2xl font-semibold text-center py-1'>
               <h2>{t('todo')}: {todo.length}</h2>
            </div>
            <div className='p-[10px] flex justify-between items-center'>
               <input onChange={handleChange} value={inp} className='outline-none text-black' placeholder={write} type="text" />
               <button onClick={addTask} className='w-[30px] flex items-center justify-center'>
                  <motion.img
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
                  className='w-[100%]' src={add} alt="add" />
               </button>
            </div>
            <ul className='px-[10px] pt-[10px] pb-[20px]'>
               {todo.length > 0 ? (
                  todo.map((i: any, idx: number) => {
                     return (
                        <AnimatePresence key={idx}>
                           {!i.completed && (
                              <motion.li
                              initial={{
                                 opacity: 0,
                                 x: 100,
                              }}
                              animate={{
                                 opacity: 1,
                                 x: 0,
                              }}
                              exit={{
                                 opacity: 0,
                                 x: 100,
                                 transition:{
                                    delay: 0.3
                                 }
                              }}
                              className='flex items-center space-x-2 shadow-lg p-[5px] my-3'>
                              <button
                                 onClick={() => handleToggle(i.id)}
                                 className='flex items-center justify-center h-[30px] w-[30px] border border-[#03E4F2] rounded-[50%]' > 
                                 <motion.img
                                 initial={{
                                    opacity: 0,
                                    scale: 0
                                 }}
                                 animate={{
                                    opacity: 0,
                                    x: 0,
                                 }}
                                 exit={{
                                    opacity: 1,
                                    scale: 1.1
                                 }}
                                 className='w-full h-full' src={completed} alt="img" />
                              </button>
                              <span>{i.text}</span>
                              </motion.li>
                           )}
                        </AnimatePresence>
                     )
                  })
               ) : (
                  <ul className='p-[10px]'>

                  </ul>
               )}
            </ul>
         </motion.div>
      </div>
   );
}

export default Todo;