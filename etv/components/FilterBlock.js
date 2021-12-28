import React from "react";

function FilterBlock() {
  return (
    <div>
      <div className="h-10 shadow-dropdown flex flex-row justify-between align-middle">
        <span className="ml-6 font-bold  my-auto text-sm text-blue-darker">
          <span className="mr-2"> Ⴤ </span>Alle Filter anzeigen
        </span>
        <span>{"   "}</span>
        <span className="font-bold	mr-6 my-auto text-sm text-blue-darker">
          ˅
        </span>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-44 h-9  ">
          <span>3000-9000 €</span>
        </div>
        <div className="w-44 h-9 ">
          <span>bis 80km/h</span>
        </div>
        <div className="w-44 h-9 ">
          <span>Bis 100 km</span>
        </div>
        <div className="w-44 h-9 ">
          <span>bis 100 kg</span>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
