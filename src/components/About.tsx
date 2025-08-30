"use client"
import { motion, Variants } from "framer-motion"
import { useTranslations } from "next-intl"
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

export const About = () => {
  const t = useTranslations('About');
  const paragraphs: JSX.Element[] = [
    <span key={1}>{t('hello')}</span>,

    <span key={2}>
      {t('des_1')}
      <span className="font-bold text-cyan-400">{t('react')} </span>,
      <span className="font-bold text-blue-400">{t('nextjs')}</span>, {t('and')}
      <span className="font-bold text-green-400">{t('nodejs')}</span>, {t('des_2')}
    </span>,

    <span key={3}>
      {t('des_3')}
    </span>,

    <span key={4}>
      {t('des_4')}
    </span>,
  ]

  return (
    <section
      id="about_me"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-blue-300 via-sky-100 to-blue-300 p-[80px]"
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
          <h2 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 from-slate-700 via-gray-800 to-slate-900 bg-clip-text text-transparent drop-shadow-lg">
            {t('about_me')}
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
