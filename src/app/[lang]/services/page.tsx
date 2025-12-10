import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function ServicesPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    const isId = lang === 'id';

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="pt-32 pb-16">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                        {dict.services.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {dict.services.subtitle}
                    </p>
                </FadeIn>
            </Section>

            <Section className="bg-muted/5">
                <div className="grid md:grid-cols-3 gap-8">
                    {dict.services.cards.map((service, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="flex flex-col p-8 rounded-3xl border bg-card hover:border-primary/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 h-18">{service.desc}</p>
                            <div className="text-2xl font-semibold text-primary mb-8">{service.price}</div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center text-sm">
                                        <Check className="h-4 w-4 text-primary mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80" asChild>
                                <Link href={isId ? "/id/contact" : "/en/contact"}>
                                    {dict.services.cta}
                                </Link>
                            </Button>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6">
                            {dict.services.process.title}
                        </h2>
                        <div className="space-y-6">
                            {dict.services.process.steps.map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-full border border-primary text-primary flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{step.title}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2} className="h-[400px] rounded-3xl bg-linear-to-br from-muted to-muted/50 border flex items-center justify-center">
                        {/* Illustration placeholder */}
                        <div className="text-muted-foreground opacity-50 font-mono text-sm border p-4 rounded bg-background">
                            Process Illustration<br />(Visuals/Lottie go here)
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
}
