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

const NavBar = (props: NavBarProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  useEffect(() => {
    if (!props.mainNavTabs) return;

    filterTabsWithScopes(props.mainNavTabs, props.userScopes).forEach(
      (tab, index) => {
        if (window.location.pathname === tab.path && value !== index) {
          setValue(index);
        }
      }
    );
  }, [props.mainNavTabs, props.userScopes, value]);

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
                  {filterTabsWithScopes(
                    props.mainNavTabs,
                    props.userScopes
                  ).map((tab) => (
                    <Tab
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
