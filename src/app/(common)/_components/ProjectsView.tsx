import ProjectCard from "@/components/card/ProjectCard";
import { getProjects } from "@/services/project";
import { TProject } from "@/types/project.type";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsView = async () => {
  const projects = await getProjects();
  return (
    <div className="bg-secondary py-20">
      <div className="relative">
        <h1 className="absolute left-0 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
          My Latest Project
        </h1>

        <div className="container mx-auto flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">-</span>
              <h1 className="text-xl font-semibold text-gray-200">Projects</h1>
            </div>
            <h1 className="text-5xl font-bold text-gray-100">
              My <span className="text-primary">Latest Project</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
            <span className="bg-secondary my-2 rounded-full p-2 text-white">
              <MoveRight />
            </span>
            <Link
              className="bg-primary rounded-3xl py-4 px-5"
              href="/all-projects"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 grid grid-cols-1">
        {projects?.data?.slice(0, 3).map((project: TProject) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
