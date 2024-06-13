/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { staticStories } from '@/assets/data/static';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const { id } = useParams();
  const storyId = Number(id);

  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className='text-5xl font-bold'>{staticStories[storyId].title}</h1>
        <p className='text-lg text-gray-700 italic'>{staticStories[storyId].shortDesc}</p>
      </div>
      <Image
        src={staticStories[storyId].imgUrl}
        alt='story-img'
        className='w-full h-full object-cover object-center'
      />
      <div className='flex flex-col gap-2'>
        {staticStories[storyId].textContent.map((paragraph: string, index: number) => (
          <p key={index} className='text-justify indent-16'>{paragraph}</p>
        ))}
      </div>
    </>
  )
}
