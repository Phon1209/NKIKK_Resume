import React from "react";

const navbar = () => {
  return (
    <ul className="flex flex-row justify-around text-2xl font-normal">
      <li className="p-2">Home</li>
      <li className="p-2">My works</li>
      {/* <li className="p-2">Resume</li> */}
      <li className="p-2">Contact</li>
    </ul>
  );
};

export default navbar;
