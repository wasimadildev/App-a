"use client";

import dynamic from "next/dynamic";

const LogoBar = dynamic(() => import("@/components/sections/LogoBar"), {
  ssr: false,
});
const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: false,
});
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: false,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: false }
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  ssr: false,
});
const CTA = dynamic(() => import("@/components/sections/CTA"), {
  ssr: false,
});

export default function DynamicSections() {
  return (
    <>
      <LogoBar />
      <section id="features">
        <Features />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="reviews">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="free-trial">
        <CTA />
      </section>
    </>
  );
}
