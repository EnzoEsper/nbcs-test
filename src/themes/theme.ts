import { createTheme, alpha } from "@material-ui/core/styles";
import { color } from "../tokens/colors.tokens";

export default createTheme({
  palette: {
    primary: {
      main: color.primaryMain,
    },
    secondary: {
      main: color.secondaryMain,
    },
    background: {
      default: color.backgroundDefault,
    },
    text: {
      primary: color.textPrimary,
      secondary: color.textSecondary,
    },
    common: {
      orange: color.orange,
      gold: color.gold,
      lightBlue: color.lightBlue,
      seafoam: color.seafoam,
      purple: color.purple,
      ultraviolet: color.ultraviolet,
      green: color.green,
      grey: color.grey,
    },
  },
  typography: {
    authButton: {
      fontFamily: "Raleway",
      fontSize: "0.8rem",
      color: "white",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: "white",
      },
    },
  },

  // overrides: {
  //   MuiInputLabel: {
  //     root: {
  //       color: color.primaryMain,
  //       fontSize: "1rem",
  //     },
  //   },
  //   MuiOutlinedInput: {
  //     root: {
  //       background: "white",
  //       "& $notchedOutline": {
  //         color: color.primaryMain,
  //       },
  //       "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
  //         borderColor: color.primaryMain,
  //         boxShadow: `2px 2px 2px 0px ${alpha(color.primaryMain, 0.2)}`,
  //         // Reset on touch devices, it doesn't add specificity
  //         "@media (hover: none)": {
  //           color: color.primaryMain,
  //         },
  //       },
  //       "&$focused $notchedOutline": {
  //         borderWidth: 2,
  //       },
  //     },
  //     notchedOutline: {
  //       borderColor: color.primaryMain,
  //     },
  //   },
  // },
});

declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    orange: string;
    gold: string;
    lightBlue: string;
    seafoam: string;
    purple: string;
    ultraviolet: string;
    green: string;
    grey: string;
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface FontStyle {
    authButton: {};
  }
}
