import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { ICustomProps } from "./index";
// import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "root";

const useStyles = createUseStyles<RuleNames, ICustomProps, IScheme>({
  root: ({ theme, ...props }) => ({
    height: "100%",
    color: theme.primary0,
    textDecoration: "none",
    textAlign: "center",
    lineHeight: "35px",
    "&:hover": {
      borderBottom: `4px solid ${theme.primary0}`,
    },
  }),
});

export default useStyles;
