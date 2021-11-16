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
DefaultNavBar.args = { logoUrl: "/productos" };
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
