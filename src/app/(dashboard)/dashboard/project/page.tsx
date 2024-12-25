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
import { ProjectTableHeader } from "@/constant/TableHeader.constant";
import { getProjects } from "@/services/project";
import Image from "next/image";
import { TProject } from "@/types/project.type";

const Project = async () => {
  const projects = await getProjects();
  return (
    <div className="w-full">
      <Link
        href={"/dashboard/project/create-project"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Project</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {ProjectTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.data?.length < 1 ? (
            <span>No projects found</span>
          ) : (
            projects?.data?.map((project: TProject, index: number) => (
              <TableRow key={project.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="flex space-x-2 items-center">
                  <Image
                    height={100}
                    width={100}
                    className="h-10 w-10"
                    src={
                      project.image ? project.image : "/images/placeholder.png"
                    }
                    alt={project.name}
                  />
                  <h2>{project.name}</h2>
                </TableCell>
                <TableCell>{project.projectCategory}</TableCell>
                <TableCell>{project.duration}</TableCell>
                <TableCell>{project.projectUrl}</TableCell>
                <TableCell className="flex space-x-2">
                  {/* <DeleteTechnology id={project.id ?? ""} /> */}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Project;
