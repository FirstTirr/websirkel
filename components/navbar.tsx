"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Enhanced smooth scroll function with debugging and fallbacks
const smoothScroll = (e: React.MouseEvent, href: string, router: any) => {
  // Handle same-page anchor links (e.g., "#home")
  if (href.startsWith("#")) {
    e.preventDefault();
    const targetId = href.replace("#", "");
    scrollToElement(targetId);
  }
  // Handle cross-page anchor links (e.g., "/#home")
  else if (href.includes("#")) {
    e.preventDefault();
    const [path, hash] = href.split("#");
    const currentPath = window.location.pathname;

    // If we're already on the target page, just scroll
    if (currentPath === path || (path === "/" && currentPath === "")) {
      scrollToElement(hash);
    }
    // Otherwise navigate and then scroll
    else {
      // Navigate to the page first
      router.push(path);

      // Then scroll after the page loads
      setTimeout(() => {
        scrollToElement(hash);
      }, 500); // Increased timeout for page load
    }
  }
  // Regular navigation handled by Next.js
};

// Helper function to scroll to an element by ID
function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn(`Element with ID "${id}" not found, can't scroll to it.`);
  }
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Updated navigation items - removed About Us, updated links
  const navItems = [
    {
      name: "Home",
      link: "/#home", // Changed to anchor link for the home section
    },
    {
      name: "Members",
      link: "/#members",
    },
    {
      name: "Our Hope",
      link: "/#hope", // This will navigate to the hope page
    },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/#home"
              className="flex items-center"
              onClick={(e) => smoothScroll(e, "/#home", router)}
            >
              <span className="text-xl font-bold text-white">
                <span className="text-blue-400">Titik</span> Kumpul Pemula
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <Link
                  key={`desktop-link-${idx}`}
                  href={item.link}
                  onClick={(e) => smoothScroll(e, item.link, router)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/30 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/80 backdrop-blur-lg overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                smoothScroll(e, item.link, router);
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
