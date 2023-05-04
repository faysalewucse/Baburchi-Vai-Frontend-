import HeroSection from "./HeroSection";
import OurStory from "./OurStory";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Contact from "./Contact";
import { CirclesWithBar } from "react-loader-spinner";

export default function Home() {
  const chefs = useLoaderData();

  return (
    <div className="bg-indigo-50">
      <HeroSection />
      <OurStory />
      <Chefs chefs={chefs} />
      <Contact />
    </div>
  );
}
