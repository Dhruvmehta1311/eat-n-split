import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ onSplitBill, selectedFriend }) => {

  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState("")
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user")

  function handleSubmit(e){
    e.preventDefault()

    if(!bill || !paidByUser) return
    onSplitBill(whoIsPaying === "You" ? paidByFriend : -paidByUser)
  }
  return (
    <form onSubmit={handleSubmit} className="bg-orange-100 pb-6 rounded-sm sm:p-4 px-2.5 w-[98%]  font-semibold mx-auto max-w-full flex flex-col gap-4">
      <h3 className="sm:text-4xl text-2xl text-center">
        Split Bill With {selectedFriend.name}
      </h3>
      <section className="flex sm:items-center flex-col sm:flex-row justify-between gap-2 ">
        <label>💸Bill Value: </label>
        <input
          placeholder=""
          type="text"
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
          value={bill}
          onChange={(e)=>(
            setBill(Number(e.target.value))
          )}
        />
        
      </section>
      <section className="flex flex-col sm:items-center sm:flex-row justify-between gap-2 ">
        <label>🤵 Your Expense: </label>
        <input
          placeholder=""
          type="text"
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
          value={paidByUser}
          onChange={(e)=>(
            setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))
          )}
        />
        
      </section>
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 ">
        <label>💸{selectedFriend.name} Expense: </label>
        <input
          placeholder=""
          // disabled
          type="text"
          disabled
          className="max-w-80 h-[40px] rounded pl-4 outline-none"
          value={paidByFriend}
        />
      </section>
      <section className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 ">
        <label>💸Who's Paying the Bill? </label>
        <select
          className="max-w-[210px] w-[90%] h-[40px] rounded pl-4"
          name=""
          id=""
          value={whoIsPaying}
          onChange={(e)=>(
            setWhoIsPaying(e.target.value)
          )}
        >
          
          <option value="You">You</option>
          <option value="Friend">{selectedFriend.name}</option>
          
          {/* {initialFriends.map((initialFriend) => (
            <option key={initialFriend.id} value="">
              {initialFriend.name}
            </option>
          ))} */}
        </select>
       
      </section>
      <section className="flex justify-end">
        <Button>Split</Button>
      </section>
    </form>
  );
};

export default FormSplitBill;
