import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Info */}
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                            {dict.contact.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            {dict.contact.subtitle}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{dict.contact.labels.email}</h3>
                                    <p className="text-muted-foreground">hello@alvane.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-muted-foreground">+62 812 3456 7890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{dict.contact.labels.office}</h3>
                                    <p className="text-muted-foreground">Jakarta Selatan, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Form */}
                    <FadeIn delay={0.2} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
                        <div className="bg-card/50 backdrop-blur-xl border p-8 rounded-3xl">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{dict.contact.labels.firstName}</label>
                                        <input type="text" className="w-full h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder={dict.contact.placeholders.name} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{dict.contact.labels.lastName}</label>
                                        <input type="text" className="w-full h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder="" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">{dict.contact.labels.email}</label>
                                    <input type="email" className="w-full h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder={dict.contact.placeholders.email} />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">{dict.contact.labels.message}</label>
                                    <textarea className="flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" placeholder={dict.contact.placeholders.message} />
                                </div>

                                <Button className="w-full h-12 text-base font-semibold">
                                    {dict.contact.labels.send}
                                </Button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
}
