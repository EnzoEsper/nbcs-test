import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import notfound from "../assets/images/notfound.svg";
import { useStyles } from "./NotFound.styles";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      style={{
        height: `calc(100% - 64px)`,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <img
          src={notfound}
          className={classes.notFoundImage}
          alt="404 not found"
        />
      </Grid>
      <br />
      <Grid item>
        <Typography variant="h3" className={classes.errorTitle}>
          PÁGINA NO ENCONTRADA
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" className={classes.errorDescription}>
          Lo sentimos, pero la página que está buscando no pudo ser encontrada.
        </Typography>
      </Grid>
      <br />
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          className={classes.roundedButton}
        >
          IR A LA PÁGINA DE INICIO
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
