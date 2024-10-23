/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
const OurFeedback = () => {
  const [ourFeedback, setOurFeedback] = useState([]);

  useEffect(() => {
    fetch("./feedback.json")
      .then((res) => res.json())
      .then((data) => setOurFeedback(data));
  });
  return (
    <div>
      {/* OurFeedback text */}
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h3 className="text-4xl font-bold">Our Feedback</h3>
        <p className="text-gray-600">
          Hear what others have to say! Check out reviews and ratings from
          people who’ve tried our recipes. Whether it’s helpful tips or rave
          reviews, their feedback will guide you to the perfect dish. Feel free
          to share your own experience too!
        </p>
      </div>
      {/* OurFeedback fetch data */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 my-10 justify-center items-center">
        {ourFeedback.map((feedbacks) => (
          <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={feedbacks.recipe_image}
                alt={feedbacks.recipe_name}
                className="rounded-xl h-64 w-full"
              />
            </figure>
            <div className="p-10 items-center ">
              <h2 className="card-title">{feedbacks.recipe_name}</h2>
              {feedbacks.feedback.map((feedback) => (
                <ul className="mt-4 text-gray-700">
                  <li className="font-semibold">User Id: {feedback.user_id} </li>
                  <li className="font-semibold">Name: {feedback.user_name} </li>
                  <li className="font-semibold">Rating: {feedback.rating} </li>
                  <li>Comment: {feedback.comment} </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeedback;
