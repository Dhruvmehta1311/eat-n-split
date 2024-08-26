import React from "react";
import Button from "./Button";

const FormAddFriend = () => {
  return (
    <div className="ml-6 max-w-[500px] w-[90%] bg-orange-100 min-h-[100px] p-6 rounded ">
      <form className="flex flex-col gap-4 font-semibold text-lg max-w-[full] mx-auto w-[99%]">
        <section className="flex  flex-col justify-between gap-2 ">
          <label>Friend&apos;s Name: </label>
          <input type="text" className="max-w-80 h-[40px] rounded" />
        </section>

        <section className="flex flex-col justify-between gap-2 ">
          <label>Image URL: </label>
          <input type="text" className="max-w-80 h-[40px] rounded" />
        </section>
        <div className="flex sm:justify-end">
          <Button>Close</Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddFriend;
