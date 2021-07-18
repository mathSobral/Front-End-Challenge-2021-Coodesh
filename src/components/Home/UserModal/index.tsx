import Button from "@material-ui/core/Button";
import React from "react";
import { useTheme } from "react-jss";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { IScheme } from "../../../constants/schemes";
import { User } from "../../../contexts/search";
import CustomTypography from "../../CustomTypography";
import useStyles from "./styles";

export interface UserModalProps {
  isOpen: boolean;
  onRequestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  user: User | undefined;
}

Modal.setAppElement("#root");

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onRequestClose,
  user,
}) => {
  const theme = useTheme<IScheme>();
  const classes = useStyles({ theme, isOpen, onRequestClose, user });
  const { t } = useTranslation();

  const handleRequestClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    onRequestClose(event);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      contentLabel="Alert Modal"
      className={classes.modal}
      overlayClassName={classes.overlay}
    >
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          {!user && <div>Usuario invalido</div>}
          {user && (
            <>
              <div className={classes.closeButtonWrapper}>
                <Button
                  classes={{ root: classes.button }}
                  onClick={handleRequestClose}
                >
                  <CloseIcon />
                </Button>
              </div>
              <div className={classes.imgWrapper}>
                <img
                  alt="logo"
                  src={user.picture.medium}
                  className={classes.profileImg}
                />
              </div>
              <div>
                <CustomTypography variant="h4" weight="bold">
                  {`${user.name.first} ${user.name.last}`}
                </CustomTypography>
              </div>
              <div className={classes.descriptionWrapper}>
                <div>
                  <CustomTypography>{`${t("patientsTable.id")}: ${
                    user.id.value || t("patientsTable.uninformed")
                  }`}</CustomTypography>
                </div>
                <div>
                  <CustomTypography>{`${t("patientsTable.email")}: ${
                    user.email
                  }`}</CustomTypography>
                </div>
                <div>
                  <CustomTypography>
                    {`${t("patientsTable.gender")}: ${t(
                      `patientsTable.${user.gender}`
                    )}`}
                  </CustomTypography>
                </div>
                <div>
                  <CustomTypography>
                    {`${t("patientsTable.dateOfBirth")}: ${t(
                      "patientsTable.birthDate",
                      {
                        date: new Date(user.dob.date),
                      }
                    )}`}
                  </CustomTypography>
                </div>
                <div>
                  <CustomTypography>{`${t("patientsTable.nationality")}: ${
                    user.location.country
                  } (${user.nat})`}</CustomTypography>
                </div>
                <div>
                  <CustomTypography>
                    {`${t("patientsTable.address")}: ${
                      user.location.street.name
                    }, ${user.location.street.number} - ${
                      user.location.city
                    }, ${user.location.state}/${user.location.country}`}
                  </CustomTypography>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
