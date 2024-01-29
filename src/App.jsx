import { useState } from 'react'
import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeLocation from './components/TimeLocation'
import { TemperatureDetails } from './components/TemperatureDetails'
import Forecast from './components/Forecast'
import getWeatherData from './services/weatherService'

function App() {
  const [count, setCount] = useState(0)

  const fetchWeather = async () =>{
    const data = await getWeatherData("weather", {q: "london"});
    console.log(data);
  }

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-slate-600
      to-slate-900 h-fit shadow-xl shadow-gray-400'
    >
      <TopButtons />
      <Inputs />
      <TimeLocation />
      <TemperatureDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="hourly forecast"/>
    </div>
  )
}

export default App
