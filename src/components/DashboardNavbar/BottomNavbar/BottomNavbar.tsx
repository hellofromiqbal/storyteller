'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IoSearch,
  IoSearchOutline,
  IoHomeOutline,
  IoHomeSharp,
  IoNotifications,
  IoNotificationsOutline
} from "react-icons/io5";
import { BsFeather } from 'react-icons/bs';


export default function BottomNavbar() {
  const pathName = usePathname();

  return (
    <div className='md:hidden h-16 bg-white fixed w-full bottom-0 flex justify-between items-center border-t-1'>
      <ul className='w-full md:w-max h-full flex justify-evenly'>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/for-you"}
            className={`md:px-5 w-full h-full flex justify-center items-center text-2xl ${pathName === "/dashboard/for-you" || pathName === "/dashboard/following" ? 'font-bold border-t-2 border-blue-600'  : ''}`}
          >
            {pathName === "/dashboard/for-you" || pathName === "/dashboard/following" ?
              <IoHomeSharp/>
              :
              <IoHomeOutline/>
            }
          </Link>
        </li>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/search"}
            className={`md:px-5 w-full h-full flex justify-center items-center text-2xl ${pathName === "/dashboard/search" && 'font-bold border-t-2 border-blue-600'}`}
          >
            {pathName === "/dashboard/search" ?
              <IoSearch/>
              :
              <IoSearchOutline/>
            }
          </Link>
        </li>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/write"}
            className={`md:px-5 w-full h-full flex justify-center items-center text-2xl ${pathName === "/dashboard/write" && 'font-bold border-t-2 border-blue-600'}`}
          >
            <BsFeather/>
          </Link>
        </li>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/notifications"}
            className={`md:px-5 w-full h-full flex justify-center items-center text-2xl ${pathName === "/dashboard/notifications" && 'font-bold border-t-2 border-blue-600'}`}
          >
            {pathName === "/dashboard/notifications" ?
              <IoNotifications/>
              :
              <IoNotificationsOutline/>
            }
          </Link>
        </li>
        <li className='w-full h-full'>
          <Link
            href={"/dashboard/profile"}
            className={`md:px-5 w-full h-full flex justify-center items-center text-2xl ${pathName === "/dashboard/profile" && 'font-bold border-t-2 border-blue-600'}`}
          >
            <span className='w-[30px] h-[30px] bg-gray-100 rounded-full border-2 border-gray-200'>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
