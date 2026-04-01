import {
  CTA,
  GalleryPreview,
  HeroSection,
  OffersSection,
  ServicesPreview,
  Steps,
  Testimonials,
  WhyChooseUs,
} from "@/components/home-page/home";

export default function HomePage() {
  return (
    <main className="pt-0">
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <OffersSection />
      <Steps />
      <GalleryPreview />
      <CTA />
      <Testimonials />
    </main>
  );
}
