import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { ICustomButtonProps } from "./index";
// import { defaultContainer } from "../../constants/sizes";

// Define Component
export type RuleNames = "h1" | "h3" | "h4" | "body";

const useStyles = createUseStyles<RuleNames, ICustomButtonProps, IScheme>({
  h1: ({ theme }) => ({
    color: theme.textPrimary,
    fontSize: 64,
    fontWeight: "bold",
  }),
  h3: ({ theme }) => ({
    color: theme.textPrimary,
    fontSize: 35,
  }),
  h4: ({ theme }) => ({
    color: theme.textPrimary,
    fontSize: 22,
  }),
  body: ({ theme }) => ({
    color: theme.textPrimary,
    fontSize: 16,
    fontWeight: "400",
  }),
});

export default useStyles;
