import React from "react";
import { Story, Meta } from "@storybook/react";
import BotonAuth from "./BotonAuth";
import { BotonAuthProps } from "./BotonAuth.types";
import { Paper } from "@material-ui/core";
import { color } from "../../tokens/colors.tokens";
import { action } from "@storybook/addon-actions";

export default {
  component: BotonAuth,
  title: "Componentes/BotonAuth",
  decorators: [
    (Story) => (
      <Paper
        variant="outlined"
        style={{
          backgroundColor: color.secondaryMain,
        }}
      >
        <div style={{ padding: "1em" }}>
          <Story />
        </div>
      </Paper>
    ),
  ],
} as Meta;

const Template: Story<BotonAuthProps> = (args) => <BotonAuth {...args} />;

export const Default = Template.bind({});
Default.args = {
  loginWithRedirect: action("login button clicked"),
  logout: action("logout button clicked"),
  userIsAuthenticated: true,
};
