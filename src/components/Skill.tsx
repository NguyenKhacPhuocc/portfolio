/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSwr,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiI18Next,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useTranslations } from "next-intl";

const frontend = [
  { icon: <SiGit size={100} color="#F1502F" />, name: "Git" },
  { icon: <SiGithub size={100} color="white" />, name: "GitHub" },
  { icon: <SiReact size={100} color="#61DBFB" />, name: "React" },
  { icon: <SiNextdotjs size={100} color="white" />, name: "Next.js" },
  { icon: <SiTypescript size={100} color="#3178C6" />, name: "TypeScript" },
  { icon: <SiJavascript size={100} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 size={100} color="#E34F26" />, name: "HTML" },
  { icon: <SiCss3 size={100} color="#1572B6" />, name: "CSS" },
  { icon: <SiTailwindcss size={100} color="#38B2AC" />, name: "TailwindCSS" },
  { icon: <SiSwr size={100} color="#61DBFB" />, name: "SWR" },
  { icon: <FaNodeJs size={100} color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress size={100} color="white" />, name: "Express.js" },
  { icon: <SiMongodb size={100} color="#47A248" />, name: "Mongoose" },
  { icon: <SiJsonwebtokens size={100} color="#D63AFF" />, name: "JWT" },
  { icon: <SiI18Next size={100} color="#1572B6" />, name: "i18n" },
];

const InfiniteRow = ({ items, reverse = false }: { items: any[]; reverse?: boolean }) => {
  // Tạo bản sao của mảng items để đảm bảo animation liền mạch
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden w-full relative  py-[60px]">
      <motion.div
        className="flex gap-12"
        animate={{ x: reverse ? [0, '-100%'] : ['-100%', 0] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center min-w-[120px] transition-transform"
          >
            {/* Icon */}
            <div className="transition-transform group-hover:scale-120 dark:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              {skill.icon}
            </div>

            {/* Text */}
            <p className="mt-2 text-sm dark:text-gray-300 transition-all dark:group-hover:text-white text-gray-800 group-hover:text-black font-bold group-hover:scale-110 dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const t = useTranslations("Skills");
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-blue-300 via-sky-100 to-blue-300 py-[80px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   // Chạy 1 lần khi vào viewport
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 from-slate-700 via-gray-800 to-slate-900 bg-clip-text text-transparent drop-shadow-lg"
      >
        {t('skills')}
      </motion.h2>

      <div className="w-full flex gap-[20px]  flex-col">
        {/* Frontend */}
        <div>
          <InfiniteRow items={frontend} />
        </div>
      </div>
    </section>
  );
};