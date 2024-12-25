import BlogCard from "@/components/card/BlogCard";
import { getBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog.types";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const blogs = await getBlogs();
  console.log(blogs)
  return (
    <div className="relative my-10">
      <h1 className="absolute left-0 z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        My Blog Post
      </h1>

      <div className="container mx-auto flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-700">Blogs</h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-700">
            My <span className="text-primary">Blogs</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 rounded-3xl pl-3">
          <span className="bg-secondary my-2 rounded-full p-2 text-white">
            <MoveRight />
          </span>
          <Link
            className="bg-primary rounded-3xl py-4 px-5"
            href="/all-blogs"
          >
            View All Blogs
          </Link>
        </div>
      </div>

      <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs?.data?.slice(0, 3)?.map((blog: TBlog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
