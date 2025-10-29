"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Paragraph = ({
  as: Component = "p",
  children,
  className,
}: {
  as?: "p";
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
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2
      }}
    >
      <Component
        className={cn(
          "text-base pt-4 text-secondary-dark dark:text-secondary-light max-w-lg",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
};
export default Paragraph;
