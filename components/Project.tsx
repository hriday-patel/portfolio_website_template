"use client";

import Image from "next/image";
import { Playfair } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Paragraph from "./Paragraph";
import { usePathname } from "next/navigation";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

type ProjectType = {
  title: string;
  desc: string;
  href: string;
  src: string;
};

const Project = ({ projects }: { projects: ProjectType[] }) => {
  let projectsArr;
  let grid;
  const routing = usePathname();
  if (routing?.includes("projects")) {
    projectsArr = projects;
    grid = "grid-cols-1 md:grid-cols-2";
  } else {
    projectsArr = projects.slice(0, 3);
    grid = "grid-cols-1 md:grid-cols-3";
  }
  return (
    <div className="py-10">
      <Paragraph>
        I love building and managing projects that solve real-world problems and
        impact millions of users. Here are some of my recent works:
      </Paragraph>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-4 py-10 w-full",
          grid
        )}
      >
        {projectsArr.map((project, idx) => (
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
            <Link
              className="cursor-default"
              href={project.href}
              target="_blank"
            >
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
