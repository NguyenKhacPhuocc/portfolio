"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("Hero")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hiển thị header khi scroll qua Hero section
      const heroSection = document.getElementById("Hero")
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
      const sections = ["Home", "About Me", "Skills", "Projects", "Education", "Contact"]
      const scrollPosition = currentScrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.replace(" ", ""))
        if (element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header className={`fixed top-0 w-full flex justify-center z-[999] transition-all duration-500 ease-out ${isVisible
        ? isScrolledDown
          ? "" // Ẩn khi scroll xuống
          : "translate-y-4 opacity-100"   // Hiện khi scroll lên
        : "-translate-y-full opacity-0"   // Ẩn khi ở Hero
        }`}>
        <div className="mx-auto w-[720px] rounded-[50px] overflow-hidden shadow-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <nav className="flex py-3 justify-between items-center backdrop-blur-md bg-white/15 px-[50px] font-semibold ">
            {["Home", "About Me", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.replace(" ", "")}`}
                className={`hover:text-white transition-all duration-300 transform hover:scale-110 relative py-2 px-3 rounded-lg ${activeSection === item
                  ? "text-white bg-blue-500/30 scale-105 shadow-inner"
                  : "text-cyan-100 hover:bg-white/10"
                  }`}
              >
                {item}

              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}