import Hero from "../components/layout/Hero";
import Experience from "../components/layout/Experience";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <main className="hide-scrollbar">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
