// src/app/(main)/cultivation/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Droplets,
  Thermometer,
  LightbulbIcon,
  Wind,
  LineChart,
  Recycle,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CultivationPage() {
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
              Our <span className="text-myco-primary">Cultivation</span> Process
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              Precision-controlled environments and scientifically optimized
              cultivation methods ensure we produce medicinal mushrooms with
              consistent potency and exceptional quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultivation Overview Section */}
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
                Precision Cultivation Technology
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  At Myco Farms, our cultivation process combines ancient wisdom
                  with modern technology. We've developed a precise, controlled
                  approach that ensures consistently high-quality medicinal
                  mushrooms with optimal bioactive compound profiles.
                </p>
                <p>
                  Our climate-controlled growing chambers allow us to fine-tune
                  every environmental parameter—temperature, humidity, air flow,
                  light exposure, and CO₂ levels—creating ideal conditions for
                  each mushroom species we cultivate.
                </p>
                <p>
                  Every step of our cultivation process adheres to strict
                  EU-GACP standards, ensuring our products meet the rigorous
                  requirements of the pharmaceutical industry.
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-myco-primary/10 rounded-2xl overflow-hidden">
                {/* Replace with actual cultivation facility image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Cultivation facility image
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-myco-secondary rounded-full flex items-center justify-center shadow-lg">
                <div className="text-myco-dark text-center">
                  <div className="font-display text-2xl font-bold">EU-GACP</div>
                  <div className="text-sm">Standards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultivation Process Steps */}
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
                Our Cultivation Process
              </h2>
              <p className="text-lg text-myco-dark/70">
                From spore to harvest, each step is carefully controlled to
                ensure optimal growth and bioactive compound production.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div variants={item}>
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-myco-primary/70 flex items-center justify-center text-white font-bold text-xl -mt-2 -ml-2 z-10 ">
                  1
                </div>
                <Card className="h-full border-none shadow-md pt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-myco-primary">
                      Substrate Preparation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-myco-dark/80">
                      We carefully select and blend premium ingredients to
                      create the perfect growing substrate for each mushroom
                      species, optimized for bioactive compound production.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Leaf className="h-12 w-12 text-myco-primary/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={item}>
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-myco-primary/70  flex items-center justify-center text-white font-bold text-xl -mt-2 -ml-2 z-10">
                  2
                </div>
                <Card className="h-full border-none shadow-md pt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-myco-primary">
                      Inoculation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-myco-dark/80">
                      In our clean room facility, we introduce carefully
                      selected mushroom cultures to the sterilized substrate
                      under strict contamination controls.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Droplets className="h-12 w-12 text-myco-primary/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={item}>
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-myco-primary/70  flex items-center justify-center text-white font-bold text-xl -mt-2 -ml-2 z-10">
                  3
                </div>
                <Card className="h-full border-none shadow-md pt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-myco-primary">
                      Incubation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-myco-dark/80">
                      The inoculated substrate is moved to our
                      climate-controlled incubation rooms, where the mycelium
                      colonizes the substrate under carefully monitored
                      conditions.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Thermometer className="h-12 w-12 text-myco-primary/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={item}>
              <div className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-myco-primary/70  flex items-center justify-center text-white font-bold text-xl -mt-2 -ml-2 z-10">
                  4
                </div>
                <Card className="h-full border-none shadow-md pt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-myco-primary">
                      Fruiting & Harvest
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-myco-dark/80">
                      When colonization is complete, we adjust environmental
                      conditions to trigger fruiting. Mushrooms are harvested at
                      peak bioactive content and carefully dried.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <LightbulbIcon className="h-12 w-12 text-myco-primary/30" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Controls Section */}
      <section className="py-16 bg-white px-5 flex flex-col items-center justify-center ">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Environmental Controls
              </h2>
              <p className="text-lg text-myco-dark/70">
                Our state-of-the-art facility precisely controls all
                environmental parameters to create optimal growing conditions.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="temperature" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="temperature" className="flex items-center">
                <Thermometer className="h-4 w-4 mr-2" />
                Temperature
              </TabsTrigger>
              <TabsTrigger value="humidity" className="flex items-center">
                <Droplets className="h-4 w-4 mr-2" />
                Humidity
              </TabsTrigger>
              <TabsTrigger value="airflow" className="flex items-center">
                <Wind className="h-4 w-4 mr-2" />
                Air Flow
              </TabsTrigger>
              <TabsTrigger value="light" className="flex items-center">
                <LightbulbIcon className="h-4 w-4 mr-2" />
                Light
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="temperature"
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-myco-primary font-display">
                  Temperature Control
                </h3>
                <p className="text-myco-dark/80">
                  Different mushroom species thrive in specific temperature
                  ranges. Our climate control systems maintain consistent
                  temperatures with precision down to ±0.5°C, ensuring optimal
                  growth and bioactive compound production.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Mushroom Temperature Needs
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          Lion's Mane: 18-24°C (65-75°F) for optimal growth
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          Reishi: 20-30°C (68-86°F) during colonization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>Cordyceps: 21-25°C (70-77°F) for fruiting</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Our Technology
                    </h4>
                    <p className="text-myco-dark/80 mb-4">
                      Our climate control systems include:
                    </p>
                    <ul className="space-y-2 text-myco-dark/80">
                      <li>• Precision digital temperature controllers</li>
                      <li>• Multi-zone heating and cooling</li>
                      <li>
                        • Constant monitoring with alerts for any deviations
                      </li>
                      <li>• Data logging for quality assurance</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-myco-primary mb-3">
                    Temperature Cycling
                  </h4>
                  <p className="text-myco-dark/80 mb-4">
                    For some species, we implement temperature cycling—strategic
                    temperature changes that trigger increased production of
                    beneficial compounds, mimicking natural environmental
                    fluctuations.
                  </p>
                  <div className="h-40 bg-myco-primary/10 rounded-lg flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-myco-primary/50" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="humidity"
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-myco-primary font-display">
                  Humidity Control
                </h3>
                <p className="text-myco-dark/80">
                  Precise humidity control is essential for mushroom
                  cultivation. Our systems maintain optimal relative humidity
                  levels for each species and growth stage, using ultrasonic
                  humidifiers and dehumidification systems.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Humidity Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          Colonization phase: 65-75% relative humidity
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>Fruiting phase: 85-95% relative humidity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>Avoiding condensation on growing surfaces</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Humidity Technology
                    </h4>
                    <p className="text-myco-dark/80 mb-4">
                      Our humidity control systems include:
                    </p>
                    <ul className="space-y-2 text-myco-dark/80">
                      <li>• Ultrasonic humidifiers with pure water</li>
                      <li>• Automated dehumidification systems</li>
                      <li>• Condensation prevention measures</li>
                      <li>
                        • Multiple humidity sensors for consistent readings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="airflow"
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-myco-primary font-display">
                  Air Flow Control
                </h3>
                <p className="text-myco-dark/80">
                  Proper air exchange and flow are critical for mushroom
                  development and preventing contamination. Our systems manage
                  CO₂ levels and provide gentle, consistent air movement
                  throughout our growing rooms.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Air Flow Importance
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          CO₂ reduction during fruiting (below 1000 ppm)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>Prevention of stagnant air zones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          Gentle movement to strengthen mushroom development
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Air Flow Systems
                    </h4>
                    <p className="text-myco-dark/80 mb-4">
                      Our ventilation systems include:
                    </p>
                    <ul className="space-y-2 text-myco-dark/80">
                      <li>• HEPA-filtered fresh air intake</li>
                      <li>• Laminar flow systems in critical areas</li>
                      <li>• CO₂ monitoring and control</li>
                      <li>
                        • Positive pressure rooms to prevent contamination
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="light" className="bg-myco-light p-6 rounded-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-myco-primary font-display">
                  Light Control
                </h3>
                <p className="text-myco-dark/80">
                  While mushrooms don't photosynthesize like plants, light still
                  plays a crucial role in their development. Our lighting
                  systems provide species-specific light spectrums and cycles to
                  trigger proper fruiting and development.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Light Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>Lion's Mane: Indirect light during fruiting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          Reishi: Low light levels throughout development
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>12-hour light/dark cycles for most species</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-myco-dark mb-4">
                      Lighting Technology
                    </h4>
                    <p className="text-myco-dark/80 mb-4">
                      Our lighting systems include:
                    </p>
                    <ul className="space-y-2 text-myco-dark/80">
                      <li>• Full-spectrum LED lighting</li>
                      <li>• Programmable light cycles</li>
                      <li>• Light intensity controls</li>
                      <li>
                        • UV-enriched spectrums to enhance vitamin D production
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-myco-cream px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-video bg-white rounded-lg p-8 shadow-md">
                <div className="h-20 bg-myco-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {/* Replace with actual lab image */}
                  <div className="text-myco-primary text-xl font-bold">
                    Quality Assurance Lab
                  </div>
                </div>
                <h3 className="text-xl font-bold text-myco-primary mb-2">
                  Comprehensive Testing
                </h3>
                <p className="text-myco-dark/80">
                  Every batch of our mushrooms undergoes rigorous testing for:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="text-myco-dark/80">
                      Bioactive compound content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="text-myco-dark/80">Microbial safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="text-myco-dark/80">Heavy metals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="text-myco-dark/80">
                      Pesticides and mycotoxins
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                      ✓
                    </span>
                    <span className="text-myco-dark/80">Moisture content</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-myco-dark font-display">
                  Quality Assurance
                </h2>
                <p className="text-myco-dark/80">
                  Our commitment to quality extends throughout our entire
                  process. From substrate preparation to final product testing,
                  we maintain rigorous quality controls that exceed industry
                  standards.
                </p>
                <p className="text-myco-dark/80">
                  Every batch of our mushrooms undergoes comprehensive testing
                  for bioactive compound content, ensuring consistent potency
                  and efficacy. We also test for contaminants, heavy metals, and
                  microbial safety.
                </p>
                <p className="text-myco-dark/80">
                  Our EU-GACP certification requires meticulous documentation of
                  every step in our process, providing complete traceability
                  from spore to final product.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
                  <h3 className="text-xl font-bold text-myco-primary mb-4">
                    Certifications & Standards
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-myco-primary/10 flex items-center justify-center mr-4">
                        <span className="text-myco-primary font-bold">EU</span>
                      </div>
                      <div>
                        <h4 className="font-medium">EU-GACP</h4>
                        <p className="text-sm text-myco-dark/60">
                          Good Agricultural and Collection Practice
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-myco-primary/10 flex items-center justify-center mr-4">
                        <span className="text-myco-primary font-bold">ISO</span>
                      </div>
                      <div>
                        <h4 className="font-medium">ISO 22000</h4>
                        <p className="text-sm text-myco-dark/60">
                          Food Safety Management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Sustainable Cultivation
              </h2>
              <p className="text-lg text-myco-dark/70">
                Our commitment to sustainability informs every aspect of our
                cultivation process.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <Recycle className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                Resource Efficiency
              </h3>
              <p className="text-myco-dark/80">
                Our cultivation methods use significantly less water, land, and
                energy compared to traditional agriculture. Mushrooms are one of
                the most resource-efficient protein sources available.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    95% water reduction vs. plant agriculture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Vertical growing reduces land footprint
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Energy-efficient LED lighting systems
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                Sustainable Materials
              </h3>
              <p className="text-myco-dark/80">
                We carefully select substrate materials with sustainability in
                mind, focusing on renewable resources and agricultural
                byproducts.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Locally sourced agricultural byproducts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Biodegradable growing containers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Eco-friendly packaging materials
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-myco-light p-6 rounded-xl"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <BadgeCheck className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                Zero Waste Production
              </h3>
              <p className="text-myco-dark/80">
                Our circular production system ensures that nothing goes to
                waste. Spent mushroom substrate becomes a valuable resource for
                agriculture and landscaping.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Spent substrate used as nutrient-rich compost
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Water recycling and filtration systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span className="text-myco-dark/80">
                    Heat recovery from climate control systems
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Innovation Section */}
      <section className="py-16 bg-myco-cream px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-6 font-display">
                Future Innovations
              </h2>
              <div className="space-y-4 text-myco-dark/80">
                <p>
                  We're continuously researching and developing new cultivation
                  techniques to improve our mushroom quality and production
                  efficiency.
                </p>
                <p>
                  Our partnership with Ulster University focuses on developing
                  innovative substrate formulations designed to enhance
                  bioactive compound production in medicinal mushrooms.
                </p>
                <p>
                  We're also exploring advanced automation and monitoring
                  systems to further optimize our growing conditions and
                  increase production efficiency while maintaining our
                  commitment to quality.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-myco-primary mb-2">
                    Research Focus
                  </h3>
                  <ul className="space-y-1 text-sm text-myco-dark/80">
                    <li>• Substrate optimization</li>
                    <li>• Bioactive content enhancement</li>
                    <li>• Energy efficiency improvements</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-myco-primary mb-2">
                    Technology Development
                  </h3>
                  <ul className="space-y-1 text-sm text-myco-dark/80">
                    <li>• AI-powered environmental controls</li>
                    <li>• Automated harvest systems</li>
                    <li>• Precision monitoring equipment</li>
                  </ul>
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
                {/* Replace with actual innovation/research image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Research & innovation image
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm Tours Section */}
      <section className="py-16 bg-white px-5 md:px-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
                Visit Our Facility
              </h2>
              <p className="text-lg text-myco-dark/70">
                Experience our cultivation process firsthand with a guided tour
                of our facility.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto bg-myco-light p-8 rounded-xl shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-myco-primary mb-4">
                  Farm Tours
                </h3>
                <p className="text-myco-dark/80 mb-4">
                  We offer guided tours of our cultivation facility for
                  businesses, educational groups, and interested individuals.
                  Learn about our innovative cultivation methods and see our
                  mushrooms at various growth stages.
                </p>
                <p className="text-myco-dark/80 mb-6">
                  Tours are available by appointment only and must be scheduled
                  in advance due to our strict biosecurity protocols.
                </p>

                <Link href="/contact">
                  <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
                    Schedule a Tour
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-myco-primary mb-2">
                    Tour Includes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                        ✓
                      </span>
                      <span className="text-myco-dark/80">
                        Overview of our cultivation process
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                        ✓
                      </span>
                      <span className="text-myco-dark/80">
                        Viewing of our growing rooms (from observation windows)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                        ✓
                      </span>
                      <span className="text-myco-dark/80">
                        Information about medicinal mushroom benefits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-myco-primary/10 text-myco-primary flex items-center justify-center mr-2 shrink-0 mt-0.5 text-xs">
                        ✓
                      </span>
                      <span className="text-myco-dark/80">
                        Q&A with our cultivation specialists
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-myco-primary mb-2">
                    Biosecurity Note
                  </h4>
                  <p className="text-sm text-myco-dark/80">
                    To maintain our strict contamination controls, visitors will
                    not enter the sterile cultivation areas. Tours are conducted
                    through designated viewing areas to protect our mushroom
                    production.
                  </p>
                </div>
              </div>
            </div>
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
              Learn More About Our Products
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Discover our premium medicinal mushrooms, cultivated with
              precision for exceptional quality and bioactive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-myco-primary hover:bg-white/90"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
