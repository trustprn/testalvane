import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
    params: Promise<{ lang: string; slug: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = getDictionary(lang as Locale);

    // NOTE: In a real CMS integration, fetch the post/slug data here.
    // For now, we use the slug to dynamically pretty-print the title.
    const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) + " | Alvane Blog";
    const desc = dict.meta.blogDetail.description;

    return {
        title: title,
        description: desc,
        openGraph: {
            title: title,
            description: desc,
            images: [dict.meta.blogDetail.ogImage],
            locale: lang,
            type: "article",
        },
        alternates: {
            canonical: `${dict.meta.blogDetail.canonical}/${slug}`,
        },
    };
}

export default async function BlogPostLayout({ children, params }: Props) {
    const { lang, slug } = await params;

    // JSON-LD for Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": slug.replace(/-/g, " "),
        "author": {
            "@type": "Organization",
            "name": "Alvane Agency"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
