import React from 'react';
import {
  IoHeart,
  IoHeartOutline,
  IoBookmark,
  IoBookmarkOutline,
  IoShareSocialOutline
} from "react-icons/io5";

export default function StoryInteractionButtons() {
  return (
    <div className='flex gap-4 md:gap-8'>
      <button>
        <IoHeartOutline size={28}/>
      </button>
      <button className='text-2xl'>
        <IoBookmarkOutline/>
      </button>
      <button className='text-2xl'>
        <IoShareSocialOutline/>
      </button>
    </div>
  )
}
