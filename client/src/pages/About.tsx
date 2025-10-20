import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Zap, Heart, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About malinga.tech
            </h1>
            <p className="text-xl text-muted-foreground">
              Africa's technology future, compounded
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">
                  Africa's technology future, compounded.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  We build profitable ventures using invisible technology that
                  serves Africa's evolving needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                malinga.tech was founded on a simple but powerful belief: Africa is
                becoming, and we can compound those results through technology that
                truly serves.
              </p>
              <p>
                We don't build technology for technology's sake. We build invisible
                technology—solutions that disappear into the fabric of everyday
                life, making things work better without demanding attention. This
                approach has guided us in creating profitable ventures across
                fintech, business operations, and consulting.
              </p>
              <p>
                Our track record speaks to our commitment: a R700 million national
                IoT network delivered on time and under budget, over a decade of
                corporate leadership achieving targets consistently, and a portfolio
                of companies serving real needs in the African market.
              </p>
              <p>
                We're not chasing trends. We're building what lasts—permanent
                solutions that compound over time, creating value that grows
                exponentially as Africa continues its remarkable transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Our Values</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              The principles that guide everything we do
            </p>

            <div className="space-y-8">
              {/* Approach to Action */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Our Approach to Action
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-lg">Doing Over Doubting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        We act rather than analyze, bringing our full excellence to
                        every piece of work.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <Award className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-lg">
                        Excellence in the Ordinary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        We bring excellence to every task, whether glamorous or
                        mundane.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <Target className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-lg">Full Presence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Every task receives our complete attention and commitment.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Approach to People */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Our Approach to People
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <Users className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-lg">Believing in People</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        We trust in people's potential and goodness, because
                        everyone benefits when Africa rises.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <Lightbulb className="h-10 w-10 text-primary mb-4" />
                      <CardTitle className="text-lg">
                        Sharing Knowledge Widely
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        We freely share what we learn, lifting others as we grow
                        together.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Approach to Impact */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Our Approach to Impact
                </h3>
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <Heart className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">Building What Lasts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      We're not chasing trends—we're building permanent solutions
                      that compound over time, creating lasting value for Africa's
                      future.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-center text-muted-foreground italic">
                Together: We bring complete presence to all work, trust in people's
                goodness, share knowledge freely, and build lasting solutions—because
                Africa's becoming requires nothing less than our full excellence in
                everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Leadership</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary">PM</div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">Phathizwe Malinga</h3>
                    <p className="text-primary font-medium mb-4">
                      Founder & Group CIO
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Phathizwe brings over a decade of leadership experience in
                      digital transformation and technology innovation. As Group CIO
                      at PG Group, he has consistently delivered complex technology
                      initiatives under budget while driving strategic innovation.
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• UCT Executive MBA & Adjunct Lecturer</p>
                      <p>• Singularity University Faculty Candidate</p>
                      <p>• R700M National IoT Network Project Leader</p>
                      <p>• Speaker on African Technology Adoption & 4IR Impact</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

