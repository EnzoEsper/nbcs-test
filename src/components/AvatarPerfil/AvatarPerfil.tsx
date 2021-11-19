import React from "react";
import { Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/styles";
import { AvatarPerfilProps } from "./AvatarPerfil.types";
import { AvatarPerfilState } from "./AvatarPerfilState";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useStyles } from "./AvatarPerfil.styles";

const AvatarPerfil = (props: AvatarPerfilProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Avatar perfil"
        src={props.userPicture}
        style={{ padding: "0" }}
      >
        <AccountCircle />
      </Avatar>
    </div>
  );
};

export default AvatarPerfil;
