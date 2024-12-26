/* eslint-disable @typescript-eslint/no-explicit-any */

import DescriptionView from "@/components/shared/DescriptionView";
import envConfig from "@/config/envConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProjectDetails = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const {id} = resolvedParams;
  
  const data = await fetch(`${envConfig.baseApi}/projects/${id}`);

  const projectData = await data.json();

  return (
    <div className="container min-h-screen mx-auto">
      <div>
        <Image
          className="w-full h-[500px] rounded-md object-cover"
          src={projectData.data.image}
          alt={projectData.data.name}
          width={900}
          height={900}
        />
      </div>
      <div className="flex gap-5 my-5">
        <div className="bg-primary p-5 flex flex-col gap-3 rounded-md">
          <h1 className="flex gap-2">
            Project Category:{" "}
            <span className="font-bold">
              {projectData.data.projectCategory}
            </span>
          </h1>
          <h1 className="flex gap-2">
            Project Duration:
            <span className="font-bold">{projectData.data.duration}</span>
          </h1>
          <Link
            target="_blank"
            className="underline"
            href={projectData.data.projectUrl}
          >
            Live URL
          </Link>
          <Link
            target="_blank"
            className="underline"
            href={projectData.data.githubClientUrl}
          >
            Github Client URL
          </Link>
          <Link
            target="_blank"
            className="underline"
            href={projectData.data.githubServerUrl}
          >
            Github Server URL
          </Link>
        </div>

        <div className="bg-primary p-5 flex flex-wrap gap-3 rounded-md">
          {projectData.data.projectUsedTechnology.map((tech: any) => (
            <div key={tech.id}>
              <Image
                src={tech.technology.logo}
                alt={tech.technology.name}
                width={50}
                height={50}
              />
              <h1>{tech.technology.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div>
        <DescriptionView content={projectData.data.description} details />
      </div>
    </div>
  );
};

export default ProjectDetails;
