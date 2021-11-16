import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { useStyles } from "./NavBar.styles";
import logo from "../assets/images/logo-cuadro.svg";
import { Avatar, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

interface MainNavTab {
  label?: string;
  value?: string;
  path?: string;
  scopes?: string[];
}
interface NavBarProps {
  userIsAuthenticated?: boolean;
  userScopes?: string[];
  mainNavTabs?: MainNavTab[];
  logoUrl: string;
}

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = (props: NavBarProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to={props.logoUrl}
              className={classes.logoContainer}
            >
              <img src={logo} alt="nbch logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              aria-label="simple tabs example"
              classes={{ indicator: classes.indicator }}
            >
              <Tab
                disableRipple
                label="Privados"
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selectedTab,
                }}
                className={classes.tab}
              />
              <Tab
                disableRipple
                label="Judiciales"
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selectedTab,
                }}
                className={classes.tab}
              />
              <Tab
                disableRipple
                label="Otros"
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selectedTab,
                }}
                className={classes.tab}
              />
            </Tabs>
            <Avatar style={{ marginLeft: "auto" }}>EE</Avatar>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Cerrar sesión
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
