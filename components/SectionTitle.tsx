import React from "react";

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function SectionTitle({ className, children }: Props) {
  return (
    <h2 className={className}>
      <span className="inline-block font-bold tracking-widest text-medium text-background bg-foreground px-unit-8 py-unit-5 rounded-tl-title rounded-br-title shadow-title">
        {children}
      </span>
    </h2>
  );
}
