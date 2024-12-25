import React from "react";
import Banner from "./_components/Banner";
import { ServicesShowcase } from "./_components/ServicesShow";
import MyService from "./_components/MyService";
import AboutMe from "./_components/AboutMe";
import EducationExperience from "./_components/EducationExperience";

const Home = async () => {
  return (
    <div>
      <Banner />
      <ServicesShowcase />
      <MyService />
      <AboutMe />
      <EducationExperience />
    </div>
  );
};

export default Home;
