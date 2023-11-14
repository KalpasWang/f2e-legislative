import DonateProject from "@/components/DonateProject";
import SectionTitle from "@/components/SectionTitle";
import LeftTriangle from "@/components/icons/LeftTriangle";
import RightTriangle from "@/components/icons/RightTriangle";
import { Button, Input } from "@nextui-org/react";
import React from "react";

type Props = {};

const donateItems = [
  {
    title: "喵星人之友",
    money: 600,
    imgUrl: "/donate1.webp",
  },
  {
    title: "喵星人大使",
    money: 6000,
    imgUrl: "/donate2.webp",
  },
  {
    title: "喵星人傳奇",
    money: 60000,
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
        <div className="flex justify-between items-stretch gap-unit-5">
          {donateItems.map((item) => (
            <DonateProject
              key={item.title}
              title={item.title}
              money={item.money}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
        <form className="pt-unit-14 w-2/3 mx-auto">
          <Input
            type="number"
            radius="lg"
            label="自訂金額"
            labelPlacement="outside"
            placeholder="NT$  請自行輸入金額"
            description="自訂支持金額，喵喵團結無價"
            classNames={{
              label: "text-large leading-normal",
              description: "text-sm leading-normal",
              input: "shadow-inner rounded-lg pl-3 text-focus",
            }}
          />
          <div className="grid grid-cols-2 pt-unit-2 gap-unit-4">
            <Button
              type="submit"
              color="default"
              fullWidth
              className="text-background text-xl"
            >
              $ One-Time
            </Button>
            <Button
              type="submit"
              color="default"
              fullWidth
              className="text-background text-xl"
            >
              Monthly
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
