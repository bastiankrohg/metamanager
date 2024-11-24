import React from "react";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ComparativeSection from '@/components/ComparativeSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import TrustedCarousel from '@/components/TrustedCarousel';
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Pricing from '@/components/Pricing';
import Chatbot from "@/components/Chatbot";
import StorylaneSection from "@/components/StorylaneSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <StatsSection />
      <StorylaneSection
        demoUrl="https://app.storylane.io/demo/oddftinmy9pq"
        title="Example Product Demo"
        description="Warning! This component has been borrowed from semrush.com as a good SaaS product demo for illustrative purposes only."
      />
      <TrustedCarousel />
      <Features />
      <Pricing />
      <Testimonials />
      <ComparativeSection />
      <BlogSection />
      <Footer />
      <Chatbot />
    </div>
  );
}