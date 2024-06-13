/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const { id } = useParams();
  const storyId = Number(id);

  return (
    <>
      <section className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl md:text-5xl font-bold'>{staticStories[storyId].title}</h1>
          <p className='text-lg text-gray-700 italic'>{staticStories[storyId].shortDesc}</p>
        </div>
        <Image
          src={staticStories[storyId].imgUrl}
          alt='story-img'
          className='w-full h-full object-cover object-center'
        />
        <div className='flex flex-col gap-2'>
          {staticStories[storyId].textContent.map((paragraph: string, index: number) => (
            <p key={index} className='text-justify indent-10 md:indent-12'>{paragraph}</p>
          ))}
        </div>
      </section>
      <div className='md:hidden w-full h-[250px] flex justify-center items-center bg-gray-300'>
        <h4>Advertisement</h4>
      </div>
      <section className='flex flex-col gap-4'>
        <h3 className='text-xl font-bold'>More Sories</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {staticStories.map((story) => (
            <StoryCard key={story.id} story={story}/>
          ))}
        </div>
      </section>
    </>
  )
}
