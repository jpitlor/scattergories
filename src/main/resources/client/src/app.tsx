import Game from "./components/Game";

export default function App() {
  return (
    <div className="w-full h-full absolute bg-neutral-20">
      <div className="container p-4 my-8 mx-auto rounded-md shadow-md bg-neutral-0">
        <Game />
      </div>
    </div>
  );
}
