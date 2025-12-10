import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { Section } from "@/components/ui/section";
import { Parallax } from "@/components/animations/parallax";
import { TextReveal } from "@/components/animations/text-reveal";
import { SlideReveal } from "@/components/animations/slide-reveal";
import { Marquee } from "@/components/animations/marquee";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { variants } from "@/lib/motion";
import { ArrowRight, Code, BarChart, Rocket } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import { TechIcons } from "@/components/ui/tech-icons";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import { ServicesPreview } from "@/components/ui/services-preview";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { WhyChooseUs } from "@/components/ui/why-choose-us";

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

export default async function Home({ params }: PageProps) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    const isId = lang === 'id';

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <Section className="min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
                <BackgroundPattern className="opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

                {/* Parallax Background Elements */}
                <Parallax offset={50} className="absolute top-20 left-10 opacity-20 pointer-events-none">
                    <div className="h-64 w-64 rounded-full bg-primary blur-3xl" />
                </Parallax>
                <Parallax offset={-50} className="absolute bottom-20 right-10 opacity-20 pointer-events-none">
                    <div className="h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
                </Parallax>

                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto relative z-10">
                    <SlideReveal direction="down">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                            {dict.home.badge}
                        </div>
                    </SlideReveal>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent pb-2">
                            <TextReveal text={dict.home.heroTitle} className="justify-center" />
                        </h1>
                        <div className="animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                {dict.home.heroDesc}
                            </p>
                        </div>
                    </div>

                    <SlideReveal delay={0.8} className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href={`/${lang}/contact`}>
                            <Button size="lg" className="h-12 px-8 text-base bg-primary text-black hover:bg-primary/90 group">
                                {dict.home.ctaPrimary}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href={`/${lang}/services`}>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base backdrop-blur-sm bg-background/50">
                                {dict.home.ctaSecondary}
                            </Button>
                        </Link>
                    </SlideReveal>
                </div>
            </Section>

            {/* Tech Stack Marquee */}
            <SlideReveal direction="up" fullWidth>
                <div className="w-full">
                    <Marquee speed={40} className="py-4">
                        {[
                            { Icon: TechIcons.NextJS, name: "Next.js" },
                            { Icon: TechIcons.React, name: "React" },
                            { Icon: TechIcons.TypeScript, name: "TypeScript" },
                            { Icon: TechIcons.Tailwind, name: "Tailwind" },
                            { Icon: TechIcons.Framer, name: "Framer Motion" },
                            { Icon: TechIcons.Sanity, name: "Sanity" },
                            { Icon: TechIcons.Vercel, name: "Vercel" },
                            { Icon: TechIcons.Shadcn, name: "ShadcnUI" },
                        ].map(({ Icon, name }) => (
                            <div key={name} className="flex items-center mx-12 group cursor-default transition-all duration-300 hover:scale-110">
                                <Icon className="h-16 w-16 text-muted-foreground/30 transition-all duration-500 hover:text-primary group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </SlideReveal>

            {/* Services Preview */}
            <ServicesPreview 
                title={dict.services.title}
                subtitle={dict.services.subtitle}
                cards={dict.services.cards}
                cta={dict.services.cta}
                lang={lang}
            />

            {/* Features Grid (Why Choose Us) */}
            <Section className="relative">


                <StaggerContainer className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            icon: BarChart,
                            title: dict.home.features.seo.title,
                            desc: dict.home.features.seo.desc,
                            color: "text-blue-400",
                            bg: "bg-blue-400/10"
                        },
                        {
                            icon: Code,
                            title: dict.home.features.tech.title,
                            desc: dict.home.features.tech.desc,
                            color: "text-purple-400",
                            bg: "bg-purple-400/10"
                        },
                        {
                            icon: Rocket,
                            title: dict.home.features.perf.title,
                            desc: dict.home.features.perf.desc,
                            color: "text-amber-400",
                            bg: "bg-amber-400/10"
                        }
                    ].map((feature, i) => (
                        <StaggerItem key={i} variants={variants.fadeUp} className="h-full">
                            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] hover:-translate-y-1">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>

                                <h3 className="relative mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                                    {feature.title}
                                </h3>
                                <p className="relative text-muted-foreground">
                                    {feature.desc}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Portfolio Section */}
            <PortfolioSection 
                title={dict.portfolio.title}
                subtitle={dict.portfolio.subtitle}
                viewAll={dict.portfolio.viewAll}
                projects={dict.portfolio.projects}
                lang={lang}
            />

            <WhyChooseUs 
                title={dict.chooseUs.title}
                subtitle={dict.chooseUs.subtitle}
                items={dict.chooseUs.items}
            />

            {/* Testimonials Section */}
            <TestimonialsSection 
                title={dict.testimonials.title}
                subtitle={dict.testimonials.subtitle}
                items={dict.testimonials.items}
            />

            {/* CTA Section */}
            <Section>
                <Parallax offset={20}>
                    <div className="rounded-3xl bg-secondary/30 border p-12 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-1000 group-hover:bg-primary/10" />
                        <div className="absolute bottom-0 left-0 p-32 bg-blue-500/5 rounded-full blur-3xl -ml-16 -mb-16 transition-all duration-1000 group-hover:bg-blue-500/10" />

                        <FadeIn className="relative z-10 space-y-6 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                {dict.home.ctaSection.title}
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                {dict.home.ctaSection.desc}
                            </p>
                            <Link href={`/${lang}/contact`}>
                                <Button size="lg" className="mt-4 bg-foreground text-background hover:bg-foreground/90 transform hover:scale-105 transition-all">
                                    {dict.home.ctaSection.button}
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </Parallax>
            </Section>
        </div>
    );
}
