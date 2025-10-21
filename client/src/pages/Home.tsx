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
              Africa's Technology Future, Compounded
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Profitable Ventures Through{" "}
              <span className="text-primary">Invisible Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We build profitable ventures using invisible technology that serves
              Africa's evolving needs—creating lasting solutions that compound over time.
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

      {/* Golden Circle - Why, How, What */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Golden Circle</h2>
            <p className="text-lg text-muted-foreground">
              Understanding our purpose, process, and product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">?</span>
                </div>
                <CardTitle>Why</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  Our Purpose
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Africa is becoming. We compound the results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">→</span>
                </div>
                <CardTitle>How</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  Our Process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Through invisible technology that disappears into everyday solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">!</span>
                </div>
                <CardTitle>What</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  Our Product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Profitable ventures that serve Africa's evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Doing Over Doubting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We act rather than analyze, bringing our full excellence to every
                  piece of work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Excellence in the Ordinary</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We bring our complete presence to all work, whether glamorous or
                  mundane.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Full Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every task receives our complete attention and commitment to
                  excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Believing in People</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We trust in people's potential and goodness, because everyone
                  benefits when Africa rises.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Sharing Knowledge Widely</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We freely share what we learn, lifting others as we grow together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">Building What Lasts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're not chasing trends—we're building permanent solutions that
                  compound over time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6">
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
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
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
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

