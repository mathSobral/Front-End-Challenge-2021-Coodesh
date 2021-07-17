import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import { IScheme } from "../../../constants/schemes";
import Button from "../../CustomButton";
import useStyles from "./styles";
import CustomTypography from "../../CustomTypography";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export interface IFiltersProps {}

const Filters: React.FC<IFiltersProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.title}>
          <CustomTypography variant="body">
            {t("filters.title")}
          </CustomTypography>
        </div>
        <div className={classes.searchbarWrapper}>
          <TextField
            id="outlined-search"
            label={t("filters.searching")}
            type="search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button className={classes.button}>Filtrar</Button>
      </div>
    </div>
  );
};

export default Filters;
