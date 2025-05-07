"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-myco-light to-myco-cream pt-20 pb-32 flex flex-col items-center justify-center text-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-10 bg-mycelium-texture bg-repeat"></div>

      {/* Animated spores/circles */}

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-myco-dark mb-6 font-display ">
              Cultivating <span className="text-myco-primary">Wellness</span>{" "}
              Through Nature
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-myco-dark/80 mb-8 max-w-2xl mx-auto text-balance">
              Premium medicinal mushroom cultivation, specializing in Lion's
              Mane with FSA certification for food and nutraceutical
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="bg-myco-primary hover:bg-myco-primary/90 text-white"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-myco-primary text-myco-primary hover:bg-myco-primary/10"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="relative mx-auto w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] bg-myco-primary/20 rounded-xl overflow-hidden">
                {/* Replace with actual image - placeholder for now */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Mushroom cultivation image
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
