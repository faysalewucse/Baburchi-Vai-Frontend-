import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Favourites() {
  const [favouriteRecipes, setFavouriteRecipes] = useState(
    JSON.parse(localStorage.getItem("favourite"))
  );

  const removeFavourite = (toDeleteId) => {
    const filteredItems = favouriteRecipes.filter(
      (fav) => fav.id !== toDeleteId
    );
    localStorage.setItem("favourite", JSON.stringify(filteredItems));
    setFavouriteRecipes(JSON.parse(localStorage.getItem("favourite")));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-10 md:p-20">
        {favouriteRecipes ? (
          <div className="md:grid grid-cols-2 gap-5">
            {favouriteRecipes.map((favourite, index) => (
              <div
                key={index}
                className="bg-orange-100 p-7 rounded-lg mb-5 md:mb-0"
              >
                <h1 className="font-bold text-secondary2 text-3xl mb-3">
                  Chef: {favourite.chefInfo.chef_name}
                </h1>
                <RecipeCard
                  chefInfo={favourite.chefInfo}
                  index={favourite.index}
                  recipe={favourite.recipe}
                />
                <button
                  onClick={() => removeFavourite(favourite.id)}
                  className="bg-red-400 p-2 rounded text-white mt-4 hover:bg-secondary2"
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-2" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1>No Favourite Recipes</h1>
        )}
      </div>
    </div>
  );
}
