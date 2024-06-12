/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import sitting0 from '@/assets/images/avatar/sitting0.png';
import sitting1 from '@/assets/images/avatar/sitting1.png';
import bust7 from '@/assets/images/avatar/bust7.png';

import spacex from '@/assets/images/articles/spacex.jpg';
import cat from '@/assets/images/articles/cat.jpg';
import art from '@/assets/images/articles/art.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <>
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

      {/* Now Trending */}
      <section className="flex flex-col gap-4 py-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">Now Trending</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={spacex}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">SpaceX Launces Its Space Rocket</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={cat}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Why Do Cats Purring?</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={art}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Art Expo In Russia</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
        </div>
        <Link className="px-2 py-1 w-max bg-black text-white mx-auto" href={"#"}>See More</Link>
      </section>

      {/* Recently Posted */}
      <section className="flex flex-col gap-4 py-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">Recently Posted</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={spacex}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">SpaceX Launces Its Space Rocket</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={cat}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Why Do Cats Purring?</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={art}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Art Expo In Russia</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
        </div>
        <Link className="px-2 py-1 w-max bg-black text-white mx-auto" href={"#"}>See More</Link>
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
      <section className="flex flex-col gap-4 py-10 px-5 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold">Editor's Choice</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={spacex}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">SpaceX Launces Its Space Rocket</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={cat}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Why Do Cats Purring?</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
          <div className="flex flex-col h-max md:h-[400px] lg:h-[430px]">
            <div className="h-[250px] bg-gray-400">
              <Image
                src={art}
                alt="article-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 h-full md:justify-between py-2">
              <div>
                <h3 className="text-lg md:text-xl font-bold">Art Expo In Russia</h3>
                <p className="text-sm md:text-base text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex possimus incidunt sint omnis atque voluptate hic officiis culpa molestiae magnam!</p>
              </div>
              <Link className="w-max text-sm md:text-base text-black font-medium underline underline-offset-4" href={"#"}>Read More</Link>
            </div>
          </div>
        </div>
        <Link className="px-2 py-1 w-max bg-black text-white mx-auto" href={"#"}>See More</Link>
      </section>
    </>
  );
}
