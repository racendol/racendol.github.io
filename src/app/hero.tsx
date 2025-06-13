import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Translate } from "./i18n";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Avatar/Logo (optional) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-indigo-500">
            {/* Replace with your image or icon */}
            <span className="text-2xl">👨‍💻</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-indigo-400">Racendol</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-3xl font-mono h-12 mb-6"
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1500,
              "Problem Solver",
              1500,
              "Open Source Enthusiast",
              1500,
              "Tech Lover",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-300"
          />
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
        >
          I build exceptional digital experiences with modern technologies.
          Currently focused on Next.js, React, and scalable backend solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          {/* Smooth scroll to work section on same page */}
          <Link 
            href="#work" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            scroll={false} // Disables default instant scroll
          >
            <Translate en="View My Work" ja="プロジェクトを見る" />
          </Link>

          {/* OR if you have a separate work page: */}
          {/* <Link
            href="/work" 
            className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-900/30 rounded-lg font-medium transition-all duration-300"
          >
            <Translate en="Full Portfolio" ja="作品一覧" />
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;