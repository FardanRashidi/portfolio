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
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span
                className="inline-block font-bold"
                style={{ color: "#61afef" }} // Blue accent
              >
                Fardan Rashidi
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Work In Progress Section */}
      <section className="w-full h-screen flex items-center justify-center bg-gray-200">
        <p className="text-2xl font-bold">Work In Progress...</p>
      </section>

      {/* Main Content */}
      <div style={{ paddingLeft: "15%", paddingRight: "15%", fontFamily: "Consolas, monospace", }}>
        <div style={{ marginBottom: 50, }} >
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
            This documentation is meant to showcase how I have setup my home server. I might go in depth in some parts of my showcase for some more complicated stuff (mainly so I can remember back) but mainly will show what I use for what situation.
          </p>
          <p>
            Lets just start with my setup. I am currently rocking a PC build with a Ryzen 5 2600 CPU, GTX1060 6GB, 32GB of RAM DDR4, 1TB SSD, and 4TB HDD (mobo is some Aorus mini itx).
          </p>
        </div>
        <details style={{ marginBottom: 50 }}>
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
            Proxmox
          </summary>
          <p>
            Proxmox is a hypervisor that allows you to run multiple virtual machines on your server. I use it to run my server and other VMs (Truenas and Home Assistant).
          </p>
        </details>
        <details style={{ marginBottom: 50 }}>
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
            Arch btw
          </summary>
          <p>
            Arch is a lightweight operating system that is very customizable and has a rolling release model. This means that you can always have the latest version of any software that one would ever need.
          </p>
          <div style={{ marginBottom: 50 }}>
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
              I have gone through multiple operating systems (Ubuntu, Debian, Fedora, etc.) and I have always found that I enjoy using Arch mainly for its customizability and being able to do whatever I want, including breaking it on my own. That said, why Arch as my main server? Tbh I don&apos;t have any reason other than I have been using it for a while and I know how to use it. (debian would prolly be a better choice but I don&apos;t like it as much)
            </p>
          </div>
        </details>
        <details style={{ marginBottom: 50 }}>
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
            Truenas Scale
          </summary>
          <p>
            Truenas Scale is a NAS-focused operating system designed for managing storage and running services. I use it to host my Immich and Jellyfin servers. My setup includes a 2TB HDD for primary storage, with an additional 2TB HDD serving as a backup.
          </p>
        </details>
        <details style={{ marginBottom: 50 }}>
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
            Home Assistant
          </summary>
          <p>

          </p>
        </details>
        <details style={{ marginBottom: 50 }}>
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
            Tailscale
          </summary>
          <p>
            Tailscale is a VPN service that allows you to securely connect to your devices from anywhere. This has been a god sent for me since my ISP does not allow port forwarding or rather I have to make a call to deal with them. Instead, I take the more casually route of using Tailscale and it has been working wonders for me.
          </p>
        </details>
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
        <a
          href="https://github.com/FardanRashidi/resume"
          target="_blank"
          rel="noopenner noreferrer"
          style={{
            margin: "0 10px",
            color: "#61afef", // Blue accent
            textDecoration: "none",
          }}
        >
          Resume
        </a>
        <a
          href="https://github.com/FardanRashidi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#61afef", // Blue accent
            textDecoration: "none",
          }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/fardanrashidi"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#61afef", // Blue accent
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>
      </footer>
    </div >
  );
}
