import React, {useState} from 'react'
import { Navbar, Offers, Products, Slider } from './components'
import "./App.scss";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
      <Navbar hover={hover} setHover={setHover}/>
      <div id={hover ? "overlay" : ""}>
        <Slider />
        <Products />
        <Offers />
      </div>
    </div>
  )
}

export default App