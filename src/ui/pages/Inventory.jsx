import { calculateWear } from "@/domain/calculateWear";
import React from "react";
import { useInventory } from "../../application/hooks/useInventory";
import InventoryItem from "../components/InventoryItem";
import cx from "./Inventory.module.scss";

const Inventory = ({message}) => {
  const { inventory, isLoading } = useInventory();

  return (
    <div className={cx.inventoryList}>
      {message}
      {isLoading && <p>Loading ...</p>}
      {!isLoading &&
        inventory.map(
          ({ id, title, sector, fragility, lastMaintenance}) => {
            return (
              <InventoryItem
                key={id}
                title={title}
                sector={sector}
                fragility={fragility}
                lastMaintenance={`${lastMaintenance.day}/${
                  lastMaintenance.month + 1
                }/${lastMaintenance.year}`}
                wear={calculateWear(fragility,lastMaintenance)}
              />
            );
          }
        )}
    </div>
  );
};

export function getServerSideProps() {
    return {
        props: { message: "Welcome to the About Page" },
    };
}

export default Inventory;
