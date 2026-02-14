"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cake } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "How to Order", href: "#how-to-order" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("#")}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`p-2 rounded-full ${
                  isScrolled ? "bg-[var(--rose)]" : "bg-white/20 backdrop-blur-sm"
                } transition-colors duration-300`}
              >
                <Cake
                  className={`w-6 h-6 ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)] ${
                    isScrolled ? "text-[var(--text-dark)]" : "text-white"
                  } transition-colors duration-300 drop-shadow-md`}
                >
                  Nabiha Fatima
                </span>
                <span
                  className={`text-xs sm:text-sm tracking-widest uppercase ${
                    isScrolled ? "text-[var(--rose)]" : "text-white/90"
                  } transition-colors duration-300`}
                >
                  Baking Studio
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-[var(--text-light)] hover:text-[var(--rose)]"
                      : "text-white/90 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="https://wa.me/923292159108?text=Hi%20I%20would%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--rose)] hover:bg-[var(--rose-dark)] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-2 rounded-full ${
                isScrolled ? "bg-[var(--blush)]" : "bg-white/20 backdrop-blur-sm"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? "text-[var(--text-dark)]" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? "text-[var(--text-dark)]" : "text-white"
                  }`}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-lg font-medium text-[var(--text-dark)] hover:text-[var(--rose)] py-2 border-b border-[var(--blush)]"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="https://wa.me/923292159108?text=Hi%20I%20would%20like%20to%20order%20a%20cake"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[var(--rose)] hover:bg-[var(--rose-dark)] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md mt-4"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
