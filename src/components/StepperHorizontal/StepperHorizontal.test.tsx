// Generado con util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import StepperHorizontal from "./StepperHorizontal";
import { StepperHorizontalProps } from "./StepperHorizontal.types";

describe("Test Component", () => {
  let props: StepperHorizontalProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<StepperHorizontal {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("StepperHorizontal");

    expect(component).toHaveTextContent("harvey was here");
  });
});
