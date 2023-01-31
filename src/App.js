import { useState } from "react"
import axios from "axios"
import { FaSearch } from "react-icons/fa"

function App() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

    //connect to the API
    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios
                .get(url)
                .then((response) => {
                    setData(response.data)
                    setErrorMsg('')
                })

                .catch((err) => {
                    setErrorMsg(err)
                })
            setLocation('')
        }
    }

    return (
        <>
            <div className="w-full min-h-screen bg-hero bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-[450px] rounded-full bg-black/20 backdrop-blur-[30px] mb-8">
                    <div className="relative flex p-2">
                        <input className="w-full rounded-3xl bg-transparent p-[15px] placeholder:text-white text-white outline-none" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" onKeyDown={searchLocation} />
                        <div className="bg-white/50 p-4 w-20 rounded-full flex items-center justify-center"><FaSearch /></div>
                    </div>
                </div>
                <div className="w-full max-w-[450px] h-[500px]">
                    {/* Error message if city is not found */}
                    {errorMsg ?
                        <div className='w-full h-full bg-black/20 text-white backdrop-blur-[30px] rounded-[30px] flex justify-center items-center'>Sorry, City not found.</div>
                        // display datas if city is found
                        : data.name ?
                            <div className='w-full h-full bg-black/20 text-white backdrop-blur-[30px] rounded-[30px] p-4'>
                                <div className="w-full flex flex-col items-center h-full">
                                    <div className="flex-1 flex items-center text-center">
                                        <h1 className="text-2xl lg:text-3xl">{data.name} ,  {data.sys.country}</h1>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center">
                                        <div>
                                            <h2 className="text-8xl">{data.main.temp.toFixed()}°C</h2>
                                        </div>
                                        <div>
                                            <p className="text-2xl">{data.weather[0].main}</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-around text-center flex-1 items-center">
                                        <div>
                                            <p>{data.main.feels_like.toFixed()}°C</p>
                                            <p>Feels like</p>
                                        </div>
                                        <div>
                                            <p>{data.main.humidity}%</p>
                                            <p>Humidity</p>
                                        </div>
                                        <div>
                                            <p>{data.wind.speed.toFixed()} Km/h</p>
                                            <p>Wind speed</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default App
