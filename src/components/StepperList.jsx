import { Step } from "./Step";

export const StepperList = ({ stepsCount, currentStep }) => {
  return (
    <ul className="stepper">
      {[...Array(stepsCount)].map((_, index) => (
        <Step
          key={index}
          number={index + 1}
          active={index === currentStep - 1}
        />
      ))}
    </ul>
  );
};
