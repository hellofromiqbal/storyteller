/* eslint-disable react/no-unescaped-entities */
import { staticStories } from '@/assets/data/static';
import SectionLink from '@/components/SectionLink/SectionLink';
import StoryCard from '@/components/StoryCard/StoryCard';
import React from 'react';

export default function Dashboard() {
  return (
    <section id="trendingStories" className="flex flex-col gap-4">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {staticStories.map((story) => (
          <StoryCard key={story.id} story={story}/>
        ))}
      </div>
    </section>
  )
}
