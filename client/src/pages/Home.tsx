import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LogoCarousel } from "@/components/ui/logo-carousel";

const portfolioLogos = [
  { name: "Nickle", id: 1, img: "/nickle-logo.png" },
  { name: "Operiva", id: 2, img: "/operiva-logo.png" },
  { name: "WeTYCA", id: 3, img: "/wetyca-logo.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Logo Carousel Section */}
      <section className="pt-32 pb-20 px-6 flex-1 flex items-center">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <LogoCarousel columnCount={3} logos={portfolioLogos} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Est. 2021</div>
              <div className="text-muted-foreground">Year Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">African Focused</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

