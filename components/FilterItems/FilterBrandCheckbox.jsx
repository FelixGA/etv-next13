import { useStore } from "../store";

function FilterBrandCheckbox(props) {
  const { state, dispatch } = useStore();
  return (
    <>
      <input
        className=" appearance-none w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark after:content-['✔'] after:relative after:left-1 after:bottom-0.5 border-solid "
        type="checkbox"
        name={props.checkbox.title}
        // defaultChecked={false}
        /* CHECKING WHICH CHECKBOX IS ACTIVE UPON THE value */

        checked={state.brands.some(
          (item) => item.name === props.checkbox.title
        )}
        onChange={() => {
          return null;
        }}
      ></input>
    </>
  );
}

export default FilterBrandCheckbox;
