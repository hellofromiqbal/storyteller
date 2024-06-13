import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='pt-16 md:grid grid-cols-3 gap-8 px-5 md:px-10 lg:px-20'>
      <section className="col-span-2 flex flex-col gap-10 py-5">
        {children}
      </section>
      <aside className='col-span-1 py-5 hidden md:block'>
        <div className='flex flex-col md:sticky top-24 gap-4'>
          <div className='flex justify-center items-center w-full md:h-[200px] lg:h-[250px] bg-gray-300'>
            <h4>Advertisement</h4>
          </div>
        </div>
      </aside>
    </div>
  )
}
