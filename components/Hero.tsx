"use client";

import { useEffect, useRef, useState } from "react";
import RotatingText from "./magicui/rotating-text";
import { ScratchToReveal } from "./magicui/scratch-to-reveal";
import { ShimmerButton } from "./magicui/shimmer-button";
import { TextAnimate } from "./magicui/text-animate";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Carousel from "./ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
// Import Vanta
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import { SmoothCursor } from "./magicui/smootCursor";

const slideData = [
  {
    title: "foto alfa",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto apis",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto fajar",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto fathir",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto ramses",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto arjuna",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto atha",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto vino",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "foto bodi",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const people = [
  {
    id: 1,
    name: "alfa",
    designation: "Software Engineer",
    image: "/smk.jpg",
  },
  {
    id: 2,
    name: "apis",
    designation: "Product Manager",
    image: "/smk.jpg",
  },
  {
    id: 3,
    name: "fajar",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 4,
    name: "fathir",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 5,
    name: "ramses",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 6,
    name: "arjuna",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 7,
    name: "vino",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 8,
    name: "bodi",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 9,
    name: "atha",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
  {
    id: 10,
    name: "ghani",
    designation: "Data Scientist",
    image: "/smk.jpg",
  },
];

const Hero = () => {
  const [expandedMap, setExpandedMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // Initialize Vanta effect
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fddff,
          backgroundColor: 0x0,
        })
      );
    }

    // Handle window resize
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedMap(false);
      }
    };

    if (expandedMap) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [expandedMap]);

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setExpandedMap(false);
      }
    };

    if (expandedMap) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [expandedMap]);

  return (
    <>
      {/* Vanta.js background container */}
      <div
        ref={vantaRef}
        className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden"
        style={{
          position: "fixed",
          margin: 0,
          padding: 0,
        }}
      />
      <section id="home" className="scroll-mt-20 py-16">
        <div>
          {/* SmoothCursor should be a top-level component */}
          <SmoothCursor />

          <div className="relative flex flex-col items-center min-h-screen w-full max-w-full overflow-hidden text-center dark:text-white">
            <div className="w-full pt-16 md:pt-20">
              <h1 className="flex justify-center flex-wrap items-baseline text-5xl md:text-6xl font-bold text-white">
                <span>
                  <span className="text-blue-400">Titik</span> Kumpul
                </span>
                <RotatingText
                  texts={["Pemula", "Programmer", "Wibu"]}
                  mainClassName="px-2 sm:px-2 md:px-3 text-black dark:text-white overflow-hidden align-baseline py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
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

            <div className="w-full px-4 sm:px-6 md:px-8 max-w-[100%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8">
              <TextAnimate
                by="character"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-500 dark:text-cyan-400 line-clamp-3 sm:line-clamp-2"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    scale: 0.9,
                  },
                  show: (i) => ({
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.02,
                      duration: 0.3,
                      y: {
                        type: "spring",
                        damping: 12,
                        stiffness: 200,
                      },
                    },
                  }),
                }}
              >
                A Group of Dedicated Teenagers Who Struggle to Sharpen Their
                Skills in the Technological Era
              </TextAnimate>
            </div>

            <ShimmerButton className="shadow-2xl mt-8 dark:bg-gray-800">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                About Us
              </span>
            </ShimmerButton>

            {/* AnimatedTooltip with proper mobile padding */}
            <div className="flex flex-row items-center justify-center mb-4 w-full mt-10 flex-wrap px-5 sm:px-6 md:px-8">
              <AnimatedTooltip items={people} />
            </div>

            <div className="w-full flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-start px-4 lg:px-0 -mt-4 mb-8">
              {/* ScratchToReveal container */}

              {/* Carousel container */}
              <div className="w-full lg:w-[50%] flex justify-center items-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-8 lg:mt-48">
                <div className="overflow-hidden max-w-3xl h-[calc(100vh-380px)] min-h-[300px]">
                  <Carousel slides={slideData} />
                </div>
              </div>

              <div className="w-full lg:w-auto flex justify-center lg:justify-start items-center mb-16  lg:ml-80">
                <div className="flex flex-col items-center">
                  <p className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">
                    Scratch For Our Logo👇
                  </p>
                  <ScratchToReveal
                    width={280}
                    height={280}
                    minScratchPercentage={70}
                    className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 shadow-lg"
                    gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
                  >
                    <p className="text-9xl">logo tkp</p>
                  </ScratchToReveal>
                </div>
              </div>
              {/* maps */}
              <div className="hidden lg:flex h-[40rem] w-full items-center justify-center -mr-50 -mt-11">
                <div className="relative group cursor-pointer">
                  <PinContainer href="#">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        TKP Location
                      </h3>
                      <div className="!m-0 !p-0 w-full h-[16rem] overflow-hidden rounded-lg relative">
                        {/* Expand button - appears on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedMap(true);
                            }}
                            className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 rounded-full text-black dark:text-white text-sm font-medium transition-transform hover:scale-105 flex items-center gap-2"
                          >
                            <span>Expand</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <polyline points="9 21 3 21 3 15"></polyline>
                              <line x1="21" y1="3" x2="14" y2="10"></line>
                              <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                          </button>
                        </div>

                        <iframe
                          src="https://maps.google.com/maps?q=PJ22%2BX3G%2C%20Tungka%2C%20Kec.%20Situjuah%20Limo%20Nagari%2C%20Kabupaten%20Lima%20Puluh%20Kota%2C%20Sumatera%20Barat%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                      <div className="text-xs mt-2 text-center text-slate-300">
                        PJ22+X3G, Tungka, Situjuah Limo Nagari, Lima Puluh Kota,
                        West Sumatra
                      </div>
                    </div>
                  </PinContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded map overlay */}
      <AnimatePresence>
        {expandedMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setExpandedMap(false)}
            />

            <motion.div
              ref={mapRef}
              layoutId="map-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <motion.div
                className="bg-slate-900 rounded-2xl w-full max-w-[50rem] h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  {/* Close button */}
                  <button
                    onClick={() => setExpandedMap(false)}
                    className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-slate-800/90 rounded-full p-2 text-black dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6L18 18" />
                    </svg>
                  </button>

                  <div className="p-8 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      TKP Location
                    </h2>
                    <div className="flex-1 w-full h-full rounded-lg overflow-hidden">
                      <iframe
                        src="https://maps.google.com/maps?q=PJ22%2BX3G%2C%20Tungka%2C%20Kec.%20Situjuah%20Limo%20Nagari%2C%20Kabupaten%20Lima%20Puluh%20Kota%2C%20Sumatera%20Barat%2C%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="text-sm mt-4 text-center text-slate-300">
                      PJ22+X3G, Tungka, Situjuah Limo Nagari, Lima Puluh Kota,
                      West Sumatra
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
