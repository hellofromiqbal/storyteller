'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardNavbar() {
  const pathName = usePathname();
  
  return (
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
  )
}
