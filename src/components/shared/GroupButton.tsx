import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const GroupButton = ({
  projectUrl,
  githubClientUrl,
  githubServerUrl,
}: {
  projectUrl: string;
  githubClientUrl: string;
  githubServerUrl: string;
}) => {
  return (
    <div className="flex items-center gap-3 bg-[#8373c4] py-3 rounded-3xl px-3 my-3">
      <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
        <span className="bg-secondary my-2 rounded-full p-2 text-white">
          <MoveRight />
        </span>
        <Link
          target="_blank"
          className="bg-primary rounded-3xl py-4 px-5"
          href={projectUrl}
        >
          Live Demo
        </Link>
      </div>
      <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
        <span className="bg-secondary my-2 rounded-full p-2 text-white">
          <MoveRight />
        </span>
        <Link
          target="_blank"
          className="bg-primary rounded-3xl py-4 px-5"
          href={githubClientUrl}
        >
          Github Client
        </Link>
      </div>
      <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
        <span className="bg-secondary my-2 rounded-full p-2 text-white">
          <MoveRight />
        </span>
        <Link
          target="_blank"
          className="bg-primary rounded-3xl py-4 px-5"
          href={githubServerUrl}
        >
          Github Server
        </Link>
      </div>
    </div>
  );
};

export default GroupButton;
