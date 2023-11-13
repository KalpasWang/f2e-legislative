import PolicyCard from "@/components/PolicyCard";
import SectionTitle from "@/components/SectionTitle";
import Education from "@/components/icons/Education";
import MedicalCare from "@/components/icons/MedicalCare";
import Nature from "@/components/icons/Nature";
import React from "react";

type Props = {};

const policyCards = [
  {
    title: "推動寵物醫療保障方案",
    subtitle: "為毛孩子謀福利",
    icon: <MedicalCare />,
  },
  {
    title: "推廣寵物休閒與娛樂場所",
    subtitle: "打造休閒天堂",
    icon: <Nature />,
  },
  { title: "推廣寵物飼養教育", subtitle: "讓愛更加專業", icon: <Education /> },
];

export default function Policy({}: Props) {
  return (
    <section className="pt-unit-32 pb-unit-52 bg-background text-foreground">
      <div className="container">
        <SectionTitle className="mb-unit-12">政策議題</SectionTitle>
        <div className="grid grid-rows-3 gap-6 lg:grid-cols-3 lg:grid-rows-1 lg:max-w-7xl xl:gap-unit-12 mx-auto">
          {policyCards.map((card, index) => (
            <PolicyCard
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
