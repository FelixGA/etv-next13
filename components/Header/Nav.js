import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "../store";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { dispatch } = useStore();
  // (router.pathname);
  return (
    <div className={router.pathname == "/caradvisor" ? "hidden" : "w-full"}>
      <nav className=" ">
        <ul className="flex justify-around items-center flex-1 text-[#b1a7a7] text-lg xl:text-xl font-bold">
          <li>
            <Link href="/">
              <a
                className="text-[#ffffff]"
                onClick={() => {
                  setIsActive(false);
                  dispatch({
                    type: "mobileNavActive",
                    data: false,
                  });
                  dispatch({
                    type: "rangeLithium",
                    data: [],
                  });
                  dispatch({
                    type: "loadingWeight",
                    data: [],
                  });
                  dispatch({
                    type: "price",
                    data: [],
                  });
                  dispatch({
                    type: "maxSpeed",
                    data: [],
                  });
                  dispatch({
                    type: "category",
                    data: [],
                  });
                  dispatch({
                    type: "chargingTimeLithium",
                    data: [],
                  });
                }}
              >
                Start
              </a>
            </Link>
          </li>
          <li>
            <Link href="/fahrzeuge">
              <a
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Transporter
              </a>
            </Link>
          </li>
          <li className="">
            <Link href="/comparePage">
              <a
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Transporter-Vergleich
              </a>
            </Link>
          </li>
          <li>
            <Link href="/magazin">
              <a
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Magazin
              </a>
            </Link>
          </li>
          <li>
            <Link href="/kontakt">
              <a
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
