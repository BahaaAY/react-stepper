import "./App.css";

function App() {
  return (
    <>
      <div className="stepper-container">
        <ul className="stepper">
          <li className="step step-active">1</li>
          <li className="step">2</li>
          <li className="step">3</li>
        </ul>
        <h1 className="message">Step 1</h1>
        <div className="buttons-container">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
