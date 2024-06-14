import React from 'react';
import Image from 'next/image';
import standing3 from '@/assets/images/avatar/standing3.png';

export default function Login() {
  return (
    <div className='h-screen flex flex-row-reverse'>
      <section className='flex-1 hidden md:flex justify-center items-center bg-orange-300'>
        <div className="w-[280px] md:w-[320px] lg:w-[350px] h-[280px] md:h-[320px] lg:h-[350px] bg-white rounded-full relative top-10 md:top-0 md:bottom-10 flex justify-center items-center">
          <h3 className='absolute md:-left-0 md:text-8xl lg:text-9xl font-extrabold w-1/3'>Log in.</h3>
          <Image
            src={standing3}
            alt="avatar-mobile"
            width={200}
            height={37}
            className="scale-x-[-1] absolute -right-10"
          />
        </div>
      </section>
      <section className='flex-1 flex justify-center items-center'>
        <form className='flex flex-col gap-4 w-4/5 mx-auto'>
          <h2 className='md:hidden text-3xl font-bold'>Login</h2>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email:</label>
              <input id='email' type="email" className='px-2 py-1 border' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="password">Password:</label>
              <input id='password' type="password" className='px-2 py-1 border' />
            </div>
          </div>
          <button className='p-2 bg-green-500 text-white rounded-full'>Login</button>
        </form>
      </section>
    </div>
  )
}
