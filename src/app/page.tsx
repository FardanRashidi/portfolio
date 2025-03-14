import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">DevPortfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-4 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#projects" className="px-4 py-2 text-sm font-medium">
                Projects
              </Link>
              <Link href="#contact" className="px-4 py-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">John Doe</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A passionate software developer specializing in building exceptional digital experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button size="lg">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Developer Portrait"
                  width={600}
                  height={600}
                  className="aspect-square overflow-hidden rounded-full object-cover border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a software developer with a passion for creating elegant, efficient, and user-friendly applications.
                With expertise in modern web technologies, I build solutions that solve real-world problems.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <p className="text-sm text-muted-foreground text-center">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                      <line x1="8" y1="16" x2="8.01" y2="16"></line>
                      <line x1="8" y1="20" x2="8.01" y2="20"></line>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      <line x1="12" y1="22" x2="12.01" y2="22"></line>
                      <line x1="16" y1="16" x2="16.01" y2="16"></line>
                      <line x1="16" y1="20" x2="16.01" y2="20"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Backend</h3>
                  <p className="text-sm text-muted-foreground text-center">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">DevOps</h3>
                  <p className="text-sm text-muted-foreground text-center">Docker, CI/CD, AWS, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Check out some of my recent work. Each project represents a unique challenge and solution.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 1"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>E-Commerce Platform</CardTitle>
                  <CardDescription>A full-stack e-commerce solution with payment integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built with Next.js, TypeScript, Tailwind CSS, and Stripe for payments. Features include user
                    authentication, product management, and order processing.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project1.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 2"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>A collaborative task management application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed with React, Redux, and Firebase. Features include real-time updates, team collaboration,
                    and task prioritization.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project2.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 3"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>AI Content Generator</CardTitle>
                  <CardDescription>An AI-powered content creation tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Created with Node.js, Express, and OpenAI API. Generates high-quality content based on user prompts
                    and preferences.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project3.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project 4 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 4"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Fitness Tracker</CardTitle>
                  <CardDescription>A mobile-first fitness tracking application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built with React Native and Firebase. Tracks workouts, nutrition, and progress with interactive
                    charts and personalized recommendations.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project4.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project 5 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 5"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Real Estate Platform</CardTitle>
                  <CardDescription>A comprehensive real estate listing and management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed with Next.js, MongoDB, and Google Maps API. Features include property listings, virtual
                    tours, and agent dashboards.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project5.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project 6 */}
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 6"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Weather Dashboard</CardTitle>
                  <CardDescription>A beautiful and informative weather application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Created with React, TypeScript, and OpenWeather API. Provides detailed weather forecasts, alerts,
                    and historical data visualization.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="https://project6.example.com" target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="mailto:contact@example.com">
                    <Button variant="outline" className="w-full gap-1">
                      <Mail className="h-4 w-4" />
                      contact@example.com
                    </Button>
                  </a>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/fardanrashidi" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/fardanrashidi" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border bg-background p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-medium underline underline-offset-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

