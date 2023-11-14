import React from "react";
import { Card, CardBody, Progress } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  money: number;
};

export default function DonateProject({ imgUrl, title, money }: Props) {
  return (
    <Card radius="lg" className="p-0">
      <CardBody className="grid grid-rows-2 grid-cols-1 p-0">
        <Image src={imgUrl} alt={title} fill={true} width={270} height={270} />
        <div className="px-4 py-2">
          <h3>{title}</h3>
          <p>撥款新台幣</p>
          <h4>{money}</h4>
          <p>目標$6,000,000</p>
          <Progress
            size="sm"
            aria-label="已達成 99%"
            value={99}
            showValueLabel
          />
          <div className="flex justify-between">
            <span>$5,974,200</span>
            <span>已有 9957 人贊助</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
