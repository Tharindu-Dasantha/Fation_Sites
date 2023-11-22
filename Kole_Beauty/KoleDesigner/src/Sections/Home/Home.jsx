import React from "react";

// Import the image
import homeImage from "../../assets/home.jpg";

function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        {/* Image goes here  */}
        <div
          className="bg-cover relative"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-gray-700 to-blue-900 opacity-50"></div>
          <div className="flex flex-col justify-center items-center  opacity-80 h-screen text-white">
            <h4 className="text-[30px] opacity-50">Unbeatable, Unchanging, Ever-Evolving</h4>
            <h1 className="text-[300px] font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text relative bottom-20">BEAUTY</h1>
            <p className="w-[50%] text-center relative bottom-28 text-[15px]" style={{fontFamily:  'Dancing Script'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              quibusdam quo odio ad earum temporibus eaque ipsa eveniet libero
              dolopellat tempore, animi nihil ipsam ad deserunt maiores nostrum
              rem quasi quod expedita. Cum, dolorem facilis.
            </p>
            <button className="relative bottom-16 bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 font-bold border rounded-xl px-8 py-4 transition-all duration-1000 ease-in-out">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
