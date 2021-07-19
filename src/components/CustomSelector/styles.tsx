import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { CustomSelectProps } from "./index";
// import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames = "root";

const useStyles = createUseStyles<RuleNames, CustomSelectProps, IScheme>({
  root: {},
});

export default useStyles;
