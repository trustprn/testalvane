import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = getDictionary(lang as Locale);
    const meta = dict.meta.home;

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://alvanestudio.com'),
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            title: meta.ogTitle,
            description: meta.ogDescription,
            images: [meta.ogImage],
            locale: lang,
            type: "website",
        },
        alternates: {
            canonical: meta.canonical,
            languages: {
                'en': '/en',
                'id': '/id',
            },
        },
    };
}

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    return (
        <html lang={lang} className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
            >
                <Header lang={lang as Locale} />
                <main className="flex-1">{children}</main>
                <Footer lang={lang as Locale} />
            </body>
        </html>
    );
}
