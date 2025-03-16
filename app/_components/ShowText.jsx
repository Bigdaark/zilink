"use client";
import { motion } from "framer-motion";

const sentence = "حامی تیم، گروه تخصصی رزرو هتل";

export default function AnimatedText() {
  return (
    <div className="flex justify-center items-center">
      <motion.h1
        className="text-xl md:text-4xl font-bold text-gray-300 leading-relaxed"
        dir="rtl"
      >
        {sentence.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            className="inline-block mx-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
