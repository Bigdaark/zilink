"use client";
import { motion } from "framer-motion";

const sentence = "حامی تیم، گروه تخصصی رزرو هتل";

export default function AnimatedText() {
  return (
    <div className="flex justify-center items-center">
      <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-300  word-spacing-[0.15em]" dir="rtl">
        {Array.from(sentence).map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.05, delay: index * 0.1 }}
            
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
