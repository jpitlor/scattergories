import CreateProfile from "./pages/CreateProfile";
import JoinGame from "./pages/JoinGame";
import PlayGame from "./pages/PlayGame";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="w-full h-full absolute bg-neutral-20">
      <Logo className="bg-red-300 pb-36" />
      <div className="container -mt-32 my-8 py-8 mx-auto rounded-md shadow-md bg-neutral-0">
        {false && <CreateProfile />}
        {true && <JoinGame />}
        {true && <PlayGame />}
      </div>
    </div>
  );
}
