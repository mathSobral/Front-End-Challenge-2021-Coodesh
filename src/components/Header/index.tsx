import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { IScheme } from "../../constants/schemes";
import Button from "../CustomButton";
import HeaderButton from "./HeaderButton";
import useStyles from "./styles";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div>Logomarca</div>
        <div className={classes.menu}>
          <HeaderButton to="#">{t("header.about")}</HeaderButton>
          <HeaderButton to="#">{t("header.prices")}</HeaderButton>
          <HeaderButton to="#">{t("header.contact")}</HeaderButton>
          <HeaderButton to="#">{t("header.login")}</HeaderButton>
        </div>

        <div className={classes.freeTrialWrapper}>
          <Button className={classes.freeTrialButton}>
            {t("header.freeTrial")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
