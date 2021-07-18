import React, { useContext } from "react";
import { useTheme } from "react-jss";
// import { useTranslation } from "react-i18next";
import Pagination from "@material-ui/lab/Pagination";
import { IScheme } from "../../../constants/schemes";
import useStyles from "./styles";
import SearchContext from "../../../contexts/search";

export interface LoadingMoreProps {
  loading?: boolean;
}

const LoadingMore: React.FC<LoadingMoreProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { setPage, initialFilters } = useContext(SearchContext);
  // const { t } = useTranslation();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.paginatorWrapper}>
          <Pagination
            key={`pagination-${initialFilters?.page}`}
            count={10}
            shape="rounded"
            onChange={handlePageChange}
            defaultPage={initialFilters?.page || 1}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingMore;
