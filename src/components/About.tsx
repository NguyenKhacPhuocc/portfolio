"use client"
import { motion, Variants } from "framer-motion"
import { JSX } from "react"

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const paragraphs: JSX.Element[] = [
  <span key={1}>Hi, I am Phuoc 👋</span>,

  <span key={2}>
    I’m a final-year IT student passionate about building modern and scalable web applications.
    With a solid foundation in{" "}
    <span className="font-bold text-cyan-400">React</span>,{" "}
    <span className="font-bold text-blue-400">Next.js</span>, and{" "}
    <span className="font-bold text-green-400">Node.js</span>, I enjoy creating responsive,
    efficient, and user-friendly digital solutions.
  </span>,

  <span key={3}>
    Over the past few years, I’ve worked on projects that combine both frontend and backend
    development, which has strengthened my interest in becoming a{" "}
    <span className="font-semibold text-indigo-300">Fullstack Developer</span>.
  </span>,

  <span key={4}>
    As I approach graduation, my goal is to apply my skills in a professional environment,
    contribute to impactful projects, and continue growing in the tech industry.
  </span>,
]


export const About = () => {


  return (
    <section
      id="AboutMe"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-[80px]"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 bg-slate-800/80 backdrop-blur-md border border-slate-600 shadow-2xl rounded-2xl p-8 hover:scale-[1.05] transition-all duration-500"
        >
          <div className="flex flex-col gap-6 text-slate-100 leading-relaxed text-lg">
            {paragraphs.map((node, i) => (
              <motion.p
                key={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={i === 0 ? "text-xl font-semibold" : ""}
              >
                {node}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
