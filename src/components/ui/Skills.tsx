"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 🌟 Skills list with proficiency
const skills = [
  { title: "HTML & CSS", description: "I can create responsive and clean web pages.", image: "/image/html&css.png", level: 90 },
  { title: "JavaScript", description: "I build dynamic and interactive web features.", image: "/image/Javascript.png", level: 85 },
  { title: "Next.js", description: "I use fast and modern React framework.", image: "/image/Next_JS.jpeg", level: 80 },
  { title: "Python", description: "I handle scripting, automation, and backend logic.", image: "/image/Python1.jpg", level: 75 },
  { title: "C++", description: "I solve problems and apply algorithmic thinking.", image: "/image/cpp.png", level: 70 },
  { title: "SQL", description: "I work with databases and write optimized queries.", image: "/image/SQL Server.jpeg", level: 75 },
  { title: "Machine Learning", description: "I create smart and data-driven AI systems.", image: "/images/ml.png", level: 60 },
  { title: "Backend Development", description: "I build powerful server-side applications.", image: "/images/backend.png", level: 65 },
  { title: "Problem Solving", description: "I practice competitive programming and logical thinking.", image: "/images/problem-solving.png", level: 80 },
];

// 🌌 Particle/blob generator
const createParticles = (count) => {
  const colors = ["rgba(255,255,255,0.08)", "rgba(0,0,0,0.08)"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

// Fade-in variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function StickyScrollRevealDemo() {
  const [layers] = useState([createParticles(8), createParticles(12), createParticles(15)]);

  return (
    <section
      id="Skills"
      className="relative w-full py-20 px-6 text-gray-900 dark:text-white overflow-hidden transition-colors duration-500"
    >
      {/* Dripping Fluid Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0,150,255,0.08), transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(120px)",
          width: "400px",
          height: "400px",
          top: "20%",
          left: "30%",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: [1, 1.4, 1],
          y: [0, 20, 0],
          x: [0, 15, -15, 0],
          borderRadius: ["50% 50% 50% 50%", "60% 40% 70% 30%", "50% 50% 50% 50%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      {/* Lamp/Glow background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 200, 0.15), transparent 60%)`,
          filter: "blur(100px)",
          willChange: "transform, opacity",
        }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.015, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at 30% 70%, rgba(255, 180, 150, 0.12), transparent 70%)`,
          filter: "blur(80px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Background blur */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Floating blobs */}
      {layers.map((particles, layerIndex) =>
        particles.map((p) => (
          <motion.div
            key={`${layerIndex}-${p.id}`}
            className="absolute rounded-full"
            style={{
              width: `${p.size * (1 + layerIndex * 0.5)}px`,
              height: `${p.size * (1 + layerIndex * 0.5)}px`,
              top: `${p.y}%`,
              left: `${p.x}%`,
              background: p.color,
              filter: "blur(3px)",
              willChange: "transform, opacity",
            }}
            animate={{
              y: [0, -10 - layerIndex * 3, 0],
              x: [0, 3 + layerIndex * 1.5, -3 - layerIndex * 1.5, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))
      )}

      {/* Header */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center mb-12 z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 dark:hover:from-purple-400 dark:hover:to-purple-400"
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
              "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
              "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          My Skills
        </motion.h1>
        <p className="text-gray-700 dark:text-gray-200 text-lg transition-all duration-300 hover:text-blue-300">
          Technologies I use to build modern and interactive solutions ✨
        </p>
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="relative max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer w-full"
          >
            {/* Card background */}
            <div className="bg-gradient-to-b from-black/30 to-gray-800/30 dark:from-black/50 dark:to-gray-700/50 backdrop-blur-xl w-full h-full rounded-2xl transition-all duration-300 hover:from-gray-900/40 hover:to-gray-600/40">
              {/* Card Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-60">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/20">
                {/* Title with gradient animation */}
                <motion.h2
                  className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                    transition: { repeat: Infinity, duration: 3, ease: "linear" },
                  }}
                >
                  {skill.title}
                </motion.h2>

                {/* Description with gradient animation */}
                <motion.p
                  className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                    transition: { repeat: Infinity, duration: 4, ease: "linear" },
                  }}
                >
                  {skill.description}
                </motion.p>

                {/* Gradient Progress Bar */}
                <div className="mt-4 h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-[length:200%_100%]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ backgroundSize: "200% 100%" }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 0%"],
                      transition: { repeat: Infinity, duration: 2, ease: "linear" },
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
