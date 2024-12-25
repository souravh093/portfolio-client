import { TTechnology } from "@/types/technology.types";
import Image from "next/image";
import React from "react";

const SkillCard = ({ data }: { data: TTechnology }) => {
  return (
    <div className="bg-[#745FC9] p-4 flex items-center gap-5 rounded-3xl flex-col">
      <div>
        <Image
          className="h-12 w-12"
          src={data?.logo ?? "/default-logo.png"}
          alt={data?.name ?? "default name"}
          width={900}
          height={900}
        />
        <h1>{data?.name}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
