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

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <StatsSection />
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