import React from "react";
import { Story, Meta } from "@storybook/react";
import BotonLogout from "./BotonLogout";
import { BotonLogoutProps } from "./BotonLogout.types";
import { Paper } from "@material-ui/core";
import { color } from "../../tokens/colors.tokens";
import { action } from "@storybook/addon-actions";

export default {
  component: BotonLogout,
  title: "Componentes/BotonLogout",
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

const Template: Story<BotonLogoutProps> = (args) => <BotonLogout {...args} />;

export const Default = Template.bind({});
Default.args = {
  logout: action("logout button clicked"),
};
