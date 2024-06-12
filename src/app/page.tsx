import Image from "next/image";
import sitting0 from '@/assets/images/sitting0.png';
import sitting1 from '@/assets/images/sitting1.png';

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen md:min-h-[70vh] lg:min-h-screen">
      <div className="flex-1 flex flex-col md:justify-center text-center md:text-start gap-1 md:gap-2">
        <h1 className="text-3xl md:text-5xl font-bold">Everyone is a journalist.</h1>
        <h2 className="md:text-xl lg:text-lg text-gray-600 lg:w-3/4">A small window to spread your positive information to the rest of the world.</h2>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-orange-300 rounded-full relative top-10 md:top-0 md:bottom-10">
          <Image
            src={sitting0}
            alt="avatar"
            width={300}
            height={37}
            className="hidden md:block scale-x-[-1] absolute top-6 right-10"
          />
          <Image
            src={sitting1}
            alt="avatar-mobile"
            width={200}
            height={37}
            className="md:hidden scale-x-[-1] absolute top-4 right-6"
          />
        </div>
      </div>
    </div>
  );
}
