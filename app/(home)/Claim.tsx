import Image from "next/image";
import React from "react";

type Props = {};

export default function Claim({}: Props) {
  return (
    <section className="py-unit-32">
      <div className="container">
        <h2 className=" mb-unit-12">
          <span className="inline-block font-bold tracking-widest text-medium text-background bg-foreground px-unit-8 py-unit-5 rounded-tl-title rounded-br-title shadow-title">
            我的主張
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="text-base text-foreground">
            <div className="flex flex-col items-end justify-between">
              <div className="relative leading-[30px] inline-block shrink-0">
                <p className="m-0">
                  我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                  GDP 經濟帶來巨大效益。
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                </p>
              </div>
              <Image
                src="/sign.png"
                className="max-w-full text-right"
                width={800}
                height={200}
                alt="喵立翰簽名"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <Image
              src="/claim.jpg"
              className="object-cover"
              width={470}
              height={360}
              alt="示意圖"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
