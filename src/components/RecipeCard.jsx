import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function RecipeCard({ recipe }) {
  const { recipeName, ingredients, cookingMethod, rating, likes } = recipe;
  return (
    <div className="bg-gradient-to-tr to-red-50 from-red-200 border border-secondary p-7 rounded-2xl mb-5 md:mb-0">
      <div className="md:flex items-center justify-between">
        <h1 className="text-center text-3xl font-bold text-secondary2">
          {recipeName}
        </h1>
        <div className="flex justify-between my-3 md:my-0 gap-5">
          <div className="text-secondary2 flex gap-2 items-center">
            <FontAwesomeIcon icon={faStar} />
            <span>{rating}</span>
          </div>
          <div className="text-secondary2 flex gap-2 items-center">
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{likes}</span>
          </div>
          <FontAwesomeIcon
            className="text-secondary text-2xl hover:scale-125 transition-all duration-200"
            icon={faHeart}
            title="Make Favourite"
          />
        </div>
      </div>
      <p className="font-semibold text-lg mt-2 text-secondary2">Ingredients</p>
      <div className="p-3">
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </div>
      <h4 className="text-xl font-bold border-b-2 inline-block border-secondary2 text-secondary2 py-1 mb-3">
        Cooking Method
      </h4>
      <p className="text-lg text-justify text-slate-900 font-medium tracking-tight leading-6">
        {cookingMethod}
      </p>
    </div>
  );
}
