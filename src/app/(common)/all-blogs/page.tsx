import BlogCard from "@/components/card/BlogCard";
import { getBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog.types";
import React from "react";

const AllBlogs = async () => {
  const blogs = await getBlogs();
  return (
    <div className="bg-secondary min-h-screen py-20 relative">
      <h1 className="absolute left-[450px] z-0 text-7xl font-black text-gray-400 tracking-widest opacity-20 uppercase">
        All Blogs
      </h1>

      <div className="container mx-auto flex justify-center items-center">
        <div className="text-center">
          <div className="flex items-center gap-2 text-center">
            <span className="text-primary text-2xl">-</span>
            <h1 className="text-xl font-semibold text-gray-200 text-center">
              Blogs
            </h1>
          </div>
          <h1 className="text-5xl font-bold text-gray-100">
            My <span className="text-primary">From My Blogs</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs?.data?.map((blog: TBlog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
