// Generado con util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";

import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";
import { BrowserRouter } from "react-router-dom";

export default {
  component: NavBar,
  title: "Componentes/NavBar",
} as Meta;

const Template: Story<NavBarProps> = (args) => (
  <BrowserRouter>
    <NavBar {...args} />
  </BrowserRouter>
);

export const DefaultNavBar = Template.bind({});
DefaultNavBar.args = {
  logoUrl: "/productos",
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
      scopes: [],
    },
    {
      label: "Recaudaciones",
      value: "recaudaciones",
      path: "/recaudaciones",
      scopes: ["read:recaudaciones"],
    },
  ],
  userIsAuthenticated: true,
  userScopes: ["read:acreditaciones", "read:recaudaciones"],
};
// NavBarEjemplo.args = {
//   logout: "",
//   logoutURL: "",
//   perfilPath: "",
//   linkComponent: "",
//   tabs: [
//     { label: "Productos", value: "/productos", path: "/productos", scopes: [] },
//     {
//       label: "Solicitudes",
//       value: "/solicitudes",
//       path: "/solicitudes",
//       scopes: [],
//     },
//     { label: "Embozados", value: "/embozados", path: "/embozados", scopes: [] },
//   ],
// };
