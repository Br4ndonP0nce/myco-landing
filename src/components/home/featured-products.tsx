"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    title: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    description:
      "Known for its cognitive benefits and neuroprotective properties. Our Lion's Mane mushrooms are grown in controlled environments to maximize bioactive compounds.",
    keyCompounds: [
      "Erinacines",
      "Hericenones",
      "Beta-glucans",
      "Polysaccharides",
    ],
    applications: [
      "Neuroprotection",
      "Cognitive enhancement",
      "Immune support",
    ],
    image: "/placeholder-mushroom.jpg",
    status: "Available",
    slug: "lions-mane",
  },
  {
    title: "Cordyceps",
    scientificName: "Cordyceps militaris",
    description:
      "Valued for energy, endurance, and respiratory health benefits. Our Cordyceps cultivation is coming soon, with strict quality standards for optimal bioactive content.",
    keyCompounds: ["Cordycepin", "Adenosine", "Polysaccharides", "Ergosterol"],
    applications: [
      "Energy & stamina",
      "Respiratory health",
      "Anti-inflammatory",
    ],
    image: "/placeholder-mushroom.jpg",
    status: "Coming Soon",
    slug: "cordyceps",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-myco-cream px-5 flex flex-col items-center justify-center ">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-myco-dark mb-4 font-display">
              Our Premium <span className="text-myco-primary">Mushrooms</span>
            </h2>
            <p className="text-lg text-myco-dark/70">
              Medicinal mushrooms cultivated with precision for exceptional
              quality and potency.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden group border-none shadow-md hover:shadow-xl transition-all">
                <div className="relative aspect-video bg-myco-dark/10 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-myco-primary text-lg font-medium">
                      {product.title} image
                    </p>
                  </div>

                  {product.status === "Coming Soon" && (
                    <div className="absolute top-4 right-4 bg-myco-dark/90 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Coming Soon
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-display text-myco-primary">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="italic text-myco-dark/60">
                    {product.scientificName}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-myco-dark/80">{product.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-myco-primary mb-2">
                      Key Bioactive Compounds:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.keyCompounds.map((compound) => (
                        <span
                          key={compound}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-myco-primary/10 text-myco-primary"
                        >
                          {compound}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-myco-primary mb-2">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((application) => (
                        <span
                          key={application}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-myco-secondary/10 text-myco-accent"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <Separator className="mx-6" />

                <CardFooter className="pt-6">
                  <Link href={`/products/${product.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-myco-primary text-myco-primary hover:bg-myco-primary hover:text-white group-hover:bg-myco-primary group-hover:text-white transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/products">
              <Button
                size="lg"
                className="bg-myco-primary hover:bg-myco-primary/90 text-white"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
