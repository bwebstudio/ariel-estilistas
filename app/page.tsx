import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappFloating } from "@/components/WhatsappFloating";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Ariel } from "@/sections/Ariel";
import { Trust } from "@/sections/Trust";
import { Gallery } from "@/sections/Gallery";
import { Reviews } from "@/sections/Reviews";
import { Location } from "@/sections/Location";
import { CtaFinal } from "@/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Ariel />
        <Trust />
        <Gallery />
        <Reviews />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloating />
    </>
  );
}
