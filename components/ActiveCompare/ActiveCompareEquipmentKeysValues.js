import React from "react";
import ActiveCompareEquipmentKeys from "./ActiveCompareEquipmentKeys";
import ActiveCompareEquipmentValues from "./ActiveCompareEquipmentValues";

export default function ActiveCompareEquipmentKeysValues({
  getKeys,
  comparedCars,
}) {
  return (
    <>
      <ActiveCompareEquipmentKeys
        getKeys={getKeys}
        comparedCars={comparedCars}
      />
      <ActiveCompareEquipmentValues comparedCars={comparedCars} />
    </>
  );
}
