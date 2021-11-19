import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "auto",
    },
    menu: {
      backgroundColor: theme.palette.grey[100],
    },
    menuItem: {
      ...theme.typography.tab,
      color: theme.palette.primary.dark,
    },
  })
);
