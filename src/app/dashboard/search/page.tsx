import React from 'react';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';

export default function Search() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Search'/>
      <div className='px-3 py-2'>
        <input
          type="search"
          className='px-4 py-2 border rounded-full w-full'
          placeholder='Search something here...'
        />
      </div>
    </section>
  )
}
