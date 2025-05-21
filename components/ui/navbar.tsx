"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Track which section is currently in viewport
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections by their IDs
      const sections = navItems.map((item) => {
        // Extract section ID from the link (assuming links are like "#section-id")
        const sectionId = item.link.replace("#", "");
        const element = document.getElementById(sectionId);
        return { id: sectionId, element };
      });

      // Find the section that's currently most visible in the viewport
      let currentSection = "";
      let maxVisibility = 0;

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // If this section has more visible area than previous max, set as current
          if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex h-50 max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-3 px-8 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          // Extract section ID from the link (assuming links are like "#section-id")
          const sectionId = navItem.link.replace("#", "");
          const isActive = sectionId === activeSection;
          
          return (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 transition-colors duration-200",
                isActive 
                  ? "text-blue-400 dark:text-blue-400" 
                  : "text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">
                <p className="font-primary">{navItem.icon}</p>
              </span>
              <span className="hidden sm:block text-sm">
                <p className="font-primary">{navItem.name}</p>
              </span>
              
              {/* Active indicator dot/line */}
              {isActive && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};