export const dynamic = "force-dynamic"; 

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getExperiences } from "@/services/experience";
import { Edit2Icon } from "lucide-react";
import { TExperience } from "@/types/experience.types";
import { ExperienceTableHeader } from "@/constant/TableHeader.constant";
import DeleteExperience from "@/components/modal/DeleteExperience";

const Experience = async () => {
  const experiences = await getExperiences();

  return (
    <div className="w-full">
      <Link
        href={"/dashboard/experience/create-experience"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Experience</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {ExperienceTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {experiences?.data?.length < 1 ? (
            <span>No experience found</span>
          ) : (
            experiences?.data?.map((experience: TExperience, index: number) => (
              <TableRow key={experience.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {new Date(experience.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(experience.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{experience.companyName}</TableCell>
                <TableCell>{experience.position}</TableCell>
                <TableCell className="flex space-x-2">
                  <Link href={`/dashboard/education/${experience.id}`}>
                    <Button size={"icon"} className="bg-primary text-white">
                      <Edit2Icon />
                    </Button>
                  </Link>

                  <DeleteExperience id={experience?.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Experience;
