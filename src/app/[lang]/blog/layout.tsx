import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { constructMetadata } from "@/lib/seo";

type Props = {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = getDictionary(lang as Locale);
    const meta = dict.meta.blog;

    return constructMetadata({
        title: meta.title,
        description: meta.description,
        image: meta.ogImage,
        lang: lang as Locale,
        slug: 'blog',
    });
}

export default async function BlogLayout({ children, params }: Props) {
    const { lang } = await params;
    const dict = getDictionary(lang as Locale);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": dict.meta.blog.title,
        "description": dict.meta.blog.description,
        keywords: dict.meta.blog.keywords,
        "publisher": {
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
