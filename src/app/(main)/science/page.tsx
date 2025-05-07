// src/app/(main)/science/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/utils";

const researchAreas = [
  {
    title: "Bioactive Compound Analysis",
    description:
      "We study the specific bioactive compounds in our mushrooms, including beta-glucans, triterpenoids, and other medicinal components.",
    icon: Microscope,
  },
  {
    title: "Substrate Optimization",
    description:
      "Our research develops substrate formulations designed to maximize bioactive compound production in each mushroom species.",
    icon: FileText,
  },
  {
    title: "Cultivation Techniques",
    description:
      "We continuously refine our growing methods to enhance mushroom quality, potency, and consistency.",
    icon: ExternalLink,
  },
];

const publications = [
  {
    title:
      "Optimization of Lion's Mane Growth Parameters for Enhanced Bioactive Compound Production",
    authors: "Redacted T., et al.",
    journal: "Journal of Medicinal Mushroom Research",
    year: "2023",
    link: "#",
  },
  {
    title:
      "Comparative Analysis of Beta-Glucan Content in Different Medicinal Mushroom Species",
    authors: "Redacted T., et al.",
    journal: "International Journal of Medicinal Fungi",
    year: "2022",
    link: "#",
  },
  {
    title:
      "Substrate Composition Influence on Hericenone and Erinacine Levels in Cultivated Hericium erinaceus",
    authors: "Redacted T., et al..",
    journal: "Journal of Functional Foods",
    year: "2021",
    link: "#",
  },
];

export default function SciencePage() {
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
              Science & <span className="text-myco-primary">Research</span>
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              Our research partnerships and scientific approach ensure we
              produce the highest quality medicinal mushrooms with optimal
              bioactive compound profiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Partnership Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Research Partnerships
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  We've partnered with Ulster University to conduct cutting-edge
                  research on medicinal mushrooms, focusing on maximizing
                  bioactive compounds and developing new cultivation techniques.
                </p>
                <p>
                  Our research is led by Dr. Le Roy Dowey, who brings
                  significant expertise in nutritional biochemistry and research
                  commercialization to our team.
                </p>
                <p>
                  Through our partnership with Phytopharma BV in the
                  Netherlands, we work with Dr. Klaas Riepma to develop
                  innovative delivery systems for mushroom compounds, enhancing
                  their bioavailability and efficacy.
                </p>
                <p>
                  These collaborations allow us to stay at the forefront of
                  medicinal mushroom science and continuously improve our
                  products.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="relative"
            >
              <div className="aspect-[4/3] bg-myco-primary/10 rounded-lg overflow-hidden">
                {/* Replace with actual research partnership image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Research partnership image
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-myco-cream px-10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Our Research Areas
              </h2>
              <p className="text-lg text-myco-dark/70">
                We focus our research on several key areas to continuously
                improve our cultivation methods and product quality.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full border-none shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center mb-4">
                      <area.icon className="h-6 w-6 text-myco-primary" />
                    </div>
                    <CardTitle className="text-xl font-display">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-myco-dark/80">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Behind Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                The Science Behind Our Mushrooms
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  Lion's Mane (Hericium erinaceus) contains unique compounds
                  called hericenones and erinacines that have shown
                  neuroprotective and cognitive-enhancing properties in
                  scientific studies.
                </p>
                <p>
                  Our research focuses on maximizing these compounds through
                  optimized growing conditions and substrate formulations. We
                  regularly test our mushrooms to ensure high levels of these
                  bioactive components.
                </p>
                <p>
                  Beyond hericenones and erinacines, our Lion's Mane also
                  contains beneficial beta-glucans, which support immune
                  function, and various antioxidants that contribute to overall
                  health.
                </p>
                <p>
                  For our upcoming Cordyceps cultivation, we're researching
                  methods to enhance cordycepin content, the key bioactive
                  compound associated with energy and endurance benefits.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-square bg-myco-primary/10 rounded-lg overflow-hidden">
                {/* Replace with actual science behind image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Science behind our mushrooms image
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-myco-light px-10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Our Publications
              </h2>
              <p className="text-lg text-myco-dark/70">
                Our team regularly publishes research findings in peer-reviewed
                scientific journals.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-myco-primary mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-myco-dark font-medium mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-myco-dark/70 text-sm mb-3">
                      {pub.journal} • {pub.year}
                    </p>
                    <Link
                      href={pub.link}
                      className="text-myco-primary hover:underline text-sm flex items-center"
                    >
                      View Publication
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Testing Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="relative"
            >
              <div className="aspect-video bg-myco-primary/10 rounded-lg overflow-hidden">
                {/* Replace with actual quality testing image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">Quality testing image</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Our Quality Testing
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  Every batch of our mushrooms undergoes rigorous testing to
                  ensure food-grade quality and potency.
                </p>
                <p>
                  We test for key bioactive compounds, including beta-glucans,
                  hericenones, and erinacines, to verify that our products meet
                  our high potency standards.
                </p>
                <p>
                  Safety testing is equally important - we screen for
                  contaminants including heavy metals, pesticides, microbial
                  contamination, and mycotoxins.
                </p>
                <p>
                  Our commitment to transparency means we provide detailed
                  certificates of analysis with our products, showing exactly
                  what's in each batch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-myco-primary text-white">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 font-display">
              Explore Our Products
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 px-2">
              Discover our premium medicinal mushrooms, grown with scientific
              precision for exceptional quality and potency.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-myco-primary hover:bg-white/90"
              >
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
