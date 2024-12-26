import ServiceCard from "@/components/card/ServiceCard";
import envConfig from "@/config/envConfig";
import { TService } from "@/types/service.types";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const MyService = async () => {
  const data = await fetch(`${envConfig.baseApi}/services`, {
    cache: "no-cache",
  });

  const services = await data.json();
  return (
    <div className="bg-secondary py-20 relative">
      <h1 className="absolute left-0 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        Service
      </h1>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-200">Services</h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-100">
            My <span className="text-primary">Services</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-3xl pl-3">
          <span className="bg-secondary my-2 rounded-full p-2 text-white">
            <MoveRight />
          </span>
          <Link className="bg-primary rounded-3xl py-4 px-5" href="/all-services">
            View All Services
          </Link>
        </div>
      </div>

      <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services?.data?.slice(0, 3)?.map((service: TService) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default MyService;
