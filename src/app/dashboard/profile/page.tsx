import React from 'react';
import Link from 'next/link';
import DashboardSubRoutesTitleSection from '@/components/DashboardSubRoutesTitleSection/DashboardSubRoutesTitleSection';
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Write() {
  return (
    <section>
      <DashboardSubRoutesTitleSection title='Profile'/>
      <div className='px-3 py-3 flex flex-col'>
        <div className='flex flex-col items-center gap-2'>
          <div className='w-[150px] h-[150px] rounded-full bg-gray-300'></div>
        </div>
        <div className='flex flex-col gap-2 py-4 border-b-1'>
          <h3 className='text-sm text-gray-600'>About you</h3>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>Name</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>Iqbal <IoChevronForwardOutline/></button>
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>Username</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>hellofromiqbal <IoChevronForwardOutline/></button>
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>Bio</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>Web Developer <IoChevronForwardOutline/></button>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 py-4 border-b-1'>
          <h3 className='text-sm text-gray-600'>Social</h3>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>Instagram</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>@hellofromiqbal <IoChevronForwardOutline/></button>
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>YouTube</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>@hellofromiqbal <IoChevronForwardOutline/></button>
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-start font-bold'>Twitter</span>
              <span className='text-end font-medium'>
                <button className='flex items-center w-max ms-auto'>@hellofromiqbal <IoChevronForwardOutline/></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
