import projectImage from "@/assets/images/project-1.jpg";
import projectImage2 from "@/assets/images/project-2.jpg";
import projectImage3 from "@/assets/images/project-3.jpg";
import projectImage4 from "@/assets/images/project-4.jpg";
import projectImage5 from "@/assets/images/project-5.jpg";
export type ProjectProps = {
  title: string;
  list: string[];
  period: string;
  role: string;
  client: string | null;
  src: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    title: "AegisHealth Smart",
    list: [
      "Developed frontend for a health and wellness platform designed to empower individual to take control of their wellbeing.",
    ],
    client: null,
    link: "https://aegis-health-smart.vercel.app",
    period: "December 2023 - March 2024",
    role: "Front-end Developer",
    src: projectImage,
  },
  {
    title: "TextIt",
    list: [
      "Developed a simple and intuitive chatting app designed to facillitate seamless communication between users. This web application provides a real-time messaging platform to connect, share thoughts, and engage conversations.",
    ],
    client: null,
    link: "https://textit.vercel.app/",
    period: "June 2023 - August 2023",
    role: "Front-end Developer",
    src: projectImage2,
  },
  {
    title: "Trading App",
    list: [
      "Developed a web-based platform to stimulate stock trading and provide users with a realistic trading experiencd.",
    ],
    client: null,
    link: "https://trading-app-snowy.vercel.app",
    period: "December 2024 - January 2025",
    role: "Front-end Developer",
    src: projectImage3,
  },
  {
    title: "StarkHub",
    list: [
      "Developed frontend for a AI-powered chat agent on Starknet.",
    ],
    client: null,
    link: "https://stark-hub.vercel.app",
    period: "January 2024 - February 2025",
    role: "Front-end Developer",
    src: projectImage4,
  },
  {
    title: "Ecommerce Website",
    list: [
      "Developed frontend for a sleek and modern online shopping platform designed to provide a seamless and intuitive user experience.",
    ],
    client: null,
    link: "https://nox-ecommerce-website.vercel.app",
    period: "January 2023 - May 2025",
    role: "Front-end Developer",
    src: projectImage5,
  },
];
