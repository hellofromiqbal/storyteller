/* eslint-disable react/no-unescaped-entities */
import { staticStories } from '@/assets/data/static';
import sitting0 from '@/assets/images/avatar/sitting0.png';
import sitting1 from '@/assets/images/avatar/sitting1.png';
import bust7 from '@/assets/images/avatar/bust7.png';
import SectionLink from '@/components/SectionLink/SectionLink';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import StoryCard from '@/components/StoryCard/StoryCard';
import Image from 'next/image';
import React from 'react';

export default function Dashboard() {
  return (
    <section id="trendingStories" className="flex flex-col gap-4 py-5">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {staticStories.map((story) => (
          <StoryCard key={story.id} story={story}/>
        ))}
      </div>
      <SectionLink/>
    </section>
  )
}
