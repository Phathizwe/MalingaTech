import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, ShoppingCart, Briefcase, Globe } from "lucide-react";

const portfolioCompanies = [
  {
    name: "Nickle",
    domain: "nickle.co.za",
    description: "Innovative fintech platform providing accessible financial services and solutions tailored for the South African market.",
    sector: "Fintech",
    stage: "Active",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Coupin",
    domain: "coupin.co.za",
    description: "Digital coupon and deals platform connecting South African consumers with local businesses and exclusive offers.",
    sector: "E-commerce",
    stage: "Active",
    icon: ShoppingCart,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Operiva",
    domain: "operiva.co.za",
    description: "Business operations and services platform streamlining operational processes for South African enterprises.",
    sector: "B2B SaaS",
    stage: "Active",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Wetyca",
    domain: "wetyca.com",
    description: "Technology consulting and services platform with international reach, delivering digital transformation solutions.",
    sector: "Consulting",
    stage: "Active",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              A diverse range of technology ventures across fintech, e-commerce,
              and business services
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioCompanies.map((company) => {
              const Icon = company.icon;
              return (
                <Card
                  key={company.domain}
                  className="border-2 hover:border-primary transition-all hover:shadow-lg group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary">{company.stage}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{company.name}</CardTitle>
                    <CardDescription className="text-sm font-mono text-primary">
                      {company.domain}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {company.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{company.sector}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                        onClick={() =>
                          window.open(`https://${company.domain}`, "_blank")
                        }
                      >
                        Visit Site <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Investment Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Fintech</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Financial technology solutions improving access to banking,
                    payments, and financial services across African markets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">E-commerce</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Digital marketplaces and platforms connecting consumers with
                    products, services, and local businesses.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">B2B SaaS</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Business software solutions streamlining operations,
                    improving efficiency, and enabling digital transformation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              How We Create Value
            </h2>
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Strategic Guidance
                  </h3>
                  <p className="text-muted-foreground">
                    Leveraging deep industry expertise and market knowledge to
                    guide portfolio companies through critical strategic decisions
                    and market positioning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Operational Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Applying proven methodologies from large-scale technology
                    projects to optimize operations, improve efficiency, and
                    ensure fiscal responsibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Network & Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    Connecting portfolio companies with strategic partners,
                    customers, and opportunities across African and global markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Technology Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    Providing technical guidance on architecture, scalability, and
                    innovation to ensure portfolio companies maintain competitive
                    technological advantages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

