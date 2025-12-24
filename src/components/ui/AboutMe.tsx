"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

const About_Me = () => {
  return (
    <section id="about" className="py-20">
      <div className="px-6 lg:px-20 mb-[80px]">
        {/* Section Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 mt-25"
        >
          About Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto text-center max-w-[800px] mb-[50px] text-gray-600 dark:text-gray-300"
        >
          Learn more about my background, experiences, and the passion that drives me to grow as a developer.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-[500px] space-y-5"
          >
            <h2 className="text-2xl font-bold dark:text-blue-400 text-blue-700">My Journey</h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              With over 5 years of experience in web development, I&apos;ve had the privilege of working with startups and established companies to create digital solutions that make a difference.
            </p>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. My approach combines technical expertise with creative problem-solving.
            </p>

            {/* Stats */}
            <div className="flex gap-6 mt-6">
              <div className="dark:bg-[#0a0a0a] bg-[#f9f8fa] border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center flex-1">
                <h3 className="text-3xl font-bold dark:text-blue-400 text-blue-700">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="dark:bg-[#0a0a0a] bg-[#f9f8fa] border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center flex-1">
                <h3 className="text-3xl font-bold dark:text-blue-400 text-blue-700">1+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
            </div>

            {/* Coding Workspace */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold dark:text-blue-400 text-blue-700 mb-4">Coding Workspace</h3>
              <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                My development environment is optimized for productivity with modern tools and technologies that help me deliver high-quality code efficiently.
              </p>
              <ul className="list-inside space-y-1 dark:text-gray-300 text-gray-700">
                <li>🛠 VS Code with essential extensions (Prettier, ESLint, Auto Rename Tag)</li>
                <li>🔧 Git & GitHub for version control and collaboration</li>
                <li>🎨 Figma for UI/UX design and prototyping</li>
                <li>📱 Chrome DevTools & Responsive Design Mode for testing</li>
                <li>📦 npm/yarn for dependency management</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="md:col-span-5 flex items-center justify-center relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Spotlight behind right column */}
            <motion.div
              className="absolute inset-0 right-0 w-full md:w-3/4 bg-purple-400/20 rounded-2xl blur-3xl pointer-events-none"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>

            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-500 relative z-10">
              <img
                src="/image/pic2.jpg"
                alt="My Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About_Me;
