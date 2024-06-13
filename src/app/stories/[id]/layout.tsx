import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='pt-16 grid grid-cols-3 gap-5 px-5 md:px-10 lg:px-20'>
      <section className="col-span-2 flex flex-col gap-4 py-10">
        {children}
      </section>
      <aside className='col-span-1 py-10'>Aside Content</aside>
    </div>
  )
}
