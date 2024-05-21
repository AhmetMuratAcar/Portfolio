"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#About",
  },
  {
    title: "Tech",
    path: "#Techstack",
  },
  {
    title: "Projects",
    path: "#Projects",
  },
  {
    title: "Contact",
    path: "#Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Inline style for the menu transition
  const menuStyle = {
    overflow: 'hidden',
    maxHeight: navbarOpen ? '500px' : '0', // Control visibility with maxHeight
    transition: 'max-height 0.5s ease-in-out'
  };

  return (
    <nav className="fixed mx-auto shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] top-0 left-0 right-0 z-10 bg-[#FFFFFF] bg-opacity-100">
      <div className="flex container lg:py-1 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black font-semibold"
        >
          <img src="/gifs/BMO.gif" alt="BMO" className="h-8 md:h-14" />
        </Link>
        <div className="mobile-menu block md:hidden pr-2">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 text-black" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5 text-black" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-black">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={menuStyle}>
        <MenuOverlay links={navLinks} /> {/* Always rendered, visibility controlled by CSS */}
      </div>
    </nav>
  );
};

export default Navbar;
