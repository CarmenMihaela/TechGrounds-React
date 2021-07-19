import React from "react";

function FunctionalComp (props) {

    return (
      <div>
        <h1>Hello Function {props.greeting}</h1>
        <input
        onChange = {props.function}
        type = "text"
        placeholder = "message"
        value = {props.value}
        />
      </div>
    );
  }

export default FunctionalComp;