import React from "react";
import { Story, Meta } from "@storybook/react";
import BotonLogin from "./BotonLogin";
import { BotonLoginProps } from "./BotonLogin.types";
import { Paper } from "@material-ui/core";
import { color } from "../../tokens/colors.tokens";
import { action } from "@storybook/addon-actions";

export default {
  component: BotonLogin,
  title: "Componentes/BotonLogin",
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

const Template: Story<BotonLoginProps> = (args) => <BotonLogin {...args} />;

export const Default = Template.bind({});
Default.args = {
  loginWithRedirect: action("login button clicked"),
};
