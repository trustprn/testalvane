"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    pauseOnHover?: boolean;
    className?: string;
}

export function Marquee({
    children,
    direction = "left",
    speed = 50,
    pauseOnHover = true,
    className,
}: MarqueeProps) {
    return (
        <div className={cn("group flex w-full overflow-hidden p-2", className)}>
            <motion.div
                className="flex min-w-full shrink-0 items-center justify-around gap-4"
                animate={{
                    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                style={{
                    width: "max-content", // Ensure container fits content for proper loop
                }}
            >
                {children}
                {children}
            </motion.div>
            <motion.div
                aria-hidden="true"
                className="flex min-w-full shrink-0 items-center justify-around gap-4 ml-4"
                animate={{
                    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                style={{
                    width: "max-content",
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
