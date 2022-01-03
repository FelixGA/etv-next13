import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/ResultList/TruncateFilterDesktop";

export default function comparePage() {
  return (
    <div className=" mx-32">
      <FilterBlock />
      <div className="flex flex-row ">
        <div className="hidden md:flex w-1/4">
          <TruncateFilterDesktop />
        </div>

        <ResultList />
      </div>
    </div>
  );
}
