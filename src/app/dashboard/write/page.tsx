import BackButton from '@/components/Buttons/BackButton/BackButton';
import React from 'react';

export default function Write() {
  return (
    <section className=''>
      <div className='flex justify-center items-center h-16 relative border-b-1 md:border-b-0'>
        <div className='h-full flex justify-center absolute left-0 px-3'>
          <BackButton/>
        </div>
        <h2 className='text-2xl font-bold'>Write</h2>
      </div>
      <form className='flex flex-col gap-4 px-3 py-2 lg:w-4/5 lg:mx-auto'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title" className='text-lg font-semibold'>Title</label>
          <input id='title' type="text" className='px-2 py-1 border rounded-md' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="shortDesc" className='text-lg font-semibold'>Short Description</label>
          <input id='shortDesc' type="text" className='px-2 py-1 border rounded-md' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="storyImage" className='text-lg font-semibold'>Story Image</label>
          <input id='storyImage' type="file" className='px-2 py-1 border rounded-md' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="textContent" className='text-lg font-semibold'>Text Content</label>
          <textarea
            name="textContent"
            id="textContent"
            className='px-2 py-1 border rounded-md resize-none h-[250px]'
          ></textarea>
        </div>
        <button className='py-2 bg-green-500 text-white rounded-full'>Post</button>
      </form>
    </section>
  )
}
