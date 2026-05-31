import { useEffect, useState } from "react";

/**
 * Custom Hook: useScrollSpy
 * Tracks which section is currently visible on screen
 */
export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Loop through sections from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Check if current scroll position is inside section
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Run once on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

/**
 * Smoothly scroll to a section
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);

  if (section) {
    const top = section.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};