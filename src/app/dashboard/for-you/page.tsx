/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';

export default function ForYou() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-3 gap-4">
      {staticStories.map((story) => (
        <StoryCard key={story.id} story={story}/>
      ))}
    </section>
  )
}
