
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipe from "./Components/OurRecipes/Recipe";
import SideBar from "./Components/OurRecipes/SideBar";

const App = () => {
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
        <Recipe></Recipe>
        {/* Recipes side bar */}
        <SideBar></SideBar>
      </section>
    </div>
  );
};

export default App;
