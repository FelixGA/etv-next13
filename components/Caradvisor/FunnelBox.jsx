import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";

import Router from "next/router";
export default function FunnelBox({ currentFilter, redirecter }) {
  const { state, dispatch } = useStore();

  return !redirecter ? (
    <div className="flex flex-wrap w-[90%] md:w-full justify-center">
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
            className="w-32 sm:w-40 lg:w-56 h-32 sm:h-40 lg:h-56 flex flex-col justify-center items-center cursor-pointer rounded-lg shadow-lg m-2 hover:scale-110 bg-white"
          >
            <div className="w-24 sm:w-36 lg:w-56 h-24 sm:h-36 lg:h-56 pt-4">
              <Image
                src={item.image}
                alt="picture"
                objectFit="contain"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="font-bold text-black py-4 text-sm lg:text-lg xl:text-xl">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
