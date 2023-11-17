"use client";

import React, { useCallback } from "react";
import { Button, Textarea } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "@/components/SectionTitle";
import ContactInput from "@/components/ContactInput";

type Props = {};

export default function Contact({}: Props) {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("意見發送成功！");
  }, []);

  return (
    <section className="py-unit-32">
      <div className="container">
        <SectionTitle>民眾服務信箱</SectionTitle>
        <form className="pt-unit-12" onSubmit={onSubmit}>
          <h3 className="text-large leading-normal pb-8">
            您的聲音，我們的行動！
          </h3>
          <p className="pb-8 leading-normal text-base">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </p>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-unit-6">
            <ContactInput
              type="text"
              label="姓名"
              placeholder="輸入您的姓名"
              required
            />
            <ContactInput
              type="text"
              label="E-mail"
              placeholder="輸入您的 E-mail"
              required
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-unit-6 pt-6">
            <ContactInput type="tel" label="手機" placeholder="輸入您的手機" />
            <ContactInput type="tel" label="電話" placeholder="輸入您的電話" />
          </div>
          <div className="pt-6 pb-8">
            <Textarea
              size="md"
              radius="sm"
              variant="bordered"
              label="您的建言"
              placeholder="輸入您的建言"
              required
              minRows={6}
              classNames={{
                inputWrapper: "border-1",
                label: "absolute -top-2 left-4 bg-background px-unit-2",
                input: "text-focus text-2xl pl-2 h-full",
              }}
            />
          </div>
          <div>
            <Button type="submit" size="lg" color="primary" fullWidth>
              送出表單
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
}
