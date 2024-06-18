import React from 'react';
import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
      <DashboardNavbar/>
      <div className='flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
      {/* <FloatWriteButton/> */}
    </div>
  )
}
