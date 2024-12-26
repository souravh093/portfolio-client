import { TBlog } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }: { data: TBlog }) => {
  return (
    <Link
      href={`/all-blogs/${data.id}`}
      className="border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition-shadow bg-white"
    >
      <div>
        <Image
          className="w-full h-64 object-cover rounded-3xl"
          src={data.image}
          alt={data.title}
          width={900}
          height={900}
        />
      </div>
      <div className="my-5">
        <span className="text-gray-600 font-bold px-3 bg-primary py-1 rounded-xl">
          {data.category}
        </span>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <div className="flex items-center justify-between gap-5 my-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            Sourave Halder
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>
              {new Date(data.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
