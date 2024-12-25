"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { TTechnology } from "@/types/technology.types";
import { useAddTechnology } from "@/hooks/technology.hook";
import { uploadImageToFirebase } from "@/utils/uploadImage";
import { toast } from "@/hooks/use-toast";

const CreateTechnology = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { mutate: addTechnology, isPending } = useAddTechnology();
  const form = useForm({
    defaultValues: {
      name: "",
      category: "",
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

    const technologyData: TTechnology = {
      name: data.name,
      category: data.category,
      logo: logoUrl,
    };

    addTechnology(technologyData);

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="logo"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Technology Logo</FormLabel>
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
              <FormItem className="flex flex-col">
                <FormLabel>Technology Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="pl-3 text-left w-full font-normal"
                    placeholder="Enter technology name"
                  />
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
                <FormLabel>Email</FormLabel>
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
                    <SelectItem value="TECHNICAL">Technical</SelectItem>
                    <SelectItem value="SOFT_SKILL">Soft Skill</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">
            {isPending || isImageUploading ? "Adding..." : "Add Technology"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateTechnology;
