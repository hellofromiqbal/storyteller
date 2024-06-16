import React from 'react';
import Image from 'next/image';
import standing3 from '@/assets/images/avatar/standing3.png';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';

export default function Login() {
  return (
    <div className='md:min-h-screen flex flex-row-reverse'>
      <section className='flex-1 hidden md:flex justify-center items-center bg-orange-300 overflow-hidden'>
        <div className="w-[280px] md:w-[320px] lg:w-[350px] h-[280px] md:h-[320px] lg:h-[350px] bg-white rounded-full relative top-10 md:top-0 md:bottom-10 flex justify-center items-center">
          <h3 className='absolute md:left-12 lg:left-5 md:text-8xl lg:text-9xl font-extrabold text-end flex flex-col'>
            <span>Log</span>
            <span>in.</span>
          </h3>
          <Image
            src={standing3}
            alt="avatar-mobile"
            width={200}
            height={37}
            className="scale-x-[-1] absolute -right-10"
          />
        </div>
      </section>
      <section className='flex-1 flex justify-center items-center py-20 md:py-0'>
        <div className='w-4/5 mx-auto'>
          <LoginForm/>
        </div>
      </section>
    </div>
  )
}
