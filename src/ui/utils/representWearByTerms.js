export const representWearByTerm = (wear) => {
  if (wear >= 0 && wear < 40) {
    return "None";
  } else if (wear >= 40 && wear < 200) {
    return "Low";
  } else if (wear >= 200 && wear < 400) {
    return "Moderate";
  } else if (wear >= 400 && wear < 700) {
    return "High";
  } else {
    return "Very High";
  }

};
