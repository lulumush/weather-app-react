import { useState } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ec51e08222cd23e5141dbe0ca06927d&units=metric`
  
  //connect to the API
  const searchLocation = (e) =>{
    if(e.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }    
  }

  return (
    <div className="app">
      <div className="search-location">
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter Location" onKeyDown={searchLocation} />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
            {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()} Km/h</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
}
      </div>
      
    </div>
  )
}

export default App
