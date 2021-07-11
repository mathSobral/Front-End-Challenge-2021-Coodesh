import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { IHeaderProps } from "./index";
import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames =
  | "mainContainer"
  | "container"
  | "menu"
  | "freeTrialWrapper"
  | "freeTrialButton";

const useStyles = createUseStyles<RuleNames, IHeaderProps, IScheme>({
  mainContainer: ({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    boxShadow: `0px 0px 8px -3px ${theme.shadow}`,
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
    height: 70,
    color: theme.primary0,
    display: "grid",
    gridTemplateColumns: "250px auto 200px",
  }),
  menu: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 20,
  },
  freeTrialWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  freeTrialButton: {
    width: 160,
  },
});

export default useStyles;
