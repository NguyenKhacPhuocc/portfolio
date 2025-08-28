/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin, FiBook } from "react-icons/fi";

export const Education = () => {
  const educationData = [
    {
      id: 1,
      period: "10/2022 - Present",
      institution: "UNIVERSITY OF TRANSPORT TECHNOLOGY (UTT)",
      degree: "Major in Information Technology",
      gpa: "GPA: 3.5/4",
      achievements: ["Scholarship for Excellent Academic Performance (2025)"],
      location: "54 Triều Khúc, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam",
      type: "university"
    }
  ];

  const coursesData = [
    {
      id: 1,
      period: "6/2024 - 9/2024",
      institution: "28 Tech Education Center",
      course: "Data Structures and Algorithms",
      description: "An in-depth course on data structures and algorithms",
      skills: [
        "Practice and improve algorithmic thinking",
        "Sorting algorithms",
        "Linked lists & binary trees",
        "Data structures, stacks, queues",
        "Graph theory"
      ]
    },
    {
      id: 2,
      period: "8/2024 - 1/2025",
      institution: "28 Tech Education Center",
      course: "Frontend Development",
      description: "A course on building modern web interfaces with cutting-edge technologies",
      skills: [
        "HTML, CSS, JavaScript",
        "React.js with Hooks",
        "Next.js framework and SSR",
        "TypeScript in real-world projects",
        "Responsive Web Design",
      ]
    },
    {
      id: 3,
      period: "2/2025 - 8/2025",
      institution: "28 Tech Education Center",
      course: "Backend Development with Node.js",
      description: "A course on building server-side systems with Node.js",
      skills: [
        "Node.js runtime environment",
        "Express.js framework",
        "MongoDB and Mongoose ODM",
        "RESTful API design",
        "Authentication and authorization with JWT",
        "Web application security",
        "Basic deployment",
      ]
    }
  ];

  return (
    <section
      id="Education"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 lg:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-slate-300 text-lg max-w-2xl text-center mb-16"
      >
        My academic journey and professional courses that have shaped my skills as a developer.
      </motion.p>

      {/* Formal Education */}
      <div className="w-full max-w-4xl mx-auto mb-20">
        <h3 className="text-[30px] font-bold text-cyan-400 mb-8 text-center">Formal Education</h3>
        {educationData.map((education, index) => (
          <EducationItem key={education.id} education={education} index={index} />
        ))}
      </div>

      {/* Professional Courses */}
      <motion.div
        className="w-full "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-[30px] font-bold text-cyan-400 mb-8 text-center">Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const EducationItem = ({ education, index }: { education: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      className="relative mb-12"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-10 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 -z-10"></div>

      <div className="flex">
        {/* Timeline dot */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-6 relative">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-slate-800/50 rounded-xl p-6 flex-1 shadow-lg border border-slate-700/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <span className="text-cyan-400 font-medium flex items-center mb-2 md:mb-0">
              <FiCalendar className="mr-2" />
              {education.period}
            </span>
            <span className="text-green-400 font-medium bg-green-900/30 px-3 py-1 rounded-full text-sm">
              {education.gpa}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{education.institution}</h3>

          <p className="text-slate-300 mb-4 flex items-center">
            <FiMapPin className="mr-2 text-cyan-400" />
            {education.location}
          </p>

          <p className="text-lg text-cyan-300 font-medium mb-4">{education.degree}</p>

          {/* Achievements */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <FiAward className="mr-2 text-yellow-400" />
              Achievements
            </h4>
            <ul className="space-y-2">
              {education.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start text-slate-300">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CourseCard = ({ course, index }: { course: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-800/50 rounded-xl p-6 shadow-lg border border-slate-700/50 h-full flex flex-col"
    >
      <div className="mb-4">
        <span className="text-cyan-400 text-sm font-medium flex items-center">
          <FiCalendar className="mr-2" />
          {course.period}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{course.institution}</h3>

      <h4 className="text-xl font-bold text-cyan-300 mb-3">{course.course}</h4>

      <p className="text-slate-400 mb-4">{course.description}</p>

      <div className="mt-auto">
        <h5 className="text-sm font-semibold text-white mb-2 flex items-center">
          <FiBook className="mr-2 text-green-400" />
          Skills Acquired:
        </h5>
        <ul className="space-y-1">
          {course.skills.map((skill: string, i: number) => (
            <li key={i} className="text-slate-300 text-sm flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};