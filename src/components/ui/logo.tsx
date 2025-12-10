import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <div className="relative h-8 w-8 flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Abstract 'A' Icon */}
                <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full text-primary relative z-10"
                >
                    <path
                        d="M16 2L2 28H8L16 12L24 28H30L16 2Z"
                        className="fill-current"
                    />
                    <path
                        d="M16 18L12 26H20L16 18Z"
                        className="fill-blue-500 opacity-80"
                    />
                </svg>
            </div>

            {showText && (
                <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:to-primary transition-all duration-500">
                    ALVANE
                </span>
            )}
        </div>
    );
}
