import { createUseStyles } from "react-jss";
import { IScheme } from "../../constants/schemes";
import { IHeaderProps } from "./index";
import { defaultContainer } from "../../constants/sizes";

// Define Component
type RuleNames =
  | "mainContainer"
  | "container"
  | "logoSection"
  | "imgWrapper"
  | "logo"
  | "freeTrialWrapper"
  | "profileImgWrapper"
  | "profileImg";

const useStyles = createUseStyles<RuleNames, IHeaderProps, IScheme>({
  mainContainer: ({ theme, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    boxShadow: `0px 0px 8px -3px ${theme.shadow}`,
    backgroundColor: theme.background1,
  }),
  /**
   * Exemplo de como usar a paleta de cores do tema nos arquivos de estilo
   * @param param0
   * @returns
   */
  container: ({ theme, ...props }) => ({
    width: "100%",
    maxWidth: defaultContainer.Width,
    padding: `0px ${defaultContainer.paddingHorizontal}px`,
    height: 70,
    color: theme.primary0,
    display: "grid",
    gridTemplateColumns: "auto auto",
  }),
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  imgWrapper: {
    display: "flex",
  },
  logo: {
    maxWidth: 50,
  },
  freeTrialWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileImgWrapper: ({ theme, ...props }) => ({
    backgroundColor: theme.background2,
    borderRadius: "100%",
    width: 50,
    height: 50,
    "& img": {
      transform: "scale(0.8)",
    },
  }),
  profileImg: {
    maxWidth: 50,
    borderRadius: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
});

export default useStyles;
