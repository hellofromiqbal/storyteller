import React from 'react'
import BackButton from '../Buttons/BackButton/BackButton'

export default function DashboardSubRoutesTitleSection() {
  return (
    <div className='flex justify-center items-center h-16 sticky top-0 border-b-1 md:border-b-0'>
      <div className='h-full flex justify-center absolute left-0 px-3'>
        <BackButton/>
      </div>
      <h2 className='text-2xl font-bold'>Write</h2>
    </div>
  )
}
