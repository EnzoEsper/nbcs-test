import React from "react";
import { Story, Meta } from "@storybook/react";

import BotonPerfil from "./BotonPerfil";
import { BotonPerfilProps } from "./BotonPerfil.types";
import { BrowserRouter } from "react-router-dom";

export default {
  component: BotonPerfil,
  title: "Componentes/BotonPerfil",
} as Meta;

const Template: Story<BotonPerfilProps> = (args) => (
  <BrowserRouter>
    <BotonPerfil {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  auth0Logout: () => {},
  auth0LogoutReturnUrl: "dada",
  userPicture: "https://i.pravatar.cc/300",
};
