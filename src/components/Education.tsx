/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiAward, FiCalendar, FiMapPin, FiBook } from "react-icons/fi";

export const Education = () => {
  const t = useTranslations('Education');
  const educationData = [
    {
      id: 1,
      period: "10/2022 - 2026",
      institution: "UNIVERSITY OF TRANSPORT TECHNOLOGY (UTT)",
      degree: t('educationData.degree'),
      gpa: "GPA: 3.5/4",
      achievements: [t('educationData.achievements')],
      location: "54 Triều Khúc, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam",
    }
  ];

  const coursesData = [
    {
      id: 1,
      period: "06/2024 - 09/2024",
      institution: t('courses_1.institution'),
      course: t('courses_1.course'),
      description: t('courses_1.description'),
      skills: [
        t('courses_1.skills.skill_1'),
        t('courses_1.skills.skill_2'),
        t('courses_1.skills.skill_3'),
        t('courses_1.skills.skill_4'),
        t('courses_1.skills.skill_5'),
      ]
    },
    {
      id: 2,
      period: "08/2024 - 01/2025",
      institution: t('courses_2.institution'),
      course: t('courses_2.course'),
      description: t('courses_2.description'),
      skills: [
        t('courses_2.skills.skill_1'),
        t('courses_2.skills.skill_2'),
        t('courses_2.skills.skill_3'),
        t('courses_2.skills.skill_4'),
        t('courses_2.skills.skill_5'),
      ]
    },
    {
      id: 3,
      period: "02/2025 - 08/2025",
      institution: t('courses_3.institution'),
      course: t('courses_3.course'),
      description: t('courses_3.description'),
      skills: [
        t('courses_3.skills.skill_1'),
        t('courses_3.skills.skill_2'),
        t('courses_3.skills.skill_3'),
        t('courses_3.skills.skill_4'),
        t('courses_3.skills.skill_5'),
        t('courses_3.skills.skill_6'),
        t('courses_3.skills.skill_7'),
      ]
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-blue-300 via-sky-100 to-blue-300 py-20 px-4 md:px-8 lg:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 from-slate-700 via-gray-800 to-slate-900 bg-clip-text text-transparent drop-shadow-lg mb-4"
      >
        {t('title')}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="dark:text-slate-300 text-slate-900 text-lg max-w-2xl text-center mb-16"
      >
        {t('description')}
      </motion.p>

      {/* Formal Education */}
      <div className="w-full max-w-4xl mx-auto mb-20">
        <h3 className="text-[30px] font-bold dark:text-cyan-400 text-slate-700 mb-8 text-center">{t('formal_education')}</h3>
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
        <h3 className="text-[30px] font-bold dark:text-cyan-400 text-slate-700 mb-8 text-center">{t('courses')}</h3>
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
  const t = useTranslations('Education');
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
            <span className="dark:text-cyan-300 text-cyan-400 font-medium flex items-center mb-2 md:mb-0">
              <FiCalendar className="mr-2" />
              {education.period}
            </span>
            <span className="text-green-400 font-medium bg-green-900/30 px-3 py-1 rounded-full text-sm">
              {education.gpa}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{education.institution}</h3>

          <p className="dark:text-slate-300 text-slate-200 mb-4 flex items-center">
            <FiMapPin className="mr-2 text-cyan-400" />
            {education.location}
          </p>

          <p className="text-lg dark:text-cyan-300 text-cyan-400  font-medium mb-4">{education.degree}</p>

          {/* Achievements */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
              <FiAward className="mr-2 text-yellow-400" />
              {t('achievements')}
            </h4>
            <ul className="space-y-2">
              {education.achievements.map((achievement: string, i: number) => (
                <li key={i} className="flex items-start dark:text-slate-300 text-slate-200">
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
  const t = useTranslations('Education');
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

      <p className="dark:text-slate-400 text-slate-200 mb-4">{course.description}</p>

      <div className="mt-auto">
        <h5 className="text-sm font-semibold text-white mb-2 flex items-center">
          <FiBook className="mr-2 text-green-400" />
          {t('skillsAcquired')}
        </h5>
        <ul className="space-y-1">
          {course.skills.map((skill: string, i: number) => (
            <li key={i} className="dark:text-slate-300 text-slate-100 text-sm flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};