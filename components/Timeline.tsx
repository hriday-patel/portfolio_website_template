"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { motion } from "motion/react";

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  type Data = Array<{
    year: string;
    content: Array<{
      title: string;
      description: string;
    }>;
  }>;
  const data: Data = [
    {
      year: "2023",
      content: [
        {
          title: "Started My Journey",
          description:
            "Began my career as a software developer, focusing on building web applications and learning new technologies.",
        },
        {
          title: "First Major Project",
          description:
            "Successfully completed my first major web application project, implementing modern frameworks and best practices.",
        },
      ],
    },
    {
      year: "2024",
      content: [
        {
          title: "Joined Google",
          description:
            "Excited to join Google as a software developer, contributing to large-scale projects and enhancing my skills.",
        },
        {
          title: "Led Team Initiative",
          description:
            "Spearheaded a cross-functional team initiative that improved code quality and deployment processes across multiple projects.",
        },
      ],
    },
    {
      year: "2025",
      content: [
        {
          title: "Open Source Contributor",
          description:
            "Started contributing to open source projects, collaborating with developers worldwide and giving back to the community.",
        },
        {
          title: "Published Technical Articles",
          description:
            "Wrote and published technical articles sharing insights on modern development practices and architectural patterns.",
        },
      ],
    },
    {
      year: "2026",
      content: [
        {
          title: "Tech Conference Speaker",
          description:
            "Had the opportunity to speak at major tech conferences, sharing my knowledge and experiences with a broader audience.",
        },
        {
          title: "Mentorship Program",
          description:
            "Launched a mentorship program to guide junior developers and foster a culture of continuous learning and growth.",
        },
      ],
    },
    {
      year: "2027",
      content: [
        {
          title: "Promoted to Senior Developer",
          description:
            "Achieved a significant career milestone by being promoted to Senior Developer, leading projects and mentoring junior developers.",
        },
        {
          title: "Architected Cloud Solution",
          description:
            "Designed and implemented a scalable cloud infrastructure that reduced costs by 40% while improving performance.",
        },
      ],
    },
    {
      year: "2028",
      content: [
        {
          title: "Launched My Startup",
          description:
            "Took the leap to launch my own tech startup, focusing on innovative solutions and building a dedicated team.",
        },
        {
          title: "Secured Seed Funding",
          description:
            "Successfully raised seed funding from leading venture capital firms to accelerate product development and market expansion.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-10 flex flex-col gap-6">
      {data.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <motion.h2
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
              filter: inView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ duration: 0.5, delay: idx * 0.2, ease: "easeInOut" }}
            className="text-black dark:text-white font-bold tracking-tight"
          >
            {item.year}
          </motion.h2>
          <div className="pl-4 flex flex-col border-l-2 border-primary-dark dark:border-primary-light gap-6">
            {item.content.map((contentItem, contentIdx) => (
              <div key={contentIdx} className="flex flex-col gap-1">
                <h3 className="text-secondary-dark dark:text-secondary-light font-semibold tracking-tight text-xl">
                  {contentItem.title}
                </h3>
                <p className="text-base text-primary-dark dark:text-primary-light tracking-tight max-w-2xl">
                  {contentItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
