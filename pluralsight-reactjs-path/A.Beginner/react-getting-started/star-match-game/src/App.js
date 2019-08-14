import React from "react";
import "./App.css";
import StarMatch from "./Components/StarMatch";

function App(props) {
  const { title } = props;
  return (
    <div className="App">
      <div className="header">{title}</div>
      <StarMatch />
    </div>
  );
}

export default App;
