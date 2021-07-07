import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { IHomeProps } from "./index";
import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "mainContainer" | "container";

const useStyles = createUseStyles<RuleNames, IHomeProps, IScheme>({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  /**
   * Exemplo de como usar a paleta de cores do tema nos arquivos de estilo
   * @param param0
   * @returns
   */
  container: ({ theme, ...props }) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
    height: 400,
    color: theme.textPrimary,
    backgroundColor: theme.background1,
  }),
});

export default useStyles;
