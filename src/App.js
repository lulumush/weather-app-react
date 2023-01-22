import { useState } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ec51e08222cd23e5141dbe0ca06927d&units=metric`

  //connect to the API
  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        //console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <main>
      <div className="bg-hero bg-cover bg-center bg-no-repeat min-h-screen flex flex-col w-full">
        <div className="text-center p-[15px] w-full">
          <input className="py-[15px] px-[10px] rounded-3xl border border-white bg-white/25 text-white" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter Location" onKeyDown={searchLocation} />
        </div>
        <div className="flex-1 w-full max-w-6xl mx-auto px-[20px] flex flex-col justify-around text-white lg:px-[50px]">
          <div>
            <div>
              <h1>{data.name}</h1>
            </div>
            <div>
              {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            </div>
            <div className="relative right-[-90%] origin-[0_0] rotate-270">
              {data.weather ? <p className="text-xl lg:text-3xl font-bold">{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !== undefined &&
            <div className="flex flex-wrap text-center justify-evenly bg-white/20 rounded-xl p-[10px] mb-[50px] gap-x-[30px]">
              <div>
                {data.main ? <p className="font-bold">{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels like</p>
              </div>
              <div>
                {data.main ? <p className="font-bold">{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div>
                {data.wind ? <p className="font-bold">{data.wind.speed.toFixed()} Km/h</p> : null}
                <p>Wind speed</p>
              </div>
            </div>
          }
        </div>

      </div>
    </main>
  )
}

export default App
