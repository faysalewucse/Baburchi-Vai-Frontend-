import HeroSection from "./HeroSection";
import Footer from "./Footer";
import OurStory from "./OurStory";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";

export default function Home() {
  const chefs = useLoaderData();

  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <OurStory />
      <Chefs chefs={chefs} />
      <Footer />
    </div>
  );
}
