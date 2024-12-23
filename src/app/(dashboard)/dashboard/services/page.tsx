export const dynamic = "force-dynamic"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ServiceTableHeader } from "@/constant/TableHeader.constant";
import { getServices } from "@/services/service";
import { Edit2Icon } from "lucide-react";
import DeleteExperience from "@/components/modal/DeleteExperience";
import { TService } from "@/types/service.types";
import Image from "next/image";

const Services = async () => {
  const services = await getServices();

  return (
    <div className="w-full">
      <Link
        href={"/dashboard/services/create-services"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Services</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {ServiceTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.data?.length < 1 ? (
            <span>No service found</span>
          ) : (
            services?.data?.map((service: TService, index: number) => (
              <TableRow key={service.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>
                  {service.logo ? (
                    <Image
                      src={service.logo}
                      alt={service.name}
                      className="rounded-2xl w-10 h-10 object-contain"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="rounded-2xl w-20 h-20 object-contain bg-gray-200 flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Link href={`/dashboard/education/${service.id}`}>
                    <Button size={"icon"} className="bg-primary text-white">
                      <Edit2Icon />
                    </Button>
                  </Link>

                  <DeleteExperience id={service?.id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Services;
