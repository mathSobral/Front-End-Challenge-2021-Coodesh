import React from "react";
import { useTheme } from "react-jss";
import Header from "../../components/Header";
import { IScheme } from "../../constants/schemes";
import useStyles from "./styles";
import Filters from "../../components/Home/Filters";
import PatientTable from "../../components/Home/PatientTable";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  return (
    <>
      <Header />
      <Filters />
      <PatientTable />
    </>
  );
};

export default Home;
