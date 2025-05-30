"use client";

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Fardan Rashidi</span>
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

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I&apos;m <span className="text-primary">Fardan Rashidi</span>
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
                  src="/images/profile.jpeg"
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
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I&apos;m a software developer with a passion for creating elegant, efficient, and user-friendly applications.
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
                  <p className="text-sm text-muted-foreground text-center">React, Next.js, TypeScript, Tailwind CSS, Bootstrap</p>
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
                  <p className="text-sm text-muted-foreground text-center">Node.js, Django, Laravel, MongoDB, PostgreSQL</p>
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
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
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
                    src="/mobile-app.svg"
                    alt="Project 1"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription className="text-lg font-bold">Real-Time Glucose Monitoring App</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-justify">
                    A React Native mobile app integrated with Supabase for real-time data syncing from an ESP-based non-invasive glucose monitoring device. The app supports two user roles—patients and doctors. Patients can view their personal glucose trends, while doctors can monitor multiple patients data remotely. Built with a focus on real-time updates, secure authentication, and role-based access.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="/mobile">
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
                    src="/home-server.svg"
                    alt="Project 2"
                    width={600}
                    height={400}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle></CardTitle>
                  <CardDescription className="text-lg font-bold">Home Server</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-justify">
                    A personal home server setup using Proxmox, Truenas, and Arch. Hosting a variety of services including Nextcloud, Jellyfin, Home Assistant and any project to access via the same network. This setup allows for seamless file sharing, media streaming, and home automation.
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link href="/home-server">
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
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="mailto:fardan.work24@gmail.com">
                    <Button variant="outline" className="w-full gap-1">
                      <Mail className="h-4 w-4" />
                      fardan.work24@gmail.com
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
                  <h3 className="text-xl font-bold">Send a Message on WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
                    const whatsappMessage = name
                      ? `Hello, my name is ${name}. ${message}`
                      : message;
                    const whatsappUrl = `https://wa.me/60126367851?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name (optional)"
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
                      name="message"
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
      <footer className="w-full py-6 bg-gray-100 flex items-center justify-center text-center">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Fardan Rashidi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

