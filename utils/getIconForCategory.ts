import { iconNames } from "../constants/theme";

type SurveyCategoryIconName = (typeof iconNames)[
  | "mobility"
  | "travel"
  | "home"
  | "food"
  | "purchasingHabits"
  | "general"];

export function getIconNameForCategory(
  category: string,
): SurveyCategoryIconName {
  switch (category.toLowerCase()) {
    case "mobility":
      return iconNames.mobility;
    case "travel":
      return iconNames.travel;
    case "home":
      return iconNames.home;
    case "food":
      return iconNames.food;
    case "purchasing habits":
      return iconNames.purchasingHabits;
    default:
      return iconNames.general;
  }
}
