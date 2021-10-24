import React from "react";

const SplashImage = () => {
  return (
    <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img
        src="https://source.unsplash.com/random"
        alt="splash"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashImage;
