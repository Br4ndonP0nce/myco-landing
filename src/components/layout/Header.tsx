"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Navigation links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Science", href: "/science" },
  { label: "Cultivation", href: "/cultivation" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const navbarVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const scrolledNavbarVariants = {
    notScrolled: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      height: "80px",
      borderBottom: "1px solid rgba(62, 98, 89, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(12px)",
      height: "70px",
      borderBottom: "1px solid rgba(62, 98, 89, 0.1)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <>
      {/* Desktop Navbar - Sticky Top Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        initial="initial"
        animate="animate"
        variants={navbarVariants}
      >
        <motion.nav
          className="flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-300"
          initial="notScrolled"
          animate={isScrolled ? "scrolled" : "notScrolled"}
          variants={scrolledNavbarVariants}
        >
          {/* Logo */}
          <Link href="/" className="py-4">
            <span className="text-2xl font-bold text-myco-primary font-display">
              Myco Farms
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "transition-all duration-300 font-medium relative group",
                  pathname === link.href
                    ? "text-myco-primary"
                    : "text-myco-dark hover:text-myco-primary"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-myco-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "bg-myco-primary text-white hover:bg-myco-primary/90",
                "rounded-md px-5 py-2",
                "font-medium transition-colors duration-300"
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-myco-primary md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 z-40 flex flex-col items-center justify-center md:hidden pt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center space-y-6 w-full px-12">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.3 },
                  }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xl transition-colors font-medium block py-2",
                      pathname === link.href
                        ? "text-myco-primary"
                        : "text-myco-dark hover:text-myco-primary"
                    )}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                  <div className="h-px w-full bg-myco-primary/20 mt-6"></div>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 * navLinks.length, duration: 0.3 },
                }}
              >
                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className={cn(
                    "bg-myco-primary text-white hover:bg-myco-primary/90",
                    "rounded-md px-8 py-3",
                    "font-medium transition-colors duration-300 mt-4 inline-block"
                  )}
                >
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
