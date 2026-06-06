import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/layout/CursorGlow";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import JsonLd from "@/components/JsonLd";
import DynamicSections from "@/components/DynamicSections";

export default function Home() {
  return (
    <>
      <JsonLd />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <DynamicSections />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
