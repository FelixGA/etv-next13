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
            className="w-48 h-48
            flex flex-col justify-center items-center  rounded-lg shadow-lg m-8 hover:scale-125"
          >
            {" "}
            <div className="w-56 h-56 px-2 ">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="font-bold text-black pt-8">{item.name}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}
