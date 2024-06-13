import React from 'react';

type SectionTitleProps = {
  title: string;
  showLine?: boolean;
};

export default function SectionTitle({ title, showLine = false}: SectionTitleProps) {
  return (
    <div className="flex items-center gap-5">
      <h2 className="text-2xl md:text-3xl font-bold text-nowrap">{title}</h2>
      <span className={`w-full border-[.5px] ${showLine ? 'border-gray-200' : 'border-transparent'}`}></span>
    </div>
  )
}
