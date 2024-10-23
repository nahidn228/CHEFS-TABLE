/* eslint-disable react/prop-types */
const SideBar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl p-2  ">
      {/* Want to cook Table */}

      <div className="overflow-x-auto ">
        <h2 className="text-center text-lg font-bold border-b-2 mb-4 pb-2">
          Want to cook: {recipeQueue.length}
        </h2>
        <table className="table text-gray-600">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id),
                        calculateTimeAndCalories(
                          recipe.preparing_time,
                          recipe.calories
                        );
                    }}
                    className="btn btn-md rounded-full bg-[#0BE58A]  text-gray-800 text-sm "
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Currently cooking Table */}

      <div className="overflow-x-auto  mt-10">
        <h2 className="text-center text-lg font-bold border-b-2 mb-4 pb-2">
          Currently cooking: {preparedRecipe.length}
        </h2>
        <table className="table  text-gray-600">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparedRecipe.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td></td>
              </tr>
            ))}
            <tr className="border-none font-medium">
              <td></td>
              <td></td>
              <td>Total Time: {totalTime} minutes</td>
              <td>Total Calories: {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
