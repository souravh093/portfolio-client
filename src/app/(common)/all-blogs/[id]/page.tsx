import DescriptionView from "@/components/shared/DescriptionView";
import envConfig from "@/config/envConfig";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogDetails = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data = await fetch(`${envConfig.baseApi}/blogs/${id}`, {
    cache: "no-cache",
  });

  const blogData = await data.json();
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
