import { useState } from "react"
import axios from "axios"

function App() {

  //const url=`https://api.openweathermap.org/data/2.5/weather?q=niort&appid=5ec51e08222cd23e5141dbe0ca06927d`
  
  
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>Ville</h1>
          </div>
          <div className="temp">
            <h2>Température</h2>
          </div>
          <div className="description">
            <p>Description temps</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Ressenti température</p>
          </div>
          <div className="humidity">
            <p>Humidité</p>
          </div>
          <div className="wind">
            <p>Vents</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
