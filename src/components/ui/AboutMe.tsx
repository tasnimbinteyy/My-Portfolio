"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full py-32 md:py-40 overflow-hidden"
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-10 left-10 h-36 w-36 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 animate-bounce-slow blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-400 opacity-20 animate-bounce-slow blur-xl pointer-events-none"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-20 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 dark:hover:from-purple-400 dark:hover:to-purple-400"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
                "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
                "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            About Me
          </motion.h2>

          <div className="flex justify-center items-center mt-4 relative z-10 h-10 text-lg">
            <Typewriter
              textStyle={{
                fontFamily: "inherit",
                color: "#0ABAB5",
                fontWeight: 500,
                textAlign: "center",
              }}
              startDelay={200}
              cursorColor="#fff"
              multiText={[
                "I build responsive, modern web apps that turn ideas into interactive experiences.",
              ]}
              typeSpeed={50}
              deleteSpeed={30}
              loop={true}
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-8 md:col-span-7 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Spotlight behind left column */}
            <motion.div
              className="absolute inset-0 left-0 w-full md:w-3/4 bg-cyan-400/20 rounded-2xl blur-3xl pointer-events-none"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>

            {/* Box 1: My Journey */}
            <div className="relative bg-[#1f1f1f] border border-cyan-400 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/60 transition-all duration-500 hover:border-cyan-500 animate-glow hover:scale-105 z-10">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">My Journey</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Passionate about web development, building responsive and modern applications with Next.js and React.
              </p>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                I focus on clean code, problem-solving, and crafting engaging user experiences.
              </p>
            </div>

            {/* Box 2: Stats */}
            <div className="flex gap-6 relative z-10 mt-4">
              <div className="flex-1 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-purple-400 rounded-2xl p-4 shadow-md hover:shadow-purple-500/60 transition-all duration-500 text-center animate-glow hover:border-purple-500 hover:scale-105">
                <p className="text-3xl font-bold text-purple-400">5+</p>
                <p className="mt-1 text-gray-400 text-sm md:text-base">Projects</p>
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-teal-400 rounded-2xl p-4 shadow-md hover:shadow-teal-500/60 transition-all duration-500 text-center animate-glow hover:border-teal-500 hover:scale-105">
                <p className="text-2xl font-bold text-teal-400">1+</p>
                <p className="mt-1 text-gray-400 text-sm md:text-base">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Picture */}
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

export default AboutMe;
