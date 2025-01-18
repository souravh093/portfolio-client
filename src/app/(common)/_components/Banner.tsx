/* eslint-disable react/no-unescaped-entities */
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import portfolioImage from "@/assets/portfolio.png";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import DownloadResume from "@/components/shared/DownloadResume";

const BannerAction = () => {
  return (
    <div className="flex flex-col justify-center sm:flex-row gap-5">
      <DownloadResume />
      <button className="bg-secondary text-white py-3 px-6 sm:px-10 rounded-3xl">
        <a href="#contact">Hire me</a>
      </button>
    </div>
  );
};

const Banner = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "MERN Stack Developer",
  ];
  return (
    <div className="relative pt-20">
      <BackgroundLines className="w-full container mx-auto">
        <div>
          <div className="flex items-center justify-center">
            <Image
              src={portfolioImage}
              alt="Portfolio"
              className="w-44 h-44 rounded-full object-cover bg-primary"
            />
          </div>

          <div className="flex flex-col gap-5 text-center">
            <h3 className="text-xl sm:text-2xl font-bold">
              <span className="text-secondary font-bold">-</span>
              Hello
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black">
              I'm <span className="text-secondary">Sourave</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase">
              <FlipWords words={words} /> <br />
            </h2>

            <BannerAction />
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Banner;
