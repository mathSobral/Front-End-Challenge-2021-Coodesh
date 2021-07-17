import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { PatientTableProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames = "mainContainer" | "container" | "table" | "tableRow";

const useStyles = createUseStyles<RuleNames, PatientTableProps, IScheme>({
  mainContainer: ({}) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }),
  container: ({}) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
  }),
  table: ({ theme }) => ({
    "& .MuiTableCell-head": {
      backgroundColor: theme.textPrimary,
      color: theme.textTertiary,
    },
    "& td": {
      borderRight: `1px solid ${theme.stroke}`,
    },
    "& td:last-child": {
      borderRight: "none",
    },
  }),
  tableRow: ({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.hover,
    },
  }),
});

export default useStyles;
