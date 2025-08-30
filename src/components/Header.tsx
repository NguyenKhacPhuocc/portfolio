"use client"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

export const Header = () => {
  const t = useTranslations('Header');
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  const sections = useMemo(() => [
    { id: "home", label: t("home") },
    { id: "about_me", label: t("about_me") },
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    { id: "education", label: t("education") },
    { id: "contact", label: t("contact") }
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hiển thị header khi scroll qua Hero section
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(currentScrollY > heroBottom - 150)
      }

      // Ẩn header khi scroll xuống, hiện khi scroll lên
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
      setLastScrollY(currentScrollY)

      // Xác định section đang active
      const scrollPosition = currentScrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, sections])

  return (
    <>
      <header className={`fixed top-0 w-full flex justify-center z-[999] transition-all duration-500 ease-out ${isVisible
        ? isScrolledDown
          ? "" // Ẩn khi scroll xuống
          : "translate-y-4 opacity-100"   // Hiện khi scroll lên
        : "-translate-y-full opacity-0"   // Ẩn khi ở Hero
        }`}>
        <div className="mx-auto w-[720px] rounded-[50px] overflow-hidden shadow-lg bg-gradient-to-r dark:from-blue-500/10 dark:to-cyan-500/10 from-blue-500 to-cyan-500">
          <nav className="flex py-3 justify-between items-center backdrop-blur-md bg-white/15 px-[50px] font-semibold ">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`hover:text-white transition-all duration-300 transform hover:scale-110 relative py-2 px-3 rounded-lg ${activeSection === section.id
                  ? "text-white bg-slate-500/50 scale-105 shadow-inner"
                  : "dark:text-cyan-100 dark:hover:bg-white/10 text-slate-900 hover:bg-white/10"
                  }`}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}