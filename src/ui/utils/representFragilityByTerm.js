export const representFragilityByTerm = (fragility) => {
  const fragilityTerms = [
    "Very Robust",
    "Robust",
    "Common",
    "Fragile",
    "Very Fragile",
  ];

  return fragilityTerms[fragility - 1];
};
