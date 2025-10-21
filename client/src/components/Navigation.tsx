import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="malinga.tech" 
              className="h-12 cursor-pointer"
            />
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`cursor-pointer transition-colors hover:text-primary ${
                      location === item.path
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

