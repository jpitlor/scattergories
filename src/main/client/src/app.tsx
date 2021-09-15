import CreateProfile from "./pages/CreateProfile";
import JoinGame from "./pages/JoinGame";
import PlayGame from "./pages/PlayGame";
import Logo from "./components/Logo";
import { useAppSelector } from "./data/store";
import { Pages } from "./data/pages";

export default function App() {
  const page = useAppSelector((state) => state.app.page);

  return (
    <div className="w-full h-full absolute bg-neutral-20 overflow-y-auto">
      <Logo className="bg-red-300 pb-36" />
      <div className="container -mt-32 my-8 py-8 mx-auto rounded-md shadow-md bg-neutral-0">
        {page === Pages.CreateProfile && <CreateProfile />}
        {page === Pages.JoinGame && <JoinGame />}
        {page === Pages.PlayGame && <PlayGame />}
      </div>
    </div>
  );
}
