import React, { useState, useEffect } from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import { IScheme } from "../../../constants/schemes";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";
import CustomTypography from "../../CustomTypography";

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

export interface PatientTableRow {
  id: Id;
  name: Name;
  gender: string;
  dob: Dob;
}

export interface PatientFilters {
  query?: string;
}

export interface PatientTableProps {
  users?: PatientTableRow[];
  filters?: PatientFilters;
}

const PatientTable: React.FC<PatientTableProps> = ({ users, filters }) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();
  const [filteredUsers, setFilteredUsers] = useState<PatientTableRow[]>();

  function formatName(name: Name): string {
    if (!name) return "";
    return `${name.first} ${name.last}`;
  }

  useEffect(() => {
    if (users && filters) {
      const newResults = users.filter((user: PatientTableRow) =>
        filters.query
          ? formatName(user.name)
              .toLocaleLowerCase()
              .includes(filters.query.toLocaleLowerCase())
          : true
      );
      setFilteredUsers(newResults);
    }
  }, [filters, users]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="center">{t("patientsTable.name")}</TableCell>
                <TableCell align="center">
                  {t("patientsTable.gender")}
                </TableCell>
                <TableCell align="center">{t("patientsTable.birth")}</TableCell>
                <TableCell align="center">
                  {t("patientsTable.actions")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers &&
                filteredUsers.map((row) => (
                  <TableRow
                    className={classes.tableRow}
                    key={row.id.value || formatName(row.name)}
                  >
                    <TableCell>
                      <CustomTypography variant="body">
                        {formatName(row.name)}
                      </CustomTypography>
                    </TableCell>
                    <TableCell>
                      <CustomTypography variant="body">
                        {t(`patientsTable.${row.gender}`)}
                      </CustomTypography>
                    </TableCell>
                    <TableCell>
                      <CustomTypography variant="body">
                        {t("patientsTable.birthDate", {
                          date: new Date(row.dob.date),
                        })}
                      </CustomTypography>
                    </TableCell>
                    <TableCell>
                      <CustomTypography variant="body">aa</CustomTypography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PatientTable;
