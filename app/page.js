"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import About from "@components/About";
import Contact from "@components/Contact";
import Home from "@components/Home";

import Projects from "@components/Projects";
import TechnologyStack from "@components/TechnologyStack";

export const metadata = {
  title: "Next.js",
};

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Home />
      <TechnologyStack />
      <Projects />
      <About />
      <Contact />
    </>
  );
};
export default page;
