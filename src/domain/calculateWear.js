import { differenceInDays } from "date-fns";

export const calculateWear = (fragility, lastMaintenance) => {
  const fragilityMultiplier = [0.5, 3, 6, 11, 27];
  const daysSinceLastMaintence = differenceInDays(
    new Date(),
    new Date(lastMaintenance.year, lastMaintenance.month, lastMaintenance.day)
  );

  const wear = fragilityMultiplier[fragility - 1] * daysSinceLastMaintence;

  return Math.min(wear, 1000);
};
