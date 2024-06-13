import Link from 'next/link';
import React from 'react';

type SectionLinkProps = {
  text?: string;
  url?: string;
  showLines?: boolean;
};

export default function SectionLink({ text = 'See More', url =  "#", showLines = true }: SectionLinkProps) {
  return (
    <div className="flex items-center gap-5 pt-5">
      <span className={`w-full border-[.5px] ${showLines ? 'border-gray-200' : 'border-transparent'}`}></span>
      <Link className="w-[350px] md:w-[300px] lg:w-[250px] h-[40px] flex justify-center items-center bg-black text-white mx-auto" href={url}>{text}</Link>
      <span className={`w-full border-[.5px] ${showLines ? 'border-gray-200' : 'border-transparent'}`}></span>
    </div>
  )
}
