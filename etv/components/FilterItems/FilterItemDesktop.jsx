import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import FilterCheckbox from "./FilterCheckbox";
import { useStore } from "../store";
function FilterItemDesktop(props) {
  const item = props.item;
  const { state, dispatch } = useStore();

  /* to render the four ranges */
  const rangesForCheckboxes = item.options.map((checkbox, index) => (
    <div
      onClick={() => {
        dispatch({
          type: checkbox.categoryName,
          data: [{ min: checkbox.value, max: 99999 }],
        });
      }}
      key={uuidv4()}
      className="mt-4 flex cursor-pointer py-2 "
    >
      <FilterCheckbox checkbox={checkbox} />
      <label
        forhtml={checkbox.name}
        className="inline-flex items-center  pl-5 text-lg text-[#2C3F53] "
      >
        {checkbox.name}
      </label>
    </div>
  ));
  return (
    <>
      <div
        className=" cursor-pointer "
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.title ? item.title : "",
          });
        }}
      >
        <div className="flex flex-row justify-between border-b py-4  w-full ">
          <div className="flex flex-row pl-4 ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
                unoptimized={true}
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-[bg-blue-darker]">{item.title}</h4>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-row  ">
            <span
              className={
                state[item.category].length > 0
                  ? "flex text-green-700 text-xl "
                  : "hidden"
              }
            >
              ✓
            </span>
            <div
              className={
                state?.truncates == item.title
                  ? "flex items-center w-6 mr-5 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-6 mr-5 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state?.truncates == item.title ? "flex flex-col ml-8 " : "hidden"
        }
      >
        {/* RENDERING THE FOUR RANGES */}
        {rangesForCheckboxes}
      </div>
    </>
  );
}

export default FilterItemDesktop;
