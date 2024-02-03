"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-screen">
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/964f/da4c/227c0861d3991136f0d2f2a2700d7a0a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmWX9hg5F61Y1lWtDNerSG~LmDmOfHz3kA2aNQS8vhyr4POeWrPkVvFszSSg7oI0LKVfnDyaFHcLbMO8~tevHwhfgCjQBflVJXARLFhpwVR0TwHQPgVbLZSLM2ISNjuVdsMh90QzYm~MZxtfz44DnIFFjMIMyXJEmPEkIaopxhU48WJgzOYZrIs3tS8w0JQbZbj2AbkaG1oT-7bbxKkr4zqiAB9QRKkJvjAJyodFCOxe4JcZgVUyev1G5fvm3LeHMfKIjbxs1yYchN4jqw4ALNYgEaf8TDCI9W6BzQ10cAi0JJHeAmoN6bC3RftYsjF2Di-nQ~x21o9MSX-UPXZU6w__"
        }
        alt=""
        loading="eager"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
      <div className="w-5/6 mx-auto my-10 z-10 flex justify-between items-center">
        <Image src={require("@/public/bfm_logo.svg")} alt="" />
        <button className=""><Image src={require("@/public/follow_button.svg")} alt=""/></button>
      </div>
      
    </div>
  );
};

export default Hero;
