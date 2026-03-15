import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-full background flex flex-col items-center">
      <h1 className="bg-white w-11/12 rounded-lg py-3 px-10 text-center font-bold text-2xl mt-5">RANDOM GIF</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-7">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
