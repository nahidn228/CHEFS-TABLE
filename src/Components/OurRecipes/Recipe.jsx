import { useEffect, useState } from "react";

const Recipe = ({ handleAddRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  //console.log(recipes);
  return (
    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
          <figure className="p-6">
            <img
              className="md:h-52 w-full rounded-xl"
              src={recipe.recipe_image}
              alt={recipe.recipe_name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl ">{recipe.recipe_name}</h2>
            <p className="text-gray-500">{recipe.short_description}</p>
            <h2 className="card-title">
              Ingredients : {recipe.ingredients.length}
            </h2>
            <ul className="text-gray-500 ml-6">
              {recipe.ingredients.map((i, idx) => (
                <li key={idx} className="list-disc">
                  {i}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 flex gap-8">
              <span>
                <i className="fa-regular fa-clock"></i> {recipe.preparing_time}{" "}
                minutes
              </span>
              <span>
                <i className="fa-solid fa-fire-flame-curved"></i>{" "}
                {recipe.calories} calories
              </span>
            </p>

            <div className="card-actions ">
              <button
                onClick={()=> handleAddRecipe(recipe)}
                className="btn rounded-full bg-[#0BE58A] px-6 text-gray-800 font-medium mt-4"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
