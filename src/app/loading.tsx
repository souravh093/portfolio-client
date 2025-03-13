"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const commands = [
  "Initializing development environment...",
  "Loading dependencies...",
  "Compiling components...",
  "Optimizing assets...",
  "Establishing connection...",
  "Fetching latest data...",
  "Rendering UI components...",
]

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "REST API",
  "Docker",
  "AWS",
  "Firebase",
]

const CodeLoading = () => {
  const [progress, setProgress] = useState(0)
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [commandText, setCommandText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [loadedTechs, setLoadedTechs] = useState<string[]>([])

  // Type out the current command
  useEffect(() => {
    if (currentCommandIndex >= commands.length) return

    const command = commands[currentCommandIndex]
    let index = 0

    const interval = setInterval(() => {
      setCommandText(command.substring(0, index))
      index++

      if (index > command.length) {
        clearInterval(interval)

        // Move to next command after a delay
        setTimeout(() => {
          setCurrentCommandIndex((prev) => prev + 1)
          setCommandText("")

          // Add a random technology to the loaded list
          if (loadedTechs.length < technologies.length) {
            const remainingTechs = technologies.filter((tech) => !loadedTechs.includes(tech))
            const randomTech = remainingTechs[Math.floor(Math.random() * remainingTechs.length)]
            setLoadedTechs((prev) => [...prev, randomTech])
          }
        }, 500)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [currentCommandIndex, loadedTechs])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 3
        const newProgress = prev + increment
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  // Calculate which code blocks to show based on progress
  const codeBlocksVisible = Math.floor((progress / 100) * 5)

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white font-mono">
      {/* Animated background with code pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 animate-slide-down">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-xs md:text-sm overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="inline-block opacity-70" style={{ animationDelay: `${(i + j) * 0.1}s` }}>
                  {`const ${String.fromCharCode(97 + Math.floor(Math.random() * 26))} = () => { return ${Math.floor(Math.random() * 100)} }`}
                  &nbsp;&nbsp;&nbsp;
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 w-full max-w-3xl px-4 space-y-8">
        {/* Logo and title */}
        <div className="text-center mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Sourave<span className="text-primary">.dev</span>
          </div>
          <div className="text-gray-400 text-sm md:text-base">Full Stack Developer</div>
        </div>

        {/* Terminal window */}
        <div className="bg-gray-950 rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-400 text-sm">portfolio-loader</div>
          </div>

          {/* Terminal content */}
          <div className="p-4 h-64 overflow-y-auto font-mono text-sm md:text-base">
            {commands.slice(0, currentCommandIndex).map((cmd, index) => (
              <div key={index} className="mb-2">
                <span className="text-green-500">$ </span>
                <span className="text-gray-300">{cmd}</span>
                <span className="text-green-400"> [OK]</span>
              </div>
            ))}

            {currentCommandIndex < commands.length && (
              <div className="mb-2">
                <span className="text-green-500">$ </span>
                <span className="text-gray-300">{commandText}</span>
                <span
                  className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 text-primary`}
                >
                  ▌
                </span>
              </div>
            )}

            {/* Code blocks that appear as loading progresses */}
            {Array.from({ length: codeBlocksVisible }).map((_, index) => (
              <div
                key={`code-${index}`}
                className="mt-4 p-2 bg-gray-800 rounded text-xs md:text-sm overflow-x-auto animate-fade-in"
              >
                <pre className="text-gray-300">
                  {index === 0 &&
                    `function initPortfolio() {
  const skills = ['React', 'Next.js', 'TypeScript'];
  return new Developer(skills);
}`}
                  {index === 1 &&
                    `const renderProjects = async () => {
  const projects = await fetchProjects();
  return projects.map(p => <ProjectCard {...p} />);
}`}
                  {index === 2 &&
                    `import { useState, useEffect } from 'react';

export const usePortfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Initialize portfolio data
    setIsLoading(false);
  }, []);
  
  return { isLoading };
}`}
                  {index === 3 &&
                    `// Tailwind CSS configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#705BC4',
        secondary: '#4F46E5',
      }
    }
  }
}`}
                  {index === 4 &&
                    `// Next.js API route
export async function GET(request) {
  const data = await db.query('SELECT * FROM projects');
  return Response.json({ data });
}`}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading status */}
        <div className="flex justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <Loader2 className="h-4 w-4 animate-spin text-primary mr-2" />
            <span>{progress < 100 ? "Loading portfolio..." : "Ready to launch!"}</span>
          </div>
          <div>{Math.min(100, Math.floor(progress))}%</div>
        </div>

        {/* Technologies being loaded */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {loadedTechs.map((tech, index) => (
            <div
              key={tech}
              className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CodeLoading

