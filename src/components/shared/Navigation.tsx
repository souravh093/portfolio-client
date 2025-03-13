"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight uppercase">
            Sourave<span className="text-primary">.dev</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/all-services"
            className="font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/all-projects"
            className="font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Projects
          </Link>
          <Link
            href="/all-blogs"
            className="font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Blogs
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-secondary hover:bg-secondary/90 text-white py-2.5 px-6 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>

        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Backdrop - closes menu when clicked */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white  z-50 shadow-xl border-l border-gray-200 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <button
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-6 py-8 flex flex-col items-start gap-1 bg-white">
          <Link
            href="/"
            className="font-medium text-lg w-full py-3 px-4 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/all-services"
            className="font-medium text-lg w-full py-3 px-4 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="font-medium text-lg w-full py-3 px-4 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/all-projects"
            className="font-medium text-lg w-full py-3 px-4 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            href="/all-blogs"
            className="font-medium text-lg w-full py-3 px-4 rounded-lg hover:bg-secondary/10 hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            Blogs
          </Link>

          <div className="w-full pt-6 mt-4 border-t border-gray-100">
            <Link
              href="#contact"
              className="bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-lg text-base font-medium transition-colors w-full inline-block text-center"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation

