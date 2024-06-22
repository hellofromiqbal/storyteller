import React from 'react';
import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';

export default function ProfileContentStories() {
  return (
    <>
      {staticStories.map((story) => (
        <StoryCard key={story.id} story={story}/>
      ))}
    </>
  )
}
