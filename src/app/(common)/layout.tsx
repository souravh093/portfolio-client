import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
