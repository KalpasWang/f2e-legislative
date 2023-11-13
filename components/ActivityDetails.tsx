import { Button, cn } from "@nextui-org/react";
import React from "react";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

type Props = {
  name: string;
  children: React.ReactNode;
  className?: string;
  back?: () => void;
  next?: () => void;
};

export default function ActivityDetails({
  name,
  children,
  className,
  back,
  next,
}: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-activity-detail items-center bg-foreground gap-unit-6 p-4 rounded-2xl",
        className
      )}
    >
      {/* back button */}
      <div>
        {back && (
          <Button
            color="primary"
            variant="light"
            isIconOnly
            aria-label="Left"
            className="icon-size"
            radius="full"
            size="sm"
            onClick={back}
          >
            <ChevronLeft />
          </Button>
        )}
      </div>
      {/* activity details */}
      <div>
        <h3 className="font-normal leading-normal mb-unit-6 text-large text-background">
          {name}
        </h3>
        <p className="text-base font-normal leading-relaxed text-background">
          {children}
        </p>
      </div>
      {/* next button */}
      <div>
        {next && (
          <Button
            color="primary"
            variant="light"
            isIconOnly
            aria-label="Right"
            className="icon-size"
            size="sm"
            radius="full"
            onClick={next}
          >
            <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
}
