import React from "react";
import { Story, Meta } from "@storybook/react";
import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";
import { BrowserRouter } from "react-router-dom";
import { action } from "@storybook/addon-actions";

export default {
  component: NavBar,
  title: "Componentes/NavBar",
} as Meta;

const Template: Story<NavBarProps> = (args) => (
  <BrowserRouter>
    <NavBar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  logoUrl: "/acreditaciones",
  mainNavTabs: [
    {
      label: "Acreditaciones",
      value: "acreditaciones",
      path: "/acreditaciones",
      scopes: ["read:acreditaciones"],
    },
    {
      label: "Vinculaciones",
      value: "vinculaciones",
      path: "/vinculaciones",
      scopes: ["read:vinculaciones"],
    },
    {
      label: "Recaudaciones",
      value: "recaudaciones",
      path: "/recaudaciones",
      scopes: ["read:recaudaciones"],
    },
  ],
  userIsAuthenticated: true,
  userPicture: "https://i.pravatar.cc/300",
  logout: action("logout button clicked"),
  logoutReturnUrl: "/",
  loginWithRedirect: action("login button clicked"),
  userScopes: ["read:acreditaciones", "read:recaudaciones"],
};
