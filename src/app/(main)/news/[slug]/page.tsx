// src/app/(main)/news/[slug]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Mail,
  Share2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn, fadeIn, formatDate } from "@/lib/utils";

// Sample news data - this would typically come from a CMS or API
const newsArticles = [
  {
    id: 1,
    title: "Myco Farms Secures Funding for Expansion",
    slug: "myco-farms-secures-funding-for-expansion",
    excerpt:
      "Elite Fungi Ltd has secured £250,000 in funding to expand its medicinal mushroom cultivation facility in Northern Ireland.",
    content:
      'Elite Fungi Ltd, operating as Myco Farms, has secured £250,000 in funding to expand its medicinal mushroom cultivation facility in Northern Ireland. The investment will be used to construct an additional growing chamber, increasing annual production to approximately three tonnes of premium medicinal mushrooms.\n\nThe funding will also support the development of an eco-substrate production unit and a Tissue Culture laboratory for spawn production and culture bank. This expansion is a key milestone in the company\'s growth strategy, which aims to establish Myco Farms as a leading producer of medicinal mushroom active food ingredients in Europe.\n\n"This investment represents a significant step forward for our company," said redacted, CEO of Myco Farms. "It will allow us to scale our production to meet the growing demand for high-quality, EU-GACP certified medicinal mushrooms in the European market."\n\nThe expansion project is expected to create several new jobs and strengthen the company\'s position as an innovator in the medicinal mushroom industry. Construction on the new facilities is scheduled to begin next month, with completion anticipated by the end of the year.',
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
      "Myco Farms has begun the certification process for EU-GACP, a critical step in providing food-grade medicinal mushrooms to the European market.",
    content:
      'Myco Farms has initiated the certification process for EU-GACP (European Good Agricultural and Collection Practice), a critical step in providing food-grade medicinal mushrooms to the European market. The EU-GACP guidelines ensure the quality, safety, consistency, and sustainability of herbal starting materials used in the production of herbal medicines.\n\n"This certification is essential for our business model, as it will allow us to supply our premium Lion\'s Mane and future mushroom products to food and nutraceutical companies throughout Europe," said redacted, CEO of Myco Farms.\n\nThe company expects to complete the certification process by the end of the year, after which it will be positioned as one of the few EU-GACP certified medicinal mushroom producers in the United Kingdom.\n\nEU-GACP certification requires strict adherence to quality standards throughout the entire cultivation process, from substrate preparation to harvest and processing. Myco Farms has been working closely with regulatory experts to ensure that all aspects of their operation meet these rigorous standards.\n\n"The certification process is comprehensive and demanding, but it\'s absolutely necessary for ensuring the consistent quality and safety of our products," explained redacted, Co-founder of Myco Farms. "We\'ve designed our facility and processes with these standards in mind from the beginning, which has given us a solid foundation for certification."\n\nIn addition to EU-GACP certification, Myco Farms is also pursuing FSSC 22000 certification, a robust food safety management system recognized globally. Together, these certifications will position the company as a premium supplier of medicinal mushrooms for both food and nutraceutical applications.',
    publishDate: "2024-03-28",
    author: "redacted",
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
      'Myco Farms and Ulster University have established a formal research partnership to study and optimize the bioactive compounds in Lion\'s Mane mushrooms. The collaboration will focus on developing methods to maximize the production of hericenones and erinacines, compounds known for their potential neuroprotective and cognitive-enhancing properties.\n\n"This partnership combines our cultivation expertise with Ulster University\'s research capabilities, allowing us to push the boundaries of what\'s possible in medicinal mushroom production," said redacted, Co-founder of Myco Farms.\n\nThe research project, led by Dr. Le Roy Dowey at Ulster University\'s Biomedical Sciences Research Institute, will also explore substrate formulations designed to match the specific needs of Lion\'s Mane and other medicinal mushroom species. The first phase of the project is expected to be completed within 12 months, with findings potentially applicable to Myco Farms\' commercial production methods.\n\n"We\'re excited to work with Myco Farms on this innovative research," said Dr. Dowey. "Lion\'s Mane mushrooms contain several compounds with fascinating potential health benefits, and optimizing their production could have significant implications for both the nutraceutical and food industries."\n\nThe partnership is supported by an Innovation Voucher worth £5,000 from Invest NI, highlighting the economic potential of the research. As part of the collaboration, Myco Farms will provide mushroom samples and cultivation expertise, while Ulster University will contribute research facilities and analytical capabilities.\n\n"This is just the beginning of what we hope will be a long-term research relationship," added Barnes. "We\'re already discussing potential future projects, including investigations into other medicinal mushroom species and their bioactive compounds."',
    publishDate: "2024-02-17",
    author: "redacted",
    category: "Research",
    image: "/news-image-3.jpg",
  },
  {
    id: 4,
    title: "Lion's Mane Production Begins at Myco Farms",
    slug: "lions-mane-production-begins-at-myco-farms",
    excerpt:
      "Myco Farms has successfully completed its first full cultivation cycle of Lion's Mane mushrooms in its new Portadown facility.",
    content:
      'Myco Farms has successfully completed its first full cultivation cycle of Lion\'s Mane mushrooms in its new Portadown facility. This milestone represents the culmination of months of preparation and marks the beginning of commercial production for the company.\n\n"We\'re thrilled to have our first harvest of Lion\'s Mane complete," said redacted, CEO of Myco Farms. "The quality and bioactive content of the mushrooms have exceeded our expectations, and we\'re now preparing for regular production cycles."\n\nLion\'s Mane (Hericium erinaceus) is known for its potential cognitive benefits and neuroprotective properties. Myco Farms has already secured a Letter of Intent from a manufacturer in the Netherlands for the purchase of 200kg of Lion\'s Mane per month, worth approximately £200,000 annually.\n\nThe company uses state-of-the-art cultivation techniques to maximize the bioactive compounds in their mushrooms, ensuring consistent potency and quality for food and nutraceutical applications.\n\n"Our focus on precision cultivation technology allows us to create the perfect growing conditions for Lion\'s Mane," explained redacted, Co-founder of Myco Farms. "We control every environmental parameter—temperature, humidity, air flow, light exposure, and CO₂ levels—to create ideal conditions for bioactive compound production."\n\nThe Lion\'s Mane mushrooms produced at Myco Farms are grown on carefully selected substrate materials in climate-controlled rooms. The company\'s approach to cultivation combines traditional knowledge with modern technology to achieve exceptional quality and consistency.\n\n"This first successful harvest is just the beginning," added Barakat. "We\'re already working on expanding our production capacity and developing new cultivation techniques to further enhance the bioactive content of our mushrooms."',
    publishDate: "2024-01-22",
    author: "redacted",
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
      'A new market report from Coherent Market Insights indicates strong growth in the global medicinal mushroom market, with projections to reach $59.4 billion by 2031. The market, estimated at $34.22 billion in 2024, is expected to grow at a compound annual growth rate (CAGR) of 8.2% over the next seven years.\n\n"This market forecast confirms what we\'ve been seeing in terms of increasing demand for high-quality medicinal mushrooms," said redacted, Co-founder of Myco Farms. "The growth is being driven by increased consumer awareness of the health benefits of medicinal mushrooms and growing scientific evidence supporting their efficacy."\n\nThe report also highlights that Germany dominated the European market in 2020 and is expected to maintain its position until 2027, with a market value of $918 million. During the same period, the UK market is predicted to experience a CAGR of 7.5%, while the France market is poised to grow at a CAGR of 9.1%.\n\nThis growth presents significant opportunities for Myco Farms, which is positioning itself as a premium supplier of EU-GACP certified medicinal mushrooms for the food and nutraceutical industries.\n\nAccording to the report, several factors are driving the growth of the medicinal mushroom market:\n\n- Increasing consumer awareness of the health benefits of medicinal mushrooms\n- Growing scientific evidence supporting the efficacy of bioactive compounds found in medicinal mushrooms\n- Rising demand for natural health products with minimal side effects\n- Expansion of the nutraceutical and functional food markets\n- Increasing research and development activities in the field of medicinal mushrooms\n\n"The timing couldn\'t be better for our entry into this market," noted Barakat. "With our focus on quality, science, and EU-GACP certification, we\'re well-positioned to capture a significant share of this growing market, particularly in the premium segment."',
    publishDate: "2023-12-08",
    author: "Market Research Team",
    category: "Industry News",
    image: "/news-image-5.jpg",
  },
];

// Related articles function
const getRelatedArticles = (currentSlug: string, category: string) => {
  return newsArticles
    .filter(
      (article) => article.slug !== currentSlug && article.category === category
    )
    .slice(0, 3);
};

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold text-myco-dark mb-4">
          Article Not Found
        </h1>
        <p className="text-myco-dark/70 mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/news">
          <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </Link>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category);

  // Split content into paragraphs for better rendering
  const paragraphs = article.content.split("\n\n");

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-myco-light px-5">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link
              href="/news"
              className="inline-flex items-center text-myco-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All News
            </Link>
          </div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="bg-myco-primary/10 text-myco-primary text-sm font-semibold uppercase tracking-wide py-1 px-3 rounded-full inline-block mb-4">
              {article.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-myco-dark mb-6 font-display">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center text-myco-dark/60 mt-2 space-x-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-myco-primary/70" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-myco-primary/70" />
                <span>{article.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-12 bg-white px-5">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Main Article Content */}
            <div className="md:col-span-8">
              <div className="mb-8 relative aspect-[16/9] bg-myco-primary/10 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">Article featured image</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-myco-dark/80 mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Links */}
              <div className="mt-12 border-t border-gray-200 pt-8 px-5">
                <h3 className="text-lg font-bold text-myco-dark mb-4">
                  Share This Article
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-myco-primary/30 text-myco-primary hover:bg-myco-primary/10"
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                    Twitter
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-myco-primary/30 text-myco-primary hover:bg-myco-primary/10"
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 0 1 3.49-3.59c.99 0 1.91.08 2.17.12v2.53h-1.5c-1.14 0-1.36.54-1.36 1.34v1.6h2.72l-.36 2.69h-2.36V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                    </svg>
                    Facebook
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-myco-primary/30 text-myco-primary hover:bg-myco-primary/10"
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${article.title}`,
                        "_blank"
                      )
                    }
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-myco-primary/30 text-myco-primary hover:bg-myco-primary/10"
                    onClick={() =>
                      window.open(
                        `mailto:?subject=${article.title}&body=Check out this article: ${window.location.href}`,
                        "_blank"
                      )
                    }
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4">
              {/* Author Box */}
              <Card className="border-none shadow-md mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-myco-dark mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full bg-myco-primary/10 flex items-center justify-center mr-4 text-myco-primary shrink-0">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium text-myco-dark">
                        {article.author}
                      </p>
                      <p className="text-sm text-myco-dark/60 mt-1 mb-2">
                        {article.author === "redacted"
                          ? "CEO & Co-founder"
                          : article.author === "redacted"
                          ? "Co-founder & Agronomist"
                          : article.author === "redacted"
                          ? "Co-founder & Sustainability Expert"
                          : "Team Member"}
                      </p>
                      <p className="text-sm text-myco-dark/80">
                        {article.author === "redacted"
                          ? "With over 7 years of experience in the food industry and an MSc in food Analysis."
                          : article.author === "redacted"
                          ? "An agronomist specializing in international horticultural business development."
                          : article.author === "redacted"
                          ? "Expert in sustainability, phytofood therapeutics, and social enterprise entities."
                          : "Contributing to Myco Farms' vision of premium medicinal mushroom cultivation."}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-none shadow-md mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-myco-dark mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {Array.from(
                      new Set(newsArticles.map((a) => a.category))
                    ).map((category) => (
                      <Link
                        key={category}
                        href={`/news?category=${category}`}
                        className={cn(
                          "flex items-center group",
                          category === article.category
                            ? "text-myco-primary font-medium"
                            : "text-myco-dark/80 hover:text-myco-primary"
                        )}
                      >
                        <Tag className="h-4 w-4 mr-2 group-hover:text-myco-primary" />
                        {category}
                        {category === article.category && (
                          <span className="ml-2 text-xs bg-myco-primary/10 text-myco-primary px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-myco-dark mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-6">
                      {relatedArticles.map((relatedArticle) => (
                        <div
                          key={relatedArticle.id}
                          className="flex items-start"
                        >
                          <div className="w-16 h-16 rounded-lg bg-myco-primary/10 shrink-0 mr-3"></div>
                          <div>
                            <Link
                              href={`/news/${relatedArticle.slug}`}
                              className="font-medium text-myco-dark hover:text-myco-primary transition-colors line-clamp-2"
                            >
                              {relatedArticle.title}
                            </Link>
                            <p className="text-xs text-myco-dark/60 mt-1">
                              {formatDate(relatedArticle.publishDate)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-myco-primary text-white flex flex-col items-center justify-center">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6 font-display">
              Learn More About Our Products
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 px-2">
              Discover our premium medicinal mushrooms, cultivated with
              scientific precision for exceptional quality and potency.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-myco-primary hover:bg-white/90"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
