/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';
import StoryInteractionButtons from '@/components/StoryInteractionButtons/StoryInteractionButtons';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const { id } = useParams();
  const storyId = Number(id);

  return (
    <>
      <section className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl md:text-5xl font-bold'>{staticStories[storyId-1].title}</h1>
          <p className='text-lg text-gray-700 italic'>{staticStories[storyId-1].shortDesc}</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col ps-3 border-s-4 border-orange-300 w-max'>
            <h3>By <Link href={"#"} className='font-bold'>{staticStories[storyId-1].author}</Link></h3>
            <p className='text-sm'>{staticStories[storyId-1].createdAt}</p>
          </div>
          <StoryInteractionButtons/>
        </div>
        <Image
          src={staticStories[storyId-1].imgUrl}
          alt='story-img'
          className='w-full h-full object-cover object-center'
        />
        <div className='flex flex-col gap-2'>
          {staticStories[storyId-1].textContent.map((paragraph: string, index: number) => (
            <p key={index} className='text-justify indent-10 md:indent-12'>{paragraph}</p>
          ))}
        </div>
        <div className='self-end'>
          <StoryInteractionButtons/>
        </div>
      </section>
      <section className='md:hidden'>
        <div className='w-full h-[250px] flex justify-center items-center bg-gray-300'>
          <h4>Advertisement</h4>
        </div>
      </section>
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
