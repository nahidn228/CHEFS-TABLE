import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipe from "./Components/OurRecipes/Recipe";
import SideBar from "./Components/OurRecipes/SideBar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const handleAddRecipe = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (isExist) {
      alert("This is Already Coock");
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };
  console.log(recipeQueue);
  return (
    <div className="max-w-screen-xl mx-auto space-y-10 my-5">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes */}
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row">
        {/* Recipes card */}
        <Recipe handleAddRecipe={handleAddRecipe}></Recipe>
        {/* Recipes side bar */}
        <SideBar recipeQueue={recipeQueue}></SideBar>
      </section>
    </div>
  );
};

export default App;
