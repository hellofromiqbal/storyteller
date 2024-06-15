import React from 'react';
import Image from 'next/image';
import standing3 from '@/assets/images/avatar/standing3.png';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';

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
        <div className='w-4/5 mx-auto'>
          <SignUpForm/>
        </div>
      </section>
    </div>
  )
}