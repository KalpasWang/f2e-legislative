"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "@/components/Logo";
import Paw from "@/components/icons/Paw";
import Menu from "@/components/icons/Menu";
import CloseMenu from "@/components/icons/CloseMenu";

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
    href: "#contact",
    name: "民眾服務信箱",
  },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        base: "p-0 shadow-md lg:py-unit-4",
        menu: "h-max",
      }}
    >
      <NavbarMenuToggle
        icon={isMenuOpen ? <CloseMenu /> : <Menu />}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} className="font-noToSansTC">
            <Link
              href={item.href}
              color="foreground"
              className="decoration-primary font-bold text-medium"
              underline="hover"
            >
              <Paw className="inline-block mr-2" /> {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, i) => (
          <NavbarMenuItem key={i}>
            <Link
              color="foreground"
              href={item.href}
              className="w-full decoration-primary text-base font-bold"
              underline="hover"
              size="lg"
            >
              <Paw className="inline-block mr-2" /> {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
