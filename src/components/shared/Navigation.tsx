"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white z-50 w-full sticky top-0">
      <div className="flex items-center justify-between container mx-auto p-4">
        <div>
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={30}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10 font-semibold">
          <Link className="hover:text-primary hover:transition duration-200" href={"/"}>Home</Link>
          <Link className="hover:text-primary hover:transition duration-200" href={"/all-services"}>Services</Link>
          <Link className="hover:text-primary hover:transition duration-200" href={"#about"}>About</Link>
          <Link className="hover:text-primary hover:transition duration-200" href={"/all-projects"}>Project</Link>
          <Link className="hover:text-primary hover:transition duration-200" href={"/all-blogs"}>Blogs</Link>
          {/* <Link href={"/"}>Testimonials</Link> */}
        </div>
        <Link
          href={"#contact"}
          className="hidden md:block bg-secondary text-white py-3 px-10 rounded-3xl"
        >
          <button>Contact Me</button>
        </Link>
        <button className="md:hidden text-black" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 p-4">
          <Link href={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link href={"/"} onClick={toggleMenu}>
            Services
          </Link>
          <Link href={"/"} onClick={toggleMenu}>
            About
          </Link>
          <Link href={"/"} onClick={toggleMenu}>
            Project
          </Link>
          <Link href={"/"} onClick={toggleMenu}>
            Blogs
          </Link>
          <Link href={"/"} onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link
            href={"/"}
            className="bg-secondary text-white py-3 px-10 rounded-3xl"
            onClick={toggleMenu}
          >
            <button>Contact Me</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
