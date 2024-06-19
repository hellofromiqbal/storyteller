/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';

export default function Following() {
  return (
    <section id="trendingStories" className="flex flex-col gap-4 md:py-5">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {staticStories.map((story) => (
          <StoryCard key={story.id} story={story}/>
        ))}
      </div>
    </section>
  )
}
