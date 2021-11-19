// Generado con util/create-component.js
import React from "react";
import { Story, Meta } from "@storybook/react";
import StepperHorizontal from "./StepperHorizontal";
import { Step, StepperHorizontalProps } from "./StepperHorizontal.types";

export default {
  component: StepperHorizontal,
  title: "Navegacion/StepperHorizontal",
} as Meta;

const steps: Step[] = [
  {
    title: "Crear/Editar Soporte",
    description: "Cree o edite el soporte (borrador) a su antojo...",
  },
  {
    title: "Confirmar Soporte",
    description:
      "Seleccione el periodo/fecha de acreditacion y el tipo de proceso para Confirmar",
  },
  {
    title: "Resumen",
    description:
      "El soporte ha sido confirmado, podra ver aquí el estado del mismo con las ultimas actualizaciones a medida que sea procesado.",
  },
];

const Template: Story<StepperHorizontalProps> = (args) => (
  <StepperHorizontal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  steps,
};
