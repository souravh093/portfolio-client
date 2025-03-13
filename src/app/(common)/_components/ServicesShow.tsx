"use client"

import type React from "react"
import Marquee from "react-fast-marquee"
import { ShoppingCart, LayoutDashboard, Package, Code, Server, SmartphoneIcon as Mobile } from "lucide-react"

interface Service {
  name: string
  icon: React.ReactNode
  color: string
}

const services: Service[] = [
  {
    name: "E-Commerce",
    icon: <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Inventory",
    icon: <Package className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Full-Stack",
    icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-emerald-500 to-green-500",
  },
  {
    name: "Backend",
    icon: <Server className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-purple-500 to-violet-500",
  },
  {
    name: "Mobile Apps",
    icon: <Mobile className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />,
    color: "from-cyan-500 to-teal-500",
  },
]

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="group relative mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex items-center">
    <div
      className={`
      flex items-center gap-3 sm:gap-4 md:gap-6 
      px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
      rounded-xl sm:rounded-2xl 
      bg-white/10 backdrop-blur-sm 
      border border-white/20
      shadow-lg
      transition-all duration-300
      group-hover:bg-white/20 group-hover:scale-105 group-hover:shadow-xl
    `}
    >
      <div
        className={`
        p-2 sm:p-3 md:p-4 
        rounded-lg sm:rounded-xl 
        bg-gradient-to-br ${service.color} 
        text-white 
        shadow-md
        transition-transform duration-300
        group-hover:rotate-6 group-hover:scale-110
      `}
      >
        {service.icon}
      </div>
      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
        {service.name}
      </h3>
    </div>

    {/* Decorative glow effect */}
    <div
      className={`
      absolute -inset-1 
      bg-gradient-to-r ${service.color} 
      rounded-xl sm:rounded-2xl 
      opacity-0 blur-xl 
      transition-opacity duration-300
      group-hover:opacity-30
      -z-10
    `}
    ></div>
  </div>
)

export const ServicesShowcase: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      {/* Top fade effect */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary to-transparent z-10"></div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-primary to-transparent z-10"></div>

      {/* Left fade effect */}
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>

      {/* Right fade effect */}
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>

      <div className="py-4">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          pauseOnClick={true}
          play={true}
          direction="left"
          className="py-2"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Marquee>
      </div>

      <div className="py-4 mt-4">
        <Marquee
          gradient={false}
          speed={30}
          pauseOnHover={true}
          pauseOnClick={true}
          play={true}
          direction="right"
          className="py-2"
        >
          {[...services].reverse().map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

