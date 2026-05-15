import { Header } from "@/components/kabu/Header";
import { Hero } from "@/components/kabu/Hero";
import { SocialProof } from "@/components/kabu/SocialProof";
import { HowItWorks } from "@/components/kabu/HowItWorks";
import { Features } from "@/components/kabu/Features";
import { Scenario } from "@/components/kabu/Scenario";
import { FAQ } from "@/components/kabu/FAQ";
import { FinalCTA } from "@/components/kabu/FinalCTA";
import { Footer } from "@/components/kabu/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Scenario />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
