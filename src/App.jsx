import "./App.css";

const messages = ["Learn React", "Master React", "Build React Apps"];
import { StepperList } from "./components/StepperList";
function App() {
  let step = 1;
  return (
    <>
      <div className="stepper-container">
        <StepperList stepsCount={messages.length} currentStep={step} />
        <h1 className="message">{messages[step - 1]}</h1>
        <div className="buttons-container">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
