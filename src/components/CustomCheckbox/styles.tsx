import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { ICustomCheckboxProps } from "./index";
// import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "root";

const useStyles = createUseStyles<RuleNames, ICustomCheckboxProps, IScheme>({
  root: ({ theme, ...props }) => ({}),
});

export default useStyles;
