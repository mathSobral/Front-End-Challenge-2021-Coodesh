import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactCountryFlag from "react-country-flag";
import InputLabel from "@material-ui/core/InputLabel";
import { IScheme } from "../../constants/schemes";
import Select from "@material-ui/core/Select";
import BootstrapInput from "./BootstrapInput";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./styles";

export interface SelectOptions {
  name: string;
  value: string;
}

export interface CustomSelectProps {
  options: SelectOptions[];
  value: string;
  onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
  isNat: boolean;
  label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  isNat,
  label = "Custom Select",
}) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({
    theme,
    options,
    value,
    isNat,
    label,
  });
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <InputLabel id="custom-select-label">{label}</InputLabel>
      <Select
        id="custom-select"
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
        displayEmpty
      >
        <MenuItem value="">
          <em>{t("filters.none")}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {isNat ? (
              <>
                {option.name}
                <span style={{ marginLeft: 5 }}>
                  <ReactCountryFlag countryCode={option.name} svg />
                </span>
              </>
            ) : (
              option.name
            )}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
