import Link from "next/link";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";

export default async function BlogPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    const isId = lang === 'id';

    // Mock Data (Static for now, but titled correctly per lang)
    const posts = [
        {
            slug: "future-of-seo-2025",
            title: isId ? "Masa Depan SEO di 2025" : "The Future of SEO in 2025",
            excerpt: isId
                ? "Pelajari tren terbaru algoritma Google dan bagaimana AI mengubah lanskap pencarian."
                : "Learn about the latest Google algorithm trends and how AI is changing search.",
            category: "SEO",
            date: "Dec 12, 2024"
        },
        {
            slug: "nextjs-for-enterprise",
            title: "Next.js for Enterprise",
            excerpt: isId
                ? "Mengapa perusahaan besar beralih ke Next.js untuk aplikasi web mereka."
                : "Why large enterprises are switching to Next.js for their web applications.",
            category: "Development",
            date: "Dec 10, 2024"
        },
        {
            slug: "technical-seo-audit",
            title: "Technical SEO Audit Guide",
            excerpt: isId
                ? "Panduan lengkap melakukan audit teknis untuk website e-commerce."
                : "Complete guide to performing technical audits for e-commerce websites.",
            category: "Technical",
            date: "Dec 05, 2024"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="py-24">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{dict.blog.title}</h1>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                        {dict.blog.subtitle}
                    </p>
                </FadeIn>

                {/* Featured Post */}
                <FadeIn delay={0.2} className="mb-16">
                    <Link href={`/${lang}/blog/${posts[0].slug}`} className="group relative block overflow-hidden rounded-3xl bg-muted/20 border hover:border-primary/50 transition-all">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="aspect-video md:aspect-auto bg-muted transition-colors group-hover:opacity-80" />
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-sm font-semibold text-primary mb-2">{posts[0].category}</div>
                                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{posts[0].title}</h2>
                                <p className="text-muted-foreground mb-6 line-clamp-3">{posts[0].excerpt}</p>
                                <div className="flex items-center text-sm font-medium">
                                    {dict.blog.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </FadeIn>

                {/* Recent Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, i) => (
                        <FadeIn key={i} delay={0.3 + (i * 0.1)}>
                            <Link href={`/${lang}/blog/${post.slug}`} className="group block h-full flex flex-col">
                                <div className="aspect-video rounded-2xl bg-muted mb-4 overflow-hidden border">
                                    <div className="w-full h-full bg-gradient-to-tr from-muted to-muted/50 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                        <span className="text-primary font-semibold">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </Section>
        </div>
    );
}
