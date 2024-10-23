import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurFeedback from "./Components/OurFeedback/OurFeedback";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipe from "./Components/OurRecipes/Recipe";
import SideBar from "./Components/OurRecipes/SideBar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  
  const handleExplore = () => {
    
  };

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  };
  const handleRemove = (id) => {
    //find which recipe to remove
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    // remove from want to cook table
    const updateQueue = recipeQueue.filter((recipe) => recipe.recipe_id !== id);
    setRecipeQueue(updateQueue);
    setPreparedRecipe([...preparedRecipe, deleteRecipe]);
  };

  const handleAddRecipe = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (isExist) {
      alert(`${recipe.recipe_name} is already send for Cook`);
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };
  //console.log(recipeQueue);
  return (
    <div className="max-w-screen-xl mx-auto space-y-10 my-5">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner handleExplore={handleExplore}></Banner>

      {status ? (
        <OurFeedback></OurFeedback>
      ) : (
        <section>
          {/* Our Recipes */}
          <OurRecipes></OurRecipes>
          <section className="flex flex-col md:flex-row">
            {/* Recipes card */}
            <Recipe handleAddRecipe={handleAddRecipe}></Recipe>
            {/* Recipes side bar */}
            <SideBar
              totalCalories={totalCalories}
              totalTime={totalTime}
              calculateTimeAndCalories={calculateTimeAndCalories}
              preparedRecipe={preparedRecipe}
              handleRemove={handleRemove}
              recipeQueue={recipeQueue}
            ></SideBar>
          </section>
        </section>
      )}
    </div>
  );
};

export default App;
