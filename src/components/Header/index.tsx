import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { IScheme } from "../../constants/schemes";
import CustomTypography from "../CustomTypography";
import logoImg from "../../assets/img/logo.png";
import profileImg from "../../assets/img/emptyProfile.png";
import useStyles from "./styles";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.logoSection}>
          <div className={classes.imgWrapper}>
            <img alt="logo" src={logoImg} className={classes.logo} />
          </div>
          <div>
            <CustomTypography variant="h4" weight="bold">
              Company
            </CustomTypography>
          </div>
        </div>

        <div className={classes.freeTrialWrapper}>
          <div className={classes.profileImgWrapper}>
            <img alt="logo" src={profileImg} className={classes.profileImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
