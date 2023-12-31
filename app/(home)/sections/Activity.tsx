"use client";

import React from "react";
import { useMedia } from "react-use";
import ActivityDesktop from "@/components/ActivityDesktop";
import ActivityMobile from "@/components/ActivityMobile";
import { ActivityItem } from "@/types";

type Props = {};

const activityItems: ActivityItem[] = [
  {
    id: 0,
    name: "收容所模特兒大比拼！",
    date: "12/20",
    detail:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    image: "/activity1.webp",
  },
  {
    id: 1,
    name: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    date: "12/24",
    detail:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    image: "/activity2.webp",
  },
  {
    id: 2,
    name: "參與台北寵物論壇，爭取貓咪友善環境",
    date: "12/26",
    detail:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    image: "/activity3.webp",
  },
];

export default function Activity({}: Props) {
  const isMatch = useMedia("(min-width: 768px)", true);
  return (
    <section id="activity" className="overflow-hidden">
      {isMatch ? (
        <ActivityDesktop items={activityItems} />
      ) : (
        <ActivityMobile items={activityItems} />
      )}
    </section>
  );
}
