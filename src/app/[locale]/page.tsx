import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skill";


// đây là file mặc định chạy vào sau khi vào [locale]
export default function Home() {
  return (
    <>
      <div className="dark:bg-[#0f172a] bg-blue-300 text-white">
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
