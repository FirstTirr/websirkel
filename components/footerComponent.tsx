"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NumberTicker } from "./magicui/number-ticker";

export default function Footer() {
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
              Sekelompok remaja yang berdedikasi untuk mengembangkan
              potensi diri dan berinovasi dalam bidang teknologi.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Anggota
                </Link>
              </li>
              <li>
                <Link
                  href="/hope"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Harapan
                </Link>
              </li>
            </ul>
          </div>

          {/* Achievements Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Pencapaian Kami</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-400">
                  <NumberTicker
                    value={9}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                  />
                </p>
                <p className="text-xs text-gray-400">Anggota Aktif</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-400">
                  <NumberTicker
                    value={2025}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                  />
                </p>
                <p className="text-xs text-gray-400">Tahun Dibentuk</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-400">
                  <NumberTicker
                    value={0}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                  />
                </p>
                <p className="text-xs text-gray-400">Proyek Bersama</p>
              </div>
              <div className="bg-[#1a2233] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-blue-400">
                  <NumberTicker
                    value={1}
                    className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                  />
                </p>
                <p className="text-xs text-gray-400">Mimpi & Harapan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Titik Kumoul Pemula Group. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
