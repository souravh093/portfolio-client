"use client"

import React from "react";
import LoginForm from "./_components/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[#4b4175] p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
