import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function BlogPostPage({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
    const { lang, slug } = await params;
    const dict = getDictionary(lang);

    return (
        <div className="min-h-screen">
            <Section className="py-24">
                <Link
                    href={`/${lang}/blog`}
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> {dict.blog.back}
                </Link>

                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="text-sm font-semibold text-primary mb-4">Category</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter capitalize">
                            {slug.replace(/-/g, " ")}
                        </h1>
                        <p className="text-muted-foreground">{dict.blog.postedOn} Dec 12, 2024</p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl bg-muted border mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-muted to-card" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <article className="prose prose-invert prose-lg max-w-2xl mx-auto">
                        <p className="lead text-xl text-muted-foreground mb-8">
                            {dict.blog.placeholderBody}
                        </p>

                        <h2>Heading 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <h2>Heading 2</h2>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                        </ul>

                        <blockquote>
                            "Quote text goes here."
                        </blockquote>

                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </article>
                </FadeIn>
            </Section>
        </div>
    );
}
