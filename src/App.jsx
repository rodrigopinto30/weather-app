import { useEffect, useState } from 'react'
import './App.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeLocation from './components/TimeLocation'
import { TemperatureDetails } from './components/TemperatureDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherService'

function App() {
  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () =>{
      await getFormattedWeatherData({...query, units})
        .then((data) => {
          setWeather(data)
        });
    }
  
    fetchWeather();
  }, [query, units]);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-slate-600
      to-slate-900 h-fit shadow-xl shadow-gray-400'
    >
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeLocation weather={weather}/>
          <TemperatureDetails weather={weather}/>
    
          <Forecast title="hourly forecast"/>
          <Forecast title="hourly forecast"/>
        </div>
      )}
    </div>
  )
}

export default App
