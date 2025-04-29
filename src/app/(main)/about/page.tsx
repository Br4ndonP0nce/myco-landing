"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
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
              About <span className="text-myco-primary">Myco Farms</span>
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              We're a pioneering biotech company specializing in the production
              of premium medicinal mushrooms with a focus on quality,
              sustainability, and scientific innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Our Story
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  Myco Farms was founded with a vision to produce the highest
                  quality medicinal mushrooms for pharmaceutical and
                  nutraceutical applications. We recognized a gap in the market
                  for transparent, standardized, and locally produced medicinal
                  mushroom products.
                </p>
                <p>
                  Starting with our flagship product, Lion's Mane, we've built a
                  state-of-the-art facility in Northern Ireland that adheres to
                  strict EU-GACP standards. This ensures our products meet the
                  rigorous requirements of the pharmaceutical industry.
                </p>
                <p>
                  Our team combines expertise in pharmaceutical science,
                  horticultural engineering, and sustainable agricultural
                  development to create a unique approach to medicinal mushroom
                  cultivation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-myco-primary/10 rounded-lg overflow-hidden">
                {/* Replace with actual company image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">Company facility image</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-myco-secondary rounded-full flex items-center justify-center shadow-lg">
                <div className="text-myco-dark text-center">
                  <div className="font-display text-2xl font-bold">2024</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-myco-cream px-10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Our Mission & Values
              </h2>
              <p className="text-lg text-myco-dark/70">
                The principles that guide our company and every mushroom we
                cultivate.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-myco-primary mb-4 font-display">
                Our Mission
              </h3>
              <p className="text-myco-dark/80 mb-4">
                To produce the highest quality medicinal mushrooms while
                fostering a culture of health and wellbeing where prevention is
                prioritized over cure.
              </p>
              <p className="text-myco-dark/80">
                We aim to be a leading producer of mushroom active
                pharmaceutical ingredients to the nutraceutical and
                pharmaceutical industries, with a focus on quality, safety, and
                sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-myco-primary mb-4 font-display">
                Our Values
              </h3>
              <ul className="space-y-3 text-myco-dark/80">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Quality:</strong> We adhere to stringent EU-GACP
                    standards to ensure pharmaceutical-grade products.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Transparency:</strong> We provide full traceability
                    from spore to final product.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Sustainability:</strong> Our cultivation methods
                    minimize environmental impact.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Innovation:</strong> We continuously research and
                    improve our methods.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Meet Our Team
              </h2>
              <p className="text-lg text-myco-dark/70">
                Led by experts in pharmaceutical science and agricultural
                development.
              </p>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-myco-cream p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-40 h-40 rounded-full bg-myco-primary/10 flex items-center justify-center shrink-0">
                {/* Replace with actual headshot */}
                <div className="text-myco-primary text-center">
                  <p>Photo</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-myco-primary font-display">
                  Tanya Barakat, MSc
                </h3>
                <p className="text-myco-secondary font-medium mb-2">
                  Founder & CEO
                </p>
                <p className="text-myco-dark/80 mb-4">
                  With over 7 years of experience in the pharmaceutical
                  industry, including work with Alvarius Pharmaceuticals and
                  consulting with several EU-GACP cannabis projects in the EU.
                  Tanya holds an MSc in Pharmaceutical Analysis and a BSc in
                  Biomedical Science.
                </p>
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-myco-primary hover:bg-myco-primary/10"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Advisors Section */}
      <section className="py-16 bg-myco-light px-5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Scientific Advisors
              </h2>
              <p className="text-lg text-myco-dark/70">
                Our research and development is supported by leading experts in
                mycology and pharmaceutical science.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-myco-primary/10 flex items-center justify-center mr-4 shrink-0">
                  {/* Replace with actual headshot */}
                  <div className="text-myco-primary text-center">
                    <p>Photo</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-myco-primary font-display">
                    Dr. Le Roy Dowey
                  </h3>
                  <p className="text-myco-dark/70 text-sm">
                    University of Ulster, Northern Ireland
                  </p>
                </div>
              </div>
              <p className="text-myco-dark/80 text-sm">
                After achieving his PhD in Nutritional Biochemistry from Ulster
                University in 2002, Le Roy gained significant expertise in
                research commercialization and business development. He now
                works at Ulster University as a Business Development Manager in
                their Biomedical Sciences Research Institute.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-myco-primary/10 flex items-center justify-center mr-4 shrink-0">
                  {/* Replace with actual headshot */}
                  <div className="text-myco-primary text-center">
                    <p>Photo</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-myco-primary font-display">
                    Dr. Klaas Riepma
                  </h3>
                  <p className="text-myco-dark/70 text-sm">
                    Phytopharma BV, Netherlands
                  </p>
                </div>
              </div>
              <p className="text-myco-dark/80 text-sm">
                Founder and owner pharmacist with more than three decades of
                expertise in the field. Dr. Riepma has been at the forefront of
                advancing a diverse range of successful liposomal products and
                applications, holding numerous liposomal administration patents
                and establishing several production facilities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-white px-5 md:px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Our Facility
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  Located just off the M1 Motorway at the Birches, Portadown,
                  our 4,615 sq. ft. facility is designed for maximum efficiency
                  and optimal growing conditions for medicinal mushrooms.
                </p>
                <p>
                  The facility is being upgraded to obtain EU-GACP and FSSC
                  22000 certification, ensuring we meet the highest standards
                  for pharmaceutical-grade mushroom production.
                </p>
                <p>
                  Our facility features multiple climate-controlled rooms with
                  integrated environmental controls and cultivation systems.
                  This design allows for a variety of strains and reduces
                  contamination risk through Good Manufacturing Practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-myco-primary/10 rounded-lg overflow-hidden">
                {/* Replace with actual facility image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">Facility image</p>
                </div>
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
              Join Us on Our Journey
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Whether you're interested in our products, partnership
              opportunities, or career possibilities, we'd love to connect with
              you.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-myco-primary hover:bg-white/90"
              >
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
