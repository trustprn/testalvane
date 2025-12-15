import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{
        lang: Locale;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const dict = getDictionary(lang);
    // @ts-ignore - dictionary types are loose
    const project = dict.portfolio.projects.find((p: any) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return constructMetadata({
        title: `${project.title} | Alvane Agency`,
        description: project.description,
        image: project.image,
        lang: lang,
        slug: `portfolio/${slug}`,
    });
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <article className="min-h-screen bg-background">
            {children}
        </article>
    );
}
