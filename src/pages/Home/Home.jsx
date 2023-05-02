import HeroSection from "./HeroSection";
import Footer from "./Footer";
import OurStory from "./OurStory";

export default function Home() {
  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <OurStory />
      <Footer />
    </div>
  );
}
