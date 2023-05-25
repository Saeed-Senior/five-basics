import React from 'react';

function Hexagon({image, border, bg}: any) {

   return (
      <div className={`hexagon relative ${border} cursor-pointer z-50`}>
      <div className='hexagon-inner bg-white absolute w-[99%] h-[99%] flex items-center justify-center'>
         <img className='max-w-[50px]' src={image} alt="img" />
      <div className={`transition duration-300 ${bg} absolute h-full w-full`}></div>
      </div>
   </div>
   );
}

export default Hexagon;