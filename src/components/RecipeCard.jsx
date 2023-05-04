import {
  faStar,
  faThumbsUp,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function RecipeCard({
  chefInfo,
  index,
  recipe,
  addToFavourite,
  favouriteRecipes,
  favouriteBtn,
}) {
  const { recipeName, ingredients, cookingMethod, rating, likes } = recipe;

  return (
    <div className="bg-gradient-to-tr to-orange-50 from-orange-200 border border-secondary p-7 rounded-2xl mb-5 md:mb-0">
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
          {favouriteBtn && (
            <button
              onClick={() => addToFavourite({ index, chefInfo, recipe })}
              disabled={favouriteRecipes?.some(
                (recipe) =>
                  chefInfo.id === recipe.chefInfo.id && index === recipe.index
              )}
              className={`bg-secondary hover:bg-secondary2 text-white p-2 rounded flex items-center gap-2 ${
                favouriteRecipes?.some(
                  (recipe) =>
                    chefInfo.id === recipe.chefInfo.id && index === recipe.index
                ) && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faHeartSolid} />
              Favourite
            </button>
          )}
        </div>
      </div>
      <p className="font-semibold text-lg mt-2 text-secondary2">Ingredients</p>
      <div className="p-3">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
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
