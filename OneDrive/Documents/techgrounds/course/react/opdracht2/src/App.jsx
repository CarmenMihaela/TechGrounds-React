import React, { useState } from "react";
import ClassComp from "./ClassComp"
import FunctionalComp from "./FunctionalComp"


function App() {
  const [message, setMessage] = useState("");
  console.log(message)


  function handleChange(event) {
    setMessage(event.target.value)

  }

  return (
    <div>
    <FunctionalComp 
    greeting = {message}
    function = {handleChange}
    value = {message}
    />
    <ClassComp 
    greeting = {message}
    function = {handleChange}
    value = {message}
    />
  </div>
  );

}


export default App;

