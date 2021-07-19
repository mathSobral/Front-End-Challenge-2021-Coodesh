import React, { createContext, useState, useEffect } from "react";
import queryString from "query-string";
import api from "../services/api";
import { useHistory, useLocation } from "react-router-dom";

export interface SearchFilters {
  query?: string;
  page?: number;
  gender?: string;
  nat?: string;
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

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Street {
  name: string;
  number: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
}

export interface User {
  id: Id;
  name: Name;
  gender: string;
  dob: Dob;
  picture: Picture;
  email: string;
  nat: string;
  location: Location;
}

export interface SearchContextValues {
  loading: boolean;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  users: User[];
  initialFilters: SearchFilters;
  filters: SearchFilters;
  setPage: (page: number) => void;
  setQuery: (query: string) => void;
  setGender: (query: string) => void;
  findByName: (name: Name) => User | undefined;
  formatName: (name: Name) => string;
}

const SearchContext = createContext<SearchContextValues>(
  {} as SearchContextValues
);

export interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({
  children,
}: SearchProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<SearchFilters>({
    page: 0,
  });
  const [initialFilters, setInitialFilters] = useState<SearchFilters>();
  const [users, setUsers] = useState<User[]>();
  const [isMounted, setisMounted] = useState<boolean>(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { search } = location;
    const newFilters = queryString.parse(search);
    const initalF = {
      query: newFilters.query,
      page: parseFloat(newFilters.page as string) || 1,
      gender: newFilters.gender || "all",
    } as SearchFilters;
    setInitialFilters(initalF);
    setFilters(initalF);
    setisMounted(true);
  }, []);

  /**
   * Fetch dos dados a partir da API
   */
  useEffect(() => {
    if (isMounted) {
      const url = `?seed=coodesh&page=${filters.page}&results=50&inc=picture,name,email,gender,dob,phone,nat,location,id`;

      setLoading(true);
      api
        .get(url)
        .then((response) => {
          setUsers(response.data.results);
          setLoading(false);
        })
        .catch(() => console.log("erro ocorreu"));
    }
  }, [filters.page]);

  useEffect(() => {
    if (filters.page || filters.query) {
      history.push(
        `?query=${filters.query || ""}${
          filters.page ? `&page=${filters.page}` : ""
        }${filters.gender !== "all" ? `&gender=${filters.gender}` : ""}`
      );
    }
  }, [filters.page, filters.query, filters.gender]);

  const setQuery = (query: string) => {
    setFilters((oldValue) => ({ ...oldValue, query: query }));
  };

  const setPage = (page: number) => {
    setFilters((oldValue) => ({ ...oldValue, page: page }));
  };

  const setGender = (gender: string) => {
    setFilters((oldValue) => ({ ...oldValue, gender: gender }));
  };

  const formatName = (name: Name): string => {
    if (!name) return "";
    return `${name.first} ${name.last}`;
  };

  const findByName = (name: Name) =>
    users
      ? users.find((user) => formatName(user.name) === formatName(name))
      : undefined;

  const contextValues = {
    loading,
    users,
    initialFilters,
    filters,
    setPage,
    setQuery,
    formatName,
    findByName,
    setGender,
  } as SearchContextValues;
  return (
    <SearchContext.Provider value={contextValues}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
