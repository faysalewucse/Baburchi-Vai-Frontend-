import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import GradientText from "../../utils/GradientText";
import heroImage from "../../assets/heroImage.png";

export default function HeroSection() {
  return (
    <div className="bg-orange-200 flex items-center justify-center p-5 md:p-0">
      <img className="hidden md:block md:w-[60%]" src={heroImage} alt="hero" />
      <div className="flex flex-col gap-4 lg:-ml-80 lg:mr-20">
        <h4 className="font-bold text-4xl text-center lg:text-right lg:text-6xl text-secondary">
          Let Us Cooking
        </h4>
        <h1 className="font-bold text-5xl text-center lg:text-right lg:text-9xl text-secondary2">
          <GradientText
            text={"Professional"}
            style={"bg-gradient-to-tr from-primary to-primaryHover"}
          />
          Chef In Town
        </h1>

        <p className="md:text-right text-secondary2 font-bold md:text-xl md:pl-20 px-5 text-justify">
          Discover the best recipes from top chefs around the world, all in one
          place. From classic comfort food to international cuisine, we've got
          you covered with our expertly curated collection of recipes.
        </p>
        <PrimaryButton
          text={"Hire Chef"}
          style={"w-1/2 mx-auto md:mx-0 md:ml-auto md:w-1/4"}
        />
      </div>
    </div>
  );
}
