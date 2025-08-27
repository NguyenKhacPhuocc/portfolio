"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any existing errors when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Thay thế các thông số này bằng thông tin thực từ EmailJS của bạn
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Gửi email sử dụng EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.subject,        // Đổi từ subject thành title
          message: formData.message,
          to_name: "Nguyễn Khắc Phước",
          reply_to: formData.email,
          date: new Date().toLocaleString('vi-VN') // Thêm ngày gửi
        },
        publicKey
      );

      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset trạng thái sau 3 giây
      setTimeout(() => setIsSent(false), 3000);
    } catch (err) {
      setError("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
      console.error("Email sending error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8 lg:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-slate-300 text-lg max-w-2xl text-center mb-16"
      >
        Let&#39;s connect! I&#39;m always open to discussing new opportunities and interesting projects.
      </motion.p>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get in Touch</h3>
            <p className="text-slate-300 mb-8">
              I&#39;m currently looking for internship opportunities as a Frontend or Backend Developer.
              If you have any questions or would like to discuss potential collaboration,
              feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-cyan-600 p-3 rounded-lg mr-4">
                <FiMail className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <a
                  href="mailto:nguyenkhaephuoc08122004@gmail.com"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  nguyenkhacphuoc08122004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-600 p-3 rounded-lg mr-4">
                <FiPhone className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone & Zalo</h4>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  0969916312
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FiMapPin className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-slate-300">Quận Nam Từ Liêm, Hà Nội</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            {/* <h4 className="text-white font-semibold mb-4">Follow me on</h4> */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/NguyenKhacPhuocc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors group"
              >
                <FiGithub className="text-white text-xl group-hover:text-cyan-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ph%C6%B0%E1%BB%9Bc-nguy%E1%BB%85n-a299b0324/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors group"
              >
                <FiLinkedin className="text-white text-xl group-hover:text-cyan-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-slate-800/50 rounded-xl p-8 shadow-lg border border-slate-700/50 relative"
        >
          {isSent && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg">
              Tin nhắn đã được gửi thành công! ✅
            </div>
          )}

          {error && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Đang gửi...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>


    </section>
  );
};