"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <Image
        src={
         require("../public/Desktop.svg")
        }
        alt=""
        loading="eager"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
      <div className="w-5/6 mx-auto my-10 z-10 flex justify-between items-center">
        <Image src={require("@/public/bfm_logo.svg")} alt="" />
        <button className="">
          <Image src={require("@/public/follow_button.svg")} alt="" />
        </button>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <h1 className="xl:w-1/2 sm:w-3/4 w-full text-white text-center xl:text-[64px] sm:text-[70px] text-[39.918px] font-semibold sm:leading-[80px] leading-[49.898px]">
          Platform <br /> launching soon
        </h1>
        <p className="max-w-[704px] w-5/6 shrink-0 text-[#E4E4E4] text-center xl:text-lg sm:text-xl text-sm font-normal sm:leading-7 leading-[17.464px]">
          Exciting times ahead! Brace yourself as our revolutionary platform
          prepares to go live. Follow us on our socials and get the latest
          insights of Project BFM before the rest of the world.
        </p>
        <div className="inline-flex flex-col items-center gap-[25px] mt-[42px] lg:w-1/4 w-1/2">
          <p className="text-white text-center sm:text-2xl text-base font-semibold leading-normal">
            Follow us on Socials
          </p>
          <div className="flex items-start gap-[15px]">
            <Link
              className="w-full h-full"
              href={
                "https://www.instagram.com/bfmofficial__?igsh=aWdvdDJoeGE4enVu"
              }
            >
              <Image
                src={require("@/public/insta.svg")}
                alt=""
                className="shrink-0 object-cover w-full aspect-square"
              />
            </Link>
            <Link
              className="w-full h-full"
              href={
                "https://x.com/bfmofficial_/status/1751225895354785903?s=46"
              }
            >
              <Image
                src={require("@/public/x.svg")}
                alt=""
                className="shrink-0 object-cover w-full aspect-square"
              />
            </Link>
            <Link
              className="w-full h-full"
              href={
                "https://www.linkedin.com/posts/blackfoxmetaverse_bornformotive-blackfoxmetaverse-bfm-activity-7156272565085179904-hESt?utm_source=share&utm_medium=member_ios"
              }
            >
              <Image
                src={require("@/public/lin.svg")}
                alt=""
                className="shrink-0 object-cover w-full aspect-square"
              />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={require("@/public/group_down.svg")}
        alt=""
        className="self-center mt-24 shrink-0"
      />
    </div>
  );
};

export default Hero;
