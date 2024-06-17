'use client'

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { BsFeather } from "react-icons/bs";

export default function FloatWriteButton() {
  const router = useRouter();
  const pathName = usePathname();

  if(pathName === "/dashboard/write") {
    return null;
  };

  return (
    <button
      className='md:hidden w-[60px] md:w-[60px] h-[60px] md:h-[60px] bg-green-500 rounded-full fixed right-3 bottom-3 flex justify-center items-center shadow-md'
      onClick={() => router.push("/dashboard/write")}
    >
      <BsFeather className='text-white text-3xl'/>
    </button>
  )
}
