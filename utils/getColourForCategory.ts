import { appColours } from "../constants/theme";

export function getColourForCategory(
  category: string,
  variation: string = "Mid",
): string {
  let result: string = appColours.generalMid;

  if (category.toLowerCase() === "purchasing habits") category = "purchasing";
  else category = category.toLowerCase();

  let key = `${category}${variation}`;

  if (key in appColours) {
    result = appColours[key as keyof typeof appColours];
  } else if (variation === "ExtraDark") {
    key = `${category}Dark`;
    result = appColours[key as keyof typeof appColours];
  }

  return result;
}
