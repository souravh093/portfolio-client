/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import Selects from "react-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { uploadImageToFirebase } from "@/utils/uploadImage";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useGetTechnologies } from "@/hooks/technology.hook";
import { TProjectUsedTechnology } from "@/types/project.type";
import { useAddProject } from "@/hooks/project.hook";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IFormInput {
  name: string;
  description: string;
  projectUrl: string;
  githubClientUrl: string;
  githubServerUrl: string;
  projectCategory: string;
  duration: string;
  image: FileList;
  technologies: { value: string; label: string }[];
}

const CreateProject = () => {
  const { data: technologiesData = [] } = useGetTechnologies();

  const { mutate: addProject, isPending } = useAddProject();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [technologies, setTechnologies] = useState<
    { value: string; label: string }[]
  >([]);

  const form = useForm<IFormInput>({
    defaultValues: {
      name: "",
      description: "",
      projectUrl: "",
      githubClientUrl: "",
      githubServerUrl: "",
      projectCategory: "",
      duration: "",
      technologies: [],
    },
  });

  // Fetch technologies on component mount
  useEffect(() => {
    technologiesData?.data?.forEach((tech: { id: string; name: string }) => {
      setTechnologies((prev) => [
        ...prev,
        { value: tech.id, label: tech.name },
      ]);
    });
  }, [technologiesData]);

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

    if (!imageUrl) {
      toast({
        title: "Error",
        description: "Please upload an image",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const projectData = {
      name: data.name,
      description: data.description,
      projectUrl: data.projectUrl,
      githubClientUrl: data.githubClientUrl,
      githubServerUrl: data.githubServerUrl,
      projectCategory: data.projectCategory,
      duration: data.duration,
      image: imageUrl,
      projectUsedTechnology: data.technologies.map(
        (tech: { value: string; label: string }) => ({
          technologyId: tech.value,
        })
      ),
    };

    addProject(projectData);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Project Image</FormLabel>
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter project name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter project URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubClientUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Client URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter GitHub client URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubServerUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Server URL</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter GitHub server URL" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectCategory"
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
                      <SelectItem value="FRONTEND">Frontend</SelectItem>
                      <SelectItem value="BACKEND">Backend</SelectItem>
                      <SelectItem value="FULLSTACK">Full Stack</SelectItem>
                      <SelectItem value="MOBILE">Mobile</SelectItem>
                      <SelectItem value="DESKTOP">Desktop</SelectItem>
                      <SelectItem value="OTHER">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter project duration" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              name="technologies"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies Used</FormLabel>
                  <Selects
                    {...field}
                    isMulti
                    options={technologies}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Description</FormLabel>
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
            {isPending || isImageUploading ? "Uploading..." : "Create Project"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateProject;
