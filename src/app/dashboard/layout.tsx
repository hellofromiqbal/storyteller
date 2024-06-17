import React from 'react';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
      <div className='h-16 bg-white backdrop-blur-lg bg-opacity-75 sticky top-0 flex justify-between items-center px-5 md:px-10 lg:px-20 border-b-1'>
        <ul className='flex gap-5 md:gap-10'>
          <li className='font-bold m:text-lg'><a href="#following">For You</a></li>
          <li className='m:text-lg'><a href="#forYou">Following</a></li>
        </ul>
        <span className='w-[35px] md:w-[40px] h-[35px] md:h-[40px] bg-black rounded-full'>
        </span>
      </div>
      <div className='flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
    </div>
  )
}
