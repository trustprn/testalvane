"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SlideReveal } from "@/components/animations/slide-reveal";

import Link from "next/link";
import { Locale } from "@/i18n-config";

interface ServiceCard {
    title: string;
    desc: string;
    price: string;
    features: string[];
}

interface ServicesPreviewProps {
    title: string;
    subtitle: string;
    cards: ServiceCard[];
    cta: string;
    lang: Locale;
}

export function ServicesPreview({ title, subtitle, cards, cta, lang }: ServicesPreviewProps) {
    return (
        <Section className="bg-secondary/5">
            <div className="text-center mb-16 space-y-4">
                <SlideReveal>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
                </SlideReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <SlideReveal key={index} delay={index * 0.1} direction="up" className="h-full">
                        <Card className="h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-background/50 backdrop-blur-sm group">
                            <CardHeader>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{card.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{card.desc}</CardDescription>
                            </CardHeader>
                            <CardContent className="grow">
                                <div className="text-3xl font-bold mb-6 text-primary">{card.price}</div>
                                <ul className="space-y-3">
                                    {card.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground group-hover:scale-105 transition-all" asChild>
                                    <Link href={`/${lang}/contact`}>
                                        {cta} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </SlideReveal>
                ))}
            </div>
        </Section>
    );
}
