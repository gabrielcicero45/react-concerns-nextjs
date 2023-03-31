import React from "react";
import { camelCase } from "lodash";
import { representFragilityByTerm } from "@/ui/utils/representFragilityByTerm";
import { representWearByTerm } from "@/ui/utils/representWearByTerms";
import cx from "./InventoryItem.module.scss";

const InventoryItem = ({ title, sector, fragility, lastMaintenance, wear }) => {
  const wearTerm = representWearByTerm(wear);
  const fragilityTerm = representFragilityByTerm(fragility);
  return (
    <div className={`${cx.inventoryCard} ${cx[camelCase(wearTerm)]}`}>
      <h2>{title}</h2>
      <p>
        <strong>Sector:</strong> {sector}
      </p>
      <p>
        <strong>Fragility:</strong> {fragilityTerm}
      </p>
      <p>
        <strong>Last Maintence:</strong> {lastMaintenance}
      </p>
      <p>
        <strong>Wear:</strong> {wearTerm}
      </p>
    </div>
  );
};

export default InventoryItem;
