import React from 'react';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';
import WriteStoryForm from '@/components/Forms/WriteStoryForm/WriteStoryForm';

export default function Write() {
  return (
    <section className=''>
      <DashboardSubRoutesTitleSection/>
      <div className='px-3 py-2 lg:w-4/5 lg:mx-auto'>
        <WriteStoryForm/>
      </div>
    </section>
  )
}
