"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { NumberTicker } from "./magicui/number-ticker";

// Enhanced smooth scroll function copied from navbar
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

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-100 text-4xl">
                <span className="text-blue-400">Titik</span> Kumpul Pemula
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              A group of teenagers dedicated to developing their potential and
              innovating in the field of technology.
            </p>
          </div>

          {/* Navigation Section - Updated with smooth scroll */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-gray-400 hover:text-blue-400 transition"
                  onClick={(e) => smoothScroll(e, "/#home", router)}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#members"
                  className="text-gray-400 hover:text-blue-400 transition"
                  onClick={(e) => smoothScroll(e, "/#members", router)}
                >
                  Anggota
                </Link>
              </li>
              <li>
                <Link
                  href="/hope"
                  className="text-gray-400 hover:text-blue-400 transition"
                  onClick={(e) => smoothScroll(e, "/#hope", router)}
                >
                  Harapan
                </Link>
              </li>
            </ul>
          </div>

          {/* Achievements Section */}
          <div className="space-y-4">
            <h4 className="text-2xl font-medium text-center">
              Our Achievements
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold">
                  <NumberTicker
                    value={9}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-blue-400 dark:text-cyan-400"
                  />
                </p>
                <p className="text-xl text-gray-400">Active Members</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold">
                  <NumberTicker
                    value={2025}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-blue-400 dark:text-cyan-400"
                  />
                </p>
                <p className="text-xl text-gray-400">Year Formed</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold">
                  <NumberTicker
                    value={0}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-blue-500 dark:text-cyan-500"
                  />
                </p>
                <p className="text-xl text-gray-400">Joint Project</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-400 dark:text-cyan-400">
                  ∞
                </p>
                <p className="text-xl text-gray-400">Dreams & Hopes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Titik Kumpul Pemula Group. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
