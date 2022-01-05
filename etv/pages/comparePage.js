import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/ResultList/TruncateFilterDesktop";

export default function comparePage() {
  return (
    <div className=" md:mx-32 bg-[#F2F9FF] md:bg-white ">
      <div className="flex flex-row ">
        <div className="  w-full flex flex-row">
          <div className="hidden md:block md:w-1/4 md:min-w-fit  md:mt-14 md:pr-4 ">
            <TruncateFilterDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            <ResultList />
          </div>
        </div>
      </div>
    </div>
  );
}
