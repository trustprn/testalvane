import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import { ProjectDetailView } from "@/components/ui/project-detail-view";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        lang: Locale;
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const dict = getDictionary(lang);

    const project = dict.portfolio.projects.find((p: any) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <ProjectDetailView 
            project={project} 
            backLabel={dict.portfolio.back}
            lang={lang}
        />
    );
}
