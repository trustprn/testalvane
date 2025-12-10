"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    slug: string;
    title: string;
    category: string;
    image: string;
}

interface PortfolioGridProps {
    title: string;
    subtitle: string;
    projects: Project[];
    lang: string;
}

export function PortfolioGrid({ title, subtitle, projects, lang }: PortfolioGridProps) {
    const [filter, setFilter] = useState("All");

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter((p) => p.category === filter);

    return (
        <section className="container px-6 md:px-12 lg:px-24 py-12 md:py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="space-y-4 max-w-2xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        {subtitle}
                    </motion.p>
                </div>
                
                {/* Filter Tabs */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                filter === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>

            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href={`/${lang}/portfolio/${project.slug}`} className="group block">
                                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted mb-4">
                                    {/* Placeholder gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-br from-primary/20 to-blue-500/20 transition-transform duration-500 group-hover:scale-105`} />
                                    
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                                    
                                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-sm">
                                        <ArrowUpRight className="h-5 w-5 text-foreground" />
                                    </div>
                                </div>
                                
                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
