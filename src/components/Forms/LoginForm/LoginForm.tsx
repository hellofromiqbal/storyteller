'use client'

import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { loginFormSchema, signUpFormSchema } from '@/helpers/zodSchema';
import { auth, db } from '@/libs/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof loginFormSchema>;

export default function LoginForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(loginFormSchema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleLoginUser = async (data: { email: string; password: string }) => {
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      notifySuccess("User logged in successfully");
      reset();
    } catch (error) {
      console.error("Error adding new user: ", error);
      notifyFailed("Invalid email or password");
    } finally {
      setIsSubmitting(false);
    };
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleLoginUser)}>
      <h2 className='md:hidden text-3xl font-bold'>Sign Up</h2>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-medium'>Email:</label>
          <input id='email' type="email" className='px-2 py-1 border' {...register('email')}/>
          {errors.email && <span className='text-xs text-red-600'>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-medium'>Password:</label>
          <input id='password' type="password" className='px-2 py-1 border' {...register('password')}/>
          {errors.password && <span className='text-xs text-red-600'>{errors.password.message}</span>}
        </div>
      </div>
      <button className={`${isSubmitting ? 'bg-gray-300' : 'bg-green-500'} p-2 text-white rounded-full`}>{isSubmitting ? 'Signing Up...' : 'Sign Up'}</button>
    </form>
  )
}
