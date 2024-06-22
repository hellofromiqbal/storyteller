import React from 'react';

export default function WriteStoryForm() {
  return (
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="title" className='font-medium'>Title</label>
        <input id='title' type="text" className='px-2 py-1 border rounded-md' />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="shortDesc" className='font-medium'>Short Description</label>
        <input id='shortDesc' type="text" className='px-2 py-1 border rounded-md' />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="storyImage" className='font-medium'>Story Image</label>
        <input id='storyImage' type="file" className='px-2 py-1 border rounded-md' />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="textContent" className='font-medium'>Text Content</label>
        <textarea
          name="textContent"
          id="textContent"
          className='px-2 py-1 border rounded-md resize-x-none min-h-[150px] md:min-h-[250px] lg:min-h-[200px]'
        ></textarea>
      </div>
      <button className='w-full py-2 bg-green-500 text-white rounded-full'>Post</button>
    </form>
  )
}
