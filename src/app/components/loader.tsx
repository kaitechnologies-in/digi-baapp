"use client";

import React from "react";
import Image from 'next/image';
export default function Loader() {
  return (
    <div className="fixed inset-0 brand-bg z-[10000] flex flex-1 items-center justify-center">
      <div>
        <Image
          src="/anim.gif"
          alt="Animation"
          width={300}
          height={300}
        />
      </div>
      <div className="loader-text">
        Welcome to Godfather’s Town
      </div>
    </div>
  );
};