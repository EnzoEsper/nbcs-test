import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useStyles } from "./NavBar.styles";
import NBCHlogoCuadro from "../assets/images/logo-cuadro.svg";
import NBCHlogo from "../assets/images/nbch-logo.svg";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { userHasScopes } from "../../utils/userHasScopes";
import BotonPerfil from "../BotonPerfil";
import BotonAuth from "../BotonAuth";
import { MainNavTab, NavBarProps } from "./NavBar.types";
import { ElevationScroll } from "./ElevationScroll";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const NavBar = (props: NavBarProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  const handleMenuItemClick = (event: any, index: any) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const menuOptions = [
    {
      name: "Acreditaciones Privadas",
      link: "/acreditacionesPrivadas",
      activeIndex: 0,
      selectedIndex: 0,
    },
    {
      name: "Acreditaciones Judiciales",
      link: "/acreditacionesJudiciales",
      activeIndex: 0,
      selectedIndex: 1,
    },
    {
      name: "Cese Laboral",
      link: "/ceseLaboral",
      activeIndex: 0,
      selectedIndex: 2,
    },
  ];

  const routes: {
    name: string;
    link: string;
    activeIndex: number;
    selectedIndex?: number;
    ariaOwns?: any;
    ariaPopup?: any;
    mouseOver?: any;
  }[] = [
    {
      name: "Acreditaciones",
      link: "/acreditaciones",
      activeIndex: 0,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event: any) => handleClick(event),
    },
    { name: "Vinculaciones", link: "/vinculaciones", activeIndex: 1 },
    { name: "Recaudaciones", link: "/recaudaciones", activeIndex: 2 },
  ];

  // useEffect(() => {
  //   if (!props.mainNavTabs) return;

  //   filterTabsWithScopes(props.mainNavTabs, props.userScopes).forEach(
  //     (tab, index) => {
  //       if (window.location.pathname === tab.path && value !== index) {
  //         setValue(index);
  //       }
  //     }
  //   );
  // }, [props.mainNavTabs, props.userScopes, value]);

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  });

  // Recorre el arreglo de tabs y los filtra segun el scope del usuario
  const filterTabsWithScopes = (
    mainNavTabs: MainNavTab[],
    userScopes: string[]
  ) => {
    return mainNavTabs.filter((tab) => userHasScopes(userScopes, tab.scopes));
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button
                component={Link}
                to={props.logoUrl}
                className={classes.logoContainer}
              >
                <img
                  src={props.userIsAuthenticated ? NBCHlogoCuadro : NBCHlogo}
                  alt="nbch logo"
                  className={classes.logo}
                />
              </Button>
              {props.userIsAuthenticated && props.mainNavTabs && (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tabContainer}
                  aria-label="simple tabs example"
                  classes={{ indicator: classes.indicator }}
                >
                  {/* {filterTabsWithScopes(
                    props.mainNavTabs,
                    props.userScopes
                  ).map((tab) => (
                    <Tab
                      aria-owns={anchorEl ? "simple-menu" : undefined}
                      aria-haspopup={anchorEl ? "true" : undefined}
                      onMouseOver={(event: any) => handleClick(event)}
                      component={Link}
                      to={tab.path}
                      disableRipple
                      label={tab.label}
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.selectedTab,
                      }}
                      className={classes.tab}
                    />
                  ))} */}
                  {routes.map((route, index) => (
                    <Tab
                      key={route.name}
                      className={classes.tab}
                      component={Link}
                      to={route.link}
                      label={route.name}
                      aria-owns={route.ariaOwns}
                      aria-haspopup={route.ariaPopup}
                      onMouseOver={route.mouseOver}
                      disableRipple
                      classes={{
                        root: classes.tabRoot,
                        selected: classes.selectedTab,
                      }}
                    />
                  ))}
                </Tabs>
              )}

              {props.userIsAuthenticated ? (
                <BotonPerfil
                  logout={props.logout}
                  logoutReturnUrl={props.logoutReturnUrl}
                  userPicture={props.userPicture}
                />
              ) : null}

              <BotonAuth
                userIsAuthenticated={props.userIsAuthenticated}
                loginWithRedirect={props.loginWithRedirect}
                logout={props.logout}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
              >
                {menuOptions.map((option, index) => (
                  <MenuItem
                    key={option.name}
                    component={Link}
                    onClick={(event: any) => {
                      handleMenuItemClick(event, index);
                      setValue(0);
                      // setValue(option.activeIndex);
                      handleClose();
                    }}
                    selected={index === selectedIndex && value === 0}
                    to={option.link}
                    classes={
                      index === selectedIndex && value === 0
                        ? { root: classes.menuItemSelected }
                        : { root: classes.menuItem }
                    }
                  >
                    {option.name}
                  </MenuItem>
                ))}

                {/* <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/acreditacionesPrivadas"
                  classes={{ root: classes.menuItem }}
                >
                  Acreditaciones Privadas
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/acreditacionesJudiciales"
                  classes={{ root: classes.menuItem }}
                >
                  Acreditaciones Judiciales
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/ceseLaboral"
                  classes={{ root: classes.menuItem }}
                >
                  Cese Laboral
                </MenuItem> */}
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      {props.userIsAuthenticated && <div className={classes.toolbarMargin} />}
      {props.userIsAuthenticated && (
        <div className={classes.extraToolbarMargin} />
      )}
    </>
  );
};

export default NavBar;
