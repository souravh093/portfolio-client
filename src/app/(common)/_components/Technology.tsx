import SkillCard from "@/components/card/SkillCard";
import { getTechnologies } from "@/services/technology";
import { TTechnology } from "@/types/technology.types";
import React from "react";

const Technology = async () => {
  const technologies = await getTechnologies();
  return (
    <div className="bg-secondary relative py-20">
      <h1 className="absolute left-0 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        My Skills
      </h1>

      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-200">
              Technologies
            </h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-100">
            My <span className="text-primary">Skills</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto my-10 flex flex-wrap gap-5">
        {technologies?.data?.map((technology: TTechnology) => (
          <SkillCard key={technology.id} data={technology} />
        ))}
      </div>
    </div>
  );
};

export default Technology;
