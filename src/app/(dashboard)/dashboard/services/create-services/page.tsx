/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

import "react-quill-new/dist/quill.snow.css";
import { uploadImageToFirebase } from "@/utils/uploadImage";
import { toast } from "@/hooks/use-toast";
import { useAddService } from "@/hooks/service.hook";

const CreateServices = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { mutate: addService, isPending } = useAddService();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      logo: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let logoUrl: string | null | undefined = null;

    if (data.logo) {
      const file = data.logo[0];
      logoUrl = await uploadImageToFirebase(file, setIsImageUploading);
      if (logoUrl) {
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

    addService({
      name: data.name,
      description: data.description,
      logo: logoUrl,
    });

    form.reset();
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="logo"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Product Images</FormLabel>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                width={100}
                height={100}
                className="w-full h-20 object-contain rounded-lg"
              />
            </div>
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your degree" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Description</FormLabel>
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

          <Button type="submit">
            {isPending || isImageUploading ? "Loading..." : "Create Service"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateServices;
