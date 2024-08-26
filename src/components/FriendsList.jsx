import React from "react";
import Friend from "./Friend";

const initialFriends = [
  {
    id: 123434,
    name: "Aarav",
    balance: -7,
  },
  {
    id: 123435,
    name: "Ansh",
    balance: 60,
  },
  {
    id: 123436,
    name: "Advik",
    balance: 54,
  },
];

const FriendsList = () => {
  return (
    <div className="w-full  max-w-[1100px] grid grid-cols-2 min-h-[400px]">
      <section className=" p-10 flex flex-row">
        <ul className="flex flex-col gap-4 w-full">
          {initialFriends.map((initialFriend) => (
            <Friend name={initialFriend.name} key={initialFriend.id} />
          ))}
        </ul>
      </section>
      <section className=" p-10 flex flex-row">Hello</section>
    </div>

    // <div className="h-screen w-full">
    //   <div className="grid grid-cols-2 items-center max-w-[1500px] w-[90%] mx-auto text-2xl ">
    //     <section className="w-1/2 bg-green-700">
    //       <ul>
    //         {initialFriends.map((initialFriend) => (
    //           <li key={initialFriend.id}>{initialFriend.name}</li>
    //         ))}
    //       </ul>
    //     </section>
    //     <section className="w-1/2 bg-green-700">
    //       <ul>
    //         {initialFriends.map((initialFriend) => (
    //           <li key={initialFriend.id}>{initialFriend.name}</li>
    //         ))}
    //       </ul>
    //     </section>
    //   </div>
    // </div>
  );
};

export default FriendsList;
