// src/app/(main)/news/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, fadeIn, formatDate, truncateText } from "@/lib/utils";

// Sample news data - this would typically come from a CMS or API
const newsArticles = [
  {
    id: 1,
    title: "Myco Farms Secures Funding for Expansion",
    slug: "myco-farms-secures-funding-for-expansion",
    excerpt:
      "Myco Farms has secured £250,000 in funding to expand its medicinal mushroom cultivation facility in Northern Ireland.",
    content:
      "Myco Farms, has secured £250,000 in funding to expand its medicinal mushroom cultivation facility in Northern Ireland. The investment will be used to construct an additional growing chamber, increasing annual production to approximately three tonnes of premium medicinal mushrooms.\n\nThe funding will also support the development of an eco-substrate production unit and a Tissue Culture laboratory for spawn production and culture bank. This expansion is a key milestone in the company's growth strategy, which aims to establish Myco Farms as a leading producer of medicinal mushroom active pharmaceutical ingredients in Europe.",
    publishDate: "2024-04-15",
    author: "Redacted",
    category: "Company News",
    image: "/news-image-1.jpg",
  },
  {
    id: 2,
    title: "EU-GACP Certification Process Underway",
    slug: "eu-gacp-certification-process-underway",
    excerpt:
      "Myco Farms has begun the certification process for EU-GACP, a critical step in providing pharmaceutical-grade medicinal mushrooms to the European market.",
    content:
      'Myco Farms has initiated the certification process for EU-GACP (European Good Agricultural and Collection Practice), a critical step in providing pharmaceutical-grade medicinal mushrooms to the European market. The EU-GACP guidelines ensure the quality, safety, consistency, and sustainability of herbal starting materials used in the production of herbal medicines.\n\n"This certification is essential for our business model, as it will allow us to supply our premium Lion\'s Mane and future mushroom products to pharmaceutical and nutraceutical companies throughout Europe," said Redacted, CEO of Myco Farms.\n\nThe company expects to complete the certification process by the end of the year, after which it will be positioned as one of the few EU-GACP certified medicinal mushroom producers in the United Kingdom.',
    publishDate: "2024-03-28",
    author: "Redacted",
    category: "Certification",
    image: "/news-image-2.jpg",
  },
  {
    id: 3,
    title: "New Research Partnership with Ulster University",
    slug: "new-research-partnership-with-ulster-university",
    excerpt:
      "Myco Farms and Ulster University have formed a research partnership to study and optimize the bioactive compounds in Lion's Mane mushrooms.",
    content:
      "Myco Farms and Ulster University have established a formal research partnership to study and optimize the bioactive compounds in Lion's Mane mushrooms. The collaboration will focus on developing methods to maximize the production of hericenones and erinacines, compounds known for their potential neuroprotective and cognitive-enhancing properties.\n\n\"This partnership combines our cultivation expertise with Ulster University's research capabilities, allowing us to push the boundaries of what's possible in medicinal mushroom production,\" said redacted, Co-founder of Myco Farms.\n\nThe research project, led by Dr. Le Roy Dowey at Ulster University's Biomedical Sciences Research Institute, will also explore substrate formulations designed to match the specific needs of Lion's Mane and other medicinal mushroom species. The first phase of the project is expected to be completed within 12 months, with findings potentially applicable to Myco Farms' commercial production methods.",
    publishDate: "2024-02-17",
    author: "Redacted",
    category: "Research",
    image: "/news-image-3.jpg",
  },
  {
    id: 4,
    title: "Lion's Mane Production Begins at Myco Farms",
    slug: "lions-mane-production-begins-at-myco-farms",
    excerpt:
      "Myco Farms has successfully completed its first full cultivation cycle of Lion's Mane mushrooms in its new Redacted facility.",
    content:
      "Myco Farms has successfully completed its first full cultivation cycle of Lion's Mane mushrooms in its new Redacted facility. This milestone represents the culmination of months of preparation and marks the beginning of commercial production for the company.\n\n\"We're thrilled to have our first harvest of Lion's Mane complete,\" said Redacted, CEO of Myco Farms. \"The quality and bioactive content of the mushrooms have exceeded our expectations, and we're now preparing for regular production cycles.\"\n\nLion's Mane (Hericium erinaceus) is known for its potential cognitive benefits and neuroprotective properties. Myco Farms has already secured a Letter of Intent from a manufacturer in the Netherlands for the purchase of 200kg of Lion's Mane per month, worth approximately £200,000 annually.\n\nThe company uses state-of-the-art cultivation techniques to maximize the bioactive compounds in their mushrooms, ensuring consistent potency and quality for pharmaceutical and nutraceutical applications.",
    publishDate: "2024-01-22",
    author: "Redacted",
    category: "Production",
    image: "/news-image-4.jpg",
  },
  {
    id: 5,
    title: "Medicinal Mushroom Market Expected to Reach $59.4 Billion by 2031",
    slug: "medicinal-mushroom-market-expected-to-reach-59-billion-by-2031",
    excerpt:
      "A new market report indicates strong growth in the global medicinal mushroom market, with projections to reach $59.4 billion by 2031.",
    content:
      'A new market report from Coherent Market Insights indicates strong growth in the global medicinal mushroom market, with projections to reach $59.4 billion by 2031. The market, estimated at $34.22 billion in 2024, is expected to grow at a compound annual growth rate (CAGR) of 8.2% over the next seven years.\n\n"This market forecast confirms what we\'ve been seeing in terms of increasing demand for high-quality medicinal mushrooms," said, Co-founder of Myco Farms. "The growth is being driven by increased consumer awareness of the health benefits of medicinal mushrooms and growing scientific evidence supporting their efficacy."\n\nThe report also highlights that Germany dominated the European market in 2020 and is expected to maintain its position until 2027, with a market value of $918 million. During the same period, the UK market is predicted to experience a CAGR of 7.5%, while the France market is poised to grow at a CAGR of 9.1%.\n\nThis growth presents significant opportunities for Myco Farms, which is positioning itself as a premium supplier of EU-GACP certified medicinal mushrooms for the pharmaceutical and nutraceutical industries.',
    publishDate: "2023-12-08",
    author: "Market Research Team",
    category: "Industry News",
    image: "/news-image-5.jpg",
  },
];

// Categories for filtering
const categories = [
  "All",
  ...Array.from(new Set(newsArticles.map((article) => article.category))),
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-myco-light px-5">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myco-dark mb-6 font-display">
              News & <span className="text-myco-primary">Insights</span>
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              Stay updated with the latest developments at Myco Farms and news
              from the medicinal mushroom industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={cn(
                  selectedCategory === category
                    ? "bg-myco-primary text-white hover:bg-myco-primary/90"
                    : "text-myco-dark hover:bg-myco-primary/10"
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all">
                  <div className="relative aspect-video bg-myco-primary/10 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                      <p className="text-lg font-medium">News image</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-myco-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      {article.category}
                    </div>
                  </div>

                  <CardHeader>
                    <h3 className="text-xl font-bold text-myco-dark hover:text-myco-primary transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-sm text-myco-dark/60 mt-2 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-myco-primary/70" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-myco-primary/70" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-myco-dark/80">{article.excerpt}</p>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Link href={`/news/${article.slug}`}>
                      <Button
                        variant="outline"
                        className="border-myco-primary text-myco-primary hover:bg-myco-primary hover:text-white transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-myco-dark/60">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-myco-cream flex flex-col items-center">
        <div className="container max-w-4xl">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-myco-dark mb-4 font-display">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-myco-dark/70">
                Stay informed about our latest products, research findings, and
                company news.
              </p>
            </div>

            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-myco-primary"
                required
              />
              <Button
                type="submit"
                className="bg-myco-primary hover:bg-myco-primary/90 text-white md:w-auto"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
