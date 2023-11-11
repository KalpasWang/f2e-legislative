"use client";

import React from "react";
import Image from "next/image";
import { ActivityItem } from "@/types";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import useStepper from "@/hooks/useStepper";

type Props = {
  items: ActivityItem[];
};

const dateStyles = [
  ["left-1/2", "left-3/4", "left-8/9"],
  ["left-1/2", "left-3/4", "left-8/9"],
  ["left-1/2", "left-3/4", "left-8/9"],
];

export default function ActivityDesktop({ items }: Props) {
  const { currentIdx, back, next, isFirstStep, isLastStep } =
    useStepper<ActivityItem>(items);

  const backgrounds = items.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <Image
        src={item.image}
        width={2000}
        height={2000}
        className="object-cover"
        alt="活動照片"
      />
    </motion.div>
  ));

  return (
    <div className="relative">
      <AnimatePresence>{backgrounds[currentIdx]}</AnimatePresence>
      <div className="relative grid grid-rows-activity-layout py-unit-32">
        {/* title 與 日期 */}
        <div className="relative">
          <h2 className="container pb-unit-4">
            <span className="inline-block font-bold tracking-widest text-medium text-background bg-foreground px-unit-8 py-unit-5 rounded-tl-title rounded-br-title shadow-title">
              我的主張
            </span>
          </h2>
          {items.map((item) => (
            <div
              key={item.id}
              className={
                "absolute bottom-0 -translate-x-0.5 " +
                dateStyles[currentIdx][item.id]
              }
            >
              <div className="flex flex-col items-center justify-end">
                <div className="px-4 py-2 bg-primary shadow-activity">
                  <span className="text-6xl font-bold leading-normal tracking-[6px]">
                    {item.date}
                  </span>
                </div>
                <div className="bg-primary w-unit-2 h-unit-10 shadow-activity"></div>
              </div>
            </div>
          ))}
        </div>
        {/* 時間軸 */}
        <div className="h-2 bg-primary shadow-activity"></div>
        {/* 活動說明 */}
        <div className="container"></div>
      </div>
      {/* <div className="relative">
        {!isFirstStep && <Button onClick={() => back()}>Back</Button>}
        {!isLastStep && <Button onClick={() => next()}>Next</Button>}
      </div> */}
    </div>
  );
}
