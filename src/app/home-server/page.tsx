import Link from "next/link";

export default function HomeServer() {
  return (
    <div
      style={{
        backgroundColor: "#282c34", // One Dark background
        color: "#abb2bf", // One Dark foreground
        minHeight: "100vh",
      }}
    >
      {/* Top Bar */}
      <header
        className="sticky top-0 z-40 w-full border-b flex items-center justify-center"
        style={{
          backgroundColor: "#21252b", // Slightly darker for the header
          borderBottom: "1px solid #3e4451",
        }}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span
              className="inline-block font-bold"
              style={{ color: "#61afef" }} // Blue accent
            >
              Fardan Rashidi
            </span>
          </Link>
        </div>
      </header>

      {/* Work In Progress Section */}
      {/* <section className="w-full h-screen flex items-center justify-center bg-gray-200">
        <p className="text-2xl font-bold">Work In Progress...</p>
      </section> */}

      {/* Main Content */}
      <div
        style={{
          padding: "0 5%", // Use percentage for responsive padding
          fontFamily: "Consolas, monospace",
        }}
      >
        <div style={{ marginBottom: 50 }}>
          <h1
            style={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#e06c75", // Red accent
            }}
          >
            Overview
          </h1>
          <p>
            This documentation is meant to showcase how I have set up my home
            server. I might go in depth in some parts of my showcase for some
            more complicated stuff (mainly so I can remember back) but mainly
            will show what I use for what situation.
          </p>
          <p>
            Let's just start with my setup. I am currently rocking a PC build
            with a Ryzen 5 2600 CPU, GTX1060 6GB, 32GB of RAM DDR4, 1TB SSD,
            and 4TB HDD (mobo is some Aorus mini ITX).
          </p>
        </div>
        {/** Details Sections */}
        {[
          {
            title: "Proxmox",
            content:
              "Proxmox is a hypervisor that allows you to run multiple virtual machines on your server. I use it to run my server and other VMs (Truenas and Home Assistant).",
          },
          {
            title: "Arch btw",
            content:
              "Arch is a lightweight operating system that is very customizable and has a rolling release model. This means that you can always have the latest version of any software that one would ever need.",
            subContent: (
              <>
                <h3
                  style={{
                    textAlign: "center",
                    margin: "20px 0",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#c678dd", // Purple accent
                  }}
                >
                  Why Arch?
                </h3>
                <p>
                  I have gone through multiple operating systems (Ubuntu,
                  Debian, Fedora, etc.) and I have always found that I enjoy
                  using Arch mainly for its customizability and being able to do
                  whatever I want, including breaking it on my own. That said,
                  why Arch as my main server? Tbh I don't have any reason other
                  than I have been using it for a while and I know how to use
                  it. (Debian would probably be a better choice but I don't
                  like it as much)
                </p>
                <h3
                  style={{
                    textAlign: "center",
                    margin: "20px 0",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#c678dd", // Purple accent
                  }}
                >
                  GPU Passthrough
                </h3>
                <p>
                  Yes, I did somehow achieve GPU passthrough on my server.
                  I have a 1060 in my arch and I mainly just use it for ollama
                  and supporting voice assistant for Home Assistant.
                  Planning on doing some other fun things with it but will have to research some more~
                </p>
              </>
            ),
          },
          {
            title: "Truenas Scale",
            content:
              "Truenas Scale is a NAS-focused operating system designed for managing storage and running services. I use it to host my Immich (not using my GPU for rendering does suck but it just takes time) and Jellyfin servers. My setup includes a 2TB HDD for primary storage, with an additional 2TB HDD serving as a backup.",
          },
          {
            title: "Home Assistant",
            content: "Home Assistant is an open-source home automation platform that focuses on privacy and local control. I use it to manage my smart home devices and automate tasks. Using Tuya Local is a game changer for me since it makes everything just faster and Tuya devices are relatively cheaper.",
          },
          {
            title: "Tailscale",
            content:
              "Tailscale is a VPN service that allows you to securely connect to your devices from anywhere. This has been a godsend for me since my ISP does not allow port forwarding or rather I have to make a call to deal with them. Instead, I take the more casual route of using Tailscale and it has been working wonders for me.",
          },
        ].map(({ title, content, subContent }, index) => (
          <details key={index} style={{ marginBottom: 50 }}>
            <summary
              style={{
                textAlign: "center",
                margin: "20px 0",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#98c379", // Green accent
                cursor: "pointer",
              }}
            >
              {title}
            </summary>
            <p>{content}</p>
            {subContent}
          </details>
        ))}
      </div>

      {/* Footer */}
      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #3e4451",
        }}
      />
      <footer
        style={{
          padding: "10px",
          backgroundColor: "#21252b",
          textAlign: "center",
        }}
      >
        {[
          {
            href: "https://github.com/FardanRashidi/resume",
            text: "Resume",
          },
          {
            href: "https://github.com/FardanRashidi",
            text: "GitHub",
          },
          {
            href: "https://linkedin.com/in/fardanrashidi",
            text: "LinkedIn",
          },
        ].map(({ href, text }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "0 10px",
              color: "#61afef", // Blue accent
              textDecoration: "none",
            }}
          >
            {text}
          </a>
        ))}
      </footer>
    </div>
  );
}
