/* eslint-disable react/no-unescaped-entities */
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { FlipWords } from "@/components/ui/flip-words"
import DownloadResume from "@/components/shared/DownloadResume"
import portfolioImage from "@/assets/portfolio.png"
import { motion } from "framer-motion"

const BannerAction = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-5 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <DownloadResume />
      </motion.div>
      <motion.button
        className="bg-secondary hover:bg-secondary/90 text-white py-3 px-6 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <a href="#contact">Hire me</a>
      </motion.button>
    </div>
  )
}

const Banner = () => {
  const words = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "MERN Stack Developer"]

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 50 : 100

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width

          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/90 dark:from-black/0 dark:via-black/50 dark:to-black/90 -z-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-16">
          {/* Profile image with animation */}
          <motion.div
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl opacity-30 animate-pulse"></div>
            <Image
              src={portfolioImage || "/placeholder.svg"}
              alt="Portfolio"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl z-10 relative"
              priority
            />
            <motion.div
              className="absolute -inset-1 rounded-full border-2 border-secondary opacity-70"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="flex flex-col gap-5 text-center max-w-3xl">
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary font-bold mr-2">—</span>
              Hello
            </motion.h3>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm{" "}
              <span className="text-secondary bg-clip-text bg-gradient-to-r uppercase from-secondary to-primary">Sourave</span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <FlipWords words={words} />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6"
            >
              <BannerAction />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  )
}

export default Banner

