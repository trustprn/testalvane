"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Code, CheckCircle, Smartphone, Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SlideReveal } from "@/components/animations/slide-reveal";

interface ProjectDetailProps {
    project: {
        title: string;
        category: string;
        image: string;
        client: string;
        timeline: string;
        description: string;
        challenge: string;
        solution: string;
        technologies: string[];
        result: string;
    };
    backLabel: string;
    lang: string;
}

export function ProjectDetailView({ project, backLabel, lang }: ProjectDetailProps) {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden bg-muted">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background z-10" />
                {/* Placeholder Image/Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-blue-500/10 to-transparent" />
                
                <div className="container relative z-20 h-full flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-24">
                    <Link href={`/${lang}/portfolio`} className="mb-8 inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {backLabel}
                    </Link>
                    
                    <SlideReveal>
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 rounded-full text-primary border border-primary/20">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
                    </SlideReveal>
                </div>
            </div>

            <Section className="pt-0!">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <SlideReveal delay={0.2} direction="right">
                            <div className="rounded-2xl border bg-card p-6 space-y-6">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                                        <User className="mr-2 h-4 w-4" /> Client
                                    </h3>
                                    <p className="font-semibold">{project.client}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                                        <Calendar className="mr-2 h-4 w-4" /> Timeline
                                    </h3>
                                    <p className="font-semibold">{project.timeline}</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                                        <Code className="mr-2 h-4 w-4" /> Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-secondary text-xs rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Button className="w-full">
                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </SlideReveal>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <SlideReveal delay={0.3}>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center">
                                    <Smartphone className="mr-3 h-6 w-6 text-primary" /> The Challenge
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.challenge}
                                </p>
                            </div>
                        </SlideReveal>

                        <SlideReveal delay={0.4}>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center">
                                    <Globe className="mr-3 h-6 w-6 text-blue-500" /> The Solution
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {project.solution}
                                </p>
                            </div>
                        </SlideReveal>

                        <SlideReveal delay={0.5}>
                            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                <h2 className="text-2xl font-bold mb-4 flex items-center text-primary">
                                    <CheckCircle className="mr-3 h-6 w-6" /> The Result
                                </h2>
                                <p className="text-lg font-medium">
                                    {project.result}
                                </p>
                            </div>
                        </SlideReveal>
                    </div>
                </div>
            </Section>
        </div>
    );
}
