"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SlideReveal } from "@/components/animations/slide-reveal";

interface Project {
    slug: string;
    title: string;
    category: string;
    image: string;
}

interface PortfolioSectionProps {
    title: string;
    subtitle: string;
    viewAll: string;
    projects: Project[];
    lang: string;
}

export function PortfolioSection({ title, subtitle, viewAll, projects, lang }: PortfolioSectionProps) {
    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="space-y-4">
                    <SlideReveal>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
                        <p className="text-muted-foreground text-lg max-w-xl">{subtitle}</p>
                    </SlideReveal>
                </div>
                <SlideReveal direction="left">
                    <Link className="group inline-flex items-center" href={`/${lang}/portfolio`}>
                        {viewAll} <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </SlideReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <SlideReveal key={index} delay={index * 0.1}>
                        <Link href={`/${lang}/portfolio/${project.slug}`}>
                            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-muted cursor-pointer">
                                {/* Placeholder gradient since we don't have real images yet */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-80 transition-transform duration-700 group-hover:scale-105`} />
                                
                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-20" />
                                
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10">
                                            {project.category}
                                        </span>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                                            <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                                <ArrowUpRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SlideReveal>
                ))}
            </div>
        </Section>
    );
}

function getGradient(index: number) {
    const gradients = [
        "from-purple-500 to-blue-600",
        "from-blue-400 to-cyan-500",
        "from-emerald-500 to-teal-600",
        "from-orange-500 to-red-600"
    ];
    return gradients[index % gradients.length];
}
