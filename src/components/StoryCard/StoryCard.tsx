import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type Story = {
  id: number;
  title: string;
  shortDesc: string;
  imgUrl: StaticImageData;
  author: string;
  createdAt: string;
};

type StoryCardProps = {
  story: Story;
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
      <div className="h-[250px] bg-gray-400">
        <Image
          src={story?.imgUrl}
          alt="article-image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1 h-full md:justify-between py-2 px-2 md:px-0">
        <div>
          <h3 className="text-lg md:text-xl font-bold">{story.title}</h3>
          <p className="text-sm md:text-base text-gray-800">{story.shortDesc}</p>
        </div>
        <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={`/stories/${story.id}`}>Read More</Link>
      </div>
    </div>
  )
}
