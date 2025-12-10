"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { variants } from "@/lib/motion";

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function StaggerContainer({ children, className = "", delay = 0 }: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants.staggerContainer}
            className={className}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem = motion.create(motion.div);
