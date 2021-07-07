import React from "react";
import { useTheme } from "react-jss";
import { IScheme } from "../../constants/schemes";
import useStyles from "./styles";

// import { Container } from './styles';

export interface IHomeProps {}

const Home: React.FC = ({}: IHomeProps) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>Marcha Fellas!</div>
    </div>
  );
};

export default Home;
