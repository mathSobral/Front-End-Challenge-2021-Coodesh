import React, { useState, useEffect } from "react";
// import { useTheme } from "react-jss";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useSWR from "swr";
import api from "../../services/api";
import Filters from "../../components/Home/Filters";
import PatientTable, {
  PatientTableRow,
  PatientFilters,
} from "../../components/Home/PatientTable";
import LoadingMore from "../../components/LoadingMore";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [users, setUsers] = useState<PatientTableRow[]>([]);
  const [filters, setFilters] = useState<PatientFilters>();
  const [initialFilters, setInitialFilters] = useState<PatientFilters>();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const newFilters = queryString.parse(search) as PatientFilters;
    setInitialFilters(newFilters);
  }, []);

  useEffect(() => {
    const { search } = location;
    const newFilters = queryString.parse(search);
    setFilters(newFilters as PatientFilters);
  }, [location]);

  /**
   * Fetch dos dados a partir da API
   */
  useSWR(
    `?seed=coodesh&page=1&results=50&inc=picture,name,email,gender,dob,phone,nat,location,id`,
    async (url) => {
      try {
        setLoading(true);
        const response = await api.get(url);
        setUsers(response.data.results);
        setLoading(false);
      } catch (e) {
        console.log("erro ocorreu");
      }
    }
  );

  return (
    <>
      <Header />
      <Filters query={initialFilters?.query} />
      <PatientTable users={users} filters={filters} />
      {loading && <LoadingMore />}
    </>
  );
};

export default Home;
