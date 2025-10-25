"use client";

import { motion } from "motion/react";

export function HeroSectionOne() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden pt-0 mt-0">
      
      {/* Animated Grid Background */}
      <div className="absolute mt-0 pt-0 left-0 h-full w-full bg-[repeating-linear-gradient(0deg,#3b82f6, #3b82f6 1px, transparent 1px, transparent 30px),repeating-linear-gradient(90deg,#3b82f6, #3b82f6 1px, transparent 1px, transparent 30px)] opacity-10 animate-pulse-slow dark:opacity-5" />

      {/* Floating Tech Circles */}
      <div className="absolute top-10 left-1/4 h-28 w-28 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 animate-bounce-slow blur-xl" />
      <div className="absolute top-1/3 right-1/4 h-36 w-36 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-15 animate-bounce-slow blur-2xl" />
      <div className="absolute bottom-10 left-1/3 h-20 w-20 rounded-full bg-gradient-to-tr from-green-400 to-yellow-400 opacity-15 animate-bounce-slow blur-xl" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center md:flex-row md:justify-between md:text-left">
        
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 md:text-6xl lg:text-7xl">
            {"Crafting ".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="text-blue-500 dark:text-purple-400"> digital</span>{" "}
            {"experiences for web & mobile"}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 max-w-lg text-lg text-gray-700 dark:text-gray-300"
          >
            Full-Stack Developer | React, Next.js, Tailwind CSS | Transforming innovative ideas into interactive and modern web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-5"
          >
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:from-purple-600 dark:to-pink-500">
              View Projects
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-black transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 md:w-96 lg:w-[400px]">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-neutral-400 via-cyan-500 to-gray-400 blur-2xl opacity-30 dark:opacity-20" />
            <img
              src="/image/pic1.jpg"
              alt="Tech mockup"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
