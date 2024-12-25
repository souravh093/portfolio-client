"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import {
  ShoppingCart,
  LayoutDashboard,
  Package,
  Code,
  Server,
  SmartphoneIcon as Mobile,
} from "lucide-react";

interface Service {
  name: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: "E-Commerce",
    icon: <ShoppingCart className="h-12 w-12" />,
  },
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="h-12 w-12" />,
  },
  {
    name: "Inventory",
    icon: <Package className="h-12 w-12" />,
  },
  {
    name: "Full-Stack Development",
    icon: <Code className="h-12 w-12" />,
  },
  {
    name: "Backend Systems",
    icon: <Server className="h-12 w-12" />,
  },
  {
    name: "Mobile Apps",
    icon: <Mobile className="h-12 w-12" />,
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex items-center gap-2 mx-10">
    <h1 className="text-5xl font-bold">{service.name}</h1>
    <span>
    {service.icon}
    </span>
  </div>
);

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="py-5 bg-primary">
      <div>
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
