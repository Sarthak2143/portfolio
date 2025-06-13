import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarthak Tomar",
  url: "https://sarthak2143.github.io",
  description:
    "19 year old wannabe hacker, very active on twitter.",
  summary:
    "First year copmputer science undergrad interested in deep learning, mathematics and linux. Mostly self taught. Learned a lot reading the internet, breaking things, and just playing around.",
  avatarUrl: "/me.png",
  skills: [
    "C/C++",
    "Rust",
    "Python",
    "Pytorch",
    "Go",
    "React",
    "Next.js",
    "Typescript",
    "Solidity",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Git",
    "Bash",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {href: "https://sarthak2143.bearblog.dev", icon: NotebookIcon, label: "Blog"},
  ],
  contact: {
    email: "sarthaktomar2143@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarthak2143",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarthak-tomar-0x314/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sarthak2143",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Stealth",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/stealth.png",
      href: "#",
      start: "May 2024",
      end: "Present",
      description: "",
    }
  ],
  hackathons: [
    {
      title: "HackIndia 8",
      dates: "May 11th - 13th, 2025",
      location: "New Delhi",
      description:
        "Devloped a decentralized web app for crowd funding for indie creators on the solana blockchain.",
      image:
        "/hackindia.jpg",
      links: [],
    },
  ],
} as const;
