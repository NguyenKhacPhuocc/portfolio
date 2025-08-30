"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // Đồng bộ state darkMode với class hiện tại trên html
  useEffect(() => {
    setMounted(true);
    const isDark =
      document.documentElement.classList.contains("dark") ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setOverlay(true);
    setTimeout(() => {
      const html = document.documentElement;
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
      }
      setOverlay(false);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div className={`fade-overlay ${overlay ? "show" : ""}`} />

      {/* Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center
                   rounded-full shadow-lg transition-all duration-300
                   dark:bg-white bg-gray-800 hover:scale-110 hover:rotate-12
                   dark:text-yellow-500 text-blue-400"
        style={{ zIndex: 9999 }}
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 transition-opacity duration-500" />
        ) : (
          <MoonIcon className="h-6 w-6 transition-opacity duration-500" />
        )}
      </button>
    </>
  );
}
