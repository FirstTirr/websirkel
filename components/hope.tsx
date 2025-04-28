"use client";

import { h1 } from "framer-motion/client";
import React from "react";
import SpotlightCard from "./ui/spotlight-card";
import { TextAnimate } from "./magicui/text-animate";

export default function Hope() {
  return (
    <>
      <div id="hope" className="scroll-mt-20">
        <div className="text-5xl font-bold text-center text-gray-200 dark:text-gray-300 mb-12">
          <div>
            <TextAnimate
              by="character"
              className="text-center text-5xl font-bold text-gray-200 dark:text-gray-300 line-clamp-3 sm:line-clamp-2"
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
              OUR HOPE
            </TextAnimate>
          </div>
        </div>
        {/* Modified container for better centering */}
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-8 px-4">
          {/* Added flex justify-center to each wrapper div */}
          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-center custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                radit
              </h1>{" "}
              <br />
              <p className="text-gray-400">
                • nikah sama nahida <br />
                • punya anak kayak ibuki <br />• senior fullstack
              </p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-center custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                apis
              </h1>{" "}
              <br />
              <p className="text-gray-400">
                • nikah sama cewek yandere <br />
                • disiksa anak kecil <br />• diinjak injak anak kecil
              </p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                farhan
              </h1>
              <br />
              <p className="text-gray-400">• jadi jawa</p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                vynn
              </h1>
              <br />
              <p className="text-gray-400">
                • jadi villain <br />• pemain crypto handal
              </p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                ramses
              </h1>
              <br />
              <p className="text-gray-400">• jadi kayak bang bilal</p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                fajar
              </h1>
              <br />
              <p className="text-gray-400">
                • bos sawit <br />• user benedetta handal
              </p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                atha
              </h1>
              <br />
              <p className="text-gray-400">
                • jadi anime <br />• masuk isekai
              </p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                ghani
              </h1>
              <br />
              <p className="text-gray-400">• jadi mc rent a girlfriend</p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                aditya
              </h1>
              <br />
              <p className="text-gray-400">• ngak tawu cihuyy</p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                arjuna
              </h1>
              <br />
              <p className="text-gray-400">• ngak tawu cihuyy</p>
            </SpotlightCard>
          </div>

          <div className="flex justify-center">
            <SpotlightCard
              className="items-center justify-start custom-spotlight-card w-[20rem] h-[16rem]"
              spotlightColor="rgba(0, 229, 255, 0.9)"
            >
              <h1 className="text-3xl text-start font-bold text-gray-500">
                fathir gagah
              </h1>
              <br />
              <p className="text-gray-400">
                • mobile app developer <br />
                • frontend handal <br />• fukkstack kalau bisa
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  );
}
