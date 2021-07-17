import React from "react";
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export interface PatientTableProps {}

const PatientTable: React.FC<PatientTableProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  const { t } = useTranslation();

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
              {rows.map((row) => (
                <TableRow className={classes.tableRow} key={row.name}>
                  <TableCell>
                    <CustomTypography variant="body">
                      {row.name}
                    </CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography variant="body">
                      {row.calories}
                    </CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography variant="body">
                      {row.fat}
                    </CustomTypography>
                  </TableCell>
                  <TableCell>
                    <CustomTypography variant="body">
                      {row.carbs}
                    </CustomTypography>
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
