/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiCode, FiServer } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IT Job Search",
      period: "20/07/2025 - 20/08/2025",
      image: "https://res.cloudinary.com/dlhxktrw3/image/upload/v1756300795/itjobsearch_l3g3uz.png",
      role: "Frontend & Backend",
      description: "A job search web application that allows users to search, apply for jobs, and manage CV.",
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "SWR", "next-intl", "Framer Motion", "Node.js", "Express.js", "Mongoose", "JWT", "bcryptjs", "Multer", "Cloudinary", "Joi"],
      features: [
        "Integrated i18n and authentication/authorization using JWT",
        "Recruit candidates and manage company jobs"
      ],
      demoUrl: "https://it-job-search-silk.vercel.app/en",
      githubUrls: [
        { label: "Frontend", url: "https://github.com/NguyenKhacPhuocc/project-ITJobSearch-fe" },
        { label: "Backend", url: "https://github.com/NguyenKhacPhuocc/project-ITJobSearch-be" }
      ],
    },
    {
      id: 2,
      title: "Tour Booking & Management System",
      period: "31/03/2025 - 08/07/2025",
      image: "https://res.cloudinary.com/dlhxktrw3/image/upload/v1756302437/travelf_borut2.png",
      role: "Backend",
      description: "A tour management system that allows admins to manage tours and customers to book tours online.",
      technologies: ["Node.js", "Express.js", "Mongoose", "RESTful API", "JWT", "Multer", "Cloudinary", "Nodemailer"],
      features: [
        "Managed tours, categories, orders, and contacts, decentralization admin",
        "Implemented auth & authorization, integrated payments (VNPay, ZaloPay)",
        "Developed scalable RESTful APIs"
      ],
      demoUrl: "https://project-travelf.onrender.com/",
      githubUrls: [
        { label: "", url: "https://github.com/NguyenKhacPhuocc/project-travelf" }
      ]
    },
    {
      id: 3,
      title: "MuseStream - Online Music Website",
      period: "21/01/2025 - 16/03/2025",
      image: "https://res.cloudinary.com/dlhxktrw3/image/upload/v1756300792/musestream_xcu3dr.png",
      role: "Frontend",
      description: "An online music streaming website with a user-friendly interface.",
      technologies: ["React", "NextJS", "TailwindCSS", "TypeScript", "AOS", "Framer Motion"],
      features: [
        "Online music streaming",
        "Search functionality for songs and artists"
      ],
      demoUrl: "https://muse-stream.vercel.app/",
      githubUrls: [
        { label: "", url: "https://github.com/NguyenKhacPhuocc/MuseStream" }
      ]
    }
  ];

  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 md:px-8 lg:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg pb-4"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-slate-300 text-lg max-w-2xl text-center mb-16"
      >
        Here are some of my recent projects that showcase my skills and experience.
      </motion.p>

      <div className="px-[50px] w-full  space-y-20">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center justify-between`}
    >
      {/* Project Image/Placeholder */}
      <div className="w-full lg:w-1/2 relative group">
        <div className={`rounded-xl overflow-hidden shadow-2xl`}>
          <div className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-br from-cyan-900/20 to-indigo-900/20 flex items-center justify-center">
            {/* Project number and placeholder */}
            <div className="text-center">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Image overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                  <div className="flex gap-2">
                    {project.githubUrls.map((github: any, i: number) => (
                      <a
                        key={i}
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        {github.label === "Frontend" ? <FiCode size={18} /> : <FiServer size={18} />}
                        {github.label} Github
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full lg:w-1/2">
        <div className="mb-2">
          <span className="text-sm text-cyan-400 ">{project.period}</span>
        </div>

        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.title}
          <div className="text-sm text-slate-400">Role: {project.role}</div>
        </motion.h3>

        <motion.p
          className="text-slate-300 mb-6 bg-slate-800/50 p-4 rounded-lg"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-lg font-semibold text-cyan-300 mb-2">Key Features:</h4>
          <ul className="text-slate-300 space-y-1">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {project.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-800 text-cyan-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            <FiExternalLink size={18} />
            Live Demo
          </a>

          <div className="flex gap-2">
            {project.githubUrls.map((github: any, i: number) => (
              <a
                key={i}
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                {github.label === "Frontend" ? <FiCode size={18} /> : <FiServer size={18} />}
                {github.label} Github
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};