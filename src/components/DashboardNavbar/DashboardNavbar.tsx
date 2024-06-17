'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardNavbar() {
  const pathName = usePathname();
  
  return (
    <ul className='flex gap-5 md:gap-10'>
      <li>
        <Link
          href={"/dashboard/for-you"}
          className={`${pathName === "/dashboard/for-you" && 'font-bold'} m:text-lg`}
        >For You</Link>
      </li>
      <li>
        <Link
          href={"/dashboard/following"}
          className={`${pathName === "/dashboard/following" && 'font-bold'} m:text-lg`}
        >Following</Link>
      </li>
    </ul>
  )
}
