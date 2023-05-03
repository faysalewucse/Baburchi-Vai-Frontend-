import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";

export default function ChefInfo() {
  const chefInfo = useLoaderData();
  const {
    id,
    chef_name,
    chef_picture,
    years_of_experience,
    likes,
    number_of_recipes,
    chefBio,
  } = chefInfo;
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-10">
        <div className="bg-orange-100 flex rounded-lg p-5">
          <img
            className="w-1/4 rounded-lg object-cover"
            src={chef_picture}
            alt="chef-image"
          />
          <div className="p-5">
            <h1 className="text-4xl font-bold text-secondary2">{chef_name}</h1>
            <h4 className="text-xl font-bold text-secondary">Experience</h4>
            <p className="text-lg">{years_of_experience} years</p>
            <h4 className="text-xl font-bold text-secondary">Recipes</h4>
            <p className="text-lg">{number_of_recipes}</p>

            <div className="flex gap-2 items-center mb-5">
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
      </div>
    </div>
  );
}
