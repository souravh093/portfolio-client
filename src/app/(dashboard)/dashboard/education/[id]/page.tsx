"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  educationValidation,
  EducationValues,
} from "@/validations/education/education.validation";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  useGetEducationById,
  useUpdateEducation,
} from "@/hooks/education.hook";

const EditEducation = ({ params }: { params: Promise<{ id: string }> }) => {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    params.then((resolvedParams) => {
      setUnwrappedParams(resolvedParams);
    });
  }, [params]);

  const { data: educationData } = useGetEducationById(
    unwrappedParams?.id as string
  );

  const { mutate: updateEducation, isPending } = useUpdateEducation();

  const form = useForm<EducationValues>({
    resolver: zodResolver(educationValidation),
    defaultValues: {
      startDate: "",
      endDate: "",
      degree: "",
      institutionName: "",
    },
  });

  const onSubmit = async (data: EducationValues) => {
    updateEducation({
      id: unwrappedParams?.id as string,
      educationData: data,
    });
  };

  useEffect(() => {
    if (educationData?.data) {
      form.reset({
        startDate: educationData.data.startDate,
        endDate: educationData.data.endDate,
        degree: educationData.data.degree,
        institutionName: educationData.data.institutionName,
      });
    }
  }, [educationData, form]);

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) =>
                          field.onChange(date?.toISOString() || "")
                        }
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto \h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) =>
                          field.onChange(date?.toISOString() || "")
                        }
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="degree"
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
            name="institutionName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Institution</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Institution Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {isPending ? "Adding..." : "Add Education"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditEducation;
