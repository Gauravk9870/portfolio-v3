import React from "react";
import Navbar from "../../components/layout/Navbar";
import Projects from "@/components/layout/Projects";

const page = () => {
  return (
    <section className="bg-[#000000]">
      <Navbar />
      <Projects />
    </section>
  );
};

export default page;
