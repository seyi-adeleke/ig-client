import React, { useState } from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="App">
      <input onChange={handleInputChange} value={value} />
      <p className="App-intro">
        <button>GET LINK</button>
      </p>
    </div>
  )
}

export default App;
