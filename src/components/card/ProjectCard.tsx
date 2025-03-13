"use client"

import type { TProject } from "@/types/project.type"
import Image from "next/image"
import { ArrowUpRight, Code2, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function ProjectCard({ data }: { data: TProject }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group bg-white/5 backdrop-blur-sm rounded-3xl p-4 md:p-8 transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-primary/30 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative overflow-hidden rounded-2xl aspect-video">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <Image
            src={data.image || "/placeholder.svg"}
            alt={data.name}
            width={700}
            height={400}
            className={`object-cover w-full h-full transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />

          <div className="absolute bottom-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {data.projectUrl && (
              <a
                href={data.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </a>
            )}

            {data.githubClientUrl && (
              <a
                href={data.githubClientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Client Code</span>
              </a>
            )}

            {data.githubServerUrl && (
              <a
                href={data.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary hover:bg-primary hover:text-white p-2 rounded-full transition-colors duration-300"
              >
                <Code2 className="h-5 w-5" />
                <span className="sr-only">Server Code</span>
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {data.projectUsedTechnology.slice(0, 5).map((tech) => (
              <Badge
                key={tech.id}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 text-sm font-medium rounded-full"
              >
                {tech.technology.name}
              </Badge>
            ))}
            {data.projectUsedTechnology.length > 5 && (
              <Badge
                variant="outline"
                className="bg-white/10 text-white/70 border-white/20 px-3 py-1 text-sm font-medium rounded-full"
              >
                +{data.projectUsedTechnology.length - 5} more
              </Badge>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {data.name}
          </h3>

          <p className="text-white/70 line-clamp-3">{data.description}</p>

          <Link href={`/all-projects/${data.id}`}>
            <Button
              variant="outline"
              className="mt-4 border-white/20 text-white bg-primary hover:bg-primary hover:text-white hover:border-primary rounded-full group/btn"
            >
              <span>View Details</span>
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

