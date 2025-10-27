"use client";

import Image from "next/image";
import { Playfair } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { desc } from "motion/react-client";
import Link from "next/link";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Project = () => {
  const projects = [
    {
      title: "Stipple - A Social Media App",
      src: "/project1.png",
      href: "#",
      desc: "A social media application that allows users to connect, share content, and engage with a community through posts, comments, and likes.",
    },
    {
      title: "Meow - A Chat Application",
      src: "/project2.png",
      href: "#",
      desc: "A real-time chat application enabling users to communicate instantly through text messages, multimedia sharing, and group conversations.",
    },
    {
      title: "Stock Management System",
      src: "/project3.png",
      href: "#",
      desc: "A comprehensive stock management system designed to track inventory levels, manage orders, and streamline supply chain operations for businesses.",
    },
    {
      title: "Travel Blog Website",
      src: "/project4.png",
      href: "#",
      desc: "A travel blog website where users can share their travel experiences, tips, and photos, as well as discover new destinations and itineraries.",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-base pt-4 text-secondary-dark dark:text-secondary-light max-w-lg">
        I love building and managing projects that solve real-world problems and
        impact millions of users. Here are some of my recent works:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 w-full">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              scale: 0.9,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="overflow-hidden group rounded-xl"
            key={idx}
          >
            <Link className="cursor-default" href={project.href} target="_blank">
              <Image
                className="w-full hover:scale-[1.02] group-hover:blur-[2px] transition duration-200 h-auto aspect-auto rounded-xl object-cover"
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
              />
              <div
                className={cn(
                  "text-black dark:text-white text-base tracking-tight font-bold z-20 pt-2"
                )}
              >
                {project.title}
              </div>
              <p className="line-clamp-2 text-base pt-2 text-secondary-dark dark:text-secondary-light max-w-sm">
                {project.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Project;
