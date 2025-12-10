"use client";

import { Section } from "@/components/ui/section";
import { SlideReveal } from "@/components/animations/slide-reveal";
import { 
    BarChart3, 
    Palette, 
    Zap, 
    CheckCircle2 
} from "lucide-react";

interface WhyChooseUsProps {
    title: string;
    subtitle: string;
    items: {
        title: string;
        description: string;
    }[];
}

const icons = [BarChart3, Palette, Zap, CheckCircle2];

export function WhyChooseUs({ title, subtitle, items }: WhyChooseUsProps) {
    return (
        <Section className="bg-muted/30">
            <div className="flex flex-col items-center text-center mb-16">
                <SlideReveal>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
                </SlideReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => {
                    const Icon = icons[index % icons.length];
                    return (
                        <SlideReveal key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-background border border-border/50 shadow-xs hover:shadow-md transition-shadow">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </SlideReveal>
                    );
                })}
            </div>
        </Section>
    );
}
