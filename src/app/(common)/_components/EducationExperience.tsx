import type React from "react"
import envConfig from "@/config/envConfig"
import type { TEducation } from "@/types/education.types"
import type { TExperience } from "@/types/experience.types"
import { BriefcaseBusiness, Calendar, NotebookPen } from "lucide-react"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"

async function getExperiences() {
  try {
    const response = await fetch(`${envConfig.baseApi}/experiences`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch experiences")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching experiences:", error)
    return { data: [] }
  }
}

async function getEducations() {
  try {
    const response = await fetch(`${envConfig.baseApi}/educations`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch educations")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching educations:", error)
    return { data: [] }
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).getFullYear()
}

function TimelineItem({
  title,
  subtitle,
  startDate,
  endDate,
  isLast = false,
}: {
  title: string
  subtitle: string
  startDate: string
  endDate: string
  isLast?: boolean
}) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-0.5 bg-gradient-to-b from-secondary to-secondary/20"></div>
      )}
      <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-2 border-secondary bg-white flex items-center justify-center">
        <Calendar className="h-3 w-3 text-secondary" />
      </div>
      <div className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 font-medium">{subtitle}</p>
          </div>
          <Badge
            variant="outline"
            className="bg-secondary/10 text-secondary border-secondary/20 px-3 py-1 text-sm font-medium self-start md:self-center"
          >
            {formatDate(startDate)} - {formatDate(endDate)}
          </Badge>
        </div>
      </div>
    </div>
  )
}

function EducationList({ educations }: { educations: TEducation[] }) {
  return (
    <div className="mt-6">
      {educations.map((education, index) => (
        <TimelineItem
          key={education.id}
          title={education.institutionName}
          subtitle={education.degree}
          startDate={education.startDate}
          endDate={education.endDate}
          isLast={index === educations.length - 1}
        />
      ))}
    </div>
  )
}

function ExperienceList({ experiences }: { experiences: TExperience[] }) {
  return (
    <div className="mt-6">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          title={experience.companyName}
          subtitle={experience.position}
          startDate={experience.startDate}
          endDate={experience.endDate}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  )
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-secondary p-3 rounded-full text-white shadow-lg shadow-secondary/20">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800">
        <span className="text-secondary">{title}</span>
      </h2>
    </div>
  )
}

function LoadingTimeline() {
  return (
    <div className="animate-pulse">
      {[1, 2, 3].map((item) => (
        <div key={item} className="relative pl-8 pb-8">
          <div className="absolute top-0 left-3 h-full w-0.5 bg-gray-200"></div>
          <div className="absolute top-0 left-0 h-6 w-6 rounded-full bg-gray-200"></div>
          <div className="bg-gray-100 rounded-xl p-5 h-24"></div>
        </div>
      ))}
    </div>
  )
}

async function EducationSection() {
  const educations = await getEducations()

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-md h-full">
      <SectionHeader icon={<NotebookPen className="h-5 w-5" />} title="Education" />
      {educations?.data?.length > 0 ? (
        <EducationList educations={educations.data} />
      ) : (
        <p className="text-gray-500 italic">No education data available</p>
      )}
    </div>
  )
}

async function ExperienceSection() {
  const experiences = await getExperiences()

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-md h-full">
      <SectionHeader icon={<BriefcaseBusiness className="h-5 w-5" />} title="Work Experience" />
      {experiences?.data?.length > 0 ? (
        <ExperienceList experiences={experiences.data} />
      ) : (
        <p className="text-gray-500 italic">No experience data available</p>
      )}
    </div>
  )
}

const EducationExperience = () => {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="relative mb-16">
          <h1 className="absolute -top-10 left-0 right-0 text-center z-0 text-7xl font-black text-gray-200 tracking-widest opacity-20 uppercase hidden md:block">
            Resume
          </h1>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-6 bg-secondary"></div>
              <span className="text-lg font-medium text-gray-600">Education & Experience</span>
              <div className="h-px w-6 bg-secondary"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              My <span className="text-secondary">Qualifications</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A showcase of my educational background and professional journey that has shaped my expertise and skills.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Suspense
            fallback={
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-200 p-3 rounded-full"></div>
                  <div className="h-8 bg-gray-200 w-32 rounded"></div>
                </div>
                <LoadingTimeline />
              </div>
            }
          >
            <EducationSection />
          </Suspense>

          <Suspense
            fallback={
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-200 p-3 rounded-full"></div>
                  <div className="h-8 bg-gray-200 w-32 rounded"></div>
                </div>
                <LoadingTimeline />
              </div>
            }
          >
            <ExperienceSection />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default EducationExperience

