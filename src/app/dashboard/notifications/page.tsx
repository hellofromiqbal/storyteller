import React from 'react';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';

export default function Notifications() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Notifications'/>
      <div className='px-3 py-2'>
        <h4 className='text-gray-500'>No Notification yet..</h4>
      </div>
    </section>
  )
}
