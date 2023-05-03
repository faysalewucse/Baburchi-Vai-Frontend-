import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ChefInfoCard({ info }) {
  const navigate = useNavigate();
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    likes,
    number_of_recipes,
  } = info;

  return (
    <div className="md:flex gap-3 bg-white md:rounded-2xl mb-5 md:mb-0">
      <img
        className="md:w-1/2 w-full h-56 object-top object-cover md:rounded-l-2xl"
        src={chef_picture}
        alt="chef_picture"
      />
      <div className="md:py-5 p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold">{chef_name}</h1>
          <h1 className="text-lg">Experience: {years_of_experience} Years</h1>
          <h1 className="text-lg">{number_of_recipes}</h1>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <h1 className="text-lg">{likes}</h1>
          </div>
        </div>
        <PrimaryButton
          onClickHandler={() => navigate(`/chef/${id}`)}
          text={"View Recipes"}
          style={"md:w-48 mt-5 md:mt-0"}
        />
        {/* <FontAwesomeIcon icon={faHeart} className="text-2xl cursor-pointer" /> */}
      </div>
    </div>
  );
}
