import React from 'react';
import Link from 'next/link';

export default function QuickProfileInfo() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex flex-col items-center gap-1'>
        <div className='w-[150px] h-[150px] rounded-full bg-gray-300'></div>
        <p className='font-medium'>@hellofromiqbal</p>
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center min-w-[100px] gap-1'>
          <span className='font-medium'>8</span>
          <span className='text-gray-600 text-sm'>Following</span>
        </div>
        <div className='flex flex-col items-center min-w-[100px] gap-1 border-x'>
          <span className='font-medium'>0</span>
          <span className='text-gray-600 text-sm'>Followers</span>
        </div>
        <div className='flex flex-col items-center min-w-[100px] gap-1'>
          <span className='font-medium'>78</span>
          <span className='text-gray-600 text-sm'>Likes</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <Link href={"/dashboard/profile/edit"} className='px-4 py-2 bg-gray-200 rounded-md font-medium'>Edit profile</Link>
        <Link href={"/dashboard/profile/add-friends"} className='px-4 py-2 bg-gray-200 rounded-md font-medium'>Add friends</Link>
      </div>
      <div className='flex justify-center'>
        <p>Web Developer</p>
      </div>
    </div>
  )
}
