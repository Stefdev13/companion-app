import { TextStyle } from "react-native";

export const appColours = {
  backgroundColour: "#E7EEE9",
  backgroundAccent: "#F9FFFB",
  accent: "#FF9800",

  lightGrey: "#EFEFEF",
  grey: "#999999",
  darkGrey: "#4E4E4E",
  shadow: "#E8E8E8",

  eikcoMain: "#215B4D",
  eikcoNearBlack: "#163A31",

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
    lineHeight: 18,
  } satisfies TextStyle,
  textItalic: {
    fontFamily: "text-italic",
    fontSize: 16,
    lineHeight: 18,
  } satisfies TextStyle,
  textExtraBold: {
    fontFamily: "text-extrabold",
    fontSize: 16,
    lineHeight: 18,
  } satisfies TextStyle,
  textSmallHeading: {
    fontFamily: "text-extrabold",
    fontSize: 16,
    lineHeight: 24,
  } satisfies TextStyle,
  heading: {
    fontFamily: "heading",
    fontSize: 36,
    color: appColours.eikcoNearBlack,
  } satisfies TextStyle,
  question: {
    fontFamily: "heading",
    fontSize: 28,
    color: appColours.eikcoNearBlack,
  } satisfies TextStyle,
  logoSemiBold: {
    fontFamily: "logo-semibold",
    fontSize: 28,
    color: appColours.eikcoMain,
  } satisfies TextStyle,
  logoLight: {
    fontFamily: "logo-light",
    fontSize: 28,
    color: appColours.accent,
  } satisfies TextStyle,
} as const;

export const iconNames = {
  mobility: "car",
  travel: "airplane",
  home: "home",
  food: "pizza",
  purchasingHabits: "cart",
  general: "pie-chart",

  backBtn: "chevron-back",
  forwardBtn: "chevron-forward",
  addBtn: "add",
  filterBtn: "funnel-outline",
  searchBtn: "search",
  sortBtn: "swap-vertical",
  closeBtn: "close",
  layoutBtn: "grid-outline",
  settingsBtn: "settings-outline",

  increase: "trending-up",
  decrease: "trending-down",

  survey: "clipboard",
  emissions: "pie-chart",
  dashboard: "grid",
  reductions: "trending-down",
} as const;
