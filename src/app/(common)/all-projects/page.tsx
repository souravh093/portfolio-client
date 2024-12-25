import ProjectCard from "@/components/card/ProjectCard";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/project.type";
import React from "react";

const AllProjects = async () => {
  const projects = await getProjects();
  return (
    <div className="bg-secondary min-h-screen py-20 relative">
      <h1 className="absolute left-96 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        My Latest Project
      </h1>

      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <div className="flex items-center gap-2 text-center">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Projects
            </h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-100">
            My <span className="text-primary">Latest Projects</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1">
        {projects?.data?.map((project: TProject) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
