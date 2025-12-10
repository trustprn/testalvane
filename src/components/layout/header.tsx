import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface HeaderProps {
    lang: Locale;
}

export function Header({ lang }: HeaderProps) {
    const dict = getDictionary(lang);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md flex justify-center items-center">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href={`/${lang}`} className="block">
                    <Logo />
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href={`/${lang}`} className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.nav.home}
                    </Link>
                    <Link href={`/${lang}/services`} className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.nav.services}
                    </Link>
                    <Link href={`/${lang}/portfolio`} className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.nav.portfolio}
                    </Link>
                    <Link href={`/${lang}/blog`} className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.nav.blog}
                    </Link>
                    <Link href={`/${lang}/contact`} className="text-sm font-medium hover:text-primary transition-colors">
                        {dict.nav.contact}
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href={lang === "en" ? `/id` : `/en`}
                        className="text-xs font-semibold uppercase text-muted-foreground hover:text-foreground"
                    >
                        {lang === "en" ? "ID" : "EN"}
                    </Link>
                    <Button size="sm" className="hidden sm:inline-flex bg-primary text-black hover:bg-primary/90">
                        {dict.nav.getStarted}
                    </Button>
                </div>
            </div>
        </header>
    );
}
