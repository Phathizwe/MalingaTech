import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Lightbulb, Globe, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              African Innovation • Global Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent leading-tight">
              Building the Future of African Technology
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              MalingaTech is a South African technology investment and development
              portfolio connecting innovative solutions with strategic opportunities
              across the continent and beyond.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/portfolio">
                <Button size="lg" className="gap-2">
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R700M+</div>
              <div className="text-muted-foreground">IoT Network Project</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">African Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Investment Thesis</h2>
            <p className="text-lg text-muted-foreground">
              We invest in technology-driven solutions that create scalable impact
              across African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-4" />
                <CardTitle>African Market Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deep understanding of South African business needs and emerging
                  opportunities across the continent
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Technology-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Applying digital innovation to transform traditional sectors and
                  create new market opportunities
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Scalable Models</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building platforms designed to grow within South Africa and
                  expand across African markets
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Practical Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating solutions that improve lives in underserved communities
                  through accessible technology
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Proven Leadership in Digital Transformation
                </h2>
                <p className="text-muted-foreground mb-6">
                  Led by Phathizwe Malinga, Group CIO at PG Group with extensive
                  experience in large-scale technology initiatives and strategic
                  innovation.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>UCT Executive MBA and adjunct lecturer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>Singularity University Faculty Candidate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>R700M national IoT network project delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>10+ years achieving corporate targets under budget</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-primary mb-4">PM</div>
                    <div className="text-xl font-semibold">Phathizwe Malinga</div>
                    <div className="text-muted-foreground">Founder & Group CIO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an entrepreneur, investor, or partner, we'd love to
              hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

