import React, { useRef, useMemo } from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import debounce from "lodash.debounce";
import { IScheme } from "../../../constants/schemes";
import Button from "../../CustomButton";
import useStyles from "./styles";
import CustomTypography from "../../CustomTypography";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

export interface IFiltersProps {
  query?: string;
}

const Filters: React.FC<IFiltersProps> = ({ query }) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const history = useHistory();
  const formRef = useRef<HTMLFormElement>(null);

  const pushQueryOnHistory = () => {
    const query = formRef.current ? formRef.current.query.value : "";
    history.push(`?query=${query}`);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const queryChangeHandler = () => {
    pushQueryOnHistory();
  };

  const debouncedQueryChangeHandler = useMemo(
    () => debounce(queryChangeHandler, 300),
    []
  );

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      pushQueryOnHistory();
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.title}>
          <CustomTypography variant="body">
            {t("filters.title")}
          </CustomTypography>
        </div>
        <form ref={formRef} onSubmit={submitHandler}>
          <div className={classes.searchbarWrapper}>
            <TextField
              key={`query-${query}`}
              type="search"
              name="query"
              label={t("filters.searching")}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onKeyPress={handleKeyPress}
              onChange={debouncedQueryChangeHandler}
              defaultValue={query}
            />
          </div>
        </form>

        <Button className={classes.button}>Filtrar</Button>
      </div>
    </div>
  );
};

export default Filters;
