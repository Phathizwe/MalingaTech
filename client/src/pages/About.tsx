import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About MalingaTech
            </h1>
            <p className="text-xl text-muted-foreground">
              A technology investment portfolio bridging African innovation with
              global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To identify, invest in, and develop technology-driven solutions
                  that create scalable impact across African markets, leveraging
                  deep local expertise and global best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading technology investment portfolio in South Africa,
                  recognized for connecting African innovation with global
                  opportunities and driving digital transformation.
                </CardDescription>
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
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                MalingaTech was founded on the belief that Africa's technology
                potential is vast and largely untapped. With a deep understanding of
                both the challenges and opportunities unique to the South African
                market, we set out to build a portfolio of companies that leverage
                technology to solve real problems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our approach combines strategic investment with hands-on operational
                support, drawing on extensive experience in large-scale digital
                transformation initiatives. We've proven our ability to deliver
                complex technology projects, including a R700 million national IoT
                network, demonstrating both technical excellence and fiscal
                responsibility.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, MalingaTech encompasses a diverse portfolio spanning fintech,
                e-commerce, and business services, each company united by a
                commitment to innovation, scalability, and practical impact in
                underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain the highest standards in everything we do, from
                    investment decisions to operational execution, consistently
                    delivering results under budget and ahead of schedule.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We embrace emerging technologies and novel business models,
                    constantly seeking new ways to create value and solve problems
                    in the African context.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We measure success not just in financial returns, but in the
                    positive change our portfolio companies bring to underserved
                    communities across Africa.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We build trust through transparency, ethical practices, and a
                    commitment to doing what's right for our stakeholders,
                    portfolio companies, and communities.
                  </CardDescription>
                </CardContent>
              </Card>
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
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary/20 flex items-center justify-center">
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

