import { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("../../../public/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Recipe Card: {recipes?.recipes?.length} </h1>
    </div>
  );
};

export default Recipe;
