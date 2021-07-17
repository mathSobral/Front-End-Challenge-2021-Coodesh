import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { PatientTableProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames = "mainContainer" | "container" | "table" | "tableRow";

const useStyles = createUseStyles<RuleNames, PatientTableProps, IScheme>({
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
  table: ({ theme, ...props }) => ({
    "& .MuiTableCell-head": {
      backgroundColor: theme.primary1,
      color: theme.textTertiary,
    },
    "& td": {
      borderRight: `1px solid ${theme.stroke}`,
    },
    "& td:last-child": {
      borderRight: "none",
    },
  }),
  tableRow: ({ theme, ...props }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.hover,
    },
  }),
});

export default useStyles;
