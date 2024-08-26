import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className=" min-h-screen w-full flex flex-col justify-center p-4">
      <FriendsList />
      <div className="flex flex-col gap-4">
        <FormAddFriend />
        <div className="max-w-[500px] sm:max-w-[550px] w-full sm:flex justify-end pr-8 sm:pr-14  pl-12">
          <Button>Add Friend</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
