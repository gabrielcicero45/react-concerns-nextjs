import { calculateWear } from "@/domain/calculateWear";
import React from "react";
import InventoryItem from "../components/InventoryItem";
import cx from "./Inventory.module.scss";

const Inventory = ({ inventory, isLoading }) => {
  return (
    <div className={cx.inventoryList}>
      {isLoading && <p>Loading ...</p>}
      {!isLoading &&
        inventory.map(({ id, title, sector, fragility, lastMaintenance }) => {
          return (
            <InventoryItem
              key={id}
              title={title}
              sector={sector}
              fragility={fragility}
              lastMaintenance={`${lastMaintenance.day}/${
                lastMaintenance.month + 1
              }/${lastMaintenance.year}`}
              wear={calculateWear(fragility, lastMaintenance)}
            />
          );
        })}
    </div>
  );
};

export default Inventory;
