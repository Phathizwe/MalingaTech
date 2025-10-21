import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
}

export function GradientHeading({
  children,
  variant = "primary",
  size = "lg",
  className,
}: GradientHeadingProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    xxl: "text-6xl md:text-7xl lg:text-8xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/70",
    secondary: "bg-gradient-to-r from-foreground to-foreground/70",
  };

  return (
    <h2
      className={cn(
        "font-bold bg-clip-text text-transparent",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </h2>
  );
}

