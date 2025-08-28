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
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle,
  Rocket,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react"
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
                <h1 className="text-2xl font-bold text-primary">BarterNow</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#case-studies"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Case Studies
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
              Connect Events with Sponsors Seamlessly
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Barternow is the trusted platform where event organizers find perfect sponsors and brands discover
              meaningful events. Join over 100+ successful partnerships that have generated 15 Lakhs+ in sponsorship
              value.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>15 Lakhs+ Sponsorship Value</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>95% Success Rate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

            <div className="text-center mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Event Organizers</h3>
              <p className="text-gray-600 text-sm">Find sponsors 3x faster with our matching system</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Sponsors</h3>
              <p className="text-gray-600 text-sm">Discover high-quality events that align with your brand values</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">Average 300% increase in successful sponsorship deals</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About Barternow</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2023, Barternow emerged from a simple observation: event organizers and sponsors were
                struggling to find each other in an increasingly fragmented marketplace. Our founders, having organized
                hundreds of events and managed corporate sponsorship budgets, understood the pain points on both sides.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we're proud to be the leading platform that has facilitated over 15 Lakhs in sponsorship
                deals, helping thousands of events come to life while providing brands with meaningful engagement
                opportunities.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15 Lakhs+</div>
                  <div className="text-muted-foreground">Sponsorship Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
                {/* <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div> */}
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To democratize event sponsorship by creating transparent, efficient connections between event organizers
                and sponsors worldwide.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every meaningful event has the resources it needs to succeed, and every brand can find
                authentic ways to connect with their audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
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
                  Our team matches events with the most relevant sponsors based on industry, audience, and
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

      <section id="pricing" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Free</span>
                </div>
                <CardDescription className="mt-2">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Up to 3 events per month</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic matching algorithm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic analytics</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-8">Get Started Free</Button>
                  </DialogTrigger>
                  {/* <DialogContent className="sm:max-w-md">{"Contact team via mail."}</DialogContent> */}
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">5%</span>
                  <span className="text-muted-foreground ml-2">per successful deal</span>
                </div>
                <CardDescription className="mt-2">For growing event organizers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Unlimited events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advanced Event Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Secure payment processing</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-8">Start Professional</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">{"Contact team via mail."}</DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-border relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <CardDescription className="mt-2">For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Everything in Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>White-label options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>24/7 phone support</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full mt-8 bg-transparent">
                      Contact Sales
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">{"Contact team via mail."}</DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How Barternow Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to connect events with sponsors and achieve success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Send the contact details and email to us.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our team finds the perfect matches based on your criteria, industry, and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect & Negotiate</h3>
              <p className="text-muted-foreground">
                Communicate directly with matches and negotiate terms that work for both parties.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Achieve Success</h3>
              <p className="text-muted-foreground">
                Execute your event and track success with our comprehensive management and analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients who transformed their events with Barternow
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">TechConf 2024</h3>
                  <p className="text-muted-foreground">Technology Conference</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3.8 Lakhs</div>
                  <div className="text-sm text-muted-foreground">Sponsorship Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">38</div>
                  <div className="text-sm text-muted-foreground">Sponsors Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1k</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Barternow helped us secure 300% more sponsors than our previous year. The sponsors was incredibly
                accurate, connecting us with sponsors who were genuinely interested in our tech-focused audience."
              </p>
            </Card>

            <Card className="border-border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Startup Summit</h3>
                  <p className="text-muted-foreground">Entrepreneurship Event</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">7.2 Lakhs</div>
                  <div className="text-sm text-muted-foreground">Sponsorship Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">22</div>
                  <div className="text-sm text-muted-foreground">Sponsors Secured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1.5k</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As a first-time event organizer, Barternow made sponsorship acquisition manageable. The platform guided
                us through the entire process and helped us exceed our funding goals by 200%."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
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
                    <p className="font-semibold text-foreground">Abhijeet Jhoshi</p>
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
                    <span className="text-sm font-semibold text-accent">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mukesh Kumar</p>
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
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The secure payment system and escrow protection gave us confidence to work with new sponsors. No more
                  payment delays or disputes."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dinesh Rai</p>
                    {/* <p className="text-sm text-muted-foreground">Founder, Music Festival Co</p> */}
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
                  "Barternow's customer support is exceptional. They helped us navigate complex sponsorship negotiations
                  and achieve better terms."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">AP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Anil Prasad</p>
                    {/* <p className="text-sm text-muted-foreground">Conference Manager, HealthTech Summit</p> */}
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
                  "The platform's global reach helped us find international sponsors for our local event. We expanded
                  our network beyond what we thought possible."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">SK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Smriti Katiyar</p>
                    {/* <p className="text-sm text-muted-foreground">Director, Innovation Expo</p> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Barternow Platform</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How does Barternow match events with sponsors?</AccordionTrigger>
              <AccordionContent>
                Our amazing team analyzes multiple factors including industry alignment, target
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
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                How long does it typically take to find sponsors?
              </AccordionTrigger>
              <AccordionContent>
                Most event organizers start receiving sponsor matches within 24-48 hours of creating their profile. The
                average time to secure a sponsorship deal is 2-3 weeks, which is 3x faster than traditional methods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">Do you work with events of all sizes?</AccordionTrigger>
              <AccordionContent>
                Yes! Barternow works with events of all sizes, from intimate workshops with 50 attendees to large
                conferences with 50,000+ participants. Our matching algorithm considers event scale to connect you with
                appropriately sized sponsors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">What industries do you serve?</AccordionTrigger>
              <AccordionContent>
                We serve all industries including technology, healthcare, finance, education, entertainment, sports,
                non-profit, and more. Our diverse sponsor network spans across multiple sectors and geographic regions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Events?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful events and sponsors already using Barternow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                {/* <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Today
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
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
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
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Barternow</h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Connecting events with trusted sponsors effortlessly. Transform your event management experience with
                our comprehensive platform.
              </p>
              {/* <div className="flex space-x-4">
                <Button
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
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                >
                  Facebook
                </Button>
              </div> */}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="/about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
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
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Barternow Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
