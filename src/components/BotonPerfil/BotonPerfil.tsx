import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { Link } from "react-router-dom";
import AvatarPerfil from "../AvatarPerfil/AvatarPerfil";
import { useStyles } from "./BotonPerfil.styles";
import { BotonPerfilProps } from "./BotonPerfil.types";

const BotonPerfil = (props: BotonPerfilProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-owns={anchorEl ? "profile-menu" : undefined}
        aria-haspopup={anchorEl ? "true" : undefined}
        onMouseOver={(event) => handleMenu(event)}
        style={{ padding: "0", marginRight: "15px" }}
      >
        <AvatarPerfil userPicture={props.userPicture || ""} />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/perfil"
          classes={{ root: classes.menuItem }}
        >
          <AccountCircleIcon style={{ marginRight: "10px" }} />
          VER PERFIL
        </MenuItem>
        <MenuItem
          classes={{ root: classes.menuItem }}
          onClick={() => {
            handleClose();
            props.logout();
          }}
        >
          <ExitToAppIcon style={{ marginRight: "10px" }} />
          SALIR
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BotonPerfil;
