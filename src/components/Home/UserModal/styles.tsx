import { createUseStyles } from "react-jss";
import { IScheme } from "../../../constants/schemes";
import { UserModalProps } from "./index";
import { defaultContainer } from "../../../constants/sizes";

// Define Component
type RuleNames =
  | "mainContainer"
  | "container"
  | "modal"
  | "overlay"
  | "closeButtonWrapper"
  | "button"
  | "imgWrapper"
  | "profileImg"
  | "descriptionWrapper";

const useStyles = createUseStyles<RuleNames, UserModalProps, IScheme>({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: ({ theme }) => ({
    maxWidth: defaultContainer.Width,
    padding: defaultContainer.paddingHorizontal,
    color: theme.primary0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.background1,
    width: 450,
  }),
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: ({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: theme.background3,
  }),
  closeButtonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    "&.MuiButton-root": {
      minWidth: 0,
      padding: 0,
    },
  },
  imgWrapper: {
    width: 90,
    height: 90,
    borderRadius: "100%",
    marginTop: -80,
  },
  profileImg: {
    width: 90,
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
  descriptionWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default useStyles;
