/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginValidationSchema,
  LoginValues,
} from "@/validations/auth/login.interface";
import { useLogin } from "@/hooks/login.hook";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const LoginForm = () => {
  const router = useRouter();
  const redirect = useSearchParams().get("redirect");
  const { mutate: loginUser, isPending } = useLogin();

  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginValues) => {
    loginUser(data, {
      onSuccess: () => {
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/dashboard");
        }

        toast({
          title: "Login successful",
          description: "You have been logged in successfully",
        });
      },
      onError: (error: any) => {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        })
      },
    });
  };

  return (
    <div className="max-w-sm mx-auto shadow-lg bg-secondary px-5 py-10 rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="password"
                    placeholder={`******`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size={"lg"} className="text-black">
            {isPending ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
