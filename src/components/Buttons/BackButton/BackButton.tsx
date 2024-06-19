'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className='flex gap-1 items-center font-medium text-2xl md:text-lg'
      onClick={() => router.back()}
    >
      <IoArrowBackSharp/>
      <span className='hidden md:flex'>Back</span>
    </button>
  )
}
