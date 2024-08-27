import React from "react";
import Friend from "./Friend";
import FormSplitBill from "./FormSplitBill";

const FriendsList = ({ initialFriends, friends }) => {
  return (
    <div className="w-full  max-w-[900px] mx-auto grid  grid-cols-1 md:grid-cols-2 min-h-[250px]">
      <section className=" p-4 sm:p-8 flex flex-row ">
        <ul className="flex flex-col gap-4 w-full ">
          <h1 className="text-center font-semibold text-3xl">EatNSplit</h1>
          {friends.map((initialFriend) => (
            <Friend
              img={initialFriend.img}
              name={initialFriend.name}
              balance={initialFriend.balance}
              key={initialFriend.id}
            />
          ))}
        </ul>
      </section>
      <section className=" p-2 flex flex-row">
        <FormSplitBill initialFriends={friends} />
      </section>
    </div>
  );
};

export default FriendsList;
