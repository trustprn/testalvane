import type { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = getDictionary(lang as Locale);
    const meta = dict.meta.services;

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.ogTitle,
            description: meta.ogDescription,
            images: [meta.ogImage],
            locale: lang,
            type: "website",
        },
        alternates: {
            canonical: meta.canonical,
        },
    };
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
