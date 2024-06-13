/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const { id } = useParams();

  return (
    <>
      <section className="flex flex-col gap-4 py-10 px-5 md:px-10 lg:px-20">
        <h1>Hello world</h1>
        <p>{id}</p>
      </section>
    </>
  )
}
