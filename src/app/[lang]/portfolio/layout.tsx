import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return constructMetadata({
        title: dict.meta.portfolio.title,
        description: dict.meta.portfolio.description,
        image: dict.meta.portfolio.ogImage,
        lang: lang,
        slug: 'portfolio',
    });
}

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* We can add a specific header or shared UI for portfolio routes here if needed */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
