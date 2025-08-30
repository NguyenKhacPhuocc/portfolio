/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation"
import { useRef, useState, useTransition, useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import { usePathname, useRouter } from '@/i18n/navigation';

const locales = [
  { code: "vi", label: "Tiếng Việt", flag: "VN" },
  { code: "en", label: "English", flag: "US" },
  { code: "jp", label: "日本語", flag: "JP" },
]

export const LocaleSwitch = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const localeDropdownRef = useRef<HTMLDivElement>(null)
  const [showLocaleMenu, setShowLocaleMenu] = useState(false)
  const [isPending, startTransition] = useTransition()
  const currentLocale = params.locale as string

  const handleLocaleChange = (nextLocale: string) => {
    const hash = window.location.hash;
    console.log(pathname);
    console.log(hash);
    startTransition(() => {
      // Kết hợp pathname và hash
      const fullPath = pathname + hash;

      router.replace(
        fullPath as any,
        { locale: nextLocale }
      );
    });
    setShowLocaleMenu(false);
  };

  // click outside -> đóng menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        localeDropdownRef.current &&
        !localeDropdownRef.current.contains(e.target as Node)
      ) {
        setShowLocaleMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={localeDropdownRef}>
      <button
        className="fixed top-[20px] right-[20px] flex justify-center items-center bg-slate-500 text-xs py-1.5 px-2 rounded-full shadow-sm transition-all duration-200 ease-in-out lg:w-[100px] w-[40px] hover:bg-slate-300 z-[999] hover:cursor-pointer text-white hover:text-slate-800"
        onClick={() => setShowLocaleMenu(!showLocaleMenu)}
        disabled={isPending}
        aria-label="Language selector"
        aria-haspopup="true"
        aria-expanded={showLocaleMenu}
      >
        <span className="flex gap-1.5 items-center">
          <ReactCountryFlag
            countryCode={
              locales.find((l) => l.code === currentLocale)?.flag || "US"
            }
            svg
            className="w-5 h-5"
            aria-hidden="true"
            style={{ width: "18px", height: "18px" }}
          />
          <span className="truncate lg:block hidden">
            {locales.find((l) => l.code === currentLocale)?.label || "English"}
          </span>
        </span>
      </button>

      {/* Dropdown menu */}
      <div
        className={`fixed top-[50px] right-[20px] mt-1 w-[120px] bg-slate-200 border border-gray-100 rounded-md shadow-lg  text-xs overflow-hidden transition-all duration-200 ease-out z-[9999] ${showLocaleMenu
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-1 pointer-events-none"
          }`}
        role="menu"
      >
        {locales.map((locale) => (
          <button
            key={locale.code}
            onClick={() => handleLocaleChange(locale.code)}
            className="flex gap-1.5 items-center w-full text-left px-2.5 py-2 hover:bg-slate-500 focus:bg-gray-100 hover:cursor-pointer hover:text-slate-100"
            role="menuitem"
          >
            <ReactCountryFlag
              countryCode={locale.flag}
              svg
              className="w-4.5 h-4.5"
              aria-hidden="true"
            />
            <span className="truncate">{locale.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
