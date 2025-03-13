"use client"

import { useEffect, useRef, useState } from "react"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import ServiceCard from "@/components/card/ServiceCard"
import envConfig from "@/config/envConfig"
import type { TService } from "@/types/service.types"
import { motion } from "framer-motion"

const MyService = () => {
  const [services, setServices] = useState<TService[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await fetch(`${envConfig.baseApi}/services`, {
          cache: "no-cache",
        })
        const result = await data.json()
        setServices(result?.data || [])
      } catch (error) {
        console.error("Error fetching services:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-secondary to-secondary/90 py-16 md:py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      {/* Background text */}
      <div className="absolute left-0 top-10 md:top-20 w-full overflow-hidden select-none pointer-events-none">
        <h1 className="text-7xl md:text-9xl font-black text-gray-400/10 tracking-widest uppercase whitespace-nowrap">
          Services
        </h1>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-primary"></span>
              <h3 className="text-lg font-medium text-gray-200 uppercase tracking-wider">Services</h3>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">
              My <span className="text-primary">Services</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/all-services"
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/15 rounded-full pl-5 pr-2 py-2 transition-all duration-300"
            >
              <span className="font-medium text-white">View All Services</span>
              <span className="bg-primary rounded-full p-2 text-white transform group-hover:translate-x-1 transition-transform duration-300">
                <MoveRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8 h-64 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services?.slice(0, 3)?.map((service: TService) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard data={service} />
              </motion.div>
            ))}

            {services?.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-300 text-lg">No services available at the moment.</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default MyService

