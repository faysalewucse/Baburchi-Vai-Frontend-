import React from "react";
import ChefInfoCard from "../../components/ChefInfoCard";

export default function Chefs({ chefs }) {
  return (
    <div className="bg-orange-100 p-20">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-secondary2">
          Professional Chefs
        </h1>
        <p className="text-secondary w-1/3 mx-auto">
          For your better service we have the list of all professional chefs in
          the list. Choose your desired one.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5">
        {chefs.map((chef) => (
          <ChefInfoCard key={chef.id} info={chef} />
        ))}
      </div>
    </div>
  );
}
