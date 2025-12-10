"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { variants, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SlideRevealProps {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    className?: string;
    delay?: number;
    duration?: number;
    fullWidth?: boolean;
}

export function SlideReveal({
    children,
    direction = "up",
    className,
    delay = 0,
    duration = 0.5,
    fullWidth = false
}: SlideRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariant = () => {
        switch (direction) {
            case "left": return variants.slideInLeft;
            case "right": return variants.slideInRight;
            case "down": return variants.fadeDown;
            case "up": default: return variants.fadeUp;
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={getVariant()}
            transition={{ ...transitions.smooth, delay, duration }}
            className={cn(className, fullWidth ? "w-full" : "")}
        >
            {children}
        </motion.div>
    );
}
