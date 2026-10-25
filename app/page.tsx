import { en as content } from "@/content/en";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EarlyAccessAI } from "@/components/EarlyAccessAI";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorksTimeline } from "@/components/HowItWorksTimeline";
import { Pricing } from "@/components/Pricing";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { WorkCard } from "@/components/WorkCard";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {content.header.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorksTimeline />
        <FeatureGrid />
        <WorkCard />
        <Pricing />
        <EarlyAccessAI />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp href={content.contact.phoneHref} label={content.hero.primaryCta} />
    </>
  );
}
