import React from 'react';
import Image from 'next/image';
import standing3 from '@/assets/images/avatar/standing3.png';

export default function SignUp() {
  return (
    <div className='h-screen flex'>
      <section className='flex-1 hidden md:flex justify-center items-center bg-orange-300'>
        <div className="w-[280px] md:w-[320px] lg:w-[350px] h-[280px] md:h-[320px] lg:h-[350px] bg-white rounded-full relative top-10 md:top-0 md:bottom-10 flex justify-center items-center">
          <h3 className='absolute md:right-24 md:text-8xl lg:text-9xl font-extrabold w-1/3'>Sign Up.</h3>
          <Image
            src={standing3}
            alt="avatar-mobile"
            width={200}
            height={37}
            className="absolute -left-10"
          />
        </div>
      </section>
      <section className='flex-1 flex justify-center items-center'>
        <form className='flex flex-col gap-4 w-4/5 mx-auto'>
          <h2 className='md:hidden text-3xl font-bold'>Sign Up</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="fullname">Fullname:</label>
              <input id='fullname' type="text" className='px-2 py-1 border' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email:</label>
              <input id='email' type="email" className='px-2 py-1 border' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password">Password:</label>
              <input id='password' type="password" className='px-2 py-1 border' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input id='confirmPassword' type="confirmPassword" className='px-2 py-1 border' />
            </div>
          </div>
          <button className='p-2 bg-green-500 text-white rounded-full'>Sign Up</button>
        </form>
      </section>
    </div>
  )
}
