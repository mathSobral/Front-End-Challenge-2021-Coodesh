import React, { useRef, useMemo, useContext } from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import debounce from "lodash.debounce";
import { IScheme } from "../../../constants/schemes";
import Button from "../../CustomButton";
import useStyles from "./styles";
import CustomTypography from "../../CustomTypography";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SearchContext from "../../../contexts/search";

export interface IFiltersProps {}

const Filters: React.FC<IFiltersProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const { initialFilters, setQuery } = useContext(SearchContext);

  const pushQueryOnHistory = () => {
    const query = formRef.current ? formRef.current.query.value : "";
    setQuery(query);
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
              key={`query-${initialFilters?.query}`}
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
              defaultValue={initialFilters?.query}
            />
          </div>
        </form>

        <Button>{t("filters.doFilter")}</Button>
      </div>
    </div>
  );
};

export default Filters;
