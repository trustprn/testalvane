"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
    horizontal?: boolean;
}

export function Parallax({ children, offset = 50, className = "", horizontal = false }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    const x = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <motion.div
            ref={ref}
            style={horizontal ? { x } : { y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
