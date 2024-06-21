import React from 'react';
import Link from 'next/link';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';
import { IoChevronForwardOutline } from "react-icons/io5";
import { staticStories } from '@/assets/data/static';
import StoryCard from '@/components/StoryCard/StoryCard';

export default function Profile() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Profile'/>
      <div className='md:px-3 lg:px-0 py-3 flex flex-col gap-3'>
        {/* Profile */}
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col items-center gap-1'>
            <div className='w-[150px] h-[150px] rounded-full bg-gray-300'></div>
            <p className='font-medium'>@hellofromiqbal</p>
          </div>
          <div className='flex'>
            <div className='flex flex-col items-center min-w-[100px] gap-1'>
              <span className='font-medium'>8</span>
              <span className='text-gray-600 text-sm'>Following</span>
            </div>
            <div className='flex flex-col items-center min-w-[100px] gap-1 border-x'>
              <span className='font-medium'>0</span>
              <span className='text-gray-600 text-sm'>Followers</span>
            </div>
            <div className='flex flex-col items-center min-w-[100px] gap-1'>
              <span className='font-medium'>78</span>
              <span className='text-gray-600 text-sm'>Likes</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <Link href={"/dashboard/profile/edit"} className='px-4 py-2 bg-gray-200 rounded-md font-medium'>Edit profile</Link>
            <Link href={"/dashboard/profile/add-friends"} className='px-4 py-2 bg-gray-200 rounded-md font-medium'>Add friends</Link>
          </div>
          <div className='flex justify-center'>
            <p>Web Developer</p>
          </div>
        </div>

        {/* Profile content */}
        <div className='flex flex-col'>
          <div className={`h-16 bg-white sticky top-0 flex justify-center items-center md:px-10 lg:px-20 border-b-1`}>
            <ul className='w-full md:w-max h-full flex justify-evenly'>
              <li className='w-full h-full border-b-2 border-blue-600'>
                <Link
                  href={"/dashboard/for-you"}
                  className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
                >Stories</Link>
              </li>
              <li className='w-full h-full'>
                <Link
                  href={"/dashboard/following"}
                  className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
                >Likes</Link>
              </li>
              <li className='w-full h-full'>
                <Link
                  href={"/dashboard/following"}
                  className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg`}
                >Archived</Link>
              </li>
            </ul>
          </div>
          <section className="flex flex-col md:grid md:grid-cols-3 gap-4 md:py-5">
            {staticStories.map((story) => (
              <StoryCard key={story.id} story={story}/>
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}
