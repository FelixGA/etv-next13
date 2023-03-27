import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";
import { useRouter } from "next/router";
import Form from "../../components/repeated/Form";
import Router from "next/router";

export default function FunnelBoxTest({ currentFilter, redirecter }) {
  const { state, dispatch } = useStore();
  // console.log("state von funnelboxtest: ", state.categorys[0].min)
  const router = useRouter();

  return !redirecter ? (
    <div
      className={
        router.pathname == "/home"
          ? "grid grid-cols-2 sm:grid-cols-4  gap-4 w-full md:scale-[85%]"
          : "grid grid-cols-2 sm:grid-cols-4  gap-4 w-full scale-[85%]"
      }
    >
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              item.categoryName === "category" /* ? <Form /> : null; */
                ? Router.push("/caradvisorFunnel")
                : null;
              dispatch({
                type: item.categoryName,

                data: [{ min: item.value, max: item.max }],
              });
            }}
            key={index}
            className="flex flex-col items-center justify-center transition bg-white cursor-pointer shadow-dropdown sm:mb-8 hover:scale-110 min-w-[140px] lg:w-[190px] min-h-[140px] lg:h-[190px] md:w-[190px] md:h-[190px] xl:w-[220px] xl:h-[220px]"
          >
            {/* {console.log("alle Kategorien von FunnelBoxTest: ", item.value)} */}

            {/* <div className="w-full p-4" onClick={()=> {
              const cat = item.value}}> */}
              <div className="w-full p-4">
              <Image
                src={item.image}
                alt="picture"
                objectFit="contain"
                width={48}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="py-4 text-sm font-bold text-center text-black lg:text-lg xl:text-xl">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  ) : null;
}
