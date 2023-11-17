import React from "react";
import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  imgUrl: string;
  title: string;
  money: number;
  onCardPress: () => void;
};

export default function DonateProject({
  imgUrl,
  title,
  money,
  onCardPress,
}: Props) {
  return (
    <button onClick={() => onCardPress()}>
      <Card
        radius="lg"
        className="p-0 shadow-md cursor-pointer active:opacity-80"
      >
        <CardHeader className="p-0">
          <Image src={imgUrl} alt={title} width={1232} height={928} />
        </CardHeader>
        <CardBody className="px-4 py-2 flex-grow">
          <h3 className="text-large leading-normal">{title}</h3>
          <p className="text-small leading-normal">撥款新台幣</p>
          <h4 className="text-secondary text-large leading-max font-bold tracking-[4px]">
            <span className="text-xl font-bold leading-max">$</span>
            {new Intl.NumberFormat("ja-JP").format(money)}
          </h4>
          <p className="text-sm leading-normal">目標$6,000,000</p>
          <Progress
            size="sm"
            color="primary"
            aria-label="已達成 99%"
            value={99}
            showValueLabel
            classNames={{
              base: "flex-row-reverse items-center gap-1",
              label: "text-sm flex-shrink",
              track: "flex-grow",
            }}
          />
          <div className="flex justify-between text-xs leading-normal">
            <span>$5,974,200</span>
            <span>已有 9957 人贊助</span>
          </div>
        </CardBody>
      </Card>
    </button>
  );
}
