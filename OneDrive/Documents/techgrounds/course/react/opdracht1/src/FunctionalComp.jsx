import React, { useState } from "react";

function FunctionalComp () {
    const [message, setMessage] = useState("");

    function handleChange(event) {
      setMessage(event.target.value);
    }
  
    return (
      <div>
        <h1>Hello Function {message}</h1>
        <input
        onChange = {handleChange}
        type = "text"
        placeholder = "message"
        value = {message}
        />
      </div>
    );
  }

export default FunctionalComp;