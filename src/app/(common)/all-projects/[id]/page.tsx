/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react"
import DescriptionView from "@/components/shared/DescriptionView"
import envConfig from "@/config/envConfig"
import Image from "next/image"
import Link from "next/link"
import { Clock, ExternalLink, Github, Layers, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


interface PageProps {
  params: Promise<{
    id: string
  }>
}

async function getProjectData(id: string) {
  try {
    const response = await fetch(`${envConfig.baseApi}/projects/${id}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch project data")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching project data:", error)
    throw error
  }
}

function ProjectDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="bg-gray-200 h-[400px] w-full rounded-xl mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-200 h-48 rounded-xl"></div>
        <div className="bg-gray-200 h-48 rounded-xl md:col-span-2"></div>
      </div>

      <div className="space-y-4">
        <div className="h-8 bg-gray-200 w-3/4 rounded-lg"></div>
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-full rounded"></div>
        <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
      </div>
    </div>
  )
}

function ProjectLinks({
  projectUrl,
  githubClientUrl,
  githubServerUrl,
}: {
  projectUrl: string
  githubClientUrl: string
  githubServerUrl: string
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {projectUrl && (
        <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="gap-2 border-primary/20 bg-white/90 hover:bg-primary hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </Link>
      )}

      {githubClientUrl && (
        <Link href={githubClientUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="gap-2 border-primary/20 bg-white/90 hover:bg-primary hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            Client Code
          </Button>
        </Link>
      )}

      {githubServerUrl && (
        <Link href={githubServerUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="gap-2 border-primary/20 bg-white/90 hover:bg-primary hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            Server Code
          </Button>
        </Link>
      )}
    </div>
  )
}

function ProjectMetadata({ category, duration }: { category: string; duration: string }) {
  return (
    <div className="flex flex-wrap gap-6">
      {category && (
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Tag className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-medium">{category}</p>
          </div>
        </div>
      )}

      {duration && (
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{duration}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function TechnologiesUsed({ technologies }: { technologies: any[] }) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Layers className="h-5 w-5 text-primary" />
        Technologies Used
      </h3>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech: any) => (
          <div
            key={tech.id}
            className="flex flex-col items-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-12 w-12 mb-2">
              <Image
                src={tech.technology.logo || "/placeholder.svg"}
                alt={tech.technology.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{tech.technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

async function ProjectDetailsContent({ id }: { id: string }) {
  const projectData = await getProjectData(id)
  const project = projectData.data

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-red-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <Badge className="mb-3 bg-primary text-white border-none">{project.projectCategory}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.name}</h1>
            <ProjectLinks
              projectUrl={project.projectUrl}
              githubClientUrl={project.githubClientUrl}
              githubServerUrl={project.githubServerUrl}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <DescriptionView content={project.description} details={true} className="text-gray-700" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Project Details</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ProjectMetadata category={project.projectCategory} duration={project.duration} />


            <div className="space-y-4">
              {project.projectUrl && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Live URL</p>
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 truncate"
                  >
                    {project.projectUrl.replace(/^https?:\/\//, "")}
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </Link>
                </div>
              )}

              {project.githubClientUrl && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client Repository</p>
                  <Link
                    href={project.githubClientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 truncate"
                  >
                    {project.githubClientUrl.replace(/^https?:\/\//, "")}
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </Link>
                </div>
              )}

              {project.githubServerUrl && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Server Repository</p>
                  <Link
                    href={project.githubServerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 truncate"
                  >
                    {project.githubServerUrl.replace(/^https?:\/\//, "")}
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <TechnologiesUsed technologies={project.projectUsedTechnology} />
    </div>
  )
}

export default async function ProjectDetails({ params }: PageProps) {
  const resolvedParams = await params
  const { id } = resolvedParams

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<ProjectDetailsSkeleton />}>
        <ProjectDetailsContent id={id} />
      </Suspense>
    </div>
  )
}

