import { useState, useEffect } from "react";
import { useStore } from "../store";
import { useRouter } from "next/router";

import Form from "./Form";
import Modal from "../core/Modal";

function ButtonAnfragen({ carItem }) {
  /* HOOKS */

  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="w-[280px] xs:w-96 sm:w-[360px]">
          <Form open={open} setOpen={setOpen} carItem={carItem} />
        </div>
      </Modal>

      <button
        onClick={() => {
          setDisabled(true);
          setOpen(true);
        }}
        onSubmit={() => setOpen(false)}
        className={
          router.pathname == "/activeCompare"
            ? "relative bg-orange-lighter transition hover:bg-yellow-light text-blue-dark font-bold text-sm md:text-md xl:tracking-wide rounded w-32 md:w-96 h-8 sm:h-10 disabled:bg-grey-light mx-1 flex justify-center items-center"
            : "relative bg-orange-lighter transition hover:bg-yellow-light text-blue-dark font-bold text-sm xl:tracking-wide rounded w-32 md:w-44 h-8 sm:h-10 disabled:bg-grey-light"
        }
      >
        Jetzt anfragen
      </button>
    </>
  );
}
export default ButtonAnfragen;
