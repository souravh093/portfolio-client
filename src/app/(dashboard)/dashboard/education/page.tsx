import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EducationTableHeader } from "@/constant/TableHeader.constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getEducations } from "@/services/education";
import { TEducation } from "@/types/education.types";
import { Edit2Icon } from "lucide-react";
import DeleteEducation from "@/components/modal/DeleteEducation";

const Education = async () => {
  const educations = await getEducations();

  return (
    <div className="w-full">
      <Link
        href={"/dashboard/education/create-education"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Education</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {EducationTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {educations?.data?.map((education: TEducation, index: number) => (
            <TableRow key={education.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {new Date(education.startDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(education.endDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{education.institutionName}</TableCell>
              <TableCell>{education.degree}</TableCell>
              <TableCell className="flex space-x-2">
                <Link
                  href={`/dashboard/education/edit-education/${education.id}`}
                >
                  <Button size={"icon"} className="bg-primary text-white">
                    <Edit2Icon />
                  </Button>
                </Link>

                <DeleteEducation id={education?.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Education;
