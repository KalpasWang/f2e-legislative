import SectionTitle from "@/components/SectionTitle";
import LeftTriangle from "@/components/icons/LeftTriangle";
import React from "react";

type Props = {};

export default function Donate({}: Props) {
  return (
    <section className="relative bg-primary overflow-visible pt-unit-96 pb-unit-32">
      <SectionTitle className="absolute top-0 left-28 -translate-y-full">
        小額捐款
      </SectionTitle>
      <LeftTriangle className="absolute top-0 left-0 -translate-y-full" />
      <div className="container"></div>
    </section>
  );
}
