import React from "react";
import PetsSharpIcon from "@material-ui/icons/PetsSharp";
import Button from "@material-ui/core/Button";

const Landing = (props) => {
  return (
    <React.Fragment>
      <h1 style={{ color: "green" }}>
        {" "}
        <PetsSharpIcon /> Survey Tiger
      </h1>
      <Button
        style={{
          background: "brown",
          size: "large",
          height: "50px",
          margin: "20px",
        }}
        onClick={() => props.update(1)}
      >
        Create Servey
      </Button>
      <br />
      <Button
        style={{
          background: "brown",
          size: "large",
          height: "50px",
          margin: "20px",
        }}
        onClick={() => props.update(2)}
      >
        Take Servey
      </Button>
    </React.Fragment>
  );
};
export default Landing;
