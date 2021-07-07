/**
 * This file defines all color schemes used on theming.
 */

export interface IScheme {
  primary0: string;
  textPrimary: string;
  background0: string;
  textSecondary: string;
  background1: string;
}

export const lightScheme: IScheme = {
  primary0: "#34079c",
  textPrimary: "#ffffff",
  background0: "#222328",
  background1: "#2C2D32",
  textSecondary: "#a1a1a1",
};

export const darkScheme = {
  ...lightScheme,
};
