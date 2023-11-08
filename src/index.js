import React from "react";
import ReactDOM from "react-dom/client";

const Greetings = () => {
  return (
    <>
      <Name />
      <Motto />
    </>
  );
};

const Name = () => <h1>Erick</h1>;

const Motto = () => {
  return <p>My motto is doing the Bare Minimum </p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings />);
