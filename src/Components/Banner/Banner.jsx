const Banner = () => {
  const backgroundImage = {
    backgroundImage: "url('https://i.ibb.co.com/VHw7BWW/Rectangle-1.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  };
  return (
    <div>
      {/* Hero section start */}
      <div className="hero min-h-screen rounded-xl" style={backgroundImage}>
        <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 text-gray-300">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className='flex gap-4 justify-center'>
            <button className="btn bg-[#0BE58A] rounded-full">Explore Now</button>
            <button className="btn bg-transparent rounded-full text-white">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
