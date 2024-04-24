import { useState } from "react";
import dummyData from "./dummyData/accordian";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSingleSelection = (currentID) => {
    setSelected(currentID === selected ? null : currentID);
  };
  const handleMultiSelection = (currentID) => {
    let arr = multiSelection;
    let findIndex = arr.indexOf(currentID);
    console.log(arr);
    if (findIndex == -1) arr.push(currentID);
    else arr.splice(findIndex, 1);
    setMultiSelection(arr);
  };
  return (
    <div>
      <div className="w-full grid place-items-center bg-gray-900 h-screen">
        <div className="flex flex-col justify-center items-center w-96">
          <div className="flex flex-col items-center gap-3 mb-4">
            <h1 className="text-white text-center  font-cascadiaSemiBold">
              Accordian
            </h1>
            <button
              onClick={
                enableMultiSelection
                  ? () => {
                      handleMultiSelection();
                      setEnableMultiSelection(!enableMultiSelection);
                    }
                  : () => setEnableMultiSelection(!enableMultiSelection)
              }
              className="bg-purple-300 rounded-full p-2 font-cascadiaRegular text-sm text-black"
            >
              Multi Selection{" "}
              {enableMultiSelection || enableMultiSelection ? "ON " : "OFF "}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2 duration-300 ">
            {dummyData.map((dataItem, i) => {
              return (
                <div className={`space-y-2 `}>
                  <div
                    onClick={() => {
                      handleMultiSelection(dataItem.id);
                      handleSingleSelection(dataItem.id);
                    }}
                    className="bg-purple-600 px-2 py-4 rounded gap-2 flex justify-between"
                  >
                    <h2 className="font-cascadiaBold text-sm">
                      {dataItem.question}
                    </h2>
                    <span className="bg-slate-900 rounded-full w-6 h-6 text-center align-middle leading-none text-lg font-bold">
                      {selected === dataItem.id ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    key={i}
                    className={`duration-300 ${
                      selected == dataItem.id ||
                      multiSelection.indexOf(dataItem.id) !== -1
                        ? "scale-100"
                        : "scale-0"
                    } `}
                  >
                    {enableMultiSelection
                      ? multiSelection.indexOf(dataItem.id) !== -1 && (
                          <div
                            className={`bg-purple-300  text-black font-cascadiaLight text-xs font-bold px-3 py-2 rounded duration-700 `}
                          >
                            {dataItem.answer}
                          </div>
                        )
                      : selected === dataItem.id && (
                          <div
                            className={`bg-purple-300  text-black font-cascadiaLight text-xs font-bold px-3 py-2 rounded duration-700`}
                          >
                            {dataItem.answer}
                          </div>
                        )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
