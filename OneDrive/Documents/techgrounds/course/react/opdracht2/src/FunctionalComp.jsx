import React from "react";

function FunctionalComp(props) {
  
  function handleChange(event) { 
   props.onInputChange(event.target.value);}

    const value = props.value
    return (
        <div>
          <h1>Hello Class {props.value} </h1>
          <input type="text" 
          value={value}  
          placeholder = "message" 
          onChange={handleChange} />  
      </div>
    );
  }
export default FunctionalComp;;