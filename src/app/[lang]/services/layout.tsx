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
    const meta = dict.meta.services;

    return constructMetadata({
        title: meta.title,
        description: meta.description,
        image: meta.ogImage,
        lang: lang as Locale,
        slug: 'services',
    });
}

export default async function ServicesLayout({ children, params }: Props) {
    const { lang } = await params;
    const dict = getDictionary(lang as Locale);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": dict.meta.services.title,
        "description": dict.meta.services.description,
        keywords: dict.meta.services.keywords,
        "provider": {
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
