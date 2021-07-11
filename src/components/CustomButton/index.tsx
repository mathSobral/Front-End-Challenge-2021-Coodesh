import React from "react";
import { useTheme } from "react-jss";
import classNames from "classnames";
import { IScheme } from "../../constants/schemes";
import Button, { ButtonProps } from "@material-ui/core/Button";
import useStyles from "./styles";

export interface ICustomButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const CustomButton: React.FC<ICustomButtonProps & ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });

  return (
    <Button className={classNames(classes.root, className)} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
