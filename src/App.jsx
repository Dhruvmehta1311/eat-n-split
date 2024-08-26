import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 123434,
    name: "Aarav",
    img: "https://avatar.iran.liara.run/public/40",
    balance: -7,
  },
  {
    id: 123435,
    name: "Ansh",
    img: "https://avatar.iran.liara.run/public/41",
    balance: 60,
  },
  {
    id: 123436,
    name: "Advik",
    img: "https://avatar.iran.liara.run/public/42",
    balance: 0,
  },
  {
    id: 123437,
    name: "Advik",
    img: "https://avatar.iran.liara.run/public/42",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriendForm() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  return (
    <div className=" min-h-screen w-full flex flex-col justify-center p-4">
      <FriendsList initialFriends={initialFriends} />
      <div className="flex flex-col gap-4">
        {showAddFriend ? <FormAddFriend /> : null}
        <div className="max-w-[500px] sm:max-w-[550px] w-full sm:flex justify-end pr-8 sm:pr-14  pl-12">
          <Button onClick={handleAddFriendForm}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
