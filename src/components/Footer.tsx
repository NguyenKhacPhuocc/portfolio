"use client"
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <>
      <div id="Footer" className="h-[80px] ">
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="dark:text-slate-300 text-slate-900">
            © {new Date().getFullYear()} Nguyễn Khắc Phước. All rights reserved.
          </p>
        </motion.div>
      </div>
    </>
  )
}