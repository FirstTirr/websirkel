import RotatingText from "./magicui/rotating-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[95vh] text-center p-8 dark:text-white">
       <div className="absolute inset-0 -z-10">
          <Image 
            src="/smk.jpg" 
            alt="Background SMK" 
            fill
            priority
          />
          <div/>
        </div>
        
        <div>
          <h1 className="flex flex-wrap items-baseline text-5xl md:text-6xl font-bold text-gray-950 dark:text-white">
            <span className="mr-1">Titik Kumpul</span>
            <RotatingText
              texts={["Pemula", "Programmer", "wibu"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 dark:bg-cyan-600 text-black dark:text-white overflow-hidden align-baseline py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden align-baseline pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>
        <div>
          <p className="max-w-lg mt-4 text-2xl sm:text-3xl text-center font-semibold line-clamp-2 mr-1 text-gray-950 dark:text-gray-300">
          A Group of Dedicated Teenagers Who Struggle to Sharpen Their Skills in the Technological Era to Compete with AI
          </p>
        </div>
        <ShimmerButton className="shadow-2xl mt-12 dark:bg-gray-800">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          About Us
          </span>
        </ShimmerButton>
      </div>
    </>
  );
};

export default Hero;