"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedBox = ({ children, className }) => {
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientAngle((prev) => (prev + 1) % 360);
    }, 50); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        background: `linear-gradient(${gradientAngle}deg, #351887, #50dfc0)`,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative w-full h-16 p-1 rounded-2xl"
    >
      <div
        className={`w-full h-full bg-black rounded-xl flex items-center justify-center text-white p-4  ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedBox;
