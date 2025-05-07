// src/app/(main)/products/[slug]/components/ProductTabs.tsx
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Beaker,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductData } from "@/types/product";

// Overview Tab Component
const OverviewTab = ({ product }: { product: ProductData }) => {
  const descriptionParagraphs = product.longDescription.split("\n\n");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none mb-8">
        <h2 className="text-2xl font-bold text-myco-dark mb-4 font-display">
          About {product.title}
        </h2>

        {descriptionParagraphs.map((paragraph, index) => (
          <p key={`overview-para-${index}`} className="text-myco-dark/80 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-myco-dark mb-6 font-display">
          Applications
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {product.applications.map((app, index) => (
            <Card key={`app-${index}`} className="border-none shadow-md">
              <CardContent className="pt-6">
                <h4 className="text-lg font-bold text-myco-primary mb-2">
                  {app.name}
                </h4>
                <p className="text-myco-dark/80">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-myco-light p-8 rounded-xl">
        <div className="flex items-start">
          <ShieldCheck className="h-8 w-8 text-myco-primary mr-4 shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-myco-dark mb-2 font-display">
              Quality Guarantee
            </h3>
            <p className="text-myco-dark/80">
              All our mushroom products undergo rigorous quality testing to
              ensure potency, purity, and safety. Our {product.title} is
              cultivated under strict FSA guidelines, ensuring consistent
              food-grade quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bioactive Compounds Tab Component
const BioactiveTab = ({ product }: { product: ProductData }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none mb-8">
        <h2 className="text-2xl font-bold text-myco-dark mb-4 font-display">
          Bioactive Compounds in {product.title}
        </h2>

        <p className="text-myco-dark/80 mb-8">
          {product.title} contains several bioactive compounds that contribute
          to its potential health benefits. Our cultivation methods are designed
          to maximize the production of these compounds.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {product.keyCompounds.map((compound, index) => (
          <Card
            key={`compound-${index}`}
            className="border-none shadow-md h-full"
          >
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
                <Beaker className="h-6 w-6 text-myco-primary" />
              </div>
              <h3 className="text-xl font-bold text-myco-primary mb-3">
                {compound.name}
              </h3>
              <p className="text-myco-dark/80">{compound.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-myco-light p-8 rounded-xl">
        <div className="flex items-start">
          <FileText className="h-8 w-8 text-myco-primary mr-4 shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-myco-dark mb-2 font-display">
              Testing & Analysis
            </h3>
            <p className="text-myco-dark/80">
              Every batch of our {product.title} undergoes comprehensive testing
              for bioactive compound content, ensuring consistent potency and
              efficacy. We analyze for specific compounds including{" "}
              {product.keyCompounds.map((c) => c.name).join(", ")}, providing
              you with detailed information about the quality of our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cultivation Process Tab Component
const CultivationTab = ({ product }: { product: ProductData }) => {
  const cultivationParagraphs = product.cultivationDetails.split("\n\n");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none mb-8">
        <h2 className="text-2xl font-bold text-myco-dark mb-4 font-display">
          Cultivation Process
        </h2>

        {cultivationParagraphs.map((paragraph, index) => (
          <p key={`cult-para-${index}`} className="text-myco-dark/80 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="aspect-video bg-myco-primary/10 rounded-lg overflow-hidden">
          {/* Replace with actual cultivation image */}
          <div className="flex items-center justify-center text-myco-primary h-full">
            <p className="text-lg font-medium">Cultivation image 1</p>
          </div>
        </div>

        <div className="aspect-video bg-myco-primary/10 rounded-lg overflow-hidden">
          {/* Replace with actual cultivation image */}
          <div className="flex items-center justify-center text-myco-primary h-full">
            <p className="text-lg font-medium">Cultivation image 2</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-myco-dark mb-6 font-display">
          Our Cultivation Standards
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
              <BadgeCheck className="h-6 w-6 text-myco-primary" />
            </div>
            <h4 className="text-lg font-bold text-myco-primary mb-2">
              FSA Certified
            </h4>
            <p className="text-myco-dark/80">
              Our cultivation process follows strict European Good Agricultural
              and Collection Practice guidelines.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-myco-primary" />
            </div>
            <h4 className="text-lg font-bold text-myco-primary mb-2">
              Quality Control
            </h4>
            <p className="text-myco-dark/80">
              Rigorous testing throughout the cultivation process ensures
              consistent quality and potency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-4 w-12 h-12 rounded-lg bg-myco-primary/20 flex items-center justify-center">
              <Leaf className="h-6 w-6 text-myco-primary" />
            </div>
            <h4 className="text-lg font-bold text-myco-primary mb-2">
              Sustainable Practices
            </h4>
            <p className="text-myco-dark/80">
              Our cultivation methods minimize environmental impact while
              maximizing quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Research Tab Component
const ResearchTab = ({ product }: { product: ProductData }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-myco-dark mb-4 font-display">
            Research on {product.title}
          </h2>
          <p className="text-myco-dark/80 mb-8">
            {product.title} has been the subject of numerous scientific studies
            exploring its potential health benefits. Below are some notable
            research papers that provide insight into the properties and
            applications of {product.title}.
          </p>
        </div>
        <div className="space-y-6">
          {product.researchStudies.map((study, index) => (
            <Card key={`study-${index}`} className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-myco-primary mb-2">
                  {study.title}
                </h3>
                <p className="text-myco-dark mb-1">{study.authors}</p>
                <p className="text-myco-dark/60 text-sm mb-4">
                  {study.publication} • {study.year}
                </p>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-myco-primary hover:underline inline-flex items-center text-sm"
                >
                  View Publication
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 bg-myco-light p-8 rounded-xl">
          <div className="flex items-start">
            <Beaker className="h-8 w-8 text-myco-primary mr-4 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-myco-dark mb-2 font-display">
                Our Research Initiatives
              </h3>
              <p className="text-myco-dark/80 mb-4">
                At Myco Farms, we're committed to advancing the scientific
                understanding of medicinal mushrooms. Our partnership with
                Ulster University focuses on optimizing cultivation methods to
                enhance bioactive compound production in {product.title} and
                other medicinal mushrooms.
              </p>
              <Link href="/science">
                <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
                  Learn More About Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Product Tabs Component
export default function ProductTabs({ product }: { product: ProductData }) {
  const [activeTab, setActiveTab] = useState("overview");

  // This helps prevent re-rendering animations on tab revisits
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Use React.memo to prevent unnecessary re-renders
  const MemoizedOverviewTab = React.memo(OverviewTab);
  const MemoizedBioactiveTab = React.memo(BioactiveTab);
  const MemoizedCultivationTab = React.memo(CultivationTab);
  const MemoizedResearchTab = React.memo(ResearchTab);

  return (
    <section className="py-16 bg-white px-5 flex flex-col items-center justify-center">
      <div className="container">
        <Tabs
          defaultValue="overview"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-myco-light">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bioactive">Bioactive Compounds</TabsTrigger>
              <TabsTrigger value="cultivation">Cultivation Process</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-0">
            <MemoizedOverviewTab product={product} />
          </TabsContent>

          <TabsContent value="bioactive" className="mt-0">
            <MemoizedBioactiveTab product={product} />
          </TabsContent>

          <TabsContent value="cultivation" className="mt-0">
            <MemoizedCultivationTab product={product} />
          </TabsContent>

          <TabsContent value="research" className="mt-0">
            <MemoizedResearchTab product={product} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
