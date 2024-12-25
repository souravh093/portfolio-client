import ServiceCard from "@/components/card/ServiceCard";
import { getServices } from "@/services/service";
import { TService } from "@/types/service.types";
import React from "react";

const AllServices = async () => {
  const services = await getServices();
  return (
    <div className="bg-secondary py-20 relative">
      <h1 className="absolute left-1/2 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        All Service
      </h1>
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <div className="flex items-center gap-2 text-center">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Services
            </h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-100">
            All <span className="text-primary">Services</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services?.data?.map((service: TService) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
