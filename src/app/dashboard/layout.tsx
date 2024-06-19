import React from 'react';
import TopNavbar from '@/components/DashboardNavbar/TopNavbar/TopNavbar';
import BottomNavbar from '@/components/DashboardNavbar/BottomNavbar/BottomNavbar';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
      <TopNavbar/>
      <div className='pt-0 pb-20 md:pb-5 px-0 md:px-10 lg:px-20'>
        {children}
      </div>
      <BottomNavbar/>
    </div>
  )
}
