import SectionTitle from "@/components/SectionTitle";
import LeftTriangle from "@/components/icons/LeftTriangle";
import RightTriangle from "@/components/icons/RightTriangle";
import React from "react";

type Props = {};

const donateItems = [
  {
    title: "喵星人之友",
    money: "600",
    imgUrl: "/donate1.webp",
  },
  {
    title: "喵星人之友",
    money: "6000",
    imgUrl: "/donate2.webp",
  },
  {
    title: "喵星人之友",
    money: "60000",
    imgUrl: "/donate3.webp",
  },
];

export default function Donate({}: Props) {
  return (
    <section className="relative bg-primary overflow-visible pb-unit-32">
      <SectionTitle className="absolute top-0 left-28 -translate-y-full">
        小額捐款
      </SectionTitle>
      <LeftTriangle className="absolute top-0 left-0 -translate-y-full" />
      <RightTriangle className="absolute bottom-0 right-0 translate-y-full" />
      <div className="container">
        <div className="grid grid-cols-2 py-unit-60">
          <div>
            <h3>
              <span>00</span>%
            </h3>
            <p>已有 2,395,732 人贊助</p>
          </div>
          <div>
            <p>目前小額贊助總金額</p>
            <h3>$987,655,873</h3>
          </div>
        </div>
        <div className="flex justify-between items-stretch gap-unit-5"></div>
      </div>
    </section>
  );
}
