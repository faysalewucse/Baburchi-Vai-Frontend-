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
    <div className="flex gap-3 bg-white rounded-2xl">
      <img
        className="w-1/2 h-56 object-top object-cover rounded-l-2xl"
        src={chef_picture}
        alt=""
      />
      <div className="py-5 flex flex-col justify-between">
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
          style={"w-48"}
        />
        {/* <FontAwesomeIcon icon={faHeart} className="text-2xl cursor-pointer" /> */}
      </div>
    </div>
  );
}
