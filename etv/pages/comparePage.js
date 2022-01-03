import FilterBlock from "../components/ResultList/FilterBlock";
import ResultList from "../components/ResultList/ResultList";

export default function comparePage() {
  return (
    <div className="mx-2 md:mx-32">
      <FilterBlock />

      <ResultList />
    </div>
  );
}
