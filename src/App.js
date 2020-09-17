import React, { useState } from "react";
import "./App.css";
import CreateSurvey from "./CreateSurvey";
import TakeSurvey from "./TakeSurvey";
import Landing from "./Landing";

function App() {
  const [flag, setFlag] = useState(0);
  const update = (value) => {
    setFlag(value);
  };
  return (
    <div className="App">
      <div>
        {flag === 0 && <Landing update={update} />}
        {flag === 2 && <CreateSurvey />}
        {flag === 1 && <TakeSurvey />}
      </div>
    </div>
  );
}

export default App;
