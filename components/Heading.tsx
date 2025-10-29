"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Heading = ({
  as: Component = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Component
        className={cn(
          "text-2xl drop-shadow-lg md:text-4xl font-bold tracking-tight text-primary-dark dark:text-primary-light",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
};
export default Heading;
