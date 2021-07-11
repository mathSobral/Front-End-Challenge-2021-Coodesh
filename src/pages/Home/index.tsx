import React from "react";
import { useTheme } from "react-jss";
import Header from "../../components/Header";
import { IScheme } from "../../constants/schemes";
import useStyles from "./styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomCheckbox from "../../components/CustomCheckbox";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme });
  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          Marcha Fellas!
          <div>
            <FormControlLabel
              control={<CustomCheckbox name="checkedB" color="primary" />}
              label="Primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
