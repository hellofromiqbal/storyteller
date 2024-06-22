'use client'

import React from 'react';
import { ProfileContentNavigationProps } from '@/libs/types';

export default function ProfileContentNavigation({ selectedNavigation, handleSelectedNavigation }: ProfileContentNavigationProps) {
  return (
    <div className={`h-16 bg-white sticky top-0 flex justify-center items-center md:px-10 lg:px-20 border-b-1`}>
      <ul className='w-full md:w-max h-full flex justify-evenly'>
        <li className={`w-full h-full border-b-2 ${selectedNavigation === 'stories' && 'border-blue-600 font-semibold'}`}>
          <button
            className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
            onClick={() => handleSelectedNavigation('stories')}
          >Stories</button>
        </li>
        <li className={`w-full h-full border-b-2 ${selectedNavigation === 'likes' && 'border-blue-600 font-semibold'}`}>
          <button
            className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
            onClick={() => handleSelectedNavigation('likes')}
          >Likes</button>
        </li>
        <li className={`w-full h-full border-b-2 ${selectedNavigation === 'archived' && 'border-blue-600 font-semibold'}`}>
          <button
            className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
            onClick={() => handleSelectedNavigation('archived')}
          >Archived</button>
        </li>
      </ul>
    </div>
  )
}
