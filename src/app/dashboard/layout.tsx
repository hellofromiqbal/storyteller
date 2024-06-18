import React from 'react';
import TopNavbar from '@/components/DashboardNavbar/TopNavbar/TopNavbar';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
      <TopNavbar/>
      <div className='flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
      {/* <FloatWriteButton/> */}
    </div>
  )
}
