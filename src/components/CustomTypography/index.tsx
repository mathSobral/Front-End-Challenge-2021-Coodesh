import React, { HTMLAttributes } from "react";
import { useTheme } from "react-jss";
import { IScheme } from "../../constants/schemes";
import useStyles, { RuleNames } from "./styles";

export interface ICustomButtonProps {
  variant?: RuleNames;
  weight?: string | number;
  color?: string;
  children?: React.ReactNode;
}

const CustomTypography: React.FC<
  ICustomButtonProps & HTMLAttributes<HTMLSpanElement>
> = ({ variant, children, weight, color, ...props }) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });

  const style = {
    fontWeight: weight ? weight : 400,
    color: color ? color : undefined,
  };

  return (
    <span
      {...props}
      className={variant ? classes[variant] : classes.body}
      style={style as React.CSSProperties}
    >
      {children}
    </span>
  );
};

export default CustomTypography;
