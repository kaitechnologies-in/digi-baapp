"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";


export default function Navbar() {


  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  const menu = [
    { name: "Home", url: "/" },
    { name: "Work", url: "/" },
    { name: "Services", url: "/" },
    { name: "PR & Media", url: "/" },
    { name: "About", url: "/" },
    { name: "Contact", url: "/" },
    { name: "News & Blogs", url: "/" },
  ];

  return (
    <nav className="py-3 w-full bg-white shadow fixed top-0 z-[100] opacity-90">
      <div className="justify-between px-8 mx-auto lg:items-center md:items-center">
        <div className="flex items-center justify-between py-2 lg:py-2 md:py-2">
          <a href="#" className="">
            <div className="avatar">
              <div className="rounded">
                <Image
                  src="/logo.svg"
                  alt="DigiBaapp Logo"
                  width={225}
                  height={82}
                />
              </div>
            </div>
          </a>
          <div >
            <button
              className="p-2"
              onClick={toggle}
            >
              <Image
                src="/menu.svg"
                alt="Menu"
                className="logo"
                width={62}
                height={62}
              />
            </button>
          </div>
        </div>
        <div style={{
          display: showMe ? "block" : "none"
        }} className="fixed left-0 top-0 bottom-0 z-[1056] pointer-events-none  h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          <div
            className="dialog_bg pointer-events-auto relative flex w-full flex-col rounded-md bg-clip-padding text-current shadow-lg outline-none min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none absolute right-6 top-5  z-[1055]"
              onClick={toggle}
              aria-label="Close">
              <Image
                src="/close.svg"
                alt="close"
                width={60}
                height={60}
              />
            </button>
            <div className="flex relative p-4 min-[0px]">
              <ul className="items-center justify-center space-y-8  h-[calc(100vh-70px)] overflow-auto no-scrollbar">
                {menu.map(({ name, url }, index) => (
                  <li key={index} className="menu">
                    <Link href={url} className="a-menu">{name}</Link>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-4 right-0">
                <Image
                  src="/digibaap.svg"
                  alt="digi baap"
                  width={400}
                  height={200}
                />
                <div className="navbar-tag">
                  Your Digital Godfather
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};