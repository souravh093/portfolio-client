import React from "react";
import Banner from "./_components/Banner";
import { ServicesShowcase } from "./_components/ServicesShow";
import MyService from "./_components/MyService";
import AboutMe from "./_components/AboutMe";
import EducationExperience from "./_components/EducationExperience";
import ProjectsView from "./_components/ProjectsView";
import Blog from "./_components/Blog";
import Technology from "./_components/Technology";
import { ContactMe } from "./_components/ContactMe";

const Home = async () => {
  return (
    <div>
      <Banner />
      <ServicesShowcase />
      <MyService />
      <AboutMe />
      <Technology />
      <EducationExperience />
      <ProjectsView />
      <Blog />
      <ContactMe />
    </div>
  );
};

export default Home;
