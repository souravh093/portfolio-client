import { Suspense } from "react";
import envConfig from "@/config/envConfig";
import type { TProject } from "@/types/project.type";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/card/ProjectCard";

async function getProjects() {
  try {
    const response = await fetch(`${envConfig.baseApi}/projects`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [] };
  }
}

function ProjectsHeader() {
  return (
    <div className="relative z-10 mb-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="relative">
            <div className="absolute -top-10 -left-4 md:-left-8 z-0 text-5xl md:text-7xl font-black text-white/10 tracking-widest uppercase whitespace-nowrap">
              Portfolio
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-primary"></span>
                <span className="text-lg font-medium text-white/80">
                  Recent Work
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                My <span className="text-primary">Latest Projects</span>
              </h2>
            </div>
          </div>

          <Link href="/all-projects">
            <Button className="group bg-white hover:bg-primary text-secondary hover:text-white transition-all duration-300 rounded-full px-6 py-6">
              <span className="mr-2">View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-10">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="animate-pulse bg-white/5 rounded-3xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl h-72 w-full"></div>
            <div className="space-y-4">
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-8 w-20 bg-white/10 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="h-8 w-3/4 bg-white/10 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/10 rounded"></div>
                <div className="h-4 w-full bg-white/10 rounded"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
              </div>
              <div className="h-10 w-32 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function ProjectsList() {
  const projects = await getProjects();

  if (!projects?.data?.length) {
    return (
      <div className="container mx-auto text-center py-20">
        <Layers className="h-16 w-16 mx-auto text-primary/60 mb-4" />
        <h3 className="text-2xl font-medium text-white">No projects found</h3>
        <p className="text-white/60 mt-2">Check back later for new projects</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-10">
      {projects.data.slice(0, 3).map((project: TProject) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </div>
  );
}

export default function ProjectsView() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/90 py-20 overflow-hidden">
      <ProjectsHeader />

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsList />
      </Suspense>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
