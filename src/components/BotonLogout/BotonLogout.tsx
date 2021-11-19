import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { BotonLogoutProps } from "./BotonLogout.types";
import { useStyles } from "./BotonLogout.styles";

const BotonLogout = (props: BotonLogoutProps) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      onClick={() => props.logout()}
      className={classes.button}
    >
      CERRAR SESIÓN
    </Button>
  );
};

export default BotonLogout;
