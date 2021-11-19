import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { BotonLoginProps } from "./BotonLogin.types";
import { useStyles } from "./BotonLogin.styles";

const BotonLogin = (props: BotonLoginProps) => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      onClick={() => props.loginWithRedirect()}
      className={classes.button}
    >
      INICIAR SESIÓN
    </Button>
  );
};

export default BotonLogin;
