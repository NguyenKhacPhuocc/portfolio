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
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaCloudUploadAlt, FaNodeJs } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { LuAlignHorizontalSpaceAround } from "react-icons/lu";

const frontend = [
  { icon: <SiReact size={50} color="#61DBFB" />, name: "React" },
  { icon: <SiNextdotjs size={50} color="white" />, name: "Next.js" },
  { icon: <SiTypescript size={50} color="#3178C6" />, name: "TypeScript" },
  { icon: <SiJavascript size={50} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiHtml5 size={50} color="#E34F26" />, name: "HTML" },
  { icon: <SiCss3 size={50} color="#1572B6" />, name: "CSS" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "TailwindCSS" },
  { icon: <SiSwr size={50} color="#61DBFB" />, name: "SWR" },
  { icon: <LuAlignHorizontalSpaceAround size={50} />, name: "" },
];

const backend = [
  { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js" },
  { icon: <SiExpress size={50} color="white" />, name: "Express.js" },
  { icon: <SiMongodb size={50} color="#47A248" />, name: "Mongoose" },
  { icon: <SiJsonwebtokens size={50} color="#D63AFF" />, name: "JWT" },
  { icon: <FaCloudUploadAlt size={50} color="#FF6C37" />, name: "Multer" },
  { icon: <SiCloudinary size={50} color="#4285F4" />, name: "Cloudinary" },
  { icon: <GrValidate size={50} color="#FFB13B" />, name: "Joi" },
  { icon: <LuAlignHorizontalSpaceAround size={50} />, name: "" },
];

const other = [
  { icon: <SiGit size={50} color="#F1502F" />, name: "Git" },
  { icon: <SiGithub size={50} color="white" />, name: "GitHub" },
  { icon: <SiPostman size={50} color="#FF6C37" />, name: "Postman" },
  { icon: <SiVercel size={50} color="white" />, name: "Vercel" },
  { icon: <SiRender size={50} color="#00C7B7" />, name: "Render" },
  { icon: <LuAlignHorizontalSpaceAround size={50} />, name: "" },
];

const InfiniteRow = ({ items, reverse = false }: { items: any[]; reverse?: boolean }) => {
  // Tạo bản sao của mảng items để đảm bảo animation liền mạch
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full relative  py-[30px]">
      <motion.div
        className="flex gap-12"
        animate={{ x: reverse ? [0, '-50%'] : ['-50%', 0] }}
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
            <div className="transition-transform group-hover:scale-120 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              {skill.icon}
            </div>

            {/* Text */}
            <p className="mt-2 text-sm text-gray-300 transition-all group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-[80px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   // Chạy 1 lần khi vào viewport
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
      >
        Skills
      </motion.h2>

      <div className="w-full flex gap-[20px]  flex-col">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl font-semibold  text-cyan-400 ml-[20px]">Frontend</h3>
          <InfiniteRow items={frontend} />
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl font-semibold  text-green-400 ml-[20px]">Backend</h3>
          <InfiniteRow items={backend} reverse />
        </div>

        {/* Other */}
        <div>
          <h3 className="text-2xl font-semibold  text-yellow-400 ml-[20px]">Other</h3>
          <InfiniteRow items={other} />
        </div>
      </div>
    </section>
  );
};