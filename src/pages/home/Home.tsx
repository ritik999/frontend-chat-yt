import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/MessageContainer";

const Home = () => {
  return (
    <div className="grid grid-cols-3 w-full h-2/3 bg-gray-600 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-gray-100 relative">
      <div className="w-full py-4 px-2 ">
        <Sidebar />
      </div>
      <div className="w-full py-4 px-2 relative col-span-2 border-l-2 border-gray-600">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
