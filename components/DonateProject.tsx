import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";

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
    <Button variant="light" className="p-0 w-fit h-fit" onPress={onCardPress}>
      <Card
        radius="lg"
        classNames={{
          base: "flex-col p-0 shadow-md cursor-pointer bg-background",
          header: "p-0 basis-1/3 lg:basis-auto h-full",
          body: "px-4 py-2 flex-grow",
        }}
      >
        <CardHeader id="CardHeader">
          <Image
            as={NextImage}
            src={imgUrl}
            alt={title}
            width={1232}
            height={928}
            radius="none"
            classNames={{ img: "object-cover" }}
          />
        </CardHeader>
        <CardBody>
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
    </Button>
  );
}
