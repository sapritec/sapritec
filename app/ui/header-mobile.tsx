"use client";

import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { NavLinksMobile } from "./nav-links";
import { useState } from "react";

export default function HeaderMenuMobile() {
  const [statusMenu, setStatusMenu] = useState(false);

  function handleToggleMobileMenu() {
    setStatusMenu(!statusMenu);
  }
  return (
    <div className="p-4 md:hidden fixed w-full bg-black -top-1 border-b border-gray-900">
      <div className="flex justify-between items-center">
        <Logo />
        <div onClick={handleToggleMobileMenu}>
          {statusMenu ? <X /> : <Menu />}
        </div>
      </div>
      <div
        className={`${
          statusMenu ? "w-full block" : "hidden"
        } bg-black w-full h-screen transition-all`}
      >
        <NavLinksMobile />
      </div>
    </div>
  );
}