"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Award, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const benefits = [
  {
    title: "Pharmaceutical Grade",
    description:
      "Our mushrooms are cultivated to FSA standards, ensuring consistent potency and purity for pharmaceutical applications.",
    icon: ShieldCheck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Sustainable Cultivation",
    description:
      "Environmentally conscious growing practices with minimal resource use and carbon footprint.",
    icon: Leaf,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Premium Quality",
    description:
      "Carefully monitored growing conditions ensure optimal bioactive compound profiles in every harvest.",
    icon: Award,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Research-Backed",
    description:
      "Partnership with Ulster University to continuously refine and improve our cultivation methods and strains.",
    icon: FlaskConical,
    color: "bg-purple-50 text-purple-600",
  },
];

const container = {
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

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white px-5 md:px-10 flex flex-col items-center justify-center">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-myco-dark mb-4 font-display">
              Why Choose <span className="text-myco-primary">Myco Farms</span>
            </h2>
            <p className="text-lg text-myco-dark/70">
              Our commitment to quality, science, and sustainability sets us
              apart in the medicinal mushroom industry.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                      benefit.color
                    )}
                  >
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-display">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-myco-dark/80 text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
