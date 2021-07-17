import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { LoadingMoreProps } from "./index";
import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "mainContainer" | "container" | "activityIndicatorWrapper";

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
    height: 400,
    color: theme.primary0,
    display: "flex",
    justifyContent: "center",
  }),
  activityIndicatorWrapper: {
    width: 300,
    height: 100,
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
});

export default useStyles;
