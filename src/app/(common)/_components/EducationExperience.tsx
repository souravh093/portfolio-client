import envConfig from "@/config/envConfig";
import { TEducation } from "@/types/education.types";
import { TExperience } from "@/types/experience.types";
import { BriefcaseBusiness, NotebookPen } from "lucide-react";
import React from "react";

const EducationExperience = async () => {
  const experienceData = await fetch(`${envConfig.baseApi}/experiences`, {
    cache: "no-cache",
  });

  const educationData = await fetch(`${envConfig.baseApi}/educations`, {
    cache: "no-cache",
  });
  const experiences = await experienceData.json();
  const educations = await educationData.json();
  
  return (
    <div className="my-10 container mx-auto">
      <div className="relative">
        <h1 className="absolute left-40 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
          Education & Experience
        </h1>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center">
            <span className="text-xl text-secondary">-</span>
            <span className="text-lg font-bold text-gray-700">
              Education & Work
            </span>
          </div>
          <h1 className="text-4xl font-black text-gray-800 ">
            My <span className="text-secondary">Education</span> &{" "}
            <span className="text-secondary">Work Experience</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <div className="bg-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <span className="bg-secondary p-3 rounded-full text-white">
              <NotebookPen />
            </span>
            <h2 className="text-2xl font-bold text-secondary">Education</h2>
          </div>

          <div className="bg-gray-300 h-[1px] w-full my-4"></div>

          <div>
            {educations?.data?.map((education: TEducation) => (
              <div key={education.id} className="flex justify-between my-5">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {education.institutionName}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-600">
                    {education.degree}
                  </h3>
                </div>
                <div>
                  <div className="bg-white px-5 py-1 rounded-md text-gray-600 font-bold">
                    {`${new Date(
                      education.startDate
                    ).getFullYear()} - ${new Date(
                      education.endDate
                    ).getFullYear()}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <span className="bg-secondary p-3 rounded-full text-white">
              <BriefcaseBusiness />
            </span>
            <h2 className="text-2xl font-bold text-secondary">
              Work Experience
            </h2>
          </div>

          <div className="bg-gray-300 h-[1px] w-full my-4"></div>

          <div>
            {experiences?.data?.map((experience: TExperience) => (
              <div key={experience.id} className="flex justify-between my-5">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {experience.companyName}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-600">
                    {experience.position}
                  </h3>
                </div>
                <div>
                  <div className="bg-white px-5 py-1 rounded-md text-gray-600 font-bold">
                    {`${new Date(
                      experience.startDate
                    ).getFullYear()} - ${new Date(
                      experience.endDate
                    ).getFullYear()}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
