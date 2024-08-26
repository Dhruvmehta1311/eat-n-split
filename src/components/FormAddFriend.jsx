import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <div className="sm:ml-6 max-w-[500px]  bg-orange-100 min-h-[100px] p-6 rounded ">
      <form className="flex flex-col gap-4 font-semibold text-lg max-w-[full] mx-auto w-[99%]">
        <section className="flex  flex-col justify-between gap-2 ">
          <label>Friend&apos;s Name: </label>
          <input
            placeholder="Enter Friend's Name"
            type="text"
            className="max-w-80 h-[40px] rounded pl-4 outline-none"
          />
        </section>

        <section className="flex flex-col justify-between gap-2 ">
          <label>Image URL: </label>
          <input
            placeholder="Image URL Here"
            type="text"
            className="max-w-80 h-[40px] rounded pl-4 outline-none"
          />
        </section>
        <div className="flex sm:justify-end">
          <Button>Close</Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddFriend;
