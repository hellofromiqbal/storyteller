import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col pt-16'>
      <Navbar/>
      <div className='flex flex-col gap-4 py-5 md:py-0 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
    </div>
  )
}
