import { TextStyle } from "react-native";

export const appColours = {
  backgroundColour: "#E7EEE9",
  backgroundAccent: "#F9FFFB",

  lightGrey: "#EFEFEF",
  darkGrey: "#999999",

  eikcoMain: "#215B4D",

  mobilityLight: "#BFFFF0",
  mobilityMid: "#7FFFE1",
  mobilityDark: "#00BF92",
  mobilityExtraDark: "#008C6B",

  travelLight: "#BFD4FF",
  travelMid: "#7FAAFF",
  travelDark: "#003FBF",

  homeLight: "#FFE9BF",
  homeMid: "#FFD47F",
  homeDark: "#C07F00",
  homeExtraDark: "#A56E00",

  foodLight: "#EFFFBF",
  foodMid: "#DFFF7F",
  foodDark: "#8FBF00",
  foodExtraDark: "#698C00",

  purchasingLight: "#FFBFBF",
  purchasingMid: "#FF7F7F",
  purchasingDark: "#BF0000",

  generalLight: "#FFFFBF",
  generalMid: "#FFFF7F",
  generalDark: "#BFBF00",
  generalExtraDark: "#8C8C00",
} as const;

export const fonts = {
  text: {
    fontFamily: "text-regular",
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  textItalic: {
    fontFamily: "text-italic",
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  textExtraBold: {
    fontFamily: "text-extrabold",
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  heading: {
    fontFamily: "heading",
    fontSize: 32,
    lineHeight: 24,
  } satisfies TextStyle,
} as const;
