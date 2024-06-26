import React from 'react';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';
import QuickProfileInfo from '@/components/QuickProfileInfo/QuickProfileInfo';
import ProfileContents from '@/components/ProfileContents/ProfileContents';

export default function Profile() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Profile'/>
      <div className='md:px-3 lg:px-0 py-3 flex flex-col gap-3'>
        <QuickProfileInfo/>
        <ProfileContents/> 
      </div>
    </section>
  )
}
