import React from "react";
import ChefInfoCard from "../../components/ChefInfoCard";

export default function Chefs({ chefs }) {
  return (
    <div className="bg-orange-100 p-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-3 gap-5">
        {chefs.map((chef) => (
          <ChefInfoCard key={chef.id} info={chef} />
        ))}
      </div>
    </div>
  );
}
