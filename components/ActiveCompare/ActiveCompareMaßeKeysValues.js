import ActiveCompareMaßeKeys from "./ActiveCompareMaßeKeys";
import ActiveCompareMaßeValues from "./ActiveCompareMaßeValues";

export default function ActiveCompareMaßeKeysValues({ getKeys, comparedCars }) {
  return (
    <>
      <ActiveCompareMaßeKeys getKeys={getKeys} comparedCars={comparedCars} />
      <ActiveCompareMaßeValues comparedCars={comparedCars} />
    </>
  );
}
