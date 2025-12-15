import { Metadata } from 'next';
import { Locale } from '@/i18n-config';

type MetadataProps = {
    title: string;
    description: string;
    image?: string;
    icons?: Metadata['icons'];
    noIndex?: boolean;
    lang: Locale;
    slug?: string; // Optional slug for dynamic pages
};

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://alvanestudio.com';

export function constructMetadata({
    title,
    description,
    image = '/images/og-home.jpg',
    icons = '/favicon.ico',
    noIndex = false,
    lang,
    slug = '',
}: MetadataProps): Metadata {
    
    // Clean up slug to avoid double slashes if provided with leading slash
    const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
    
    // Construct path based on whether slug exists
    // If it's the root (home), path is empty string
    // If it's a subpage, path is `/${cleanSlug}`
    const path = cleanSlug ? `/${cleanSlug}` : '';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
            locale: lang,
            type: 'website',
            siteName: 'Alvane Agency',
        },
        icons,
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: `/${lang}${path}`,
            languages: {
                'en': `/en${path}`,
                'id': `/id${path}`,
            },
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
