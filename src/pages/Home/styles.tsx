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
  container: ({ theme, ...props }) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
    height: 400,
    color: theme.primary0,
  }),
});

export default useStyles;
