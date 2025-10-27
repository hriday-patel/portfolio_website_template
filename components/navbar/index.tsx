"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [shadow, setShadow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
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
          width: shadow ? "50%" : "100%",
          y: shadow ? 10 : 0,
        }}
        className="fixed z-10 rounded-full inset-x-0 top-0 max-w-4xl mx-auto flex justify-between items-center p-2 md:p-4"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/ProfileImage.jpg"
          width={100}
          height={100}
          alt="Profile Image"
        />
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
