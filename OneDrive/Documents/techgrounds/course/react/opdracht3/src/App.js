import React, { useState, useRef } from 'react';
import ItemList from './ItemList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [items, setItems] = useState([])
  const itemNameRef = useRef()

  function handleAddItem(e) {
    const name = itemNameRef.current.value
    setItems(prevItems => {
      let state = [{id: uuidv4(), name: name}, ...prevItems]
      console.log(state)
      return state
    })
  }

    return (
      <>
      <input ref={itemNameRef} type="text" />
      <button onClick={handleAddItem} >Submit</button>
      <ItemList items={items} />
      </>
    );

  }

export default App;
