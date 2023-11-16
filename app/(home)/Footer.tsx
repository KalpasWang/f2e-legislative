import React from "react";
import { notoSansTC } from "./layout";
import Phone from "@/components/icons/Phone";
import Location from "@/components/icons/Location";
import { Link } from "@nextui-org/react";
import Logo from "@/components/Logo";
import Email from "@/components/icons/Email";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="pt-10 pb-16 bg-[#FCF2D0]">
      <div className={"container " + notoSansTC.className}>
        <div className="flex flex-col lg:flex-row flex-nowrap justify-between gap-4 text-secondary max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex flex-col items-start">
              <h3 className="text-xl font-normal tracking-[2px] lg:text-large lg:font-black leading-normal lg:tracking-[4px]">
                <a href="tel:+8862888-5678">
                  <Phone className="inline-block w-[24px] h-[24px] lg:w-[60px] lg:h-[60px] pr-2" />
                  (02) 888-5678
                </a>
              </h3>
              <p className="text-xl leading-normal tracking-[2px]">
                <a href="mailto:meowoffice@linmeow.tw">
                  <Email className="inline-block pr-2" />
                  meowoffice@linmeow.tw
                </a>
              </p>
              <p className="text-xl leading-normal tracking-[2px]">
                <Location className="inline-block pr-2" />
                喵星區，毛茸茸大道88號，
                <span className="block leading-normal text-left pl-6 lg:pl-0 lg:inline">
                  喵喵大樓3樓
                </span>
              </p>
              <p className="hidden lg:block text-sm leading-loose tracking-[1.4px]">
                &copy; 2023 喵立漢 版權所有
              </p>
            </div>
          </div>
          <div>
            <nav className="flex flex-nowrap justify-center gap-unit-6 pb-unit-10">
              <Link href="#" color="secondary" className="text-xl font-bold">
                最新活動
              </Link>
              <Link href="#" color="secondary" className="text-xl font-bold">
                政策議題
              </Link>
              <Link href="#" color="secondary" className="text-xl font-bold">
                小額捐款
              </Link>
            </nav>
            <div className="flex justify-center">
              <Logo fill="#724600" />
            </div>
            <p className="block lg:hidden text-sm leading-loose tracking-[1.4px] text-center">
              &copy; 2023 喵立漢 版權所有
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
