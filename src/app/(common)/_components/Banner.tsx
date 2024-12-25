/* eslint-disable react/no-unescaped-entities */
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import portfolioImage from "@/assets/portfolio.png";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

const Banner = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "MERN Stack Developer",
  ];
  return (
    <div className="relative">
      <BackgroundLines className="w-full container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">
              <span className="text-secondary font-bold">-</span>
              Hello
            </h3>
            <h1 className="text-7xl font-black">
              I'm <span className="text-secondary">Sourave</span>
            </h1>
            <h2 className="text-5xl font-black uppercase">
              <FlipWords words={words} /> <br />
            </h2>

            <div className="flex gap-5">
              <button className="bg-secondary text-white py-3 px-10 rounded-3xl">
                <a href="#contact">Download Resume</a>
              </button>
              <button className="bg-secondary text-white py-3 px-10 rounded-3xl">
                <a href="#contact">Hire me</a>
              </button>
            </div>
          </div>

          <div className="md:block hidden">
            <Image src={portfolioImage} alt="Portfolio" />
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};

export default Banner;
