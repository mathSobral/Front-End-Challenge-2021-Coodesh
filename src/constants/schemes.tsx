/**
 * This file defines all color schemes used on theming.
 */

export interface IScheme {
  primary0: string;
  primary1: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  background0: string;
  background1: string;
  background2: string;
  shadow: string;
  hover: string;
  stroke: string;
}

export const lightScheme: IScheme = {
  primary0: "#34079c",
  primary1: "#6139be",
  textPrimary: "#2C2D32",
  textSecondary: "#a1a1a1",
  textTertiary: "#ffffff",
  background0: "#F7F9FA",
  background1: "#FFFFFF",
  background2: "#E4E6E7",
  shadow: "#263238",
  hover: "#F5F5F5",
  stroke: "#e0e0e0",
};

export const darkScheme = {
  ...lightScheme,
};
