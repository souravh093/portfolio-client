import React from "react";
import Banner from "./_components/Banner";
import { ServicesShowcase } from "./_components/ServicesShow";
import MyService from "./_components/MyService";

const Home = async () => {
  return (
    <div>
      <Banner />
      <ServicesShowcase />
      <MyService />
    </div>
  );
};

export default Home;
