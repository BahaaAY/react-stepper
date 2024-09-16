export const Step = ({ number, active }) => {
  return <li className={`step ${active ? "step-active" : ""}`}>{number}</li>;
};
