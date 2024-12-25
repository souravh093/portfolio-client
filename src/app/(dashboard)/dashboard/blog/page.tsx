export const dynamic = "force-dynamic";
import DeleteBlog from "@/components/modal/DeleteBlog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BlogTableHeader } from "@/constant/TableHeader.constant";
import { getBlogs } from "@/services/blog";
import { TBlog } from "@/types/blog.types";
import { Edit2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const blogs = await getBlogs();
  return (
    <div className="w-full">
      <Link
        href={"/dashboard/blog/create-blog"}
        className="flex justify-end my-5"
      >
        <Button className="bg-primary text-white">Add Blog</Button>
      </Link>
      <Table className="w-full">
        <TableHeader className="bg-gray-50 text-white">
          <TableRow>
            {BlogTableHeader.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs?.data?.length < 1 ? (
            <span>No blogs found</span>
          ) : (
            blogs?.data?.map((blog: TBlog, index: number) => (
              <TableRow key={blog.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="flex space-x-2 items-center">
                  <Image
                    height={100}
                    width={100}
                    className="h-10 w-10"
                    src={blog.image ? blog.image : "/images/placeholder.png"}
                    alt={blog.title}
                  />
                  <h2>{blog.title}</h2>
                </TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell>{"Sourave Halder"}</TableCell>
                <TableCell className="flex space-x-2">
                  <Link href={`/dashboard/blog/${blog.id}`}>
                    <Button size={"icon"} className="bg-primary text-white">
                      <Edit2Icon />
                    </Button>
                  </Link>
                  <DeleteBlog id={blog.id ?? ""} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Blog;
