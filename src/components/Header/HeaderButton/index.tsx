import React from "react";
import { useTheme } from "react-jss";
import classNames from "classnames";
import { IScheme } from "../../../constants/schemes";
import { Link, LinkProps } from "react-router-dom";
import useStyles from "./styles";

export interface ICustomProps {
  className?: string;
  children?: React.ReactNode;
}

const HeaderButton: React.FC<ICustomProps & LinkProps> = ({
  className,
  children,
  ...props
}) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });

  return (
    <Link className={classNames(classes.root, className)} {...props}>
      {children}
    </Link>
  );
};

export default HeaderButton;
