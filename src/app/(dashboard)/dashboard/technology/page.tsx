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
import { TechnologyTableHeader } from "@/constant/TableHeader.constant";
import { getTechnologies } from "@/services/technology";
import { TTechnology } from "@/types/technology.types";
import Image from "next/image";
import DeleteTechnology from "@/components/modal/DeleteTechnology";

const Technology = async () => {
  const technologies = await getTechnologies();
  return (
    <div className="w-full">
      <Link
        href={"/dashboard/technology/create-technology"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Technology</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {TechnologyTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {technologies?.data?.length < 1 ? (
            <span>No technologies found</span>
          ) : (
            technologies?.data?.map(
              (technology: TTechnology, index: number) => (
                <TableRow key={technology.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Image
                      height={100}
                      width={100}
                      className="h-10 w-10"
                      src={
                        technology.logo
                          ? technology.logo
                          : "/images/placeholder.png"
                      }
                      alt={technology.name}
                    />
                  </TableCell>
                  <TableCell>{technology.name}</TableCell>
                  <TableCell>{technology.category}</TableCell>
                  <TableCell className="flex space-x-2">
                    <DeleteTechnology id={technology.id ?? ""} />
                  </TableCell>
                </TableRow>
              )
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Technology;
