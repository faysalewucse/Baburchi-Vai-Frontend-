import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useNavigation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import ScrollToTop from "../utils/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CirclesWithBar } from "react-loader-spinner";
import LazyLoad from "react-lazy-load";
import { useState } from "react";

export default function ChefInfo() {
  const chefInfo = useLoaderData();
  let [favouriteRecipes, setFavouriteRecipes] = useState(
    JSON.parse(localStorage.getItem("favourite"))
  );

  const navigation = useNavigation();
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    likes,
    number_of_recipes,
    chefBio,
    recipes,
  } = chefInfo;

  ScrollToTop();

  const notify = (msg) => {
    toast.success(msg, { autoClose: 2000 });
  };

  const addToFavourite = (recipeDetails) => {
    if (favouriteRecipes) {
      favouriteRecipes.push({
        id: favouriteRecipes[favouriteRecipes.length - 1].id + 1,
        ...recipeDetails,
      });
    } else {
      favouriteRecipes = [{ id: 1, ...recipeDetails }];
    }

    localStorage.setItem("favourite", JSON.stringify(favouriteRecipes));
    notify("Added to your favourite recipe.");
    setFavouriteRecipes(JSON.parse(localStorage.getItem("favourite")));
  };

  return (
    <div className="">
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-screen">
          <CirclesWithBar
            height="100"
            width="100"
            color="orange"
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-10">
          {/* Banner */}
          <div className="bg-gradient-to-tr to-orange-50 from-orange-100 md:flex items-center rounded-lg p-5">
            <LazyLoad threshold={0.5}>
              <img
                className="md:max-w-sm rounded-lg object-cover"
                src={chef_picture}
                alt="chef-image"
              />
            </LazyLoad>

            <div className="p-5 text-center md:text-left">
              <h1 className="md:text-4xl text-2xl font-bold text-secondary2">
                {chef_name}
              </h1>
              <h4 className="text-xl font-bold text-secondary">Experience</h4>
              <p className="text-lg">{years_of_experience} years</p>
              <h4 className="text-xl font-bold text-secondary">Recipes</h4>
              <p className="text-lg">{number_of_recipes}</p>

              <div className="flex gap-2 items-center mb-5 justify-center md:justify-start">
                <FontAwesomeIcon
                  className="text-secondary2 text-xl"
                  icon={faThumbsUp}
                />
                <h1 className="text-lg text-secondary2 font-bold">{likes}</h1>
              </div>
              <h4 className="inline-block border-b-2 border-secondary text-2xl font-bold text-secondary2">
                Short Bio
              </h4>
              <p className="text-lg text-justify mt-3 text-secondary font-semibold">
                {chefBio}
              </p>
            </div>
          </div>
          {/* Recipes */}
          <div className="md:grid grid-cols-2 gap-5 py-10">
            {recipes?.map((recipe, index) => {
              return (
                <RecipeCard
                  chefInfo={chefInfo}
                  index={index}
                  key={index}
                  recipe={recipe}
                  favouriteRecipes={favouriteRecipes}
                  addToFavourite={addToFavourite}
                  favouriteBtn={true}
                />
              );
            })}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
