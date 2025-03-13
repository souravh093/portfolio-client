"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { TTechnology } from "@/types/technology.types"

const SkillCard = ({ data }: { data: TTechnology }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Generate a gradient based on the technology name for variety
  const getGradient = (name: string) => {
    // Simple hash function to generate consistent colors for the same name
    const hash = name.split("").reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)

    const baseColors = [
      ["#745FC9", "#9181E4"], // Purple
      ["#3B82F6", "#60A5FA"], // Blue
      ["#10B981", "#34D399"], // Green
      ["#F59E0B", "#FBBF24"], // Amber
      ["#EC4899", "#F472B6"], // Pink
      ["#6366F1", "#818CF8"], // Indigo
    ]

    const colorPair = baseColors[Math.abs(hash) % baseColors.length]
    return `linear-gradient(135deg, ${colorPair[0]}, ${colorPair[1]})`
  }

  const gradient = getGradient(data?.name || "default")
  const proficiency = data?.proficiency || Math.floor(Math.random() * 5) + 1 // 1-5 scale if not provided

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full rounded-2xl overflow-hidden group"
      style={{
        background: gradient,
        boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.2)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

      <div className="flex flex-col items-center justify-center p-5 h-full text-white">
        <div className="relative mb-3 w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 w-full h-full flex items-center justify-center">
            <Image
              className="w-full h-full object-contain drop-shadow-md"
              src={data?.logo ?? "/default-logo.png"}
              alt={data?.name ?? "Technology"}
              width={64}
              height={64}
            />
          </div>
        </div>

        <h3 className="font-bold text-center text-white mb-2">{data?.name}</h3>

        {/* Proficiency indicator */}
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < proficiency ? "bg-white" : "bg-white/30"}`}></div>
          ))}
        </div>

      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/5 rounded-full blur-lg"></div>
    </motion.div>
  )
}

export default SkillCard

