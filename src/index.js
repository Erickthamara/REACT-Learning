import React from "react";
import ReactDOM from "react-dom/client";

const Greetings = () => {
  return (
    <h1 id="button" className="bbtt">
      Components in React are Functions.
    </h1>
  );
};
//export default Greetings;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings />);
