"use client";
import { MoveRight } from "lucide-react";
import React from "react";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1-6BMZsW6_fpJpbyt1vwXgRbnUBVuOL4e/view?usp=sharing";
    link.download = "Sourave_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded-3xl pl-3">
      <span className="bg-secondary my-2 rounded-full p-2 text-white">
        <MoveRight />
      </span>
      <a onClick={handleDownload} className="bg-primary rounded-3xl py-4 px-5">
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
