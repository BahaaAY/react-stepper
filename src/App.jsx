import { useState } from "react";
import "./App.css";

const messages = ["Learn React", "Master React", "Build React Apps"];
import { StepperList } from "./components/StepperList";
function App() {
  const [step, setStep] = useState(1);
  const maxStep = messages.length;
  const minStep = 1;
  return (
    <>
      <div className="stepper-container">
        <StepperList stepsCount={messages.length} currentStep={step} />
        <h1 className="message">{messages[step - 1]}</h1>
        <div className="buttons-container">
          <button
            disabled={step === minStep} // Disable button if at the first step
            onClick={() =>
              setStep((prevStep) => Math.max(prevStep - 1, minStep))
            }
          >
            Previous
          </button>
          <button
            disabled={step === maxStep} // Disable button if at the last step
            onClick={() =>
              setStep((prevStep) => Math.min(prevStep + 1, maxStep))
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
