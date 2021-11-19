import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginLeft: "auto",
      borderRadius: "50px",
      borderColor: "white",
      ...theme.typography.authButton,
    },
  })
);
