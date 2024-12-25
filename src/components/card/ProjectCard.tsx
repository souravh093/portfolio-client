import { TProject } from "@/types/project.type";
import Image from "next/image";
import React from "react";
import DescriptionView from "../shared/DescriptionView";
import GroupButton from "../shared/GroupButton";
import ViewDetails from "../shared/ViewDetails";

const ProjectCard = ({ data }: { data: TProject }) => {
  console.log(data);
  return (
    <div className="my-10 p-4 rounded-3xl bg-[#705BC4] grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <Image
        className="rounded-3xl h-96 w-[700px] object-cover"
        width={700}
        height={700}
        src={data.image}
        alt={data.name}
      />

      <div>
        <GroupButton
          projectUrl={data.projectUrl}
          githubClientUrl={data.githubClientUrl}
          githubServerUrl={data.githubServerUrl}
        />

        <div className="flex flex-wrap gap-2">
          {data.projectUsedTechnology.map((tech) => (
            <span
              className="bg-primary px-3 py-1 text-gray-700 font-semibold rounded-3xl"
              key={tech.id}
            >
              {tech.technology.name}
            </span>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-gray-100 my-4">{data.name}</h1>

        <DescriptionView
          className="text-white"
          content={data.description}
          details={false}
        />

        <div className="mt-5">
          <ViewDetails id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
