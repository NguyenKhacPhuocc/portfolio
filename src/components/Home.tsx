"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const HomePage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Nguyễn Khắc Phước";
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Hiệu ứng gõ chữ lặp lại liên tục
    const startTypingEffect = () => {
      let index = 0;
      let isDeleting = false;
      let currentText = "";
      let typingSpeed = 100;

      const type = () => {
        if (isDeleting) {
          // Xóa chữ
          currentText = fullText.substring(0, currentText.length - 1);
        } else {
          // Thêm chữ
          currentText = fullText.substring(0, index + 1);
          index++;
        }

        setDisplayText(currentText);

        if (!isDeleting && currentText === fullText) {
          // Dừng lại khi hoàn thành và chuyển sang xóa
          typingSpeed = 1000; // Dừng 1 giây trước khi xóa
          isDeleting = true;
        } else if (isDeleting && currentText === "") {
          // Bắt đầu lại từ đầu
          isDeleting = false;
          index = 0;
          typingSpeed = 500; // Dừng 0.5 giây trước khi gõ lại
        } else {
          typingSpeed = isDeleting ? 50 : 100; // Tốc độ xóa nhanh hơn
        }

        typingIntervalRef.current = setTimeout(type, typingSpeed);
      };

      typingIntervalRef.current = setTimeout(type, 500);
    };

    startTypingEffect();

    // Cleanup function
    return () => {
      if (typingIntervalRef.current) {
        clearTimeout(typingIntervalRef.current);
      }
    };
  }, [fullText]);

  // Animation variants cho avatar
  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  // Animation variants cho menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut" as const
      }
    })
  };

  return (
    <>
      <div
        id="Hero"
        className="p-[80px] h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed"
      >
        <div className="h-full container flex mx-auto rounded-[25px] p-[20px] gap-[20px] text-white">
          <div className="flex-1 flex flex-col gap-[20px] justify-center items-center">
            <motion.div
              className="w-[200px] h-[200px] overflow-hidden rounded-full border-4 border-indigo-300 shadow-lg"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 800 }}
            >
              <img
                src="/avatar.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-[50px] font-bold text-indigo-200 h-[60px] overflow-hidden text-wrap leading-[55px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
            <motion.div
              animate="visible"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[50px] font-bold text-indigo-200 h-[60px] overflow-hidden">
              I am a <span className="">Developer</span>
            </motion.div>
            <motion.div
              animate="visible"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-[50px] font-bold text-indigo-200 h-[60px] overflow-hidden">
              WELCOME HERE!!!
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col text-center text-[70px] font-bold text-indigo-200 justify-center">
            {["Home", "About Me", "Skills", "Projects", "Education", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.replace(" ", "")}`}
                  className="hover:text-indigo-500 transition-colors duration-300 block"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}