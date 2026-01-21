"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About & Services", href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between w-full">
          {/* LEFT → LOGO */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* CENTER → TITLE (DESKTOP ONLY) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <h1 className="text-lg font-bold text-primary whitespace-nowrap">
              HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP
            </h1>
          </div>

          {/* RIGHT → NAVIGATION ONLY */}
          <div className="flex items-center">
            {/* DESKTOP NAVIGATION - RIGHT END */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
