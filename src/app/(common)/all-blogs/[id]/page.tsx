import DescriptionView from "@/components/shared/DescriptionView";
import { getBlog } from "@/services/blog";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const blogData = await getBlog(params.id);
  console.log(blogData);
  return (
    <div className="min-h-screen container mx-auto">
      <div>
        <Image
          className="w-full h-[500px] rounded-md object-cover"
          src={blogData.data.image}
          alt={blogData.data.title}
          width={900}
          height={900}
        />
      </div>

      <div className="my-10 text-center">
        <span className="bg-primary text-gray-700 px-5 py-2 text-lg font-semibold rounded-3xl">
          {blogData.data.category}
        </span>
        <h1 className="my-5 text-3xl font-bold text-gray-700">
          {blogData?.data?.title}
        </h1>

        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center gap-2">
            <CircleUser className="w-16 h-16" />
            <div>
              <h1>
                Written By: <span className="text-primary">Sourave halder</span>{" "}
              </h1>
              <span>
                {new Date(blogData.data.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <DescriptionView content={blogData.data.description} details />
    </div>
  );
};

export default BlogDetails;
