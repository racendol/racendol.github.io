"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./i18n";
import { useState } from "react";

export const FloatingLanguageSwitcher = () => {
  const { lang, toggleLang } = useLang();
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    toggleLang();
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label={lang === "en" ? "日本語" : "English"}
      >
        <span className="text-gray-200">{lang === "en" ? "EN" : "JP"}</span>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-14 bottom-0 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md whitespace-nowrap"
          >
            {lang === "en" ? "日本語" : "English"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};