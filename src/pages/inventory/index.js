import { fetchInventory } from "@/infrastructure/inner/fetchInventory";
import Inventory from "@/ui/pages/Inventory";

const InventoryPage = ({ inventory, isLoading }) => {
  return <Inventory isLoading={isLoading} inventory={inventory} />;
};

export async function getServerSideProps() {
  const inventory = await fetchInventory();
  const isLoading = inventory === undefined;
  return {
    props: { inventory: JSON.parse(JSON.stringify(inventory)), isLoading },
  };
}

export default InventoryPage;
