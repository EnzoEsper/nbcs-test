import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./StepperHorizontal.styles";
import {
  Step as StepType,
  StepperHorizontalProps,
} from "./StepperHorizontal.types";

const HorizontalStepper: React.FC<StepperHorizontalProps> = ({ steps }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepDescription = (
    stepNumber: number,
    steps: StepType[]
  ): string | null => {
    if (steps[stepNumber].description === undefined) return null;

    return steps[stepNumber].description!;
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Pasos completados. Usuario redirigido a pantalla principal(?
            </Typography>
            <Button onClick={handleReset} variant="contained">
              Reiniciar stepper
            </Button>
          </div>
        ) : (
          <div>
            {getStepDescription(activeStep, steps) && (
              <Typography className={classes.instructions}>
                {getStepDescription(activeStep, steps)}
              </Typography>
            )}

            <div>
              {activeStep !== steps.length - 1 ? (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  VOLVER
                </Button>
              ) : null}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className={classes.nextButton}
              >
                {activeStep === steps.length - 1
                  ? "volver a pantalla inicial"
                  : activeStep === steps.length - 2
                  ? "Confirmar"
                  : "Siguiente"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalStepper;
