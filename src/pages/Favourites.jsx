import React, { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Favourites() {
  const favouriteRecipes = JSON.parse(localStorage.getItem("favourite"));

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 p-10 md:p-20">
        {favouriteRecipes.map((favourite, index) => (
          <div key={index} className="bg-orange-100 p-7 rounded-lg">
            <h1 className="font-bold text-secondary text-3xl mb-3">
              Chef: {favourite.chefInfo.chef_name}
            </h1>
            <RecipeCard
              chefInfo={favourite.chefInfo}
              index={favourite.index}
              recipe={favourite.recipe}
              favouriteBtn={false}
            />
            <button className="bg-red-400 p-2 rounded text-white mt-4 hover:bg-secondary2">
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
