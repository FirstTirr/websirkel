"use client"

import RotatingText from "./magicui/rotating-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-w-full min-h-[100vh] text-center p-8 dark:text-white">
       <div className="absolute inset-0 -z-10">
          <Image 
            src="/smk.jpg" 
            alt="Background SMK" 
            fill
            priority
          />
        </div>
        
        <div>
          <h1 className="flex flex-wrap items-baseline text-5xl md:text-6xl font-bold text-gray-950 dark:text-white">
            <span className="mr-1"><span className="text-blue-400">Titik</span> Kumpul</span>
            <RotatingText
              texts={["Pemula", "Programmer", "Wibu"]}
              mainClassName="px-2 sm:px-2 md:px-3  text-black dark:text-white overflow-hidden align-baseline py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
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
        <div className="max-w-6xl mx-auto font-semibold text-2xl sm:text-3xl text-gray-50 dark:text-gray-300 mt-11">
        <TextAnimate
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5,
        },
        show: (i) => ({
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
            y: {
              type: "spring",
              damping: 12,
              stiffness: 200,
              mass: 0.8,
            },
            rotate: {
              type: "spring",
              damping: 8,
              stiffness: 150,
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 300,
            },
          },
        }),
        exit: (i) => ({
          opacity: 0,
          y: 30,
          rotate: 45,
          scale: 0.5,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
          },
        }),
      }}
      by="character"
    >
      A Group of Dedicated Teenagers Who Struggle to Sharpen Their Skills in the Technological Era To Compete with AI
    </TextAnimate>
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