import React, { useContext } from "react";
// import { useTheme } from "react-jss";
import Header from "../../components/Header";
import LoadingMore from "../../components/LoadingMore";
import Filters from "../../components/Home/Filters";
import PatientTable from "../../components/Home/PatientTable";
import HomePagination from "../../components/Home/HomePagination";
import SearchContext from "../../contexts/search";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const { loading } = useContext(SearchContext);
  return (
    <>
      <Header />
      <Filters />
      <HomePagination />
      {loading ? <LoadingMore /> : <PatientTable />}
      <HomePagination />
    </>
  );
};

export default Home;
