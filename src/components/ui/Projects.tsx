"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Amazon Clone UI",
      description:
        "A responsive e-commerce homepage inspired by Amazon, built using HTML and CSS. Focused on layout design and styling.",
      button: "Explore Project",
      tags: ["HTML", "CSS", "Responsive Design"],
      src: "/image/Amazon clone.jpeg",
    },
    {
      title: "Java Calculator",
      description:
        "A simple calculator application built with Java, featuring arithmetic operations and a clean interface.",
      button: "Explore Project",
      tags: ["Java", "OOP", "Logic Building"],
      src: "/image/Java Project.jpeg",
    },
    {
      title: "Weather App",
      description:
        "A live weather dashboard built with Next.js, fetching real-time data from a weather API and displaying dynamic weather updates.",
      button: "Explore Project",
      tags: ["Next.js", "JavaScript", "API Integration"],
      src: "/image/weather_app.jpeg",
    },
    {
      title: "Event Booking App",
      description:
        "A dynamic event booking platform built with Next.js and Tailwind CSS. Users can browse events, book tickets, and view booking confirmations. Focused on responsive design and smooth user experience.",
      button: "Explore Project",
      tags: ["Next.js", "Tailwind", "JavaScript", "UI/UX"],
      src: "/image/event_booking.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Auto-scroll / looping
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slideData[current];

  return (
    <section id="projects" className="relative w-full py-20">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-white bg-clip-text transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 dark:hover:from-purple-400 dark:hover:to-purple-400 text-center"
        animate={{
          textShadow: [
            "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
            "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
            "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        My Projects
      </motion.h1>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr opacity-30dark:opacity-40"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-6xl mx-auto overflow-hidden px-6">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
          >
            {/* Image with glassmorphism overlay */}
            <div className="relative w-full h-96 md:h-[28rem] lg:h-[32rem]">
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-white/20 backdrop-blur-sm p-6 flex flex-col justify-end">
                {/* Title */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white dark:text-gray-900 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base text-gray-200 dark:text-gray-800 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.description}
                </motion.p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {slide.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/20 dark:bg-black/30 text-white dark:text-neutral-900 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  onClick={() => setModalOpen(true)}
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium w-max"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {slide.button}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slideData.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-white dark:bg-gray-900" : "bg-gray-400 dark:bg-gray-500"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-3xl bg-gray-900 dark:bg-gray-100 rounded-2xl overflow-hidden p-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              width={1000}
              height={600}
              className="object-cover rounded-lg"
              priority
            />
            <h2 className="text-2xl font-bold mt-4 text-white dark:text-gray-900">
              {slide.title}
            </h2>
            <p className="text-gray-200 dark:text-gray-800 mt-2">{slide.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {slide.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/20 dark:bg-black/30 text-white dark:text-gray-900 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
