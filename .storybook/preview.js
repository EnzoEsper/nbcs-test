import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core";

import theme from "../src/themes/theme";

// Adds a global decorator to include the imported styles from the design system.
export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
