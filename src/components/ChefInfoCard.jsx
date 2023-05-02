import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSollid } from "@fortawesome/free-solid-svg-icons";

export default function ChefInfoCard({ info }) {
  return (
    <div className="flex gap-3 bg-white rounded-2xl">
      <img
        className="w-1/2 h-64 object-cover object-top rounded-l-2xl"
        src={info.chef_picture}
        alt=""
      />
      <div className="py-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">{info.chef_name}</h1>
          <h1 className="text-lg">
            Experience: {info.years_of_experience} Years
          </h1>
          <h1 className="text-lg">{info.number_of_recipes}</h1>
          <h1 className="text-lg">{info.likes}</h1>
        </div>
        <div className="flex justify-center gap-3 items-center">
          <PrimaryButton text={"View Recipes"} style={"w-48"} />
          <FontAwesomeIcon icon={faHeart} className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

// "id": 1,
//     "chef_picture": "https://shorturl.at/qFOTX",
//     "chef_name": "Mridul Roy",
//     "years_of_experience": 15,
//     "number_of_recipes": 100,
//     "bangladeshi_recipes": [
//       "Chingri malai curry",
//       "Dhaka-style biriyani",
//       "Shorshe ilish"
//     ],
//     "likes": 5000
