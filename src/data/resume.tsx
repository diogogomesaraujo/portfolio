import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Diogo Araújo",
  initials: "DA",
  url: "https://dillion.io",
  location: "Covilhã/Braga, Portugal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Computer Science Student at Universidade da Beira Interior.",
  summary:
    "Hi, I'm Diogo Gomes de Araújo, a **Backend Developer** with a **Bachelor's Degree in Computer Science and Engineering** in Universidade da Beira Interior. From an early age, my fascination with technology led me to build simple games, websites and applications, fueling my passion for programming and shaping my career path.\n\nI'm interested in cryptography, functional programming, distributed systems and algorithms, but primarily finding **efficient solutions** to **complex problems**. I hope that, in doing so, I can have an everlasting impact in the evolution of software.",
  avatarUrl: "/me1.png",
  skillsImage: "/icons.svg",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "contact@diogoaraujo.com",
    tel: "+351 914576371",
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
      company: "STAR JE",
      href: "https://starje.pt/",
      badges: [],
      location: "Remote",
      title: "Back-End Engineer and Project Manager",
      logoUrl: "/starje.png",
      start: "May 2024",
      end: "July 2025",
      description:
        "As a backend engineer at Star JE, I built scalable, efficient and maintainable backend solutions for real-world clients. Additionally, I assisted in recruiting technical talent by screening candidates and leading interviews and directed teams to successfully deliver a diverse portfolio of projects.",
    },
    {
      company: "Degema",
      badges: [],
      href: "https://degema.pt/",
      location: "On-Site",
      title: "Restaurant Server",
      logoUrl: "/degema.jpg",
      start: "July 2023",
      end: "September 2023",
      description:
        "As a waiter at Degema, I focused on teamwork and communication to ensure smooth service and a positive customer experience.",
    },
  ],
  education: [
    {
      school: "Universidade da Beira Interior",
      href: "https://www.ubi.pt/en/",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      logoUrl: "/ubi.png",
      start: "2022",
      end: "2025",
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
      title: "Text Editor",
      href: "https://github.com/diogogomesaraujo/funk-txt",
      dates: "January 2025",
      active: true,
      description:
        "A fluid text editor written in C to learn more about systems programming threads and memory managment.",
      technologies: ["C", "Raylib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/funk-txt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/funk.gif",
    },
    {
      title: "Arithmetic Interpreter",
      href: "https://github.com/diogogomesaraujo/arith-ml-tic",
      dates: "January 2025",
      active: true,
      description:
        "A lightweight OCaml lexer and interpreter for arithmetic functions to consolidate what was learnt in Theory of Computation class.",
      technologies: ["OCaml", "Menhir"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/arith-ml-tic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interpreter.png",
    },
    {
      title: "OCaml Game",
      href: "https://github.com/diogogomesaraujo/ocaml-game",
      dates: "January 2024",
      active: true,
      description:
        "A simple Mr. Robot themed game made with Raylib in OCaml. Inspired by TJ Devries.",
      technologies: ["OCaml", "Raylib"],
      links: [
        {
          type: "Source",
          href: "https://github.com/diogogomesaraujo/ocaml-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/elliot.gif",
    },
  ],
  hackathons: [
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
      title: "Scrum Foundation Certificate",
      dates: "September, 2024",
      location: "Remote",
      description:
        "Gained comprehensive knowledge of Agile principles and Scrum framework, including sprint planning, daily standups, and retrospectives. Learned to effectively collaborate in cross-functional teams and manage product backlogs.",
      image: "logo-certiprof.png",
    },
    {
      title: "Robocup 2016 - Leipzig, Germany, Certificate of Participation",
      dates: "Summer, 2016",
      location: "On-Site",
      description:
        "Participating in RoboCup was a transformative childhood experience that ignited my enduring passion for technology and programming.",
      image: "robocup.png",
    },
  ],
} as const;
