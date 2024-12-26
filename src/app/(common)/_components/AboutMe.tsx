/* eslint-disable react/no-unescaped-entities */
import React from "react";
import myImage from "@/assets/portfolio.png";
import Image from "next/image";
import DownloadCV from "@/components/shared/DownloadCV";
import DownloadResume from "@/components/shared/DownloadResume";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 container mx-auto items-center"
    >
      <div className="bg-secondary w-full rounded-xl">
        <Image src={myImage} alt="My Image" />
      </div>
      <div className="relative">
        <h1 className="absolute -top-10 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
          About me
        </h1>

        <div>
          <div className="flex items-center gap-1 text-center">
            <span className="text-xl font-bold text-secondary">-</span>
            <h3 className="text-xl font-bold text-gray-600">About Me</h3>
          </div>
          <div className="pb-5">
            <h1 className="text-7xl font-bold text-gray-800">
              Who is <span className="text-secondary">Sourave Halder</span>
            </h1>
          </div>
          <p className="text-gray-700">
            Hi! I'm Sourave Halder, a passionate Full Stack Web Developer from
            Barishal, Bangladesh. With 1 year of hands-on experience, I
            specialize in building dynamic, user-friendly, and visually
            appealing web applications. My commitment to innovation drives me to
            constantly explore and implement new technologies in web
            development.
          </p>
          <div className="flex items-center gap-5 my-5">
            <div>
              <span className="text-4xl font-bold text-gray-700">1+</span>
              <h3 className="text-2xl font-semibold text-gray-600">
                Years of Experience
              </h3>
            </div>
            <div>
              <span className="text-4xl font-bold text-gray-700">5+</span>
              <h3 className="text-2xl font-semibold text-gray-600">
                Projects Completed
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <DownloadResume />
            <DownloadCV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
