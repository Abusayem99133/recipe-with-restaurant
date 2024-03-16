import { BsFillMoonStarsFill } from "react-icons/bs";

import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl text-center mt-4 font-semibold text-purple-600 box p-4 ">
        Restaurant in Down Site
      </h1>
      <hr />
      <div className="mt-4 box flex justify-around">
        <div className="flex items-center gap-4">
          <h1 className="text-red-500 text-3xl font-semibold">Restart</h1>
          <h2 className="text-green-500">
            <BsFillMoonStarsFill />
          </h2>
        </div>
        <div>
          <input
            className="bg-slate-200 rounded-full p-4 text-center"
            type="text"
            name=""
            id=""
            placeholder="Restart your life...!"
          />
        </div>
      </div>
      <div
        className=""
        style={{ backgroundImage: "url ({https://iili.io/JX2heMN.jpg})" }}
      >
        <div></div>
      </div>
    </>
  );
}

export default App;
