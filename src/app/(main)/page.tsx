import Image from "next/image";
import Hero from "@/components/home/Hero";
import BenefitsSection from "@/components/home/benefits-section";
import FeaturedProducts from "@/components/home/featured-products";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <>
      <Hero />

      <BenefitsSection />

      <FeaturedProducts />

      {/* Science & Research Section */}
      <section className="py-24 bg-white px-10 flex flex-col items-center justify-center">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-myco-dark mb-6 font-display">
                Backed by <span className="text-myco-primary">Science</span>
              </h2>
              <p className="text-lg text-myco-dark/80 mb-6">
                Our medicinal mushrooms are cultivated with scientific precision
                to maximize bioactive compounds and ensure consistent quality.
              </p>
              <p className="text-lg text-myco-dark/80 mb-8">
                We partner with Ulster University to continuously research and
                improve our cultivation methods, ensuring we produce the highest
                quality medicinal mushrooms available.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    Standardized production methods for consistent potency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Regular testing for bioactive compound profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    Ongoing research to optimize substrate and cultivation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-myco-primary/20 text-myco-primary flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Quality control throughout the entire process</span>
                </li>
              </ul>

              <Link href="/science">
                <Button className="bg-myco-primary hover:bg-myco-primary/90 text-white">
                  Learn About Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-myco-primary/10 rounded-2xl overflow-hidden">
                {/* Replace with actual laboratory/research image */}
                <div className="absolute inset-0 flex items-center justify-center text-myco-primary">
                  <p className="text-lg font-medium">
                    Research laboratory image
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video bg-myco-cream rounded-xl shadow-lg p-6">
                <div className="text-myco-primary font-display text-xl font-bold mb-2">
                  Quality Guaranteed
                </div>
                <p className="text-sm text-myco-dark/80">
                  Our FSA certification ensures food-grade quality for every
                  harvest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 bg-myco-primary text-white flex flex-col items-center justify-center">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Partner with Myco Farms?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Contact us to discuss how our premium medicinal mushrooms can
            enhance your products and formulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-myco-primary hover:bg-white/90"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View B2B Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
