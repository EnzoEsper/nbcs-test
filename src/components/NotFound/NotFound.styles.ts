
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notFoundImage: {
      height: "50vh"
    },
    errorTitle: {
      fontFamily: "Raleway",
      fontWeight: 800,
      color: theme.palette.text.primary
    },
    errorDescription: {
      fontFamily: "Raleway",
      fontWeight: 600,
      color: theme.palette.text.secondary
    },
    roundedButton: {
      borderRadius: "50px",
      fontFamily: "Raleway",
      fontWeight: 600
    }
  })
);