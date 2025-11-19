import {
  Header,
  Hero,
  TrustBar,
  AdExamples,
  Testimonials,
  VideoDemo,
  Features,
  AIVideoFeatures,
  MoreAIFeatures,
  ViewsGenerated,
  AIAgent,
  CTASection,
  FounderSupport,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <AdExamples />
      <Testimonials />
      <VideoDemo />
      <Features />
      <AIVideoFeatures />
      <MoreAIFeatures />
      {/* <AIAgent /> */}
      <ViewsGenerated />
      {/* <CTASection /> */}
      <FounderSupport />
      <Footer />
    </main>
  );
}
