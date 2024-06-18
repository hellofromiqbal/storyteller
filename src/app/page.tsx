/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import sitting0 from '@/assets/images/avatar/sitting0.png';
import sitting1 from '@/assets/images/avatar/sitting1.png';
import bust7 from '@/assets/images/avatar/bust7.png';
import StoryCard from "@/components/StoryCard/StoryCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionLink from "@/components/SectionLink/SectionLink";
import { staticStories } from "@/assets/data/static";
// import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* Home Navbar */}
      {/* <Navbar/> */}

      {/* Jumbotron */}
      <section className="flex flex-col-reverse md:flex-row min-h-screen md:min-h-[70vh] lg:min-h-screen px-5 md:px-10 lg:px-20">
        <div className="flex-1 flex flex-col md:justify-center text-start gap-1 md:gap-2">
          <h1 className="text-3xl md:text-5xl font-bold">You're the storyteller we've been waiting for.</h1>
          <h2 className="md:text-xl lg:text-lg text-gray-600 lg:w-3/4">Let us read your best stories that inspire us every day!</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[280px] md:w-[320px] lg:w-[350px] h-[280px] md:h-[320px] lg:h-[350px] bg-orange-300 rounded-full relative top-10 md:top-0 md:bottom-10 flex justify-center items-center">
            <Image
              src={sitting0}
              alt="avatar"
              width={300}
              height={37}
              className="hidden md:block scale-x-[-1]"
            />
            <Image
              src={sitting1}
              alt="avatar-mobile"
              width={250}
              height={37}
              className="md:hidden scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      {/* Trending Stories */}
      <section id="trendingStories" className="flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20">
        <SectionTitle title="Trending Stories"/>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {staticStories.map((story) => (
            <StoryCard key={story.id} story={story}/>
          ))}
        </div>
        <SectionLink/>
      </section>

      {/* New Stories */}
      <section id="newStories" className="flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20">
        <SectionTitle title="New Stories"/>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {staticStories.map((story) => (
            <StoryCard key={story.id} story={story}/>
          ))}
        </div>
        <SectionLink showLines={false}/>
      </section>

      {/* Banner */}
      <section className="flex flex-row-reverse items-center min-h-max bg-orange-300 px-5 py-10">
        <div className="flex-1 flex flex-col md:justify-center text-start gap-4">
          <div>
            <h1 className="text-2xl font-bold">Share Positivity & Grow Together.</h1>
            <p className="text-lg text-gray-600 lg:w-3/4">Spread good things through your inspirational stories.</p>
          </div>
          <Link className="px-3 py-2 w-max bg-black text-white" href={"#"}>Become a Storyteller</Link>
        </div>
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="w-[240px] h-[240px] bg-white rounded-full flex justify-center items-center">
            <Image
              src={bust7}
              alt="avatar"
              width={200}
              height={37}
            />
          </div>
        </div>
      </section>

      {/* Editor's Choice */}
      <section id="editorsChoice" className="flex flex-col gap-4 py-5 px-5 md:px-10 lg:px-20">
        <SectionTitle title="Editor's Choice"/>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          {staticStories.map((story) => (
            <StoryCard key={story.id} story={story}/>
          ))}
        </div>
        <SectionLink/>
      </section>
    </>
  );
}
