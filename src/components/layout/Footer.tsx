// src/components/layout/footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-myco-dark text-white flex flex-col items-center justify-center">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block ">
              <span className="text-2xl font-display font-bold text-myco-secondary">
                Myco Farms
              </span>
            </Link>
            <p className="text-sm text-gray-300">
              Premium medicinal mushroom cultivation, specializing in Lion's
              Mane with EU-GACP certification for pharmaceutical and
              nutraceutical applications.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-myco-secondary transition-colors"
                aria-label="Myco Farms on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-myco-secondary transition-colors"
                aria-label="Myco Farms on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-myco-secondary transition-colors"
                aria-label="Myco Farms on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-myco-secondary transition-colors"
                aria-label="Myco Farms on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold text-myco-secondary mb-5">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/science"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    Science & Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    B2B Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    News & Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-myco-secondary transition-colors inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-display font-bold text-myco-secondary mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-myco-secondary shrink-0 mt-0.5" />
                <span>30 Derrykeeran Road, Portadown, Northern Ireland</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-myco-secondary shrink-0" />
                <a
                  href="tel:+447850125787"
                  className="hover:text-myco-secondary transition-colors"
                >
                  +44 7850 125787
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-myco-secondary shrink-0" />
                <a
                  href="mailto:info@mycofarms.com"
                  className="hover:text-myco-secondary transition-colors"
                >
                  info@mycofarms.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-display font-bold text-myco-secondary mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on medicinal
              mushroom research and product launches.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus-visible:ring-myco-secondary text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-myco-secondary hover:bg-myco-secondary/90 text-myco-dark"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            <p>&copy; {currentYear} Myco Farms. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="hover:text-myco-secondary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-myco-secondary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-myco-secondary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
