"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ActivityItem } from "@/types";
import useStepper from "@/hooks/useStepper";
import SectionTitle from "./SectionTitle";
import DateMarker from "./DateMarker";
import ActivityDetails from "./ActivityDetails";

type Props = {
  items: ActivityItem[];
};

const dateStyles = [
  ["left-1/2 scale-big", "left-3/4 scale-normal", "left-[90%] scale-small"],
  ["left-[20%] scale-normal", "left-1/2 scale-big", "left-[80%] scale-normal"],
  ["left-[10%] scale-small", "left-1/4 scale-normal", "left-1/2 scale-big"],
];

const dateTypes: ("main" | "dark")[][] = [
  ["main", "dark", "dark"],
  ["dark", "main", "dark"],
  ["dark", "dark", "main"],
];

export default function ActivityDesktop({ items }: Props) {
  const { currentItem, currentIdx, back, next, isFirstStep, isLastStep } =
    useStepper<ActivityItem>(items);

  const backgrounds = useMemo(
    () =>
      items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            priority
            width={2000}
            height={2000}
            className="object-cover mx-auto"
            alt="活動照片"
          />
        </motion.div>
      )),
    [items]
  );

  return (
    <div className="relative">
      <AnimatePresence>{backgrounds[currentIdx]}</AnimatePresence>
      <div className="grid grid-rows-activity-layout py-unit-32">
        {/* title 與 日期 */}
        <div className="relative">
          {items.map((item) => (
            <DateMarker
              key={item.id}
              type={dateTypes[currentIdx][item.id]}
              className={dateStyles[currentIdx][item.id]}
            >
              {item.date}
            </DateMarker>
          ))}
          <SectionTitle className="container pb-unit-4">最新活動</SectionTitle>
        </div>
        {/* 時間軸 */}
        <div className="relative z-10 h-2 mb-3 bg-primary shadow-activity"></div>
        {/* 活動說明 */}
        <div className="container relative z-20">
          <AnimatePresence>
            <ActivityDetails
              name={currentItem.name}
              className="inline-block text-center"
              back={isFirstStep ? undefined : back}
              next={isLastStep ? undefined : next}
            >
              {currentItem.detail}
            </ActivityDetails>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
