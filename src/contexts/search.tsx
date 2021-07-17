import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";
import useSWR from "swr";
import api from "../services/api";
import { useLocation } from "react-router-dom";

export interface SearchFilters {
  query?: string;
  page?: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Dob {
  date: string;
}

export interface User {
  id: Id;
  name: Name;
  gender: string;
  dob: Dob;
}

export interface SearchContextValues {
  loading?: boolean;
  setFilters?: React.Dispatch<React.SetStateAction<SearchFilters>>;
  users?: User[];
  initialFilters?: SearchFilters;
  filters?: SearchFilters;
}

const SearchContext = createContext<SearchContextValues>({});

export interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({
  children,
}: SearchProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<SearchFilters>({ page: 1 });
  const [initialFilters, setInitialFilters] = useState<SearchFilters>();
  const [users, setUsers] = useState<User[]>();
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const newFilters = queryString.parse(search) as SearchFilters;
    setInitialFilters(newFilters);
  }, []);

  useEffect(() => {
    const { search } = location;
    const newFilters = queryString.parse(search);
    setFilters(newFilters as SearchFilters);
  }, [location]);

  /**
   * Fetch dos dados a partir da API
   */
  useSWR(
    `?seed=coodesh&page=${filters.page}&results=50&inc=picture,name,email,gender,dob,phone,nat,location,id`,
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

  const contextValues = {
    loading,
    setFilters,
    users,
    initialFilters,
    filters,
  } as SearchContextValues;
  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
