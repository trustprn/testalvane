"use client";

import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SlideReveal } from "@/components/animations/slide-reveal";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

interface TestimonialsSectionProps {
    title: string;
    subtitle: string;
    items: Testimonial[];
}

export function TestimonialsSection({ title, subtitle, items }: TestimonialsSectionProps) {
    return (
        <Section className="bg-secondary/5 relative overflow-hidden flex justify-center items-center">
             {/* Background decoration */}
             <div className="absolute top-0 right-0 p-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="text-center mb-16 space-y-4 relative z-10">
                <SlideReveal>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
                </SlideReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {items.map((item, index) => (
                    <SlideReveal key={index} delay={index * 0.1} direction="up" className="h-full">
                        <div className="h-full p-8 rounded-3xl bg-background/50 backdrop-blur-md border border-white/5 relative group hover:border-primary/20 transition-colors duration-500">
                            {/* Gradient Orb */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors duration-500" />
                            
                            <Quote className="h-10 w-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors duration-500" />
                            
                            <blockquote className="text-lg text-foreground/90 leading-relaxed mb-8 relative z-10">
                                "{item.quote}"
                            </blockquote>
                            
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-lg font-bold text-primary">{item.author[0]}</span>
                                </div>
                                <div>
                                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">{item.author}</div>
                                    <div className="text-sm text-muted-foreground">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    </SlideReveal>
                ))}
            </div>
        </Section>
    );
}
