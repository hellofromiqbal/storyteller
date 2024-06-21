import React from 'react'
import BackButton from '../Buttons/BackButton/BackButton'

type DashboardSubRoutesTitleSectionProps = {
  title: string;
};

export default function DashboardSubRoutesTitleSection({ title }: DashboardSubRoutesTitleSectionProps) {
  return (
    <div className='flex justify-center items-center h-16 sticky top-0 border-b-0 md:border-b-0 bg-white'>
      <div className='h-full flex justify-center absolute left-0 px-3'>
        <BackButton/>
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
  )
}
