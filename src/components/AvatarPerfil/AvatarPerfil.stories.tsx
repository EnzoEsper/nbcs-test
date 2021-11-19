import React from "react";
import { Story, Meta } from "@storybook/react";
import AvatarPerfil from "./AvatarPerfil";
import { AvatarPerfilProps } from "./AvatarPerfil.types";

export default {
  component: AvatarPerfil,
  title: "Componentes/AvatarPerfil",
} as Meta;

const Template: Story<AvatarPerfilProps> = (args) => <AvatarPerfil {...args} />;

export const Default = Template.bind({});
Default.args = {
  userPicture: "https://i.pravatar.cc/300",
};
