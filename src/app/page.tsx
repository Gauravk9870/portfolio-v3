import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
