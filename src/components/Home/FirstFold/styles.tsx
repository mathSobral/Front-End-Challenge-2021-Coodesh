import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { IHeaderProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames =
  | "mainContainer"
  | "container"
  | "menu"
  | "button"
  | "foldBar"
  | "title"
  | "subtitle";

const useStyles = createUseStyles<RuleNames, IHeaderProps, IScheme>({
  mainContainer: ({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }),
  /**
   * Exemplo de como usar a paleta de cores do tema nos arquivos de estilo
   * @param param0
   * @returns
   */
  container: ({ theme, ...props }) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
  }),
  menu: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 20,
  },
  foldBar: {
    position: "absolute",
    zIndex: -1,
    top: -700,
    right: -300,
  },
  title: {
    width: "100%",
    maxWidth: 600,
  },
  subtitle: {
    width: "100%",
    maxWidth: 600,
    paddingBottom: 30,
  },
  button: {
    width: 180,
    height: 60,
  },
});

export default useStyles;
