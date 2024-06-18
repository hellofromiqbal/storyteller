import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar';
import FloatWriteButton from '@/components/FloatWriteButton/FloatWriteButton';
import React from 'react';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
      <div className='h-16 bg-white sticky top-0 flex justify-between items-center px-5 md:px-10 lg:px-20 border-b-1'>
        <DashboardNavbar/>
        <span className='hidden md:flex w-[35px] md:w-[40px] h-[35px] md:h-[40px] bg-black rounded-full'>
        </span>
      </div>
      <div className='flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
      <FloatWriteButton/>
    </div>
  )
}
