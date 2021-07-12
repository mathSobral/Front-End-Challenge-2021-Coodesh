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
  shadow: string;
}

export const lightScheme: IScheme = {
  primary0: "#34079c",
  primary1: "#6139be",
  textPrimary: "#2C2D32",
  textSecondary: "#a1a1a1",
  textTertiary: "#ffffff",
  background0: "#ffffff",
  background1: "#2C2D32",
  shadow: "#263238",
};

export const darkScheme = {
  ...lightScheme,
};
