import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { IFiltersProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames =
  | "mainContainer"
  | "container"
  | "title"
  | "searchbarWrapper"
  | "button";

const useStyles = createUseStyles<RuleNames, IFiltersProps, IScheme>({
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
  title: {
    width: "100%",
  },
  searchbarWrapper: ({ theme }) => ({
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    "& .MuiTextField-root": {
      width: "100%",
      backgroundColor: theme.background1,
    },
    "& .MuiOutlinedInput-input": {
      padding: "12.5px 7px",
    },
    "& .MuiInputLabel-root": {
      marginTop: -5,
    },
  }),
  button: {
    width: 120,
    height: 40,
  },
});

export default useStyles;
