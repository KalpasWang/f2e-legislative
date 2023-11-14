"use client";

import React, { useCallback, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import PolicyCard from "@/components/PolicyCard";
import PolicyModal from "@/components/PolicyModal";
import SectionTitle from "@/components/SectionTitle";
import Education from "@/components/icons/Education";
import MedicalCare from "@/components/icons/MedicalCare";
import Nature from "@/components/icons/Nature";

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

const policyDetails = [
  {
    title: "推動寵物醫療保障方案",
    list: [
      "設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
      "提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
      "合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論。",
    ],
    details: [
      "為了改善家庭寵物的醫療照顧，我們決定設立寵物醫療基金，每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。這個基金的目標是幫助那些有醫療需求的寵物，同時減輕飼主的經濟壓力。",
      "我們提供每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，以確保他們能夠得到必要的治療。這項醫療補助將直接支付給參與我們計劃的合作動物醫院，以減少飼主的負擔。",
      "目前，我們已經和超過 200 家動物醫院進行初步的合作討論，這將確保家庭寵物可以在全台灣範圍內獲得高質量的醫療照顧。我們期待通過這個基金來改善寵物的生活質量，並加強寵物和飼主之間的情感聯繫。",
    ],
  },
  {
    title: "推廣寵物休閒與娛樂場所",
    list: [
      "建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園",
      "推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",
      "舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等",
    ],
    details: [
      "我們計劃每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。這些寵物公園將提供安全的環境，讓寵物可以自由奔跑，並與其他寵物互動。根據初步規劃，我們預計在第一年內，將在全國範圍內建立至少 10 座寵物公園，為飼主和他們的寵物提供更多娛樂選擇。",
      "我們鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。我們預計在政策實施後的首年，將有超過 500 家商家加入此計畫，包括餐廳、咖啡館、購物中心等，這將為飼主們帶來更多方便，也促進了寵物友好環境的建立。",
    ],
  },
  {
    title: "推廣寵物飼養教育",
    list: [
      "設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
      "提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
      "合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論。",
    ],
    details: [
      "我們計劃每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。這些中心將成為學習和咨詢的重要場所，提供寵物健康、養育、行為和訓練等方面的專業知識。預計在第一年內，在全國至少 5 大城市設立這樣的教育中心，讓更多人可以參與。",
      "我們將與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。這些課程將覆蓋各個方面，包括基本護理、飲食、運動需求，以及培訓和行為管理等。我們預計每年將有超過 10,000 名市民受益，從中獲得關於寵物飼養的寶貴知識。",
    ],
  },
];

export default function Policy({}: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onButtonPress = useCallback(
    (i: number) => {
      setCurrentIdx(i);
      onOpen();
    },
    [onOpen]
  );

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
              onPress={() => onButtonPress(index)}
            />
          ))}
        </div>
      </div>
      <PolicyModal
        title={policyDetails[currentIdx].title}
        list={policyDetails[currentIdx].list}
        details={policyDetails[currentIdx].details}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </section>
  );
}
