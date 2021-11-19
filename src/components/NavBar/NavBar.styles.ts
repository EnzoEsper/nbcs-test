// Generado con util/create-component.js
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    extraToolbarMargin: {
      marginBottom: "2em",
    },
    appBar: {
      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    },
    logoContainer: {
      margin: "16px 0 16px 0",
    },
    logo: {
      height: "2.6em",
    },
    tabContainer: {},
    tab: {
      fontFamily: "Raleway",
      fontSize: "14px",
      textTransform: "none",
      minWidth: 10,
      marginLeft: "35px",
      fontWeight: 500,
    },
    authButton: {
      borderRadius: "50px",
      borderColor: "white",
      fontFamily: "Raleway",
      color: "white",
    },
    indicator: {
      backgroundColor: "white",
      height: "1px",
      bottom: 10,
    },
    tabRoot: {
      padding: "6px 0 6px 0",
      "&:hover": {
        color: "white",
        opacity: 1,
      },
    },
    selectedTab: {
      color: "white",
    },
  })
);

// export const useStyles = makeStyles((theme: Theme) =>
// createStyles({
//   appBar: {
//     // background: "linear-gradient(45deg, #016EB9 30%, #1547A1 90%)"
//     background: "linear-gradient(45deg, #1547A1 30%, #016EB9 90%)",
//     transition: theme.transitions.create(["margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   logo: {
//     height: "2.6em",
//     margin: "16px 0 16px 0"
//   },
//   tabContainer: {
//   },
//   tab: {
//     fontFamily: "Raleway",
//     fontSize: "14px",
//     textTransform: "none",
//     minWidth: 10,
//     marginLeft: "35px",
//     fontWeight: 500
//   },
//   button: {
//     border: "2px solid rgb(255, 255, 255)",
//     borderRadius: "50px",
//     borderColor: "white",
//     marginLeft: "25px",
//     // marginRight: "25px",
//     color: "white",
//     fontSize: "12px",
//     fontFamily: "Raleway",
//     fontWeight: 600
//   },
//   indicator: {
//     backgroundColor: "white",
//     height: "1px",
//     bottom: 10
//   },
//   tabRoot: {
//     padding: "6px 0 6px 0",
//     "&:hover": {
//       color: "white",
//       opacity: 1
//     }
//   },
//   selectedTab: {
//     color: "white"
//   },
//   logoContainer: {
//     padding: 0,
//     marginRight: "24px"
//   },
//   logotype: {
//     color: "white",
//     marginLeft: theme.spacing(2.5),
//     marginRight: theme.spacing(2.5),
//     fontWeight: 500,
//     fontSize: 18,
//     whiteSpace: "nowrap",
//     [theme.breakpoints.down("xs")]: {
//       display: "none",
//     },
//   },
//   toolbar: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
//   hide: {
//     display: "none",
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   search: {
//     position: "relative",
//     borderRadius: 25,
//     paddingLeft: theme.spacing(2.5),
//     width: 36,
//     backgroundColor: alpha(theme.palette.common.black, 0),
//     transition: theme.transitions.create(["background-color", "width"]),
//     "&:hover": {
//       cursor: "pointer",
//       backgroundColor: alpha(theme.palette.common.black, 0.08),
//     },
//   },
//   searchFocused: {
//     backgroundColor: alpha(theme.palette.common.black, 0.08),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: 250,
//     },
//   },
//   searchIcon: {
//     width: 36,
//     right: 0,
//     height: "100%",
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: theme.transitions.create("right"),
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   searchIconOpened: {
//     right: theme.spacing(1.25),
//   },
//   bigIndicator: {
//     backgroundColor: theme.palette.secondary.main,
//     height: 4
//   },
//   inputRoot: {
//     color: "inherit",
//     width: "100%",
//   },
//   inputInput: {
//     height: 36,
//     padding: 0,
//     paddingRight: 36 + theme.spacing(1.25),
//     width: "100%",
//   },
//   messageContent: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   headerMenu: {
//     marginTop: theme.spacing(7),
//   },
//   headerMenuList: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   headerMenuItem: {
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.background.default,
//       // color: "white",
//     },
//   },
//   headerMenuButton: {
//     marginLeft: theme.spacing(2),
//     padding: theme.spacing(0.5),
//   },
//   headerMenuButtonSandwich: {
//     marginLeft: 9,
//     [theme.breakpoints.down("sm")]: {
//       marginLeft: 0
//     },
//     padding: theme.spacing(0.5),
//   },
//   headerMenuButtonCollapse: {
//     marginRight: theme.spacing(2),
//   },
//   headerIcon: {
//     fontSize: 28,
//     color: "rgba(255, 255, 255, 0.35)",
//   },
//   headerIconCollapse: {
//     color: "white",
//   },
//   profileMenu: {
//     minWidth: 265,
//   },
//   profileMenuUser: {
//     display: "flex",
//     flexDirection: "column",
//     padding: theme.spacing(2),
//   },
//   profileMenuItem: {
//     color: theme.palette.text.hint,
//   },
//   profileMenuIcon: {
//     marginRight: theme.spacing(2),
//     color: theme.palette.text.hint,
//     '&:hover': {
//       color: theme.palette.primary.main,
//     }
//   },
//   profileMenuLink: {
//     fontSize: 16,
//     textDecoration: "none",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   messageNotification: {
//     height: "auto",
//     display: "flex",
//     alignItems: "center",
//     "&:hover, &:focus": {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
//   messageNotificationSide: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginRight: theme.spacing(2),
//   },
//   messageNotificationBodySide: {
//     alignItems: "flex-start",
//     marginRight: 0,
//   },
//   sendMessageButton: {
//     margin: theme.spacing(4),
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//     textTransform: "none",
//   },
//   sendButtonIcon: {
//     marginLeft: theme.spacing(2),
//   },
//   purchaseBtn: {
//     [theme.breakpoints.down('sm')]: {
//       display: 'none'
//     },
//     marginRight: theme.spacing(3)
//   }
// })
// );
