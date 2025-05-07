"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // This would be replaced with actual form submission logic
      setFormStatus("success");
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        company: "",
        inquiryType: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-myco-light px-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-myco-dark mb-6 font-display">
              Contact <span className="text-myco-primary">Us</span>
            </h1>
            <p className="text-xl text-myco-dark/80 mb-8">
              Whether you're interested in our products, partnership
              opportunities, or have questions about medicinal mushrooms, we'd
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white px-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-8 font-display">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex">
                      <MapPin className="h-6 w-6 text-myco-primary mr-4 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Our Location
                        </h3>
                        <p className="text-myco-dark/80">
                          tbd
                          <br />
                          tbd
                          <br />
                          Northern Ireland
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex">
                      <Mail className="h-6 w-6 text-myco-primary mr-4 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                        <a
                          href="mailto:info@mycofarms.com"
                          className="text-myco-primary hover:underline"
                        >
                          info@mycofarms.com
                        </a>
                        <p className="text-sm text-myco-dark/60 mt-1">
                          We aim to respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex">
                      <Phone className="h-6 w-6 text-myco-primary mr-4 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <a
                          href="tel:+447850125787"
                          className="text-myco-primary hover:underline"
                        >
                          +44 7850 125787
                        </a>
                        <p className="text-sm text-myco-dark/60 mt-1">
                          Monday to Friday, 9am to 5pm GMT
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex">
                      <Clock className="h-6 w-6 text-myco-primary mr-4 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Business Hours
                        </h3>
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <td className="pr-4 py-1">Monday - Friday</td>
                              <td>9:00 AM - 5:00 PM</td>
                            </tr>
                            <tr>
                              <td className="pr-4 py-1">Saturday</td>
                              <td>By appointment</td>
                            </tr>
                            <tr>
                              <td className="pr-4 py-1">Sunday</td>
                              <td>Closed</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-myco-dark mb-8 font-display">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formState.inquiryType}
                      required
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select type of inquiry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="products">
                          Product Information
                        </SelectItem>
                        <SelectItem value="b2b">B2B Partnership</SelectItem>
                        <SelectItem value="research">
                          Research Collaboration
                        </SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-myco-primary hover:bg-myco-primary/90 text-white"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {formStatus === "success" && (
                  <p className="text-green-600 mt-2">
                    Thank you for your message! We'll be in touch soon.
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="text-red-600 mt-2">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-myco-cream px-10">
        <div className="container">
          <h2 className="text-3xl font-bold text-myco-dark mb-8 font-display text-center">
            Visit Our Facility
          </h2>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-myco-primary/10">
            {/* This would be replaced with an actual map iframe */}
            <div className="h-full flex items-center justify-center text-myco-primary">
              <p className="text-lg font-medium">
                Google Maps Embed would go here
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-myco-dark/80">
              Interested in seeing our cultivation facility? Contact us to
              schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-myco-dark mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-myco-dark/70">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-myco-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-myco-primary mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-myco-dark/80">
                Yes, we can arrange international shipping for our products.
                Please contact us for specific shipping details and requirements
                for your location.
              </p>
            </div>

            <div className="bg-myco-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-myco-primary mb-2">
                What certifications do your products have?
              </h3>
              <p className="text-myco-dark/80">
                Our facility is being upgraded to meet EU-GACP (Good
                Agricultural and Collection Practice) standards, ensuring our
                products meet food-grade requirements. We are also pursuing FSSC
                22000 certification.
              </p>
            </div>

            <div className="bg-myco-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-myco-primary mb-2">
                Do you offer samples for testing?
              </h3>
              <p className="text-myco-dark/80">
                Yes, we can provide samples to potential B2B customers for
                quality assessment. Please contact us with your specific
                requirements.
              </p>
            </div>

            <div className="bg-myco-light p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-myco-primary mb-2">
                What is the minimum order quantity?
              </h3>
              <p className="text-myco-dark/80">
                Minimum order quantities depend on the product and your specific
                needs. We're flexible and can discuss tailored solutions for
                both small and large quantity requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
