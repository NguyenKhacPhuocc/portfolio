import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skill";

export default function Home() {
  return (
    <>
      <div className="bg-[#0f172a] text-white">
        <HomePage />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
