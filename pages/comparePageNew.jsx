import FilterBlock from "../components/FilterItems/ActiveFilterBlock";
import ResultList from "../components/ResultList/ResultList";
import FiltersDesktop from "../components/FilterItems/FiltersDesktop";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import { useState } from "react";
import FiltersMobile from "../components/FilterItems/FiltersMobile";

export default function comparePage() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useStore();

  return (
    <div className="grid grid-cols-[25%_minmax(75%,_1fr)] md:grid-cols-[30%_minmax(70%,_1fr)] bg-white z-50">
      <div className="xl:ml-32 mt-20  hidden md:block bg-white ">
        <FiltersDesktop />
      </div>
      <div className="flex md:hidden"><FiltersMobile/></div>
      <div className="heading+sorting+content xl:mr-32  ">
        <FilterBlock />
        <ResultList />
      </div>
      <div className="">
        <StickyPopUpForComparison />
      </div>
    </div>
  );
}

{
  /* <div className=" xl:mx-32 bg-white z-90">
  <div className="flex ">
    <div className="flex-1 hidden md:block  md:mt-14 md:pr-4  ">
      <FiltersDesktop />
    </div>
    <div className="flex flex-col md:w-3/4 w-full ">
      <FilterBlock />
      <ResultList  />
    </div>
  </div>
</div>
<StickyPopUpForComparison /> */
}
