'use client'

import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { registerFormSchema } from '@/helpers/zodSchema';
import { auth, db } from '@/services/firebase';
import type { newUser } from '@/libs/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(registerFormSchema) });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleNewUser = async (data: newUser) => {
    setIsSubmitting(true);
    try {
      // Create new user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      // Add additional user data to Firestore Database
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });

      notifySuccess("User created successfully");
      reset();
    } catch (error) {
      console.error("Error adding new user: ", error);
      notifyFailed("Something's wrong...");
    } finally {
      setIsSubmitting(false);
    };
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleNewUser)}>
      <h2 className='md:hidden text-3xl font-bold'>Register</h2>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor="firstName" className='font-medium'>First Name:</label>
            <input id='firstName' type="text" className='px-2 py-1 border' {...register('firstName')}/>
            {errors.firstName && <span className='text-xs text-red-600'>{errors.firstName.message}</span>}
          </div>
          <div className='flex-1 flex flex-col gap-1'>
            <label htmlFor="lastName" className='font-medium'>Last Name:</label>
            <input id='lastName' type="text" className='px-2 py-1 border' {...register('lastName')}/>
            {errors.lastName && <span className='text-xs text-red-600'>{errors.lastName.message}</span>}
          </div>
        </div>
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
        <div className='flex flex-col gap-1'>
          <label htmlFor="confirmPassword" className='font-medium'>Confirm password:</label>
          <input id='confirmPassword' type="password" className='px-2 py-1 border' {...register('confirmPassword')}/>
          {errors.confirmPassword && <span className='text-xs text-red-600'>{errors.confirmPassword.message}</span>}
        </div>
      </div>
      <button className={`${isSubmitting ? 'bg-gray-300' : 'bg-green-500'} p-2 text-white rounded-full`}>{isSubmitting ? 'Signing Up...' : 'Sign Up'}</button>
    </form>
  )
}
