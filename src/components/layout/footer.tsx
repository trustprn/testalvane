import Link from "next/link";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export function Footer({ lang }: { lang: Locale }) {
    const dict = getDictionary(lang);

    return (
        <footer className="w-full border-t bg-background/50 py-12">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xs text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} {dict.footer.rights}
                </p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                    {dict.footer.links.map((link) => (
                        <Link key={link} href="#" className="hover:text-foreground transition-colors">{link}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
