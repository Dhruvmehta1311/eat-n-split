import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ initialFriends, onHandleAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://avatar.iran.liara.run/public/63");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      name,
      img: image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    const friendsArray = [...initialFriends, newFriend];

    onHandleAddFriend(newFriend);
  }

  return (
    <div className="max-w-[990px] ">
      <div className=" max-w-[500px] bg-orange-100 min-h-[100px] p-6 rounded w-[99%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-semibold text-lg max-w-[full] mx-auto w-[99%]"
        >
          <section className="flex  flex-col justify-between gap-2 ">
            <label>Friend&apos;s Name: </label>
            <input
              placeholder="Enter Friend's Name"
              type="text"
              className="max-w-80 h-[40px] rounded pl-4 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <section className="flex flex-col justify-between gap-2 ">
            <label>Image URL: </label>
            <input
              placeholder="Image URL Here"
              type="text"
              className="max-w-80 h-[40px] rounded pl-4 outline-none"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </section>
          <div className="flex sm:justify-end">
            <Button>Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddFriend;
