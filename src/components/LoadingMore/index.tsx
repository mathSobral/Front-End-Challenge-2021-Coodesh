import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { IScheme } from "../../constants/schemes";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";
import CustomTypography from "../CustomTypography";

export interface LoadingMoreProps {
  loading?: boolean;
}

const LoadingMore: React.FC<LoadingMoreProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.activityIndicatorWrapper}>
          <CircularProgress />
          <CustomTypography variant="h4" weight="bold">
            {t("loadingMore")}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default LoadingMore;
