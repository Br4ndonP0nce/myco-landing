// src/app/(main)/products/[slug]/page.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn, fadeIn } from "@/lib/utils";
import ProductTabs from "./components/ProductTabs";
import { ProductData } from "@/types/product";

// Move products data outside the component to prevent re-creation on each render
const products: ProductData[] = [
  {
    title: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    description:
      "Known for its cognitive benefits and neuroprotective properties. Our Lion's Mane mushrooms are grown in controlled environments to maximize bioactive compounds.",
    longDescription:
      "Lion's Mane (Hericium erinaceus) is a distinctive mushroom known for its cascading white spines that resemble a lion's mane. It has a long history of use in traditional Chinese medicine and is now gaining popularity worldwide for its potential cognitive and neurological benefits.\n\nAt Myco Farms, we cultivate Lion's Mane in carefully controlled environments designed to maximize the production of its bioactive compounds, particularly hericenones and erinacines. These compounds have shown promising neuroprotective and cognitive-enhancing properties in scientific studies.\n\nOur Lion's Mane mushrooms are grown on optimized substrate formulations in climate-controlled rooms where temperature, humidity, air flow, and light exposure are precisely managed to create ideal growing conditions. This approach ensures consistent quality and potency batch after batch.",
    keyCompounds: [
      {
        name: "Erinacines",
        description:
          "Found in the mycelium, these compounds have shown potential to stimulate nerve growth factor (NGF) production, which is essential for the growth and maintenance of neurons.",
      },
      {
        name: "Hericenones",
        description:
          "Present in the fruiting body, these compounds also demonstrate neurotrophic properties and may contribute to the mushroom's cognitive benefits.",
      },
      {
        name: "Beta-glucans",
        description:
          "Complex polysaccharides that support immune function and may have anti-inflammatory properties.",
      },
      {
        name: "Polysaccharides",
        description:
          "Complex carbohydrates that contribute to the mushroom's immune-supporting properties.",
      },
    ],
    applications: [
      {
        name: "Neuroprotection",
        description:
          "Lion's Mane contains compounds that may help protect neurons and support brain health.",
      },
      {
        name: "Cognitive enhancement",
        description:
          "Research suggests Lion's Mane may support memory, focus, and overall cognitive function.",
      },
      {
        name: "Immune support",
        description:
          "The beta-glucans and other compounds in Lion's Mane may help support healthy immune function.",
      },
    ],
    cultivationDetails:
      "Our Lion's Mane mushrooms are grown in climate-controlled rooms where temperature, humidity, light, and air flow are precisely managed to create ideal growing conditions. We use carefully selected substrate materials optimized for Lion's Mane cultivation and enhanced bioactive compound production.\n\nEach batch undergoes a rigorous quality control process, including testing for bioactive compound content, ensuring our Lion's Mane mushrooms consistently meet our high standards for potency and quality.",
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    additionalImages: [
      "/lions-mane-cultivation.jpg",
      "/lions-mane-closeup.jpg",
      "/lions-mane-dried.jpg",
    ],
    status: "Available",
    slug: "lions-mane",
    featured: true,
    researchStudies: [
      {
        title:
          "Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial",
        authors: "Mori K, Inatomi S, Ouchi K, Azumi Y, Tuchida T",
        publication: "Phytotherapy Research",
        year: "2009",
        url: "https://pubmed.ncbi.nlm.nih.gov/18844328/",
      },
      {
        title: "Hericium erinaceus: an edible mushroom with medicinal values",
        authors: "Friedman M",
        publication: "Journal of Agricultural and Food Chemistry",
        year: "2015",
        url: "https://pubmed.ncbi.nlm.nih.gov/26244378/",
      },
      {
        title:
          "The Neuroprotective Properties of Hericium erinaceus in Glutamate-Damaged Differentiated PC12 Cells and an Alzheimer's Disease Mouse Model",
        authors:
          "Zhang J, An S, Hu W, Teng M, Wang X, Qu Y, Liu Y, Yuan Y, Wang D",
        publication: "International Journal of Molecular Sciences",
        year: "2016",
        url: "https://pubmed.ncbi.nlm.nih.gov/27801827/",
      },
    ],
  },
  {
    title: "Cordyceps",
    scientificName: "Cordyceps militaris",
    description:
      "Valued for energy, endurance, and respiratory health benefits. Our Cordyceps cultivation is coming soon, with strict quality standards for optimal bioactive content.",
    longDescription:
      "Cordyceps (Cordyceps militaris) is a fascinating medicinal mushroom with a rich history in traditional Chinese medicine. Known for its potential energy-enhancing and respiratory benefits, Cordyceps has gained popularity among athletes and those seeking natural support for stamina and endurance.\n\nAt Myco Farms, we're developing a precision cultivation system for Cordyceps that will ensure optimal production of its bioactive compounds, particularly cordycepin and adenosine. These compounds are believed to contribute to the mushroom's unique health benefits.\n\nOur Cordyceps cultivation program is currently in development, with plans to begin production in the coming months. We're working closely with our research partners to optimize growing conditions and substrate formulations specifically for Cordyceps, ensuring our products will meet the same high standards of quality and potency as our other medicinal mushrooms.",
    keyCompounds: [
      {
        name: "Cordycepin",
        description:
          "A nucleoside analog that has shown anti-inflammatory, antioxidant, and potential anti-fatigue properties in research studies.",
      },
      {
        name: "Adenosine",
        description:
          "A compound that plays important roles in energy transfer and signal transduction in the body.",
      },
      {
        name: "Polysaccharides",
        description:
          "Complex carbohydrates that contribute to immune-supporting properties.",
      },
      {
        name: "Ergosterol",
        description:
          "A precursor to vitamin D2 that may contribute to Cordyceps' health benefits.",
      },
    ],
    applications: [
      {
        name: "Energy & stamina",
        description:
          "Cordyceps is traditionally used to support energy, endurance, and reduce fatigue.",
      },
      {
        name: "Respiratory health",
        description:
          "Research suggests Cordyceps may support healthy lung function and respiratory health.",
      },
      {
        name: "Anti-inflammatory",
        description:
          "Cordyceps contains compounds that may help modulate inflammatory responses in the body.",
      },
    ],
    cultivationDetails:
      "Our Cordyceps cultivation program is currently in development. We're designing a specialized growing environment with precisely controlled temperature, humidity, and lighting conditions optimized for Cordyceps militaris.\n\nWe're working closely with our research partners to develop substrate formulations that will maximize the production of key bioactive compounds, particularly cordycepin and adenosine. Once in production, our Cordyceps mushrooms will undergo the same rigorous quality testing as our other medicinal mushrooms.",
    certifications: ["EU-GACP", "FSSC 22000"],
    image: "/placeholder-mushroom.jpg",
    additionalImages: [
      "/cordyceps-cultivation.jpg",
      "/cordyceps-closeup.jpg",
      "/cordyceps-dried.jpg",
    ],
    status: "Coming Soon",
    slug: "cordyceps",
    featured: true,
    researchStudies: [
      {
        title:
          "Cordyceps militaris Improves Tolerance to High-Intensity Exercise After Acute and Chronic Supplementation",
        authors: "Hirsch KR, Smith-Ryan AE, Roelofs EJ, Trexler ET, Mock MG",
        publication: "Journal of Dietary Supplements",
        year: "2017",
        url: "https://pubmed.ncbi.nlm.nih.gov/27736248/",
      },
      {
        title:
          "Cordyceps militaris extract protects human dermal fibroblasts against oxidative stress-induced apoptosis and premature senescence",
        authors: "Park JM, Lee JS, Lee KR, Ha SJ, Hong EK",
        publication: "Nutrients",
        year: "2014",
        url: "https://pubmed.ncbi.nlm.nih.gov/25230212/",
      },
      {
        // src/app/(main)/products/[slug]/page.tsx (continued)
        title:
          "Anti-fatigue activities of polysaccharides extracted from Hericium erinaceus",
        authors: "Liu J, Du C, Wang Y, Yu Z",
        publication: "Experimental and Therapeutic Medicine",
        year: "2015",
        url: "https://pubmed.ncbi.nlm.nih.gov/26170936/",
      },
    ],
  },
];

export default function ProductDetailPage() {
  const { slug } = useParams();
  const productSlug = Array.isArray(slug) ? slug[0] : (slug as string);

  // Use useMemo to avoid recalculating this on each render
  const product = useMemo(
    () => products.find((p) => p.slug === productSlug),
    [productSlug]
  );

  // Use useMemo for derived data
  const relatedProducts = useMemo(
    () => products.filter((p) => p.slug !== productSlug).slice(0, 3),
    [productSlug]
  );

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold text-myco-dark mb-4">
          Product Not Found
        </h1>
        <p className="text-myco-dark/70 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/products">
          <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-myco-light px-10">
        <div className="container">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center text-myco-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              layoutId="product-info"
            >
              <div
                className={cn(
                  "inline-block text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4",
                  product.status === "Available"
                    ? "bg-green-500 text-white"
                    : product.status === "Coming Soon"
                    ? "bg-amber-500 text-white"
                    : "bg-myco-dark/70 text-white"
                )}
              >
                {product.status}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-myco-dark mb-2 font-display">
                {product.title}
              </h1>

              <p className="text-lg text-myco-dark/60 italic mb-6">
                {product.scientificName}
              </p>

              <p className="text-lg text-myco-dark/80 mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="inline-flex items-center bg-myco-primary/10 text-myco-primary px-3 py-1 rounded-full text-sm"
                  >
                    <BadgeCheck className="h-4 w-4 mr-1" />
                    {cert} Certified
                  </div>
                ))}
              </div>

              {product.status === "Available" ? (
                <Button
                  size="lg"
                  className="bg-myco-primary hover:bg-myco-primary/90 text-white"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Inquire About This Product
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-myco-primary text-myco-primary hover:bg-myco-primary/10"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Notified When Available
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative"
              layoutId="product-image"
            >
              <div className="aspect-square bg-myco-primary/10 rounded-2xl overflow-hidden">
                {/* Replace with actual product image */}
                <div className="flex items-center justify-center text-myco-primary h-full">
                  <p className="text-lg font-medium">{product.title} image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs - Now using the separated component */}
      <ProductTabs product={product} />

      {/* Related Products */}
      <section className="py-16 bg-myco-cream px-5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
              Related Products
            </h2>
            <p className="text-lg text-myco-dark/70">
              Explore our other premium medicinal mushrooms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <Card
                key={`related-${relatedProduct.slug}`}
                className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video bg-myco-primary/10 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="flex items-center justify-center text-myco-primary h-full">
                    <p className="text-lg font-medium">
                      {relatedProduct.title} image
                    </p>
                  </div>
                  <div
                    className={cn(
                      "absolute top-4 right-4 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full",
                      relatedProduct.status === "Available"
                        ? "bg-green-500 text-white"
                        : relatedProduct.status === "Coming Soon"
                        ? "bg-amber-500 text-white"
                        : "bg-myco-dark/70 text-white"
                    )}
                  >
                    {relatedProduct.status}
                  </div>
                </div>

                <CardContent className="py-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-myco-primary mb-1">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-sm text-myco-dark/60 italic mb-3">
                    {relatedProduct.scientificName}
                  </p>
                  <p className="text-myco-dark/80 mb-4 flex-grow">
                    {relatedProduct.description}
                  </p>
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="mt-auto"
                  >
                    <Button
                      variant={
                        relatedProduct.status === "Available"
                          ? "default"
                          : "outline"
                      }
                      className={cn(
                        "w-full",
                        relatedProduct.status === "Available"
                          ? "bg-myco-primary text-white hover:bg-myco-primary/90"
                          : "border-myco-primary text-myco-primary hover:bg-myco-primary/10"
                      )}
                    >
                      {relatedProduct.status === "Available"
                        ? "View Details"
                        : "Learn More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-myco-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 font-display">
            Interested in {product.title}?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Contact us to discuss how our premium {product.title} can enhance
            your products or to learn more about our cultivation process.
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
        </div>
      </section>
    </>
  );
}
