// Generated with util/create-component.js
import React from "react";
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../assets/Theme';
import NotFound from "./NotFound";
import { NotFoundProps } from "./NotFound.types";


export default {
  title: "Paginas/NotFound",
  component: NotFound
} as Meta;


const Template: Story<NotFoundProps> = (args) => <ThemeProvider theme={theme}><NotFound {...args} /></ThemeProvider>;


export const NotFoundEjemplo = Template.bind({});
NotFoundEjemplo.args = { 
};

