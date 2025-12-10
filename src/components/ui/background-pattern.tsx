"use client";

import { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BackgroundPatternProps {
  className?: string;
}

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  const id = useId().replace(/:/g, "");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={id}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      
      {/* Scanning beam effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
          y: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle pulse */}
      <motion.div
        className="absolute inset-0 bg-primary/5"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
