"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { uploadImageToFirebase } from "@/utils/uploadImage";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAddBlog } from "@/hooks/blog.hooks";

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { mutate: createBlog, isPending } = useAddBlog();
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      category: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let imageUrl: string | null | undefined = null;

    if (data.image) {
      const file = data.image[0];
      imageUrl = await uploadImageToFirebase(file, setIsImageUploading);
      if (imageUrl) {
        console.log("Logo uploaded successfully");
      } else {
        toast({
          title: "Error",
          description: "Error uploading image",
          variant: "destructive",
          duration: 5000,
        });
      }
    }

    createBlog({
      title: data.title,
      description: data.description,
      image: imageUrl,
      category: data.category,
    });

    form.reset();
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newImagePreview = URL.createObjectURL(file);
      setImagePreview(newImagePreview);
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Blog Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handleImageChange(e);
                      onChange(e.target.files);
                    }}
                    {...rest}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {imagePreview && (
            <div className="mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
          )}

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter blog title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="WEB_DEVELOPMENT">
                      Web Development
                    </SelectItem>
                    <SelectItem value="MOBILE_DEVELOPMENT">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="DESKTOP_DEVELOPMENT">
                      Desktop Development
                    </SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog Description</FormLabel>
                <FormControl>
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isImageUploading}>
            {isPending || isImageUploading ? "Uploading..." : "Create Blog"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateBlog;
