import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Diogo Araújo",
  initials: "DA",
  url: "https://diogoaraujo.com",
  location: "Porto/Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/",
  description: "Master of Computer Science Student at Universidade do Porto.",
  summary:
    "Hi, I'm Diogo Gomes de Araújo, and I am a **Master of Computer Science** student at **Faculdade de Ciências da Universidade do Porto**. I'm interested in cryptography, functional programming, distributed systems, compilers and algorithms.\n",
  avatarUrl: "/me2.jpg",
  skillsImage: "/icons.svg",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/resume.pdf",
      icon: NotebookIcon,
      label: "Curriculum",
      download: true,
    },
  ],
  contact: {
    email: "contact@diogoaraujo.com",
    tel: "+351 914576371",
    resumeUrl: "/resume.pdf",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/diogogomesaraujo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diogogomesaraujo/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:contact@diogoaraujo.pro",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "INESC TEC",
      href: "https://inesctec.pt/",
      badges: [],
      location: "Hybrid",
      title: "Researcher",
      logoUrl: "/inesc.png",
      start: "January 2026",
      end: "April 2026",
      description:
        "Developed and maintained IoT gateway microservices for DER communication. Deployed a Zero Trust framework (Teleport) for secure remote access to all IoT devices in the Power and Energy Systems laboratory.",
    },
    {
      company: "STAR JE",
      href: "https://starje.pt/",
      badges: [],
      location: "Remote",
      title: "Back-End Engineer and Project Manager",
      logoUrl: "/starje.png",
      start: "May 2024",
      end: "July 2025",
      description:
        "As a backend engineer at Star JE, I built backend API's for web and mobile applications. Additionally, I assisted in recruiting, directed teams and talked to clients to ensure project requirements where met.",
    },
  ],
  education: [
    {
      school: "Faculdade de Ciências da Universidade do Porto",
      href: "https://www.up.pt/fcup/pt/",
      degree: "Master's Degree in Computer Science",
      logoUrl: "/fcup.jpg",
      start: "September 2025",
      end: "Now",
    },
    {
      school: "Universidade da Beira Interior",
      href: "https://www.ubi.pt/en/",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      logoUrl: "/ubi.png",
      start: "September 2022",
      end: "July 2025",
    },
  ],
  projects: [
    {
      title: "Group Wallet for Nano",
      href: "https://github.com/diogogomesaraujo/aokiji",
      dates: "Feb 2025 - July 2025",
      active: true,
      description:
        "A Rust library and wallet for Nano group transactions using FROST as the final project of my CS degree at Universidade da Beira Interior.",
      technologies: ["Rust", "Tokio", "Dioxus", "Dalek"],
      links: [
        {
          type: "Wallet",
          href: "https://github.com/diogogomesaraujo/aokiji",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Library",
          href: "https://github.com/diogogomesaraujo/frost-sig",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wallet.gif",
    },

    {
      title: "Blocktion",
      href: "https://github.com/diogogomesaraujo/blocktion",
      dates: "May 2026 - June 2026",
      active: true,
      description:
        "A secure proof-of-work blockhain for auctions implemented in Rust from scratch.",
      technologies: ["Rust", "Libp2p", "Tokio", "Ratatui", "Dalek"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/blocktion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/block.gif",
    },

    {
      title: "Functional Language",
      href: "https://github.com/diogogomesaraujo/fun",
      dates: "April 2026 - June 2026",
      active: true,
      description:
        "A core functional programming language implemented in OCaml.",
      technologies: ["OCaml", "Menhir"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/fun",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fun.png",
    },

    {
      title: "Game for RetroJam 2025",
      href: "https://github.com/diogogomesaraujo/sisyphus-retrojam-2025",
      dates: "October 2025",
      active: true,
      description:
        "A game developed for IEEE RetroJam 2025 using Raylib and Rust in 48 hours in collaboraton with my brother.",
      technologies: ["Rust", "Raylib"],
      links: [
        {
          type: "Itch Page",
          href: "https://diogoaraujo2004.itch.io/sisyphus",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/sisyphus-retrojam-2025",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demo_retro.gif",
    },
    {
      title: "TUI Chat",
      href: "https://github.com/diogogomesaraujo/chat-a-tui",
      dates: "February 2026",
      active: true,
      description:
        "A Discord-like video chat application that runs in the terminal.",
      technologies: ["Rust", "Tokio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/chat-a-tui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cam.gif",
    },
    {
      title: "Garbage Collectors",
      href: "https://github.com/diogogomesaraujo/gc",
      dates: "May 2026 - June 2026",
      active: true,
      description:
        "A set of garbage collectors built in C with a virtual machine and parser for ASM-like instructions.",
      technologies: ["C", "OCaml", "Menhir", "CTypes"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/gc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gc.png",
    },
  ],
  hackathons: [
    {
      title: "2nd Place in IEEE RetroJam 2025",
      dates: "October, 2025",
      location: "On-Site",
      description:
        "Placed second alongside my brother Rodrigo with a retro-styled game developed in 48 hours using Rust and Raylib.",
      image: "ieee.png",
      links: [""],
    },
    {
      title: "Participation in Inforum 2025 - Évora",
      dates: "September, 2025",
      location: "On-Site",
      description:
        "Presented a poster on my Bachelor's Degree final project, connected with researchers, professionals, and fellow students, and received feedback that will help me grow further as an engineer.",
      image: "inforum.png",
      links: ["https://inforum2025.xdi.uevora.pt/"],
    },
    {
      title: "Industrial Robotics - Fundamentals",
      dates: "May, 2025",
      location: "On-Site",
      description:
        "Learnt about industrial robotics and how to program robotic arms.",
      image: "ubi.png",
    },
    {
      title: "Robocup 2016 - Leipzig, Germany, Certificate of Participation",
      dates: "July, 2016",
      location: "On-Site",
      description:
        "Participating in RoboCup was a transformative childhood experience that ignited my enduring passion for technology and programming.",
      image: "robocup.png",
    },
    {
      title: "National 1st Place – Robotics Championship (CoSpace Rescue) 2016",
      dates: "May, 2016",
      location: "On-Site",
      description:
        "Awarded for excellence in robot programming, navigation algorithms, and autonomous systems.",
      image: "braganca.png",
    },
  ],
} as const;
