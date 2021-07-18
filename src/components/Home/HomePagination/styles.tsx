import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { LoadingMoreProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames = "mainContainer" | "container" | "paginatorWrapper";

const useStyles = createUseStyles<RuleNames, LoadingMoreProps, IScheme>({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: ({ theme }) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
    color: theme.primary0,
    display: "flex",
    justifyContent: "flex-end",
  }),
  paginatorWrapper: {},
});

export default useStyles;
