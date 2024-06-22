'use client'

import React, { useState } from 'react';
import ProfileContentNavigation from './ProfileContentNavigation/ProfileContentNavigation';
import ProfileContentStories from './ProfileContentStories/ProfileContentStories';
import ProfileContentLikes from './ProfileContentLikes/ProfileContentLikes';
import ProfileContentArchived from './ProfileContentArchived/ProfileContentArchived';
import { type NavigationOptions } from '@/libs/types';

export default function ProfileContent() {
  const [selectedNavigation, setSelectedNavigation] = useState<NavigationOptions>('stories');
  const handleSelectedNavigation = (navigation: NavigationOptions) => {
    setSelectedNavigation((prev) => (prev = navigation));
  };
  const profileContents: { [key in NavigationOptions]: JSX.Element } = {
    'stories': <ProfileContentStories />,
    'likes': <ProfileContentLikes />,
    'archived': <ProfileContentArchived />,
  };

  return (
    <div className='flex flex-col'>
      <ProfileContentNavigation selectedNavigation={selectedNavigation} handleSelectedNavigation={handleSelectedNavigation}/>
      <section className="flex flex-col md:grid md:grid-cols-3 gap-4 md:py-5 min-h-screen">
        {profileContents[selectedNavigation]}
      </section>
    </div>
  )
}
