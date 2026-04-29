import LenisProvider from "./components/LenisProvider";
import MarqueeTicker from "./components/MarqueeTicker";
import Hero from "./components/Hero";
import SocialProofBar from "./components/SocialProofBar";
import ProblemSection from "./components/ProblemSection";
import ChaptersSection from "./components/ChaptersSection";
import TransformationSection from "./components/TransformationSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AuthorSection from "./components/AuthorSection";
import PriceSection from "./components/PriceSection";
import CheckoutSection from "./components/CheckoutSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <LenisProvider>
      <main className="relative">
        <div className="grain-overlay" aria-hidden />
        <MarqueeTicker />
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <ChaptersSection />
        <TransformationSection />
        <TestimonialsSection />
        <AuthorSection />
        <PriceSection />
        <CheckoutSection />
        <FAQSection />
        <FinalCTASection />
        <Footer />
      </main>
    </LenisProvider>
  );
}
