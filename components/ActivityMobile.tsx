"use client";

import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ActivityItem } from "@/types";
import SectionTitle from "./SectionTitle";

type Props = {
  items: ActivityItem[];
};

function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <Card
      radius="lg"
      classNames={{
        base: "p-0 w-[calc(100%-16px)] h-full",
        header: "p-0",
        body: "p-unit-4 bg-foreground text-background",
      }}
    >
      <CardHeader>
        <Image
          src={item.image}
          alt={item.name}
          width={2000}
          height={2000}
          priority
          className="object-cover"
        />
      </CardHeader>
      <CardBody>
        <p className="text-small leading-normal font-bold tracking-[1.4px] text-primary">
          {item.date}
        </p>
        <h3 className="text-base leading-normal font-bold tracking-[1.6px]">
          {item.name}
        </h3>
        <p className="text-sm leading-normal">{item.detail}</p>
      </CardBody>
    </Card>
  );
}

export default function ActivityMobile({ items }: Props) {
  return (
    <section className="py-unit-6">
      <div className="container">
        <SectionTitle className="pb-unit-6">最新活動</SectionTitle>
      </div>
      <Carousel cellSpacing={16}>
        {items.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </Carousel>
    </section>
  );
}
