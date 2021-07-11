import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { ICustomButtonProps } from "./index";
// import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "root";

const useStyles = createUseStyles<RuleNames, ICustomButtonProps, IScheme>({
  root: ({ theme, ...props }) => ({
    "&.MuiButton-root": {
      borderRadius: 6,
      textTransform: "none",
      backgroundColor: theme.primary0,
      "&:hover": {
        backgroundColor: theme.primary1,
      },
    },
  }),
});

export default useStyles;
