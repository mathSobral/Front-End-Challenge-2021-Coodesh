import React, { useRef, useMemo, useContext } from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import debounce from "lodash.debounce";
import { IScheme } from "../../../constants/schemes";
import CustomTypography from "../../CustomTypography";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import SearchContext from "../../../contexts/search";
import useStyles from "./styles";

export interface IFiltersProps {}

const Filters: React.FC<IFiltersProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const { initialFilters, setQuery, filters, setGender } =
    useContext(SearchContext);

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

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
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
          <FormLabel component="legend">{t("patientsTable.gender")}</FormLabel>
          <RadioGroup
            key={`gender-${filters.gender}`}
            aria-label="gender"
            name="gender1"
            value={filters.gender}
            onChange={handleGenderChange}
            row
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label={t("patientsTable.all")}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label={t("patientsTable.female")}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label={t("patientsTable.male")}
            />
          </RadioGroup>
        </form>
      </div>
    </div>
  );
};

export default Filters;
