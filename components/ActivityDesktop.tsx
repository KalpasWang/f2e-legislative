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

export default function ActivityDesktop({ items }: Props) {
  const { currentItem, currentIdx, back, next, isFirstStep, isLastStep } =
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
    <div className="relative h-screen">
      <AnimatePresence>{backgrounds[currentIdx]}</AnimatePresence>
      <div className="relative">
        {!isFirstStep && <Button onClick={() => back()}>Back</Button>}
        {!isLastStep && <Button onClick={() => next()}>Next</Button>}
      </div>
    </div>
  );
}
