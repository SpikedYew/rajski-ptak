import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { DeliverySection } from "@/components/delivery-section";
import { GallerySection } from "@/components/gallery-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DeliverySection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
