import React from "react";
import { useTheme } from "react-jss";
import classNames from "classnames";
import { IScheme } from "../../constants/schemes";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import CheckboxOutline from "../Icons/CheckboxOutline";
import CheckboxIcon from "../Icons/CheckboxIcon";
import useStyles from "./styles";

export interface ICustomCheckboxProps {
  className?: string;
}

const CustomCheckbox: React.FC<ICustomCheckboxProps & CheckboxProps> = ({
  className,
  ...props
}) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });

  return (
    <Checkbox
      icon={<CheckboxOutline />}
      checkedIcon={<CheckboxIcon />}
      className={classNames(classes.root, className)}
      {...props}
    />
  );
};

export default CustomCheckbox;
