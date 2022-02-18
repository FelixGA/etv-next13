import { useState, useEffect } from "react";
import { useStore } from "../store";
function ButtonAnfragen() {
  /* HOOKS */

  const [disabled, setDisabled] = useState(false);

  return (
    <button
      onClick={() => {
        setDisabled(true);
      }}
      className="bg-orange-lighter  hover:bg-yellow-light text-blue-dark mb-4 font-bold text-sm xl:tracking-wide rounded w-32 xl:w-40 h-8 sm:h-10 disabled:bg-grey-light "
    >
      {disabled ? "Angefragt" : "Jetzt anfragen"}
    </button>
  );
}
export default ButtonAnfragen;
