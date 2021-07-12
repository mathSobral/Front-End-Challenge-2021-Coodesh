import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { IScheme } from "../../../constants/schemes";
import Button from "../../CustomButton";
import useStyles from "./styles";
import CustomTypography from "../../CustomTypography";

export interface IHeaderProps {}

const FirstFold: React.FC<IHeaderProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.title}>
          <CustomTypography variant="h1">NEXT-GEN </CustomTypography>
          <CustomTypography variant="h1" color={theme.primary0}>
            AI CRYPTO{" "}
          </CustomTypography>
          <CustomTypography variant="h1">TRADING BOTS</CustomTypography>
        </div>
        <div className={classes.subtitle}>
          <CustomTypography variant="h3" color={theme.textSecondary}>
            Start creating AI-powered trading bots with One Button Trader
          </CustomTypography>
        </div>
        <Button className={classes.button}>GET STARTED</Button>
      </div>
    </div>
  );
};

export default FirstFold;
