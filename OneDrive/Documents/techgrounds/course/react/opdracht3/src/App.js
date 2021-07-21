import { useState } from 'react'

function App() {
  const [names, setNames] = useState([])

  function handleInput() {
    let input = document.querySelector('input')
    setNames(prevState => { 
      let state = [...prevState]
      state.unshift(input.value)
      return state
  })
  }

  return (
    <div className="App">
    <input id = "input" />
    <button onClick = {handleInput} > Submit Name </button>
    {names.map(name => <div key={name} className = "" >{name} </div>)}
    </div>
  );
}

export default App;
