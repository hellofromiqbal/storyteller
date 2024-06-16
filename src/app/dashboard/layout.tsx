import React from 'react';

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col pt-16'>
      <div className='flex justify-evenly items-center h-16 bg-red-200 sticky top-16'>
        <h1>Trending</h1>
        <h1>New</h1>
        <h1>Recommended</h1>
      </div>
      <div className='flex flex-col gap-4 py-5 md:py-0 px-5 md:px-10 lg:px-20'>
        {children}
      </div>
    </div>
  )
}
