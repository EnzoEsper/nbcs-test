// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import NotFound from "./NotFound";
import { NotFoundProps } from "./NotFound.types";

describe("Test Component", () => {
  let props: NotFoundProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<NotFound {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("NotFound");

    expect(component).toHaveTextContent("harvey was here");
  });
});
