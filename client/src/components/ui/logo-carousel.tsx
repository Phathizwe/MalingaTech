import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  id: number;
  img: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  columnCount?: number;
  className?: string;
}

export function LogoCarousel({
  logos,
  columnCount = 3,
  className,
}: LogoCarouselProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        className={cn(
          "grid gap-8 items-center justify-items-center",
          columnCount === 3 && "grid-cols-1 md:grid-cols-3",
          columnCount === 4 && "grid-cols-2 md:grid-cols-4"
        )}
      >
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center h-24 w-full px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

