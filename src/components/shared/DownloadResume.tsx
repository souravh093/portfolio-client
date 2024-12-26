"use client";
import { MoveRight } from "lucide-react";
import React from "react";

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1UlU4Dp1rtqddG61maviXViTMjbQHpUlo"; // Use the direct download link for Google Drive
    link.download = "Sourave_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded-3xl pl-3 cursor-pointer">
      <span className="bg-secondary my-2 rounded-full p-2 text-white">
        <MoveRight />
      </span>
      <a onClick={handleDownload} className="bg-primary rounded-3xl py-4 px-5">
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
