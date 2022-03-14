import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";

import Router from "next/router";
export default function FunnelBox({ currentFilter, redirecter }) {
  const { state, dispatch } = useStore();

  return !redirecter ? (
    <div className="flex justify-around items-center flex-wrap ">
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              item.categoryName === "category"
                ? Router.push("/caradvisor")
                : null;
              dispatch({
                type: item.categoryName,

                data: [{ min: item.value, max: item.max }],
              });
            }}
            key={index}

            className="w-72 h-72 flex flex-col justify-center items-center cursor-pointer rounded-lg shadow-lg m-4 hover:scale-125 bg-white"

          >
            <div className="w-52 h-5w-52 pt-4">
              <Image
                src={item.image}
                alt="picture"
                objectFit="contain"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="font-bold text-black pb-4 text-xl">{item.name}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
