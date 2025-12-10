import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export function Section({ children, className, container = true, ...props }: SectionProps) {
    return (
        <section
            className={cn("py-16 md:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {container ? (
                <div className="container px-6 md:px-12 lg:px-24 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
