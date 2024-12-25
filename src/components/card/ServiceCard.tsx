import { TService } from "@/types/service.types";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DescriptionView from "../shared/DescriptionView";

const ServiceCard = ({ data }: { data: TService }) => {
  return (
    <div className="bg-[#705BC4] hover:bg-[#7d66d8] transition duration-150 hover:shadow-md p-5 rounded-3xl flex flex-col gap-5 items-center py-10">
      <div className="bg-[#7D6AC8] p-5 rounded-full">
        <Image
          src={data.logo}
          className="transition-transform h-20 w-20 object-cover rounded-full duration-300 group-hover:scale-110"
          alt={data.name}
          width={100}
          height={100}
        />
      </div>
      <div className="text-4xl font-bold text-center h-[80px]">{data.name}</div>
      <div>
        <DescriptionView
          className="text-white"
          content={data.description}
          details={false}
        />
      </div>
      <Link
        className="flex items-center underline text-gray-300"
        href={`/all-services/${data.id}`}
      >
        Learn more <ArrowBigRight />
      </Link>
    </div>
  );
};

export default ServiceCard;
