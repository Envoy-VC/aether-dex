"use client";

import Image from "next/image";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import LogoText from "public/assets/logo-text.svg";

import { inRange } from "@/helpers";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    id: "about",
    link: "#about",
    name: "About",
  },
  {
    id: "features",
    link: "#features",
    name: "Features",
  },
  {
    id: "demo",
    link: "#demo",
    name: "Demo",
  },
  {
    id: "faq",
    link: "#faq",
    name: "FAQ",
  },
];

export const Navbar = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log("current");
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? current);

      if (inRange(scrollYProgress.get(), 0, 0.1)) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        className="gradient-wrapper fixed inset-x-0 top-8 z-[5000] mx-auto w-full max-w-[64rem] p-[1px]"
        initial={{
          opacity: 1,
          y: -100,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div
          className={cn(
            "flex flex-row items-center justify-between gap-5 bg-card px-6 py-4 backdrop-blur-[12px]",
            className,
          )}
        >
          <Image
            alt="Logo"
            className="w-[10rem]"
            height={100}
            src={LogoText}
            width={100}
          />
          <div className="flex flex-row items-center justify-around gap-6">
            {navLinks.map((link) => {
              return (
                <a
                  className="cursor-pointer font-geist-mono font-medium text-lg"
                  href={link.link}
                  key={link.id}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="relative">
            <button
              className="btn-gradient h-12 w-[12rem] cursor-pointer border border-border font-geist-mono font-semibold"
              type="button"
            >
              Coming Soon
            </button>
            <div className="absolute top-0 right-0 size-3 border-[#FB9B00] border-t border-r"></div>
            <div className="absolute right-0 bottom-0 size-3 border-[#FB9B00] border-r border-b"></div>
            <div className="absolute top-0 left-0 size-3 border-[#FB9B00] border-t border-l"></div>
            <div className="absolute bottom-0 left-0 size-3 border-[#FB9B00] border-b border-l"></div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
