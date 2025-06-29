import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-full flex justify-between h-15 items-center shadow bg-gray-300 px-10">
        <div className="w-[10%] h-full flex items-center">
          <h1 className="font-bold text-zinc-800">LOGO.</h1>
        </div>
        <div className="w-[50%] h-full">
          <ul className="w-full h-full flex gap-6 list-none items-center font-medium text-zinc-800">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">ABOUT</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
