import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Award, Globe, Target, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-primary">Barternow</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">About Barternow</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how events and sponsors connect, making meaningful partnerships
            accessible to everyone.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2023 by a team of event professionals and technology experts, Barternow was born from a
                simple observation: the event sponsorship industry was broken. Event organizers spent months
                cold-calling potential sponsors, while brands struggled to find events that aligned with their values
                and audience.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our founders had organized hundreds of events and managed millions in corporate sponsorship budgets.
                They understood the pain points on both sides and knew there had to be a better way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to have facilitated over 15 Lakhs in sponsorship deals, helping thousands of
                events come to life while providing brands with authentic engagement opportunities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">2023</div>
                  <div className="text-muted-foreground">Founded</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">15 Lakhs+</div>
                  <div className="text-muted-foreground">Deals Facilitated</div>
                </CardContent>
              </Card>
              {/* <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries</div>
                </CardContent> 
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize event sponsorship by creating transparent, efficient connections between event
                  organizers and sponsors worldwide. We believe every meaningful event deserves the resources to
                  succeed, and every brand should have access to authentic engagement opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where event sponsorship is seamless, transparent, and mutually beneficial. Where technology
                  bridges the gap between great events and the brands that want to support them, creating lasting
                  partnerships that drive real value for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We believe in open, honest communication and clear processes that build trust between all parties.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We strive for excellence in everything we do, from our technology to our customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We continuously innovate to solve real problems and create better experiences for our users.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We measure our success by the positive impact we create for events, sponsors, and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 opacity-90">Be part of the future of event sponsorship</p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
