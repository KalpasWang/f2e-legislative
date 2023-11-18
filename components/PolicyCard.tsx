import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

type Props = {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
};

export default function PolicyCard({
  className,
  icon,
  title,
  subtitle,
  onPress,
}: Props) {
  return (
    <Card className="px-unit-4 py-unit-6 border-primary border-4 shadow-card bg-background">
      <CardHeader className="flex justify-center items-center">
        {icon}
      </CardHeader>
      <CardBody className="my-unit-6">
        <h3 className="text-secondary text-center text-large font-normal leading-normal">
          {title}
        </h3>
        <p className="pt-unit-6 text-center leading-relaxed text-secondary">
          {subtitle}
        </p>
      </CardBody>
      <CardFooter className="flex justify-center">
        <Button onPress={onPress} color="primary" size="md" radius="md">
          了解更多
        </Button>
      </CardFooter>
    </Card>
  );
}
