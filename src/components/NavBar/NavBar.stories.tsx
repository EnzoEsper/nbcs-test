// Generado con util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../assets/Theme";

import NavBar from "./NavBar";
import { NavBarProps } from "./NavBar.types";

export default {
  title: "Componentes/NavBar",
  component: NavBar,
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const NavBarEjemplo = Template.bind({});
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
