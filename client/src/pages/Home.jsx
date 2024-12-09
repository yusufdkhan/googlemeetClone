import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-2xl grid gap-10">
        <input
          className="block border-2 border-black rounded-xl p-2 text-center"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="block border-2 border-black rounded-xl p-2 text-center"
          type="text"
          placeholder="Enter your Room Id"
        />
        <button className="bg-blue-400 text-cyan-50 rounded-xl py-2 hover:bg-blue-600">
          ENTER ROOM
        </button>
      </div>
    </div>
  );
};

export default Home;
