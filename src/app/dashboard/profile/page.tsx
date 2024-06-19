import React from 'react';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';

export default function Write() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Profile'/>
      <div className='px-3 py-2'>
        <h4 className='text-gray-500'>Your profile page</h4>
      </div>
    </section>
  )
}
