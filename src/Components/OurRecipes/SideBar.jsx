const SideBar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl p-2  ">
      <h2 className="text-center text-lg font-bold border-b-2 mb-4 pb-2">
        Want to cook: {recipeQueue.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th>
                
              </th>
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
                <button className="btn btn-md rounded-full bg-[#0BE58A]  text-gray-800 text-sm ">
                  Preparing
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
