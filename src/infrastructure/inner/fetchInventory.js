import { getInventory } from "../outer/api/getInventory";

export const fetchInventory = async () => {
  const response = await getInventory();

  const sectors = response.data;
  const items = sectors.flatMap((sector) => sector.items);

  return mapItems(items, sectors);
};

const mapItems = (items, sectors) =>
  items.map((item) => ({
    id: item.id,
    type: item.type,
    brand: item.brand,
    model: item.model,
    sector: findSector(sectors, item.id),
    fragility: item.fragility,
    lastMaintenance: item.last_maintenance,
  }));

const findSector = (sectors, itemId) =>
  sectors.find((sector) =>
    sector.items.some((sectorItem) => sectorItem.id === itemId)
  ).sector;
