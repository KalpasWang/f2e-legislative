"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";
import Paw from "@/components/icons/Paw";
import { notoSansTC } from "./layout";

const navItems = [
  {
    href: "#activity",
    name: "最新活動",
  },
  {
    href: "#policy",
    name: "政策議題",
  },
  {
    href: "#donate",
    name: "小額捐款",
  },
  {
    href: "#email",
    name: "民眾服務信箱",
  },
];

export default function NavBar() {
  return (
    <Navbar className="p-0 shadow-md sm:py-unit-4">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} className={notoSansTC.className}>
            <Link
              href={item.href}
              color="foreground"
              className="text-base font-bold md:text-medium"
              underline="hover"
            >
              <Paw className="inline-block mr-2" /> {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
