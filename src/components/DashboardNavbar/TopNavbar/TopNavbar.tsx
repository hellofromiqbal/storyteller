'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsFeather } from 'react-icons/bs';

export default function TopNavbar() {
  const pathName = usePathname();

  return (
    <div className={`${pathName !== '/dashboard/for-you' && pathName !== '/dashboard/following' ? 'hidden' : ''} h-16 bg-white sticky top-0 flex justify-between items-center px-5 md:px-10 lg:px-20 border-b-1`}>
      <ul className='w-full md:w-max h-full flex justify-evenly'>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/for-you"}
            className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg ${pathName === "/dashboard/for-you" && 'font-bold border-b-2 border-blue-600'}`}
          >For You</Link>
        </li>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/following"}
            className={`md:px-5 w-full h-full flex justify-center items-center md:text-lg ${pathName === "/dashboard/following" && 'font-bold border-b-2 border-blue-600'}`}
          >Following</Link>
        </li>
      </ul>
      <div className='hidden md:flex items-center gap-10'>
        <Link href={"/dashboard/write"} className='text-3xl'>
          <BsFeather/>
        </Link>
        <Link href={"/dashboard/profile"} className='w-[35px] md:w-[40px] h-[35px] md:h-[40px] bg-gray-100 rounded-full border-2 border-gray-200'>
        </Link>
      </div>
    </div>
  )
}
