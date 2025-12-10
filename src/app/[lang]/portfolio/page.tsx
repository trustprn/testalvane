import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import { PortfolioGrid } from "@/components/ui/portfolio-grid";
interface PageProps {
    params: Promise<{ lang: Locale }>;
}

export default async function PortfolioPage({ params }: PageProps) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <div className="pt-24 pb-16">
            <PortfolioGrid 
                title={dict.portfolio.title}
                subtitle={dict.portfolio.subtitle}
                projects={dict.portfolio.projects}
                lang={lang}
            />
        </div>
    );
}
