import React from "react";

const Friend = ({ name, img, balance }) => {
  return (
    <>
      <li className="font-semibold w-full hover:bg-orange-100 cursor-pointer rounded items-center justify-between p-2 flex gap-4">
        <div className="flex gap-4">
          <img className="h-10" src={img}></img>
          <div>
            <h3>{name}</h3>
            <p
              className={
                balance < 0
                  ? "text-red-600"
                  : balance == 0
                  ? "text-black"
                  : "text-green-500"
              }
            >
              {balance < 0
                ? `You Owe ${name} $${balance}`
                : balance == 0
                ? `You And ${name} are even`
                : `${name} Ows you ${balance}`}
            </p>
          </div>
        </div>
        <>
          <button className="px-6 py-2 bg-orange-400 rounded-md cursor-context-pointer">
            Select
          </button>
        </>
      </li>
    </>
  );
};

export default Friend;
