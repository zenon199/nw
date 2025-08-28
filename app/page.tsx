"use client"

import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CalendarDays, Shield, Star, Target, Trophy, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function BarternowLanding() {
  const [selectedUserType, setSelectedUserType] = useState<"sponsor" | "event" | null>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && selectedUserType) {
      console.log(`${selectedUserType} email submitted:`, email)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
        setSelectedUserType(null)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">Barternow</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">Get Started</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join Barternow</DialogTitle>
                    <DialogDescription>Tell us about yourself and we'll reach out to you</DialogDescription>
                  </DialogHeader>
                  {!isSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "sponsor" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("sponsor")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm a Sponsor</CardTitle>
                            </div>
                            <CardDescription>Find and sponsor events that align with your brand</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "event" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("event")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <CalendarDays className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm an Event Organizer</CardTitle>
                            </div>
                            <CardDescription>Connect with sponsors to fund your events</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" disabled={!selectedUserType || !email} className="w-full">
                        Submit - We'll Contact You
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">Our team will reach out to you soon.</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
              Connect Events with Sponsors Seamlessly
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Barternow is the trusted platform where event organizers find perfect sponsors and brands discover
              meaningful events. Join over 100+ successful partnerships that have generated 15 Lakhs in sponsorship
              value.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>15 Lakhs Sponsorship Value</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>95% Success Rate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  {/* <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button> */}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join Barternow</DialogTitle>
                    <DialogDescription>Tell us about yourself and we'll reach out to you</DialogDescription>
                  </DialogHeader>
                  {!isSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "sponsor" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("sponsor")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm a Sponsor</CardTitle>
                            </div>
                            <CardDescription>Find and sponsor events that align with your brand</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "event" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("event")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <CalendarDays className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm an Event Organizer</CardTitle>
                            </div>
                            <CardDescription>Connect with sponsors to fund your events</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-hero">Email Address</Label>
                        <Input
                          id="email-hero"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" disabled={!selectedUserType || !email} className="w-full">
                        Submit - We'll Contact You
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">Our team will reach out to you soon.</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
                    Schedule Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join Barternow</DialogTitle>
                    <DialogDescription>Tell us about yourself and we'll reach out to you</DialogDescription>
                  </DialogHeader>
                  {!isSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "sponsor" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("sponsor")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm a Sponsor</CardTitle>
                            </div>
                            <CardDescription>Find and sponsor events that align with your brand</CardDescription>
                          </CardHeader>
                        </Card>
                        <Card
                          className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "event" ? "ring-2 ring-accent" : ""}`}
                          onClick={() => setSelectedUserType("event")}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-2">
                              <CalendarDays className="h-5 w-5 text-accent" />
                              <CardTitle className="text-lg">I'm an Event Organizer</CardTitle>
                            </div>
                            <CardDescription>Connect with sponsors to fund your events</CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-demo">Email Address</Label>
                        <Input
                          id="email-demo"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" disabled={!selectedUserType || !email} className="w-full">
                        Submit - We'll Contact You
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">Our team will reach out to you soon.</p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-gray-400 font-semibold">TechCorp</div>
                <div className="text-gray-400 font-semibold">EventPro</div>
                <div className="text-gray-400 font-semibold">InnovateCorp</div>
                <div className="text-gray-400 font-semibold">GlobalEvents</div>
                <div className="text-gray-400 font-semibold">BrandForward</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Event Organizers</h3>
              <p className="text-gray-600 text-sm">Find sponsors 3x faster with our best ensights and services.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Sponsors</h3>
              <p className="text-gray-600 text-sm">Discover high-quality events that align with your brand values</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">Average 300% increase in successful sponsorship deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline event management and sponsorship connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  We matches events with the most relevant sponsors based on industry, audience, and
                  budget.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  End-to-end encrypted payment processing with escrow protection for both sponsors and event organizers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive analytics and reporting tools to track ROI, engagement, and performance metrics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CalendarDays className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Event Management</CardTitle>
                <CardDescription>
                  Complete event lifecycle management from planning to execution with integrated sponsor coordination.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Sponsor Network</CardTitle>
                <CardDescription>
                  Access to a curated network of verified sponsors across various industries and budget ranges.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Success Tracking</CardTitle>
                <CardDescription>
                  Monitor sponsorship performance and event success with detailed metrics and feedback systems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How Barternow Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect events with sponsors and achieve success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Let us know by providing the contact details.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our Event management team will reach out and discuss the needs and solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Achieve Success</h3>
              <p className="text-muted-foreground">
                Collaborate seamlessly and track your success with our amazing management team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about their experience with Barternow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Barternow transformed how we approach event sponsorship. We've increased our sponsor acquisition by
                  300% and reduced planning time by half."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">AJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Abhinav Jhoshi</p>
                    {/* <p className="text-sm text-muted-foreground">Event Director, TechConf</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "As a sponsor, finding the right events was always challenging. Barternow's matching system is
                  incredibly accurate and saves us countless hours."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">PR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Prateek Rai</p>
                    {/* <p className="text-sm text-muted-foreground">Marketing Manager, InnovateCorp</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The analytics dashboard gives us insights we never had before. We can now measure ROI accurately and
                  optimize our sponsorship strategy."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Suman</p>
                    {/* <p className="text-sm text-muted-foreground">CEO, EventPro Solutions</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Barternow Platform</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How does Barternow match events with sponsors?</AccordionTrigger>
              <AccordionContent>
                Our Event managementteam analyzes multiple factors including industry alignment, target
                audience demographics, budget ranges, event type, and historical performance data to create optimal
                matches between events and sponsors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What fees does Barternow charge?</AccordionTrigger>
              <AccordionContent>
                Barternow operates on a success-based model. We only charge a small percentage fee when a successful
                sponsorship deal is completed. There are no upfront costs or monthly subscription fees for basic usage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How secure are the payments on the platform?</AccordionTrigger>
              <AccordionContent>
                All payments are processed through bank-grade encryption and our secure escrow system. Funds are held
                safely until both parties confirm the completion of agreed-upon deliverables, ensuring protection for
                both sponsors and event organizers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can I use Barternow for virtual events?</AccordionTrigger>
              <AccordionContent>
                Barternow supports all types of events including virtual, hybrid, and in-person events. Our platform
                adapts to different event formats and helps match sponsors with the right opportunities regardless of
                the event type.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">What kind of support does Barternow provide?</AccordionTrigger>
              <AccordionContent>
                We provide comprehensive support including 24/7 customer service, dedicated account managers for
                enterprise clients, onboarding assistance, and extensive documentation. Our team is always ready to help
                you maximize your success on the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Events?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful events and sponsors already using Barternow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join Barternow</DialogTitle>
                  <DialogDescription>Tell us about yourself and we'll reach out to you</DialogDescription>
                </DialogHeader>
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "sponsor" ? "ring-2 ring-accent" : ""}`}
                        onClick={() => setSelectedUserType("sponsor")}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-accent" />
                            <CardTitle className="text-lg">I'm a Sponsor</CardTitle>
                          </div>
                          <CardDescription>Find and sponsor events that align with your brand</CardDescription>
                        </CardHeader>
                      </Card>
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "event" ? "ring-2 ring-accent" : ""}`}
                        onClick={() => setSelectedUserType("event")}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-2">
                            <CalendarDays className="h-5 w-5 text-accent" />
                            <CardTitle className="text-lg">I'm an Event Organizer</CardTitle>
                          </div>
                          <CardDescription>Connect with sponsors to fund your events</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-cta">Email Address</Label>
                      <Input
                        id="email-cta"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={!selectedUserType || !email} className="w-full">
                      Submit - We'll Contact You
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">Our team will reach out to you soon.</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Schedule Demo
                </Button> */}
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join Barternow</DialogTitle>
                  <DialogDescription>Tell us about yourself and we'll reach out to you</DialogDescription>
                </DialogHeader>
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "sponsor" ? "ring-2 ring-accent" : ""}`}
                        onClick={() => setSelectedUserType("sponsor")}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-accent" />
                            <CardTitle className="text-lg">I'm a Sponsor</CardTitle>
                          </div>
                          <CardDescription>Find and sponsor events that align with your brand</CardDescription>
                        </CardHeader>
                      </Card>
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${selectedUserType === "event" ? "ring-2 ring-accent" : ""}`}
                        onClick={() => setSelectedUserType("event")}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-2">
                            <CalendarDays className="h-5 w-5 text-accent" />
                            <CardTitle className="text-lg">I'm an Event Organizer</CardTitle>
                          </div>
                          <CardDescription>Connect with sponsors to fund your events</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-cta2">Email Address</Label>
                      <Input
                        id="email-cta2"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={!selectedUserType || !email} className="w-full">
                      Submit - We'll Contact You
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">Our team will reach out to you soon.</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Barternow</h3>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Connecting events with trusted sponsors effortlessly. Transform your event management experience with
                our comprehensive platform.
              </p>
              <div className="flex space-x-4">
                {/* <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                >
                  Twitter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                >
                  LinkedIn
                </Button> */}
                {/* <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                >
                  Facebook
                </Button> */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  {/* <a href="/about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a> */}
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="/privacy" className="hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Barternow Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
