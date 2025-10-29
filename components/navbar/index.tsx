"use client";

import { Link } from "next-view-transitions";
import Container from "../Container";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [shadow, setShadow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShadow(latest > 20);
  });

 
  const widthRaw = useTransform(
    scrollY,
    [0, 30, 60, 90, 120, 150],
    ["100%", "90%", "80%", "70%", "60%", "50%"]
  );
  const width = useSpring(widthRaw, {
    stiffness: 200,
    damping: 30,
    mass: 1,
  });

  
  const yRaw = useTransform(
    scrollY,
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
  const y = useSpring(yRaw, {
    stiffness: 200,
    damping: 30,
    mass: 1,
  });

  const navbarItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <Container>
      <motion.nav
        initial={false}
        animate={{
          boxShadow: shadow
            ? "0 3px 10px rgb(0,0,0,0.2)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
          backdropFilter: shadow ? "saturate(180%) blur(20px)" : "none",
        }}
        style={{
          width,
          y,
        }}
        transition={{
          boxShadow: { duration: 0.3, ease: "easeInOut" },
          backdropFilter: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed z-10 rounded-full inset-x-0 top-0 max-w-4xl w-full mx-auto flex justify-between items-center p-2 md:p-4"
      >
        <Link href={"/"}>
          <Image
            className="h-10 w-10 rounded-full"
            src="/ProfileImage.jpg"
            width={100}
            height={100}
            alt="Profile Image"
          />
        </Link>
        <div className="flex items-center">
          {navbarItems.map((item, idx) => (
            <motion.div
              key={idx}
              onHoverStart={() => setHover(idx)}
              onHoverEnd={() => setHover(null)}
            >
              <Link
                className="cursor-default px-2 py-1 relative"
                href={item.href}
              >
                <span
                  className={cn(
                    "relative text-base text-secondary-dark dark:text-secondary-light z-10",
                    {
                      "text-primary-light dark:text-primary-dark":
                        hover === idx,
                    }
                  )}
                >
                  {item.name}
                </span>
                {hover === idx && (
                  <motion.div
                    layoutId="hover-item"
                    className="absolute inset-0 h-full w-full rounded-full bg-primary-dark dark:bg-primary-light"
                  ></motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
export default Navbar;
