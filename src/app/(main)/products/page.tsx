// src/app/(main)/products/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, BadgeCheck, Leaf, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, fadeIn, staggerContainer } from "@/lib/utils";

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
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    status: "Available",
    slug: "lions-mane",
    featured: true,
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
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    status: "Coming Soon",
    slug: "cordyceps",
    featured: true,
  },
  {
    title: "Reishi",
    scientificName: "Ganoderma lucidum",
    description:
      "Revered for centuries as the 'mushroom of immortality'. Our Reishi cultivation is in development, focused on producing mushrooms with high triterpenoid content.",
    keyCompounds: [
      "Triterpenoids",
      "Polysaccharides",
      "Ganoderic acids",
      "Beta-glucans",
    ],
    applications: ["Immune modulation", "Stress reduction", "Sleep support"],
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    status: "In Development",
    slug: "reishi",
    featured: false,
  },
  {
    title: "Turkey Tail",
    scientificName: "Trametes versicolor",
    description:
      "Recognized for its powerful immune-supporting properties and antioxidant effects. Our Turkey Tail cultivation is in development.",
    keyCompounds: [
      "PSK (Polysaccharide-K)",
      "PSP (Polysaccharopeptide)",
      "Beta-glucans",
      "Polyphenols",
    ],
    applications: ["Immune support", "Antioxidant", "Digestive health"],
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    status: "Future Development",
    slug: "turkey-tail",
    featured: false,
  },
];

const formatList = (list: string[]) => {
  if (list.length === 1) return list[0];
  if (list.length === 2) return `${list[0]} and ${list[1]}`;
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`;
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-myco-light px-10">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myco-dark mb-6 font-display">
              Our <span className="text-myco-primary">Products</span>
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              Premium medicinal mushrooms cultivated with scientific precision
              for food and nutraceutical applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white  ">
        <div className="container">
          <Tabs defaultValue="all" className="w-full  ">
            <div className="flex justify-center mb-8  ">
              <TabsList className="bg-myco-light  ">
                <TabsTrigger value="all" className="text-[12px]">
                  All Products
                </TabsTrigger>
                <TabsTrigger value="available" className="text-[12px]">
                  Available Now
                </TabsTrigger>
                <TabsTrigger value="coming-soon" className="text-[12px]">
                  Coming Soon
                </TabsTrigger>
                <TabsTrigger value="development" className="text-[12px]">
                  In Development
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  px-5">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="available" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((product) => product.status === "Available")
                  .map((product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      index={index}
                    />
                  ))}
              </div>
              {products.filter((product) => product.status === "Available")
                .length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-myco-dark/60">
                    No products currently available in this category.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="coming-soon" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter((product) => product.status === "Coming Soon")
                  .map((product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      index={index}
                    />
                  ))}
              </div>
              {products.filter((product) => product.status === "Coming Soon")
                .length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-myco-dark/60">
                    No products currently available in this category.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products
                  .filter(
                    (product) =>
                      product.status === "In Development" ||
                      product.status === "Future Development"
                  )
                  .map((product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      index={index}
                    />
                  ))}
              </div>
              {products.filter(
                (product) =>
                  product.status === "In Development" ||
                  product.status === "Future Development"
              ).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-myco-dark/60">
                    No products currently available in this category.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16 bg-myco-cream  px-10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Our Quality Standards
              </h2>
              <p className="text-lg text-myco-dark/70">
                We maintain rigorous quality controls throughout our cultivation
                process to ensure food-grade products.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <BadgeCheck className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                EU-GACP Certification
              </h3>
              <p className="text-myco-dark/80 mb-4">
                Our facility is being upgraded to meet European Good
                Agricultural and Collection Practice standards, ensuring our
                products meet food-grade requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Complete traceability from spore to final product
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Rigorous quality controls at every step
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Comprehensive documentation system
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <FileText className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                Comprehensive Testing
              </h3>
              <p className="text-myco-dark/80 mb-4">
                Every batch of our mushrooms undergoes rigorous testing to
                ensure consistency, potency, and safety.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Bioactive compound analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Heavy metals and contaminant screening
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Microbial safety verification
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                Sustainable Production
              </h3>
              <p className="text-myco-dark/80 mb-4">
                Our cultivation methods minimize environmental impact while
                maximizing quality and potency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Resource-efficient growing methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Spent substrate recycling program
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Locally sourced materials when possible
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* B2B Services Section */}
      <section className="py-16 bg-white  px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                B2B Services
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  We provide premium medicinal mushrooms for food and
                  nutraceutical companies looking for consistent, high-quality
                  ingredients for their products.
                </p>
                <p>
                  Our EU-GACP certification ensures that our mushrooms meet the
                  rigorous standards required for food applications, while our
                  comprehensive testing guarantees potency and safety.
                </p>
                <p>
                  We can work with you to provide custom cultivation services
                  tailored to your specific requirements, ensuring you receive
                  exactly what you need for your formulations.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-myco-primary mb-4">
                  Our B2B Offerings
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-myco-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-myco-dark">
                        Bulk Dried Mushrooms
                      </h4>
                      <p className="text-sm text-myco-dark/70">
                        Premium quality dried medicinal mushrooms in bulk
                        quantities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-myco-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-myco-dark">
                        Custom Cultivation
                      </h4>
                      <p className="text-sm text-myco-dark/70">
                        Tailored cultivation services to meet your specific
                        requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-myco-primary mr-3 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-myco-dark">
                        Quality Assurance
                      </h4>
                      <p className="text-sm text-myco-dark/70">
                        Comprehensive testing and certification for all
                        products.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/services">
                    <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
                      Learn More About Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-myco-primary/10 rounded-2xl overflow-hidden">
                {/* Replace with actual B2B services image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">B2B services image</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-myco-secondary rounded-full flex items-center justify-center shadow-lg">
                <div className="text-myco-dark text-center">
                  <div className="font-display text-2xl font-bold">B2B</div>
                  <div className="text-sm">Partner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Collaboration Section */}
      <section className="py-16 bg-myco-light  px-5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square bg-myco-primary/10 rounded-2xl overflow-hidden">
                {/* Replace with actual research image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Research collaboration image
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Research Collaboration
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  We're committed to advancing the scientific understanding of
                  medicinal mushrooms and their bioactive compounds through
                  collaborative research.
                </p>
                <p>
                  Our partnership with Ulster University focuses on optimizing
                  cultivation methods to enhance bioactive compound production
                  in Lion's Mane mushrooms.
                </p>
                <p>
                  We're interested in exploring new research partnerships that
                  align with our mission of producing premium medicinal
                  mushrooms with optimal bioactive content.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/science">
                  <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
                    Learn About Our Research
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-myco-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-display">
              Interested in Our Products?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Contact us to discuss how our premium medicinal mushrooms can
              enhance your products or to learn more about our cultivation
              process.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-myco-primary hover:bg-white/90"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Product Card Component
const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all">
        <div className="relative aspect-video bg-myco-primary/10 overflow-hidden">
          {/* Replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
            <p className="text-lg font-medium">{product.title} image</p>
          </div>
          <div
            className={cn(
              "absolute top-4 right-4 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full",
              product.status === "Available"
                ? "bg-green-500 text-white"
                : product.status === "Coming Soon"
                ? "bg-amber-500 text-white"
                : "bg-myco-dark/70 text-white"
            )}
          >
            {product.status}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-myco-primary">
            {product.title}
          </CardTitle>
          <p className="text-sm text-myco-dark/60 italic">
            {product.scientificName}
          </p>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-myco-dark/80 mb-4">{product.description}</p>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-myco-primary mb-2">
                Key Bioactive Compounds:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.keyCompounds.map((compound: string) => (
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
                {product.applications.map((application: string) => (
                  <span
                    key={application}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-myco-secondary/10 text-myco-accent"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-4 mt-auto">
          <Link href={`/products/${product.slug}`} className="w-full">
            <Button
              variant={product.status === "Available" ? "default" : "outline"}
              className={cn(
                "w-full",
                product.status === "Available"
                  ? "bg-myco-primary text-white hover:bg-myco-primary/90"
                  : "border-myco-primary text-myco-primary hover:bg-myco-primary/10"
              )}
            >
              {product.status === "Available" ? "View Details" : "Learn More"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
