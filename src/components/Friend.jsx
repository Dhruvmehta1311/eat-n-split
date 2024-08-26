import React from "react";

const Friend = ({ name }) => {
  return (
    <>
      <li className="text-xl w-full hover:bg-orange-100 cursor-pointer rounded p-2">
        {name}
      </li>
    </>
  );
};

export default Friend;
