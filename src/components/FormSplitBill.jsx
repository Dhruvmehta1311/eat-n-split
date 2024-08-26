import React from "react";
import Button from "./Button";

const FormSplitBill = ({ initialFriends }) => {
  return (
    <form className="bg-orange-100 p-2 rounded-sm sm:p-6 px-2.5 w-[98%]  font-semibold mx-auto max-w-full flex flex-col gap-4">
      <h3 className="sm:text-4xl text-2xl text-center">
        Split Bill With Clarke
      </h3>
      <section className="flex sm:items-center flex-col sm:flex-row justify-between gap-2 ">
        <label>💸Bill Value: </label>
        <input
          placeholder=""
          type="text"
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
        />
      </section>
      <section className="flex flex-col sm:items-center sm:flex-row justify-between gap-2 ">
        <label>🤵 Your Expense: </label>
        <input
          placeholder=""
          type="text"
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
        />
      </section>
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 ">
        <label>💸Clarke's Expense: </label>
        <input
          placeholder=""
          disabled
          type="text"
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
        />
      </section>
      <section className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 ">
        <label>💸Who's Paying the Bill? </label>
        <select
          className="max-w-[210px] w-[90%] h-[40px] rounded pl-4"
          name=""
          id=""
        >
          <option value="">You</option>
          {initialFriends.map((initialFriend) => (
            <option value="">{initialFriend.name}</option>
          ))}
        </select>
      </section>
      <section className="flex justify-end">
        <Button>Split</Button>
      </section>
    </form>
  );
};

export default FormSplitBill;
